---
layout: default
title: SmartNews
cms_entry: platform-smartnews
agent_audiences: [general-style, headline, seo, human-only]
---

<!-- AGENT-AUDIENCE: general-style -->

# SmartNews

Platform: SmartNews | §10.1

[⬇ Download this section](https://raw.githubusercontent.com/piercewilliams/csa-content-standards/main/docs/platform-smartnews.md){: .btn }

---

> **Where this platform overrides General Guidelines:** The headline character range is <span style="color: #dc2626;">**70–90 characters (80–99 performs best — data-validated)**</span> — extending below the 80-character universal minimum. <span style="color: #dc2626;">**Question headlines and "What to Know" endings are explicitly avoided (data-validated underperformers)**</span> — General Guidelines permit question formats in some contexts; SmartNews does not. <span style="color: #dc2626;">**GIFs are prohibited**</span> in all image positions. SmartView's stripped-down rendering environment imposes strict article structure constraints: <span style="color: #dc2626;">**no CSS or scripted styling**</span>; HTML limited to supported tags (`<figure>`, `<figcaption>`). <span style="color: #dc2626;">**Feed thumbnail specs**</span> (`<media:thumbnail>`, 4:3, 320×240px) have no General Guidelines equivalent.

---

### Platform Overview

SmartNews distributes content via SmartFormat feed (enhanced RSS/XML). Articles render in **SmartView** — a stripped-down, mobile-optimized native environment that discards CSS and scripted styling entirely. The algorithm surfaces content based on **read velocity** and reader engagement signals: not just whether a reader taps, but whether they finish. Content that earns clicks but loses readers quickly is deprioritized.

Analytics note: GA4 records SmartView content as in-app views, not referral traffic to your site. See [Analytics](#analytics) below.

---

<!-- AGENT-AUDIENCE: headline -->
### Headline
**(REQUIRED)**

<span style="color: #dc2626;">**Character count: 70–90 characters. The data-validated performance sweet spot is 80–99.**</span>

- <span style="color: #dc2626;">**Clear, direct, and keyword-forward** — SmartNews surfaces content based on read velocity; click-worthy clarity matters more than cleverness</span>
- <span style="color: #dc2626;">**Number-led headlines trend positive** on SmartNews (data-validated) — e.g., "7 Ways to Lower Your Electric Bill This Summer"</span>
- <span style="color: #dc2626;">**Plain declarative statements are the safe baseline** — e.g., "Florida Property Taxes Are Rising. Here's What Homeowners Need to Do."</span>
- <span style="color: #dc2626;">**Avoid question marks** — question headlines underperform on SmartNews (data-validated)</span>
- <span style="color: #dc2626;">**Avoid "What to Know" endings** — they underperform platform-wide (data-validated)</span>
- Service journalism verticals (Mind/Body, Everyday Living, Experiences) perform well when headlines signal actionable, practical value — lead with "How to," cost/savings angles, or a specific number
- Headline is pulled from RSS `<title>` — the standard SEO title serves SmartNews when written to spec
- Casing: follow destination site style guide (sentence case for CUE)

---

<!-- AGENT-AUDIENCE: general-style -->
### Tone
**(REQUIRED)**

Clear, direct, value-first, zero friction.

Front-load the practical takeaway in both headline and lead paragraph. Readers decide within the first few words whether the content is worth their time — deliver the value immediately or lose them. Avoid clever framing that delays the payoff.

**Target persona: The SmartNews Skimmer** — A mobile-first news consumer scrolling in short, high-frequency sessions — commutes, breaks, idle moments. Drawn to headlines that promise immediate practical value. Core Drive: *Give me something useful right now — I'll decide in two seconds whether it's worth my time.*

---

<!-- AGENT-AUDIENCE: general-style -->
### Article Structure
**(REQUIRED)**

<span style="color: #dc2626;">**SmartView strips all CSS and scripted styling.** Article structure must be clean and text-forward — no custom layouts, no embedded styling, no CSS classes.</span>

- <span style="color: #dc2626;">Use only supported HTML tags for structural elements: `<figure>` and `<figcaption>` for image captions</span>
- <span style="color: #dc2626;">Do not rely on any CSS-dependent formatting — it will not render in SmartView</span>
- Front-load value — the practical takeaway should appear in the lead paragraph, not buried after context-setting
- Service journalism framing (how-to, cost/savings, numbered lists) performs well in SmartNews for Mind/Body, Everyday Living, and Experiences verticals
- Clean prose structure; bullet lists are acceptable where content calls for them

---

<!-- AGENT-AUDIENCE: human-only -->
### Image Requirements
**(REQUIRED)**

| Spec | Requirement |
|---|---|
| Lead image minimum width | 1,200px (cross-platform baseline) |
| Inline images minimum width | <span style="color: #dc2626;">**400px — images under 100px may be dropped entirely by SmartView**</span> |
| Feed thumbnail tag | <span style="color: #dc2626;">**`<media:thumbnail>` in RSS feed**</span> |
| Feed thumbnail aspect ratio | <span style="color: #dc2626;">**4:3**</span> |
| Feed thumbnail dimensions | <span style="color: #dc2626;">**320×240px recommended**</span> |
| GIFs | <span style="color: #dc2626;">**Prohibited — animated and static GIFs are not supported in SmartView**</span> |

Provide a 4:3 crop option for all lead images to support feed thumbnail requirements. The 1,200px+ lead image serves all platforms; the 4:3 crop is SmartNews-specific.

---

<!-- AGENT-AUDIENCE: human-only -->
### Discoverability

SmartNews is fully algorithm-driven — readers do not browse categories. The algorithm surfaces content based on **read velocity** (how many users tap) and **reader engagement signals** (how many finish). Both signals matter: a headline that earns clicks but loses readers quickly is deprioritized over time.

- Headline clarity drives the initial tap
- Content quality and front-loaded value drive completion
- Consistent publication of content that earns completions builds long-term algorithmic standing

---

<!-- AGENT-AUDIENCE: human-only -->
### Analytics

> **GA4 caveat:** SmartNews GA tracking records **in-app content views**, not referral traffic to your website. When reporting SmartNews performance, note this distinction explicitly — SmartNews views will not appear as site visits in standard traffic reports.

To track SmartNews performance in GA4: **Reports > Acquisition > Traffic Acquisition > filter by Session Source/Medium.**

---

<!-- AGENT-AUDIENCE: human-only -->
### Monetization

- One **300×250px ad unit** at the bottom of SmartView
- Up to **2 sponsored links** per article
- Publishers keep **100% of self-sold ad revenue**
- Self-serve ads via existing ad tech integration

---

<!-- AGENT-AUDIENCE: human-only -->
### What to Avoid

| Prohibited | Reason |
|---|---|
| <span style="color: #dc2626;">Question headlines</span> | <span style="color: #dc2626;">Underperform on SmartNews — read velocity rewards clarity and immediate payoff over curiosity gaps</span> |
| <span style="color: #dc2626;">"What to Know" headline endings</span> | <span style="color: #dc2626;">Platform-specific underperformer</span> |
| <span style="color: #dc2626;">GIFs (animated or static)</span> | <span style="color: #dc2626;">Not supported in SmartView</span> |
| <span style="color: #dc2626;">Inline images under 100px wide</span> | <span style="color: #dc2626;">May be dropped from SmartView entirely</span> |
| <span style="color: #dc2626;">CSS or scripted styling</span> | <span style="color: #dc2626;">SmartView strips all CSS — will not render</span> |
| <span style="color: #dc2626;">HTML tags outside supported set</span> | <span style="color: #dc2626;">Use only `<figure>` and `<figcaption>` for structural image markup</span> |
| Headlines under 70 or over 90 characters | Outside the proven SmartNews performance range |
| Burying the practical takeaway | SmartNews readers decide within the first few words — front-load value or lose them |

---

<!-- AGENT-AUDIENCE: human-only -->
### Pre-Publish Checklist

- Headline: 70–90 characters (80–99 target), keyword-forward, plain declarative or number-led
- No question marks in headline
- No "What to Know" ending in headline
- No GIFs anywhere in the article
- Lead image: 1,200px+ wide with 4:3 crop option available for feed thumbnail
- Feed thumbnail: `<media:thumbnail>` tag populated in RSS, 4:3 aspect ratio, 320×240px
- All inline images: 400px+ wide
- Article structure: no CSS or scripted styling; `<figure>` and `<figcaption>` used for image captions
- Performance will appear in GA4 as in-app views — not as site referral traffic; report accordingly
