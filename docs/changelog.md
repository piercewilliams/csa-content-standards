---
layout: default
title: Changelog
cms_entry: changelog
---

# Changelog

All notable changes to this document are recorded here.
Format: `[VERSION] — YYYY-MM — Description`

---

## [1.3.6] — 2026-04
- Personas §4: Four new personas added — The Curious Optimizer (§4.2), The Wonder-Driven Science Enthusiast (§4.3), The Curious Explorer (§4.4), and The Watercooler Insider (§4.5) — each with full standalone pages, navigation entries, CMS admin entries, and master reference condensed summaries
- Personas §4: The Discover Browser (§4.1) updated — Content Framework section added (What It Is / Why It Matters / Who It's For / How to Experience It); familiar performance lanes (gut health, travel hacks, personal finance, functional foods) added to What They Respond To
- Master Reference §4.1: Stale values corrected — word count updated from 740–816 to 400–800 (matches standalone page and v1.1.0 correction); meta description updated from 140–160 to 100–155 (matches v1.3.0 correction); "see full page" link added for consistency with §4.2–§4.5
- Documentation §4 row updated to list all five active personas
- Section 4 status updated to Active across homepage and JSON API

## [1.3.5] — 2026-03
- "Brand Guidelines" renamed to "General Guidelines" across the entire site — page title, sidebar navigation, CMS admin, JSON API, master reference, all format pages, and all cross-references updated; URL (`/docs/brand-guidelines`) and historical changelog entries unchanged

## [1.3.4] — 2026-03
- Documentation page added (`docs/documentation.md`) — covers: what the site is and who it's for, all seven sections with descriptions, active format index, how to read a format page (red text convention, REQUIRED labels, pre-publish checklists, What to Avoid), how to navigate (sidebar, search, master reference, JSON API), how to edit (CMS and direct GitHub), versioning and changelog format, and full technical stack
- Navigation, CMS admin, and JSON API updated to include Documentation

## [1.3.3] — 2026-03
- Headlines §2: "Format-Specific Headline Formulas" section added — one accordion block per format, each documenting the locked formula(s), character count, key exceptions, outlet variations, and a link to the full spec; covers all 10 active formats: Discover Explainer, Everything to Know, Recipe, Timeline, Interview, Recap, Fan Theory / Fan Question, Obituary, Couple / Baby, Cast Introduction / Update
- Notable format-specific callouts consolidated: no-verb exception (Timeline), UsW-only alternate (Recap "Ending Explained"), Discover-specific Baby variants (Couple / Baby), (EXCLUSIVE) required in H1 not just SEO title (Interview), WW legacy framing note (Obituary), UsW Cast Introduction alternate (Cast)

## [1.3.2] — 2026-03
- Brand Guidelines §1.2: "When to Update Headlines & SEO Titles" expanded from four bullets to three documented scenarios with before/after examples — (1) new information changes the story, (2) article underperforms and Google Trends reveals a better keyword, (3) follow-up story SEO title doesn't match the active search query (key principle: align to what readers are already searching, not the new development)
- Master Reference §1.2 updated with condensed three-scenario summary and pointer to Brand Guidelines for examples

## [1.3.1] — 2026-03
- Brand Guidelines §1.2: Modifier Guidelines added — celebrity children formulas (unknown child, two famous parents, independently known child, multiple children), show reboots and sequels (show title as keyword modifier, not actor's former role), reality stars and new subjects (lead with show/identifier; exception when article is about the show), and obituary modifier rule (name first, modifier after)
- Brand Guidelines §1.2: SEO Title Rules updated — "same focus keyphrase" framing added; H1/SEO title relationship clarified (H1 develops keyphrase with context; SEO title is the focused version)
- Brand Guidelines §1.2: Promo/Homepage Title Rules subsection added — must say the same thing as H1 and SEO title; must contain focus keyphrase; 65–70 character max rationale documented
- Brand Guidelines §1.2: Exclusive Guidelines subsection added — qualifying criteria: first to break news, direct interview, publicist-provided exclusive, sneak peeks/behind-the-scenes
- Brand Guidelines §1.2: General Rules — "too short" principle added (short headlines lack keywords and context; hurts clicks and discoverability)
- Master Reference §1.2 updated to match all additions above

## [1.3.0] — 2026-03
- Brand Guidelines §1.2: H1 character count updated from 85–110 to 80–100 per SEO/TEO team directive (80 minimum, 100 maximum) — source: Chris Palo, McClatchy SEO/TEO, 2026-03-23
- All format pages updated: Discover Explainer, Everything to Know, Recipe, Timeline, Interview, Recap, Fan Theory / Fan Question, Obituary, Couple / Baby, Cast Introduction / Update
- Headlines §2: Universal defaults table and Apple News / Apple News+ table both updated to 80–100; Apple News note updated to reflect new universal standard (research data showing 80–139 performance sweet spot is preserved as context)
- Publishing Guidelines §6.3: Apple News headline note updated to reflect new 80–100 universal standard
- Master Reference §1.2 and all condensed format entries updated throughout

## [1.2.9] — 2026-03
- Brand Guidelines §1.3: Explicit Language Policy significantly expanded — added policy rationale (suppression from Google News, Discover, Apple News; manual action risk), two-category framework (adult-themed content vs. gratuitous profanity), 14-entry violating/better headline examples table, "Headlines That Work" section with cheeky-but-compliant examples, and quoted content rule (allude without reproducing; link to source)
- Master Reference §1.3: Updated to match expanded policy — added intro context, two-category framework, quoted content rule, gallery no-exceptions note, and pointer to Brand Guidelines for full examples table

## [1.2.8] — 2026-03
- Brand Guidelines §1.9 added: Breaking News & Follow-Up Content — originality rule (always write original, never syndicate for search traffic), triage framework (newsworthy → original; site normally covers → evaluate follow-ups; site doesn't cover → return to normal news cycle), and scope note (not every angle for every story)
- §7 Follow-Up Content added as a new top-level section — standalone page (`docs/follow-up-content.md`) and condensed master reference entry; covers 13 story types: celebrity/artist death, shooting/bombing, arrest/imprisonment, performance fails, breakup, sexual assault/harassment claims, leaving a show or band, major interview, album/movie/TV release, notable insider statement, controversial statement, pregnancy announcement, and surprise wedding announcement
- Each story type documents: initial action, originality requirement, and list of possible follow-up angles
- Master Reference §1.2 character count corrected from 95–100 to 85–110 to match Brand Guidelines (stale carry-over from pre-1.1.6)
- Navigation, CMS admin, and JSON API updated to include Follow-Up Content

## [1.2.7] — 2026-03
- Article Formats §3.11: Genre / Streamer Roundup format removed — standalone page (`docs/genre-roundup.md`), master reference entry, navigation, CMS admin, and JSON API all reverted; Cast Introduction / Update (§3.10) remains the current last format

## [1.2.6] — 2026-03
- Article Formats §3.10: Cast Introduction / Update format added — full standalone page (`docs/cast.md`) and condensed master reference entry
- Cast Update headline: `[Show/Movie Name] Cast Update: Who's In and Who's Out`; Cast Introduction alternate (UsW): `Meet the Cast of [Show/Movie Title]: [Name], [Name] and More`
- Focus keyphrase: `[Show/Movie Name] cast`; secondary: `[Actor Name] leaving [Show/Movie Name]` or `[Show/Movie Name] season [X] cast`
- Tone: informative and straightforward
- Word count: 400–500 — tight target; padding prohibited
- Cast Update structure requires each change labeled as joining/leaving/role change with context; Cast Introduction covers name, role, and background per member
- UsW-specific: gallery or H2 format both permitted — writer chooses based on volume and platform context
- Navigation, CMS admin, and JSON API updated to include the Cast Introduction / Update format

## [1.2.5] — 2026-03
- Article Formats §3.9: Couple / Baby format added — full standalone page (`docs/couple-baby.md`) and condensed master reference entry; two subtypes with multiple headline formulas documented
- Couple headline: `[Celebrity A] and [Celebrity B]'s Relationship Timeline`
- Baby headlines: five standard formulas (Welcomes First Baby, Baby Boy, Baby Girl, Twins, Pregnant With First Baby) plus two Discover-specific variants (Is Pregnant Expecting / Gives Birth to Baby No. [#])
- Focus keyphrases: `[Celebrity A] and [Celebrity B]` / `[Celebrity Name] pregnant` / `[Celebrity Name] baby`; secondary: couple name, `[Celebrity Name] pregnant`
- Tone: celebratory and heartwarming
- Word count: 200–500 words; UsW: 500 minimum
- No-speculation rule documented: only confirmed details may be reported; baby number accuracy emphasized
- Internal links must include the couple's relationship timeline article when it exists
- Discover-specific headline variants documented and flagged as destination-specific
- Navigation, CMS admin, and JSON API updated to include the Couple / Baby format

## [1.2.4] — 2026-03
- Article Formats §3.8: Obituary format added — full standalone page (`docs/obituary.md`) and condensed master reference entry
- Headline formula: `[Celebrity Name] Dead: [Descriptor] Was [Age]`; celebrity name front-loaded; descriptor identifies primary role
- Focus keyphrase: `[Celebrity Name] dead`; secondary: `[Celebrity Name] cause of death`
- UsW-specific: cause of death is a separate story — secondary keyphrase reserved for that article; link to it from the obituary when published
- WW-specific: legacy and career retrospective framing — lead with the person's impact rather than the breaking death news; URL pattern may reflect legacy framing rather than `dead`
- Tone: respectful, somber, and informative; WW leans celebratory and reflective
- Word count: 300–600 words (UsW: 500); padding prohibited
- Accuracy requirement documented prominently: confirm death before publishing; no speculation on cause of death
- Hero image must be a dignified, appropriate photo — unflattering candids prohibited
- Navigation, CMS admin, and JSON API updated to include the Obituary format

## [1.2.3] — 2026-03
- Article Formats §3.7: Fan Theory / Fan Question format added — full standalone page (`docs/fan-content.md`) and condensed master reference entry; two subtypes documented on a single page
- Fan Theory headline formula: `This [Show Name] Fan Theory About [Character/Plot Point] Will Blow Your Mind`; Fan Question formula: `Biggest Questions About [Show Name] Answered`
- Focus keyphrases: `[Show Name] fan theory` / `[Show Name] fan question`; secondary keyphrases: `[Character Name] theory` / `What happened in [Show Name]?`
- Tone: speculative, engaging, and conversational
- Word count: 300–500 words — shortest format in the standards; padding explicitly prohibited
- UsW-specific: each theory/question requires its own H2 with Google Trends keywords
- Fan Theory structure: state theory then evidence; Fan Question structure: answer first then context
- Navigation, CMS admin, and JSON API updated to include the Fan Theory / Fan Question format

## [1.2.2] — 2026-03
- Article Formats §3.6: Recap format added — full standalone page (`docs/recap.md`) and condensed master reference entry
- Primary headline formula: `[Show/Movie Name] Recap: [Number] Biggest Moments From [Episode Title]`; UsW-specific alternate: `[Show/Movie Name] Ending Explained`; show/movie name must be front-loaded
- Focus keyphrase: `[Show/Movie Name] recap`; secondary: `[Show Name] season [X] episode [Y] recap`
- Tone: entertaining and opinionated, but still informative
- Word count: 400–800 words; chronological or thematic structure both permitted
- Analysis and commentary required — pure plot summary is explicitly prohibited; forward-looking implications required element
- Internal links must include a link to the previous episode's recap — format-specific requirement
- URL pattern: `[show-name]-recap-[episode-keywords]` or `[show-name]-season-[x]-episode-[y]-recap`
- Navigation, CMS admin, and JSON API updated to include the Recap format

## [1.2.1] — 2026-03
- Article Formats §3.5: Interview format added — full standalone page (`docs/interview.md`) and condensed master reference entry
- Headline formula: `[Celebrity Name] on [Topic]: '[Quote]' (EXCLUSIVE)` — celebrity name front-loaded, quote in single quotes, `(EXCLUSIVE)` at end of H1 (extends Brand Guidelines §1.2 SEO title practice to the H1)
- Focus keyphrase: `[Celebrity Name] interview`; secondary: `[Celebrity Name] [Topic]`
- Tone: conversational and engaging, reflecting the interview's tone
- Word count: 500–1,500 words; Q&A or narrative structure both documented and permitted
- Editorial guidance: surface most newsworthy/interesting content early; direct quotes must not have their meaning altered
- Internal links must target celebrity tag page, project pages, and related articles (UsW: 3 min, 5 max)
- Navigation, CMS admin, and JSON API updated to include the Interview format

## [1.2.0] — 2026-03
- Article Formats §3.4: Timeline format added — full standalone page (`docs/timeline.md`) and condensed master reference entry
- Headline formula locked to `[Subject]: A Complete Timeline` or `[Subject]: A Complete Breakdown` with subject front-loaded; verb not required per existing Brand Guidelines §1.2 exception for relationship timelines
- Focus keyphrase: `[Subject] timeline`; secondary: `[Subject] relationship`
- Tone: romantic and nostalgic (more specific than universal Brand Guidelines guidance)
- Word count: 500–2,000 words; chronological article structure with entries listed earliest to most recent
- Per-entry photo requirement documented (each key moment requires a photo) — format-specific, no brand-level equivalent
- Internal links must target subjects' tag pages and articles about specific events in the timeline
- URL pattern: `[subject]-relationship-timeline` or `[subject]-timeline`
- Navigation, CMS admin, and JSON API updated to include the Timeline format

## [1.1.9] — 2026-03
- Article Formats §3.3: Recipe format added — full standalone page (`docs/recipe.md`) and condensed master reference entry
- Focus keyphrase locked to `[Recipe Name] recipe`; "Recipe" required in both H1 and SEO title (exceptions: recipe-specific sites, promo headlines); video recipes must add `(with Video)` to SEO title
- SEO title character range 50–70 (format-specific lower bound, vs. universal 60–70); `[Dish Name] Recipe` construction documented as preferred over `How to Make [Dish]`
- Intro word count: 150–350 words; intro must mention the food by name
- Dek: 2–3 sentences; must include dish name and descriptive keywords
- URL pattern: `[dish-name]-recipe`; competitor research guidance (Ahrefs, SEMrush, Ubersuggest, `intitle:` operator) documented
- Navigation, CMS admin, and JSON API updated to include the Recipe format

## [1.1.8] — 2026-03
- Article Formats §3.2: Everything to Know format added — full standalone page (`docs/everything-to-know.md`) and condensed master reference entry replacing the §3.2 stub
- Headline formula documented as `[Subject]: Everything You Need to Know` with subject front-loaded; word count target 500–1,500; H2 minimum 80-word intro required before bullet points or subpoints; focus keyphrase format `"Everything to Know About [Subject]"` with optional secondary keyphrases `[Subject] news` / `[Subject] updates`
- Format-specific overrides (red): headline formula, focus keyphrase structure, word count range, H2 intro minimum, article structure, URL pattern, image specs, tags
- Navigation, CMS admin, and JSON API updated to include the new format

## [1.1.7] — 2026-03
- Headlines §2: Apple News / Apple News+ outlet block added — H1 sweet spot documented as 80–139 characters per flatplan.io analysis of ~15,000 articles across 10 publishers; universal default (85–110) noted as falling within range; below-80 and above-139 noted as underperforming
- Publishing Guidelines §6.3: Apple News / Apple News+ section added (previously a stub) — headline character count requirement and source data documented; §6.4 stub added for remaining destinations

## [1.1.6] — 2026-03
- Brand Guidelines §1.2: H1 character count updated from 95–100 to 85–110 characters
- Headlines §2: H1 character count updated to 85–110; Casing Rules expanded to explicitly distinguish CUE (sentence case) from UsW/WW (title case)
- Publishing Guidelines §6.1: Headline Casing updated — CUE now documented as sentence case; UsW and WW as title case
- Google Discover Explainer §3.1: H1 character count updated to 85–110 in Headline spec and pre-publish checklist; all-caps CMS note replaced with destination-specific casing guidance (CUE = sentence case; UsW/WW = title case)

## [1.1.5] — 2026-03
- Brand Guidelines §1.2: SEO title placement context added (Top Stories, Also in the News, search results, AI Overviews, Discover); clickbait guidance refined — question-format titles permitted occasionally but overuse undermines site authority

## [1.1.4] — 2026-03
- Brand Guidelines §1.4: rationale intro added — internal links, search authority, and user navigation

## [1.1.3] — 2026-03
- Brand Guidelines §1.5: named-byline rationale strengthened — added Google News transparency policy detail and specific placement impact (Top Stories, News tab)

## [1.1.2] — 2026-03
- Brand Guidelines §1.5: Author Bio Pages subsection added — required fields, optional fields, and 100–200 word length guidance

## [1.1.1] — 2026-03
- Brand Guidelines §1.8: bullet points rule added ("Bullet points are permitted in article body copy for lists — not as a default structure for prose")
- Google Discover Explainer: bullet points formatting rule un-reddened — it is now a universal Brand Guidelines rule, not a format-specific override

## [1.1.0] — 2026-03
- Discover Browser persona corrected to align with authoritative Content Brief
- Word count updated from 740–816 to 400–800 (Content Brief is authoritative source)
- Meta description range corrected from 140–160 to 100–165 to match Brand Guidelines and style guide; unsubstantiated "4+ keywords front-loaded, stop words stripped" spec removed

## [1.0.9] — 2026-03
- Google Discover Explainer: added variant platform-optimization principle — all variants must be optimized for intended audience and intended platform, not audience alone

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
