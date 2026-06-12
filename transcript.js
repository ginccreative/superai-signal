// Builds a transcript modal for the page's "Read full transcript" button.
// The button carries: data-src (transcript file) and data-title.
(function () {
  function ready(fn) {
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
  }

  ready(function () {
    var btn = document.querySelector('[data-transcript]');
    if (!btn) return;

    var src = btn.getAttribute('data-transcript');
    var title = btn.getAttribute('data-title') || 'Full transcript';
    var kicker = btn.getAttribute('data-kicker') || 'Verbatim';

    // build modal once
    var overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.innerHTML =
      '<div class="modal" role="dialog" aria-modal="true" aria-label="' + title + ' transcript">' +
        '<div class="modal-head">' +
          '<div><div class="mh-kick">' + kicker + ' — Full Transcript</div><h3>' + title + '</h3></div>' +
          '<button class="modal-close" aria-label="Close">✕</button>' +
        '</div>' +
        '<div class="modal-body"><p>Loading transcript…</p></div>' +
        '<div class="modal-foot"><span>Auto-transcribed on-device · lightly cleaned</span><span>SuperAI 2026 · Singapore</span></div>' +
      '</div>';
    document.body.appendChild(overlay);

    var body = overlay.querySelector('.modal-body');
    var closeBtn = overlay.querySelector('.modal-close');
    var loaded = false;

    function open() {
      overlay.classList.add('open');
      document.body.classList.add('modal-open');
      if (!loaded) { loaded = true; load(); }
    }
    function close() {
      overlay.classList.remove('open');
      document.body.classList.remove('modal-open');
    }
    function load() {
      fetch(src)
        .then(function (r) { if (!r.ok) throw new Error(r.status); return r.text(); })
        .then(function (text) {
          // group the one-sentence-per-line transcript into readable paragraphs
          var lines = text.split('\n').map(function (l) { return l.trim(); }).filter(Boolean);
          var paras = [], chunk = [];
          lines.forEach(function (l, i) {
            chunk.push(l);
            if (chunk.length >= 4) { paras.push(chunk.join(' ')); chunk = []; }
          });
          if (chunk.length) paras.push(chunk.join(' '));
          body.innerHTML = paras.map(function (p) {
            return '<p>' + p.replace(/&/g, '&amp;').replace(/</g, '&lt;') + '</p>';
          }).join('');
          body.scrollTop = 0;
        })
        .catch(function () {
          body.innerHTML =
            '<p>The transcript couldn’t be loaded here. If you opened this file directly ' +
            '(file://), your browser blocks loading the text file. View it on the live site, or ' +
            'open the raw file: <a href="' + src + '">' + src + '</a></p>';
        });
    }

    btn.addEventListener('click', open);
    closeBtn.addEventListener('click', close);
    overlay.addEventListener('click', function (e) { if (e.target === overlay) close(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
  });
})();
