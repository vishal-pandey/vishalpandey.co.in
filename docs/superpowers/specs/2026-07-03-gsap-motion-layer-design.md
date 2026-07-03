# GSAP Motion Layer — Design Spec

**Date:** 2026-07-03 · **Status:** Approved (Polish tier, Approach A) · **Owner:** Vishal Pandey

## Goal

Add an orchestrated motion layer to the portfolio using GSAP, within the Engineer's
Redline design system (see DESIGN.md → Motion: "intentional"). Motion should make the
site feel crafted and alive without becoming a showpiece. Competence first, humor second.

## Approach (decided)

**Progressive enhancement.** GSAP core + DrawSVGPlugin, pinned at 3.15.0 from jsdelivr
with SRI hashes, loaded `defer`. A new `motion.js` module owns all GSAP work. Every
animation uses `gsap.from()`-style patterns: elements are visible by default and GSAP
animates them into place. If the CDN fails or GSAP is absent, the site renders exactly
as it does today (existing CSS animations remain as fallback). No content is ever
hidden waiting for JS.

Rejected alternatives: GSAP-only motion (couples visibility to a third-party script);
self-hosting GSAP (~90KB vendored, manual updates; SW already caches the CDN files).

## Scope — Polish tier

1. **Welcome choreography** — one `gsap.timeline()` replacing the scattered CSS
   `fadeInUp` delays: status badge → headline → subtitle → red-pen strikethrough
   (DrawSVG, `power1.in` — fast start, drag at the end) → "usually" pops with
   `back.out` overshoot (keeping its −4° tilt) → tagline → fact card → chips deal in
   (60ms stagger) → quick actions → footer → title-block stamp last (fade + scale
   0.96→1, "stamped after review"). Total ≈ 2.8s. Runs only when the welcome screen
   is visible (deep links to #sections skip it).
2. **Section entrances** — `displaySection` hook: assistant-message content children
   stagger in (40ms, 12px rise, 0.35s). Red-pen `.redline-note` elements arrive
   ~0.4s after everything else — the reviewer annotates after reading.
3. **Fact-card log swaps** — entries slide up-and-out / in-from-below (0.18s out,
   0.22s in) like terminal output; counter updates in sync.

**Explicitly out of scope:** hover states, status dot, voice bars (stay CSS); chat
message entrances (already subtle CSS); ScrollTrigger (Showpiece tier, not chosen).

## Integration points

- `index.html`: two pinned+SRI `defer` script tags (gsap, DrawSVGPlugin) followed by
  `motion.js` (also defer, so execution order is guaranteed).
- `motion.js` (new): `window.MotionLayer` with `active` flag, welcome timeline,
  `sectionIn(el)`, `factSwap(applyFn)`, `drawStrike(target)`. Wrapped in
  `gsap.matchMedia('(prefers-reduced-motion: no-preference)')` — reduced-motion users
  get instant final states via the existing CSS fallbacks (`MotionLayer.active` stays
  false and all hooks no-op).
- `script.js`:
  - `RedPen` refactor: `build(target)` creates the SVG path (no animation) and is
    shared; `init()` defers to MotionLayer when active; CSS-transition fallback kept.
    `window.RedPen` exposed for motion.js.
  - `displaySection`: `window.MotionLayer?.sectionIn(assistantMessage)` after append.
  - `FunFactsManager.showNext`: uses `MotionLayer.factSwap` when active, else the
    existing opacity fallback.
- `styles.css`: `.gsap-on` body class (set by motion.js only when it takes over)
  disables the CSS entrance keyframes and the `.strike-correction` opacity transition
  so nothing double-animates.
- `sw.js`: cache → v8; `motion.js` precached; both GSAP URLs added to CDN_ASSETS.

## Error handling

- GSAP missing/blocked → `MotionLayer` never activates → CSS fallbacks run; console
  stays clean (all hooks optional-chained).
- SRI mismatch → browser refuses script → same fallback path.
- Reduced motion → no `gsap-on` class, no timelines; strike renders instantly via
  the existing reduced-motion CSS.

## Testing

Browse-daemon QA: console clean; gsap + DrawSVG load 200 with SRI; welcome timeline
visibly runs (screenshot mid-flight + settled); section stagger and late-arriving
redline notes; fact swap; fallback check by blocking the CDN (site renders as today).

## Performance budget

gsap.min.js ≈ 24KB gz + DrawSVG ≈ 3KB gz + motion.js ≈ 2KB, all deferred and
SW-cached after first visit. No layout thrash: transforms and opacity only.
