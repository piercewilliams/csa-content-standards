# CSA Content Standards — Working Context

**Phase:** Maintenance / Active Refinement
**Status:** Active
**Last session:** 2026-04-15 — v1.7.0–v1.8.0: CSA Target Audience Definition sections built for all 5 persona pages; format pages scaffolded then removed per Sara Vallone; Tone sections added to §4.2–§4.5; csa-target-audience AGENT-AUDIENCE tag added. Pierce granted CSA Admin by Susannah — entering remaining 3 personas as Team Target Audiences in CSA production (Discover Browser + Science Enthusiast done by Susannah; Curious Optimizer, Curious Explorer, Watercooler Insider = Pierce's to-do).

For stable reference facts: see [REFERENCE.md](REFERENCE.md)
For session history: see [sessions/](sessions/)

---

## Current State

- **Site:** Live at https://csa-content-standards.netlify.app
- **Repo:** https://github.com/piercewilliams/csa-content-standards
- **Last changes:** 2026-04-15 — v1.8.0. All 5 persona pages now have fully populated CSA Target Audience Definition sections (Name, Description with core driver + What They Respond To specifics, Focus areas). csa-target-audience AGENT-AUDIENCE tag added — unique, greppable from raw Markdown. Sara Vallone confirmed personas+formats decoupled in CSA UI — no standalone format pages needed for persona-derived content types.
- **Blockers:** None known
- **AI Tool Responsibility page (`docs/tool-responsibility.md`):** Finalized as of 2026-04-07. One open item: override documentation location (`[location TBD, pending CSA team input]`). All other gaps resolved.
- **AGENT-AUDIENCE routing §1:** Fully confirmed live 2026-04-08 — all §1 sections tagged and routing correctly. Susannah is using Claude to fetch content by tag during uploads.

## What's Next

0. [x] ~~**Enter remaining 3 Team Target Audiences in CSA production**~~ — Pierce is CSA Admin as of 2026-04-15 (Susannah Locke). Susannah entered The Discover Browser + The Wonder-Driven Science Enthusiast. Pierce to enter: **The Curious Optimizer** (§4.2), **The Curious Explorer** (§4.3), **The Watercooler Insider** (§4.5). Workflow: CSA production → National Team pub → Import Draft → Step 3 → scroll to Team Target Audiences → Add another → Name / Why this audience cares / Focus Areas → Save. Instructions: [Confluence Tango](https://mcclatchy.atlassian.net/wiki/spaces/~712020c6aefbf4e0b0490681e00766cbcd78ef/pages/1886912513/Adding+Team+Target+Audiences+in+CSA+Tango+capture) + [Google Doc recording](https://docs.google.com/document/d/1QQmTLAZSuGQcFGIQiHZQI1H-otnVbUdnDOHYTjPYgiY/edit?tab=t.rs50k9rswcdl). Content for each persona: pull Name/Description/Focus Areas from §4.2/§4.3/§4.5 persona pages.
1. [ ] **Persona experimentation — Watercooler Insider + Curious Explorer** — All 5 personas pinned to National CSA accounts (2026-04-02). Experimentation on §4.4 and §4.5 to begin once live. Watch for performance data and any standard updates that follow.
2. [ ] **Apple News + MSN personas** — Still pending Andy's review before use.
3. [x] **Document format/persona separation** — Sara Vallone confirmed 2026-04-15: personas and formats are decoupled in CSA UI. Format guidance per persona dropped; persona pages carry full audience definition. Architecture now reflected in v1.8.0 site state and changelog.
4. [ ] **Claims validation integration** — §9 spec complete (v1.5.0). Sara Vallone parameter session still pending; once complete, scope the Gary API integration and update §9 with any integration-specific workflow details.
5. [ ] **Extend AGENT-AUDIENCE routing beyond §1** — §1 fully confirmed. Audit §2+ sections and add AGENT-AUDIENCE tags where applicable.
6. [ ] **§8 override documentation location** — `[location TBD, pending CSA team input]` in tool-responsibility.md and claims-validation.md. Resolve once CSA team decides on CMS field, Slack thread, or separate log.
7. [ ] **§9 role-level module access** — Which roles can view raw module output in the CSA UI. Pending confirmation with Rajiv and Susannah. Update claims-validation.md Content Pipeline Tiers table and Audit Trail section once confirmed.

## Recent Session: 2026-04-10 — Pending format treatment + nav/accordion housekeeping

- 8 article formats marked in-development: Cast Introduction / Update, Couple / Baby, Fan Theory / Fan Question, Interview, Obituary, Recap, Recipe, Timeline.
- **Nav (`navigation.yml`):** Live Article Formats first (A–Z), then pending formats (A–Z) in `<em>` italics with `(pending)` prefix. Same live-first/pending-second pattern applied to Platform Formats (Apple News, SmartNews) and Personas (A–Z).
- **Page h1s:** `(pending)` appended after name on each of the 8 pending format pages.
- **Headline formula accordions (`_includes/headline-formulas/*.html`):** `<summary>` updated to `<em>Name (pending) (§X.X)</em>` for all 8 pending formats. Order auto-follows `navigation.yml` so no separate maintenance needed.

## Previous Session: 2026-04-09 — Headline standards audit + alignment

Cross-repo consistency audit against data-headlines grader and empirical findings. All fixable conflicts resolved:

- `docs/headlines.md` (Us Weekly Apple News block): featured placement exception removed (0% featuring rate, no data support). WTK added as third formula to avoid alongside question and number-led. "Did you miss" avoidance added to Universal Defaults.
- `docs/headlines.md`: Push Notifications `<details>` block added — 70–89 chars, data-validated (1.45% median CTR, n=874, p<0.05).
- `docs/platform-apple-news.md`: same featured exception removal + WTK added to avoid list. Overview blurb updated.
- `docs/brand-guidelines.md` §1.2: platform override callout added under Character Counts (Apple News 90–120, SmartNews 70–90 override the 80–100 universal default).
- `api/reference.json`: `platform_char_counts` + `formula_constraints` structured objects added to §2 for machine consumption by CSA dev team.

## Previous Sessions

- **2026-04-08 v1.6.2** — SEO Keywords (Meta Keywords) guidance added: §1.2 + all §3 format sections (§3.1–3.10); Pre-Publish Checklist; changelog entry
- **2026-04-08 v1.6.1** — Platform Formats consistency audit: all discrepancies corrected; data-validated labels added to §10.1/§10.2; publishing-guidelines §6.3 and headlines §2 updated
- **2026-04-07 v1.6.0** — Platform Formats §10 built: SmartNews §10.1 + Apple News §10.2 standalone pages
- **2026-04-06** — Integrity audit: stale master-reference header fixed; missing `agent_audiences` frontmatter added to brand-guidelines.md
- **2026-04-02 v1.3.7–1.4.0** — §3.11 FAQ added; Agent Routing system built (two-layer annotation, agent_routing.yml, api/reference.json); site-wide stale values fixed
- **2026-03-30/31/04-01** — Snapshot version bar; format/persona separation decision; PGS-95 live; cluster tagging entry point documented

Full detail in [sessions/2026-04.md](sessions/2026-04.md) and [sessions/2026-03.md](sessions/2026-03.md)

---

*This file follows the Tiered Context Architecture. Budget: ≤150 lines.*
*Current: ~70 lines*
