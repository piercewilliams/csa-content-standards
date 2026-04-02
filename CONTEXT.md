# CSA Content Standards — Working Context

**Phase:** Maintenance / Active Refinement
**Status:** Active
**Last session:** 2026-04-02 (Agent Routing site-wide + data-driven Headlines + audit — v1.4.0)

For stable reference facts: see [REFERENCE.md](REFERENCE.md)
For session history: see [sessions/](sessions/)

---

## Current State

- **Site:** Live at https://csa-content-standards.netlify.app
- **Repo:** https://github.com/piercewilliams/csa-content-standards
- **Last changes:** Full site audit + stale fixes; Headlines formula order made data-driven from navigation.yml (2026-04-02) — v1.4.0
- **Blockers:** None known

## What's Next

1. [ ] **Persona experimentation — Watercooler Insider + Curious Explorer** — All 5 personas pinned to National CSA accounts (2026-04-02). Experimentation on §4.4 and §4.5 to begin once live. Watch for performance data and any standard updates that follow.
2. [ ] **Apple News + MSN personas** — Still pending Andy's review before use.
3. [ ] **Document format/persona separation** — Decision 2026-03-31: content formats and target audiences to be independently selectable (mix-and-match). Dev request logged. Codify architecture here once tooling is defined.
4. [ ] **Document claims validation workflow** — Gary Tools integration confirmed by Chris (2026-04-01). Once integration is scoped, document claims validation as a post-CSA quality gate step in standards.
5. [ ] **Headline length root cause** — Sara Vallone flagged (2026-04-02) that short headlines may result from SEO rules mixing into the headline agent prompt. This is exactly what the Agent Routing system addresses — H1 80–100 and SEO title 50–70 are now tagged separately. Confirm with Susannah's team that the headline agent prompt has been updated with the `AGENT-AUDIENCE: headline` content.

## Recent Session: 2026-04-02

A full-day session across multiple exchanges. Summary of all work:

**§3.11 FAQ / Service Journalism (v1.3.7)**
New format added — standalone page with full spec. Red overrides: headline formula locked, focus keyphrase as exact search query, answer-first requirement, 300–500 words per answer block, mandatory article structure, 2–3 sentence paragraph max, H2s require Google Trends/PAA keywords.
Files: `docs/faq.md` (created); `_data/navigation.yml`, `admin/config.yml`, `docs/master-reference.md`, `docs/documentation.md`, `api/reference.json`, `docs/changelog.md`, `docs/headlines.md` (updated). FAQ placed directly after Everything to Know in sidebar.

**Agent Routing system (v1.3.8–1.3.9)**
Root cause identified: the CSA's headline, SEO, and style agents each have separate prompts — standards were correct but rules weren't reaching the right agent. Built a two-layer routing annotation system.
- Layer 1: `agent_audiences` frontmatter on every page
- Layer 2: `<!-- AGENT-AUDIENCE: [tag] -->` HTML comments before every subsection
- Four tags: `general-style`, `headline`, `seo`, `human-only`
- `_data/agent_routing.yml` created — canonical tag vocabulary and format-page section mapping
- `api/reference.json` updated — `agent_audiences` on every section and format entry
- Applied to all 21 content pages: 11 format pages, 5 persona pages, headlines, acceptable-sources, publishing-guidelines, follow-up-content, collaboration-guide, brand-guidelines, master-reference
- §1.4 Internal Linking split: link count + anchor text → `general-style`; What to Link To → `human-only` (tag page navigation not yet a CSA capability)
- Human-stakeholder agnostic policy established: no individual names in site-facing documentation

**Site audit + stale fixes (v1.4.0 prep)**
README, index.md, and api/reference.json all had stale values from before v1.3.6–1.3.9. Fixed: version numbers, format counts (10→11), section statuses (§3 partial→active, §4 partial→active, §2 pending→active), missing §7 row in index.md, FAQ missing from README format list, stale roadmap item removed.

**Data-driven Headlines formula order (v1.4.0)**
`docs/headlines.md` Format-Specific Headline Formulas section was hardcoded and out of sync with the sidebar (FAQ was last but position 3 in nav). Refactored: each format's `<details>` block moved to `_includes/headline-formulas/[match].html`; headlines.md now loops `_data/navigation.yml` Article Formats children via Liquid. Reordering the sidebar automatically reorders the formulas list. Adding a new format requires: nav entry + include file only.

**General Guidelines DOCX**
Full §1 (all sections §1.1–§1.9) exported as formatted DOCX for upload to Google Docs. Saved to Desktop as `csa-general-guidelines.docx`. Omits Agent Routing section (technical infrastructure). Formatted with dark header tables, bold-prefixed bullets, blue note callouts.

## Previous Session: 2026-04-01

- **Personas:** Pierce consolidated 3 personas from CSA data; passed to Sara Vallone to refine/supplement.
- **PGS-115:** Google Discover Explainer visible to all users — bug being fixed (should be national team only).
- **Cluster tagging strategy:** Settled in alignment meeting. Variant linking now in dev queue. Document cluster tagging entry point (Research Draft stage) in standards once dev delivers.

## Previous Session: 2026-03-31 (CSA Weekly Update)

- **Format/persona separation decision:** Content formats and target audiences to be independently selectable. Dev request logged. Sara Vallone prefers format-first workflow.
- **PGS-95 (Google Discover Explainer):** Live as of 2026-03-31 (scoping bug being fixed via PGS-115).
- **Canonical ID = Cluster ID:** Confirmed by group.

## Previous Session: 2026-03-30

Added snapshot version bar to every page. Weekly trigger (Mon 8am Dallas) bundles all `docs/*.md` + `api/reference.json` into a snapshot JSON at `data/snapshots/`. Max 5 snapshots. Passkey `8812` gates restore download.
**Trigger:** `trig_01Qze9PVrNErCEYa1fMXxF2U` — shared with csa-dashboard and data-t1headlines. Details in ops-hub REFERENCE.md.

## Previous Session: 2026-03-24

Ingested new Word and Character Counts doc. **Site-wide updates:** SEO Title 60–70 → 50–70; Promo/Homepage Title 65–70 → 70–75; Meta Description 100–165 → 100–155. Exclusive/(Excl) changed from required to optional.

---

*This file follows the Tiered Context Architecture. Budget: ≤150 lines.*
*Current: ~105 lines*
