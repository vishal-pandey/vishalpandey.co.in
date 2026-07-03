// ===== Motion Layer (GSAP) — Engineer's Redline =====
// Progressive enhancement: everything here is optional. If GSAP is missing
// (CDN down, SRI mismatch, script blocked), MotionLayer.active stays false,
// every hook no-ops, and the site falls back to its CSS animations.
// Elements are never hidden waiting for JS: all tweens are from()-style.
(function () {
    const MotionLayer = { active: false };
    window.MotionLayer = MotionLayer;

    if (typeof gsap === 'undefined') return;
    if (typeof DrawSVGPlugin !== 'undefined') {
        gsap.registerPlugin(DrawSVGPlugin);
    }

    const mm = gsap.matchMedia();

    mm.add('(prefers-reduced-motion: no-preference)', () => {
        MotionLayer.active = true;
        document.body.classList.add('gsap-on');

        // --- The pen draws the strikethrough (shared with welcome timeline) ---
        MotionLayer.strikeTimeline = function (target) {
            const tl = gsap.timeline();
            const parts = window.RedPen ? RedPen.build(target) : null;
            if (!parts) return tl;
            if (typeof DrawSVGPlugin !== 'undefined') {
                // Fast start, drag at the end — how a hand actually crosses a word out
                tl.from(parts.path, { drawSVG: '0%', duration: 0.45, ease: 'power1.in' });
            } else {
                tl.from(parts.path, { opacity: 0, duration: 0.3 });
            }
            if (parts.correction) {
                tl.fromTo(parts.correction,
                    { opacity: 0, y: 5, scale: 0.85, rotation: -4 },
                    { opacity: 1, y: 0, scale: 1, rotation: -4, duration: 0.3, ease: 'back.out(2.5)' },
                    '+=0.05'
                );
            }
            return tl;
        };

        // --- Terminal boot (dark, first paint): the machine wakes up first ---
        function runBoot(done) {
            const overlay = document.createElement('div');
            overlay.className = 'boot-overlay';
            const log = document.createElement('div');
            [
                '➜ boot vishalpandey.ai v2.0',
                '<span class="ok">[ ok ]</span> mounting ~/vishal',
                '<span class="ok">[ ok ]</span> homelab link up · 2 nodes',
                '<span class="ok">[ ok ]</span> loading humor module',
                '<span class="warn">[warn]</span> modesty module not found — skipping',
                '<span class="ok">[ ok ]</span> rendering portfolio ▊'
            ].forEach(html => {
                const line = document.createElement('div');
                line.className = 'boot-line';
                line.innerHTML = html;
                log.appendChild(line);
            });
            overlay.appendChild(log);
            document.body.appendChild(overlay);

            let finished = false;
            const finish = () => {
                if (finished) return;
                finished = true;
                bootTl.kill();
                overlay.remove();
                document.documentElement.classList.remove('booting');
                done();
            };

            const bootTl = gsap.timeline({ onComplete: finish });
            bootTl.to(overlay.querySelectorAll('.boot-line'),
                      { opacity: 1, duration: 0.02, stagger: 0.21 })
                  .to(overlay, { opacity: 0, duration: 0.28, delay: 0.4 });

            overlay.addEventListener('click', finish); // any click skips
            setTimeout(finish, 2600);                  // belt and suspenders
        }

        // --- Welcome choreography: one orchestrated sequence ---
        const welcome = document.getElementById('welcomeScreen');
        const welcomeVisible = welcome && welcome.style.display !== 'none';
        const startWelcome = () => {
            const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });
            tl.from('.status-badge', { y: -12, opacity: 0, duration: 0.35 })
              .from('.welcome-title', { y: 22, opacity: 0, duration: 0.5 }, '-=0.1')
              .from('.welcome-subtitle', { y: 14, opacity: 0, duration: 0.4 }, '-=0.28');

            const strikeTarget = document.getElementById('strikeTarget');
            if (strikeTarget && window.RedPen && !RedPen.drawn) {
                RedPen.drawn = true; // the motion layer owns the strike now
                tl.add(MotionLayer.strikeTimeline(strikeTarget), '+=0.35');
            }

            tl.from('.tagline', { y: 10, opacity: 0, duration: 0.35 }, '+=0.1')
              .from('.fun-fact-card', { y: 16, opacity: 0, duration: 0.4 }, '-=0.15')
              .from('.prompt-intro', { opacity: 0, duration: 0.3 }, '-=0.1')
              .from('.sample-q', { y: 10, opacity: 0, duration: 0.3, stagger: 0.06 }, '-=0.1')
              .from('.fourth-wall-text', { opacity: 0, duration: 0.3 })
              .from('.action-btn', { y: 12, opacity: 0, duration: 0.3, stagger: 0.05 }, '-=0.1')
              // The stamp lands last — the drawing gets approved after review
              // (the easter-egg line is scroll-triggered handwriting, see below)
              .from('.title-block', { opacity: 0, scale: 0.96, duration: 0.4, ease: 'power1.out' }, '-=0.1');
        };

        if (welcomeVisible) {
            // Dark theme boots like a terminal before the page composes
            const bootNeeded = document.documentElement.dataset.theme === 'dark'
                && document.documentElement.classList.contains('booting');
            if (bootNeeded) {
                runBoot(startWelcome);
            } else {
                document.documentElement.classList.remove('booting');
                startWelcome();
            }
        } else {
            document.documentElement.classList.remove('booting');
        }

        // --- Easter egg: the pen writes it live when you actually reach it ---
        const egg = document.querySelector('.easter-egg-footer p');
        const scroller = document.getElementById('chatMessages');
        if (egg && scroller && !egg.dataset.handwritten) {
            egg.dataset.handwritten = 'pending';
            // Wrap per word (keeps wrapping sane), then per character
            const words = egg.textContent.trim().split(/\s+/);
            egg.textContent = '';
            const allChars = [];
            words.forEach((word, wi) => {
                const w = document.createElement('span');
                w.style.display = 'inline-block';
                w.style.whiteSpace = 'nowrap';
                Array.from(word).forEach(ch => {
                    const c = document.createElement('span');
                    c.textContent = ch;
                    c.style.display = 'inline-block';
                    c.style.opacity = '0';
                    w.appendChild(c);
                    allChars.push(c);
                });
                egg.appendChild(w);
                if (wi < words.length - 1) egg.appendChild(document.createTextNode(' '));
            });

            const io = new IntersectionObserver((entries) => {
                if (!entries.some(e => e.isIntersecting)) return;
                io.disconnect();
                egg.dataset.handwritten = 'done';
                gsap.fromTo(allChars,
                    { opacity: 0, y: 3, rotation: 5 },
                    { opacity: 1, y: 0, rotation: 0, duration: 0.15, stagger: 0.03, ease: 'power1.out' }
                );
            }, { root: scroller, threshold: 0.6 });
            io.observe(egg);
        }

        // --- Section entrances: content staggers in, the pen annotates last ---
        // fromTo with explicit ends: immune to transient CSS-animation values
        // getting captured as tween targets (the "frozen half-faded page" bug).
        MotionLayer.sectionIn = function (messageEl) {
            if (!messageEl) return;
            const children = messageEl.querySelectorAll('.message-content > *:not(.redline-note)');
            const notes = messageEl.querySelectorAll('.redline-note');
            if (children.length) {
                gsap.fromTo(children,
                    { y: 12, opacity: 0 },
                    {
                        y: 0, opacity: 1, duration: 0.35,
                        stagger: 0.04, ease: 'power2.out',
                        clearProps: 'opacity,transform'
                    });
            }
            if (notes.length) {
                // The reviewer reads first, then reaches for the red pen
                gsap.fromTo(notes, { opacity: 0 }, {
                    opacity: 1, duration: 0.4,
                    delay: 0.04 * Math.min(children.length, 15) + 0.5,
                    ease: 'power1.out'
                });
            }
        };

        // --- Fact-card swaps: terminal log lines, not opacity blinks ---
        MotionLayer.factSwap = function (applyFn) {
            const body = document.querySelector('#funFactCard .fact-body');
            if (!body) { applyFn(); return; }
            const tl = gsap.timeline();
            tl.to(body, { y: -8, opacity: 0, duration: 0.18, ease: 'power1.in' })
              .add(applyFn)
              .set(body, { y: 8 })
              .to(body, { y: 0, opacity: 1, duration: 0.22, ease: 'power2.out' });
        };

        return () => {
            // matchMedia cleanup if the preference flips mid-session
            MotionLayer.active = false;
            document.body.classList.remove('gsap-on');
        };
    });
})();
