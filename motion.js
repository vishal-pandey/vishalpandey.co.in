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

        // --- Section content streams like the AI is writing it ---
        // Walks the section's HTML and re-types it text-node by text-node,
        // structure appearing as the "model" reaches it. Click skips.
        let streamJob = null;

        MotionLayer.cancelStream = function () {
            if (streamJob) {
                streamJob.cancelled = true;
                streamJob = null;
            }
        };

        MotionLayer.streamIn = function (messageEl) {
            const content = messageEl.querySelector('.message-content');
            if (!content) return;

            MotionLayer.cancelStream();
            const job = { cancelled: false, skipped: false };
            streamJob = job;

            // Lift the real content out; rebuild it live below
            const source = document.createElement('div');
            source.innerHTML = content.innerHTML;
            content.innerHTML = '';

            const steps = [];
            (function walk(srcParent, dstParent) {
                Array.from(srcParent.childNodes).forEach(node => {
                    if (node.nodeType === Node.TEXT_NODE) {
                        steps.push({ dstParent, text: node.textContent });
                    } else if (node.nodeType === Node.ELEMENT_NODE) {
                        if (node.classList && node.classList.contains('redline-note')) {
                            // The reviewer annotates AFTER the machine finishes
                            const whole = node.cloneNode(true);
                            whole.style.opacity = '0';
                            steps.push({ dstParent, el: whole, note: true });
                            return;
                        }
                        const shell = node.cloneNode(false);
                        steps.push({ dstParent, el: shell });
                        walk(node, shell);
                    }
                });
            })(source, content);

            const caret = document.createElement('span');
            caret.className = 'stream-caret';
            caret.textContent = '▊';

            const notes = [];
            const chatMessages = document.getElementById('chatMessages');
            const skip = () => { job.skipped = true; };
            chatMessages?.addEventListener('click', skip);

            // Chat-style follow: stick to the bottom while the machine writes.
            // Upward intent releases follow SYNCHRONOUSLY (the 11ms ticks would
            // otherwise yank the reader back down); scrolling back to the
            // bottom re-sticks it.
            let follow = true;
            const gaugeFollow = () => {
                if (!chatMessages) return;
                follow = (chatMessages.scrollHeight - chatMessages.scrollTop
                          - chatMessages.clientHeight) < 80;
            };
            const onWheel = (e) => {
                if (e.deltaY < 0) { follow = false; return; }
                setTimeout(gaugeFollow, 60);
            };
            let lastTouchY = null;
            const onTouchStart = (e) => { lastTouchY = e.touches[0]?.clientY ?? null; };
            const onTouchMove = (e) => {
                const y = e.touches[0]?.clientY;
                if (y != null && lastTouchY != null && y > lastTouchY + 4) {
                    follow = false; // finger moving down = scrolling up = release
                } else {
                    setTimeout(gaugeFollow, 60);
                }
                lastTouchY = y ?? lastTouchY;
            };
            chatMessages?.addEventListener('wheel', onWheel, { passive: true });
            chatMessages?.addEventListener('touchstart', onTouchStart, { passive: true });
            chatMessages?.addEventListener('touchmove', onTouchMove, { passive: true });
            const prevScrollBehavior = chatMessages ? chatMessages.style.scrollBehavior : '';
            if (chatMessages) chatMessages.style.scrollBehavior = 'auto'; // smooth fights per-tick pinning

            const CHARS_PER_TICK = 2;  // ≈180 chars/s: watchable token stream
            const TICK_MS = 11;
            let i = 0;

            function cleanup() {
                chatMessages?.removeEventListener('click', skip);
                chatMessages?.removeEventListener('wheel', onWheel);
                chatMessages?.removeEventListener('touchstart', onTouchStart);
                chatMessages?.removeEventListener('touchmove', onTouchMove);
                if (chatMessages) chatMessages.style.scrollBehavior = prevScrollBehavior || 'smooth';
                caret.remove();
                if (streamJob === job) streamJob = null;
            }

            function finish() {
                cleanup();
                if (notes.length && !job.cancelled) {
                    gsap.fromTo(notes, { opacity: 0 },
                        { opacity: 1, duration: 0.4, delay: 0.4, ease: 'power1.out' });
                }
            }

            function step() {
                if (job.cancelled) { cleanup(); return; }
                if (i >= steps.length) { finish(); return; }
                const s = steps[i];

                if (s.el) {
                    s.dstParent.appendChild(s.el);
                    if (s.note) notes.push(s.el);
                    i++;
                    job.skipped ? step() : setTimeout(step, 0);
                    return;
                }

                if (!s.node) {
                    s.node = document.createTextNode('');
                    s.dstParent.appendChild(s.node);
                    s.chars = Array.from(s.text); // code points — emoji-safe
                    s.pos = 0;
                    s.dstParent.appendChild(caret);
                }

                if (job.skipped || !s.text.trim()) {
                    s.node.textContent = s.text;
                    i++;
                    job.skipped ? step() : setTimeout(step, 0);
                    return;
                }

                s.pos = Math.min(s.pos + CHARS_PER_TICK, s.chars.length);
                s.node.textContent = s.chars.slice(0, s.pos).join('');
                if (s.pos >= s.chars.length) i++;
                if (follow && chatMessages) {
                    chatMessages.scrollTop = chatMessages.scrollHeight;
                }
                setTimeout(step, TICK_MS);
            }

            // The thinking beat, then the machine starts writing
            content.innerHTML = '<span class="typing-indicator">Thinking...</span>';
            setTimeout(() => {
                if (job.cancelled) return;
                content.innerHTML = '';
                step();
            }, 550);
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
