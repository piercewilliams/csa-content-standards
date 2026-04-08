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
- **Last changes:** SEO Keywords (Meta Keywords) guidance added (v1.6.2, 2026-04-08) — `### SEO Keywords (Meta Keywords) Rules` in §1.2; field in Character Counts; Pre-Publish Checklist updated; `### SEO Keywords (Meta Keywords)` **(REQUIRED)** added to all ten §3 format sections. Rules: 1–5 keywords, single words acceptable, all lowercase, comma-separated, location names for local stories.
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

Added SEO Keywords (Meta Keywords) guidance site-wide. Source: TEO team guidelines (Oliver Felix), refined with National team input (Pierce + Susannah Locke). Single words are acceptable — National refinement from TEO's multi-word-only original.

- `docs/master-reference.md` §1.2: new `### SEO Keywords (Meta Keywords) Rules` section; field in Character Counts; Pre-Publish Checklist line added
- `docs/master-reference.md` §3.1–3.10: `### SEO Keywords (Meta Keywords)` **(REQUIRED)** inserted after `### Meta Description` in each format section
- `docs/changelog.md`: v1.6.2 entry

## Previous Sessions

- **2026-04-08 v1.6.1** — Platform Formats consistency audit: all discrepancies corrected; data-validated labels added to §10.1/§10.2; publishing-guidelines §6.3 and headlines §2 updated
- **2026-04-07 v1.6.0** — Platform Formats §10 built: SmartNews §10.1 + Apple News §10.2 standalone pages
- **2026-04-06** — Integrity audit: stale master-reference header fixed; missing `agent_audiences` frontmatter added to brand-guidelines.md
- **2026-04-02 v1.3.7–1.4.0** — §3.11 FAQ added; Agent Routing system built (two-layer annotation, agent_routing.yml, api/reference.json); site-wide stale values fixed
- **2026-03-30/31/04-01** — Snapshot version bar; format/persona separation decision; PGS-95 live; cluster tagging entry point documented

Full detail in [sessions/2026-04.md](sessions/2026-04.md) and [sessions/2026-03.md](sessions/2026-03.md)

---

*This file follows the Tiered Context Architecture. Budget: ≤150 lines.*
*Current: ~70 lines*
