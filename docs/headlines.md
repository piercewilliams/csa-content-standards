---
layout: default
title: Headlines
cms_entry: headlines
---

# Headlines

Universal headline rules are defined in [General Guidelines]({{ "/docs/brand-guidelines" | relative_url }}). This section documents outlet-specific headline standards — character counts, casing rules, formula variations, and CMS-specific requirements — that override or extend the universal rules for each distribution destination.

Each outlet's standards can be expanded below.

[⬇ Download all headline standards](https://raw.githubusercontent.com/{{ site.github_username }}/{{ site.github_repo }}/main/docs/headlines.md){: .btn }

---

<details markdown="1">
<summary>Universal Defaults (All Outlets)</summary>

*These apply to all outlets unless an outlet-specific block below says otherwise.*

### Character Counts
| Field | Count |
|---|---|
| Headline (H1) | 80–100 characters |
| SEO Title | 60–70 characters |
| Promo/Homepage Title | 65–70 characters |
| Meta Description | 100–165 characters |

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

---

<details markdown="1">
<summary>Apple News / Apple News+ (Us Weekly)</summary>

*Vertical:* All verticals

### Character Counts
| Field | Count |
|---|---|
| Headline (H1) | 80–100 characters |
| SEO Title | 60–70 characters |
| Promo/Homepage Title | 65–70 characters |
| Meta Description | 100–165 characters |

### Casing Rules
- Title case (same as Us Weekly default) — capitalize all major words

### Formula Variations
- Inherits universal defaults from General Guidelines §1.2
- No Apple News-specific formula required — apply standard General Guidelines headline patterns

### CMS-Specific Notes
- See Publishing Guidelines §6.3 for Apple News distribution requirements

### Additional Rules
- **Headline length 80–139 characters is the documented performance sweet spot for Apple News.** Source: flatplan.io analysis of ~15,000 articles across 10 publishers (February performance data). Articles were measured as a percentage above or below each publisher's baseline average; editor-featured articles excluded as anomalies.
- The universal H1 default (80–100 characters) falls within this range. Apple News performance data shows strong results across the full 80–139 span, but the team standard caps at 100.
- Headlines below 80 characters or above 139 characters underperform relative to the publisher baseline.

</details>

---

---

## Format-Specific Headline Formulas

Each article format uses a specific headline formula that overrides the generic General Guidelines pattern. These are the locked or required formulas — consult the full format spec for SEO title rules, casing, and pre-publish checklist.

<details markdown="1">
<summary>Google Discover Explainer (§3.1)</summary>

*Applies to: All platforms — purpose-built for Google Discover passive-browse context*

| Formula | Use when |
|---|---|
| `What Is [Topic]? Everything You Need to Know` | Topic-based explainer |
| `Who Is [Person]? Everything You Need to Know` | Person-based explainer |
| `Who Is [Person]? What to Know About the [Descriptor]` | Question format variation |

- Character count: 80–100
- Casing: CUE sentence case; UsW and WW title case
- The Discover headline may differ from the SEO title — both must reflect the same focus keyphrase
- Do **not** use the `[Subject]: Everything You Need to Know` formula — that belongs to the Everything to Know format (§3.2)

[Full spec →]({{ "/docs/discover-explainer" | relative_url }})

</details>

---

<details markdown="1">
<summary>Everything to Know (§3.2)</summary>

*Applies to: All platforms — targets search intent for everyday topics*

| Formula | Notes |
|---|---|
| `[Subject]: Everything You Need to Know` | Subject must be front-loaded |

- Character count: 80–100
- Casing: varies by destination
- Do **not** use `What Is [Topic]?` or `Who Is [Person]?` — those belong to the Discover Explainer format (§3.1)

[Full spec →]({{ "/docs/everything-to-know" | relative_url }})

</details>

---

<details markdown="1">
<summary>Recipe (§3.3)</summary>

*Applies to: All platforms*

No single locked formula, but the word **"Recipe"** must appear in the H1.

- Character count: 80–100
- Use long-tail keywords that reflect how people search — be specific about dish type, preparation method, or key ingredients
- Exceptions: recipe-specific sites where the word would be redundant; promo headlines
- Example: *This Grandma Pizza Recipe Is an Easy-To-Make, Extra-Crispy, Cheesy NY Classic*

[Full spec →]({{ "/docs/recipe" | relative_url }})

</details>

---

<details markdown="1">
<summary>Timeline (§3.4)</summary>

*Applies to: All platforms*

| Formula | Notes |
|---|---|
| `[Subject]: A Complete Timeline` | Subject front-loaded |
| `[Subject]: A Complete Breakdown` | Subject front-loaded |

- Character count: 80–100
- **No verb required** — relationship timelines are an explicit General Guidelines §1.2 exception
- Casing: varies by destination

[Full spec →]({{ "/docs/timeline" | relative_url }})

</details>

---

<details markdown="1">
<summary>Interview (§3.5)</summary>

*Applies to: All platforms*

| Formula | Notes |
|---|---|
| `[Celebrity Name] on [Topic]: '[Quote]' (EXCLUSIVE)` | Celebrity name front-loaded; quote in single quotation marks; `(EXCLUSIVE)` required at end of H1 |

- Character count: 80–100
- `(EXCLUSIVE)` in the H1 extends the General Guidelines §1.2 SEO title practice to the H1 itself for this format
- Casing: varies by destination

[Full spec →]({{ "/docs/interview" | relative_url }})

</details>

---

<details markdown="1">
<summary>Recap (§3.6)</summary>

*Applies to: All platforms*

| Formula | Outlet |
|---|---|
| `[Show/Movie Name] Recap: [Number] Biggest Moments From [Episode Title]` | All outlets |
| `[Show/Movie Name] Ending Explained` | UsW only |

- Character count: 80–100
- Show or movie name must be front-loaded
- Casing: varies by destination

[Full spec →]({{ "/docs/recap" | relative_url }})

</details>

---

<details markdown="1">
<summary>Fan Theory / Fan Question (§3.7)</summary>

*Applies to: All platforms*

| Formula | Subtype |
|---|---|
| `This [Show Name] Fan Theory About [Character/Plot Point] Will Blow Your Mind` | Fan Theory |
| `Biggest Questions About [Show Name] Answered` | Fan Question |

- Character count: 80–100
- Show name must be front-loaded or prominently positioned — it is the primary keyword anchor
- Casing: varies by destination

[Full spec →]({{ "/docs/fan-content" | relative_url }})

</details>

---

<details markdown="1">
<summary>Obituary (§3.8)</summary>

*Applies to: All platforms*

| Formula | Notes |
|---|---|
| `[Celebrity Name] Dead: [Descriptor] Was [Age]` | Celebrity name front-loaded; descriptor = primary role or title |

- Character count: 80–100
- Celebrity name is the news — never lead with a modifier (e.g., *Fitness Guru Richard Simmons Dead* is wrong)
- **WW note:** Legacy framing may shift the structure — see full spec
- Casing: varies by destination

[Full spec →]({{ "/docs/obituary" | relative_url }})

</details>

---

<details markdown="1">
<summary>Couple / Baby (§3.9)</summary>

*Applies to: All platforms*

**Couple:**

| Formula |
|---|
| `[Celebrity A] and [Celebrity B]'s Relationship Timeline` |

**Baby — select the formula that matches the announcement:**

| Formula |
|---|
| `[Celebrity A] Welcomes First Baby With [Celebrity B]` |
| `[Celebrity A] Welcomes Baby Boy With [Celebrity B]` |
| `[Celebrity A] Welcomes Baby Girl` |
| `[Celebrity A] Welcomes Twins` |
| `[Celebrity A] Pregnant With First Baby` |

**Baby — Discover-specific variants:**

| Formula |
|---|
| `[Celebrity A] Is Pregnant, Expecting Baby No. [#] With [Celebrity B]` |
| `[Celebrity A] Gives Birth to Baby No. [#] With [Celebrity B]` |

- Character count: 80–100 for all formulas
- Celebrity name(s) must be front-loaded
- Casing: varies by destination

[Full spec →]({{ "/docs/couple-baby" | relative_url }})

</details>

---

<details markdown="1">
<summary>Cast Introduction / Update (§3.10)</summary>

*Applies to: All platforms*

| Formula | Subtype | Outlet |
|---|---|---|
| `[Show/Movie Name] Cast Update: Who's In and Who's Out` | Cast Update | All |
| `Meet the Cast of [Show/Movie Title]: [Name], [Name] and More` | Cast Introduction | UsW |

- Character count: 80–100
- Show or movie name must be front-loaded
- Casing: varies by destination

[Full spec →]({{ "/docs/cast" | relative_url }})

</details>

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
