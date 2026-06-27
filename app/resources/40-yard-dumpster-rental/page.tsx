import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

const TITLE = '40 Yard Dumpster Rental: When the Biggest Bin Makes Sense'
const CANONICAL = 'https://rolloffdumpsterfinder.com/resources/40-yard-dumpster-rental'
const COVER_SRC =
  'https://images.pexels.com/photos/5511065/pexels-photo-5511065.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
const DATE = '2026-06-27'
const AUTHOR = 'Jake Harlow'
const META_DESC =
  'A 40-yard dumpster rental is right for new construction and large demolitions. Here is when it fits, what it costs, and when the 30-yard is the smarter call.'

export const metadata: Metadata = {
  title: TITLE,
  description: META_DESC,
  keywords: [
    '40 yard dumpster rental',
    '40 yard dumpster',
    '40 yard roll off dumpster rental',
    '40 yard roll off dumpster',
    '40 yard dumpster rental cost',
    '40 yard dumpster dimensions',
    '40 yard dumpster weight limit',
    'how much does a 40 yard dumpster cost',
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
        alt: 'Busy commercial construction site with cranes and building structure under a clear sky',
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
  { id: 'what-it-looks-like', title: 'What a 40-Yard Container Actually Looks Like' },
  { id: 'what-fits', title: 'What the 40-Yard Is Built For — and What It Is Not' },
  { id: 'weight-limits', title: 'Why the Biggest Container Can Still Hit Weight Limits First' },
  { id: 'cost', title: 'What a 40-Yard Dumpster Rental Costs' },
  { id: 'placement', title: 'Placement, Site Access, and Overhead Clearance' },
  { id: 'rental-period', title: 'Rental Period and Multi-Pull Scheduling' },
  { id: 'sizing-down', title: 'When a 30-Yard Is the Right Call' },
  { id: 'questions', title: 'Five Questions to Ask Before Booking' },
  { id: 'faq', title: 'Straight Answers' },
]

const faq = [
  {
    question: 'How much does a 40-yard dumpster rental cost?',
    answer:
      'A 40-yard dumpster rental typically runs $600–$900 or more per week for a standard 7-day rental. Exact pricing depends on your market, the weight limit included in the base rate, and your distance from the nearest licensed landfill. Mountain states and rural markets often run higher. Your final bill reflects base rental, any weight overages, and the cost of additional pulls if needed.',
  },
  {
    question: 'What are the dimensions of a 40-yard roll-off container?',
    answer:
      'A standard 40-yard roll-off container measures approximately 22 feet long, 8 feet wide, and 8 feet tall. Exact dimensions vary by rental company and container model — some 40-yard containers are longer and slightly shorter rather than taller. The 8-foot wall height is the key difference from a 30-yard and has real implications for loading and overhead clearance. Confirm measurements with your provider before scheduling delivery.',
  },
  {
    question: 'What is the weight limit on a 40-yard dumpster?',
    answer:
      'Most 40-yard containers include a weight allowance of 3–5 tons in the base rental rate — the same range as a 30-yard. The volume goes up; the weight limit does not go up proportionally. That means a 40-yard loaded with concrete or masonry will hit its weight limit with the container still looking mostly empty. The 40-yard is designed for high-volume bulky material, not dense debris.',
  },
  {
    question: 'What projects actually need a 40-yard dumpster?',
    answer:
      'New home construction, large commercial building projects, full-structure gut demolitions, industrial warehouse cleanouts, and large multi-unit property cleanouts are where the 40-yard earns its place. Most residential renovations — even large ones — stay in the 30-yard range. Estate cleanouts and home cleanouts are almost always a 20 or 30-yard job.',
  },
  {
    question: 'Can I put concrete in a 40-yard dumpster?',
    answer:
      'Concrete is typically accepted in a standard roll-off container. The problem is weight. Concrete weighs roughly 4,000 pounds per cubic yard — 2 tons. A 40-yard with a 4-ton weight limit hits that limit with just 2 cubic yards of pure concrete. The container is nearly empty. Most contractors running significant concrete removal use smaller heavy-debris containers pulled multiple times rather than loading a 40-yard with dense material.',
  },
  {
    question: 'How much clearance does a 40-yard dumpster need?',
    answer:
      'The delivery truck needs approximately 60 feet of straight-line clear access — the same as a 20 or 30-yard. The critical difference at the 40-yard size is overhead clearance. At 8 feet tall, the container catches utility lines, tree branches, and garage fascia that a shorter container would clear. Walk the delivery path looking up before confirming the placement spot with your provider.',
  },
  {
    question: 'How long can I keep a 40-yard dumpster?',
    answer:
      'Standard rental periods run 7–10 days. Extensions typically cost $10–$20 per day. Large construction projects usually plan multiple pulls from the start rather than holding a single container for weeks — a pull schedule set before the project begins usually gets better per-haul pricing than booking each pull separately. Ask about multi-pull pricing when you place the first order.',
  },
  {
    question: 'When should I use a 30-yard instead of a 40-yard?',
    answer:
      'Use the 30-yard for most residential renovations, estate cleanouts, large home cleanouts, and standard commercial tenant improvements. The 30-yard handles these jobs at $100–$200 less per week. The 40-yard is right when a 30-yard has consistently run short on the same type of project, or when the job is new construction rather than renovation. If you are unsure, book the 30 and confirm the second-pull rate before loading.',
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
    { '@type': 'ListItem', position: 3, name: '40 Yard Dumpster Rental', item: CANONICAL },
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
<p>A 40-yard dumpster rental is the biggest standard container in residential and commercial markets. It is also, historically, the one most often rented by people who needed a 30. Nobody books a 40-yard thinking they over-ordered. Every invoice tells a different story.</p>

<p>The 40-yard is the correct call for new home construction, large commercial demolitions, industrial warehouse cleanouts, and full-structure gut renovations. Outside those categories, a 30-yard covers the work at $100&#8211;$200 less per week. That gap matters on projects that run several weeks.</p>

<div class="not-prose my-8 rounded-lg border border-orange-200 bg-orange-50 p-6">
  <p class="text-sm font-semibold uppercase tracking-wide text-orange-700 mb-2">Quick answer</p>
  <p class="text-charcoal">A 40-yard dumpster rental runs roughly <strong>$600&#8211;$900+ per week</strong> for a standard 7-day rental. The container measures approximately 22 feet long, 8 feet wide, and 8 feet tall &#8212; holding about 27 pickup truck loads of loose debris. Right for new construction and large commercial projects. Usually oversized for everything else.</p>
</div>

<h2 id="what-it-looks-like">What a 40-Yard Container Actually Looks Like</h2>

<p>A standard 40-yard roll-off container measures approximately <strong>22 feet long, 8 feet wide, and 8 feet tall</strong>. Exact dimensions vary by provider and container model &#8212; some configurations run longer and slightly lower rather than taller. Confirm measurements before booking if overhead clearance or driveway depth are tight.</p>

<p>What 40 cubic yards translates to: about 27 standard pickup truck loads of loose debris. That number holds for framing lumber, drywall, mixed renovation material, and general household goods. It stops being accurate the moment the load shifts to concrete, tile, or dense masonry &#8212; those hit the weight limit before filling the container.</p>

<p>The 8-foot wall height is where the 40-yard differs from the 30. Loading from the ground at 8 feet requires a ramp or platform for most materials &#8212; you cannot comfortably throw debris over an 8-foot sidewall by hand. The open rear gate is the standard loading point, and a pair of plywood sheets as a ramp makes the process practical. The truck needs the same 60-foot straight-line clearance as any standard roll-off. The overhead clearance requirement increases significantly.</p>

<figure class="not-prose my-8">
  <img
    src="https://images.pexels.com/photos/5511065/pexels-photo-5511065.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=2"
    alt="Busy commercial construction site with cranes and building structure under a clear sky"
    width="1260"
    height="750"
    loading="lazy"
    class="w-full rounded-lg object-cover"
  />
</figure>

<h2 id="what-fits">What the 40-Yard Is Built For &#8212; and What It Is Not</h2>

<p>The 40-yard handles volume. It is the right container when the job generates more debris than a 30-yard can hold per pull, and when the debris is bulky rather than heavy. That combination describes new construction and large commercial demolitions. It does not describe most residential renovations.</p>

<div class="not-prose my-6 overflow-x-auto">
  <table class="w-full text-sm border-collapse">
    <thead>
      <tr class="bg-charcoal text-white">
        <th class="px-4 py-3 text-left font-semibold">Project</th>
        <th class="px-4 py-3 text-left font-semibold">40-Yard Verdict</th>
        <th class="px-4 py-3 text-left font-semibold">What to Watch</th>
      </tr>
    </thead>
    <tbody>
      <tr class="border-b border-gray-200 bg-white hover:bg-gray-50">
        <td class="px-4 py-3">New home construction (full build)</td>
        <td class="px-4 py-3 font-semibold text-orange">Right fit</td>
        <td class="px-4 py-3">Plan multiple pulls; use separate heavy-debris containers for concrete phases</td>
      </tr>
      <tr class="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
        <td class="px-4 py-3">Commercial construction project</td>
        <td class="px-4 py-3 font-semibold text-orange">Right fit</td>
        <td class="px-4 py-3">Standard for large builds; coordinate pull schedule before work begins</td>
      </tr>
      <tr class="border-b border-gray-200 bg-white hover:bg-gray-50">
        <td class="px-4 py-3">Industrial warehouse cleanout</td>
        <td class="px-4 py-3 font-semibold text-orange">Right fit</td>
        <td class="px-4 py-3">High-volume mixed debris; confirm weight limit before loading heavy equipment</td>
      </tr>
      <tr class="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
        <td class="px-4 py-3">Full-structure gut demolition</td>
        <td class="px-4 py-3 font-semibold text-orange">Right fit</td>
        <td class="px-4 py-3">Separate masonry phases from framing debris to stay under weight limits</td>
      </tr>
      <tr class="border-b border-gray-200 bg-white hover:bg-gray-50">
        <td class="px-4 py-3">Large multi-unit property cleanout</td>
        <td class="px-4 py-3 font-semibold text-orange">Right fit</td>
        <td class="px-4 py-3">Multi-unit volume warrants the size; single-unit turnovers do not</td>
      </tr>
      <tr class="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
        <td class="px-4 py-3">Large whole-home renovation (multiple rooms)</td>
        <td class="px-4 py-3">Usually oversized</td>
        <td class="px-4 py-3">A 30-yard with a pull or two handles most large residential renovations</td>
      </tr>
      <tr class="border-b border-gray-200 bg-white hover:bg-gray-50">
        <td class="px-4 py-3">Estate cleanout or home cleanout</td>
        <td class="px-4 py-3">Oversized</td>
        <td class="px-4 py-3">20&#8211;30-yard is right; a 40-yard wastes capacity and budget</td>
      </tr>
      <tr class="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
        <td class="px-4 py-3">Garage, basement, or attic cleanout</td>
        <td class="px-4 py-3">Way oversized</td>
        <td class="px-4 py-3">10&#8211;20-yard handles these; renting a 40-yard here is the most common oversize mistake</td>
      </tr>
      <tr class="border-b border-gray-200 bg-white hover:bg-gray-50">
        <td class="px-4 py-3">Roofing tear-off</td>
        <td class="px-4 py-3">Wrong tool</td>
        <td class="px-4 py-3">Shingles hit weight limits before filling any container; a 20-yard is standard for most roofs</td>
      </tr>
      <tr class="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
        <td class="px-4 py-3">Concrete or masonry removal</td>
        <td class="px-4 py-3">Wrong tool</td>
        <td class="px-4 py-3">Dense material hits weight limits at a fraction of the container volume regardless of size</td>
      </tr>
    </tbody>
  </table>
</div>

<p>The full matching of container size to project type is in the <a href="/resources/how-to-choose-the-right-dumpster-size" class="text-orange hover:underline">dumpster size guide</a>. For the commercial-specific questions &#8212; site access, scheduling, and what changes when a container stays onsite for weeks &#8212; the <a href="/resources/commercial-dumpster-rental" class="text-orange hover:underline">commercial dumpster rental guide</a> covers those details.</p>

<h2 id="weight-limits">Why the Biggest Container Can Still Hit Weight Limits First</h2>

<p>The 40-yard is built for volume. The weight limit on most 40-yard containers is <strong>3&#8211;5 tons</strong> &#8212; the same range as the 30-yard. The container gets bigger; the weight limit does not grow proportionally. That gap matters when the debris is dense.</p>

<p>Concrete weighs roughly 4,000 pounds per cubic yard &#8212; 2 tons. A 40-yard with a 4-ton weight allowance hits that limit with just 2 cubic yards of concrete on board. The container is nearly empty. The landfill scale does not adjust for how empty it looks.</p>

<p>Materials that hit weight limits before filling any container:</p>

<ul>
  <li>Concrete and masonry rubble, including foundations and retaining walls</li>
  <li>Roofing shingles &#8212; a medium residential roof generates 3&#8211;5 tons</li>
  <li>Ceramic and porcelain tile from floor or wall demolition</li>
  <li>Dirt, gravel, and sod from landscaping or site grading</li>
  <li>Brick and block from structural wall demolition</li>
  <li>Plaster from older lath-and-plaster construction</li>
</ul>

<p>Experienced contractors separate these phases. The concrete, masonry, and tile go into smaller containers run multiple times &#8212; better weight-to-dollar efficiency. The framing, drywall, insulation, and mixed debris fill the 40-yard. Running two container types on a project costs less than overweight fees on a 40-yard loaded with mixed heavy material. The <a href="https://www.epa.gov/smm/construction-and-demolition-materials" target="_blank" rel="noopener noreferrer">EPA&#8217;s C&amp;D materials data</a> consistently identifies concrete as the largest component by weight at licensed facilities &#8212; every rental company with tenure knows this, which is why weight limits exist at every container size.</p>

<p>For the specific logistics of managing construction debris across phases, the <a href="/resources/renting-a-construction-dumpster" class="text-orange hover:underline">construction dumpster rental guide</a> covers pull scheduling and what changes when a container stays onsite for weeks. For what is accepted and rejected across all standard containers, see <a href="/resources/what-can-you-put-in-a-roll-off-dumpster" class="text-orange hover:underline">what can you put in a roll-off dumpster</a>.</p>

<h2 id="cost">What a 40-Yard Dumpster Rental Costs</h2>

<figure class="not-prose my-8">
  <img
    src="https://images.pexels.com/photos/8811446/pexels-photo-8811446.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=1"
    alt="Large blue industrial dumpster placed in a commercial parking lot outside a building"
    width="1260"
    height="750"
    loading="lazy"
    class="w-full rounded-lg object-cover"
  />
</figure>

<p>A 40-yard dumpster rental costs <strong>$600&#8211;$900 or more</strong> for a standard 7-day rental. Markets with longer haul distances to licensed landfills &#8212; mountain states, rural areas, and some metro markets with limited disposal infrastructure &#8212; run at the high end of that range or above it.</p>

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
        <td class="px-4 py-3">$600&#8211;$900+</td>
        <td class="px-4 py-3">Varies significantly by market and included weight limit</td>
      </tr>
      <tr class="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
        <td class="px-4 py-3 font-medium">Rental extension</td>
        <td class="px-4 py-3">$10&#8211;$20/day</td>
        <td class="px-4 py-3">Ask upfront; longer extension windows sometimes available at flat rates</td>
      </tr>
      <tr class="border-b border-gray-200 bg-white hover:bg-gray-50">
        <td class="px-4 py-3 font-medium">Overweight charge</td>
        <td class="px-4 py-3">$40&#8211;$200/ton</td>
        <td class="px-4 py-3">Per ton above the included weight limit; get the rate in writing before booking</td>
      </tr>
      <tr class="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
        <td class="px-4 py-3 font-medium">Fuel surcharge</td>
        <td class="px-4 py-3">$25&#8211;$50</td>
        <td class="px-4 py-3">Usually included in the quote; confirm before signing</td>
      </tr>
      <tr class="border-b border-gray-200 bg-white hover:bg-gray-50">
        <td class="px-4 py-3 font-medium">Second pull (swap-out)</td>
        <td class="px-4 py-3">$300&#8211;$500</td>
        <td class="px-4 py-3">Driver picks up full container, returns an empty one</td>
      </tr>
      <tr class="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
        <td class="px-4 py-3 font-medium">Prohibited material fee</td>
        <td class="px-4 py-3">$25&#8211;$100+</td>
        <td class="px-4 py-3">Tires, paint, refrigerant appliances, hazardous materials</td>
      </tr>
    </tbody>
  </table>
</div>

<p>The cost gap between a 30-yard and a 40-yard is typically $100&#8211;$200 per week. On a four-week construction project, that gap becomes $400&#8211;$800 in extra cost to hold capacity the project may not use. If the job is borderline between the two sizes, book the 30-yard, confirm the second-pull rate, and call for the swap-out if needed. The math on that approach is almost always better.</p>

<p>For a full breakdown of every line item and what you can negotiate before booking, see the <a href="/resources/what-does-a-dumpster-rental-cost" class="text-orange hover:underline">dumpster rental cost guide</a>. For ways to reduce the total before the invoice arrives, the <a href="/resources/cheap-dumpster-rental" class="text-orange hover:underline">cheap dumpster rental guide</a> covers the six variables that move the price.</p>

<h2 id="placement">Placement, Site Access, and Overhead Clearance</h2>

<p>The 40-yard container is approximately 22 feet long and 8 feet tall. The delivery truck needs roughly <strong>60 feet of clear, straight-line access</strong> &#8212; the same as a 20 or 30-yard. What changes is overhead clearance. At 8 feet, the container catches utility lines, garage fascia, and tree branches that shorter containers clear without issue.</p>

<p>Before the driver arrives:</p>

<ul>
  <li>Walk the delivery path looking up, not just ahead &#8212; 8-foot overhead obstacles are not always obvious from street level</li>
  <li>Check for utility service drops, low tree branches, and any structure with a clearance under 10 feet along the path</li>
  <li>Confirm the surface can bear the weight &#8212; a loaded 40-yard with 4&#8211;5 tons of debris can push 8&#8211;10 tons total on the container and the truck; soft asphalt in summer heat dents under that</li>
  <li>Ask about plywood pads or outrigger boards under the contact points if the driveway or surface is suspect</li>
  <li>On commercial sites, designate a flat, unobstructed drop zone away from active work areas and confirm the location with the driver before delivery day</li>
</ul>

<p>For placements on public streets or in right-of-way areas, a permit is usually required &#8212; typically $25&#8211;$75, taking one to three business days. Many rental companies handle this during booking. See the <a href="/resources/do-you-need-a-permit-for-a-dumpster-rental" class="text-orange hover:underline">permit guide</a> for what to check by jurisdiction before the delivery date. Browse <a href="/locations">local providers</a> for operators familiar with placement requirements in your market.</p>

<h2 id="rental-period">Rental Period and Multi-Pull Scheduling</h2>

<p>Standard 40-yard rentals run <strong>7&#8211;10 days</strong>. Extensions cost $10&#8211;$20 per day. Large construction projects rarely use a single extended rental &#8212; they plan a pull schedule from the start, where the driver hauls a full container and drops an empty one on a set cadence. A swap-out on a 40-yard runs $300&#8211;$500 per pull on top of the original rental.</p>

<p>For multi-pull jobs, ask about contracted per-haul pricing before placing the first order. Some operators discount the per-pull rate when the haul count is confirmed upfront. Booking each pull separately &#8212; calling after each one fills &#8212; is the more expensive way to run a long project. The discount is not advertised; you have to ask.</p>

<p>On active construction sites, weekly pull schedules are common. The project manager tracks when the container is approaching capacity and schedules the next pull before work backs up. The alternative &#8212; a full container sitting onsite while crews wait for pickup &#8212; costs nothing in fees and everything in time.</p>

<h2 id="sizing-down">When a 30-Yard Is the Right Call</h2>

<p>The 40-yard earns its price when the volume genuinely exceeds what a 30-yard can hold per pull. Outside of new construction and large commercial demolitions, that threshold is rarely crossed.</p>

<p>Use the 30-yard when:</p>

<ul>
  <li>The project is a large whole-home renovation rather than new construction &#8212; even multi-room renovations usually stay in 30-yard territory</li>
  <li>The job is a commercial tenant improvement without full structural demolition</li>
  <li>The cleanout is a single property, even a large one &#8212; estate and home cleanouts are 20&#8211;30-yard work</li>
  <li>The project timeline is uncertain &#8212; a 30-yard with a second pull costs less than a 40-yard held for a project that wraps early</li>
  <li>The job is borderline &#8212; book the 30, confirm the second-pull rate, and call if it runs short</li>
</ul>

<p>For the full breakdown on what the 30-yard handles and when it is the right call, see the <a href="/resources/30-yard-dumpster-rental" class="text-orange hover:underline">30-yard dumpster rental guide</a>. For projects in the 20-yard range, the <a href="/resources/20-yard-dumpster-rental" class="text-orange hover:underline">20-yard guide</a> covers where that container fits cleanly.</p>

<h2 id="questions">Five Questions to Ask Before Booking</h2>

<p><strong>1. What is the weight limit in tons?</strong> Get the specific number, not a general answer. The 40-yard is a volume container &#8212; the weight limit is the binding constraint the moment concrete, masonry, or tile enters the mix. Know it before you load.</p>

<p><strong>2. What is the overage charge per ton?</strong> Rates range from $40 to $200 per extra ton depending on market and provider. At $200 per ton, a two-ton overage is $400. That figure changes the project budget in a way that knowing it beforehand does not.</p>

<p><strong>3. What are the overhead clearance requirements along the delivery path?</strong> The 8-foot height of the 40-yard catches obstacles the truck itself clears. Walk the path and look up before confirming placement with the driver. A container that cannot be set down safely is not a free repositioning &#8212; the driver returns the container and schedules a new delivery.</p>

<p><strong>4. What is the pull fee for a second haul?</strong> On a 40-yard, second pulls run $300&#8211;$500. Know this number before loading so you can decide whether to slow down, separate phases, or call for the swap-out.</p>

<p><strong>5. Do you offer contracted per-haul pricing for multi-pull projects?</strong> If the job requires more than two pulls, ask before the first one. Some operators offer better per-haul rates when the volume is confirmed upfront. Most do not advertise this. Ask directly.</p>

<p>The 40-yard makes sense when the project genuinely needs it. Book the 30-yard when you are not sure &#8212; a second pull at $300&#8211;$500 is almost always less expensive than a week of paying for 40-yard capacity on a 30-yard job. Give us a call before booking if the project could go either way.</p>
`

export default function FortyYardDumpsterRentalPage() {
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
              40 Yard Dumpster Rental
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
            alt="Busy commercial construction site with cranes and building structure under a clear sky"
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
