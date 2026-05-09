v1: Please create a blog post from the @dumpsterkeywords.csv file. Use one primary keyword and 4-5 secondary keywords for a keyword cluster. If it makes sense to use different keywords in the csv file for the secondaries, that's fine, otherwise make them up. Once you use a primary key, add it to the @used-keywords.md file, and never use it again

v2: Please re-write the blog post. Use my @humour.md @voice.md @opinions.md @stats.md @stories.md

Before writing the blog post, please do the following:

Search Google for the primary keyword
Analyze the top top 3 ranking pages on Google by viewing their pages
Match their format (listicle, tutorial, guide, comparison)
Match their length (within 20% of average)
Cover every topic the top 3 all talk about
Add 1-2 extra topics they missed
Answer the main question directly at the top (for featured snippet)
Include an FAQ section with questions from "People Also Ask"
Use my Pexels API key, and find relevant images for the blog post. Ideally they'd go above the H2s.

---

v4 — Lighthouse Optimization (Target: 100 across all four categories)

Current scores:
- Performance: 70
- Accessibility: 94
- Best Practices: 96
- SEO: 100

Please optimize every blog post and page to hit 100 across Performance, Accessibility, Best Practices, and SEO. Also generate a robots.txt file and a sitemap.xml file.

---

Performance (currently 70) — fix these in priority order:

1. Reduce unused JavaScript — estimated savings of 463 KiB. Audit all JS bundles and remove or lazy-load anything not needed on first paint.
2. Render-blocking requests — estimated savings of 150 ms. Defer or async any non-critical scripts and stylesheets.
3. Improve image delivery — estimated savings of 62 KiB. Convert images to WebP/AVIF, compress, and serve at correct display dimensions.
4. Add explicit width and height attributes to every <img> element to eliminate layout shift warnings.
5. Minimize main-thread work — currently 2.1 s, with 6 long tasks found. Break up or defer heavy scripts.
6. LCP is 6.1 s (target < 2.5 s). Preload the LCP image, eliminate render-blocking resources above it, and reduce server response time.
7. FCP is 2.5 s (target < 1.8 s). Inline critical CSS and defer everything else.
8. Speed Index is 5.6 s — address via the FCP/LCP fixes above.
9. Fix back/forward cache restoration failure (1 reason blocking bfcache).

---

Accessibility (currently 94) — fix these:

1. Links do not have a discernible name — add aria-label or visible text to every anchor that currently has no text content (e.g. icon-only links, image links).
2. Heading elements are not in sequentially-descending order — audit every page and enforce h1 → h2 → h3 hierarchy with no skipped levels.

---

Best Practices (currently 96) — fix these:

1. Add a Content Security Policy (CSP) header effective against XSS.
2. Add an HSTS header with a strong policy (min-age ≥ 1 year, includeSubDomains).
3. Set Cross-Origin-Opener-Policy (COOP) to same-origin for proper origin isolation.
4. Add an X-Frame-Options or CSP frame-ancestors directive to mitigate clickjacking.
5. Implement Trusted Types to mitigate DOM-based XSS.
6. Resolve any issues logged in the Chrome DevTools Issues panel.

---

Additional deliverables:

robots.txt — allow all crawlers, disallow /admin or any private paths, point to the sitemap URL.
sitemap.xml — include every public route: homepage, all blog posts, all service pages, all location pages. Use lastmod, changefreq, and priority values appropriate to each page type.