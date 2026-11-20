// Speech to text in the browser: Moonshine tiny (English, ~28 MB quantized) through
// transformers.js in a module worker. Audio never leaves the device. Messages:
//   { type: 'load' }                    -> { type: 'progress', loaded, total }* then { type: 'ready' } | { type: 'error' }
//   { type: 'transcribe', id, audio }   -> { type: 'text', id, text }   (audio: Float32Array, 16 kHz mono)
import { pipeline } from 'https://cdn.jsdelivr.net/npm/@huggingface/transformers@4.3.2/dist/transformers.min.js';

const MODEL = 'onnx-community/moonshine-tiny-ONNX';
const REVISION = 'a6da1241cd305dcd64eab1edbd615f2bb9aabb95';

let loading = null;
const files = new Map(); // file -> { loaded, total }, for one overall progress number

function load() {
    return pipeline('automatic-speech-recognition', MODEL, {
        revision: REVISION,
        dtype: 'q8',
        device: 'wasm',
        progress_callback: (p) => {
            if (p.status !== 'progress' || !p.total) return;
            files.set(p.file, { loaded: p.loaded, total: p.total });
            let loaded = 0, total = 0;
            for (const f of files.values()) { loaded += f.loaded; total += f.total; }
            self.postMessage({ type: 'progress', loaded, total });
        },
    });
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

    if (data.type === 'transcribe') {
        try {
            loading ||= load();
            const asr = await loading;
            const out = await asr(data.audio);
            self.postMessage({ type: 'text', id: data.id, text: (out.text || '').trim() });
        } catch (error) {
            self.postMessage({ type: 'text', id: data.id, text: '', error: String(error.message || error) });
        }
    }
};
