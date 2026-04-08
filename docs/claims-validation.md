---
layout: default
title: Claims Validation
cms_entry: claims-validation
agent_audiences: [human-only]
---

<!-- AGENT-AUDIENCE: human-only -->

# Claims Validation

> **Scope:** This page defines the ideal-state specification for a CSA fact-checking module to be developed. It establishes the required behavior of the module, the editorial workflow for acting on its output, and the infrastructure needed to support it. Sections marked **Pending** identify capabilities not yet confirmed as implemented. Everything else represents the target standard the module should meet and that editors should apply once it is live.

[⬇ Download this section](https://raw.githubusercontent.com/piercewilliams/csa-content-standards/main/docs/claims-validation.md){: .btn }

---

## Content Pipeline Tiers

Not all content in the CSA pipeline requires the same level of fact-checking oversight. The tier a piece belongs to determines whether and how the Claims Validation module applies.

> **Tier names are provisional** — naming conventions are not yet finalized.

| Tier | Description | Raw Module Output in CSA UI | Claims Validation |
|---|---|---|---|
| **High Touch (HITL)** | Human-in-the-loop — CSA-generated drafts requiring full human editorial review | Yes | Applies in full. All verdicts require editor action per this page. |
| **Semi-Automated** | Everything that is not High Touch or Fully Automated | Yes | Applies selectively — editor judgment determines which verdicts require action based on content type and risk. |
| **Fully Automated** | Structured data output with no significant editorial judgment involved — e.g., game scores, weather reports, United Robots automated inbound content | No | No Claims Validation pass required. |

The rules documented on the rest of this page apply in full to **High Touch (HITL)** content. **Semi-Automated** content — everything that is not HITL or Fully Automated — applies the same rules with editor judgment on verdict prioritization. **Fully Automated** content does not surface module output and does not require a Claims Validation pass.

> **Role-level access:** Which specific roles can view raw module output in the CSA UI is pending confirmation with Rajiv and Susannah.

---

## What the Module Produces

The CSA fact-checking module runs automatically as part of the content validation step. After a draft is generated, the module evaluates factual claims against its knowledge base and returns a structured validation output for each flagged claim. The following defines the required output format.

Each flag carries one of five verdicts:

| Verdict | Meaning |
|---|---|
| `TRUE` | Claim is accurate and verifiable |
| `FALSE` | Claim is factually incorrect |
| `MISLEADING` | Claim is technically true but framed in a way that distorts meaning |
| `INSUFFICIENT_EVIDENCE` | Claim cannot be verified from available sources |
| `OVERGENERALIZED` | Claim may be true in some contexts but is stated too broadly |

### Confidence Level

> **Pending module capability.** The module should return a confidence level alongside each verdict. This field is not yet confirmed as available. The escalation logic below includes confidence-level handling and will apply once the field is live.

When present, the confidence level indicates how certain the module is in its verdict. Treat it as an escalation signal:

| Confidence | Meaning | Editorial Action |
|---|---|---|
| High | Module is confident in the verdict | Apply the verdict's standard action |
| Medium | Module has moderate certainty | Apply standard action; note in draft |
| Low | Module has limited basis for the verdict | Treat as `INSUFFICIENT_EVIDENCE` regardless of the stated verdict; verify independently |

---

## Editorial Action Taxonomy

### I. Needs Correction

Factually wrong, demonstrably misleading, or unsupported by a verifiable source. Apply when the CSA validation output returns:

- **`FALSE`** — rewrite or remove the claim entirely before peer review
- **`MISLEADING`** — reframe the claim; document what the module flagged and what you changed

### II. Needs Clarification

Nuanced, partially true, or contextually dependent; requires rewording rather than removal. Apply when the CSA validation output returns:

- **`OVERGENERALIZED`** — narrow the scope or add qualifying language
- **`INSUFFICIENT_EVIDENCE`** — add a verified source, or remove the claim if no primary source can be found

> **`TRUE` flags require no action.** They are informational and confirm the claim passed validation.

---

## Source Authority Tiers

The module weights source authority when evaluating claims. Editors should apply the same weighting when reviewing flagged output. The specific approved outlets within each tier are documented in [Acceptable Sources §5]({{ "/docs/acceptable-sources" | relative_url }}).

### Tier 1 — Authoritative (accept)

- Government and institutional primary sources (.gov, .edu, established regulatory bodies)
- Peer-reviewed publication records
- Official statements from named public figures on verified channels
- Established national news organizations (AP, Reuters, BBC, major metros)
- McClatchy publications

### Tier 2 — Acceptable with verification

- Trade and industry publications with editorial standards
- Official company/brand statements via verified press releases
- Court records, police reports, legal filings

### Tier 3 — Flag for review

- Aggregator blogs, content farms, unverified third-party roundups
- Anonymous sourcing without corroboration
- Social media posts, even from verified accounts (unless the post itself is the news)

> If the module returns a `MISLEADING` or `FALSE` verdict and the original source is Tier 3, treat it as **Needs Correction** regardless of the specific verdict.

### Source Count Requirements

The number of Tier 1 sources required to verify a claim depends on claim type.

**One Tier 1 source is sufficient for:**
- Straightforward factual claims — dates, confirmed events, official records
- Statistics drawn directly from a government database or institutional publication
- Direct quotes from named public figures via verified channels

**Two independent Tier 1 sources are required for:**
- Contested or sensitive claims where sources could reasonably disagree
- Allegations, legal proceedings, or anything that could harm a named individual
- Health claims not covered by a clear primary source document

**A primary source document is required (mandatory regardless of count — news coverage of the document does not qualify) for:**
- Court outcomes, legal status, and regulatory figures
- Health dosage, drug interaction, and treatment efficacy claims
- Financial statistics cited as authoritative fact

---

## Content-Type Specific Rules

Some content types carry elevated risk and require stricter treatment of module output.

### Health and Medical

- Any flagged health claim is a **hard stop**. Do not publish until the claim is either removed or confirmed against a Tier 1 source.
- `OVERGENERALIZED` flags on health content should be treated as **Needs Correction**, not Needs Clarification.
- Dosage, drug interaction, and treatment efficacy claims require a **primary source document** — two independent Tier 1 sources if no primary source document exists — even if the module returns `TRUE`.

### Legal and Regulatory

- Court outcomes, legal status, and regulatory figures require a **primary source document** (filings, official dockets, agency databases) — news coverage of those documents does not qualify.
- Stale regulatory figures are a known failure mode. If a claim involves a figure with a defined annual update cycle (tax rates, benefit amounts, sentencing guidelines), verify the vintage of the figure the module used.
- Allegations or claims that could harm a named individual require **two independent Tier 1 sources**.

### Financial and Economic

- Dollar amounts, percentage changes, and economic statistics cited as authoritative fact require a **primary source document** even on `TRUE` verdicts.
- Forward-looking claims (projections, forecasts) must be attributed to the source of the forecast — not stated as fact. One Tier 1 source (the originating institution) is sufficient if the claim is attributed.

### Real Estate and Local Services

- Local pricing, service availability, and geographic coverage claims have a known error rate in CSA output. Treat all `OVERGENERALIZED` flags in this category as **Needs Correction**.
- Address-specific or market-specific claims: verify against a current local source before publish.

### Travel and Scheduling

- Operating hours, travel restrictions, visa requirements, and schedules are time-sensitive. Even `TRUE` verdicts may be stale. Verify against the official source at time of publication.

### Entertainment and Celebrity

- Relationship status, pregnancy, and legal proceedings require **two independent Tier 1 sources** — both must be named and on-record. Unconfirmed claims should not appear in the draft regardless of module verdict.
- Historical facts about creative works (release dates, awards, box office): **one Tier 1 source** is sufficient; `TRUE` verdicts can proceed without additional verification unless the piece is a definitive reference.

---

## Escalation Logic

| Situation | Action |
|---|---|
| 1–2 `FALSE` or `MISLEADING` flags | Editor resolves; documents change in draft notes |
| 3+ flags in a single piece | Escalate to senior editor before publish; consider full manual fact-check |
| Any health or legal claim flagged `FALSE` | Hard stop; senior editor must sign off on resolution before piece moves to CMS |
| Flags the editor cannot resolve | Do not publish; bring to direct editor with specific claim and verdict noted |
| Same flag type recurs across multiple runs of the same content type | Report as pattern bug; stop using the module for that content type pending acknowledgment |
| *(Pending)* Any verdict returned with low confidence | Treat as `INSUFFICIENT_EVIDENCE` regardless of verdict; verify independently before publish |
| *(Pending)* 3+ low-confidence verdicts in a single piece | Escalate to senior editor; consider full manual fact-check |

---

## Audit Trail

> **Implementation required.** Validation output must be stored per-piece in the CMS — not only visible at generation time. This is a stated requirement; confirm implementation with the CSA product/dev team.

The audit trail for each piece must include:

- The full module output at the time of generation — all verdicts returned, the claim each verdict was attached to, and the confidence level (once available)
- Any editor actions taken on flagged claims — what was changed, removed, or overridden, and why
- The final publication state relative to the module output — which flags were resolved and how

This record must be:
- **Stored per-piece in the CMS** — accessible after the piece is published, not only during the drafting workflow
- **Attached to the piece record** — not stored in a separate log that requires cross-referencing
- **Readable by editors, senior editors, and content leads** — role-level access pending confirmation with Rajiv and Susannah

The audit trail is the authoritative record for editorial decisions and pattern analysis. It is what makes override documentation, escalation history, and recurring-bug identification possible across time.

---

## Override Documentation

When an editor overrides a module verdict — publishing a claim the module flagged, or removing one it verified — note:

- What the module returned
- What the editor decided
- One-sentence rationale

This documentation travels with the piece through the review process. It is not punitive. Editors who consistently out-perform the module's flags are providing signal that improves it.

Override documentation also serves as the source for aggregate pattern tracking. Across pieces, the record should capture:

- **Flag frequency by type** — how often each verdict (`FALSE`, `MISLEADING`, `OVERGENERALIZED`, `INSUFFICIENT_EVIDENCE`) is being flagged, by content type
- **Remediation type** — what action the editor took on each flagged claim:
  - *Rewrite* — claim was reworked and kept
  - *Removal* — claim was cut entirely
  - *Kept with rationale* — editor judged the module flag incorrect and published as-is
- **Override rate by verdict** — how often each verdict type is being overridden versus acted on, which surfaces where the module is underperforming editorially

This aggregate view is what enables pattern-bug identification, module improvement, and editorial QA over time. It requires the per-piece audit trail to be stored in the CMS (see [Audit Trail](#audit-trail)).

---

## Acceptance Criteria for Test Article Review

When walking the 15 test articles, apply each of the following:

- Does the verdict taxonomy map cleanly to the Needs Clarification / Needs Correction split defined in this document?
- Are there verdicts that don't fit either tier? (These need a third category or a handling note.)
- Does the content-type-specific rule apply correctly in the test case?
- Does the source tier weighting change the editorial action in any test case?
- Is there any verdict the module returned that an editor would have caught differently — and if so, what does that imply for the ruleset?
