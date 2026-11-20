# tiny-voca (vendored)

Browser runtime of [n4ze3m/tiny-voca](https://github.com/n4ze3m/tiny-voca), a 4.5M-parameter
English text-to-speech model, and its phonemizer port (`dizione/`). Plain JavaScript, no
dependencies. Apache-2.0 (see LICENSE).

- Code copied unmodified from `js/` at commit `903f940120a939f3fe8ee92a38096c2aa3ee59b3`.
- Weights: `gguf/tiny-voca-js.gguf` (8 MB) fetched by `voice/tts-worker.js` from Hugging Face
  at the pinned model revision `5fe06641d0afecb3c04bc9faca2cf64d9b2b1600`.

To update: copy the new `js/` files, bump both pins together, and run the round trip in
`voice/README.md`.
