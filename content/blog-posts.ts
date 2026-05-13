export interface FaqItem {
  question: string
  answer: string
}

export interface TocItem {
  id: string
  title: string
}

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  category: string
  coverImage: string
  coverImageAlt: string
  date: string
  author: string
  metaDescription: string
  readingTime: number
  keywords: string[]
  body: string
  faq: FaqItem[]
  toc: TocItem[]
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'how-to-choose-the-right-dumpster-size',
    title: 'How to Choose the Right Dumpster Size: Roll Off Dumpster Sizes Explained',
    excerpt:
      'Renting a dumpster that is too small costs you a second haul fee. Renting one that is too large costs you money on unused capacity. Here is the breakdown by project type.',
    category: 'Sizing Guide',
    coverImage:
      'https://images.pexels.com/photos/34888195/pexels-photo-34888195.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    coverImageAlt: 'Multiple roll-off dumpster containers lined up at a rental yard',
    date: '2025-04-15',
    author: 'Adam Chandler',
    metaDescription:
      'Roll off dumpster sizes run from 10 to 40 yards. This guide matches the right container size to your project — garage cleanouts, roofing, kitchen remodels, and new construction — and explains when weight matters more than volume.',
    readingTime: 8,
    keywords: [
      'roll off dumpster sizes',
      'dumpster sizing',
      'what size dumpster do I need',
      '10 yard dumpster rental',
      '15 yard dumpster',
      '20 yard dumpster rental',
      '30 yard dumpster rental',
      '40 yard dumpster rental',
      'small dumpster rental',
      'large dumpster rental',
      'residential dumpster rental',
      'construction dumpster rental',
      'yard waste dumpster rental',
      'roll off sizes',
    ],
    body: `
<p>The right roll-off size for most homeowners is the <strong>20-yard container</strong>. It handles a full roof tear-off, a kitchen gut, or a whole-home cleanout, and it is the most commonly rented residential size. If your project is smaller, step to a 10 or 15. If it is bigger, step to a 30. The 40 is for commercial jobs and situations involving concrete that someone underestimated. (Concrete is always underestimated. We will get to that.)</p>

<p>Picking the wrong size is easier than it sounds. Too small and you pay for a second haul. Too large and you pay for space you did not need. This guide matches the right container to the right project — and explains when volume is not even the variable you should be tracking.</p>

<div class="not-prose my-8 rounded-lg border border-orange-200 bg-orange-50 p-6">
  <p class="text-sm font-semibold uppercase tracking-wide text-orange-700 mb-2">Quick match</p>
  <ul class="text-charcoal space-y-1 text-sm">
    <li><strong>10-yard:</strong> Garage cleanouts, single-room remodels, small yard projects</li>
    <li><strong>15-yard:</strong> Bathroom remodels, small deck removal, mid-size cleanouts</li>
    <li><strong>20-yard:</strong> Roofing, kitchen remodels, whole-home cleanouts — the default residential choice</li>
    <li><strong>30-yard:</strong> Large renovations, major demolitions, basement-to-attic cleanouts</li>
    <li><strong>40-yard:</strong> New construction and commercial projects</li>
  </ul>
</div>

<h2 id="size-breakdown">The Five Standard Roll Off Dumpster Sizes</h2>

<p>Roll-off containers come in five standard sizes. The number — 10, 15, 20, 30, or 40 — refers to cubic yards of capacity, not feet, not weight, not truck loads. One cubic yard is roughly the volume of a standard kitchen appliance box. Ten of those stacked is a 10-yard container, which works out to about three full pickup truck loads of loose debris.</p>

<p>The truck-load comparison holds for light, loose material — furniture, carpet, drywall scraps. It falls apart with dense materials. Worth keeping in mind before booking.</p>

<figure class="not-prose my-8">
  <img
    src="https://images.pexels.com/photos/2002142/pexels-photo-2002142.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    alt="Worker loading debris into a roll-off container on a residential job site"
    width="1260"
    height="750"
    loading="lazy"
    class="w-full rounded-lg object-cover"
  />
  <figcaption class="mt-2 text-sm text-gray-500 text-center">Every size handles the same basic job. The differences are in capacity, clearance requirements, and what happens when your debris is denser than expected.</figcaption>
</figure>

<div class="not-prose my-6 overflow-x-auto">
  <table class="w-full text-sm border-collapse">
    <thead>
      <tr class="bg-charcoal text-white">
        <th class="px-4 py-3 text-left font-semibold">Dumpster Size</th>
        <th class="px-4 py-3 text-left font-semibold">Common Dimensions</th>
        <th class="px-4 py-3 text-left font-semibold">Holds About</th>
        <th class="px-4 py-3 text-left font-semibold">Best For</th>
        <th class="px-4 py-3 text-left font-semibold">Watch Out For</th>
      </tr>
    </thead>
    <tbody>
      <tr class="border-b border-gray-200 bg-white hover:bg-gray-50">
        <td class="px-4 py-3 font-semibold text-orange">10-yard</td>
        <td class="px-4 py-3">10 ft × 7 ft × 3 ft</td>
        <td class="px-4 py-3">~3 pickup truck loads</td>
        <td class="px-4 py-3">Garage cleanouts, single-room remodels</td>
        <td class="px-4 py-3">Tile and concrete hit the weight limit before the bin is full</td>
      </tr>
      <tr class="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
        <td class="px-4 py-3 font-semibold text-orange">15-yard</td>
        <td class="px-4 py-3">14 ft × 7 ft × 3.5 ft</td>
        <td class="px-4 py-3">~4.5 pickup truck loads</td>
        <td class="px-4 py-3">Bathroom remodels, small deck removal</td>
        <td class="px-4 py-3">Confirm driveway length before booking</td>
      </tr>
      <tr class="border-b border-gray-200 bg-white hover:bg-gray-50">
        <td class="px-4 py-3 font-semibold text-orange">20-yard</td>
        <td class="px-4 py-3">22 ft × 7 ft × 4 ft</td>
        <td class="px-4 py-3">~6 pickup truck loads</td>
        <td class="px-4 py-3">Roofing, kitchen remodels, whole-home cleanouts</td>
        <td class="px-4 py-3">Shingles hit weight limits before filling the volume</td>
      </tr>
      <tr class="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
        <td class="px-4 py-3 font-semibold text-orange">30-yard</td>
        <td class="px-4 py-3">22 ft × 7 ft × 6 ft</td>
        <td class="px-4 py-3">~9 pickup truck loads</td>
        <td class="px-4 py-3">Large renovations, major demolitions</td>
        <td class="px-4 py-3">Needs 60+ ft of clearance for delivery and pickup</td>
      </tr>
      <tr class="bg-white hover:bg-gray-50">
        <td class="px-4 py-3 font-semibold text-orange">40-yard</td>
        <td class="px-4 py-3">22 ft × 7 ft × 8 ft</td>
        <td class="px-4 py-3">~12 pickup truck loads</td>
        <td class="px-4 py-3">New construction, commercial projects</td>
        <td class="px-4 py-3">Rarely the right call for residential; the cost reflects it</td>
      </tr>
    </tbody>
  </table>
</div>

<h2 id="by-project">Right Size by Project Type</h2>

<p>If you are working from a project description rather than a detailed materials list, use this as your starting point. Sizes below assume standard debris density. If heavy materials are involved — concrete, tile, roofing — read the weight section before booking.</p>

<figure class="not-prose my-8">
  <img
    src="https://images.pexels.com/photos/17849720/pexels-photo-17849720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    alt="Green roll-off dumpster placed outside a residential building for a renovation project"
    width="1260"
    height="750"
    loading="lazy"
    class="w-full rounded-lg object-cover"
  />
</figure>

<h3>Garage cleanout</h3>

<p>A 10-yard container handles most garage cleanouts. If the garage has been accumulating since the mid-nineties and now qualifies as its own ecosystem, go to a 15. A 20-yard is rarely the right call for a residential garage unless it is a double-wide workshop with equipment that did not survive the decade.</p>

<h3>Bathroom remodel</h3>

<p>A 10 or 15-yard. A standard bathroom gut — vanity, toilet, tub, tile, drywall — usually fits in a 10. If the tile goes wall-to-wall and floor-to-ceiling, bump to the 15. Old tile is denser than it looks. The weight limit on a 10 is typically 1–2 tons, and a full tile tear-out can push against that.</p>

<h3>Kitchen remodel</h3>

<p>A 15 or 20-yard. Cabinets, countertops, flooring, appliances, and drywall add up faster than most people estimate. Stone countertops push you toward the 20. If the kitchen includes a tile floor that was installed with real ambition, confirm the weight limit before loading.</p>

<h3>Roof tear-off</h3>

<p>20-yard, almost always. An average residential roof generates 3–5 tons of shingles. The standard weight limit on a 20-yard is 2–4 tons. On a larger roof you may need to keep the load light and schedule a swap-out partway through. Discuss this before booking. For roofing jobs, weight outranks volume.</p>

<h3>Deck removal</h3>

<p>A 20-yard for a standard wood deck. If the deck has concrete footings being pulled, account for their weight separately. Wood is light. Footings are not. A mixed load of framing lumber and concrete footings can hit a weight limit well before filling the container.</p>

<h3>Whole-home cleanout</h3>

<p>A 20-yard handles most whole-home cleanouts — furniture, carpet, general household goods. If the home is large or the basement is part of the project, go to a 30. Estate cleanouts with decades of accumulated goods typically need more than a standard 20 or more than one pull.</p>

<h3>Basement cleanout</h3>

<p>A 20 or 30-yard. Basements hold more than people expect. If there is concrete flooring being removed, confirm weight limits with the company before booking — that conversation is worth having early.</p>

<h3>Landscaping and yard waste</h3>

<p>A 10 or 20-yard depending on scope. Yard waste — sod, mulch, brush, small branches — is bulky and relatively light, so volume matters more here than weight. A full yard cleanup typically fits in a 20. Single-day trimming often fits in a 10.</p>

<p>Worth noting: some companies will not mix yard waste with construction debris in the same haul. Call ahead if the project combines both material types. For a full list of what is accepted and what is not, see <a href="/blog/what-can-and-cannot-go-in-a-dumpster">What Can and Cannot Go in a Roll-Off Dumpster</a>.</p>

<h3>New construction and major renovation</h3>

<p>A 30 or 40-yard. New construction generates significant volume across multiple material types throughout the project. Most contractors running a full build keep a 30 or 40 onsite. Residential renovation typically stays in the 30. Commercial construction usually runs the 40.</p>

<p>For the difference between a residential rental and a commercial job-site contract, see <a href="/blog/residential-vs-commercial-dumpster-rental">Residential vs. Commercial Dumpster Rentals: What Changes</a>.</p>

<h2 id="weight-vs-volume">When Volume Is Not the Problem</h2>

<figure class="not-prose my-8">
  <img
    src="https://images.pexels.com/photos/28041688/pexels-photo-28041688.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    alt="Pile of concrete rubble and demolition debris at an urban construction site"
    width="1260"
    height="750"
    loading="lazy"
    class="w-full rounded-lg object-cover"
  />
  <figcaption class="mt-2 text-sm text-gray-500 text-center">Dense debris reaches weight limits before it fills the container. The bin still looks half-empty. The scale at the landfill does not share that perspective.</figcaption>
</figure>

<p>This is the section that determines whether you get a clean invoice or a surprise charge three days after the project ends.</p>

<p>Every roll-off container has a weight limit. A standard 20-yard typically allows 2–4 tons of debris. Exceed that and you pay an overweight charge — usually $40–$200 per extra ton. Nearly every overweight charge involves the same handful of materials: concrete, roofing shingles, tile, dirt, and brick.</p>

<p>Here is why this catches people off guard. A cubic yard of drywall scraps weighs roughly 500 pounds. A cubic yard of concrete weighs roughly 4,000 pounds — eight times more, same volume. You can hit a 2-ton weight limit with half a cubic yard of concrete. The container still looks nearly empty. The scale at the landfill does not care how the container looks.</p>

<p>Rule of thumb: if more than a quarter of your debris is heavy material — concrete, tile, roofing, or dirt — size your container based on its weight limit rather than its cubic-yard capacity. Ask the company what the weight limit is for the size you are booking. That number matters more than the size designation when dense material is involved.</p>

<p>The <a href="https://www.epa.gov/smm/construction-and-demolition-materials" target="_blank" rel="noopener noreferrer">EPA data on construction and demolition materials</a> puts concrete and mixed rubble as the dominant share of C&amp;D waste by weight at licensed landfills — which is precisely why roll-off companies set weight limits by debris type, not container size alone.</p>

<p>For more on how overweight charges work and what they cost, see <a href="/blog/what-does-a-dumpster-rental-cost">What Does a Roll-Off Dumpster Rental Actually Cost</a>.</p>

<h2 id="placement">What to Know Before the Driver Arrives</h2>

<p>Size affects more than capacity. It also affects what can physically fit in your driveway or on your street.</p>

<p>A roll-off truck needs roughly 60 feet of straight clearance to set a container down. The truck backs in, the container slides off the back, and the truck pulls forward. A 30 or 40-yard container also sits taller than a 10 or 15, which means overhead clearance — power lines, tree branches, garage overhangs — matters too.</p>

<p>Before the driver arrives onsite, confirm:</p>

<ul>
  <li>Overhead clearance along the delivery path</li>
  <li>Surface condition — soft ground can shift under the container's weight; ask about plywood protection for driveways if needed</li>
  <li>HOA rules — some associations restrict driveway placement or require pre-approval</li>
  <li>Permit requirements — most cities only require a permit if the container sits on public property; driveway placement typically does not require one</li>
</ul>

<p>If you are unsure about access, give us a call before booking. It is a faster conversation than it sounds, and considerably faster than turning a delivery truck around in a cul-de-sac.</p>

<h2 id="skip-it">When to Skip the Dumpster</h2>

<p>A roll-off is the right tool when you have three or more pickup truck loads of debris and you are doing the work yourself over multiple days. It is not always the right tool.</p>

<p>If your project generates fewer than two pickup truck loads, a junk removal service will often cost the same or less — and they do the loading. For a single truckload of brush or yard waste, a run to the local transfer station might be faster and cheaper than a week-long rental.</p>

<p>Roll-off containers also cannot accept hazardous material — paint, motor oil, propane tanks, batteries — regardless of size. If that describes most of what you are clearing out, a dumpster is not the solution. The <a href="https://www.epa.gov/hw/household-hazardous-waste-hhw" target="_blank" rel="noopener noreferrer">EPA household hazardous waste guide</a> covers local disposal options by zip code.</p>

<p>For extension policies and what happens when the project runs longer than expected, see <a href="/blog/how-long-can-you-keep-a-rental-dumpster">How Long Can You Keep a Rental Dumpster on Your Property</a>.</p>

<p>Pick the right size and the project moves. Pick wrong, and you will spend part of the afternoon staring at a half-empty 40-yarder or making a second-haul call with the quiet acceptance of someone who knew they should have gone one size up when they had the chance. If you are not certain before booking, give us a call — five minutes now is always cheaper than a second haul later.</p>
`,
    faq: [
      {
        question: 'What size dumpster do I need for a garage cleanout?',
        answer:
          'A 10-yard container handles most garage cleanouts. If the garage is large or has been accumulating for many years, step up to a 15-yard. A 20-yard is rarely necessary for a residential garage cleanout.',
      },
      {
        question: 'What is the most common dumpster size for home projects?',
        answer:
          'The 20-yard is the most commonly rented residential size. It handles roofing jobs, kitchen remodels, and whole-home cleanouts. If you\'re unsure which size fits your project, starting with a 20-yard is right for most homeowners.',
      },
      {
        question: 'How do I know if I need a 20-yard or 30-yard dumpster?',
        answer:
          'If your project is a single phase — one roof, one kitchen remodel, one whole-home cleanout — the 20-yard usually fits. If the project involves a large renovation, major demolition, a full basement cleanout, or multiple rooms being cleared at once, go to the 30.',
      },
      {
        question: 'Can I put roofing shingles in a 10-yard dumpster?',
        answer:
          'Shingles can go in any standard roll-off container, but weight limits apply across all sizes. An average residential roof generates 3–5 tons of material. The weight limit on a 10-yard is typically 1–2 tons, which means it will be overweight before it is full. A 20-yard is the standard choice for roofing jobs.',
      },
      {
        question: 'What is the smallest dumpster I can rent?',
        answer:
          'The 10-yard is the smallest standard roll-off size. Some companies offer front-load dumpsters or dumpster bags for smaller projects, but roll-off service typically starts at 10 cubic yards.',
      },
      {
        question: 'Do I need a permit to have a roll-off dumpster delivered?',
        answer:
          'Only if the container is placed on public property — a street or sidewalk. Driveway placement typically does not require a permit. If you need a street placement, contact your city\'s permit office. Fees usually run $20–$150 depending on the municipality.',
      },
      {
        question: 'What if I fill the dumpster before the project is finished?',
        answer:
          'Call the rental company before the container overflows. Most companies can schedule a swap-out — they haul the full container and drop an empty one in its place. This is called a second pull and costs an additional haul fee. It\'s common on larger roofing and renovation jobs.',
      },
      {
        question: 'Can I mix different types of debris in one container?',
        answer:
          'Generally yes — mixed loads of household junk, construction debris, and furniture are standard. The exceptions are hazardous materials, which are prohibited regardless of what else is in the container, and yard waste, which some companies require to be hauled separately. Call ahead if your load is mixed.',
      },
    ],
    toc: [
      { id: 'size-breakdown', title: 'The Five Standard Roll Off Dumpster Sizes' },
      { id: 'by-project', title: 'Right Size by Project Type' },
      { id: 'weight-vs-volume', title: 'When Volume Is Not the Problem' },
      { id: 'placement', title: 'What to Know Before the Driver Arrives' },
      { id: 'skip-it', title: 'When to Skip the Dumpster' },
      { id: 'faq', title: 'Frequently Asked Questions' },
    ],
  },
  {
    slug: 'what-does-a-dumpster-rental-cost',
    title: 'What Does a Roll-Off Dumpster Rental Actually Cost?',
    excerpt:
      'Prices shift based on location, container size, haul distance, and what you put in it. This is what drives the number up or down, and what you can negotiate before booking.',
    category: 'Pricing',
    coverImage:
      'https://images.pexels.com/photos/17849720/pexels-photo-17849720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    coverImageAlt: 'Green roll-off dumpster outside an urban building',
    date: '2025-05-09',
    author: 'Adam Chandler',
    metaDescription:
      'Dumpster rental cost ranges from $220 to $800 per week depending on size, location, and debris type. Here is the full price breakdown by container size, project type, and rental period — plus the fees nobody warns you about.',
    readingTime: 11,
    keywords: [
      'dumpster rental cost',
      'dumpster rental prices',
      'average dumpster rental cost',
      '10 yard dumpster rental cost',
      '20 yard dumpster rental',
      'roll off dumpster rental prices',
    ],
    faq: [
      {
        question: 'How much does a dumpster rental cost?',
        answer:
          'The national average for a standard 7-day rental is $385–$450. A 10-yard container typically runs $350 per week. A 20-yard averages $450 per week. A 30-yard runs around $500 per week. Colorado and mountain states tend to run 10–20% above national averages.',
      },
      {
        question: 'What is the cheapest dumpster size?',
        answer:
          'The 10-yard container is the smallest and least expensive option, typically $220–$580 per week with an average around $350. It holds about 3 pickup truck loads of loose debris.',
      },
      {
        question: 'Is delivery and pickup included in the dumpster rental price?',
        answer:
          'In a flat-rate rental, yes — delivery, the rental period, pickup, and disposal up to the weight limit are all included. Always confirm what is in the quote before confirming the booking.',
      },
      {
        question: 'What happens if I exceed the weight limit?',
        answer:
          'You will be billed an overweight fee, typically $40–$200 per extra ton. This is the most common unexpected charge. If your project involves concrete, roofing materials, or soil, ask specifically about the weight limit before booking.',
      },
      {
        question: 'Do I need a permit to rent a dumpster?',
        answer:
          'Only if the container is placed on public property such as a street or sidewalk. Driveway placements typically do not require a permit. Permit fees run $20–$150 depending on your city.',
      },
      {
        question: 'How long can I keep a rental dumpster?',
        answer:
          'Standard rentals are 7–10 days. Extensions typically cost $5–$10 per day. Call the company before your rental period ends to avoid rescheduling fees, which are usually higher than the daily extension rate.',
      },
      {
        question: 'Can I put concrete in a dumpster?',
        answer:
          'Yes, but concrete is heavy and will hit weight limits quickly. Some companies offer concrete-specific containers at a different rate. Ask before booking if your project involves concrete demolition.',
      },
      {
        question: 'What cannot go in a roll-off dumpster?',
        answer:
          'Hazardous materials including paint, motor oil, propane tanks, batteries, and asbestos. At many companies, tires, mattresses, large appliances, and electronics are also restricted. Call ahead if you have any of these items.',
      },
      {
        question: 'Is a dumpster bag cheaper than renting a roll-off container?',
        answer:
          'For very small projects under one pickup truck load, sometimes. For anything larger, a roll-off rental is typically more cost-effective per cubic yard of debris removed.',
      },
    ],
    toc: [
      { id: 'cost-by-size', title: 'Dumpster Rental Cost by Size' },
      { id: 'factors', title: 'Five Things That Move the Price' },
      { id: 'whats-included', title: "What's Included in the Base Price" },
      { id: 'hidden-fees', title: 'The Fees Nobody Warns You About' },
      { id: 'by-project', title: 'Cost by Project Type' },
      { id: 'rental-periods', title: 'Daily, Weekly, and Monthly Rates' },
      { id: 'save-money', title: 'Three Ways to Pay Less' },
      { id: 'skip-it', title: 'When to Skip the Dumpster Entirely' },
      { id: 'faq', title: 'Frequently Asked Questions' },
    ],
    body: `
<p>A roll-off dumpster rental runs between <strong>$220 and $800 for a standard 7-day rental</strong>. That range is about as useful as telling someone a car costs between $5,000 and $200,000 — technically accurate, completely unhelpful.</p>

<p>What actually moves the number: the container size, where you live, how long you keep it, and what you throw in it. Get one of those wrong and the final invoice looks nothing like the quote. I know this because I spent a decade driving roll-off trucks in Colorado, and the calls that came in after delivery were almost always about the same three things: overweight charges, fees for prohibited materials, and rental periods that ran longer than expected.</p>

<p>This guide is what I wish every customer had read before booking. (I've also seen someone rent a 40-yard container for a garage cleanout, fill about a third of it, and spend the rest of the weekend wondering if they could live in it. They could not. The invoice was $891 and nobody split the difference.)</p>

<div class="not-prose my-8 rounded-lg border border-orange-200 bg-orange-50 p-6">
  <p class="text-sm font-semibold uppercase tracking-wide text-orange-700 mb-2">Quick answer</p>
  <p class="text-charcoal">Most homeowners pay <strong>$350–$500</strong> for a standard 7-day rental. A 10-yard container averages $350/week. A 20-yard averages $450/week. A 30-yard averages $500/week. Colorado and mountain states typically run 10–20% above national averages due to longer landfill haul distances.</p>
</div>

<h2 id="cost-by-size">Dumpster Rental Cost by Size</h2>

<figure class="not-prose my-8">
  <img
    src="https://images.pexels.com/photos/34888195/pexels-photo-34888195.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    alt="Industrial waste bins lined up beside a warehouse in winter"
    width="1260"
    height="750"
    loading="lazy"
    class="w-full rounded-lg object-cover"
  />
  <figcaption class="mt-2 text-sm text-gray-500 text-center">Roll-off containers come in five standard sizes. The size you pick is the biggest variable in your bill.</figcaption>
</figure>

<p>The size you pick is the biggest variable in your bill. Each step up adds $50–$100 per week, and most people only realise they needed a bigger container after they've hit the capacity limit.</p>

<p>Here is what each standard size costs for a 7-day rental, based on current national data:</p>

<div class="not-prose my-6 overflow-x-auto">
  <table class="w-full text-sm border-collapse">
    <thead>
      <tr class="bg-charcoal text-white">
        <th class="px-4 py-3 text-left font-semibold">Size</th>
        <th class="px-4 py-3 text-left font-semibold">Capacity</th>
        <th class="px-4 py-3 text-left font-semibold">Weekly Average</th>
        <th class="px-4 py-3 text-left font-semibold">Typical Range</th>
        <th class="px-4 py-3 text-left font-semibold">Best For</th>
      </tr>
    </thead>
    <tbody>
      <tr class="border-b border-gray-200 bg-white hover:bg-gray-50">
        <td class="px-4 py-3 font-medium">10-yard</td>
        <td class="px-4 py-3">~3 pickup loads</td>
        <td class="px-4 py-3 font-semibold text-orange">$350</td>
        <td class="px-4 py-3">$220–$580</td>
        <td class="px-4 py-3">Small cleanouts, single-room remodels</td>
      </tr>
      <tr class="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
        <td class="px-4 py-3 font-medium">15-yard</td>
        <td class="px-4 py-3">~4.5 pickup loads</td>
        <td class="px-4 py-3 font-semibold text-orange">$400</td>
        <td class="px-4 py-3">$265–$620</td>
        <td class="px-4 py-3">Bathroom remodels, deck removal</td>
      </tr>
      <tr class="border-b border-gray-200 bg-white hover:bg-gray-50">
        <td class="px-4 py-3 font-medium">20-yard</td>
        <td class="px-4 py-3">~6 pickup loads</td>
        <td class="px-4 py-3 font-semibold text-orange">$450</td>
        <td class="px-4 py-3">$280–$699</td>
        <td class="px-4 py-3">Whole-home cleanouts, roofing</td>
      </tr>
      <tr class="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
        <td class="px-4 py-3 font-medium">30-yard</td>
        <td class="px-4 py-3">~9 pickup loads</td>
        <td class="px-4 py-3 font-semibold text-orange">$500</td>
        <td class="px-4 py-3">$311–$718</td>
        <td class="px-4 py-3">Large renovations, new construction</td>
      </tr>
      <tr class="bg-white hover:bg-gray-50">
        <td class="px-4 py-3 font-medium">40-yard</td>
        <td class="px-4 py-3">~12 pickup loads</td>
        <td class="px-4 py-3 font-semibold text-orange">$891</td>
        <td class="px-4 py-3">$400–$900+</td>
        <td class="px-4 py-3">Major construction, commercial projects</td>
      </tr>
    </tbody>
  </table>
</div>

<p>The pickup-truck comparison works for loose debris. It breaks down when you add dense materials — concrete and tile weigh far more than they look, and you can hit a weight limit in a half-filled container. More on weight limits in the fees section below.</p>

<p>Not sure which size fits your specific project? See <a href="/blog/how-to-choose-the-right-dumpster-size">How to Choose the Right Dumpster Size</a> for a full breakdown by project type.</p>

<h2 id="factors">Five Things That Move the Price</h2>

<figure class="not-prose my-8">
  <img
    src="https://images.pexels.com/photos/2002142/pexels-photo-2002142.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    alt="Worker collecting materials from a waste container on an urban street"
    width="1260"
    height="750"
    loading="lazy"
    class="w-full rounded-lg object-cover"
  />
</figure>

<p>The national average gives you an anchor, not a quote. Here are the five variables that determine where you actually land within the range:</p>

<h3>1. Where you are</h3>

<p>Location affects price in two ways: regional market rates and haul distance to the nearest licensed landfill. In dense urban markets, competition tends to moderate prices. In rural areas, you're paying for extra miles the truck runs after pickup. Colorado customers typically pay 10–20% above the national average, and that number climbs the further you get from Denver or Colorado Springs.</p>

<h3>2. What you're throwing away</h3>

<p>Standard debris — household junk, furniture, drywall, wood — is priced into the base rate. Dense materials change the calculation. Concrete, dirt, brick, and roofing shingles can hit a container's weight limit at half capacity. Most companies allow 2–4 tons for a 20-yard container. Go over and you pay $40–$200 per extra ton. If your project involves any heavy demolition, ask specifically about weight limits before booking — not after.</p>

<h3>3. How long you keep it</h3>

<p>Standard rentals run 7–10 days. Extensions cost $5–$10 per day. If you know your project will run longer, ask about extended pricing upfront — some companies offer a better rate if you book a longer window from the start than if you call mid-rental to extend.</p>

<h3>4. The time of year</h3>

<p>Spring and early summer push demand higher and availability lower. If you can schedule a fall or winter project, you'll often find better rates and more flexibility on delivery windows. This is not something rental companies advertise, for obvious reasons.</p>

<h3>5. Which company you book through</h3>

<p>I have compared quotes for identical containers at identical addresses and found $50–$150 in spread between companies. Same size, same material, same duration. Reputation and on-time delivery matter too — but the price spread is real, and it takes about 10 minutes to compare three quotes. <a href="https://homeguide.com/costs/dumpster-rental-prices" target="_blank" rel="noopener noreferrer">HomeGuide's 2026 pricing data</a> covers regional averages if you want to benchmark your local market before you start calling.</p>

<h2 id="whats-included">What's Included in the Base Price</h2>

<p>A flat-rate quote from a reputable company should cover:</p>

<ul>
  <li>Container delivery to your address</li>
  <li>7–10 days of on-site rental time</li>
  <li>Pickup and haul-away at the end of the rental period</li>
  <li>Disposal at a licensed facility</li>
  <li>Weight up to the stated per-container limit</li>
</ul>

<p>What it usually does not cover:</p>

<ul>
  <li>Hazardous material disposal (paint, chemicals, motor oil, propane tanks)</li>
  <li>Mattresses and large appliances at most companies</li>
  <li>Overweight tonnage above the included limit</li>
  <li>Permits for containers placed on public property</li>
  <li>E-waste (electronics) handling at many facilities</li>
</ul>

<p>The flat-rate model is better for customers than variable pricing. With flat-rate, you know your number before the container arrives. With variable pricing, the final bill depends on how much time the driver spent and how heavy the load turned out to be. If a company cannot give you a firm price, ask why.</p>

<p>For a full list of what's restricted, see <a href="/blog/what-can-and-cannot-go-in-a-dumpster">What Can and Cannot Go in a Roll-Off Dumpster</a>.</p>

<h2 id="hidden-fees">The Fees Nobody Warns You About</h2>

<figure class="not-prose my-8">
  <img
    src="https://images.pexels.com/photos/28041688/pexels-photo-28041688.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    alt="Pile of demolition debris and rubble in an urban area"
    width="1260"
    height="750"
    loading="lazy"
    class="w-full rounded-lg object-cover"
  />
  <figcaption class="mt-2 text-sm text-gray-500 text-center">Dense debris like concrete and tile hits weight limits fast. The overweight charge arrives three days after you thought the project was done.</figcaption>
</figure>

<p>These are the charges that show up on invoices when customers assumed the quote was the total:</p>

<h3>Overweight charges</h3>

<p>The most common surprise bill. A 20-yard container typically allows 2–4 tons. A standard roof tear-off on a medium-sized home generates 3–5 tons of shingles. If your container's limit is 2 tons and your debris weighs 4, you owe for 2 extra tons at $40–$200 per ton — that's $80–$400 on top of the base rate. The overweight fee is the one that arrives three days after you have patted yourself on the back for finishing the project. It has the energy of a parking ticket that finds you.</p>

<h3>Hazardous material removal fees</h3>

<p>Paint cans, motor oil, propane tanks, and certain chemicals cannot go into a standard roll-off. Some companies charge a flat removal fee if they find restricted items; others refuse the pickup entirely and charge a rescheduling fee. The <a href="https://www.epa.gov/hw/household-hazardous-waste-hhw" target="_blank" rel="noopener noreferrer">EPA's household hazardous waste guide</a> covers what qualifies as restricted material at most licensed disposal facilities.</p>

<h3>Permit fees</h3>

<p>If the container goes on a street, sidewalk, or within a certain distance of the road, most cities require a permit. Typical fee: $20–$150, sometimes higher in major cities. The rental company may pull the permit for you — sometimes for a fee — or you may need to contact your city's permit office directly. Driveway placements typically don't require a permit. If you're in an HOA or a dense urban area, confirm before the container arrives.</p>

<h3>Extension fees</h3>

<p>If your project runs long, call before your rental period ends. Extension fees are usually $5–$10 per day for advance notice. If the truck shows up for pickup and the container is not ready, rescheduling fees are typically higher than the daily extension rate. That is a solvable problem. Call ahead.</p>

<h3>Cleaning fees</h3>

<p>Some companies charge if you leave concrete or debris caked on the outside of the container. Not all of them — worth asking, not worth worrying about unless you're running heavy concrete work directly through the container walls.</p>

<h2 id="by-project">Cost by Project Type</h2>

<p>If you're working from a project description rather than a detailed materials list, here are typical costs by job type. Estimates assume debris weight is within the container's standard limit.</p>

<div class="not-prose my-6 overflow-x-auto">
  <table class="w-full text-sm border-collapse">
    <thead>
      <tr class="bg-charcoal text-white">
        <th class="px-4 py-3 text-left font-semibold">Project</th>
        <th class="px-4 py-3 text-left font-semibold">Recommended Size</th>
        <th class="px-4 py-3 text-left font-semibold">Estimated Cost</th>
      </tr>
    </thead>
    <tbody>
      <tr class="border-b border-gray-200 bg-white hover:bg-gray-50">
        <td class="px-4 py-3">Garage cleanout</td>
        <td class="px-4 py-3">10-yard</td>
        <td class="px-4 py-3 font-semibold">$300–$400</td>
      </tr>
      <tr class="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
        <td class="px-4 py-3">Bathroom remodel</td>
        <td class="px-4 py-3">10–15-yard</td>
        <td class="px-4 py-3 font-semibold">$350–$450</td>
      </tr>
      <tr class="border-b border-gray-200 bg-white hover:bg-gray-50">
        <td class="px-4 py-3">Kitchen remodel</td>
        <td class="px-4 py-3">15–20-yard</td>
        <td class="px-4 py-3 font-semibold">$400–$550</td>
      </tr>
      <tr class="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
        <td class="px-4 py-3">Deck removal (wood)</td>
        <td class="px-4 py-3">20-yard</td>
        <td class="px-4 py-3 font-semibold">$430–$570</td>
      </tr>
      <tr class="border-b border-gray-200 bg-white hover:bg-gray-50">
        <td class="px-4 py-3">Whole-home cleanout</td>
        <td class="px-4 py-3">20-yard</td>
        <td class="px-4 py-3 font-semibold">$450–$600</td>
      </tr>
      <tr class="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
        <td class="px-4 py-3">Roof tear-off (avg home)</td>
        <td class="px-4 py-3">20-yard</td>
        <td class="px-4 py-3 font-semibold">$450–$600</td>
      </tr>
      <tr class="border-b border-gray-200 bg-white hover:bg-gray-50">
        <td class="px-4 py-3">Basement cleanout</td>
        <td class="px-4 py-3">20–30-yard</td>
        <td class="px-4 py-3 font-semibold">$450–$700</td>
      </tr>
      <tr class="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
        <td class="px-4 py-3">Landscaping / yard waste</td>
        <td class="px-4 py-3">10–20-yard</td>
        <td class="px-4 py-3 font-semibold">$350–$500</td>
      </tr>
      <tr class="border-b border-gray-200 bg-white hover:bg-gray-50">
        <td class="px-4 py-3">New construction cleanup</td>
        <td class="px-4 py-3">30–40-yard</td>
        <td class="px-4 py-3 font-semibold">$550–$900</td>
      </tr>
      <tr class="bg-gray-50 hover:bg-gray-100">
        <td class="px-4 py-3">Commercial renovation</td>
        <td class="px-4 py-3">40-yard</td>
        <td class="px-4 py-3 font-semibold">$700–$1,200</td>
      </tr>
    </tbody>
  </table>
</div>

<p>If you are on the border between two sizes, go up one — not two. One size step costs $50–$100 more per week. One overweight charge can cost that much per extra ton. The math favours going up one size when you're not certain.</p>

<p>For a detailed comparison of how residential and commercial rentals differ, see <a href="/blog/residential-vs-commercial-dumpster-rental">Residential vs. Commercial Dumpster Rentals: What Changes</a>.</p>

<h2 id="rental-periods">Daily, Weekly, and Monthly Rates</h2>

<p>Most quotes are weekly. If you need a container for a single loading day, some companies offer a day rate — typically $40–$100 — though not all companies provide it and availability varies by market.</p>

<ul>
  <li><strong>Daily (where available):</strong> $40–$100</li>
  <li><strong>Weekly (7–10 days):</strong> $220–$800 depending on size</li>
  <li><strong>Monthly:</strong> $500–$1,200 depending on size and service frequency</li>
</ul>

<p>For projects that stretch beyond two weeks, a monthly rate often saves money over two separate weekly rentals. Ask the company to quote both before you decide — the math usually favours monthly by week three.</p>

<h2 id="save-money">Three Ways to Pay Less</h2>

<h3>Book in off-season</h3>

<p>Late fall and winter see lower demand across the Front Range and most markets. You won't get dramatic discounts, but you'll have more availability and flexibility on delivery windows. If your project isn't time-sensitive, a November booking typically goes more smoothly than a May one — and occasionally cheaper.</p>

<h3>Compare at least three quotes</h3>

<p>The spread between companies for identical containers at the same address ranges from $50 to $150. That spread is real and repeatable. Rolloff Dumpster Finder exists specifically for this step: describe your project once and get prices from vetted local companies. The site doesn't upsell toward the company with the highest margin.</p>

<h3>Right-size the container</h3>

<p>Renting bigger "just in case" costs $50–$100 per size step per week. Use the project-type table above to estimate accurately. If you are genuinely on the border, go up one size. Not two. One step is insurance. Two steps is renting a swimming pool to store a hose.</p>

<h2 id="skip-it">When to Skip the Dumpster Entirely</h2>

<p>I'll tell you when not to book a container.</p>

<p>If your project generates fewer than two pickup truck loads of material, a junk removal service will often cost the same or less — and they do the loading. A dumpster makes sense when the project runs multiple days, you're doing the demo yourself, or you have enough volume to justify a container sitting in your driveway for a week.</p>

<p>Also: if you're in an HOA with strict driveway rules, on a street too narrow for a delivery truck, or in a building where container placement isn't an option, confirm access requirements before booking. Rescheduling a delivery is free. Turning a truck around at your address typically is not.</p>

<p>This is the section of the guide that hurts the conversion rate most. It stays because it is true.</p>

<p>If you have estimated carefully, compared three quotes, and still end up with an overweight charge — give us a call before you book next time. Sizing it right from the start costs nothing and saves the invoice surprise.</p>
`,
  },
  {
    slug: '5-things-to-ask-before-booking',
    title: '5 Things to Ask Before Booking a Dumpster Rental',
    excerpt:
      'Not all rental agreements are the same. Knowing what to ask about weight limits, prohibited materials, and extension fees saves you money and avoids surprises on pickup day.',
    category: 'Tips',
    coverImage: 'https://picsum.photos/seed/dumpster-tips/800/500',
    coverImageAlt: 'Person reviewing a dumpster rental agreement',
    date: '2025-05-01',
    author: 'Adam Chandler',
    metaDescription:
      'Not all dumpster rental agreements are the same. These five questions before booking will save you money and avoid the most common surprise fees.',
    readingTime: 6,
    keywords: ['what to ask dumpster rental', 'dumpster rental tips', 'dumpster rental checklist'],
    body: '',
    faq: [],
    toc: [],
  },
  {
    slug: 'what-can-and-cannot-go-in-a-dumpster',
    title: 'What Can and Cannot Go in a Roll-Off Dumpster',
    excerpt:
      'Tires, paint, and mattresses are prohibited at most companies. Here is what is typically accepted, what gets rejected at the landfill, and what triggers an extra disposal fee.',
    category: 'Rules',
    coverImage: 'https://picsum.photos/seed/dumpster-rules/800/500',
    coverImageAlt: 'Roll-off dumpster filled with construction debris',
    date: '2025-05-08',
    author: 'Adam Chandler',
    metaDescription:
      'Tires, paint, and mattresses are prohibited in most roll-off dumpsters. Here is the full list of accepted and restricted materials, and what triggers an extra disposal fee.',
    readingTime: 7,
    keywords: [
      'what can go in a dumpster',
      'dumpster prohibited items',
      'what cannot go in a roll off dumpster',
    ],
    body: '',
    faq: [],
    toc: [],
  },
  {
    slug: 'residential-vs-commercial-dumpster-rental',
    title: 'Residential vs. Commercial Dumpster Rentals: What Changes',
    excerpt:
      'The container looks the same. The agreement, weight allowances, and pickup windows are often different. Here is what to know before you order the wrong type.',
    category: 'Education',
    coverImage: 'https://picsum.photos/seed/dumpster-commercial/800/500',
    coverImageAlt: 'Commercial roll-off dumpster on a job site',
    date: '2025-05-15',
    author: 'Adam Chandler',
    metaDescription:
      'Residential and commercial dumpster rentals look the same but differ on weight limits, agreement terms, and pickup windows. Here is what to know before you book.',
    readingTime: 6,
    keywords: [
      'residential dumpster rental',
      'commercial dumpster rental',
      'residential vs commercial dumpster',
    ],
    body: '',
    faq: [],
    toc: [],
  },
  {
    slug: 'how-long-can-you-keep-a-rental-dumpster',
    title: 'How Long Can You Keep a Rental Dumpster on Your Property?',
    excerpt:
      'Most rentals include a 7 or 14-day window. Here is what happens when the project runs long, when it makes sense to extend, and when a second pull is the smarter call.',
    category: 'FAQs',
    coverImage: 'https://picsum.photos/seed/dumpster-time/800/500',
    coverImageAlt: 'Roll-off dumpster in a residential driveway',
    date: '2025-05-22',
    author: 'Adam Chandler',
    metaDescription:
      'Standard dumpster rentals include 7–10 days. Here is what extension fees cost, when to extend, and when renting a second container is the smarter option.',
    readingTime: 5,
    keywords: [
      'how long can you keep a dumpster',
      'dumpster rental period',
      'dumpster extension fee',
    ],
    body: '',
    faq: [],
    toc: [],
  },
  {
    slug: 'what-can-you-put-in-a-roll-off-dumpster',
    title: 'What Can You Put in a Roll-Off Dumpster? Accepted & Prohibited Items',
    excerpt:
      'Tires, paint, and propane tanks are prohibited at every company. Concrete and roofing shingles are accepted — until they hit the weight limit. Here is the full breakdown.',
    category: 'Rules',
    coverImage:
      'https://images.pexels.com/photos/33929758/pexels-photo-33929758.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    coverImageAlt: 'Blue industrial roll-off dumpster placed beside a modern building facade',
    date: '2026-05-13',
    author: 'Adam Chandler',
    metaDescription:
      'Most household junk, construction debris, roofing shingles, and yard waste can go in a roll-off dumpster. Paint, motor oil, propane tanks, batteries, tires, and hazardous waste cannot. Here is the full accepted and prohibited items list.',
    readingTime: 9,
    keywords: [
      'what can you put in a roll off dumpster',
      'concrete dumpster rental',
      'prohibited items in dumpster',
      'hazardous materials dumpster',
      'what not to put in a dumpster',
      'dumpster accepted items',
    ],
    toc: [
      { id: 'what-goes-in', title: 'What Usually Goes In' },
      { id: 'heavy-debris', title: 'Concrete, Brick, and Dense Materials' },
      { id: 'prohibited-items', title: 'What Cannot Go In, Ever' },
      { id: 'depends-on-provider', title: 'The "It Depends" Category' },
      { id: 'questions-to-ask', title: 'Four Questions to Ask Before Booking' },
      { id: 'avoid-fees', title: 'The One Fee Nobody Expects' },
      { id: 'faq', title: 'Frequently Asked Questions' },
    ],
    faq: [
      {
        question: 'Can you put drywall in a roll-off dumpster?',
        answer:
          'Yes. Drywall is one of the most common renovation materials loaded into roll-off containers. It is lightweight and accepted at most disposal facilities. Some companies charge a small surcharge for large volumes of drywall due to recycling requirements, but it is not a prohibited material.',
      },
      {
        question: 'Can you put concrete in a dumpster?',
        answer:
          'Yes, but concrete is dense and will hit weight limits quickly. A standard 20-yard container has a weight limit of 2–4 tons, and concrete weighs roughly 4,000 pounds per cubic yard. For concrete-heavy projects, ask about a dedicated heavy-debris container with appropriate weight allowances before booking.',
      },
      {
        question: 'Can you put paint in a roll-off dumpster?',
        answer:
          'Liquid or wet paint cannot go in a roll-off dumpster. Paint is classified as hazardous waste. Dried, hardened paint in sealed containers is often accepted, but confirm with your provider. For liquid paint disposal, the EPA\'s household hazardous waste locator can find drop-off locations near you.',
      },
      {
        question: 'Can you put a mattress in a dumpster?',
        answer:
          'It depends on the company. Some providers accept mattresses in standard loads, some charge a flat fee per mattress ($25–$75 each), and some decline them entirely. Confirm before booking if the project includes mattresses.',
      },
      {
        question: 'Can you put tires in a roll-off dumpster?',
        answer:
          'No. Tires are prohibited at most licensed disposal facilities and cannot go in a standard roll-off container. Tires require separate disposal through a tire retailer, an auto shop, or a local tire recycling program.',
      },
      {
        question: 'Can you put dirt in a dumpster?',
        answer:
          'Yes, dirt and soil are accepted in most containers, but they are heavy. A cubic yard of soil can weigh 2,000–3,000 pounds, which eats through weight allowances quickly. For projects involving significant soil removal, ask about a heavy-debris container or confirm the weight limit before loading.',
      },
      {
        question: 'Can you put a refrigerator in a dumpster?',
        answer:
          'Only if the refrigerant has been removed first. Refrigerators, freezers, window AC units, and other appliances containing freon require certified refrigerant removal before disposal. Most appliance retailers and HVAC companies offer this service when replacing the unit.',
      },
      {
        question: 'What happens if you put prohibited items in a dumpster?',
        answer:
          'If prohibited materials are discovered at the disposal facility, you will typically be charged a hazardous material removal fee — sometimes several hundred dollars. Some companies refuse to pick up the container until restricted items are removed. Asking before you load is always faster than explaining afterward.',
      },
    ],
    body: `
<p>Most household junk, construction debris, roofing shingles, furniture, flooring, drywall, and yard waste can go in a standard roll-off dumpster. What cannot: paint, motor oil, propane tanks, batteries, tires, appliances containing refrigerants, asbestos, and anything classified as hazardous waste.</p>

<p>You can throw in the kitchen sink, by the way. Porcelain is fine. The paint cans stored under it are not. (I spent a decade driving roll-off trucks in Colorado. The call from the disposal facility when restricted materials show up is short, efficient, and expensive.)</p>

<div class="not-prose my-8 rounded-lg border border-orange-200 bg-orange-50 p-6">
  <p class="text-sm font-semibold uppercase tracking-wide text-orange-700 mb-2">Quick answer</p>
  <ul class="text-charcoal space-y-2 text-sm">
    <li><strong>Always accepted:</strong> household junk, furniture, drywall, lumber, flooring, roofing shingles, metal scraps, cardboard, glass, general renovation debris</li>
    <li><strong>Never accepted:</strong> paint, motor oil, propane tanks, batteries, tires, appliances with freon, asbestos, hazardous waste of any kind</li>
    <li><strong>Accepted but watch the weight:</strong> concrete, brick, dirt, tile, roofing shingles — dense materials hit weight limits before they fill the container</li>
    <li><strong>Depends on your provider:</strong> mattresses, electronics, yard waste mixed with construction debris, large appliances</li>
  </ul>
</div>

<h2 id="what-goes-in">What Usually Goes In</h2>

<figure class="not-prose my-8">
  <img
    src="https://images.pexels.com/photos/28041688/pexels-photo-28041688.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    alt="Pile of construction and demolition debris including rubble and concrete at an urban job site"
    width="1260"
    height="750"
    loading="lazy"
    class="w-full rounded-lg object-cover"
  />
  <figcaption class="mt-2 text-sm text-gray-500 text-center">Most renovation and construction debris loads are straightforward. The dense stuff — and whatever is in the back of the garage — is where things get complicated.</figcaption>
</figure>

<p>Standard roll-off containers accept the majority of non-hazardous residential and commercial debris. The categories below cover most renovation, cleanout, and construction loads.</p>

<h3>Household junk and cleanout debris</h3>

<p>Furniture, clothing, boxes, shelving, small appliances, lamps, carpet, and general accumulated junk from garages, basements, and attics. This covers most estate cleanouts, move-out debris, and household purges. Rule of thumb: if it is not a chemical, a tire, a battery, or something with a compressor, it almost certainly goes in the bin.</p>

<p>Mattresses are the exception. Some providers accept them, some charge a flat fee per mattress ($25–$75 each), and some decline them entirely. If mattresses are part of the load, call ahead before booking.</p>

<h3>Construction and remodeling debris</h3>

<p>Drywall, framing lumber, plywood, insulation, carpet and pad, cabinets, countertops, demo materials, doors, windows, light fixtures, and general renovation debris. All standard.</p>

<p>Stone countertops and ceramic tile go in the container without issue — but they are heavy. A full kitchen worth of granite or a bathroom with wall-to-wall tile can push weight limits before the container looks anywhere near full. That distinction matters. More on it below.</p>

<h3>Roofing shingles and materials</h3>

<p>Asphalt shingles, roofing felt, metal flashing, fascia boards, and wood decking are all accepted. Roofing debris is where the weight conversation becomes critical. A standard residential roof generates 3–5 tons of shingles. The weight limit on a 20-yard container is typically 2–4 tons. Do the math before you load, not after the truck pulls away.</p>

<p>If your roof has multiple layers of old shingles, or is a larger-than-average structure, tell the provider before booking. They can adjust the weight allowance or recommend a roofing-specific container. For the full roofing breakdown, see <a href="/blog/how-to-choose-the-right-dumpster-size">How to Choose the Right Dumpster Size</a>.</p>

<h3>Yard waste and landscaping debris</h3>

<p>Tree branches, brush, sod, mulch, and general yard waste are accepted by most providers. Two things worth knowing.</p>

<p>First: some companies require yard waste to be hauled separately from construction debris. Mixed loads may be charged at the higher rate, or declined at the facility. Call ahead if the project combines both material types in the same container.</p>

<p>Second: soil and sod are heavier than they look. A few cubic yards of wet sod can eat through a weight allowance faster than most homeowners expect. Dry brush is light. Wet sod is not.</p>

<h2 id="heavy-debris">Concrete, Brick, and Dense Materials</h2>

<figure class="not-prose my-8">
  <img
    src="https://images.pexels.com/photos/14562040/pexels-photo-14562040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    alt="Close-up of a pile of broken concrete chunks and clay bricks from residential demolition work"
    width="1260"
    height="750"
    loading="lazy"
    class="w-full rounded-lg object-cover"
  />
  <figcaption class="mt-2 text-sm text-gray-500 text-center">Concrete and brick are accepted materials. They are also dense enough to blow a weight limit while the container still looks half-empty.</figcaption>
</figure>

<p>Concrete, brick, asphalt, dirt, tile, and stone are accepted materials in most roll-off dumpsters. They are also the leading cause of overweight charges. Both things are true.</p>

<p>A cubic yard of mixed drywall and lumber scraps weighs roughly 400–600 pounds. A cubic yard of concrete weighs roughly 4,000 pounds — seven to eight times more, same volume. You can hit a 2-ton weight limit with about half a cubic yard of concrete. The container still looks nearly empty. The scale at the landfill does not care how it looks.</p>

<p>Most companies offer dedicated heavy-debris containers with higher weight allowances for concrete-heavy projects — patio demolition, driveway removal, retaining wall teardowns. These are priced differently than standard containers. If more than a quarter of your load is concrete, brick, or soil, ask about heavy-debris pricing before booking a standard roll-off.</p>

<p>The <a href="https://www.epa.gov/smm/construction-and-demolition-materials" target="_blank" rel="noopener noreferrer">EPA's construction and demolition materials data</a> puts concrete as the single largest component of C&amp;D waste by weight at licensed facilities — which is exactly why roll-off companies price heavy debris separately. For a full breakdown of how weight limits and overweight fees work, see <a href="/blog/what-does-a-dumpster-rental-cost">What Does a Roll-Off Dumpster Rental Actually Cost</a>.</p>

<h2 id="prohibited-items">What Cannot Go In, Ever</h2>

<figure class="not-prose my-8">
  <img
    src="https://images.pexels.com/photos/8770248/pexels-photo-8770248.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    alt="Worker in a protective hazmat suit monitoring hazardous waste containers at a waste disposal facility"
    width="1260"
    height="750"
    loading="lazy"
    class="w-full rounded-lg object-cover"
  />
  <figcaption class="mt-2 text-sm text-gray-500 text-center">Hazardous materials require separate disposal at licensed facilities. A roll-off container is not one of them.</figcaption>
</figure>

<p>These items are not accepted in any standard roll-off dumpster, regardless of company or location. They require separate disposal at a licensed hazardous waste facility.</p>

<ul>
  <li><strong>Paint and stains</strong> — liquid or wet paint only. Dried, hardened paint in sealed containers is often accepted; liquid paint is not. Check with your provider on partially used cans.</li>
  <li><strong>Motor oil, automotive fluids, and solvents</strong> — any petroleum-based liquid</li>
  <li><strong>Propane tanks</strong> — including empty ones. Residual gas makes them a disposal hazard.</li>
  <li><strong>Batteries</strong> — car batteries, lithium batteries, and rechargeable batteries of all types</li>
  <li><strong>Tires</strong> — prohibited at most licensed landfills; require separate tire recycling</li>
  <li><strong>Appliances containing refrigerants</strong> — refrigerators, window AC units, and dehumidifiers require certified refrigerant removal before disposal</li>
  <li><strong>Asbestos-containing materials</strong> — requires licensed abatement and specialized disposal. Present in older floor tiles, ceiling tiles, insulation, and certain siding materials. See the <a href="https://www.epa.gov/asbestos" target="_blank" rel="noopener noreferrer">EPA's asbestos guidelines</a> before disturbing any suspected material.</li>
  <li><strong>Pesticides, herbicides, and pool chemicals</strong></li>
  <li><strong>Fluorescent bulbs and tubes</strong> — contain mercury; typically require separate recycling</li>
  <li><strong>Medical waste and sharps</strong></li>
</ul>

<p>The <a href="https://www.epa.gov/hw/household-hazardous-waste-hhw" target="_blank" rel="noopener noreferrer">EPA's household hazardous waste locator</a> covers local disposal options by zip code for materials that cannot go in the bin.</p>

<h2 id="depends-on-provider">The "It Depends" Category</h2>

<p>These items are not universally prohibited, but they are not universally accepted either. They depend on your specific provider, the disposal facility they use, and sometimes local regulations.</p>

<h3>Mattresses</h3>

<p>Some providers accept mattresses in standard loads. Some charge a flat mattress fee. Some decline them entirely. If the cleanout includes mattresses, ask at booking — not on pickup day while the driver is watching the container get loaded.</p>

<h3>Electronics</h3>

<p>Computers, televisions, and monitors are restricted at many disposal facilities due to lead and mercury content. Some companies accept them with a surcharge; some decline them. Confirm before loading.</p>

<h3>Large appliances without refrigerants</h3>

<p>Washers, dryers, dishwashers, and ranges — appliances that do not contain refrigerants — are accepted by most providers. Refrigerators, freezers, and window AC units require the refrigerant removed by a certified technician first. Most appliance retailers offer this when replacing the unit.</p>

<h3>Mixed yard waste and construction debris</h3>

<p>Some disposal facilities require yard waste to be separated from construction debris for composting or green-waste processing. Mixed loads may be accepted at the higher disposal rate, or declined at the gate. If the project combines both material types, confirm beforehand rather than finding out at the landfill.</p>

<h2 id="questions-to-ask">Four Questions to Ask Before Booking</h2>

<p>These are worth raising before the container lands in the driveway — not while standing next to a full bin wondering what to do with the paint cans.</p>

<ol>
  <li><strong>What is the weight limit, and what is the overweight rate?</strong> Get both numbers. For any project involving concrete, tile, roofing shingles, or soil, the weight limit matters more than the container size.</li>
  <li><strong>What materials do you not accept?</strong> Go through your list. Mention mattresses, electronics, any appliances, and any chemicals or liquids you are clearing out. Better to know now.</li>
  <li><strong>Does the price change based on material type?</strong> Some companies charge a premium for roofing shingles, tires, mattresses, or mixed loads. A quote that does not account for your specific materials may not match the final invoice.</li>
  <li><strong>Is yard waste hauled separately or mixed?</strong> If the project includes landscape debris and construction waste, ask before loading everything in together.</li>
</ol>

<p>For more on what to ask before booking, browse the <a href="/resources">Rolloff Dumpster Finder resources section</a>.</p>

<h2 id="avoid-fees">The One Fee Nobody Expects</h2>

<p>The overweight charge. Not because it is obscure — most rental agreements mention it — but because the connection between material density and weight limits is easy to miss until the invoice arrives.</p>

<p>I reckon nine out of ten overweight charges come from four materials: roofing shingles, bathroom tile, concrete, and soil. All of them are accepted. All of them are dense. All of them hit weight limits at a fraction of the container's volume. Dense debris hits weight limits at half capacity, which is technically an efficient use of volume and financially a terrible outcome.</p>

<p>The fix is asking the weight limit before booking, estimating your heaviest material's weight before loading, and for concrete-heavy projects, asking about a dedicated heavy-debris container rather than booking a standard roll-off. That conversation takes five minutes. The overweight charge typically takes three days to arrive and longer to understand.</p>

<p>Need roll-off rental options in your area? Browse the <a href="/locations">location guides</a> for local pricing and availability by city.</p>
`,
  },
]
