---
layout: default
title: AI Tool Responsibility
cms_entry: tool-responsibility
agent_audiences: [human-only]
---

<!-- AGENT-AUDIENCE: human-only -->

# AI Tool Responsibility

This document defines every team member's responsibilities when using the Content Scaling Agent (CSA) and any other AI-assisted tools in the content pipeline. It applies to all writers, editors, and content leads regardless of vertical or team.

**The CSA amplifies human writing — it does not replace editorial judgment.** Every piece of content that touches a tool is still your responsibility. The tool only does so much; humans are responsible for everything past that point.

[⬇ Download this section](https://raw.githubusercontent.com/piercewilliams/csa-content-standards/main/docs/tool-responsibility.md){: .btn }

---

## Content Standards — All Verticals

- All drafts must be fact-checked before publication. All links must be from reputable sources — primary sources, established news organizations, institutional publications. Not subpar blogs or unverified third-party aggregators.
- All variations of a draft must be at least 50% semantically different from each other. This means substantively different content, framing, and structure — not surface-level word substitution. Additional editing of variant drafts is expected to achieve this.
- All drafts produced by the CSA must be edited by the creator and peer-reviewed by a second team member before being brought into the CMS.
- All variants should be optimized for both their intended audience and their intended platform. Headline formula, intro length, and content structure may differ by platform.
- No piece of content is to be published before it has been reviewed and approved by a human.
- ALL articles must include this disclaimer at the top: *"This article was created by content specialists using various tools, including AI."*

---

## Content Standards — Discover Team

- All new pitches must be different from other McClatchy platforms.
- Revival content from 2025 or beyond must be optimized for its best-performing distribution channel.
- Variants should include 3–4 national options that are 50% different from each other.
- Revival content includes nostalgic content (2016 revival trends) and creature features.
- Revisiting top articles from 2025 from a "one-year later" perspective — all revival content and variants must be 50% different from the original and from each other.
- Additional syndication guidelines: [Syndication Guidelines Doc](https://docs.google.com/document/d/13PBoZcjAyRegeLwltuyF5LjgzYRvGjthZdmEKEydmBs/edit?tab=t.0#heading=h.usskzq5qvykj)

---

## Content Standards — Mind/Body, Everyday Life, Experiences

- Realtime content revival optimized for "Home" placement.
- Variants should include a local and a national option.
- All realtime revival content and variants must be 50% different from the original and from each other.

---

## Escalation

### Single-piece concerns

If a CSA-produced piece is factually suspect, contains a hallucinated claim, feels editorially uncomfortable, or raises a legal or reputational concern — do not publish. Flag to your direct editor immediately with a description of the concern and the specific output in question.

**Step 1:** If your editor resolves the concern, document the resolution and proceed or discard accordingly.

**Step 2:** If your editor is unavailable or the concern is unresolved after 24 hours, notify **Sara Vallone** and post to Slack channel **#prog-and-growth** with a description of the concern and the specific output in question.

### Supervisor conflict

If you have escalated a concern to your editor and believe it was not addressed in good faith — you are not required to stop there. You may escalate directly to management, **Sara Vallone and/or Chris Palo**, without going back through your direct editor first. You will not face retaliation for using this path on a legitimate concern.

### Persistent or recurring issues

If the same type of problematic output recurs across multiple runs — the tool consistently hallucinates citations, produces variants that fail the 50% difference standard, or generates content that raises the same editorial concern repeatedly — report it as a bug.

Report to Slack channel **#nationalteam-csa-feedback** with:

- A description of the pattern
- At least one example output
- The date of each instance observed

Do not continue using the tool for the affected content type until the issue is acknowledged by a member of the CSA product/dev team.

### When to stop using the tool

If the CSA produces output you believe is unsafe to publish and you cannot get timely editorial guidance, stop using it for that piece and complete the work manually. You are never required to use the tool when your editorial judgment tells you the output is unacceptable.

Document that you stopped and why, and report it to Slack channel **#nationalteam-csa-feedback**.

---

## Plagiarism and Attribution

Before publishing any CSA-produced content, verify that the output does not contain lifted phrases, sentences, or constructions from identifiable source material. This is a separate requirement from fact-checking.

- If a draft closely mirrors phrasing from a source document, rewrite it before peer review.
- If the tool cites a source, verify that the source exists and that it actually supports what the draft implies.
- Do not assume that because the tool produced it, it is original. AI tools can and do reproduce source material without flagging it.

This requirement exists because McClatchy was named in the 2026 Poynter/Nota incident, in which an AI tool plagiarized from McClatchy properties. We have a different exposure profile than Nota, but the editorial responsibility is the same: we are accountable for what we publish regardless of what tool generated the draft.

---

## Partner and Feed Content

Content arriving via partner feeds is subject to the same editorial standards as CSA-generated content, with one additional layer: because we do not control what a partner's tool produces, incoming content must be treated as unverified until reviewed by a human editor.

Not all partner content requires the same level of oversight. Fully automated structured data output — such as game scores, weather reports, and United Robots automated content — does not require a Claims Validation pass. Editorial content and content from feeds where we do not control the generation process does. See [Claims Validation — Content Pipeline Tiers]({{ "/docs/claims-validation" | relative_url }}#content-pipeline-tiers) for the framework.

- All partner-sourced editorial content must be fact-checked before publication.
- Locality-dependent information — streaming availability, blackout rules, local broadcast schedules, local tax rates or regulatory figures — requires independent verification before publish. Do not assume partner-generated figures or watch information are accurate; this category has a known error rate.
- If three or more consecutive words from the draft match a source document verbatim, or if a sentence's structure and phrasing are clearly derived from a specific source — meaning a writer wouldn't have constructed it that way independently — treat it as reproduced phrasing and rewrite before peer review.
- Partner content that carries an AI disclaimer still requires full human editorial review before it goes live on our properties.

---

## Override Documentation

> **Note:** This section covers overrides of CSA editorial suggestions — headline recommendations, structural flags, sourcing suggestions. For overrides of fact-checking module verdicts specifically, see [Claims Validation — Override Documentation]({{ "/docs/claims-validation" | relative_url }}#override-documentation).

Overriding a CSA suggestion — a headline recommendation, a structural flag, a sourcing suggestion — is permitted and is sometimes the right call. When you override, note briefly:

- What the tool suggested
- What you chose instead
- Why (one sentence is sufficient)

This documentation travels with the piece through the review process and lives in **[location TBD, pending CSA team input]**. Sara Vallone receives a daily EOD summary of all overrides logged that day to stay apprised of editorial decisions.

Override documentation is not punitive. Editors who consistently demonstrate better outcomes than the tool are providing feedback that improves it. That pattern is worth tracking and is explicitly valued.
