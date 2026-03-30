// CSA Content Standards — Snapshot version bar
// Renders a row of version buttons at the bottom of every page.
// Clicking a version opens a full-page overlay showing the site content at that point in time,
// rendered from captured markdown via marked.js. Passkey-gated restore downloads all files.

(function () {
  'use strict';

  var SNAP_PK = '8812';
  var _snapIndex = [];
  var _activeSnap = null; // { id, label, file, data }

  // Escape HTML special chars before inserting untrusted strings into innerHTML.
  function esc(str) {
    return String(str == null ? '' : str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  // ── Render snapshot bar ──────────────────────────────────────────────────────

  function renderSnapshotBar() {
    var bar = document.getElementById('snapshot-bar');
    if (!bar) return;
    fetch('/data/snapshots/index.json', { cache: 'no-store' })
      .then(function (r) { return r.ok ? r.json() : Promise.reject('not ok'); })
      .then(function (snaps) {
        if (!snaps.length) { bar.style.display = 'none'; return; }
        _snapIndex = snaps;
        var html = '<span class="snap-bar-label">Site versions</span>';
        snaps.forEach(function (s) {
          html += '<button class="snap-btn" data-snap-id="' + esc(s.id) +
            '" data-snap-file="' + esc(s.filename) + '">' + esc(s.label) + '</button>';
        });
        bar.innerHTML = html;
        bar.querySelectorAll('.snap-btn').forEach(function (btn) {
          btn.addEventListener('click', function () {
            loadAndViewSnapshot(btn.dataset.snapFile, btn.dataset.snapId, btn.textContent.trim());
          });
        });
      })
      .catch(function () { bar.style.display = 'none'; });
  }

  // ── Load and open snapshot overlay ───────────────────────────────────────────

  function loadAndViewSnapshot(file, id, label) {
    document.querySelectorAll('.snap-btn').forEach(function (b) {
      b.classList.toggle('active', b.dataset.snapId === id);
    });
    fetch('/data/snapshots/' + file, { cache: 'no-store' })
      .then(function (r) { if (!r.ok) throw new Error('HTTP ' + r.status); return r.json(); })
      .then(function (data) {
        _activeSnap = { id: id, label: label, file: file, data: data };
        loadMarked(function () { showOverlay(data, label); });
      })
      .catch(function () {
        document.querySelectorAll('.snap-btn').forEach(function (b) { b.classList.remove('active'); });
      });
  }

  // ── Lazy-load marked.js from CDN ─────────────────────────────────────────────

  function loadMarked(cb) {
    if (window.marked) { cb(); return; }
    var s = document.createElement('script');
    s.src = 'https://cdn.jsdelivr.net/npm/marked@9/marked.min.js';
    s.onload = cb;
    s.onerror = function () {
      // Fallback: show raw markdown if CDN fails
      window.marked = { parse: function (md) { return '<pre>' + md + '</pre>'; } };
      cb();
    };
    document.head.appendChild(s);
  }

  // ── Overlay: full-page view of snapshot content ───────────────────────────────

  function showOverlay(data, label) {
    var existing = document.getElementById('snap-overlay');
    if (existing) existing.remove();

    var overlay = document.createElement('div');
    overlay.id = 'snap-overlay';

    // Build nav from sorted doc keys; treat master-reference.md as first
    var docKeys = Object.keys(data.docs || {}).sort(function (a, b) {
      if (a === 'master-reference.md') return -1;
      if (b === 'master-reference.md') return 1;
      return a.localeCompare(b);
    });

    var navHtml = docKeys.map(function (k) {
      var title = k.replace(/\.md$/, '').replace(/-/g, ' ')
        .replace(/\b\w/g, function (c) { return c.toUpperCase(); });
      return '<button class="snap-nav-btn" data-doc-key="' + k + '">' + title + '</button>';
    }).join('');

    overlay.innerHTML =
      '<div id="snap-overlay-header">' +
        '<div id="snap-overlay-title">Viewing: <strong>' + label + '</strong></div>' +
        '<div id="snap-overlay-actions">' +
          '<button id="snap-overlay-restore-btn">Restore this version</button>' +
          '<button id="snap-overlay-close-btn">\u2190 Back to live</button>' +
        '</div>' +
      '</div>' +
      '<div id="snap-overlay-body">' +
        '<nav id="snap-overlay-nav">' + navHtml + '</nav>' +
        '<div id="snap-overlay-content"><div id="snap-overlay-content-inner"></div></div>' +
      '</div>';

    document.body.appendChild(overlay);

    var contentInner = document.getElementById('snap-overlay-content-inner');

    // Wire nav buttons
    overlay.querySelectorAll('.snap-nav-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        overlay.querySelectorAll('.snap-nav-btn').forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        renderDocInOverlay(data.docs[btn.dataset.docKey], contentInner);
      });
    });

    // Close overlay
    document.getElementById('snap-overlay-close-btn').addEventListener('click', function () {
      overlay.remove();
      document.querySelectorAll('.snap-btn').forEach(function (b) { b.classList.remove('active'); });
      _activeSnap = null;
    });

    // Restore
    document.getElementById('snap-overlay-restore-btn').addEventListener('click', showRestoreModal);

    // Show first doc by default
    var firstBtn = overlay.querySelector('.snap-nav-btn');
    if (firstBtn) {
      firstBtn.classList.add('active');
      renderDocInOverlay(data.docs[docKeys[0]], contentInner);
    }
  }

  function renderDocInOverlay(markdown, el) {
    el.innerHTML = window.marked.parse(markdown || '*(No content captured)*');
    el.parentElement.scrollTop = 0;
  }

  // ── Restore modal ────────────────────────────────────────────────────────────

  function showRestoreModal() {
    var modal = document.getElementById('snap-restore-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'snap-restore-modal';
      document.body.appendChild(modal);
      modal.addEventListener('click', function (e) {
        if (e.target === modal) modal.classList.remove('visible');
      });
    }
    var label = _activeSnap ? _activeSnap.label : '';
    var fileCount = _activeSnap ? Object.keys(_activeSnap.data.docs || {}).length + 1 : 0; // +1 for reference.json
    modal.innerHTML =
      '<div class="srm-inner">' +
        '<div class="srm-title">Restore this version?</div>' +
        '<div class="srm-body">Downloads <strong>' + fileCount + ' files</strong> from the <strong>' + label + '</strong> snapshot — ' +
          '<code>reference.json</code> and all <code>docs/*.md</code> files. Place each at its original path in the repo and push via GitHub Desktop (Netlify redeploys automatically).</div>' +
        '<input id="srm-passkey" class="srm-input" type="password" placeholder="Passkey" maxlength="10" autocomplete="off">' +
        '<div class="srm-error" id="srm-error"></div>' +
        '<div class="srm-btns">' +
          '<button class="srm-confirm" id="srm-confirm-btn">Download &amp; Restore</button>' +
          '<button class="srm-dismiss" id="srm-dismiss-btn">Cancel</button>' +
        '</div>' +
      '</div>';
    document.getElementById('srm-confirm-btn').addEventListener('click', attemptRestore);
    document.getElementById('srm-dismiss-btn').addEventListener('click', function () {
      modal.classList.remove('visible');
    });
    document.getElementById('srm-passkey').addEventListener('keydown', function (e) {
      if (e.key === 'Enter') attemptRestore();
      if (e.key === 'Escape') modal.classList.remove('visible');
    });
    modal.classList.add('visible');
    setTimeout(function () {
      var i = document.getElementById('srm-passkey');
      if (i) i.focus();
    }, 50);
  }

  // ── Attempt restore ──────────────────────────────────────────────────────────

  function attemptRestore() {
    var input = document.getElementById('srm-passkey');
    var errEl = document.getElementById('srm-error');
    if (!input || !_activeSnap) return;
    if (input.value !== SNAP_PK) {
      if (errEl) errEl.textContent = 'Incorrect passkey.';
      input.value = '';
      input.classList.add('srm-shake');
      setTimeout(function () { input.classList.remove('srm-shake'); }, 400);
      return;
    }

    var data = _activeSnap.data;

    function dlFile(content, filename, mime) {
      var blob = new Blob([content], { type: mime });
      var url = URL.createObjectURL(blob);
      var a = document.createElement('a');
      a.href = url; a.download = filename; a.click();
      URL.revokeObjectURL(url);
    }

    // Download reference.json
    if (data.reference) {
      dlFile(data.reference, 'reference.json', 'application/json');
    }

    // Download each markdown file with staggered timing to avoid popup blocker
    var docEntries = Object.entries(data.docs || {});
    docEntries.forEach(function (entry, i) {
      setTimeout(function () {
        dlFile(entry[1], entry[0], 'text/markdown');
      }, (i + 1) * 150);
    });

    // Download pruned index.json
    var restoredPos = -1;
    for (var i = 0; i < _snapIndex.length; i++) {
      if (_snapIndex[i].id === _activeSnap.id) { restoredPos = i; break; }
    }
    var pruned = restoredPos >= 0 ? _snapIndex.slice(restoredPos) : _snapIndex;
    var totalDelay = (docEntries.length + 1) * 150;
    setTimeout(function () {
      dlFile(JSON.stringify(pruned, null, 2), 'snapshots-index.json', 'application/json');
    }, totalDelay);

    var modal = document.getElementById('snap-restore-modal');
    if (modal) {
      var newer = restoredPos > 0 ? restoredPos : 0;
      var total = docEntries.length + (data.reference ? 1 : 0) + 1;
      modal.querySelector('.srm-inner').innerHTML =
        '<div class="srm-title srm-success">' + total + ' files downloading</div>' +
        '<div class="srm-body">' +
          '\u00b7 <code>reference.json</code> \u2192 <code>api/reference.json</code><br>' +
          '\u00b7 <code>*.md</code> files \u2192 <code>docs/</code><br>' +
          '\u00b7 <code>snapshots-index.json</code> \u2192 <code>data/snapshots/index.json</code><br><br>' +
          (newer > 0 ? 'This removes ' + newer + ' newer version' + (newer !== 1 ? 's' : '') + ' from history. ' : '') +
          'Push via GitHub Desktop. Netlify will redeploy automatically.' +
        '</div>' +
        '<div class="srm-btns"><button class="srm-dismiss" id="srm-done-btn">Done</button></div>';
      document.getElementById('srm-done-btn').addEventListener('click', function () {
        modal.classList.remove('visible');
      });
    }
  }

  document.addEventListener('DOMContentLoaded', renderSnapshotBar);
}());
