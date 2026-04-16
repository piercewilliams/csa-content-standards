# CSA Content Standards

Reference documentation for the Content Scaling Agent (CSA) — an AI content generation system. This site defines every rule the agent and its human editors follow when creating, optimizing, and publishing articles across all CSA-affiliated outlets.

**Live site:** https://csa-content-standards.netlify.app
**Current version:** 1.8.0

---

## What this is

The CSA is an AI system that writes and publishes entertainment and celebrity content at scale. This site is its rulebook. It documents voice and tone, headline formulas, SEO requirements, article structure, source credibility standards, publishing workflows, and more — with enough precision that both a human editor and an AI agent can open any page and get a complete, unambiguous answer.

The site is versioned (every change is logged), machine-readable (served as raw Markdown and a JSON API), and human-readable (rendered as a navigable site with a CMS for non-technical editors).

---

## Quick access

| What | URL |
|---|---|
| Rendered site | https://csa-content-standards.netlify.app |
| Master Reference (Markdown) | https://raw.githubusercontent.com/piercewilliams/csa-content-standards/main/docs/master-reference.md |
| JSON API | https://csa-content-standards.netlify.app/api/reference.json |
| CMS editor | https://csa-content-standards.netlify.app/admin |
| Changelog | https://csa-content-standards.netlify.app/docs/changelog |

---

## Audiences and how each uses this site

### AI agents
Ingest the full rulebook as a single document via raw Markdown or the structured JSON API. The Master Reference (`docs/master-reference.md`) contains all sections in order with machine-readable delimiters. Each section can also be ingested independently — every format page has a **⬇ Download** button linking to its raw source.

```
# Full rulebook (single document):
https://raw.githubusercontent.com/piercewilliams/csa-content-standards/main/docs/master-reference.md

# Section index with IDs, statuses, and URLs:
https://csa-content-standards.netlify.app/api/reference.json
```

**Agent Routing**

Rules in this site are distributed across specialized inputs and human-only workflows — not ingested as a single prompt. Every page declares its audiences in frontmatter, and every subsection is annotated with a machine-readable HTML comment:

```yaml
# frontmatter — page-level
agent_audiences: [general-style, headline, seo, human-only]
```

```html
<!-- section-level, in raw Markdown -->
<!-- AGENT-AUDIENCE: general-style -->      Voice, tone, explicit language policy, anchor text
<!-- AGENT-AUDIENCE: headline -->           H1 character count, formula, verb requirement, modifier rules
<!-- AGENT-AUDIENCE: seo -->               SEO title, focus keyphrase, meta description, promo title
<!-- AGENT-AUDIENCE: human-only -->         Bylines, compliance, workflows, tag page linking
<!-- AGENT-AUDIENCE: csa-target-audience --> CSA Target Audience Definition sections (persona name, description, focus areas)
```

To extract rules for a specific input: grep `docs/brand-guidelines.md` or `docs/master-reference.md` for `AGENT-AUDIENCE: [tag]` and take everything between that comment and the next. The `api/reference.json` includes `agent_audiences` on every section and format entry for programmatic filtering. The canonical tag vocabulary is in `_data/agent_routing.yml`.

### Human editors
Browse the rendered site. Use the sidebar to navigate sections or search by keyword. Every page has an **✏ Edit this page** button that opens it directly in the CMS editor — no GitHub account or technical knowledge required.

### Developers and technical contributors
Clone the repo and work directly with Markdown files in `/docs`. Netlify rebuilds the site automatically on every push to `main`. Technical files (navigation, layout, CSS, admin config, JSON API) are outside `/docs` — see [Technical structure](#technical-structure) below.

---

## Content structure

The standards are organized into ten numbered sections. Section numbers are stable references — all internal links and the JSON API use them.

| # | Section | Status | What it covers |
|---|---|---|---|
| 1 | [General Guidelines](https://csa-content-standards.netlify.app/docs/brand-guidelines) | ✅ Active | Universal rules — voice/tone, headlines, explicit language, internal links, bylines, AI disclosure, Helpful Content compliance. Applies to all formats unless a format-specific page overrides it. |
| 2 | [Headlines](https://csa-content-standards.netlify.app/docs/headlines) | ✅ Active | Outlet-specific headline standards (Us Weekly, Apple News) and format-specific headline formulas for all 11 active formats. |
| 3 | [Article Formats](https://csa-content-standards.netlify.app/docs/discover-explainer) | ✅ Active | Format-specific rules for each article type — structure, metadata, word counts, image specs, URL patterns, and pre-publish checklists. 11 formats active. |
| 4 | [Personas](https://csa-content-standards.netlify.app/docs/discover-browser) | ✅ Active | Audience definitions that guide tone, framing, and content decisions. Five personas active and live in CSA as Team Target Audiences (v1.8.0). Each persona page includes a CSA Target Audience Definition section formatted for direct entry into the CSA UI. |
| 5 | [Acceptable Sources](https://csa-content-standards.netlify.app/docs/acceptable-sources) | ✅ Active | Approved sources for factual reporting and citation, organized by vertical (news, entertainment, health, etc.). |
| 6 | [Publishing Guidelines](https://csa-content-standards.netlify.app/docs/publishing-guidelines) | 🔄 Partial | Platform-specific CMS entry requirements. CUE (McClatchy CMS) and Apple News are active; WordPress is pending. |
| 7 | [Follow-Up Content](https://csa-content-standards.netlify.app/docs/follow-up-content) | ✅ Active | Editorial strategy for extending breaking news coverage — decision framework and follow-up angle guide for 13 story types. |
| 8 | [AI Tool Responsibility](https://csa-content-standards.netlify.app/docs/tool-responsibility) | ✅ Active | Policy and escalation procedures for all team members using the CSA or any AI-assisted tool — single-piece concerns, supervisor conflict, recurring issues, plagiarism, partner content, and override documentation. |
| 9 | [Claims Validation](https://csa-content-standards.netlify.app/docs/claims-validation) | 🔄 Partial | Ideal-state specification for the CSA fact-checking module — verdict taxonomy, editorial action framework, source authority tiers, source count requirements, content-type rules, escalation logic, audit trail, and override tracking. Module implementation pending. |

### Active article formats (§3)

| Format | Page |
|---|---|
| Google Discover Explainer | [/docs/discover-explainer](https://csa-content-standards.netlify.app/docs/discover-explainer) |
| Everything to Know | [/docs/everything-to-know](https://csa-content-standards.netlify.app/docs/everything-to-know) |
| Recipe | [/docs/recipe](https://csa-content-standards.netlify.app/docs/recipe) |
| Timeline | [/docs/timeline](https://csa-content-standards.netlify.app/docs/timeline) |
| Interview | [/docs/interview](https://csa-content-standards.netlify.app/docs/interview) |
| Recap | [/docs/recap](https://csa-content-standards.netlify.app/docs/recap) |
| Fan Theory / Fan Question | [/docs/fan-content](https://csa-content-standards.netlify.app/docs/fan-content) |
| Obituary | [/docs/obituary](https://csa-content-standards.netlify.app/docs/obituary) |
| Couple / Baby | [/docs/couple-baby](https://csa-content-standards.netlify.app/docs/couple-baby) |
| Cast Introduction / Update | [/docs/cast](https://csa-content-standards.netlify.app/docs/cast) |
| FAQ / Service Journalism | [/docs/faq](https://csa-content-standards.netlify.app/docs/faq) |

### How format pages work

Every format page uses two conventions worth knowing:

- **Red text** marks rules that override General Guidelines for that format. If a rule appears in red, it takes precedence over the §1 equivalent. If it's not in red, it inherits from General Guidelines.
- **(REQUIRED)** labels mark fields that must be present before an article is published. Everything else is guidance.

Every format page also ends with a pre-publish checklist and a "What to Avoid" table.

---

## How to edit the site

### CMS (recommended for editors)

The CMS requires no technical knowledge and no GitHub account.

1. Go to https://csa-content-standards.netlify.app/admin
2. Log in with your Netlify Identity credentials (email and password)
3. Click any page to open it — left panel is the editor, right panel is a live preview
4. Click **Save** when done — changes commit to GitHub and the site rebuilds in 1–2 minutes

**There is no draft or staging step.** Saved changes publish immediately.

To add a new collaborator: go to Netlify → Site → Identity → Invite users. Enter their email. They'll receive an invitation to set a password. See the [Collaboration Guide](https://csa-content-standards.netlify.app/docs/collaboration-guide) for full setup instructions.

### Direct GitHub editing (for technical contributors)

All content is Markdown files in `/docs`. Edit them directly in GitHub or clone the repo and push. Netlify rebuilds automatically on every push to `main`.

**Technical files** (not editable via CMS — require direct GitHub editing):

| File | Controls |
|---|---|
| `_data/navigation.yml` | Sidebar navigation structure |
| `admin/config.yml` | CMS fields and collections |
| `_layouts/default.html` | Page layout template |
| `assets/css/main.css` | Stylesheet |
| `api/reference.json` | JSON API — section index |
| `search.json` | Full-text search index |
| `_includes/headline-formulas/[match].html` | Format headline formula blocks — one per format; order on Headlines page follows `navigation.yml` automatically |

When adding a new format page, all of these files typically need to be updated in addition to the new Markdown file.

---

## Technical structure

```
/
├── docs/                    # All content pages (Markdown)
│   ├── master-reference.md  # Single source of truth — all sections in one document
│   ├── brand-guidelines.md  # §1 General Guidelines
│   ├── headlines.md         # §2 Headlines
│   ├── [format pages]       # §3 Article Formats (11 files)
│   ├── discover-browser.md  # §4 Personas
│   ├── acceptable-sources.md# §5 Acceptable Sources
│   ├── publishing-guidelines.md # §6 Publishing Guidelines
│   ├── follow-up-content.md # §7 Follow-Up Content
│   ├── tool-responsibility.md   # §8 AI Tool Responsibility
│   ├── claims-validation.md     # §9 Claims Validation
│   ├── documentation.md     # Site documentation (meta)
│   ├── collaboration-guide.md
│   └── changelog.md
├── _includes/
│   └── headline-formulas/   # One .html per format — rendered in nav order on Headlines page
├── api/
│   └── reference.json       # JSON API — section index with IDs, statuses, URLs
├── admin/
│   └── config.yml           # Decap CMS configuration
├── _data/
│   ├── navigation.yml       # Sidebar nav (data-driven); also controls Headlines formula order
│   └── agent_routing.yml    # Canonical agent routing tag vocabulary
├── _layouts/
│   └── default.html         # Page template
├── assets/css/main.css      # Stylesheet
├── search.json / search.md  # Lunr.js full-text search
├── index.md                 # Homepage
├── _config.yml              # Jekyll config
└── netlify.toml             # Netlify build config
```

**Stack:**

| Layer | Technology |
|---|---|
| Static site generator | Jekyll 4.3 |
| Hosting and CI/CD | Netlify — auto-deploys on push to `main` |
| CMS | Decap CMS (Git-based, no database) |
| Authentication | Netlify Identity (email/password) |
| Search | Lunr.js (client-side, no external service) |
| Source control | GitHub |

---

## Versioning

This repo uses semantic versioning: `MAJOR.MINOR.PATCH`

| Increment | When to use |
|---|---|
| **PATCH** | Minor corrections, clarifications, or small additions within an existing section |
| **MINOR** | New subsection, new format page, new guidance block, or meaningful expansion |
| **MAJOR** | Structural changes, new top-level sections, or significant policy shifts |

Every change is recorded in [`docs/changelog.md`](https://csa-content-standards.netlify.app/docs/changelog) with the version number, month, and a description of what changed and why.

---

## Version history and rollback

A row of version pills appears at the bottom of every page on the site. Each pill represents a weekly snapshot of the documentation — automatically taken every Monday at 8 AM. This lets you browse any historical state of the standards and, if needed, restore the entire site to a past version.

### Browsing a past version

1. Scroll to the bottom of any page and click a version pill (e.g. "Mar 31, 2026").
2. A full-page overlay opens on top of the current site.
3. The **left sidebar** lists every documentation file that existed in that snapshot — `master-reference.md` is always first, followed by all other docs in alphabetical order.
4. Click any item in the sidebar to read that document as it existed at that point in time. The content is rendered as formatted HTML (not raw Markdown).
5. To close the overlay and return to the live site: click the **×** button in the top-right corner, or press **Escape**.

> The overlay is read-only. Browsing a snapshot does not affect the live site.

### Restoring a past version to the live site

Use this only if the documentation has been corrupted, accidentally overwritten, or significantly changed in a way that needs to be undone.

1. Browse to the version you want to restore (steps 1–3 above).
2. Click **Restore this version** in the overlay header.
3. A modal appears. Enter the passkey: **8812**
4. Click **Download & Restore** — the files download automatically in sequence (~150ms apart to avoid browser popup blockers):
   - All `docs/*.md` files — place each in the `docs/` directory
   - `reference.json` — place in `api/`
   - `snapshots-index.json` — rename to `index.json` and place in `data/snapshots/`
5. Push all files via GitHub Desktop. Netlify will rebuild the site automatically in 1–2 minutes.

> **Note:** Restoring removes snapshot history newer than the version you restored to. The modal tells you exactly how many versions will be removed.

### How snapshots are maintained

- Snapshots are taken automatically. You do not need to do anything.
- The trigger runs every **Monday at 8 AM Dallas time**.
- A maximum of **5 snapshots** are kept. When a 6th is taken, the oldest is deleted automatically.
- If the snapshot bar shows no pills, the trigger has not yet run — check [claude.ai/code/scheduled](https://claude.ai/code/scheduled) and look for "Weekly Snapshots - All Sites."

---

## Contributing

1. Create a branch: `update/[short-description]`
2. Make changes
3. Open a pull request with a summary of what changed and why
4. One other team member must approve before merging to `main`

---

## Roadmap

The site was designed for incremental expansion. The following are currently in progress or planned:

- **§2 Headlines** — Us Weekly and Apple News blocks are active; additional outlet standards are pending
- **§6 Publishing Guidelines** — CUE (McClatchy CMS) and Apple News are active; WordPress guidelines are pending

The infrastructure supporting this expansion is already in place: the JSON API tracks section status (`active` / `partial` / `pending`) so agents can check coverage programmatically, the CMS is pre-configured for every section, and the sidebar navigation is data-driven so new entries require a single-line addition to `_data/navigation.yml`.
