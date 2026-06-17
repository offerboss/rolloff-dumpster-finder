import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

const TITLE = '20 Yard Dumpster Rental: What Fits, What It Costs, and When to Use One'
const CANONICAL = 'https://rolloffdumpsterfinder.com/resources/20-yard-dumpster-rental'
const COVER_SRC =
  'https://images.pexels.com/photos/8811446/pexels-photo-8811446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
const DATE = '2026-06-13'
const AUTHOR = 'Jake Harlow'
const META_DESC =
  'A 20-yard dumpster rental costs $350–$650 for a standard 7-day rental. Here is what fits, what the weight limits actually mean, and when to rent a different size.'

export const metadata: Metadata = {
  title: TITLE,
  description: META_DESC,
  keywords: [
    '20 yard dumpster rental',
    '20 yard roll off dumpster rental',
    '20 yard dumpster rental cost',
    '20 yard dumpster dimensions',
    '20 yard roll off dumpster',
    'how much does a 20 yard dumpster cost',
  ],
  authors: [{ name: AUTHOR }],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: `${TITLE} | Rolloff Dumpster Finder`,
    description: META_DESC,
    url: CANONICAL,
    siteName: 'Rolloff Dumpster Finder',
    type: 'article',
    publishedTime: DATE,
    authors: [AUTHOR],
    images: [
      {
        url: COVER_SRC,
        width: 1260,
        height: 750,
        alt: 'Large roll-off dumpster container on pavement at a job site',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: META_DESC,
    images: [COVER_SRC],
  },
}

const toc = [
  { id: 'what-it-looks-like', title: 'What a 20-Yard Container Actually Looks Like' },
  { id: 'what-fits', title: 'What Fits—and What to Reconsider' },
  { id: 'cost', title: 'What a 20-Yard Dumpster Rental Costs' },
  { id: 'weight-limits', title: 'Weight Limits: The Number That Changes the Bill' },
  { id: 'placement', title: 'Driveway Placement and Site Access' },
  { id: 'rental-period', title: 'Rental Periods, Extensions, and Second Pulls' },
  { id: 'sizing', title: 'When to Go Bigger or Smaller' },
  { id: 'faq', title: 'Straight Answers' },
]

const faq = [
  {
    question: 'How much does a 20-yard dumpster rental cost?',
    answer:
      'A 20-yard dumpster rental runs $350–$650 for a standard 7-day rental. The national average sits around $450 per week. Mountain states including Colorado typically run 10–20% above national averages due to longer haul distances to licensed landfills. Your final bill depends on how long you keep the container and what you load into it — weight overages are the most common surprise on the invoice.',
  },
  {
    question: 'What are the dimensions of a 20-yard roll-off container?',
    answer:
      'A standard 20-yard roll-off container measures approximately 22 feet long, 8 feet wide, and 4.5 feet high. Exact dimensions vary by rental company and container model. If your driveway has tight clearances, overhead obstacles, or a sharp turn, confirm the specific container dimensions with your provider before booking so the driver is not the first person to discover the problem.',
  },
  {
    question: 'How many pickup truck loads fit in a 20-yard dumpster?',
    answer:
      'A 20-yard container holds roughly 10 standard pickup truck loads of loose debris. That comparison works for household junk, furniture, drywall, and yard waste. It breaks down when you add dense material. Concrete, roofing shingles, and tile hit weight limits well before filling the container to volume capacity. For heavy debris, the weight allowance matters more than the cubic-yard number.',
  },
  {
    question: 'What is the weight limit on a 20-yard dumpster?',
    answer:
      'Most 20-yard roll-off containers include a weight allowance of 2–4 tons in the base rental rate. The exact number varies by provider and market — some price lean and allow 2 tons, others include 4 tons at a higher base rate. Ask specifically before booking: "How many tons are included in the weight limit?" Loads over that allowance incur overage charges of $40–$200 per extra ton.',
  },
  {
    question: 'Can I put roofing shingles in a 20-yard dumpster?',
    answer:
      'Yes, roofing shingles are accepted in most standard roll-off containers. The constraint is weight, not volume. A medium residential roof tear-off generates 3–5 tons of shingles. Most 20-yard containers allow 2–4 tons. Confirm the specific weight limit with your provider before loading — on a larger roof, or a roof with multiple shingle layers, you may need a weight-limit upgrade or a swap-out partway through.',
  },
  {
    question: 'Does a 20-yard dumpster fit in a standard driveway?',
    answer:
      'A 20-yard container is roughly 22 feet long and needs about 60 feet of straight clearance for the delivery truck to set it down. Most standard residential driveways have sufficient length. Narrow gates, sharp turns, low overhead lines, or overhanging tree branches can prevent delivery. Confirm access conditions with your provider before the driver arrives — repositioning a misplaced container is not a free service.',
  },
  {
    question: 'How long can I keep a 20-yard dumpster rental?',
    answer:
      'Standard rental periods run 7–10 days. Extensions cost $5–$10 per day. If your project is likely to run longer, ask about extended rental pricing when you book — some companies offer a better all-in rate for a longer window upfront than if you call mid-rental to extend. A second pull, where the driver swaps a full container for an empty one, typically runs $150–$250 on top of the base rental rate.',
  },
  {
    question: 'When should I rent a 30-yard dumpster instead of a 20-yard?',
    answer:
      'Rent a 30-yard when the project involves full home renovation across multiple rooms, a large basement cleanout, an estate clear-out from a large property, or commercial work. The cost gap between a 20-yard and a 30-yard is typically $50–$100 per week — less than the cost of a second haul if a 20-yard runs short. If you are genuinely uncertain, the 30-yard is the lower-risk choice.',
  },
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: TITLE,
  description: META_DESC,
  image: COVER_SRC,
  datePublished: DATE,
  dateModified: DATE,
  author: {
    '@type': 'Person',
    name: AUTHOR,
    url: 'https://rolloffdumpsterfinder.com/about',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Rolloff Dumpster Finder',
    url: 'https://rolloffdumpsterfinder.com',
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': CANONICAL,
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://rolloffdumpsterfinder.com' },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Resources',
      item: 'https://rolloffdumpsterfinder.com/resources',
    },
    { '@type': 'ListItem', position: 3, name: '20 Yard Dumpster Rental', item: CANONICAL },
  ],
}

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: AUTHOR,
  url: 'https://rolloffdumpsterfinder.com/about',
  worksFor: { '@type': 'Organization', name: 'Rolloff Dumpster Finder' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
}

const bodyHtml = `
<p>The 20-yard dumpster is the most commonly rented roll-off container in the US. It handles a full roof tear-off, a whole-home cleanout, a kitchen remodel, or a deck removal &#8212; and at $350&#8211;$650 for a standard 7-day rental, it fits most residential project budgets. If you have never rented a container before and do not know which size to pick, the 20-yard is where most homeowners start. It is also where most overweight charges start. Those two facts are related, and I will get to that.</p>

<div class="not-prose my-8 rounded-lg border border-orange-200 bg-orange-50 p-6">
  <p class="text-sm font-semibold uppercase tracking-wide text-orange-700 mb-2">Quick answer</p>
  <p class="text-charcoal">A 20-yard rental runs <strong>$350&#8211;$650</strong> for 7 days. The container measures roughly 22 feet long by 8 feet wide by 4.5 feet high. Weight limit is typically 2&#8211;4 tons &#8212; that number matters more than the cubic-yard capacity when you are hauling shingles, tile, or concrete.</p>
</div>

<h2 id="what-it-looks-like">What a 20-Yard Container Actually Looks Like</h2>

<p>A roll-off container is not a garbage dumpster with a lid. It sits flat on the ground, loads from an open top, and gets delivered off the back of a dedicated truck that sets it down at the end of your driveway. When the rental ends, the truck backs in, picks it up, and hauls it to the landfill. The 20-yard is one of the five standard residential sizes.</p>

<p>Standard dimensions for a 20-yard roll-off: roughly <strong>22 feet long, 8 feet wide, and 4.5 feet high</strong>. Exact measurements vary by rental company and container model. If you are working with tight clearances, confirm the dimensions before the truck arrives. The driver cannot fold the container in half if it doesn't fit.</p>

<p>What 20 cubic yards translates to in practical terms: about 10 pickup truck loads of standard household debris. That comparison assumes a short-bed truck loaded to the top of the bed without heaping. It also assumes your neighbor offers to help but then gets a text and disappears. Results may vary.</p>

<p>A cubic yard is a box 3 feet on each side &#8212; roughly the size of a large washing machine. The math works fine for estimating loose, light debris. It breaks completely when you start loading concrete, tile, or roofing shingles. Dense material hits weight limits at a fraction of volume capacity. A container can look half-empty at the landfill scale and still be overweight.</p>

<figure class="not-prose my-8">
  <img
    src="https://images.pexels.com/photos/8811446/pexels-photo-8811446.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=2"
    alt="Large roll-off dumpster container parked on pavement at a job site"
    width="1260"
    height="750"
    loading="lazy"
    class="w-full rounded-lg object-cover"
  />
</figure>

<h2 id="what-fits">What Fits in a 20-Yard &#8212; and What to Reconsider</h2>

<p>The 20-yard is the default residential container because it covers the most common project types without guesswork. Here is where it works cleanly, where it gets tight, and where it is the wrong call:</p>

<div class="not-prose my-6 overflow-x-auto">
  <table class="w-full text-sm border-collapse">
    <thead>
      <tr class="bg-charcoal text-white">
        <th class="px-4 py-3 text-left font-semibold">Project</th>
        <th class="px-4 py-3 text-left font-semibold">20-Yard Verdict</th>
        <th class="px-4 py-3 text-left font-semibold">What to Watch</th>
      </tr>
    </thead>
    <tbody>
      <tr class="border-b border-gray-200 bg-white hover:bg-gray-50">
        <td class="px-4 py-3">Whole-home cleanout</td>
        <td class="px-4 py-3 font-semibold text-orange">Fits</td>
        <td class="px-4 py-3">Step to 30-yard if basement is included</td>
      </tr>
      <tr class="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
        <td class="px-4 py-3">Roof tear-off (single-family)</td>
        <td class="px-4 py-3 font-semibold text-orange">Fits (confirm weight)</td>
        <td class="px-4 py-3">Weight limit, not volume, is the constraint</td>
      </tr>
      <tr class="border-b border-gray-200 bg-white hover:bg-gray-50">
        <td class="px-4 py-3">Kitchen remodel</td>
        <td class="px-4 py-3 font-semibold text-orange">Fits</td>
        <td class="px-4 py-3">Stone countertops add significant weight</td>
      </tr>
      <tr class="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
        <td class="px-4 py-3">Deck removal (wood)</td>
        <td class="px-4 py-3 font-semibold text-orange">Fits</td>
        <td class="px-4 py-3">Concrete footings add weight, not volume</td>
      </tr>
      <tr class="border-b border-gray-200 bg-white hover:bg-gray-50">
        <td class="px-4 py-3">Landlord turnover / property cleanout</td>
        <td class="px-4 py-3 font-semibold text-orange">Fits</td>
        <td class="px-4 py-3">Works for full unit clear-outs</td>
      </tr>
      <tr class="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
        <td class="px-4 py-3">Single bathroom remodel</td>
        <td class="px-4 py-3">Often oversized</td>
        <td class="px-4 py-3">10&#8211;15-yard usually right</td>
      </tr>
      <tr class="border-b border-gray-200 bg-white hover:bg-gray-50">
        <td class="px-4 py-3">Garage cleanout</td>
        <td class="px-4 py-3">Often oversized</td>
        <td class="px-4 py-3">10-yard handles most residential garages</td>
      </tr>
      <tr class="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
        <td class="px-4 py-3">Major renovation or structural demo</td>
        <td class="px-4 py-3">Undersized</td>
        <td class="px-4 py-3">30&#8211;40-yard is the right call</td>
      </tr>
      <tr class="border-b border-gray-200 bg-white hover:bg-gray-50">
        <td class="px-4 py-3">Concrete, brick, or heavy masonry</td>
        <td class="px-4 py-3">Undersized (weight)</td>
        <td class="px-4 py-3">Hits weight limit at less than half capacity</td>
      </tr>
    </tbody>
  </table>
</div>

<p>Landlords and property managers renting between tenants typically land in the 20-yard range when clearing a full unit. For light turnovers &#8212; a few pieces of furniture and a kitchen's worth of cabinets &#8212; a 10-yard or 15-yard often works. For a full-floor estate or a multi-unit building clearance, step to a 30.</p>

<p>For the full breakdown across all container sizes and project types, see the <a href="/resources/how-to-choose-the-right-dumpster-size" class="text-orange hover:underline">dumpster size guide</a>.</p>

<h2 id="cost">What a 20-Yard Dumpster Rental Costs</h2>

<figure class="not-prose my-8">
  <img
    src="https://images.pexels.com/photos/31868429/pexels-photo-31868429.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=2"
    alt="Large green roll-off dumpster container in an urban setting"
    width="1260"
    height="750"
    loading="lazy"
    class="w-full rounded-lg object-cover"
  />
</figure>

<p>A 20-yard dumpster rental costs <strong>$350&#8211;$650</strong> for a standard 7-day rental. The national average is around $450 per week. Colorado and other mountain states typically run 10&#8211;20% above national averages because haul distances to licensed landfills are longer.</p>

<p>Here is what moves the number within that range:</p>

<div class="not-prose my-6 overflow-x-auto">
  <table class="w-full text-sm border-collapse">
    <thead>
      <tr class="bg-charcoal text-white">
        <th class="px-4 py-3 text-left font-semibold">Line Item</th>
        <th class="px-4 py-3 text-left font-semibold">Typical Range</th>
        <th class="px-4 py-3 text-left font-semibold">Notes</th>
      </tr>
    </thead>
    <tbody>
      <tr class="border-b border-gray-200 bg-white hover:bg-gray-50">
        <td class="px-4 py-3 font-medium">Base rental (7 days)</td>
        <td class="px-4 py-3">$350&#8211;$650</td>
        <td class="px-4 py-3">Varies by market and provider</td>
      </tr>
      <tr class="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
        <td class="px-4 py-3 font-medium">Rental extension</td>
        <td class="px-4 py-3">$5&#8211;$10/day</td>
        <td class="px-4 py-3">Ask upfront if the project may run long</td>
      </tr>
      <tr class="border-b border-gray-200 bg-white hover:bg-gray-50">
        <td class="px-4 py-3 font-medium">Overweight charge</td>
        <td class="px-4 py-3">$40&#8211;$200/ton</td>
        <td class="px-4 py-3">Per ton above the included weight limit</td>
      </tr>
      <tr class="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
        <td class="px-4 py-3 font-medium">Fuel surcharge</td>
        <td class="px-4 py-3">$15&#8211;$35</td>
        <td class="px-4 py-3">Most companies include this in the quote</td>
      </tr>
      <tr class="border-b border-gray-200 bg-white hover:bg-gray-50">
        <td class="px-4 py-3 font-medium">Second pull (swap-out)</td>
        <td class="px-4 py-3">$150&#8211;$250</td>
        <td class="px-4 py-3">Full container picked up, empty returned</td>
      </tr>
      <tr class="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
        <td class="px-4 py-3 font-medium">Prohibited material fee</td>
        <td class="px-4 py-3">$25&#8211;$100+</td>
        <td class="px-4 py-3">Tires, paint, appliances, hazmat</td>
      </tr>
    </tbody>
  </table>
</div>

<p>I reckon most of those line items are self-explanatory. The overweight charge is the one that catches people off guard. You fill the container, call for pickup, and three days later an additional charge arrives. Not because the company invented a fee &#8212; because the scale at the landfill weighed what you loaded. The way to avoid it: ask for the specific weight limit before you load anything. That number is on file. They have it. They just don't always volunteer it.</p>

<p>For a detailed breakdown of every fee category and what you can negotiate before booking, see the <a href="/resources/what-does-a-dumpster-rental-cost" class="text-orange hover:underline">dumpster rental cost guide</a>.</p>

<h2 id="weight-limits">Weight Limits: The Number That Changes the Bill</h2>

<p>A standard 20-yard roll-off container includes a weight allowance of <strong>2&#8211;4 tons</strong> in the base rental rate. The exact number varies by provider and market. Some price lean and allow 2 tons; others include 4 tons at a higher base rate. Before booking, ask: "What is the weight limit in tons for the 20-yard?"</p>

<p>Why this matters more than volume: concrete weighs roughly 4,000 pounds per cubic yard. A cubic yard of concrete takes up the same amount of space as a large filing cabinet. Three cubic yards &#8212; still modest-looking in a 20-yard container &#8212; and you are at 6 tons, well past most standard weight limits. The bin looks nearly empty. The landfill scale does not care how the bin looks.</p>

<p>Materials that hit weight limits before filling the container to capacity:</p>

<ul>
  <li>Concrete and masonry rubble</li>
  <li>Roofing shingles &#8212; a medium residential roof generates 3&#8211;5 tons</li>
  <li>Ceramic and porcelain tile</li>
  <li>Dirt, gravel, and sod</li>
  <li>Brick and stone</li>
</ul>

<p>Rule of thumb: if more than a quarter of your load is heavy material, size the container based on its weight allowance rather than its cubic-yard number. For projects involving significant concrete, ask the rental company about their heavy-debris container options or whether they offer a lower-capacity bin with a higher weight limit.</p>

<p>Roofers: a medium single-family tear-off generates 3&#8211;5 tons of shingles. If your included weight allowance is 2 tons, you will hit it before the container is full. Confirm the specific weight limit with your provider before the job starts and ask about mid-job swap-outs if the roof is larger than average. For the full roofing weight breakdown, see the <a href="/resources/roofing-dumpster-rental" class="text-orange hover:underline">roofing dumpster rental guide</a>.</p>

<p>The <a href="https://www.epa.gov/smm/construction-and-demolition-materials" target="_blank" rel="noopener noreferrer">EPA's construction and demolition materials data</a> puts concrete as the single largest component of C&amp;D waste by weight at licensed facilities &#8212; which is exactly why rental companies set weight limits separately from container size, and why that limit is the most important number in your quote.</p>

<h2 id="placement">Driveway Placement and Site Access</h2>

<figure class="not-prose my-8">
  <img
    src="https://images.pexels.com/photos/17849720/pexels-photo-17849720.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=2"
    alt="Roll-off container on a residential pavement during a home renovation project"
    width="1260"
    height="750"
    loading="lazy"
    class="w-full rounded-lg object-cover"
  />
</figure>

<p>A 20-yard container is 22 feet long. The delivery truck needs roughly <strong>60 feet of clear, straight-line access</strong> to set it down &#8212; the truck backs in, the container slides off the rear rollers onto the driveway, and the truck pulls forward. Thirty-year-old trees with low-hanging branches, utility lines at the mouth of the driveway, and sharp right-angle turns are the things drivers find when they get there instead of beforehand.</p>

<p>Before the truck arrives:</p>

<ul>
  <li>Clear overhead clearance along the delivery path &#8212; utility lines and tree branches are the two most common surprises</li>
  <li>Check the driveway surface &#8212; asphalt can dent or crack under a fully-loaded container; ask the company about plywood boards under the container's contact points if you are worried about the driveway</li>
  <li>Review HOA rules &#8212; some associations restrict placement or require pre-approval before a container is dropped</li>
  <li>Confirm street permit requirements &#8212; driveway placement rarely requires a permit; containers on public property (curb, street, sidewalk) typically do</li>
</ul>

<p>Permit requirements are city- and county-specific. For the full rundown on when a permit is required and how to get one without delaying your delivery, see the <a href="/resources/do-you-need-a-permit-for-a-dumpster-rental" class="text-orange hover:underline">dumpster permit guide</a>.</p>

<h2 id="rental-period">Rental Periods, Extensions, and Second Pulls</h2>

<p>Standard 20-yard rentals run <strong>7&#8211;10 days</strong>. Most homeowners finish their project inside that window. Most contractors do not.</p>

<p>Extensions cost $5&#8211;$10 per day. If you know the project will run longer than 10 days, ask about extended rental pricing when you book &#8212; some operators offer a better flat rate for a longer window upfront than if you call midway through to extend. The company would rather know early. The driver would rather not make an unexpected trip.</p>

<p>A <strong>second pull</strong> is when the driver picks up a full container and drops an empty one in its place. This runs $150&#8211;$250 on top of the original rental and is the right move when the project generates more debris than expected. Ordering a second pull is not a failure of planning &#8212; it is cheaper than renting a larger container that spends three days sitting mostly empty before work picks up.</p>

<p>Contractors and property managers running multi-phase projects sometimes do better with a standing rental arrangement &#8212; where the container stays onsite and gets pulled on a scheduled cycle &#8212; rather than booking individual hauls. Ask the operator if they offer that structure for your market. Not all do, but it is worth the question if you have ongoing work at a site.</p>

<p>For urgent situations &#8212; where you need a container the same day or next morning &#8212; see the <a href="/resources/same-day-dumpster-rental" class="text-orange hover:underline">same-day dumpster rental guide</a> for how to find operators who can move that fast and what the rush fee typically runs.</p>

<h2 id="sizing">When to Go Bigger or Smaller</h2>

<p><strong>Step down to a 10 or 15-yard</strong> when the project is a single-room remodel, a garage cleanout without heavy accumulation, a small yard cleanup, or a light landlord turnover. You will pay less and fill the container properly rather than paying for capacity you do not use. For the full details on the 10-yard &#8212; what it holds, how the weight limit works for concrete and tile, and when it fits in driveways that a 20-yard cannot reach &#8212; see the <a href="/resources/10-yard-dumpster-rental" class="text-orange hover:underline">10-yard dumpster rental guide</a>.</p>

<p><strong>Step up to a 30-yard</strong> when the project involves full home renovation across multiple rooms, a large basement cleanout, a complete estate clear-out, or commercial work. The price gap between a 20-yard and a 30-yard is roughly $50&#8211;$100 per week &#8212; less than the cost of a second haul if the 20-yard runs short. When genuinely uncertain between two sizes, take the larger one. For dimensions, weight limits, and the full breakdown on what the 30-yard handles, see the <a href="/resources/30-yard-dumpster-rental" class="text-orange hover:underline">30-yard dumpster rental guide</a>.</p>

<p><strong>Do not rent a 20-yard for concrete-heavy work.</strong> This is the one situation where more volume does not help you. A concrete driveway removal, a foundation section, or significant masonry demolition will push a 20-yard past its weight limit at less than half capacity. Ask the rental company about heavy-debris containers or concrete-specific options. Some markets have them. If yours doesn't, plan for multiple smaller pulls with a lower-capacity container that has a stronger weight allowance.</p>

<p>For construction job sites with ongoing debris &#8212; framing, drywall, fixtures, and mixed materials &#8212; the logistics change beyond just the container size. The <a href="/resources/renting-a-construction-dumpster" class="text-orange hover:underline">construction dumpster rental guide</a> covers permit timing, pull scheduling, and what changes when a container lives on a job site instead of a driveway.</p>

<p>One honest piece of advice: the overweight charge is the one that surprises people. Not the rental price, not the extension fee &#8212; the overweight charge. Call the company, ask for the weight limit in tons, write it down. The call takes 60 seconds. The charge typically runs $80&#8211;$400 and arrives three days after you thought the project was finished. Your choice.</p>
`

export default function TwentyYardDumpsterRentalPage() {
  const formattedDate = new Date(DATE).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200 px-6 py-3">
        <nav aria-label="Breadcrumb" className="max-w-4xl mx-auto">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li>
              <Link href="/" className="hover:text-charcoal transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href="/resources" className="hover:text-charcoal transition-colors">
                Resources
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-charcoal font-medium truncate max-w-[200px] sm:max-w-none">
              20 Yard Dumpster Rental
            </li>
          </ol>
        </nav>
      </div>

      <article className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <header className="mb-10">
          <div className="mb-4">
            <span className="inline-block bg-orange text-black text-xs font-semibold uppercase tracking-wide px-3 py-1 rounded">
              Sizing Guide
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-charcoal leading-tight mb-6">
            {TITLE}
          </h1>
          <div className="flex items-center gap-4 py-4 border-y border-gray-200">
            <div className="w-10 h-10 rounded-full bg-charcoal flex items-center justify-center text-white font-bold text-sm shrink-0">
              JH
            </div>
            <div>
              <p className="font-semibold text-charcoal text-sm">{AUTHOR}</p>
              <p className="text-gray-500 text-sm">{formattedDate} &middot; 9 min read</p>
            </div>
          </div>
        </header>

        {/* Cover image */}
        <div className="mb-10 rounded-xl overflow-hidden">
          <Image
            src={COVER_SRC}
            alt="Large roll-off dumpster container parked on pavement at a job site"
            width={1260}
            height={750}
            priority
            className="w-full object-cover"
          />
        </div>

        {/* Table of contents */}
        <nav
          aria-label="Table of contents"
          className="mb-10 rounded-lg border border-gray-200 bg-gray-50 p-6"
        >
          <p className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-3">
            In this guide
          </p>
          <ol className="space-y-2">
            {toc.map((item, i) => (
              <li key={item.id} className="flex gap-3 text-sm">
                <span className="text-orange font-semibold shrink-0">{i + 1}.</span>
                <a
                  href={`#${item.id}`}
                  className="text-charcoal hover:text-orange transition-colors"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* Body */}
        <div
          className="prose prose-lg max-w-none
            prose-headings:text-charcoal prose-headings:font-bold
            prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
            prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
            prose-p:text-gray-700 prose-p:leading-relaxed
            prose-a:text-orange prose-a:no-underline hover:prose-a:underline
            prose-strong:text-charcoal
            prose-ul:text-gray-700 prose-li:my-1
            prose-table:text-sm"
          dangerouslySetInnerHTML={{ __html: bodyHtml }}
        />

        {/* FAQ section */}
        <section className="mt-16" aria-labelledby="faq-heading" id="faq">
          <h2
            id="faq-heading"
            className="text-2xl font-bold text-charcoal mb-8 pb-3 border-b border-gray-200"
          >
            Straight Answers
          </h2>
          <dl className="space-y-6">
            {faq.map((item, i) => (
              <div key={i} className="rounded-lg border border-gray-200 p-6">
                <dt className="font-semibold text-charcoal mb-2">{item.question}</dt>
                <dd className="text-gray-700 text-sm leading-relaxed">{item.answer}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* CTA */}
        <div className="mt-16 rounded-xl bg-charcoal text-white p-8 text-center">
          <h2 className="text-2xl font-bold mb-3">Ready to Find the Best Price?</h2>
          <p className="text-gray-300 mb-6 max-w-md mx-auto">
            Compare quotes from vetted local companies. No hidden fees, no oversized containers.
          </p>
          <a
            href="https://rolloffdumpsterfinder.com/#get-quote"
            className="inline-block bg-orange text-black font-semibold px-8 py-3 rounded-full hover:opacity-90 transition-opacity"
          >
            Get a Free Quote
          </a>
        </div>

        {/* Back to resources */}
        <div className="mt-10 pt-8 border-t border-gray-200">
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-orange transition-colors"
          >
            <span aria-hidden="true">&#8592;</span> Back to all guides
          </Link>
        </div>
      </article>
    </>
  )
}
