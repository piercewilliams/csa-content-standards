# CSA Content Standards — Reference

Stable facts for this project. Updated in place when facts change.

---

## Quick Reference

| Resource | Location |
|----------|----------|
| Live site | https://csa-content-standards.netlify.app |
| GitHub repo | https://github.com/piercewilliams/csa-content-standards |
| JSON API | /api/reference.json |
| Netlify CMS | /admin/ |

## Project Purpose

Reference documentation site for the Content Scaling Agent (CSA) — an AI content generation system. Content is consumed by:
- **AI agents** via raw markdown or JSON API (`api/reference.json`)
- **Human editors** via Netlify CMS
- **Developers** via rendered site

## Architecture

- **Framework:** Jekyll 4.3 + jekyll-theme-cayman
- **Hosting:** Netlify (config: `netlify.toml`)
- **CMS:** Netlify CMS (`admin/config.yml`)
- **Single source of truth:** `docs/master-reference.md` (section content syndicated to individual format pages)
- **Versioning:** Semantic versioning (MAJOR.MINOR.PATCH), tracked in `docs/changelog.md`

## Content Structure

```
docs/
├── master-reference.md     # Single source of truth (~48KB)
├── brand-guidelines.md     # Voice, tone, style
├── headlines.md            # Headline standards, outlet-specific rules
├── acceptable-sources.md   # Citation/source standards
├── publishing-guidelines.md
├── changelog.md
├── discover-browser.md     # Google Discover guidelines
├── discover-explainer.md
├── collaboration-guide.md
└── [format templates]      # documentation, interview, recipe, recap,
                            # obituary, cast, fan-content, everything-to-know,
                            # couple-baby, timeline, follow-up-content
```

## Contributing

- Branch naming: `update/[description]`
- PR review required before merge to main
- Run `bundle exec jekyll serve` to preview locally

## Related Files

- `search.json` / `search.md` — Site search index
- `_layouts/` — Jekyll templates
- `assets/` — CSS and images
- `_data/` — Jekyll data files
