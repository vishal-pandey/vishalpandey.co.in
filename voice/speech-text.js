// Text plumbing for the voice agent: what the ear heard -> what the agent reads,
// and what the agent wrote (markdown, streamed) -> sentences the voice can say.

// Moonshine hears "Vishal" as "visual" (and a few cousins). On a site about Vishal
// that's almost always his name, unless it's clearly about visuals.
const NAME = /\b(visual|vishaal|vishel|bishal|vishall)('s|s)?\b(?!\s+(design|designer|designs|effects?|studio|arts?|identity|style|hierarchy|regression|basic|aids?)\b)/gi;

export function fixName(text) {
    return (text || '').replace(NAME, (_, _word, tail) => 'Vishal' + (tail ? "'s" : ''));
}

// Markdown -> plain speakable text
export function forSpeech(markdown) {
    return (markdown || '')
        .replace(/```[\s\S]*?```/g, ' ')                       // code blocks are not for reading aloud
        .replace(/`([^`]*)`/g, '$1')
        .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')                  // images
        .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')                // links -> their text
        .replace(/https?:\/\/\S+/g, 'the link')
        .replace(/^\s{0,3}#{1,6}\s+/gm, '')                     // headings
        .replace(/^\s*[-*+]\s+/gm, '')                          // bullets
        .replace(/^\s*\d+[.)]\s+/gm, '')                        // numbered lists
        .replace(/(\*\*|__|\*|_|~~)(?=\S)([\s\S]*?\S)\1/g, '$2') // bold / italics / strike
        .replace(/\p{Extended_Pictographic}(️|‍\p{Extended_Pictographic})*/gu, '')
        .replace(/[ \t]+/g, ' ')
        .replace(/ +([,.!?;:])/g, '$1')
        .trim();
}

// Streamed deltas in, whole sentences out, so speech can start before the reply ends.
// A list item or paragraph break also ends a sentence (agents often skip the full stop).
export class SentenceBuffer {
    constructor(minLength = 18) {
        this.text = '';
        this.minLength = minLength;
    }

    push(delta) {
        this.text += delta || '';
        const out = [];
        // A boundary: sentence punctuation followed by whitespace, a blank line, or a new list item
        const boundary = /[.!?…]["')\]]?(?=\s)|\n\s*\n|\n(?=\s*(?:[-*+]|\d+[.)])\s)/g;
        let match;
        while ((match = boundary.exec(this.text))) {
            const end = match.index + match[0].length;
            const candidate = this.text.slice(0, end);
            const isBreak = match[0].includes('\n');
            // Too short to say on its own ("Hi.", "e.g.", "Dr."): keep it and look for the next boundary
            if (!isBreak && forSpeech(candidate).length < this.minLength) continue;
            const spoken = forSpeech(candidate);
            if (spoken) out.push(spoken);
            this.text = this.text.slice(end).replace(/^\s+/, '');
            boundary.lastIndex = 0;
        }
        return out;
    }

    flush() {
        const spoken = forSpeech(this.text);
        this.text = '';
        return spoken ? [spoken] : [];
    }
}
