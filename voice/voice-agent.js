// Voice agent that runs in the browser.
//
//   mic -> voice activity detection -> Moonshine (speech to text, worker)
//       -> the chat manager the Homelab / Your Device toggle picks
//       -> tiny-voca (text to speech, worker) -> speakers
//
// Ears and voice always run on the visitor's device. With the toggle on "Your Device"
// the brain is WebLLM in the browser too, so nothing the visitor says leaves the
// machine. On "Homelab" only the transcribed text goes to the vishal_agent backend,
// exactly like a typed message (and it gets the same WhatsApp alert).
//
// Replaces the LiveKit voice call. Same UI: #voiceBtn, #inputContainer, #voiceStatusText,
// #voiceMuteBtn, #voiceEndBtn. Talks to script.js's globals (AIModeManager, createMessage,
// chatContent, welcomeScreen) and the managers' sendMessage(text, { onDelta }).
import { fixName, SentenceBuffer } from './speech-text.js';

const VOICE = 'M2';
const STT_RATE = 16000;
const CHUNK = 1024; // samples per worklet message, ~21 ms at 48 kHz

// Voice activity detection, on RMS loudness against an adaptive noise floor
const VAD = {
    startRatio: 3.5, startMin: 0.012,   // to start: louder than both
    keepRatio: 2.0, keepMin: 0.008,     // to stay "speaking": louder than both
    startChunks: 3,                     // ~60 ms above start before it counts
    endSilenceMs: 750,                  // this much quiet ends the turn
    minSpeechMs: 350,                   // shorter blips (coughs, clicks) are dropped
    maxSpeechMs: 15000,
    prerollMs: 300,                     // keep the start of the first word
    bargeMin: 0.05, bargeRatio: 6,      // talking over the agent: needs to be clearly loud
    bargeMs: 250,
    bargeKeepMs: 1500,                  // audio kept while the agent talks, to start an interruption from
};

const TAP = `
class VoiceTap extends AudioWorkletProcessor {
    constructor() { super(); this.buf = new Float32Array(${CHUNK}); this.n = 0; }
    process(inputs) {
        const ch = inputs[0] && inputs[0][0];
        if (ch) for (let i = 0; i < ch.length; i++) {
            this.buf[this.n++] = ch[i];
            if (this.n === ${CHUNK}) { this.port.postMessage(this.buf.slice()); this.n = 0; }
        }
        return true;
    }
}
registerProcessor('voice-tap', VoiceTap);`;

const rms = (a) => { let s = 0; for (let i = 0; i < a.length; i++) s += a[i] * a[i]; return Math.sqrt(s / a.length); };

function joinChunks(chunks) {
    const out = new Float32Array(chunks.reduce((n, c) => n + c.length, 0));
    let at = 0;
    for (const c of chunks) { out.set(c, at); at += c.length; }
    return out;
}

async function resample(samples, fromRate, toRate) {
    if (fromRate === toRate) return samples;
    const length = Math.max(1, Math.round(samples.length * toRate / fromRate));
    const offline = new OfflineAudioContext(1, length, toRate);
    const buffer = offline.createBuffer(1, samples.length, fromRate);
    buffer.copyToChannel(samples, 0);
    const src = offline.createBufferSource();
    src.buffer = buffer;
    src.connect(offline.destination);
    src.start();
    return (await offline.startRendering()).getChannelData(0);
}

const VoiceChatManager = {
    state: 'off',           // off | loading | listening | recording | transcribing | thinking | speaking
    muted: false,
    ctx: null, stream: null, source: null, tap: null, sink: null,
    stt: null, tts: null, models: null,
    sttWaiters: new Map(), nextId: 1,
    turn: 0, turnDone: true, pendingSpeech: 0, playing: new Set(), playhead: 0,
    elements: {},

    // VAD state
    noise: 0.01, loud: 0, quietMs: 0, speechMs: 0, recorded: [], preroll: [], bargeMs: 0,

    init() {
        this.elements = {
            voiceBtn: document.getElementById('voiceBtn'),
            inputContainer: document.getElementById('inputContainer'),
            voiceStatusText: document.getElementById('voiceStatusText'),
            voiceMuteBtn: document.getElementById('voiceMuteBtn'),
            voiceEndBtn: document.getElementById('voiceEndBtn'),
        };
        const { voiceBtn, voiceMuteBtn, voiceEndBtn, voiceStatusText } = this.elements;
        voiceBtn?.addEventListener('click', () => (this.state === 'off' ? this.start() : this.stop()));
        voiceMuteBtn?.addEventListener('click', () => this.toggleMute());
        voiceEndBtn?.addEventListener('click', () => this.stop());
        voiceStatusText?.addEventListener('click', () => { if (this.state === 'speaking') this.interrupt(); });
    },

    supported() {
        return !!(navigator.mediaDevices?.getUserMedia && window.AudioWorkletNode && window.OfflineAudioContext && window.Worker);
    },

    brain() {
        const manager = AIModeManager.getActiveManager();
        return manager === LocalChatManager ? 'device' : 'homelab';
    },

    // ---------------------------------------------------------------- lifecycle
    async start() {
        if (this.state !== 'off') return;
        if (!this.supported()) {
            this.system('🎙️ Voice needs a recent Chrome, Edge, Safari or Firefox with microphone access.');
            return;
        }
        // Created inside the click so browsers let it play sound
        this.ctx = new AudioContext();
        this.setState('loading', 'Starting microphone…');
        try {
            this.stream = await navigator.mediaDevices.getUserMedia({
                audio: { echoCancellation: true, noiseSuppression: true, autoGainControl: true, channelCount: 1 },
            });
            await this.ctx.resume();
            await this.ctx.audioWorklet.addModule(URL.createObjectURL(new Blob([TAP], { type: 'text/javascript' })));
            this.source = this.ctx.createMediaStreamSource(this.stream);
            this.tap = new AudioWorkletNode(this.ctx, 'voice-tap');
            this.sink = this.ctx.createGain();
            this.sink.gain.value = 0; // the tap must be pulled by the graph, but we don't want to hear ourselves
            this.source.connect(this.tap).connect(this.sink).connect(this.ctx.destination);
            this.tap.port.onmessage = ({ data }) => this.onFrame(data);

            await this.loadModels();
            if (this.state === 'off') return; // ended while loading

            if (welcomeScreen.style.display !== 'none') welcomeScreen.style.display = 'none';
            const where = this.brain() === 'device'
                ? 'Everything runs in your browser: listening, thinking and speaking. Nothing you say leaves this device. 🔒'
                : "Listening and speaking run in your browser; only the transcribed text goes to Vishal's homelab agent.";
            this.system(`🎙️ Voice on. ${where} Speak naturally; tap the status line to interrupt.`);
            this.resetVad();
            this.setState('listening');
        } catch (error) {
            console.error('🎙️ voice start failed:', error);
            const reason = error?.name === 'NotAllowedError' ? 'Microphone permission was denied.' : (error?.message || String(error));
            this.teardown();
            this.system(`❌ Couldn't start voice: ${reason}`);
        }
    },

    stop() {
        if (this.state === 'off') return;
        this.teardown();
        this.system('🎙️ Voice off.');
    },

    teardown() {
        this.turn++;
        this.stopSpeaking();
        this.stream?.getTracks().forEach((t) => t.stop());
        try { this.source?.disconnect(); this.tap?.disconnect(); this.sink?.disconnect(); } catch (_) {}
        this.ctx?.close().catch(() => {});
        this.ctx = this.stream = this.source = this.tap = this.sink = null;
        this.muted = false;
        this.setState('off');
    },

    // Models stay loaded in their workers across calls; the browser caches the files.
    loadModels() {
        if (this.models) return this.models;
        const base = new URL('./', import.meta.url);
        this.stt = new Worker(new URL('stt-worker.js', base), { type: 'module' });
        this.tts = new Worker(new URL('tts-worker.js', base), { type: 'module' });
        this.stt.onmessage = ({ data }) => this.onStt(data);
        this.tts.onmessage = ({ data }) => this.onTts(data);

        let sttDone = false, ttsDone = false, pct = 0;
        const show = () => {
            if (this.state === 'loading') this.status(`Loading voice models on your device… ${pct}%`);
        };
        const ready = (worker, flag) => new Promise((resolve, reject) => {
            const listener = ({ data }) => {
                if (data.type === 'progress' && data.total) { pct = Math.round(100 * data.loaded / data.total); show(); }
                if (data.type === 'ready') { worker.removeEventListener('message', listener); flag(); resolve(); }
                if (data.type === 'error' && data.id === undefined) { worker.removeEventListener('message', listener); reject(new Error(data.error)); }
            };
            worker.addEventListener('message', listener);
            worker.postMessage({ type: 'load' });
        });
        show();
        this.models = Promise.all([ready(this.stt, () => (sttDone = true)), ready(this.tts, () => (ttsDone = true))])
            .catch((error) => { this.models = null; this.stt?.terminate(); this.tts?.terminate(); throw error; });
        return this.models;
    },

    // ---------------------------------------------------------------- hearing
    resetVad() {
        this.loud = 0; this.quietMs = 0; this.speechMs = 0; this.recorded = []; this.preroll = []; this.bargeMs = 0;
    },

    onFrame(frame) {
        if (!this.ctx || this.muted) return;
        const level = rms(frame);
        const ms = (frame.length / this.ctx.sampleRate) * 1000;

        if (this.state === 'speaking') {
            // Talking over the agent: only clearly loud, sustained speech counts (echo cancellation
            // removes most of our own voice, but not all of it). The counter leaks instead of
            // resetting, so the small gaps between words don't restart it, and the last
            // 1.5 s are kept so the interrupting question starts at its first word.
            this.recorded.push(frame);
            while (this.recorded.length * ms > VAD.bargeKeepMs) this.recorded.shift();
            const loud = level > Math.max(VAD.bargeMin, this.noise * VAD.bargeRatio);
            this.bargeMs = loud ? this.bargeMs + ms : Math.max(0, this.bargeMs - ms / 2);
            if (this.bargeMs >= VAD.bargeMs) {
                const keep = this.recorded;
                this.interrupt();
                this.recorded = keep;
                this.speechMs = keep.length * ms;
                this.quietMs = 0;
                this.setState('recording');
            }
            return;
        }

        if (this.state === 'listening') {
            this.preroll.push(frame);
            while (this.preroll.length * ms > VAD.prerollMs) this.preroll.shift();
            if (level > Math.max(VAD.startMin, this.noise * VAD.startRatio)) {
                if (++this.loud >= VAD.startChunks) {
                    this.recorded = [...this.preroll];
                    this.speechMs = this.loud * ms; this.quietMs = 0;
                    this.setState('recording');
                }
            } else {
                this.loud = 0;
                this.noise = Math.min(0.05, Math.max(0.002, this.noise * 0.95 + level * 0.05));
            }
            return;
        }

        if (this.state === 'recording') {
            this.recorded.push(frame);
            this.speechMs += ms;
            this.quietMs = level > Math.max(VAD.keepMin, this.noise * VAD.keepRatio) ? 0 : this.quietMs + ms;
            if (this.quietMs >= VAD.endSilenceMs || this.speechMs >= VAD.maxSpeechMs) {
                const audio = joinChunks(this.recorded);
                const spoke = this.speechMs - this.quietMs;
                this.resetVad();
                if (spoke < VAD.minSpeechMs) { this.setState('listening'); return; }
                this.hear(audio, this.ctx.sampleRate);
            }
        }
    },

    async hear(audio, rate) {
        this.setState('transcribing');
        const id = this.nextId++;
        const pcm = await resample(audio, rate, STT_RATE);
        const text = await new Promise((resolve) => {
            this.sttWaiters.set(id, resolve);
            this.stt.postMessage({ type: 'transcribe', id, audio: pcm }, [pcm.buffer]);
        });
        if (this.state !== 'transcribing') return; // muted or stopped meanwhile
        const question = fixName(text);
        if (!/[a-z0-9]{2,}/i.test(question)) { this.setState('listening'); return; }
        this.ask(question);
    },

    onStt(data) {
        if (data.type !== 'text') return;
        const waiter = this.sttWaiters.get(data.id);
        this.sttWaiters.delete(data.id);
        if (data.error) console.warn('🎙️ transcription failed:', data.error);
        waiter?.(data.text || '');
    },

    // ---------------------------------------------------------------- thinking
    async ask(question) {
        const turn = ++this.turn;
        this.turnDone = false;
        this.pendingSpeech = 0;
        this.playhead = 0;
        this.setState('thinking');
        if (welcomeScreen.style.display !== 'none') welcomeScreen.style.display = 'none';

        const sentences = new SentenceBuffer();
        const manager = AIModeManager.getActiveManager();
        let reply = null;
        try {
            reply = await manager.sendMessage(question, {
                onDelta: (delta) => { if (turn === this.turn) sentences.push(delta).forEach((s) => this.say(s, turn)); },
            });
        } catch (error) {
            console.error('🎙️ reply failed:', error);
        }
        if (turn !== this.turn) return;
        sentences.flush().forEach((s) => this.say(s, turn));
        if (reply === null && this.pendingSpeech === 0) this.say("Sorry, I couldn't get an answer just now.", turn);
        this.turnDone = true;
        this.maybeListen();
    },

    // ---------------------------------------------------------------- speaking
    say(text, turn) {
        this.pendingSpeech++;
        this.tts.postMessage({ type: 'speak', id: turn, text, voice: VOICE });
    },

    onTts(data) {
        if (data.id === undefined || data.id !== this.turn || !this.ctx) {
            return; // a stale turn (interrupted) or the load handshake
        }
        if (data.type === 'audio') {
            const buffer = this.ctx.createBuffer(1, data.audio.length, data.rate);
            buffer.copyToChannel(data.audio, 0);
            const src = this.ctx.createBufferSource();
            src.buffer = buffer;
            src.connect(this.ctx.destination);
            this.playhead = Math.max(this.playhead, this.ctx.currentTime + 0.05);
            src.start(this.playhead);
            this.playhead += buffer.duration;
            this.playing.add(src);
            src.onended = () => { this.playing.delete(src); this.maybeListen(); };
            if (this.state === 'thinking') this.setState('speaking');
        } else if (data.type === 'done') {
            this.pendingSpeech = Math.max(0, this.pendingSpeech - 1);
            this.maybeListen();
        } else if (data.type === 'error') {
            console.warn('🎙️ could not speak a sentence:', data.error);
        }
    },

    maybeListen() {
        if (this.turnDone && this.pendingSpeech === 0 && this.playing.size === 0
            && (this.state === 'speaking' || this.state === 'thinking')) {
            this.resetVad();
            this.setState('listening');
        }
    },

    stopSpeaking() {
        for (const src of this.playing) { try { src.stop(); } catch (_) {} }
        this.playing.clear();
        this.pendingSpeech = 0;
        this.playhead = 0;
    },

    interrupt() {
        this.turn++;            // drops audio still arriving for the old turn
        this.turnDone = true;
        this.stopSpeaking();
        this.resetVad();
        this.setState('listening');
    },

    toggleMute() {
        if (this.state === 'off' || this.state === 'loading') return;
        this.muted = !this.muted;
        this.stream?.getAudioTracks().forEach((t) => (t.enabled = !this.muted));
        if (this.muted && this.state === 'recording') { this.resetVad(); this.state = 'listening'; }
        this.setState(this.state);
    },

    // ---------------------------------------------------------------- UI
    system(text) {
        chatContent.appendChild(createMessage('System', text, false));
        const chatMessages = document.getElementById('chatMessages');
        chatMessages.scrollTop = chatMessages.scrollHeight;
    },

    status(text) {
        if (this.elements.voiceStatusText) this.elements.voiceStatusText.textContent = text;
    },

    setState(state, text) {
        this.state = state;
        const { voiceBtn, inputContainer, voiceMuteBtn } = this.elements;
        const on = state !== 'off';
        voiceBtn?.classList.toggle('connecting', state === 'loading');
        voiceBtn?.classList.toggle('active', on && state !== 'loading');
        inputContainer?.classList.toggle('voice-active', on);
        inputContainer?.classList.toggle('speaking', state === 'speaking');
        inputContainer?.classList.toggle('hearing', state === 'recording');
        inputContainer?.classList.toggle('muted', on && this.muted);
        if (voiceMuteBtn) {
            voiceMuteBtn.classList.toggle('muted', this.muted);
            voiceMuteBtn.title = this.muted ? 'Unmute microphone' : 'Mute microphone';
        }
        if (!on) return;
        const device = this.brain() === 'device';
        const labels = {
            loading: text || 'Loading voice models on your device…',
            listening: this.muted ? 'Muted' : 'Listening… speak anytime',
            recording: 'Hearing you…',
            transcribing: 'Transcribing on your device…',
            thinking: device ? 'Thinking on your device…' : 'Asking the homelab agent…',
            speaking: 'Speaking… tap here to interrupt',
        };
        this.status(this.muted && state === 'listening' ? 'Muted' : labels[state]);
    },
};

window.VoiceChatManager = VoiceChatManager;
