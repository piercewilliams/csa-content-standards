# CSA Content Standards — Working Context

**Phase:** Maintenance / Active Refinement
**Status:** Active
**Last session:** 2026-03-28

For stable reference facts: see [REFERENCE.md](REFERENCE.md)
For session history: see [sessions/](sessions/)

---

## Current State

- **Site:** Live at https://csa-content-standards.netlify.app
- **Repo:** https://github.com/piercewilliams/csa-content-standards
- **Last changes:** README overhaul (Mar 28, 2026)
- **Blockers:** None known

## What's Next

1. [ ] **Update persona standards** after Sara Vallone drafts new personas (Apple News, Smart News, MSN versions) — confirmed action item from Content & Programming Weekly 2026-03-30. Pierce to codify into site once drafts are received. New personas will also be submitted to "Andy" (Apple News, MSN) for review before use.

## Recent Session: 2026-03-30

Added snapshot version bar to every page. A weekly trigger (Mon 8am Dallas) bundles all `docs/*.md` + `api/reference.json` into a snapshot JSON file at `data/snapshots/`. Clicking a pill opens a full-page overlay that renders markdown client-side via lazily-loaded marked.js (CDN fallback: raw `<pre>`). Passkey `8812` gates multi-file restore download. Max 5 snapshots. Full user manual added to README.

Files changed: `_layouts/default.html` (bar div + script tag), `assets/css/main.css` (snapshot + overlay styles), `assets/js/snapshot.js` (new file), `data/snapshots/index.json` (scaffold).

**Trigger:** `trig_01Qze9PVrNErCEYa1fMXxF2U` — shared with csa-dashboard and data-t1headlines. Details in ops-hub REFERENCE.md.

## Previous Session: 2026-03-28

Rewrote README.md from scratch.

**README.md:**
- Replaced minimal 4-section README with a comprehensive document covering: what the CSA is, quick-access links, per-audience usage guide (AI agents, human editors, developers), full section and format index with live links, CMS editing walkthrough, table of technical files requiring direct GitHub editing, full directory tree, stack table, versioning reference, contributing guidelines, and roadmap with explanation of infrastructure already in place to support expansion
- Explanation of red-text convention and (REQUIRED) labels added — critical context missing from the original

## Previous Session: 2026-03-24

Ingested new Word and Character Counts doc (March 2026) into the headlines page and resolved conflicts with existing standards across the full site.

**Headlines page (docs/headlines.md):**
- Added Us Weekly (UsW) outlet block with: required tools (wordcounter.net, headlinecapitalization.com), updated character count table, hed hierarchy ("sisters not twins"), (Excl) policy, meta description rules, Yoast focus keyphrase guidance, body word counts, and CMS field mapping
- Moved Apple News block inside the Us Weekly block as a sub-section (it's a UsW distribution channel, not a standalone outlet)
- Universal Defaults left authoritative/unchanged

**Site-wide character count updates** (brand-guidelines.md, master-reference.md, headlines.md, all 11 format spec files):
- SEO Title: 60–70 → **50–70** (owner decision: compromise between old and new doc)
- Promo/Homepage Title: 65–70 → **70–75**
- Meta Description: 100–165 → **100–155** (owner kept minimum)

**Exclusive/(Excl) policy update** (brand-guidelines.md, master-reference.md, headlines.md, interview.md):
- Changed from required to optional — include if it fits within the character limit; otherwise use "exclusively"/"exclusive" in the meta description
- interview.md H1 `(EXCLUSIVE)` requirement preserved — it's a format formula rule, not a general SEO label

---

*This file follows the Tiered Context Architecture. Budget: ≤150 lines.*
*Current: ~46 lines*
