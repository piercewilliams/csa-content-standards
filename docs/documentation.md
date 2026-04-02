---
layout: default
title: Documentation
cms_entry: documentation
---

# Documentation

This page documents the CSA Content Standards site itself — what it contains, how it is structured, how to read it, how to edit it, and how it is built and hosted.

[⬇ Download this page](https://raw.githubusercontent.com/{{ site.github_username }}/{{ site.github_repo }}/main/docs/documentation.md){: .btn }

---

## What This Site Is

**CSA Content Standards** is the authoritative reference for the Content Scaling Agent (CSA) and the editorial teams who work alongside it. It documents the rules, formats, and guidelines that govern how content is created, structured, optimized, and published across all CSA-affiliated outlets and destinations.

The site is versioned, machine-readable, and human-readable. Every rule has a section number. Every change is logged. The intent is that both a human editor and an AI agent can open any page and get a complete, unambiguous answer.

**Site URL:** [csa-content-standards.netlify.app](https://csa-content-standards.netlify.app)
**Repository:** [github.com/{{ site.github_username }}/{{ site.github_repo }}](https://github.com/{{ site.github_username }}/{{ site.github_repo }})
**JSON API:** [/api/reference.json](/api/reference.json)

---

## Content Sections

The site is organized into seven numbered sections plus supporting reference pages.

| # | Section | What it covers |
|---|---|---|
| 1 | [General Guidelines]({{ "/docs/brand-guidelines" | relative_url }}) | Universal rules — voice and tone, headlines, explicit language, internal links, bylines, AI disclosure, Helpful Content standard, compliance. Applies to all formats and platforms unless explicitly overridden. |
| 2 | [Headlines]({{ "/docs/headlines" | relative_url }}) | Outlet-specific headline standards and all format-specific headline formulas — character counts, casing, formula variations, and no-verb exceptions by format. |
| 3 | [Article Formats]({{ "/docs/discover-explainer" | relative_url }}) | Format-specific rules for each article type — structure, metadata, word count, image specs, URL patterns, tags, and pre-publish checklists. Eleven formats are currently active. |
| 4 | [Personas]({{ "/docs/discover-browser" | relative_url }}) | Audience definitions used to guide tone, framing, and content decisions. Five personas are currently active: The Discover Browser, The Curious Optimizer, The Wonder-Driven Science Enthusiast, The Curious Explorer, and The Watercooler Insider. |
| 5 | [Acceptable Sources]({{ "/docs/acceptable-sources" | relative_url }}) | Approved source categories and specific outlets for factual reporting and citation across all verticals. |
| 6 | [Publishing Guidelines]({{ "/docs/publishing-guidelines" | relative_url }}) | Platform-specific CMS entry requirements — CUE (McClatchy CMS), WordPress, Apple News, and additional export destinations. |
| 7 | [Follow-Up Content]({{ "/docs/follow-up-content" | relative_url }}) | Editorial strategy for extending breaking news coverage — decision framework and follow-up angle guide for 13 story types. |

---

## Active Article Formats

Eleven article formats are currently documented under §3. Each has its own standalone page.

| Format | Section | Page |
|---|---|---|
| Google Discover Explainer | §3.1 | [discover-explainer]({{ "/docs/discover-explainer" | relative_url }}) |
| Everything to Know | §3.2 | [everything-to-know]({{ "/docs/everything-to-know" | relative_url }}) |
| Recipe | §3.3 | [recipe]({{ "/docs/recipe" | relative_url }}) |
| Timeline | §3.4 | [timeline]({{ "/docs/timeline" | relative_url }}) |
| Interview | §3.5 | [interview]({{ "/docs/interview" | relative_url }}) |
| Recap | §3.6 | [recap]({{ "/docs/recap" | relative_url }}) |
| Fan Theory / Fan Question | §3.7 | [fan-content]({{ "/docs/fan-content" | relative_url }}) |
| Obituary | §3.8 | [obituary]({{ "/docs/obituary" | relative_url }}) |
| Couple / Baby | §3.9 | [couple-baby]({{ "/docs/couple-baby" | relative_url }}) |
| Cast Introduction / Update | §3.10 | [cast]({{ "/docs/cast" | relative_url }}) |
| FAQ / Service Journalism | §3.11 | [faq]({{ "/docs/faq" | relative_url }}) |

---

## How to Read a Format Page

All format pages share the same structure and conventions.

### Red text

Text rendered in <span style="color: #dc2626;">**red**</span> marks guidance that **overrides or extends General Guidelines**. If a rule appears in red on a format page, it takes precedence over the General Guidelines equivalent for that format. If a rule is not in red, it inherits from General Guidelines.

Every format page opens with a blockquote summarizing exactly which General Guidelines rules are overridden and how.

### (REQUIRED) labels

Every spec element marked **(REQUIRED)** must be present before the article is published. Elements without this label are guidance, not requirements.

### Pre-Publish Checklist

Every format page ends with a pre-publish checklist — a complete list of everything that must be verified before hitting publish. This checklist is format-specific and incorporates both the format's own requirements and the relevant universal General Guidelines rules.

### What to Avoid

Most format pages include a "What to Avoid" table listing prohibited patterns with the reason each is prohibited. The reason field is always one of: format requirement, tone requirement, or a General Guidelines rule reference.

### Download button

The **⬇ Download this section** button at the top of each format page links directly to the raw Markdown source on GitHub — useful for ingesting pages into external tools or agents.

---

## How to Navigate the Site

### Sidebar

The left sidebar is the primary navigation. Article Format pages are nested under the "Article Formats" group — click the group to expand it. All other sections are top-level links.

### Search

A search box appears at the top of the sidebar on every page. Type a term and press Enter to go to the search page — results are drawn from the content of all docs pages. The search page also updates results live as you type.

### Master Reference

The [Master Reference]({{ "/docs/master-reference" | relative_url }}) is a single-document version of the entire site — all sections condensed into one page in order, with machine-readable section delimiters. It is the primary source for AI agents that ingest the standards as a single document.

Download the raw Markdown: `https://raw.githubusercontent.com/{{ site.github_username }}/{{ site.github_repo }}/main/docs/master-reference.md`

### JSON API

The [JSON API](/api/reference.json) provides a structured index of all sections and formats — section numbers, IDs, titles, statuses, and URLs. Use it to programmatically check which sections are active, which are pending, and where each section lives.

---

## How to Edit the Site

### Using the CMS (recommended for editors)

The CMS is available at [csa-content-standards.netlify.app/admin](https://csa-content-standards.netlify.app/admin/). Login requires Netlify Identity — no GitHub account needed.

1. Go to `/admin`
2. Log in with your email and password (see Collaboration Guide for setup)
3. Click any page to open it in the editor
4. Make changes in the left panel — the right panel shows a live preview
5. Click **Save** — changes are committed to the repository and the site rebuilds in 1–2 minutes

There is no draft or staging step — saved changes publish immediately.

The **✏ Edit this page** link in the upper right of every content page takes you directly to that page's CMS entry.

### Direct GitHub editing (for technical contributors)

All content is Markdown files in the `/docs` directory of the GitHub repository. Files can be edited directly in GitHub or cloned locally and pushed. Netlify rebuilds automatically on every push to `main`.

**For technical changes** (navigation, layout, CSS, search, admin config) — these require direct GitHub editing:
- Sidebar navigation: `_data/navigation.yml`
- CMS admin config: `admin/config.yml`
- Page layout template: `_layouts/default.html`
- Stylesheet: `assets/css/main.css`
- Search index: `search.json`
- JSON API: `api/reference.json`

See the [Collaboration Guide]({{ "/docs/collaboration-guide" | relative_url }}) for the full editor workflow and how to add new collaborators.

---

## Versioning and Changelog

The site uses semantic-style versioning: `[MAJOR.MINOR.PATCH]`

- **PATCH** — minor corrections, clarifications, or small additions within an existing section
- **MINOR** — new subsection, new format page, new guidance block, or meaningful expansion of an existing section
- **MAJOR** — structural changes, new top-level sections, or significant policy shifts

Every change is recorded in the [Changelog]({{ "/docs/changelog" | relative_url }}) with the version number, month, and a description of what changed and why. The current version is always the first entry.

---

## Technical Stack

| Layer | Technology |
|---|---|
| Static site generator | [Jekyll](https://jekyllrb.com/) |
| Hosting and deployment | [Netlify](https://netlify.com) — auto-deploys on push to `main` |
| CMS | [Decap CMS](https://decapcms.org/) (formerly Netlify CMS) — Git-based, no database |
| Authentication | Netlify Identity — email/password, no GitHub account required |
| Search | [Lunr.js](https://lunrjs.com/) — client-side, no external service |
| Source control | GitHub — `github.com/{{ site.github_username }}/{{ site.github_repo }}` |
| Markup | Markdown (CommonMark) with Jekyll Liquid templating |

The site generates two machine-readable outputs at build time:
- **`/api/reference.json`** — structured section index with IDs, statuses, and URLs
- **`/search.json`** — full-text search index consumed by Lunr.js on the search page
