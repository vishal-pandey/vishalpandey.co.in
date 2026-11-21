/* Session replay on our own storage (replaces LogRocket): rrweb, self-hosted in vendor/. Same as cordane.
   Recordings go to the chat backend (vishal_agent/replays.py, POST /v1/rec), which keeps them in R2 for 30 days.
   One recording per tab visit (new after 30 min idle). window.replayId is sent with each chat question so the
   WhatsApp alert links to the visit. The recorder loads only after the page has fully loaded and stayed on screen
   for 2 s, so it never competes with the page loading. Typed values are masked, mouse movement is not recorded. */
(function () {
    try {
        var API = 'https://vishal-agent.codeshare.co.in';
        var force = false; // localStorage['vp.rec'] = '1' records anywhere, robots included (for testing)
        try { force = localStorage.getItem('vp.rec') === '1'; } catch (e) {}
        if (!force && (!/^(www\.)?vishalpandey\.ai$/.test(location.hostname) || navigator.webdriver)) return; // live site, people only
        var K = 'vp.rid', now = Date.now(), o = null;
        try { o = JSON.parse(sessionStorage.getItem(K) || 'null'); } catch (e) {}
        var rid, page;
        if (o && o.id && now - o.t < 1800000) { rid = o.id; page = (o.p || 0) + 1; }
        else {
            var a = new Uint8Array(8); crypto.getRandomValues(a);
            rid = new Date().toISOString().slice(0, 10).replace(/-/g, '') +
                Array.prototype.map.call(a, function (b) { return ('0' + b.toString(16)).slice(-2); }).join('');
            page = 0;
        }
        if (page >= 300) return;
        function save() { try { sessionStorage.setItem(K, JSON.stringify({ id: rid, t: Date.now(), p: page })); } catch (e) {} }
        save();
        window.replayId = rid;

        var buf = [], seq = 0, started = false, seen = 0, t = null;
        // text/plain keeps it a "simple" cross-origin request: no CORS preflight, and keepalive works
        function send(url, b, keep) {
            return fetch(url, { method: 'POST', body: b, keepalive: keep, credentials: 'omit', headers: { 'content-type': 'text/plain' } });
        }
        // keepalive (survives the tab closing) is capped at 64 KB in flight, so only when hiding/leaving, and retried without
        function post(url, b, keep) {
            try {
                keep = !!keep && (b.size || b.length) < 60000;
                send(url, b, keep).catch(function () { if (keep) send(url, b, false).catch(function () {}); });
            } catch (e) {}
        }
        function flush(how) {
            if (!buf.length) return;
            var body = JSON.stringify(buf); buf = []; save();
            var url = API + '/v1/rec?rid=' + rid + '&p=' + page + '&s=' + (seq++), keep = how !== 'tick';
            if (how !== 'leave' && window.CompressionStream) {
                new Response(new Blob([body]).stream().pipeThrough(new CompressionStream('gzip'))).blob()
                    .then(function (b) { post(url + '&z=1', b, keep); }, function () { post(url, body, keep); });
            } else post(url, body, keep);
        }
        function rec() {
            var r = window.rrwebRecord; if (!r || !r.record) return;
            r.record({
                emit: function (e) { buf.push(e); }, maskAllInputs: true, slimDOMOptions: 'all', recordCanvas: false,
                sampling: { mousemove: false, scroll: 150, media: 800, input: 'last' }, errorHandler: function () { return true; }
            });
            // the opening snapshot is the big one: send it compressed right away
            setTimeout(function () { flush('tick'); }, 300);
            setInterval(function () { flush('tick'); }, 5000);
            document.addEventListener('visibilitychange', function () { if (document.visibilityState === 'hidden') flush('hide'); });
            window.addEventListener('pagehide', function () { flush('leave'); });
        }
        function add() {
            if (started) return; started = true;
            var s = document.createElement('script');
            s.src = 'vendor/rrweb-record-2.2.2.min.js'; s.async = true; s.onload = rec; document.head.appendChild(s);
        }
        function tick() { if (document.visibilityState === 'visible') { seen += 250; if (seen >= 2000) { clearInterval(t); add(); } } }
        function go() { t = setInterval(tick, 250); }
        if (document.readyState === 'complete') go(); else window.addEventListener('load', go);
    } catch (e) {}
})();
