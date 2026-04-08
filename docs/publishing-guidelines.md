---
layout: default
title: Publishing Guidelines
cms_entry: publishing-guidelines
agent_audiences: [human-only]
---

<!-- AGENT-AUDIENCE: human-only -->
# Publishing Guidelines

> **Scope:** Platform-specific and CMS-specific rules for exporting, formatting, and publishing content. Rules here are operational — they govern how content is entered and submitted, not how it is written.

[⬇ Download this section](https://raw.githubusercontent.com/piercewilliams/csa-content-standards/main/docs/publishing-guidelines.md){: .btn }

---

## 6.1 CUE (McClatchy CMS)

### Required Fields & Settings
**(REQUIRED)**

- **AI Disclosure checkbox:** Check "Created With AI" in the General section for all AI-assisted content
- **AI Disclosure text:** Add *"This article was created by content specialists using various tools, including AI."* at the top of the article body
- **Credit line for freelance:** Use "Special to McClatchy Media"
- **Tags:** Apply `TH-CSA` and `The Commons` to all articles *(subject to change)*
- **Dek:** Enter as a separate CMS field — do not place inside the article body

### Section Placement
**(REQUIRED)**

- Do **not** home stories to generic sections like "Local News" or "Sports"
- Use designated sections (e.g., "Homebuyers Guide", "Travel", "Wellness", "Lifestyle", "FIFA World Cup")
- Do **not** use "Real Estate News Destination" as a section

### Headline Casing
**(REQUIRED)**

- **CUE main headlines:** Sentence case — capitalize the first word and proper nouns only
- **Us Weekly (UsW) and WW main headlines:** Title case — capitalize all major words
- UsW uses all-caps subheadings; WW does not
- Adjust casing per destination site style guide before publishing

---

## 6.2 WordPress

### Required Fields & Settings
**(REQUIRED)**

- **Post status:** Set to Draft — do not publish directly; all content requires peer review and human approval before going live
- **Author:** Named individual byline — never a staff or team account (see General Guidelines §1.5)
- **Featured image:** 1200px+ wide, 16:9 aspect ratio, 300K+ pixels — same requirements as the Hero Image spec (§3)
- **Permalink:** Follow URL structure rules in the article format spec — 4+ keywords, stop words stripped, front-loaded

### AI Disclosure
**(REQUIRED)**

- Add *"This article was created by content specialists using various tools, including AI."* at the top of the post body
- Enable any available AI disclosure settings in the WordPress theme or plugin if present

### Tags & Categories
**(REQUIRED)**

- Apply `TH-CSA` and `The Commons` where the platform supports tags *(subject to change — check for updates)*
- Set a specific category per destination site — do not use generic defaults (e.g., "Uncategorized", "General")

> ⚠️ **Destination-specific settings** — custom fields, theme requirements, and plugin configurations vary by WordPress site. Confirm with the site owner before publishing to any WordPress destination for the first time.

---

## 6.3 Apple News / Apple News+ (Us Weekly)

> **Writing and format specifications** for Apple News (headline requirements, formula constraints, subtitle, AI content policy, image specs) are defined in [Platform Formats §10.2]({{ "/docs/platform-apple-news" | relative_url }}). That section is the authoritative source. This section covers CMS entry steps for Apple News publishing.

### News Publisher — Required Fields
**(REQUIRED)**

- <span style="color: #dc2626;">**Apple News headline:** Enter in the Apple News title override field in News Publisher — **90–120 characters (110–119 sweet spot, data-validated)**; write as a distinct headline from the SEO/Discover title</span>
- <span style="color: #dc2626;">**No question headlines** for organic algorithmic reach (exception: human editorial curated featured slots — see §10.2)</span>
- <span style="color: #dc2626;">**No number-led headlines**</span>
- <span style="color: #dc2626;">**Subtitle field:** Must be populated in News Publisher — Apple pulls from first paragraph if left blank</span>
- **Content categories:** Select appropriate topic categories (technology, lifestyle, sports, etc.)
- **AI-generated or AI-assisted content:** Include byline or co-byline; tag as AI-generated in News Publisher metadata

### Additional Notes

> ⚠️ Additional Apple News distribution settings (feed configuration, section targeting) are pending. See [Platform Formats §10.2]({{ "/docs/platform-apple-news" | relative_url }}) for the current complete spec.

---

## 6.4 Other Export Destinations

> ⚠️ **STUB** — Additional distribution platforms and export rules pending. Do not populate until guidance is provided.
