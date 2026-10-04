# Design System — Clay (vishalpandey.ai)

> **Current visual layer: Clay (2026-10-04).** `clay.css` loads after `styles.css` and
> overrides the Engineer's Redline look below. Where this section and the Redline
> sections disagree (color, type, surfaces, background), **this section wins**.
> Redline still governs everything Clay doesn't touch: layout, chat structure,
> motion/GSAP choreography, copy voice, the one-red-pen-mark rule.

## Clay — the current look
- **Reference:** pastel 3D clay UI icons — thick matte slabs sitting on a table.
- **The slab recipe (one rule in clay.css, per-element `--fill` + `--depth`):**
  - rolled rim: `inset 0 2px 1px` white highlight on the top edge + soft inner shading at the bottom of the face
  - side wall: `0 var(--depth) 0 var(--side)`, where `--side` is the element's own fill darkened in oklch (`oklch(from var(--fill) calc(l - 0.09) calc(c + 0.025) h)`) — never a grey or a fixed tint
  - contact shadow: tight + tucked under (negative spread), plus a faint wide ambient. No sideways offset.
  - depth: ~3px tags, 4–5px buttons/chips, 7–8px cards, 10px sidebar
- **Interaction:** hover lifts (depth +2, translateY -2px); press sinks (depth 1px, translateY +4px). No rotation wiggle.
- **Wells (sunken):** the chat input track, telemetry, code/quote blocks — inset shadow, no side wall.
- **Background:** flat pastel wash `linear-gradient(160deg, #FCEFE6, #F6E4EC, #E8E3F6)`. No grid, no blobs, no scanlines.
- **Palette (light):** cream `#FBF6F0` (default slab), periwinkle `#9DA8E8`, deep periwinkle `#6F7EDC` (send/primary), mint `#95D8C2`, pink `#F1A3B0`, lavender `#C2B2EE`, butter `#F5DA98`. Ink `#352F52`, muted `#6F6790`, red pen `#E05A62`.
- **Dark:** same slabs on plum (`#241E33`), deeper pastels, black-based contact shadows.
- **Text on pastel fills is always dark ink** (`--c-ink-on-fill`). White on pastel fails contrast — don't.
- **Motifs:** sidebar and fact card get a periwinkle "window" title bar; the fact card's has pink/butter/mint dots. Chips: butter / mint / periwinkle / pink (Roast him = pink).
- **Type:** one rounded voice — **Nunito** (400–900) for display, body, labels and AI replies. Mono, Fraunces, General Sans and Shantell Sans are retired visually (their tokens all resolve to Nunito). Red-pen notes keep their color and tilt, in Nunito 800.
- **Loading (TODO):** Nunito currently loads from Google Fonts; self-host woff2 in `assets/` and precache in sw.js to match the PWA ethos.
- **Gotchas:** `.chat-content` (and `.message` on mobile) clip overflow, so slab shadows need padding room inside them; links inside messages are colored by `.message-content a`, so slab-style links need higher-specificity overrides.

---

## Engineer's Redline (previous layer — still governs layout, motion and voice)

> A senior engineer's drafting pad that talks back. The document carries competence;
> the red pen carries the jokes — in that order.

## Product Context
- **What this is:** Personal portfolio of Vishal Pandey, built as a ChatGPT-style AI chat interface. Visitors chat with an AI that knows his career, powered by three self-built backends (M1 homelab LLM, in-browser WebLLM, LiveKit voice agent).
- **Who it's for:** Recruiters, fellow engineers, potential collaborators.
- **Space/industry:** Developer portfolios. Peers converge on dark-navy minimalism (brittanychiang.com) or playful-over-disciplined bases (joshwcomeau.com, cassie.codes, antfu.me).
- **Project type:** Static chat web app (vanilla HTML/CSS/JS, PWA).
- **The memorable thing (north star):** "Serious + playful — a strong engineer who doesn't take himself too seriously. Competence reads FIRST, humor second."

## Aesthetic Direction
- **Direction:** Engineer's Redline — a working document (graph paper, ink, monospace) marked up by a senior engineer's red pen.
- **Decoration level:** Intentional — faint millimeter grid background; hand-drawn marks demoted from structure to annotation.
- **Mood:** Calm competence with one human twitch. Crisp product-grade surfaces; personality lives in rationed red-pen marginalia and copy.
- **The cardinal rule:** Hand-drawn appears ONLY as annotation (an underline, a circled word, an arrow, a margin note) — never as container borders, never as decoration. **Max one hand-drawn mark per viewport, always pointing at something specific.**
- **Why (context):** The previous cream + wobbly-borders + Comic-font system read as "wedding card." The fix is the material metaphor: same hand-drawn energy, different paper — stationery → drafting pad.
- **Reference sites:** brittanychiang.com (category baseline), joshwcomeau.com (playful-over-disciplined), cassie.codes (handwriting as garnish), antfu.me (dot-grid engineering paper).

## Typography — four voices, strict roles
- **Display/Hero:** Fraunces (500–700, `opsz` auto) — warm authority without bridal softness; the variable "wonk" axis is the playfulness dial. Hero + section titles only.
- **Body/UI (the human voice):** General Sans (400–600) — crisp, not Inter. Nav, buttons, visitor chat messages, long-form copy.
- **Machine voice:** JetBrains Mono (400–700) — the `~/vishal` logo, tech labels/tags, telemetry, timestamps, and AI chat replies (dual-voice chat: AI speaks mono, visitor speaks sans). Keep AI body text ≥15px, line-height 1.7, max 65ch.
- **Marginalia (the red pen):** Shantell Sans (400–500) — hand-style annotations and easter-egg notes ONLY. **Never sets body copy. Ever.** (Replaces Comic Neue everywhere.)
- **Data/Tables:** JetBrains Mono with `font-variant-numeric: tabular-nums`.
- **Loading:** Self-host woff2 in `assets/` (matches PWA/service-worker setup and self-hosted ethos). Fraunces + JetBrains Mono + Shantell Sans from Google Fonts (OFL); General Sans from Fontshare (free license). Subset to latin, `font-display: swap`, precache in sw.js.
- **Scale:** 12 / 13.5 / 15 (body) / 18 / 22 / 28 / 40 / 52px (hero). Mono runs one step smaller than sans at the same role.

## Color
- **Approach:** Restrained — neutrals do the work; three accents with strict jobs.

### Light (default) — "drafting pad"
- **Paper (bg):** `#F3F2ED` with millimeter grid hairlines `#DFE3E6` (24px cell, 1px lines)
- **Surface:** `#FFFFFF` (cards, bubbles, input) — border `#E2E0D8`, strong border `#C9C6BB`
- **India Ink (text):** `#16130E`
- **Graphite (muted):** `#6F6A5E`
- **Ultramarine (interactive):** `#2B3FD8` — links, primary buttons, focus rings, active nav. Soft fill: `rgba(43,63,216,.08)`
- **Red Pen (annotation):** `#D93A1D` — hand-drawn marks, marginalia, destructive actions ("Roast him"). RATIONED BRUTALLY.
- **Phosphor (status):** `#0F7B5F` — online dots, uptime, success states.

### Dark — "CRT terminal"
- **Bg:** `#0A0D0E`, phosphor grid `rgba(52,211,153,.10)` · **Surface:** `#171B1F`, borders `#262B30` / `#3A4046`
- **CRT glass:** fixed radial phosphor glow from the top of the viewport + subtle scanline overlay (`body::after`, 3px pitch, ~7% effective darkening). Hacker energy without Matrix-rain cliché; light mode stays the drafting pad.
- **Phosphor voice (dark):** machine-voice text goes green — bright `#34D399` for status/indices/log headers/AI bold, dim `#7FCDB0` for telemetry/taglines/labels, soft `#8FE3C4` for AI reply body. Blinking `▊` cursor on the status badge (reduced-motion: solid). Input caret phosphor.
- **Boot sequence (dark, load):** terminal boot log types over a black overlay before the welcome timeline (`runBoot` in motion.js) — "[ok] mounting ~/vishal … [warn] modesty module not found". ~1.6s, click-to-skip, reduced-motion/deep-links/light skip it, 2.2s inline failsafe uncovers content if scripts die.
- **Text:** `#E8E6E1` · **Muted:** `#8A8F94`
- **Ultramarine → `#7A8CFF`**, **Red pen → `#FF6B4A`**, **Phosphor → `#34D399`** (desaturate/brighten for dark)
- **Semantic:** success = Phosphor, error/destructive = Red Pen, info = Ultramarine, warning `#B45309` (light) / `#F59E0B` (dark).
- **Switching:** `data-theme="light|dark"` on `<html>`. An inline head script resolves it before first paint (localStorage `theme` > system preference — no flash of wrong theme). Header toggle (◐/◑) flips and persists; system changes are followed live only until the visitor explicitly chooses. All `theme-color` metas sync on toggle. Dark styles live under `[data-theme="dark"]` selectors, never bare media queries.

## Spacing
- **Base unit:** 8px · **Density:** comfortable
- **Scale:** 2xs(2) xs(4) sm(8) md(16) lg(24) xl(32) 2xl(48) 3xl(64)

## Layout
- **Approach:** Keep the existing chat-app structure (sidebar + chat + input bar) — it IS the concept. Surfaces become product-grade: clean cards, 1px borders, subtle shadow `0 1px 2px rgba(22,19,14,.05), 0 4px 16px rgba(22,19,14,.05)`.
- **Sidebar:** ~240px; mono logo `➜ ~/vishal`; nav items with mono index numbers (00–06); optional telemetry block pinned to footer.
- **Max content width (chat column):** 760px; AI message text max 65ch.
- **Border radius:** sm 6px (tags), md 9px (buttons), lg 12–14px (cards, input), full 999px (chips, badges). No uniform bubble-radius on everything.

## Motion
- **Approach:** Intentional, GSAP-orchestrated (Polish tier — see docs/superpowers/specs/2026-07-03-gsap-motion-layer-design.md). Crisp 150–250ms micro-transitions stay CSS; sequences are GSAP timelines in `motion.js`.
- **Engine:** gsap@3.15.0 core + DrawSVGPlugin, pinned + SRI, deferred, SW-cached. Progressive enhancement: `MotionLayer.active` gates everything; no GSAP → CSS fallbacks, content never hidden.
- **Welcome choreography:** one timeline — badge → headline → subtitle → pen strike (DrawSVG, power1.in) → "usually" back.out pop → tagline → fact card → chips (60ms stagger) → actions → title-block stamp last.
- **Section entrances:** sections stream like an AI reply — "Thinking…" beat (~550ms), then a DOM-walking typewriter types the content at ≈440 chars/s with a blinking `▊` caret (`MotionLayer.streamIn`). Click anywhere in the chat skips; section switches cancel cleanly; `.redline-note` still arrives after the machine finishes — the reviewer annotates after reading. Reduced-motion/no-GSAP falls back to instant render with the 40ms stagger.
- **Fact card:** terminal-log slide swaps.
- **Stays CSS:** hovers/wiggle, status dot, voice bars, chat message entrances.
- **Easing:** enter ease-out (power2.out) · exit ease-in · overshoot back.out only for pen corrections.
- **Reduced motion:** gsap.matchMedia — no `gsap-on` class, no timelines, instant final states.

## Implementation Notes (this repo)
- Hand-drawn marks are hand-authored inline SVG paths (see `RedPen` in script.js) — Rough.js was removed entirely since it only drew boxes; a fixed wobbly path is deterministic and 9KB lighter.
- Remove: cream palette vars, pastel accents, Comic Neue font files/declarations, corner flourishes, wobbly pill borders.
- "Roast him" becomes the site's one destructive-styled button (red outline).
- Optional future risk (approved in spirit, needs a backend endpoint): live homelab telemetry strip (real uptime/temp) in mono — spec separately.

## Decisions Log
| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-07-03 | Initial design system created ("Engineer's Redline") | /design-consultation: research (brittanychiang, joshwcomeau, cassie.codes, antfu.me) + independent subagent proposal converged on "change the paper, not the personality"; user approved HTML preview (light+dark) |
| 2026-07-03 | Comic Neue retired; Shantell Sans as marginalia-only | Rounded casual font as body copy was a core "wedding card" signal |
| 2026-07-03 | Dual-voice chat (AI = mono) + red-pen hero gag included | Approved via preview; pure CSS/JS, no backend |
| 2026-07-03 | Live telemetry strip deferred | Needs server endpoint; design slot reserved in sidebar footer |
| 2026-07-03 | System implemented; Rough.js dropped | Restyle shipped across styles.css/index.html/script.js; strikethrough gag + marks are inline SVG so the rough.js CDN dependency was removed. Dark mode follows prefers-color-scheme. Old webp textures deleted. SW cache → v7 |
| 2026-07-03 | GSAP motion layer (Polish tier) | gsap@3.15.0 + DrawSVG pinned/SRI, new motion.js; welcome timeline, DrawSVG pen strike, section stagger with late red-pen notes, fact-card log slides. Progressive enhancement: CSS fallbacks intact, reduced-motion respected. SW → v8 |
| 2026-07-03 | Personality layer added (owner: "too generic") | Personality returns through the engineer lens, not ornament: sidebar telemetry (live session clock, IST + awake status), drafting title block stamp ("CHECKED BY: HIS AI (BIASED)"), fact card as `~/vishal/facts` log with counter, one accent per chip/action (dot + colored icon: ultramarine/phosphor/amber/redpen), ±1° hover wiggle (reduced-motion aware), rotating status badge, and one red-pen margin note per content section. Rule held: hand-drawn = annotation only |
| 2026-10-04 | Clay layer (claymorphism) | Owner asked for a claymorphism redesign; iterated against a pastel 3D clay icon reference. Added clay.css over styles.css: thick pastel slabs (rim + hue-true side wall + tucked contact shadow), pastel wash backdrop, Nunito everywhere, dark ink on all pastel fills. Rejected along the way: soft neumorphic blobs (read as glass) and an SVG lumpy-edge filter (read as torn paper). SW → v11 |
