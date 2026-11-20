# In-browser voice agent

The mic button next to the chat input. Ears and voice always run on the visitor's
device; the brain follows the **Homelab / Your Device** toggle.

```
mic ─► AudioWorklet tap ─► VAD (voice-agent.js) ─► Moonshine tiny (stt-worker.js)
                                                         │ transcript (fixName)
                                                         ▼
                 AIModeManager.getActiveManager().sendMessage(text, { onDelta })
                   Homelab:     ServerChatManager → vishal_agent /run_sse
                   Your Device: LocalChatManager  → WebLLM (Llama 3.2 3B, WebGPU)
                                                         │ streamed deltas
                                                         ▼
               SentenceBuffer (speech-text.js) ─► tiny-voca (tts-worker.js) ─► speakers
```

| | Homelab | Your Device |
|---|---|---|
| Speech to text | browser | browser |
| Answer | vishal_agent on the homelab (same as typed chat, same WhatsApp alert) | WebLLM in the browser |
| Text to speech | browser | browser |
| What leaves the device | the transcribed text | nothing (only model files are downloaded) |

On phones `getActiveManager()` always picks the homelab, as for typed chat.

## Files

- `voice-agent.js`: the controller (module). Registers `window.VoiceChatManager`; `script.js` calls `init()` on load.
  States: off → loading → listening → recording → transcribing → thinking → speaking → listening.
- `stt-worker.js`: Moonshine tiny, q8, ~28 MB, via transformers.js 4.3.2 (WASM). Pinned model revision.
- `tts-worker.js`: tiny-voca, 8 MB GGUF, plain JS. Pinned model revision. Voice `M2`.
- `speech-text.js`: `fixName` (Moonshine hears "Vishal" as "visual"), `forSpeech` (markdown → words),
  `SentenceBuffer` (speak each sentence as soon as it is complete).
- `tiny-voca/`: the vendored runtime, see its README.

## Tuning

`VAD` at the top of `voice-agent.js`: start/keep thresholds against an adaptive noise floor,
750 ms of silence ends a turn, 300 ms pre-roll, barge-in needs ~250 ms of clearly loud speech and
starts from the last 1.5 s so an interrupting question keeps its first word.

## Testing

- `node --test voice/speech-text.test.mjs`
- End to end without a microphone: generate a question with tiny-voca
  (`node say.mjs "What does Vishal do?" --output q.wav` in tiny-voca's `js/`), serve the site,
  replace `navigator.mediaDevices.getUserMedia` with a `MediaStreamAudioDestinationNode` that
  plays the WAV, click the mic and watch `VoiceChatManager.state`. Your Device mode needs a
  browser with WebGPU (a headed Chrome, not headless).

## Caching

Cloudflare lets browsers keep JS for 4 hours. When a file here changes, bump the `?v=` on
`voice/voice-agent.js` in `index.html` (and the matching `sw.js` entry). The workers and helpers
are imported without a version, so a change to them also needs that bump, plus a cache-busting
query on their import/`new URL()` in `voice-agent.js`.
