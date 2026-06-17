import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

const TITLE = '10 Yard Dumpster Rental: Best Uses, Weight Limits, and Pricing'
const CANONICAL = 'https://rolloffdumpsterfinder.com/resources/10-yard-dumpster-rental'
const COVER_SRC =
  'https://images.pexels.com/photos/6474471/pexels-photo-6474471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
const DATE = '2026-06-16'
const AUTHOR = 'Jake Harlow'
const META_DESC =
  'A 10-yard dumpster rental costs $220–$580 for a standard 7-day rental. Here is what it holds, why it handles small concrete and tile jobs well, and when to step up to a 20-yard.'

export const metadata: Metadata = {
  title: TITLE,
  description: META_DESC,
  keywords: [
    '10 yard dumpster rental',
    '10 yard dumpster rental cost',
    '10 yard dumpster rental prices',
    '10 yard roll off dumpster rental',
    '10 yard dumpster',
    '10 yard roll off dumpster',
    '10 yard dumpster dimensions',
    '10 yard dumpster weight limit',
    'small dumpster rental',
    'how much does a 10 yard dumpster cost',
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
        alt: 'Small roll-off dumpster container in a residential driveway during a remodel project',
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
  { id: 'what-it-looks-like', title: 'What a 10-Yard Container Actually Looks Like' },
  { id: 'what-fits', title: 'What Fits — and What Runs Out Early' },
  { id: 'weight-limits', title: 'Weight Limits and the Heavy-Debris Math' },
  { id: 'cost', title: 'What a 10-Yard Dumpster Rental Costs' },
  { id: 'placement', title: 'Driveway Placement and Tight Access' },
  { id: 'rental-period', title: 'Rental Period and Extensions' },
  { id: 'sizing-up', title: 'When to Step Up to a 20-Yard' },
  { id: 'questions', title: 'Five Questions to Ask Before Booking' },
  { id: 'faq', title: 'Straight Answers' },
]

const faq = [
  {
    question: 'How much does a 10-yard dumpster rental cost?',
    answer:
      'A 10-yard dumpster rental runs $220–$580 for a standard 7-day rental. The national average is around $350 per week. Colorado and other mountain states typically run 10–20% above national averages due to longer haul distances to licensed landfills. Your final bill depends on how long you keep the container and what you load into it — weight overages on concrete and tile are the most common line item that surprises people after pickup.',
  },
  {
    question: 'What are the dimensions of a 10-yard roll-off container?',
    answer:
      'A standard 10-yard roll-off container measures approximately 10–12 feet long, 8 feet wide, and 3–3.5 feet high. Exact dimensions vary by rental company and container model. The wall height of around 3 feet is low enough to load over the side without climbing, which makes it practical for heavy debris you carry by hand. If your driveway or access point has specific clearance constraints, confirm the exact dimensions before the delivery truck arrives.',
  },
  {
    question: 'What is the weight limit on a 10-yard dumpster?',
    answer:
      'Most 10-yard roll-off containers include a weight allowance of 1–2 tons in the base rental rate. The exact number varies by provider and market. Before booking, ask specifically: "What is the weight limit in tons for the 10-yard?" Loads over that allowance incur overage charges of $40–$200 per extra ton. Concrete and tile are the two materials that most commonly trigger overage charges on 10-yard rentals — they hit the weight limit before the container looks anywhere near full.',
  },
  {
    question: 'Can I put concrete in a 10-yard dumpster?',
    answer:
      'Yes, concrete is accepted in most standard roll-off containers. The constraint is weight, not volume. A cubic yard of concrete weighs approximately 4,000 pounds — 2 tons. A standard 10-yard allows 1–2 tons, so you can load roughly half a cubic yard to one cubic yard of pure concrete before hitting the limit. For small jobs — a partial driveway section, a concrete pad, a front walk — a standard 10-yard often works if you confirm the weight limit and stay under it. For larger concrete volumes, ask whether the rental company has a heavy-debris container with a higher weight allowance.',
  },
  {
    question: 'Does a 10-yard dumpster fit in a standard residential driveway?',
    answer:
      'A 10-yard container is 10–12 feet long and needs roughly 45–50 feet of clear, straight-line access for the delivery truck to set it down. Most residential driveways handle this with less difficulty than the 60 feet required for a 20-yard container. The smaller footprint also makes a 10-yard practical for urban lots, properties with narrow gates, and short driveways that a larger container cannot reach. Confirm access conditions with your provider before booking — repositioning a misplaced container after delivery is not a free service.',
  },
  {
    question: 'How many pickup truck loads fit in a 10-yard dumpster?',
    answer:
      'A 10-yard container holds roughly three standard pickup truck loads of loose debris. That comparison holds for light household materials — furniture, carpet, drywall, general cleanout debris. It breaks down when you add dense material. Concrete, roofing shingles, and tile hit the weight limit before filling the container to volume capacity. For heavy debris, the weight allowance matters more than the cubic-yard number.',
  },
  {
    question: 'When should I rent a 20-yard dumpster instead of a 10-yard?',
    answer:
      'Rent a 20-yard when the project involves more than one room, a full roof tear-off, a whole-home cleanout, or any significant amount of concrete beyond a partial pad or walkway. The cost gap between a 10-yard and a 20-yard is typically $80–$120 per week — less than the cost of a second haul if the 10-yard runs short. When genuinely uncertain between two sizes, the larger one is almost always the lower-risk choice.',
  },
  {
    question: 'Can I get same-day delivery on a 10-yard dumpster?',
    answer:
      'Same-day delivery is available from most local roll-off operators if you call before noon. Expect a rush fee of $50–$100 in most markets. Larger national providers are less likely to offer same-day service than smaller local operators. For more on how same-day delivery works and what to say when you call, see the same-day dumpster rental guide.',
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
    { '@type': 'ListItem', position: 3, name: '10 Yard Dumpster Rental', item: CANONICAL },
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
<p>A 10-yard dumpster rental costs <strong>$220&#8211;$580 for a standard 7-day rental</strong>. My rescue dog Bruiser once climbed into an empty 10-yard container and had to be retrieved with a step ladder. He fit. A garage cleanout does too &#8212; the step ladder, thankfully, is not required for the debris.</p>

<p>The 10-yard is the smallest standard roll-off container. It handles single-room remodels, garage cleanouts, small landscaping jobs, and moderate amounts of heavy debris like concrete, tile, and brick. Used on the right project, it is the correct container and nobody thinks twice. Used on a project that outgrows it, the overweight charge arrives on the invoice three days after pickup and costs more than the size difference would have.</p>

<div class="not-prose my-8 rounded-lg border border-orange-200 bg-orange-50 p-6">
  <p class="text-sm font-semibold uppercase tracking-wide text-orange-700 mb-2">Quick answer</p>
  <p class="text-charcoal">A 10-yard rental runs <strong>$220&#8211;$580</strong> for 7 days, averaging around $350. The container measures roughly 10&#8211;12 feet long, 8 feet wide, and 3 feet high. Weight limit is typically 1&#8211;2 tons &#8212; that limit, not the cubic-yard capacity, is the number to watch when loading tile, concrete, or asphalt.</p>
</div>

<h2 id="what-it-looks-like">What a 10-Yard Container Actually Looks Like</h2>

<p>A 10-yard roll-off container measures approximately <strong>10&#8211;12 feet long, 8 feet wide, and 3&#8211;3.5 feet high</strong>. Some providers run containers closer to 14 feet long; confirm dimensions before booking if your driveway has a specific clearance constraint or a tight gate.</p>

<p>That low wall height is not an oversight. You can load over the side without climbing a step. That makes a 10-yard practical for debris you carry by hand &#8212; tile chunks, bathroom fixtures, bags of concrete, sod rolls, deck boards. The side wall tops out at roughly chest height on most adults.</p>

<p>What 10 cubic yards translates to in practical terms: about three standard pickup truck loads of loose debris. One cubic yard is roughly the volume of a large kitchen appliance box. Stack ten and you have the container. The truck-load comparison holds for light, loose material. It stops working the moment you start loading concrete, tile, or soil &#8212; those materials hit the weight limit before they fill the volume. A container can look one-third empty and still be overweight at the landfill scale.</p>

<p>The delivery truck needs roughly <strong>45&#8211;50 feet of clear, straight-line access</strong> to set the container down &#8212; less than the 60 feet required for a 20-yard. That smaller footprint is what makes the 10-yard the right call on short residential driveways, urban lots, and gated properties where a larger container simply will not fit.</p>

<figure class="not-prose my-8">
  <img
    src="https://images.pexels.com/photos/6474471/pexels-photo-6474471.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=2"
    alt="Small roll-off dumpster container in a residential driveway during a remodel project"
    width="1260"
    height="750"
    loading="lazy"
    class="w-full rounded-lg object-cover"
  />
</figure>

<h2 id="what-fits">What Fits &#8212; and What Runs Out Early</h2>

<p>The 10-yard covers a specific range of residential jobs cleanly. Here is where it works, where it gets tight, and where it is the wrong call:</p>

<div class="not-prose my-6 overflow-x-auto">
  <table class="w-full text-sm border-collapse">
    <thead>
      <tr class="bg-charcoal text-white">
        <th class="px-4 py-3 text-left font-semibold">Project</th>
        <th class="px-4 py-3 text-left font-semibold">10-Yard Verdict</th>
        <th class="px-4 py-3 text-left font-semibold">What to Watch</th>
      </tr>
    </thead>
    <tbody>
      <tr class="border-b border-gray-200 bg-white hover:bg-gray-50">
        <td class="px-4 py-3">Single bathroom gut (tile, vanity, tub, drywall)</td>
        <td class="px-4 py-3 font-semibold text-orange">Right fit</td>
        <td class="px-4 py-3">Old ceramic tile is denser than it looks &#8212; watch the weight</td>
      </tr>
      <tr class="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
        <td class="px-4 py-3">Single-car garage cleanout</td>
        <td class="px-4 py-3 font-semibold text-orange">Right fit</td>
        <td class="px-4 py-3">Double-wide with decades of accumulation: step to a 15-yard</td>
      </tr>
      <tr class="border-b border-gray-200 bg-white hover:bg-gray-50">
        <td class="px-4 py-3">Sod removal and landscaping debris</td>
        <td class="px-4 py-3 font-semibold text-orange">Right fit (confirm weight)</td>
        <td class="px-4 py-3">Sod is dense; 1 ton covers roughly 50 sq ft at 4-inch depth</td>
      </tr>
      <tr class="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
        <td class="px-4 py-3">Partial concrete removal (pad, walkway, small patio)</td>
        <td class="px-4 py-3 font-semibold text-orange">Right fit (confirm weight)</td>
        <td class="px-4 py-3">Standard 10-yard allows 1&#8211;2 tons; ask about heavy-debris options</td>
      </tr>
      <tr class="border-b border-gray-200 bg-white hover:bg-gray-50">
        <td class="px-4 py-3">Roofing patch (small section only)</td>
        <td class="px-4 py-3 font-semibold text-orange">Right fit (confirm weight)</td>
        <td class="px-4 py-3">A full roof tear-off generates 3&#8211;5 tons; 10-yard runs out fast</td>
      </tr>
      <tr class="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
        <td class="px-4 py-3">Landlord turnover (light cleanout, one unit)</td>
        <td class="px-4 py-3 font-semibold text-orange">Right fit</td>
        <td class="px-4 py-3">Step to 20-yard for a full-floor estate or multi-unit clearance</td>
      </tr>
      <tr class="border-b border-gray-200 bg-white hover:bg-gray-50">
        <td class="px-4 py-3">Full kitchen remodel</td>
        <td class="px-4 py-3">Undersized</td>
        <td class="px-4 py-3">15-yard minimum; stone countertops push to a 20-yard</td>
      </tr>
      <tr class="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
        <td class="px-4 py-3">Full roof tear-off</td>
        <td class="px-4 py-3">Undersized (weight)</td>
        <td class="px-4 py-3">A standard residential roof generates 3&#8211;5 tons of shingles</td>
      </tr>
      <tr class="border-b border-gray-200 bg-white hover:bg-gray-50">
        <td class="px-4 py-3">Whole-home cleanout</td>
        <td class="px-4 py-3">Undersized</td>
        <td class="px-4 py-3">20-yard minimum; add a 30 if the basement is included</td>
      </tr>
      <tr class="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
        <td class="px-4 py-3">Full concrete driveway or foundation section</td>
        <td class="px-4 py-3">Undersized (weight)</td>
        <td class="px-4 py-3">Volume of concrete exceeds any standard weight limit quickly</td>
      </tr>
    </tbody>
  </table>
</div>

<p>One use case worth singling out: small concrete work. A partial driveway section, a concrete pad, a front sidewalk, an old retaining wall in sections &#8212; these are 10-yard jobs when the volume is modest. You will not fill the container to capacity, but a standard 1&#8211;2 ton weight allowance often covers the load. The math changes when the job is a full driveway, a slab, or a foundation. Those push past any standard 10-yard weight limit before you are halfway through demolition.</p>

<p>For a full comparison of all five container sizes against common project types, see the <a href="/resources/how-to-choose-the-right-dumpster-size" class="text-orange hover:underline">dumpster size guide</a>.</p>

<h2 id="weight-limits">Weight Limits and the Heavy-Debris Math</h2>

<p>Most standard 10-yard containers include a weight allowance of <strong>1&#8211;2 tons</strong> in the base rental rate. That number &#8212; not the cubic-yard capacity &#8212; is what governs what you can load when the job involves concrete, brick, tile, or asphalt.</p>

<p>Here is the math that surprises people. Concrete weighs roughly 4,000 pounds per cubic yard &#8212; 2 tons. One cubic yard of concrete, loaded into a 10-yard container, can reach the standard weight limit entirely on its own. That looks like a very modest amount in the container: a pile about 3 feet on each side. At the landfill scale, it registers as 2 tons. The bin looks nearly empty. The invoice does not.</p>

<p>Nine out of ten overweight charges on 10-yard rentals come from tile and concrete. Not from furniture, not from general cleanout debris &#8212; from the bathroom floor, the front walk, the partial patio that was "just a few slabs." Dense material hits weight limits at a fraction of container volume. It is technically an efficient use of space and financially a terrible outcome.</p>

<p>Materials that routinely push past the 1&#8211;2 ton limit before the container looks full:</p>

<ul>
  <li>Concrete and masonry rubble</li>
  <li>Roofing shingles &#8212; a standard residential roof generates 3&#8211;5 tons</li>
  <li>Ceramic and porcelain tile, especially large-format floor tile</li>
  <li>Dirt, gravel, and sod</li>
  <li>Brick and block from a demolition or landscaping project</li>
  <li>Asphalt from a driveway or parking area patch</li>
</ul>

<p>If the project is primarily heavy material, ask the rental company about <strong>heavy-debris container options</strong>. Some operators have 10-yard containers rated for 3&#8211;5 tons at a per-ton pricing model. They cost more upfront but avoid landfill overage charges when you have a few tons of concrete to move.</p>

<p>The <a href="https://www.epa.gov/smm/construction-and-demolition-materials" target="_blank" rel="noopener noreferrer">EPA&#8217;s construction and demolition materials data</a> identifies concrete as the single largest component of C&amp;D waste by weight at licensed facilities. That figure is why rental companies set weight limits independently of container size, and why the weight limit is the number to get in writing before you book.</p>

<p>Roofers doing a small section repair: confirm the weight limit before loading the first bundle of shingles. A patch job on a small roof section often fits a 10-yard by weight. A full tear-off on even a modest residential roof does not. For the full breakdown on roofing weight and container sizing, see the <a href="/resources/roofing-dumpster-rental" class="text-orange hover:underline">roofing dumpster rental guide</a>.</p>

<h2 id="cost">What a 10-Yard Dumpster Rental Costs</h2>

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

<p>A 10-yard dumpster rental costs <strong>$220&#8211;$580</strong> for a standard 7-day rental. The national average runs around $350 per week. Colorado and mountain states typically run 10&#8211;20% above national averages due to longer haul distances to licensed landfills.</p>

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
        <td class="px-4 py-3">$220&#8211;$580</td>
        <td class="px-4 py-3">Avg $350; mountain markets run 10&#8211;20% higher</td>
      </tr>
      <tr class="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
        <td class="px-4 py-3 font-medium">Rental extension</td>
        <td class="px-4 py-3">$5&#8211;$10/day</td>
        <td class="px-4 py-3">Ask upfront if the project may run past 10 days</td>
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
        <td class="px-4 py-3">Driver picks up full container, drops empty one</td>
      </tr>
      <tr class="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
        <td class="px-4 py-3 font-medium">Prohibited material fee</td>
        <td class="px-4 py-3">$25&#8211;$100+</td>
        <td class="px-4 py-3">Tires, paint, appliances, hazmat</td>
      </tr>
    </tbody>
  </table>
</div>

<p>I reckon most of those line items are self-explanatory. The overweight charge is the one that catches people. You load the container, call for pickup, and three days later an additional charge arrives. Not because the company invented a fee &#8212; because the scale at the landfill weighed what you put in it. The way to avoid it: ask for the weight limit in tons before you load the first piece of tile, and write that number down.</p>

<p>For a detailed breakdown of every fee category and what you can negotiate before booking, see the <a href="/resources/what-does-a-dumpster-rental-cost" class="text-orange hover:underline">dumpster rental cost guide</a>.</p>

<h2 id="placement">Driveway Placement and Tight Access</h2>

<p>A 10-yard container is roughly 10&#8211;12 feet long. A 20-yard is 22 feet. That difference in length is the reason the 10-yard works on properties where nothing bigger fits.</p>

<p>The delivery truck still needs a clear run &#8212; plan for about <strong>45&#8211;50 feet of straight-line access</strong>. The truck backs in, the container slides off the rear rollers onto the driveway, and the truck pulls forward. Short urban driveways, side yards accessible through a narrow gate, mountain property access roads, and older residential streets with cramped lots &#8212; these are the situations where the 10-yard gets booked specifically for its size, not despite it.</p>

<p>Before the driver arrives:</p>

<ul>
  <li>Clear overhead obstacles along the delivery path &#8212; utility lines and low-hanging tree branches are the two most common surprises the driver finds when they get there instead of beforehand</li>
  <li>Check the driveway surface &#8212; a fully loaded 10-yard weighs less than a 20-yard, but soft asphalt can still dent under the container&#8217;s contact points; ask about plywood boards underneath if the surface is a concern</li>
  <li>Review HOA rules &#8212; some associations require pre-approval before a container is dropped, regardless of size</li>
  <li>Confirm street permit requirements &#8212; containers on private driveways rarely require a permit; containers on public property almost always do</li>
</ul>

<p>Permit requirements are city- and county-specific. For the full rundown on when a permit is required and how to get one before your delivery date, see the <a href="/resources/do-you-need-a-permit-for-a-dumpster-rental" class="text-orange hover:underline">dumpster permit guide</a>.</p>

<h2 id="rental-period">Rental Period and Extensions</h2>

<p>Standard 10-yard rentals run <strong>7&#8211;10 days</strong>. The jobs that need a 10-yard &#8212; a bathroom remodel, a garage cleanout, a small concrete pad removal &#8212; tend to finish inside that window. This is not a container that sits idle for five days while framing work continues on another floor.</p>

<p>Extensions cost $5&#8211;$10 per day. If the project might run longer than 10 days, mention it when you book. Some operators offer a better flat rate for a longer window upfront than if you call mid-rental to extend. The company would rather know early. The driver would rather not make an unscheduled trip.</p>

<p>A <strong>second pull</strong> &#8212; where the driver picks up a full container and drops an empty one &#8212; runs $150&#8211;$250 on top of the original rental. If the container fills mid-project, a second pull is usually cheaper than having booked a 20-yard at the start. The exception is if the project scope clearly called for more capacity from the beginning, in which case sizing correctly on the first booking saves both money and a scheduling call.</p>

<p>Same-day delivery is available from most local operators if you call before noon. For how to find operators who can move that fast and what a rush fee typically runs, see the <a href="/resources/same-day-dumpster-rental" class="text-orange hover:underline">same-day dumpster rental guide</a>.</p>

<h2 id="sizing-up">When to Step Up to a 20-Yard</h2>

<p><strong>Step up to a 20-yard</strong> when the project generates more than three pickup truck loads of debris, spans more than one room, or involves material that will push the 10-yard&#8217;s weight limit before the volume is close to full.</p>

<p>Specific cases where the 10-yard is the wrong call:</p>

<ul>
  <li>A full roof tear-off &#8212; a standard residential roof generates 3&#8211;5 tons of shingles, which exceeds a standard 10-yard weight limit before the container is half full</li>
  <li>A kitchen remodel with cabinets, countertops, flooring, and appliances &#8212; that load runs 15 yards or more</li>
  <li>A whole-home or estate cleanout &#8212; 20-yard minimum, 30-yard if the basement is part of the job</li>
  <li>A full concrete driveway, slab, or foundation section removal &#8212; one cubic yard of concrete is 2 tons; you will hit the weight limit within the first few loads</li>
  <li>Multi-phase contractor work where the container will sit onsite for days of active demolition</li>
</ul>

<p>The cost gap between a 10-yard and a 20-yard is typically <strong>$80&#8211;$120 per week</strong>. A second haul after an undersized container runs $150&#8211;$250. Rule of thumb: if you are genuinely uncertain which size is right, take the 20-yard. The extra cost is almost always less than the second pull.</p>

<p>For the full breakdown on what a 20-yard handles and when to go bigger still, see the <a href="/resources/20-yard-dumpster-rental" class="text-orange hover:underline">20-yard dumpster rental guide</a>. For the full range of sizes matched against project types, the <a href="/resources/how-to-choose-the-right-dumpster-size" class="text-orange hover:underline">dumpster size guide</a> has the comparison.</p>

<h2 id="questions">Five Questions to Ask Before Booking</h2>

<p>The five questions that keep the quote and the final invoice in the same neighbourhood:</p>

<p><strong>1. What is the weight limit in tons?</strong> Not "is there a standard weight limit" &#8212; get the specific number in tons, in writing, in the quote. This is the question most people skip and the one that generates the most surprise charges.</p>

<p><strong>2. What is the overage charge per ton?</strong> Rates run $40&#8211;$200 per ton above the limit depending on the market and the provider. Knowing this number changes how you load the container. A $200-per-ton overage rate on two tons of concrete adds $400 to a $350 rental.</p>

<p><strong>3. Do you have a heavy-debris or concrete-specific container?</strong> Some markets have 10-yard containers rated for 3&#8211;5 tons at a per-ton pricing model. Ask about this before booking if the load is primarily concrete, brick, or tile. It is not a guaranteed option in every market, but it is worth asking.</p>

<p><strong>4. What are the truck clearance requirements for delivery?</strong> Confirm both the delivery clearance and the pickup clearance. Some driveways have room to drop a container but not to retrieve it without repositioning. The driver finds this out when they get there. You want to find it out beforehand.</p>

<p><strong>5. What is the daily extension rate?</strong> Ask this before you book, not when the driver calls to confirm pickup. Some operators charge by the day; others charge in blocks. Knowing the number upfront avoids a phone call from the driveway when the project runs three days past the rental window.</p>

<p>If you ask those five questions before you book, the invoice should match the quote. If you skip them, reckon on the landfill scale asking them for you &#8212; with an extra charge attached to each answer.</p>
`

export default function TenYardDumpsterRentalPage() {
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
              10 Yard Dumpster Rental
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
              <p className="text-gray-500 text-sm">{formattedDate} &middot; 10 min read</p>
            </div>
          </div>
        </header>

        {/* Cover image */}
        <div className="mb-10 rounded-xl overflow-hidden">
          <Image
            src={COVER_SRC}
            alt="Small roll-off dumpster container in a residential driveway during a remodel project"
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
