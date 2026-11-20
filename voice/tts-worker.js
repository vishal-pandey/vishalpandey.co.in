// Text to speech in the browser: tiny-voca (4.5M params, 24 kHz) in a module worker,
// so synthesis never blocks the page. Messages:
//   { type: 'load' }                          -> { type: 'ready' } | { type: 'error' }
//   { type: 'speak', id, text, voice }        -> { type: 'audio', id, audio, rate }* then { type: 'done', id }
import { readGGUF, TinyVoca } from './tiny-voca/tiny-voca.js';
import { fromGGUF } from './tiny-voca/dizione/engine.js';
import { utterancesOf, limited } from './tiny-voca/text.js';

const MODEL_URL = 'https://huggingface.co/n4ze3m/tiny-voca/resolve/5fe06641d0afecb3c04bc9faca2cf64d9b2b1600/gguf/tiny-voca-js.gguf';

let loading = null;

async function load() {
    const response = await fetch(MODEL_URL);
    if (!response.ok) throw new Error(`voice model download failed: ${response.status}`);
    const file = readGGUF(await response.arrayBuffer());
    const voca = new TinyVoca(file);
    const phonemizer = await fromGGUF(file);
    return { voca, phonemizer };
}

self.onmessage = async ({ data }) => {
    if (data.type === 'load') {
        loading ||= load();
        try {
            await loading;
            self.postMessage({ type: 'ready' });
        } catch (error) {
            loading = null;
            self.postMessage({ type: 'error', error: String(error.message || error) });
        }
        return;
    }

    if (data.type === 'speak') {
        try {
            loading ||= load();
            const { voca, phonemizer } = await loading;
            const parts = utterancesOf(data.text, phonemizer, voca.config.max_tokens - 12);
            parts.forEach(({ ids, stress }, seed) => {
                const audio = limited(voca.synthesize(ids, stress, { voice: data.voice || 'M2', seed }).audio);
                self.postMessage({ type: 'audio', id: data.id, audio, rate: voca.config.sample_rate }, [audio.buffer]);
            });
        } catch (error) {
            // An unspeakable sentence must not stall the conversation: report it and move on
            self.postMessage({ type: 'error', id: data.id, error: String(error.message || error) });
        }
        self.postMessage({ type: 'done', id: data.id });
    }
};
