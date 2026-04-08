---
layout: default
title: Headlines
cms_entry: headlines
agent_audiences: [headline, seo, human-only]
---

# Headlines

Universal headline rules are defined in [General Guidelines]({{ "/docs/brand-guidelines" | relative_url }}). This section documents outlet-specific headline standards — character counts, casing rules, formula variations, and CMS-specific requirements — that override or extend the universal rules for each distribution destination.

Each outlet's standards can be expanded below.

[⬇ Download all headline standards](https://raw.githubusercontent.com/{{ site.github_username }}/{{ site.github_repo }}/main/docs/headlines.md){: .btn }

---

<!-- AGENT-AUDIENCE: headline -->
<details markdown="1">
<summary>Universal Defaults (All Outlets)</summary>

*These apply to all outlets unless an outlet-specific block below says otherwise.*

### Character Counts
- **Headline (H1):** 80–100 characters
- **SEO Title:** 50–70 characters
- **Promo/Homepage Title:** 70–75 characters
- **Meta Description:** 100–155 characters

### Casing Rules
- Follow General Guidelines §1.2 unless the outlet specifies otherwise
- **CUE (McClatchy CMS):** Sentence case — capitalize the first word and proper nouns only
- **Us Weekly (UsW) and WW:** Title case — capitalize all major words
- Adjust casing per destination site style guide before publishing

### Formula Variations
- Default to General Guidelines headline formulas (§1.2)
- "Everything You Need to Know" / "Everything to Know" patterns per article format spec (§3)

### CMS-Specific Notes
- See Publishing Guidelines §6 for platform-specific CMS requirements

### Additional Rules
- See General Guidelines §1.3 for explicit language prohibitions that apply to all headlines

</details>

<!-- AGENT-AUDIENCE: headline -->
<details markdown="1">
<summary>Us Weekly (UsW)</summary>

*Vertical:* Entertainment / Celebrity

### Required Tools

Run every hed through both tools before sending to edit/publishing:

- **Word/character counter:** [wordcounter.net](https://wordcounter.net/) — use this specific tool; slight count differences exist between tools, so everyone using the same one keeps results consistent
- **Capitalization checker:** [headlinecapitalization.com](https://headlinecapitalization.com/) — toggle AP style on

### Character Counts

| Field | Range | Notes |
|---|---|---|
| **Onpage hed (H1)** | 80 min / 90–100 target | Longest of the three heds; prime real estate — use as much as possible |
| **Promo/Homepage hed** | 70–75 characters | Must not get cut off on the homepage |
| **SEO hed** | 50–70 characters | Aim to use as much space as possible |
| **Meta description** | 100–155 characters | Use as much space as possible |

### Casing Rules
- Title case — capitalize all major words
- Run heds through [headlinecapitalization.com](https://headlinecapitalization.com/) with AP style toggled on

### Hed Hierarchy

All three heds should be **"sisters not twins"** — the promo and SEO heds are shorter versions of the onpage, not copies:

- **Onpage** → longest; use this to fit keywords that don't fit in the SEO hed
- **Promo** → medium; trim a word or two from the onpage
- **SEO** → shortest; trim a word or two from the promo

All three must include names, identifiers/modifiers, and verbs.

### SEO Hed: (Excl) / (Exclusive)

(Excl) or (Exclusive) is **no longer required** in the SEO hed. Include it if it fits within the character limit. If not, get "exclusively" or "exclusive" into the meta description instead.

To trim an over-length SEO hed: use TV show title + first name, or abbreviated TV show title + first name. Get the full title and full name into the meta description. Avoid word salad and keyword stuffing.

### Meta Description

- Must include names and identifiers/modifiers
- Must include verbs
- Use it to place keywords that couldn't fit in the heds
- No minimum, but use as much of the 155-character space as possible

### Yoast Focus Keyphrase

The Yoast focus keyphrase is **different** from the story's focus keyphrase (e.g., *[Person] Does [Thing]*).

- All lowercase
- No punctuation
- Shorter rather than longer — no hard character count
- Just the facts/keywords: sometimes a celebrity name, TV show name, or both is sufficient

### Body Word Counts

| Content type | Count |
|---|---|
| Standard article (news story/post) | 400 words minimum |
| Style article (story/post) | 300 words minimum |
| H2 post / explainer (total) | 500 words minimum |
| H2 post / explainer intro | 80 words minimum |
| Gallery or listicle intro | 80–150 words |
| Breaking news jam (at publish) | 80 words minimum; pad to 400 (500 for H2s) |
| Favor post | No requirement |

**Google Discover:** Stories must be at least 500 words to perform well in Discover.

**First 80 words:** Google crawls the first 80 words of copy in addition to heds, meta, and photos. Put your strongest keywords in the first 80 words. Do not disrupt the first 80 words or first four paragraphs with related links or inline photos.

### CMS-Specific Notes
- CMS: WordPress (usmagazine.com)
- Onpage hed = **Add title** field
- Promo hed = **Promo Title** field (used on homepage/tag pages and sometimes social)
- SEO hed = **SEO title** field in the Yoast SEO panel (also sets the story URL/slug)

### Apple News / Apple News+

<span style="color: #dc2626;">**Apple News requires a separate headline — do not use the UsW onpage hed (80–100 characters) as the Apple News title.**</span>

| Field | Range | Notes |
|---|---|---|
| <span style="color: #dc2626;">**Apple News headline**</span> | <span style="color: #dc2626;">**90–120 characters**</span> | <span style="color: #dc2626;">**110–119 is the data-validated performance sweet spot**</span> |
| Casing | Title case | Inherits UsW casing (no override) |

**Formula constraints (data-validated, override General Guidelines):**

- <span style="color: #dc2626;">**No question headlines** — underperform in organic algorithmic reach</span>
- <span style="color: #dc2626;">**No number-led headlines** — underperform on Apple News despite performing well on other platforms (including SmartNews)</span>

> **Featured placement exception:** Apple's editorial team *favors* question and "What to Know" formats for editorially curated featured slots. Use question framing only when specifically targeting a featured slot — not for broad algorithmic reach. See [Platform Formats §10.2]({{ "/docs/platform-apple-news" | relative_url }}) for complete spec including subtitle requirements, AI content policy, and image specs.

</details>

<!-- AGENT-AUDIENCE: headline -->
<details markdown="1">
<summary>SmartNews</summary>

*Distribution: SmartNews (SmartFormat RSS/XML feed)*

### Character Counts

| Field | Range | Notes |
|---|---|---|
| <span style="color: #dc2626;">**Headline / RSS `<title>`**</span> | <span style="color: #dc2626;">**70–90 characters**</span> | <span style="color: #dc2626;">**Data-validated range. 70–79 is acceptable on SmartNews — this extends below the universal 80-character minimum.**</span> |

*The SmartNews headline is pulled directly from the RSS `<title>` field, which is the standard SEO title. Write the SEO title to SmartNews spec and it serves both purposes.*

### Formula Constraints (data-validated)

- <span style="color: #dc2626;">**Avoid question headlines** — underperform on SmartNews; read velocity rewards clarity and immediate payoff over curiosity gaps</span>
- <span style="color: #dc2626;">**Avoid "What to Know" endings** — underperform platform-wide</span>
- <span style="color: #dc2626;">**Number-led headlines trend positive** — e.g., "7 Ways to Lower Your Electric Bill This Summer"</span>
- Plain declarative statements are the safe baseline — e.g., "Florida Property Taxes Are Rising. Here's What Homeowners Need to Do."
- Keyword-forward — front-load the core topic in the first 8 words

### Casing
- Follow destination site style guide (sentence case for CUE)

> For article structure, image requirements, analytics, and full discoverability guidance, see [Platform Formats §10.1 — SmartNews]({{ "/docs/platform-smartnews" | relative_url }}).

</details>

---

## Format-Specific Headline Formulas

Each article format uses a specific headline formula that overrides the generic General Guidelines pattern. These are the locked or required formulas — consult the full format spec for SEO title rules, casing, and pre-publish checklist.

<!-- ORDER NOTE: This list is generated from _data/navigation.yml — it follows the sidebar order automatically.
     Each format's content lives in _includes/headline-formulas/[match].html.
     To reorder: change the Article Formats children order in _data/navigation.yml.
     To add a new format: (1) add it to _data/navigation.yml with a match value, (2) create _includes/headline-formulas/[match].html. -->
{% assign formats_group = site.data.navigation.main | where_exp: "item", "item.title == 'Article Formats'" | first %}
{% for format in formats_group.children %}
{% include headline-formulas/{{ format.match }}.html %}
{% endfor %}

---

> ⚠️ Additional outlet-specific standards are pending. Add each outlet as a `<details>` block above the template comment following the pattern shown.

<!-- OUTLET TEMPLATE — copy, remove comment markers, and fill for each outlet

<details markdown="1">
<summary>Outlet Name</summary>

*Vertical:* [e.g. Entertainment / Lifestyle]

### Character Counts
| Field | Count |
|---|---|
| Headline (H1) | |
| SEO Title | |
| Promo/Homepage Title | |
| Meta Description | |

### Casing Rules
*(Document headline casing requirements for this outlet's CMS)*

### Formula Variations
*(Document any outlet-specific headline formulas or preferred structures)*

### CMS-Specific Notes
*(Document anything unique to how this outlet's CMS handles headlines)*

### Additional Rules
*(Any other outlet-specific headline guidance)*

</details>

-->
