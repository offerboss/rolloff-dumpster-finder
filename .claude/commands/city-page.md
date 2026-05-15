# /city-page — Rolloff Dumpster Finder City Page Builder

You are building a new city location page for Rolloff Dumpster Finder. The argument is the city and state you have been given — for example `/city-page Aurora, CO` or `/city-page Fort Collins, Colorado`. Follow every step in order. Do not skip any step. Do not write any content until you have completed the research steps.

---

## STEP 1 — Parse the city and state from the argument

From `$ARGUMENTS`, extract:
- **City name** — the full display name (e.g., `Fort Collins`)
- **State name** — the full state name (e.g., `Colorado`)
- **State abbreviation** — the two-letter postal code (e.g., `CO`)

If the state abbreviation was not provided but the state name was, derive the correct postal abbreviation yourself (e.g., `Texas` → `TX`, `Arizona` → `AZ`).

---

## STEP 2 — Read existing data before writing anything

Read these files in full before proceeding:

- `content/locations.ts` — the full TypeScript interface and all existing city entries. Match the exact object shape — no new fields, no missing fields.
- `references/voice.md` — Jake Harlow's voice. All `introParagraphs` and `faq` answers must follow this voice. Short sentences, real numbers, answer first.

Confirm the city does not already have a slug in `content/locations.ts`. If it does, stop and tell the user.

---

## STEP 3 — Build the keyword set

Use the following keyword pattern. Replace `[city]` with the city name and `[state]` with the state abbreviation.

**Primary keyword (use exactly one):**
```
[city] dumpster rental
```

**Secondary keywords (include all of these):**
```
dumpster rental [city] [state]
[city] construction dumpster rental
roll off dumpster [city]
roll off dumpster [city] [state]
rolloff dumpsters [city]
roll offs [city] [state]
```

Use lowercase for all keywords. The primary keyword goes first in the `keywords` array (via `primaryKeyword` field), followed by secondaries (via `secondaryKeywords` array).

---

## STEP 4 — Determine the slug

**Slug format:** `{city-kebab-case}-{state-abbr-lowercase}-dumpster-rental`

Examples:
- `Fort Collins, CO` → `fort-collins-co-dumpster-rental`
- `Aurora, CO` → `aurora-co-dumpster-rental`
- `Tucson, AZ` → `tucson-az-dumpster-rental`

Rules:
- Lowercase only.
- Hyphens only — no underscores, no spaces.
- Multi-word city names use hyphens between each word.
- No special characters.

---

## STEP 5 — Research the city

Before writing any content, think through what you know about this city:

- What is the housing stock like? (Age of homes, common architectural styles, era of construction)
- What drives dumpster demand locally? (Active construction, hail events, military base nearby, estate cleanouts, renovation boom, etc.)
- What are the prominent neighborhoods? (Real, specific neighborhood names — not generic labels)
- What cities are nearby? (Suburbs and surrounding metro communities that might share the same providers)
- Any local permit or placement quirks? (Altitude, mountain access, HOA-heavy areas, dense urban cores, narrow streets, alleys, etc.)
- Approximate latitude and longitude for the city center.

Write city-specific content — not generic dumpster copy that could apply to any market. Every `introParagraphs` entry should contain something you could only write about that specific city.

---

## STEP 6 — Write the `CityLocation` entry for `content/locations.ts`

Match the exact TypeScript interface from the file. Every field is required unless marked optional with `?`.

### Field-by-field guide:

**`slug`** — from Step 4.

**`cityName`** — display name (e.g., `'Fort Collins'`).

**`stateName`** — full state name (e.g., `'Colorado'`).

**`stateAbbr`** — two-letter postal code (e.g., `'CO'`).

**`metaTitle`** — 55–65 characters. Format: `'Dumpster Rental {City}, {State} | Roll-Off Dumpster Finder'` or `'Roll Off Dumpster Rental in {City}, {State} | Sizes & Pricing'`. Primary keyword near the start.

**`metaDescription`** — 150–160 characters. Include the primary keyword, a city-specific detail, and a soft CTA. No exclamation marks.

**`primaryKeyword`** — `'{City} dumpster rental'` (first in the keyword list from Step 3).

**`secondaryKeywords`** — array of all secondary keywords from Step 3. Include size-specific variants too (e.g., `'10 yard dumpster rental {City}'`, `'20 yard dumpster rental {City}'`, `'30 yard dumpster rental {City}'`).

**`heroH1`** — `'Dumpster Rental in {City}, {State}'` or `'Roll Off Dumpster Rental in {City}, {State}'`. This is the only H1 on the page.

**`heroSubheadline`** — 1–2 sentences, 20–35 words. Mention the city, 3–4 project types, and the surrounding area.

**`introParagraphs`** — exactly 3 paragraphs as strings. Each 60–100 words. Jake Harlow voice throughout:
- **Paragraph 1:** What drives dumpster demand in this specific city. Housing stock age, renovation activity, local character. Name specific neighborhoods where relevant.
- **Paragraph 2:** A second demand driver unique to this market (hail, military, wildfire debris, tourism boom, resort construction, specific industry, etc.). Real and specific — not generic.
- **Paragraph 3:** How Rolloff Dumpster Finder helps in this market. Can mention the surrounding metro / service area. End with a value statement in plain language, not marketing copy.

**`pricingGuide`** — 5 rows, one per container size (10, 15, 20, 30, 40 yard). Each row:
- `size`: `'10 Yard'`, `'15 Yard'`, `'20 Yard'`, `'30 Yard'`, `'40 Yard'`
- `uses`: 1 sentence listing 3–4 common project types for that size
- `range`: price range in the format `'$XXX–$XXX / week'`

Pricing guidance by market type:
- **Mountain / rural Colorado markets:** add 5–10% to Denver rates
- **Suburban Front Range (Aurora, Lakewood, Arvada, etc.):** use Denver rates or slightly lower
- **Out-of-state metro markets:** research typical local rates; use honest ranges. If unknown, use `'Call for pricing'` rather than inventing numbers.
- Reference rates (Denver): 10yd $280–$480, 15yd $320–$540, 20yd $380–$650, 30yd $450–$780, 40yd $580–$1,100+

**`projects`** — 8–10 project cards. Each card:
- `number`: `'01'` through `'10'` (zero-padded)
- `name`: short project name (2–4 words)
- `description`: 2–3 sentences, city-specific where possible. Mention neighborhoods or local context. Do not copy descriptions verbatim from other city entries.

Required project types (always include these 7, add city-specific ones to reach 8–10):
1. Home Cleanouts
2. Roofing Tear-Offs
3. Construction Debris
4. Kitchen & Bath Remodels
5. Basement & Garage Cleanouts
6. Estate Cleanouts
7. Yard Waste & Landscaping

**`placementIntro`** — 1 sentence. `'Dumpster placement in {City} depends on your lot, neighborhood, and whether the container goes on private property or a public right-of-way.'`

**`placementNotes`** — 5–7 strings. Each is one practical placement note. Tailor to the city:
- Always include: driveway placement (most common), alley access (if relevant), street permit requirements (name the specific city department or process if known), HOA considerations.
- Add city-specific notes: mountain terrain, steep/narrow driveways, snow delays, dense urban access, narrow historic district streets, etc.
- End with: `'When in doubt, confirm placement requirements with your rental provider before scheduling delivery.'`

**`neighborhoods`** — 10–18 strings. Real, specific neighborhoods or districts within the city. Not suburb names — those go in `nearbyCities`. Use official names, not branded community names.

**`nearbyCities`** — 8–14 strings. Surrounding municipalities, suburbs, and metro communities within typical service range.

**`faq`** — 8–10 items. Each item:
- `question`: a real question a homeowner or contractor would ask about dumpster rental in this specific city
- `answer`: 2–4 sentences. Jake Harlow voice. Real numbers where applicable. Answer first, context after.

Required FAQ topics (include all, add city-specific ones to reach 8–10):
1. How much does dumpster rental cost in [City]?
2. What size dumpster for a [City] home cleanout?
3. Can I get a dumpster for roofing debris in [City]?
4. What about concrete, dirt, or heavy debris in [City]?
5. How quickly can I get delivery in [City]?
6. Do you serve nearby cities like [X], [Y], and [Z]? (use actual nearby cities)
7. How long can I keep a dumpster rental in [City]?
8. Are there items I cannot put in a [City] dumpster?

**`latitude`** and **`longitude`** — city center coordinates. Both are optional (`?`) but include them when known. 4 decimal places is sufficient.

---

## STEP 7 — Voice check before writing

Before finalizing `introParagraphs` and `faq` answers, run the voice check from `references/voice.md`:

- No "whether you're X, Y, or Z" sentence openers
- No "-ing" parallel lists ("Ensuring X, providing Y, offering Z")
- No paragraphs ending with a rhetorical flourish — end with a fact
- No exclamation marks
- No emojis
- No "seamless," "comprehensive," "leverage," "unlock," "world-class"
- No closing sentence that restates the opening sentence
- Short sentences. Mostly under 18 words.
- Answer first, context after.

City pages do not require dad jokes (that's blog-post territory). But the writing should sound like Jake Harlow: direct, specific, honest numbers, and occasionally dry. Never a brochure.

---

## STEP 8 — Add the entry to `content/locations.ts`

Insert the new `CityLocation` object into the `cityLocations` array in `content/locations.ts`, after the last existing entry and before the `// ─── FUTURE CITIES ───` comment (or at the end of the array if that comment is absent).

Add a comment above the new entry in the same format used for existing cities:
```typescript
// ─── {CITY NAME IN CAPS} ──────────────────────────────────────
```

Do not modify any existing entries.

---

## STEP 9 — Update `app/sitemap.ts`

Add a new entry to the sitemap array:

```typescript
{
  url: 'https://rolloffdumpsterfinder.com/locations/{slug}',
  lastModified: new Date(),
  changeFrequency: 'monthly',
  priority: 0.8,
},
```

---

## STEP 10 — Run the build and fix any errors

```bash
./node_modules/.bin/next build
```

Fix any TypeScript errors before reporting done. Every route must show `○ (Static)` or `● (SSG)` in the build output. The new location slug must appear in the `● /locations/[slug]` paths list.

---

## STEP 11 — Report back

When done, report:
- City, state, and slug used.
- Primary keyword and all secondaries.
- Pricingguide ranges used and how they were set (local market, Front Range estimate, or "call for pricing").
- Number of neighborhoods and nearby cities included.
- Number of FAQ items.
- Confirmation that `content/locations.ts` was updated.
- Confirmation that `app/sitemap.ts` was updated.
- Confirmation that `npm run build` passed with the new slug visible in the route list.
- Any generic copy you caught and made city-specific.
