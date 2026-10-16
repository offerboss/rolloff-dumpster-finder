# RDF QA Log

## Friday QA — 2026-10-09

**Fixed**

- `c86368a` — Denver alley placement corrected to match Denver DOTI guidance; old Denver "Public Works" / DPW references renamed to DOTI; banned-phrase wording removed (city-template CTA and older pages). The 2024 DOTI fee schedule is still the current one, so that citation stays.
- `5b59aab` — Canonical host standardized on `https://www.rolloffdumpsterfinder.com` (the live primary; the bare domain 307-redirects to www). All `app/` metadata, canonicals, JSON-LD, `app/sitemap.ts`, `app/robots.ts` and the `.claude/commands` page templates now use www. Vercel primary domain unchanged. Verified on production: robots.txt and all 158 sitemap URLs use www and return 200 directly, and every sitemap page's canonical is www with no bare-domain references in the HTML.

**Open / not fixed**

- `rolloff-preview.html` and `rolloff-locations-preview.html` (repo root, not part of the Next build) still contain old `http://rolloffdumpsterfinder.com` links. Delete or ignore them; they aren't served.
- New pages: always use the www host in canonicals and in `app/sitemap.ts` (the templates in `.claude/commands` have been updated).

## Friday QA — 2026-10-16

**Fixed**

- Resource count "dropped from 40 to 38": nothing was lost. `content/blog-posts.ts` went from 37 to 39 posts in 292507d, and the sitemap now lists 42 resource URLs (40 before), all returning 200. The gap is the hand-curated `/resources` index: it never listed 5 published guides (5 Things to Ask Before Booking, How Long Can You Keep a Rental Dumpster, Residential vs. Commercial, Trash Dumpster Rental, What Can and Cannot Go in a Roll-Off Dumpster). All 5 are now on the index, which lists all 42.
- `/resources` index excerpts: unsourced dollar ranges removed from 11 card excerpts (cost guides, 10/20-yard Denver, 20-yard Colorado, cheap and same-day guides), rewritten as how-it's-priced guidance. The Denver permit card keeps the DOTI $125 figure (sourced).
- Hero stickers retouched with PIL patch fills from the same container panel (1920x1080 WebP, under 300 KB; originals kept in `~/fridayqa-2026-10-16/orig/`, not committed): Federal Heights (logo decal, white tag, "160" stencil and side label), Sheridan (logo decal and two yellow tags), Cherry Hills Village (white side label).
- Crawl of the live sitemap (165 URLs): all 200, titles, descriptions and canonicals present (all www), no duplicate titles, no broken internal links.

**Open / not fixed**

- **Unsourced price ranges are still in the page bodies site-wide**: city pages (for example Edgewater's "$280–$480 per week" Front Range ranges) and the state, metro and size cost guides. PTF had the same cleanup on 2026-10-09 (non-numeric "How It's Priced" rewrite). This needs its own run.
- Edgewater: the City's Dumpster Guide PDF couldn't be opened (edgewaterco.gov returns 403 to the Mac and to WebFetch). The page only claims the guide exists, that roll-offs sit under Property Improvements, and that permits go through CommunityCore; search results of the official documents and right-of-way pages confirm all three. Read the PDF in a browser and add any specific rules with a citation.
- Long titles: 162 of 165 titles exceed 65 characters, mostly because of the " | Rolloff Dumpster Finder" suffix plus long page titles. Shortening them is a template or metadata pass; not done.
- `rolloff-preview.html` and `rolloff-locations-preview.html` are still in the repo root. The untracked `public/RDF-Images/Houston Rolloff Dumpster Rentals.png` (Oct 10, 2.5 MB) and the modified `tsconfig.tsbuildinfo` were left alone.
