# CSA Content Standards — Working Context

**Phase:** Maintenance / Active Refinement
**Status:** Active
**Last session:** 2026-04-08 (SEO Keywords guidance added — §1.2 + all §3 format sections — v1.6.2)

For stable reference facts: see [REFERENCE.md](REFERENCE.md)
For session history: see [sessions/](sessions/)

---

## Current State

- **Site:** Live at https://csa-content-standards.netlify.app
- **Repo:** https://github.com/piercewilliams/csa-content-standards
- **Last changes:** SEO Keywords (Meta Keywords) guidance added (v1.6.2, 2026-04-08) — new `### SEO Keywords (Meta Keywords) Rules` section in §1.2; field added to Character Counts; Pre-Publish Checklist updated; `### SEO Keywords (Meta Keywords)` **(REQUIRED)** subsection added to all ten §3 format sections. Rules: 1–5 keywords, single words acceptable, all lowercase, comma-separated, location names required for local stories.
- **Blockers:** None known
- **AI Tool Responsibility page (`docs/tool-responsibility.md`):** Finalized as of 2026-04-07. One open item: override documentation location (`[location TBD, pending CSA team input]`). All other gaps resolved.
- **AGENT-AUDIENCE routing §1:** Fully confirmed live 2026-04-08 — all §1 sections tagged and routing correctly. Susannah is using Claude to fetch content by tag during uploads.

## What's Next

1. [ ] **Persona experimentation — Watercooler Insider + Curious Explorer** — All 5 personas pinned to National CSA accounts (2026-04-02). Experimentation on §4.4 and §4.5 to begin once live. Watch for performance data and any standard updates that follow.
2. [ ] **Apple News + MSN personas** — Still pending Andy's review before use.
3. [ ] **Document format/persona separation** — Decision 2026-03-31: content formats and target audiences to be independently selectable (mix-and-match). Dev request logged. Codify architecture here once tooling is defined.
4. [ ] **Claims validation integration** — §9 spec complete (v1.5.0). Sara Vallone parameter session still pending; once complete, scope the Gary API integration and update §9 with any integration-specific workflow details.
5. [ ] **Extend AGENT-AUDIENCE routing beyond §1** — §1 fully confirmed. Audit §2+ sections and add AGENT-AUDIENCE tags where applicable.
6. [ ] **§8 override documentation location** — `[location TBD, pending CSA team input]` in tool-responsibility.md and claims-validation.md. Resolve once CSA team decides on CMS field, Slack thread, or separate log.
7. [ ] **§9 role-level module access** — Which roles can view raw module output in the CSA UI. Pending confirmation with Rajiv and Susannah. Update claims-validation.md Content Pipeline Tiers table and Audit Trail section once confirmed.

## Recent Session: 2026-04-08 (SEO Keywords — v1.6.2)

Added SEO Keywords (Meta Keywords) guidance site-wide, sourced from TEO team guidelines refined with National team input (Pierce + Oliver Felix + Susannah Locke, 2026-04-08).

**Rules as codified:**
- 1–5 keywords; single words are acceptable (National team refinement — TEO original required multi-word phrases only)
- All lowercase, comma-separated
- Reflect the story's primary focus
- Include location names for stories with local interest
- Example: `travel, supplements, Jason Kelce, dca plane crash, washington plane crash`

**Changes made:**
- `docs/master-reference.md` §1.2 Character Counts: `- **SEO Keywords (Meta Keywords):** 1–5 keywords` added
- `docs/master-reference.md` §1.2: `### SEO Keywords (Meta Keywords) Rules` section added (tagged `<!-- AGENT-AUDIENCE: seo -->`) after Meta Description Rules
- `docs/master-reference.md` §3.1 Pre-Publish Checklist: SEO keywords line added
- `docs/master-reference.md` all §3 format sections (§3.1–3.10): `### SEO Keywords (Meta Keywords)` **(REQUIRED)** subsection added after `### Meta Description` in each

## Previous Session: 2026-04-08 (Platform Formats consistency audit — v1.6.1)

Full audit of both platform pages against the validated source guidance. All discrepancies corrected; validated performance data labeled throughout.

**Discrepancies found and fixed:**
- `docs/publishing-guidelines.md §6.3` — stale 80–139 Apple News headline range (flatplan.io, superseded) replaced with validated 90–120 (110–119 sweet spot); no-question/no-number-led/separate-title/subtitle rules added in red; defers to §10.2
- `docs/headlines.md` — Apple News block under UsW rewritten: 90–120 (not inherited UsW 80–100), no-question/no-number-led in red, featured placement exception documented, cross-ref to §10.2; SmartNews outlet block added (70–90 chars, formula constraints, RSS `<title>` = SEO title note, cross-ref to §10.1)
- `_data/agent_routing.yml` — SmartNews seo coverage entry added (RSS `<title>` = SEO title)

**Data-validated labels added to:**
- `docs/platform-smartnews.md` — scope blockquote and headline section (sweet spot, question/WTK/number-led findings)
- `docs/platform-apple-news.md` — scope blockquote and headline section (sweet spot, question/number-led findings)
- `api/reference.json` — SmartNews and Apple News notes
- `docs/master-reference.md` — §10.1 and §10.2 summary table headline rows

## Previous Session: 2026-04-07 (Platform Formats §10 — v1.6.0)

Platform Formats added as §10 — two standalone pages built (structured identically to §3 Article Format pages: red overrides, AGENT-AUDIENCE comments, checklist, What to Avoid):

**SmartNews §10.1** (`docs/platform-smartnews.md`) — Headline 70–90 chars (80–99 sweet spot); no question headlines; no "What to Know" endings; number-led positive; SmartFormat RSS/XML; no CSS/scripted styling; no GIFs; feed thumbnail `<media:thumbnail>` 4:3 320×240px; GA4 = in-app views not referral. Persona: The SmartNews Skimmer.

**Apple News §10.2** (`docs/platform-apple-news.md`) — Headline 90–120 chars (110–119 sweet spot); no question or number-led (algorithmic reach); featured placement exception; subtitle required; AI content policy (byline + News Publisher metadata); 100% self-sold / 70% Apple-sold. Persona: The Apple News Explorer.

Infrastructure: navigation.yml, admin/config.yml, master-reference.md, api/reference.json, documentation.md, index.md, README.md, changelog.md, agent_routing.yml all updated.

## Previous Session: 2026-04-06

Integrity audit against v1.4.0. Fixed: master-reference.md stale header (version, date, section count); brand-guidelines.md and master-reference.md missing Layer 1 `agent_audiences` frontmatter — two-layer routing system now complete on all content pages.

## Previous Session: 2026-04-02

§3.11 FAQ / Service Journalism added (v1.3.7). Agent Routing system built (v1.3.8–1.3.9): two-layer annotation (`agent_audiences` frontmatter + `<!-- AGENT-AUDIENCE: -->` comments) applied to all 21 content pages; `_data/agent_routing.yml` created; `api/reference.json` updated; human-stakeholder-agnostic policy established. Site-wide stale values fixed (v1.4.0). Headlines formula order made data-driven via Liquid loop over navigation.yml.

## Previous Session: 2026-03-30 / 2026-03-31 / 2026-04-01

Snapshot version bar added (Mon 8am Dallas trigger, max 5 snapshots, passkey `8812`; trigger `trig_014MR5mJJxFsVYLdVdDU4u1d`). Format/persona separation decision logged (independently selectable, dev queued). PGS-95 live; PGS-115 (scoping bug) in progress. Cluster tagging entry point = Research Draft stage (pending dev delivery). Persona consolidation passed to Sara Vallone.

---

*This file follows the Tiered Context Architecture. Budget: ≤150 lines.*
*Current: ~100 lines*
