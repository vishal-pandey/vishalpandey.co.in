// node --test voice/speech-text.test.mjs
import test from 'node:test';
import assert from 'node:assert/strict';
import { fixName, forSpeech, SentenceBuffer } from './speech-text.js';

test('fixName: the ear hears "visual", the site means Vishal', () => {
    assert.equal(fixName('Where does visual work right now?'), 'Where does Vishal work right now?');
    assert.equal(fixName("What are visual's skills?"), "What are Vishal's skills?");
    assert.equal(fixName('what projects has visuals built'), "what projects has Vishal's built");
    assert.equal(fixName('Bishal ka experience?'), 'Vishal ka experience?');
});

test('fixName: leaves genuine visual-something alone', () => {
    assert.equal(fixName('Does he do visual design?'), 'Does he do visual design?');
    assert.equal(fixName('visual effects and visual studio'), 'visual effects and visual studio');
});

test('forSpeech: markdown becomes plain words', () => {
    assert.equal(forSpeech('He is a **Technical Lead** at Lumiq. 🚀'), 'He is a Technical Lead at Lumiq.');
    assert.equal(forSpeech('See [his profile](https://hicard.in/vishal) or https://x.com'), 'See his profile or the link');
    assert.equal(forSpeech('## Skills\n- Node.js\n- *Python*'), 'Skills\nNode.js\nPython');
    assert.equal(forSpeech('Use `kubectl`.\n```\ncode\n```'), 'Use kubectl.');
});

test('SentenceBuffer: emits whole sentences as the stream arrives', () => {
    const b = new SentenceBuffer();
    const said = [];
    for (const delta of ['Vishal is a ', '**Technical Lead** at Lu', 'miq. He built two ', 'products from scratch. Want a ca', 'll?']) {
        said.push(...b.push(delta));
    }
    assert.deepEqual(said, ['Vishal is a Technical Lead at Lumiq.', 'He built two products from scratch.']);
    assert.deepEqual(b.flush(), ['Want a call?']);
});

test('SentenceBuffer: short bits wait for company, never loop', () => {
    const b = new SentenceBuffer();
    assert.deepEqual(b.push('Hi. Sure. '), []);
    assert.deepEqual(b.push('He leads engineering at Lumiq. '), ['Hi. Sure. He leads engineering at Lumiq.']);
    assert.deepEqual(b.push('e.g. '), []);
    assert.deepEqual(b.flush(), ['e.g.']);
});

test('SentenceBuffer: list items end a sentence even without a full stop', () => {
    const b = new SentenceBuffer();
    const said = b.push('His skills:\n- Node.js and Python\n- Kubernetes and ArgoCD\n');
    assert.deepEqual([...said, ...b.flush()], ['His skills:', 'Node.js and Python', 'Kubernetes and ArgoCD']);
});
