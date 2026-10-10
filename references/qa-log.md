# RDF QA Log

## Friday QA — 2026-10-09

**Fixed**

- `c86368a` — Denver alley placement corrected to match Denver DOTI guidance; old Denver "Public Works" / DPW references renamed to DOTI; banned-phrase wording removed (city-template CTA and older pages). The 2024 DOTI fee schedule is still the current one, so that citation stays.
- `5b59aab` — Canonical host standardized on `https://www.rolloffdumpsterfinder.com` (the live primary; the bare domain 307-redirects to www). All `app/` metadata, canonicals, JSON-LD, `app/sitemap.ts`, `app/robots.ts` and the `.claude/commands` page templates now use www. Vercel primary domain unchanged. Verified on production: robots.txt and all 158 sitemap URLs use www and return 200 directly, and every sitemap page's canonical is www with no bare-domain references in the HTML.

**Open / not fixed**

- `rolloff-preview.html` and `rolloff-locations-preview.html` (repo root, not part of the Next build) still contain old `http://rolloffdumpsterfinder.com` links. Delete or ignore them; they aren't served.
- New pages: always use the www host in canonicals and in `app/sitemap.ts` (the templates in `.claude/commands` have been updated).
