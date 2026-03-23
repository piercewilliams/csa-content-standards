---
layout: default
title: Changelog
cms_entry: changelog
---

# Changelog

All notable changes to this document are recorded here.
Format: `[VERSION] — YYYY-MM — Description`

---

## [1.0.8] — 2026-03
- Google Discover Explainer fully reconciled with master style guide: gaps filled and conflicts resolved
- Added: Discover-specific note that the Discover headline may differ from the SEO title
- Added: "Optimize before publishing" urgency note with re-indexing timing detail
- Added: SEO Title section intro and too-short/too-long character count guidance
- Added: Meta description practical tip ("pull two sentences from the article")
- Added: Revival content definition — nostalgic angles and "one year later" perspectives
- Added: "What to Avoid" reference table with prohibited items and reasons
- Added: "If updated article: byline and dateline handled per §1.5" to pre-publish checklist
- Added: "Local and national variants confirmed" to pre-publish checklist
- Updated: Internal Links section to include SEO rationale for the 3–5 link count
- Updated: Tone section to add "Confident and specific — avoid vague generalities"
- Updated: Focus Keyphrase section to note real-person search intent and Google Trends usage
- Red override highlighting confirmed current throughout

## [1.0.7] — 2026-03
- Google Discover Explainer: format-override summary paragraph added at top of page; all guidance that overrides or extends Brand Guidelines highlighted in red throughout
- Gemfile.lock updated to include Linux platform (`x86_64-linux`) alongside macOS — fixes Netlify build failures caused by platform-specific gem resolution

## [1.0.6] — 2026-03
- Required labels (`*type: required*`) replaced with **(REQUIRED)** on all pages — now appears as bold inline text directly below each relevant subheading
- Site infrastructure: CSS extracted to external stylesheet (`assets/css/main.css`); sidebar navigation made data-driven via `_data/navigation.yml`; Gemfile.lock added; `.gitignore` added with standard Jekyll excludes
- URLs unified — all references updated from `piercewilliams.github.io` to `csa-content-standards.netlify.app`; `github_username` and `github_repo` added to `_config.yml`
- JSON API (`api/reference.json`) overhauled: URLs corrected, Headlines §2 entry added, section numbers added, `standalone_url` and `notes` fields added per section
- Section statuses on homepage corrected to accurately reflect active/partial/pending state
- Master Reference added to sidebar navigation and CMS admin panel
- CMS editor (`admin/config.yml`) updated: Master Reference entry added, contextual hints added to all document fields
- `assets/images/` folder created to support CMS media uploads
- Entertainment & Celebrity vertical added to Acceptable Sources (8 sources: People, EW, Variety, THR, Billboard, IMDb, Rotten Tomatoes, Deadline)
- WordPress (§6.2) publishing skeleton populated — required fields, AI disclosure, and tags/categories guidance now documented
- Headlines (§2) Universal Defaults block added — character counts, casing rules, and formula guidance now visible on the page
- Article Formats §3.2 stub added as a placeholder for future format documentation
- README updated to reflect current site URL and 6-section structure

## [1.0.5] — 2026-03
- Site migrated from GitHub Pages to Netlify for CMS authentication support
- CMS login switched from GitHub OAuth to Netlify Identity (email/password)
- Collaboration Guide rewritten to reflect Netlify/Decap CMS setup, added editor usage instructions
- Headlines renamed from "Headlines by Outlet" and renumbered as §2; all subsequent sections renumbered (§3–§6)
- Pre-publish checklist bullet formatting fixed on Google Discover Explainer page
- Required labels standardized to `*type: required*` format across all pages
- Collaboration Guide added to CMS admin panel

## [1.0.4] — 2026-03
- Headlines section added with universal rules and outlet-specific accordion structure
- Acceptable Sources reorganized into expandable category accordions
- Collaboration Guide added covering editor workflow, owner approval, and new collaborator setup
- Edit this page button added to all pages
- Section numbers removed from individual page headings
- Changelog moved below Collaboration Guide in sidebar

## [1.0.3] — 2026-03
- Acceptable Sources (§4) populated with 37 sources across 6 categories
- Section statuses updated to Draft — pending approval

## [1.0.2] — 2026-03
- Site renamed to CSA Content Standards
- Removed McClatchy branding from title

## [1.0.1] — 2026-03
- Custom layout and sidebar navigation
- Replaced Jekyll theme with custom layout
- Master reference split into individual section pages, each with per-section download link

## [1.0.0] — 2026-03
- Initial release
- Brand Guidelines (§1): voice/tone, headlines, explicit language, internal links, bylines, AI disclosure, Helpful Content standard, universal compliance
- Article Formats (§3): Google Discover Explainer (§3.1) — complete
- Personas (§4): The Discover Browser (§4.1) — complete
- Acceptable Sources (§5): stub — pending editorial input
- Publishing Guidelines (§6): CUE complete; WordPress and other destinations stubbed
