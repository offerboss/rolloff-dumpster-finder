# /blog-post — Rolloff Dumpster Finder Blog Post Builder

You are building a new SEO blog post for Rolloff Dumpster Finder. Follow every step in order. Do not skip any step. Do not write any content until you have completed the research steps.

---

## STEP 1 — Read all reference files before touching any content

Read these files in full before proceeding:

- `references/used-keywords.md` — the list of primary keywords already used. You must never reuse a primary keyword. Reusing one causes keyword cannibalization.
- `references/voice.md` — Jake Harlow's voice, sentence rhythm, vocabulary, and anti-patterns.
- `references/humour.md` — the five humour rules and anti-patterns. Every post must be funny.
- `slideshow/dumpster_keywords.csv` — the full keyword list with relevance scores.

---

## STEP 2 — Pick a primary keyword

If the user provided a keyword as `$ARGUMENTS`, use that as the primary keyword (still confirm it is not in `references/used-keywords.md`).

If no keyword was provided:
1. Open `slideshow/dumpster_keywords.csv`.
2. Filter out any keyword that appears as a primary in `references/used-keywords.md`.
3. Pick the keyword with the highest relevance score that has not been used. Break ties by choosing the more specific, lower-competition keyword (longer tail beats head term).
4. The primary keyword must be something a homeowner or contractor would actually type into Google — not an industry label.

---

## STEP 3 — Build the keyword cluster

- **Primary keyword:** the one you selected above.
- **Secondary keywords (4–6):** first pull same-intent variants from `slideshow/dumpster_keywords.csv` and mark them `✓ CSV`. If you need more, invent relevant secondaries and mark them `(invented)`.
- Never use a secondary keyword as a primary elsewhere (that also causes cannibalization).

---

## STEP 4 — Choose the slug and title

**Slug rules (from on-page SEO checklist):**
- Under 60 characters.
- Primary keyword in the slug.
- Hyphens only, lowercase only.
- No stop words unless the keyword requires them.
- Pattern: `/blog/{slug}`

**Title rules:**
- 50–60 characters.
- Primary keyword near the start.
- Jake Harlow style: a statement or a dry question, not a label. Example: "What Does a Roll-Off Dumpster Rental Actually Cost?" not "Dumpster Rental Cost Guide."

---

## STEP 5 — Write the blog post entry for `content/blog-posts.ts`

Read `content/blog-posts.ts` first to understand the exact TypeScript shape of existing entries. Match it exactly — no new fields, no missing fields.

Required fields (check against the existing entries):
- `slug` — matches the slug from Step 4.
- `title` — from Step 4.
- `category` — pick the most accurate existing category or a clean new one.
- `coverImage` — a Pexels URL. Use the Pexels API key from `.env` (key: `PEXELS_API_KEY`). Search Pexels for an image relevant to the topic. Use the URL format: `https://images.pexels.com/photos/{id}/pexels-photo-{id}.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`. Fetch via: `curl -H "Authorization: YOUR_PEXELS_KEY" "https://api.pexels.com/v1/search?query=TOPIC&per_page=5"`
- `date` — today's date (ISO format: YYYY-MM-DD).
- `author` — `'Jake Harlow'`
- `readingTime` — estimate: 200 words/minute. A 1,500-word post = 8 min.
- `keywords` — array starting with the primary, then secondaries.
- `toc` — table of contents. Each item: `{ label: string; anchor: string }`. Anchors must match the `id` attributes on H2s in the body.
- `faq` — array of 6–8 questions. Each item: `{ question: string; answer: string }`. Answers: 2–4 sentences each, Jake Harlow voice.
- `body` — the full HTML body string. See the body rules below.

---

## STEP 6 — Body writing rules

**Structure (required, in this order):**
1. **Direct answer paragraph** — first 100 words must contain the primary keyword and answer the query directly. This is the featured-snippet target.
2. **TL;DR callout box** — a `<div>` styled as a callout. Summarize the key takeaway in 2–3 sentences.
3. **Table of contents** — rendered from the `toc` field. Link to each H2 anchor.
4. **Body sections** — each one is an H2 with a matching `id` attribute. See section requirements below.
5. **FAQ section** — H2 titled something like "Straight Answers" (not literally "FAQ"). Render each item from the `faq` field as an H3 question with a paragraph answer.
6. **Sign-off** — 1–2 sentences. Must make the reader smile or think. See `references/humour.md` rule 5.

**H2 section requirements:**
- 4–7 body sections (not counting FAQ or sign-off).
- At least one section must include a pricing table or comparison table (HTML `<table>`).
- At least one section must tell the reader when NOT to use something — the biggest voice tell per `voice.md`.
- Headings are statements, not labels. Write them like Jake Harlow would.

**Images (use Pexels):**
- 2–3 inline images placed above H2s (not the cover image, which is separate).
- Use `<figure>` + `<img>` with: `width`, `height`, `loading="lazy"`, descriptive `alt` text with keyword where natural.
- Image HTML format:
  ```html
  <figure class="my-8">
    <img
      src="PEXELS_URL"
      alt="DESCRIPTIVE ALT TEXT"
      width="1260"
      height="750"
      loading="lazy"
      class="w-full rounded-lg"
    />
  </figure>
  ```

**Internal links (3–5 required):**
- Link to existing blog posts and the /locations and /resources pages.
- Existing blog slugs to choose from (read `content/blog-posts.ts` for the current list).
- Use descriptive anchor text — never "click here" or "read more".

**External links (2–3 required):**
- Link to authoritative sources: EPA, OSHA, government or .edu domains, major industry publications.
- `target="_blank" rel="noopener noreferrer"` on all external links.
- Relevant to the topic.

**Voice rules (non-negotiable):**
- Jake Harlow writes in first person ("I").
- Short sentences. Mostly under 18 words.
- Answer first, context after.
- Dad joke in the first 50 words — or rewrite the opening.
- One dad joke / self-aware aside every 300–500 words.
- Real numbers over adjectives.
- Tell the reader when NOT to do something.
- Use Jake's vocabulary: "reckon," "haul," "the bin," "the driver," "the pull," "second haul," "give us a call."
- Never: "unlock," "leverage," "seamless," "world-class," "comprehensive," "whether you're X, Y, or Z," parallel "-ing" sentence structures, exclamation marks, emojis.

**AI-pattern check (run before finalizing the body):**
Read `references/voice.md` → "Tells that it's AI-written." Delete anything that matches. If you catch:
- Three-item lists where everything starts with an "-ing" verb → rewrite.
- Paragraphs ending in rhetorical flourish → replace with a fact.
- "Whether you're [X], [Y], or [Z]…" → delete and start again.
- A closing sentence that restates the opening → replace it.
- Zero dry jokes → you missed the humour rules. Go back.

---

## STEP 7 — On-page SEO checklist

Every item below must be satisfied before this post is done.

**Head & Metadata (already handled by the blog template — verify the data you supply is correct):**
- Title: 50–60 chars, primary keyword near the start.
- Meta description: 150–160 chars, keyword + benefit + soft CTA.
- Canonical URL: `https://rolloffdumpsterfinder.com/blog/{slug}`.
- Open Graph: title, description, image (1200×630), URL, type.
- Twitter Card: summary_large_image, title, description.

**URL:** slug is under 60 chars, primary keyword included, hyphens, lowercase.

**Headings:** exactly one H1 (the post title), H2s use supporting keywords, no skipped levels.

**Copy:** primary keyword in first 100 words, length within 20% of typical SERP length for this topic (target 1,400–1,800 words for most dumpster topics), short paragraphs (1–4 sentences).

**FAQ:** 6–8 questions, 2–4 sentence answers, FAQPage JSON-LD applied (the blog template handles this from the `faq` field — verify the questions are what a real searcher would ask).

**Images:** alt text, width/height attributes, loading="lazy" on below-fold images.

**Internal links:** 3–5, descriptive anchor text, contextually placed.

**External links:** 2–3, authoritative .gov or .edu sources, noopener.

**Schema (the blog template handles these from the data you supply — verify):**
- Article schema
- FAQPage schema
- BreadcrumbList schema
- Person (author) schema

**E-E-A-T:**
- Author byline: "Jake Harlow" with date.
- Real numbers, real opinions.
- At least one cite to an authoritative external source.

**Long-form content:**
- Table of contents with anchor links.
- Jump links for each H2.

---

## STEP 8 — Update `references/used-keywords.md`

Add a new row to the table. Format:

```
| DATE | PRIMARY KEYWORD | SLUG | SECONDARY KEYWORDS (mark ✓ CSV or (invented)) | SOURCE |
```

Use today's date in YYYY-MM-DD format.

---

## STEP 9 — Update `app/resources/page.tsx`

Check if the new post topic fits one of the existing `resourceCards` stubs (those with `href: '#'`). If it does, update that card's `href` to `/blog/{slug}`. If there is no matching stub, add a new card at the end of the `resourceCards` array.

Card shape:
```typescript
{
  badge: 'Category Label',
  title: 'Card Title',
  excerpt: 'Two-sentence excerpt. Jake Harlow voice.',
  href: '/blog/{slug}',
}
```

---

## STEP 10 — Update `app/sitemap.ts`

Add a new entry to the sitemap array:

```typescript
{
  url: 'https://rolloffdumpsterfinder.com/blog/{slug}',
  lastModified: new Date(),
  changeFrequency: 'monthly',
  priority: 0.8,
},
```

---

## STEP 11 — Run the build and fix any errors

```bash
./node_modules/.bin/next build
```

Fix any TypeScript or Next.js errors. Every route must show `○ (Static)` or `● (SSG)` in the build output. Do not report the task as done if the build is failing.

---

## STEP 12 — Report back

When done, report:
- Primary keyword chosen and why.
- Slug and post title.
- Secondary keywords (mark which are ✓ CSV vs (invented)).
- Pexels cover image URL used.
- Word count of the body.
- Confirmation that `used-keywords.md` was updated.
- Confirmation that `resources/page.tsx` was updated.
- Confirmation that `sitemap.ts` was updated.
- Confirmation that `npm run build` passed with no errors.
- Any AI-voice patterns you caught and deleted.
