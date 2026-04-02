# CSA Content Standards — Working Context

**Phase:** Maintenance / Active Refinement
**Status:** Active
**Last session:** 2026-04-02 (5 personas standardized + added to site; forwarded to Susannah)

For stable reference facts: see [REFERENCE.md](REFERENCE.md)
For session history: see [sessions/](sessions/)

---

## Current State

- **Site:** Live at https://csa-content-standards.netlify.app
- **Repo:** https://github.com/piercewilliams/csa-content-standards
- **Last changes:** 5 personas added, Discover Browser revised (2026-04-02) — v1.3.6
- **Blockers:** None known

## What's Next

1. [ ] **Persona experimentation — Watercooler Insider + Curious Explorer** — Susannah pinning all 5 personas to National CSA accounts (2026-04-02). Once live, experimentation begins on the 2 newest. Watch for performance data and any standard updates that follow.
2. [ ] **Apple News + MSN personas** — Still pending Andy's review before use.
3. [ ] **Document format/persona separation** — Decision 2026-03-31: content formats and target audiences to be independently selectable (mix-and-match). Susannah logged tooling dev request. Codify architecture here once tooling is defined.
4. [ ] **Document claims validation workflow** — Gary Tools integration confirmed by Chris (2026-04-01). Once integration is scoped, document claims validation as a post-CSA quality gate step in standards.

## Recent Session: 2026-04-02

Received 5 personas from Pierce (Sara Vallone's refined set + 2 new data-driven ones). Normalized all to site conventions (Who They Are / Core Driver / What They Respond To / Content Framework / Content Implications), created standalone pages, and wired up full site sync.

**Files created:** `docs/curious-optimizer.md`, `docs/science-enthusiast.md`, `docs/curious-explorer.md`, `docs/watercooler-insider.md`

**Files updated:** `docs/discover-browser.md` (Content Framework added; familiar performance lanes added to What They Respond To), `_data/navigation.yml`, `admin/config.yml`, `api/reference.json` (§4 status → active), `index.md` (§4 status → ✅ Active), `docs/documentation.md` (persona count updated), `docs/master-reference.md` (§4.2–§4.5 added; §4.1 stale word count and meta desc values corrected), `docs/changelog.md` (v1.3.6)

**Personas (final):**
- §4.1 The Discover Browser — revised
- §4.2 The Curious Optimizer — new (Trend Hunter / B2C)
- §4.3 The Wonder-Driven Science Enthusiast — new (Science / Discovery Features)
- §4.4 The Curious Explorer — new (Discovery / Science / Nature)
- §4.5 The Watercooler Insider — new (Entertainment / Trending)

**Forwarded to Susannah** for pinning to all National CSA accounts. Experimentation on §4.4 and §4.5 to begin once live.

## Previous Session: 2026-04-01

- **Personas:** Pierce consolidated 3 personas from CSA data; passed to Sara Vallone to refine/supplement.
- **PGS-115:** Google Discover Explainer visible to all users — bug being fixed (should be national team only).
- **Cluster tagging strategy:** Settled in alignment meeting. Variant linking now in dev queue. Document cluster tagging entry point (Research Draft stage) in standards once dev delivers.

## Previous Session: 2026-03-31 (CSA Weekly Update)

- **Format/persona separation decision:** Content formats and target audiences to be independently selectable. Susannah logged dev request. Sara Vallone prefers format-first workflow.
- **PGS-95 (Google Discover Explainer):** Live as of 2026-03-31 (scoping bug being fixed via PGS-115).
- **Canonical ID = Cluster ID:** Confirmed by group.

## Previous Session: 2026-03-30

Added snapshot version bar to every page. A weekly trigger (Mon 8am Dallas) bundles all `docs/*.md` + `api/reference.json` into a snapshot JSON file at `data/snapshots/`. Clicking a pill opens a full-page overlay that renders markdown client-side via lazily-loaded marked.js (CDN fallback: raw `<pre>`). Passkey `8812` gates multi-file restore download. Max 5 snapshots. Full user manual added to README.

Files changed: `_layouts/default.html` (bar div + script tag), `assets/css/main.css` (snapshot + overlay styles), `assets/js/snapshot.js` (new file), `data/snapshots/index.json` (scaffold).

**Trigger:** `trig_01Qze9PVrNErCEYa1fMXxF2U` — shared with csa-dashboard and data-t1headlines. Details in ops-hub REFERENCE.md.

## Previous Session: 2026-03-28

Rewrote README.md from scratch — comprehensive document covering what the CSA is, quick-access links, per-audience usage guide, full section/format index, CMS editing walkthrough, technical files table, directory tree, stack table, versioning reference, contributing guidelines, and roadmap. Red-text convention and (REQUIRED) label explanation added.

## Previous Session: 2026-03-24

Ingested new Word and Character Counts doc (March 2026) into the headlines page and resolved conflicts with existing standards across the full site.

**Site-wide character count updates:** SEO Title 60–70 → **50–70**; Promo/Homepage Title 65–70 → **70–75**; Meta Description 100–165 → **100–155**

**Exclusive/(Excl) policy:** Changed from required to optional — include if it fits within character limit. interview.md H1 `(EXCLUSIVE)` requirement preserved as a format formula rule.

---

*This file follows the Tiered Context Architecture. Budget: ≤150 lines.*
*Current: ~84 lines*
