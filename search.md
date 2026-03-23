---
layout: default
title: Search
---

# Search

<div class="search-page-box">
  <input type="search" id="search-input" class="search-page-input" placeholder="Search standards…" autocomplete="off" autofocus>
</div>

<div id="search-status"></div>
<div id="search-results-container"></div>

<script src="https://unpkg.com/lunr@2.3.9/lunr.min.js"></script>
<script>
(function () {
  var input = document.getElementById('search-input');
  var status = document.getElementById('search-status');
  var container = document.getElementById('search-results-container');

  var lunrIdx = null;
  var pageMap = {};
  var searchTimer = null;

  // Read initial query from URL
  var params = new URLSearchParams(window.location.search);
  var initialQuery = params.get('q') || '';
  input.value = initialQuery;

  function escapeHtml(str) {
    return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  }

  function getSnippet(content, query, maxLen) {
    var terms = query.toLowerCase().trim().split(/\s+/).filter(Boolean);
    var lower = content.toLowerCase();
    var idx = -1;
    for (var i = 0; i < terms.length; i++) {
      var pos = lower.indexOf(terms[i]);
      if (pos !== -1) { idx = pos; break; }
    }
    if (idx === -1) idx = 0;
    var start = Math.max(0, idx - 80);
    var end = Math.min(content.length, start + maxLen);
    return (start > 0 ? '…' : '') + content.slice(start, end).trim() + (end < content.length ? '…' : '');
  }

  function displayResults(query) {
    query = (query || '').trim();
    if (!query) {
      status.innerHTML = '';
      container.innerHTML = '';
      return;
    }
    if (!lunrIdx) {
      status.innerHTML = '<p class="search-loading">Loading index…</p>';
      return;
    }

    var terms = query.split(/\s+/).filter(Boolean);
    var lunrQuery = terms.map(function(t) { return t + '*'; }).join(' ');
    var results;
    try {
      results = lunrIdx.search(lunrQuery);
    } catch (e) {
      try { results = lunrIdx.search(query); } catch (e2) { results = []; }
    }

    if (!results.length) {
      status.innerHTML = '';
      container.innerHTML = '<p class="search-no-results">No results for <strong>' + escapeHtml(query) + '</strong>.</p>';
      return;
    }

    status.innerHTML = '<p class="search-count">' + results.length + ' result' + (results.length === 1 ? '' : 's') + ' for <strong>' + escapeHtml(query) + '</strong></p>';
    container.innerHTML = '<ul class="search-results">' +
      results.slice(0, 25).map(function (r) {
        var page = pageMap[r.ref];
        var snippet = getSnippet(page.content, query, 220);
        return '<li class="search-result"><a href="' + page.url + '">' + escapeHtml(page.title) + '</a><p>' + escapeHtml(snippet) + '</p></li>';
      }).join('') + '</ul>';
  }

  function onQueryChange(query) {
    if (query.trim()) {
      history.replaceState(null, '', '?q=' + encodeURIComponent(query.trim()));
    } else {
      history.replaceState(null, '', window.location.pathname);
    }
    displayResults(query);
  }

  input.addEventListener('input', function () {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(function () { onQueryChange(input.value); }, 200);
  });

  // Load index
  fetch('/search.json')
    .then(function (r) { return r.json(); })
    .then(function (data) {
      data.forEach(function (p) { pageMap[p.url] = p; });
      lunrIdx = lunr(function () {
        this.ref('url');
        this.field('title', { boost: 10 });
        this.field('content');
        var self = this;
        data.forEach(function (p) { self.add(p); });
      });
      if (initialQuery) {
        displayResults(initialQuery);
      } else {
        status.innerHTML = '';
        container.innerHTML = '<p class="search-hint">Start typing to search across all standards pages.</p>';
      }
    })
    .catch(function () {
      status.innerHTML = '<p class="search-no-results">Could not load search index.</p>';
    });

  if (initialQuery) {
    status.innerHTML = '<p class="search-loading">Loading…</p>';
  }
})();
</script>
