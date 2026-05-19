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
  {
    slug: 'roofing-dumpster-rental',
    title: 'Roofing Dumpster Rental: What the Shingles Actually Weigh',
    excerpt:
      'Most residential roof tear-offs produce 3–5 tons of shingles. A standard 20-yard container allows 2–4 tons. Here is how to book the right bin and avoid the overweight charge.',
    category: 'Roofing',
    coverImage:
      'https://images.pexels.com/photos/33404248/pexels-photo-33404248.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    coverImageAlt: 'Professional roofer installing asphalt shingles on a new residential roof',
    date: '2026-05-14',
    author: 'Adam Chandler',
    metaDescription:
      'Roofing dumpster rental runs $350–$600. Most homes need a 20-yard — but shingle weight beats volume. Here is how to size right and skip the overweight fee.',
    readingTime: 8,
    keywords: [
      'roofing dumpster rental',
      '20 yard roll off dumpster rental',
      'same day dumpster rental',
      'roll off dumpster rental',
      'dumpster for roofing shingles',
      'shingle weight dumpster',
    ],
    toc: [
      { id: 'weight-limit', title: 'Shingles Max Out Weight Limits Before They Fill the Bin' },
      { id: 'right-size', title: 'Picking the Right Container for a Roofing Job' },
      { id: 'cost', title: 'What a Roofing Dumpster Rental Costs' },
      { id: 'accepted-materials', title: 'What Goes In and What Stays Off the Roof' },
      { id: 'placement', title: 'How Delivery and Placement Work on a Roofing Job' },
      { id: 'skip-it', title: 'When a Dumpster Is Not the Right Call' },
      { id: 'faq', title: 'Straight Answers' },
    ],
    faq: [
      {
        question: 'What size dumpster do I need for a roof tear-off?',
        answer:
          'A 20-yard container handles most single-family home tear-offs. The key number is the weight limit — a standard 20-yard allows 2–4 tons, and a medium residential roof generates 3–5 tons of shingles. Confirm the specific weight limit before booking, not after the container is already full.',
      },
      {
        question: 'How much does a roofing dumpster rental cost?',
        answer:
          'A 7-day roofing dumpster rental typically runs $350–$600 depending on container size, location, and weight allowance. Some companies add a shingle surcharge of $20–$80 on top of the base rate. Ask at booking whether shingles are priced separately or rolled into the flat rate.',
      },
      {
        question: 'Can roofing shingles go in a regular dumpster?',
        answer:
          'Yes — asphalt shingles, roofing felt, metal flashing, and plywood decking are all accepted in standard roll-off containers. The only roofing materials that cannot go in are asbestos-containing products, which require licensed abatement and separate disposal. Homes built before 1978 may have asbestos in certain older roofing systems — if in doubt, test before you tear.',
      },
      {
        question: 'How much do roofing shingles weigh per square?',
        answer:
          'One square of 3-tab asphalt shingles covers 100 sq ft and weighs 230–250 lbs. Architectural shingles run 350–480 lbs per square. A 20-square roof with architectural shingles produces roughly 7,000–9,600 lbs of debris. If the roof has two layers, double that number.',
      },
      {
        question: 'What happens if shingles exceed the dumpster weight limit?',
        answer:
          'You will be billed an overweight fee, typically $40–$200 per extra ton. This is the most common unexpected charge on roofing jobs. Asking the weight limit before booking and counting your roof\'s squares before loading prevents the surprise three days after the job is done.',
      },
      {
        question: 'Can I put multiple layers of old shingles in one dumpster?',
        answer:
          'Yes, but the weight adds up fast. A two-layer tear-off on a medium home can produce 6–8 tons. Most standard containers allow 2–4 tons. For multi-layer jobs, confirm a higher weight allowance or plan for a container swap partway through the project.',
      },
      {
        question: 'How long should I rent a dumpster for a roofing project?',
        answer:
          'Most roofing tear-offs complete in one to three days, so a standard 7-day rental gives enough buffer. Extensions cost $5–$10 per day. Call the company before your rental period ends — rescheduling fees run higher than the daily extension rate.',
      },
      {
        question: 'Do I need a permit for a roofing dumpster on my driveway?',
        answer:
          'No — driveway placement does not require a permit in most cities. If the container needs to go on a public street, most cities require a permit. Fees typically run $20–$150. Confirm with your local permit office if driveway access is not an option.',
      },
    ],
    body: `
<p>A <strong>roofing dumpster rental</strong> runs $350–$600 for a standard 7-day bin. If you came here thinking shingles were light — they're asphalt. On a roof. Gravity already knew that, and now your weight limit does too.</p>

<p>For most single-family tear-offs, a 20-yard container handles the job. The catch: a standard 20-yard allows 2–4 tons, and a medium residential roof generates 3–5 tons of old shingles. Book the wrong container or skip the weight conversation before booking, and the overweight charge arrives three days after you thought the project was finished.</p>

<div class="not-prose my-8 rounded-lg border border-orange-200 bg-orange-50 p-6">
  <p class="text-sm font-semibold uppercase tracking-wide text-orange-700 mb-2">Quick answer</p>
  <p class="text-charcoal">A 20-yard container handles most single-family roofing jobs. Budget $350–$600 for 7 days. Confirm the weight limit — not the cubic-yard capacity — before booking. Shingles are dense, and the overweight fee runs $40–$200 per extra ton.</p>
</div>

<h2 id="weight-limit">Shingles Max Out Weight Limits Before They Fill the Bin</h2>

<figure class="not-prose my-8">
  <img
    src="https://images.pexels.com/photos/34019842/pexels-photo-34019842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    alt="Construction worker on a residential roof removing old shingles during a tear-off project"
    width="1260"
    height="750"
    loading="lazy"
    class="w-full rounded-lg object-cover"
  />
  <figcaption class="mt-2 text-sm text-gray-500 text-center">Old shingles coming off the roof look manageable from the ground. The scale at the disposal facility has a different take.</figcaption>
</figure>

<p>One square of standard 3-tab asphalt shingles — 100 sq ft of roofing area — weighs 230–250 lbs. Architectural shingles, now the default on most homes, run 350–480 lbs per square. A ranch home with 20 squares of architectural shingles produces 7,000–9,600 lbs of material in a single tear-off. That is 3.5–4.8 tons.</p>

<p>A standard 20-yard container has a weight limit of 2–4 tons. At the top of that range, a medium single-layer roof fits cleanly. At the bottom, you are in overweight territory before the deck is fully stripped.</p>

<p>The second issue: older homes often have two or three layers of shingles already on the deck. Each layer adds its full weight to the load. A two-layer tear-off on a 20-square roof can produce 6–8 tons — no standard container handles that in a single pull without a specific weight conversation first.</p>

<p>I reckon the overweight charge on roofing jobs traces back to one of two things: nobody asked how many squares were on the roof, or nobody asked how many layers. Usually it is both, and the invoice is correspondingly unpleasant. Dense debris hits weight limits at half capacity. The bin looks half-empty. The scale at the landfill does not.</p>

<h2 id="right-size">Picking the Right Container for a Roofing Job</h2>

<figure class="not-prose my-8">
  <img
    src="https://images.pexels.com/photos/33404080/pexels-photo-33404080.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    alt="Roof installation on a residential brick house with new asphalt shingles being laid by a contractor"
    width="1260"
    height="750"
    loading="lazy"
    class="w-full rounded-lg object-cover"
  />
  <figcaption class="mt-2 text-sm text-gray-500 text-center">The number of new bundles going on tells you how much old material is coming off. Both sides of that transaction weigh roughly the same.</figcaption>
</figure>

<p>Container selection for roofing comes down to two numbers: how many squares are on the roof, and what the weight limit is on the container you are booking.</p>

<p>A fast way to estimate the square count: ask how many shingle bundles the contractor is ordering. Each bundle covers one-third of a square, so 60 bundles means 20 squares of new material going on — and roughly 20 squares of old material coming off. The old shingles weigh approximately the same as the new ones. That number, combined with the per-square weight for your shingle type, tells you what the load will weigh before the first shingle hits the bin.</p>

<p>If you don't have the bundle order, your contractor can tell you the exact square count from the estimate. Get that number before calling for a container. A 20-square single-layer roof and a 20-square two-layer roof look identical from the driveway and weigh entirely different amounts.</p>

<div class="not-prose my-6 overflow-x-auto">
  <table class="w-full text-sm border-collapse">
    <thead>
      <tr class="bg-charcoal text-white">
        <th class="px-4 py-3 text-left font-semibold">Roof Type</th>
        <th class="px-4 py-3 text-left font-semibold">Approx. Squares</th>
        <th class="px-4 py-3 text-left font-semibold">Est. Shingle Weight</th>
        <th class="px-4 py-3 text-left font-semibold">Recommended Size</th>
        <th class="px-4 py-3 text-left font-semibold">Watch For</th>
      </tr>
    </thead>
    <tbody>
      <tr class="border-b border-gray-200 bg-white hover:bg-gray-50">
        <td class="px-4 py-3">Small shed or garage</td>
        <td class="px-4 py-3">5–10 squares</td>
        <td class="px-4 py-3">0.6–2 tons</td>
        <td class="px-4 py-3 font-semibold text-orange">10-yard</td>
        <td class="px-4 py-3">Usually within limit</td>
      </tr>
      <tr class="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
        <td class="px-4 py-3">Small single-story, 1 layer</td>
        <td class="px-4 py-3">15–18 squares</td>
        <td class="px-4 py-3">2–3 tons</td>
        <td class="px-4 py-3 font-semibold text-orange">20-yard</td>
        <td class="px-4 py-3">Confirm 3-ton or 4-ton limit</td>
      </tr>
      <tr class="border-b border-gray-200 bg-white hover:bg-gray-50">
        <td class="px-4 py-3">Medium single-story, 1 layer</td>
        <td class="px-4 py-3">18–28 squares</td>
        <td class="px-4 py-3">3–5 tons</td>
        <td class="px-4 py-3 font-semibold text-orange">20-yard (max weight)</td>
        <td class="px-4 py-3">Ask for highest weight allowance available</td>
      </tr>
      <tr class="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
        <td class="px-4 py-3">Large or two-story, 1 layer</td>
        <td class="px-4 py-3">28–40 squares</td>
        <td class="px-4 py-3">4–7 tons</td>
        <td class="px-4 py-3 font-semibold text-orange">30-yard</td>
        <td class="px-4 py-3">May still need a mid-job swap</td>
      </tr>
      <tr class="bg-white hover:bg-gray-50">
        <td class="px-4 py-3">Any home, 2+ shingle layers</td>
        <td class="px-4 py-3">2× single-layer</td>
        <td class="px-4 py-3">6–10+ tons</td>
        <td class="px-4 py-3 font-semibold text-orange">30-yard + discuss</td>
        <td class="px-4 py-3">Split loads or confirm higher weight allowance</td>
      </tr>
    </tbody>
  </table>
</div>

<p>If you are unsure how many layers are on the deck, have the contractor check the eave edge before the container is ordered. You can often see the layers stacked there. (I have had this conversation approximately two hundred times. The answer is always the same: check the eave edge, count the layers, then call the dumpster company.)</p>

<p>For a full breakdown of container sizing across all project types, see <a href="/blog/how-to-choose-the-right-dumpster-size">How to Choose the Right Dumpster Size</a>.</p>

<h2 id="cost">What a Roofing Dumpster Rental Costs</h2>

<p>Honest numbers for a standard 7-day rental, including delivery, pickup, and disposal up to the weight limit shown.</p>

<div class="not-prose my-6 overflow-x-auto">
  <table class="w-full text-sm border-collapse">
    <thead>
      <tr class="bg-charcoal text-white">
        <th class="px-4 py-3 text-left font-semibold">Container Size</th>
        <th class="px-4 py-3 text-left font-semibold">Weekly Cost</th>
        <th class="px-4 py-3 text-left font-semibold">Typical Weight Limit</th>
        <th class="px-4 py-3 text-left font-semibold">Best Roof Size</th>
      </tr>
    </thead>
    <tbody>
      <tr class="border-b border-gray-200 bg-white hover:bg-gray-50">
        <td class="px-4 py-3 font-semibold text-orange">10-yard</td>
        <td class="px-4 py-3">$300–$420</td>
        <td class="px-4 py-3">1–2 tons</td>
        <td class="px-4 py-3">Shed, small detached garage</td>
      </tr>
      <tr class="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
        <td class="px-4 py-3 font-semibold text-orange">15-yard</td>
        <td class="px-4 py-3">$350–$480</td>
        <td class="px-4 py-3">1.5–3 tons</td>
        <td class="px-4 py-3">Small single-story, tight driveway access</td>
      </tr>
      <tr class="border-b border-gray-200 bg-white hover:bg-gray-50">
        <td class="px-4 py-3 font-semibold text-orange">20-yard</td>
        <td class="px-4 py-3">$350–$600</td>
        <td class="px-4 py-3">2–4 tons</td>
        <td class="px-4 py-3">Most single-family homes, one layer</td>
      </tr>
      <tr class="bg-gray-50 hover:bg-gray-100">
        <td class="px-4 py-3 font-semibold text-orange">30-yard</td>
        <td class="px-4 py-3">$450–$700</td>
        <td class="px-4 py-3">3–6 tons</td>
        <td class="px-4 py-3">Large homes, multi-layer tear-offs</td>
      </tr>
    </tbody>
  </table>
</div>

<p>Some companies add a shingle surcharge of $20–$80 on top of the base rate. Others roll it into the flat price. That question takes 30 seconds at booking and changes whether the quote matches the invoice. For the full breakdown of what moves the number on any roll-off rental, see <a href="/blog/what-does-a-dumpster-rental-cost">What Does a Roll-Off Dumpster Rental Actually Cost</a>.</p>

<h2 id="accepted-materials">What Goes In and What Stays Off the Roof</h2>

<p>Standard roofing tear-off debris is accepted in most roll-off containers without issue:</p>

<ul>
  <li>Asphalt shingles — 3-tab and architectural</li>
  <li>Wood shingles and cedar shakes</li>
  <li>Roofing felt, ice-and-water shield, and underlayment</li>
  <li>Metal flashing, drip edge, and valley metal</li>
  <li>Fascia boards, soffits, and trim</li>
  <li>Gutters and downspouts</li>
  <li>Plywood or OSB roof decking</li>
</ul>

<p>One category requires a separate conversation before the tear-off begins: <strong>asbestos-containing roofing materials</strong>. Homes built before 1978 — particularly those with flat-roof built-up systems, older fiber cement tiles, or certain composite shingles from that era — sometimes contain asbestos. If there is any doubt, test before you tear. A licensed asbestos inspection typically costs $250–$500. If the material tests positive, a licensed abatement contractor removes it before any standard roofing crew touches the deck, and the dumpster goes on order after abatement is complete — not before. The <a href="https://www.epa.gov/asbestos" target="_blank" rel="noopener noreferrer">EPA's asbestos guidance</a> covers identification and legal disposal requirements in full.</p>

<p>Also not in the bin: paint cans, solvents, or attic chemicals that come down with the demo. Hazardous materials are prohibited in every standard roll-off. The <a href="https://www.epa.gov/smm/construction-and-demolition-materials" target="_blank" rel="noopener noreferrer">EPA's construction and demolition data</a> puts roofing material as one of the largest categories of C&amp;D waste by volume — the vast majority goes in standard containers without issue. The exception is anything with a hazardous classification, and that exception has a real price tag attached to it.</p>

<p>For the complete accepted and prohibited materials breakdown, see <a href="/blog/what-can-you-put-in-a-roll-off-dumpster">What Can You Put in a Roll-Off Dumpster</a>.</p>

<h2 id="placement">How Delivery and Placement Work on a Roofing Job</h2>

<p>The driver needs 60 feet of straight clearance to set a container down. The truck backs in, the container slides off the back, and the truck pulls forward. If your driveway is shorter than 60 feet, measure before booking. Turning a roll-off truck around in a residential cul-de-sac is a memorable event. Not in a good way.</p>

<p>A few things specific to roofing jobs:</p>

<ul>
  <li><strong>Plywood boards under the container.</strong> Heavy loads leave pressure marks on asphalt driveways. Most companies have plywood pads — not all use them without being asked. Ask before delivery, not after the container is already sitting on the surface.</li>
  <li><strong>Loading chutes.</strong> A chute lets workers slide shingles directly from the roof edge into the bin instead of carrying bundles down a ladder. Some rental companies supply them; others do not. Confirm before booking if this matters to your crew's efficiency.</li>
  <li><strong>Street placement permits.</strong> Driveway placement does not require a permit in most municipalities. If the driveway won't work and the container needs to go on the street, contact your city's permit office. Fees run $20–$150 depending on location.</li>
</ul>

<p>HOA properties add a layer: some associations require pre-approval for container placement or restrict where on the property a bin can sit. Get that confirmation before the driver arrives, not after.</p>

<p>Find roll-off availability and local pricing in your area at <a href="/locations">the location guides</a>.</p>

<h2 id="skip-it">When a Dumpster Is Not the Right Call for a Roofing Job</h2>

<figure class="not-prose my-8">
  <img
    src="https://images.pexels.com/photos/9669805/pexels-photo-9669805.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    alt="Industrial roll-off dumpster container for construction and roofing waste disposal"
    width="1260"
    height="750"
    loading="lazy"
    class="w-full rounded-lg object-cover"
  />
  <figcaption class="mt-2 text-sm text-gray-500 text-center">A roll-off is the right tool for a full tear-off. For a shed repair or a contractor who already handles haul-away, it is often an unnecessary cost.</figcaption>
</figure>

<p>I will tell you when to skip it.</p>

<p>If the job is a shed roof, a pergola cover, or a partial repair under 8 squares, a roll-off rental will cost more than the alternative. A small shed produces under half a ton of debris. A contractor bag and a run to the local transfer station handles it at a fraction of a week's rental fee.</p>

<p>If your roofing contractor has a dump trailer onsite and their quote includes debris removal, ordering a separate dumpster means paying twice for the same haul. Confirm what the contractor's scope covers before booking anything independently.</p>

<p>If the project is a patch repair — replacing a damaged section rather than a full strip — you likely don't have the volume to justify a 7-day rental. A junk removal service that charges by the load handles a few squares of old shingles at comparable or lower cost, and they do the loading.</p>

<p>For more on matching the right disposal method to the project, browse the <a href="/resources">resources section</a>.</p>

<p>Shingles always weigh more than the person scheduling the container expects. Count the squares, ask about the layers, confirm the weight limit, and the quote and the invoice will be close. If they're still not — give us a call before the next one. It is always the second layer nobody mentioned.</p>
`,
  },
  {
    slug: 'how-to-choose-a-dumpster-rental-company',
    title: 'Choosing a Dumpster Rental Company: What Actually Matters',
    excerpt:
      'The quote looked reasonable. The invoice had three additional charges, two of which had footnotes. Here is what to compare before you hand over a card number.',
    category: 'Buyers Guide',
    coverImage:
      'https://images.pexels.com/photos/33929758/pexels-photo-33929758.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    coverImageAlt:
      'Blue industrial roll-off dumpster container positioned outside a modern commercial building',
    date: '2026-05-16',
    author: 'Adam Chandler',
    metaDescription:
      'How to choose a roll-off dumpster rental company without hidden fees or surprise invoices. What to compare, what to ask, and when it is time to keep looking.',
    readingTime: 8,
    keywords: [
      'roll off dumpster rental companies',
      'dumpster rental companies near me',
      'local dumpster rental',
      'dumpster rental services',
      'cheapest dumpster rental near me',
      'how to choose a dumpster rental company',
    ],
    toc: [
      { id: 'quote-vs-invoice', title: 'The Gap Between the Quote and the Invoice' },
      { id: 'what-to-compare', title: 'Five Things Worth Comparing Between Companies' },
      { id: 'red-flags', title: 'Three Red Flags That Should Send You Elsewhere' },
      { id: 'pricing-table', title: 'What the Numbers Actually Look Like' },
      { id: 'when-to-skip', title: 'When to Skip the Roll-Off Entirely' },
      { id: 'faq', title: 'Straight Answers' },
    ],
    faq: [
      {
        question: 'How do I find dumpster rental companies near me?',
        answer:
          'Search for local roll-off providers and confirm they serve your specific zip code — delivery zones are tighter than they look on a map. Get at least two written quotes before booking. Rolloff Dumpster Finder matches customers to available local providers across Colorado.',
      },
      {
        question: 'What should I compare when choosing a dumpster rental company?',
        answer:
          'Compare the all-in price, not just the advertised base rate. The base rate rarely includes fuel surcharges, disposal fees, or overage charges. Ask for an itemized written quote and compare the total cost including the weight allowance, rental period, and the per-ton overage rate.',
      },
      {
        question: 'What is a fair price for a 20-yard dumpster rental?',
        answer:
          'In the Front Range Colorado market, a 20-yard roll-off rental runs $380–$650 all-in for a standard 7–10 day rental. Mountain and rural markets run 5–10 percent higher. If you are paying more than $700 for a suburban residential 20-yard, ask for an itemized breakdown — it may be justified, but it is worth confirming.',
      },
      {
        question: 'Are there hidden fees in dumpster rentals?',
        answer:
          'Fuel surcharges ($15–$35), environmental or disposal fees ($10–$30), and weight overage charges ($65–$95 per ton over the included limit) are the most common additions to base quotes. Extended rental fees ($5–$15 per day past the included period) are another. A written itemized quote shows all of these before you commit.',
      },
      {
        question: 'How fast can a company deliver a dumpster?',
        answer:
          'Same-day delivery is available from most providers, typically at a premium of $50–$100 above standard scheduling. Next-day delivery is standard when ordered before midday. For planned projects, booking two to three days ahead usually gets you a better rate and a wider choice of container sizes.',
      },
      {
        question: 'Do smaller local companies charge more or less than national ones?',
        answer:
          'It varies by market. Local operators sometimes have lower overhead and price under national rates, but some charge more due to smaller inventories. National waste companies are occasionally competitive in dense markets where they already run routes. Compare specific written quotes rather than assuming either direction.',
      },
      {
        question: 'What happens if my dumpster gets overloaded?',
        answer:
          'The driver may refuse to haul a visibly overloaded container or one that exceeds legal road weight. More commonly, the company hauls it and bills the overage — typically $65–$95 per ton over the included limit. Ask for the overage rate in writing before you book, not after the container has already left your driveway.',
      },
      {
        question: 'Can I cancel or reschedule a dumpster rental?',
        answer:
          'Most companies allow cancellation or rescheduling with 24–48 hours notice at no charge. Same-day cancellations often carry a $50–$75 fee. Read the cancellation policy in your written quote — it is usually one paragraph and worth the minute it takes.',
      },
    ],
    body: `
<p>Finding a dumpster rental company is easy. (I reckon there are a dozen within ten miles of you right now, including at least one named something like "Just Bins" and another that appears to be a guy with a truck and an email address.) Finding a <strong>roll-off dumpster rental company</strong> that won't follow up with a surprise invoice after the container is already gone — that takes a bit more work. The short version: compare all-in pricing, not just the base rate. Ask about weight limits before you book. And read the overage policy the way you'd read a car rental agreement, because the penalties have similar energy.</p>

<div class="not-prose my-8 rounded-lg border border-orange-200 bg-orange-50 p-6">
  <p class="text-sm font-semibold uppercase tracking-wide text-orange-700 mb-2">TL;DR</p>
  <p class="text-charcoal text-sm leading-relaxed">Get an itemized quote — not a headline number. Ask about weight allowances and overage charges before you commit. A company that won't tell you the overage rate upfront is one you will hear from again on the invoice.</p>
</div>

<nav class="not-prose my-8">
  <p class="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-3">In This Guide</p>
  <ol class="list-decimal list-inside space-y-1 text-sm text-charcoal">
    <li><a href="#quote-vs-invoice" class="text-orange hover:underline">The Gap Between the Quote and the Invoice</a></li>
    <li><a href="#what-to-compare" class="text-orange hover:underline">Five Things Worth Comparing Between Companies</a></li>
    <li><a href="#red-flags" class="text-orange hover:underline">Three Red Flags That Should Send You Elsewhere</a></li>
    <li><a href="#pricing-table" class="text-orange hover:underline">What the Numbers Actually Look Like</a></li>
    <li><a href="#when-to-skip" class="text-orange hover:underline">When to Skip the Roll-Off Entirely</a></li>
    <li><a href="#faq" class="text-orange hover:underline">Straight Answers</a></li>
  </ol>
</nav>

<h2 id="quote-vs-invoice">The Gap Between the Quote and the Invoice</h2>

<p>The base rate you see advertised is rarely what you pay. I watched this play out hundreds of times driving a roll-off truck from 2003 to 2013. A customer booked what looked like a $380 rental. The invoice was $520. Nobody lied — the gap just lived in six line items nobody mentioned on the phone.</p>

<p>Here is what typically sits between the quote and the final bill:</p>

<ul class="my-4 space-y-2 pl-5 list-disc text-charcoal">
  <li><strong>Fuel surcharge:</strong> $15–$35, sometimes labeled "environmental fee." Sometimes both exist on the same invoice under different names.</li>
  <li><strong>Disposal or tipping fee:</strong> $10–$30. Covers what the landfill charges to accept the load. A real cost, but rarely built into the advertised rate.</li>
  <li><strong>Weight overage:</strong> $65–$95 per ton over the included limit. This is the one that stings. A full load of shingles or concrete hits the weight limit at roughly half the bin's volume. (If you're hauling roofing debris, read <a href="/blog/roofing-dumpster-rental" class="text-orange hover:underline">the roofing dumpster rental guide</a> first — it covers exactly how fast shingle weight adds up.)</li>
  <li><strong>Extended rental fee:</strong> $5–$15 per day past the included period, which is usually 7–10 days. Projects run long. Budget a few extra days from the start.</li>
  <li><strong>Permit pass-through:</strong> Some companies pull the street placement permit for you and add it to the invoice. Others leave it to you. Either way it is a cost — just a question of who handles the paperwork.</li>
</ul>

<p>The fix is simple. Ask for a written, itemized quote before you commit. Not a verbal number, not a rough estimate — a written quote showing the base rate, all fees, the weight allowance, and the overage rate. If the company won't produce one, that is information worth having before the container arrives.</p>

<figure class="not-prose my-8">
  <img
    src="https://images.pexels.com/photos/6285155/pexels-photo-6285155.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    alt="Two contractors reviewing and comparing project quotes on a job site"
    width="1260"
    height="750"
    loading="lazy"
    class="w-full rounded-lg"
  />
</figure>

<h2 id="what-to-compare">Five Things Worth Comparing Between Companies</h2>

<p>When you call around — and you should call at least two or three — here is what actually moves the needle.</p>

<p><strong>1. All-in price.</strong> Ask what the full invoice looks like for your project. Not the base rate, not "starting at." Total. Written. If the company resists putting it on paper, the number on paper would likely explain why.</p>

<p><strong>2. Weight allowance.</strong> Every container has one. A 20-yard typically includes 2–4 tons depending on the provider and market. If you're hauling shingles, concrete, or dirt, you will hit that limit before the bin looks full. Ask the specific number, then assume your load will run 15–20 percent heavier than your estimate. Nobody has ever called me to say the project came in lighter than expected. They've called. Just not with that particular update. For a full picture of how overages affect the final bill, the <a href="/blog/what-does-a-dumpster-rental-cost" class="text-orange hover:underline">dumpster rental cost guide</a> covers the variables in detail.</p>

<p><strong>3. Rental period and extension cost.</strong> Standard is 7–10 days. Ask what happens on day 11. Some companies charge $5/day, some $15/day, some swap the container and start a new rental period. Know the policy before your project runs long.</p>

<p><strong>4. Accepted materials.</strong> Not every company takes the same things. Concrete, dirt, and clean fill are commonly priced separately or restricted outright. Electronics, appliances, and tires vary by provider. If you're unsure what can go in the bin, the <a href="/blog/what-can-you-put-in-a-roll-off-dumpster" class="text-orange hover:underline">accepted and prohibited items guide</a> covers the standard rules — but always confirm with your specific provider, because local landfill agreements vary. The <a href="https://www.epa.gov/smm/construction-and-demolition-materials" target="_blank" rel="noopener noreferrer" class="text-orange hover:underline">EPA's construction and demolition materials guidance</a> is useful context for larger commercial jobs where restricted material categories matter.</p>

<p><strong>5. Delivery and pickup flexibility.</strong> Can they do next-day delivery? What is the pickup window? Does the driver call ahead? These sound like logistics details until your contractor is standing on an empty driveway at 8 a.m. and the bin is still there from last week.</p>

<h2 id="red-flags">Three Red Flags That Should Send You Elsewhere</h2>

<p>Most roll-off dumpster rental companies are straightforward operations. A few are not. Here is the shortlist of what makes me hang up and dial the next number.</p>

<p><strong>No written quote.</strong> A verbal estimate is not a contract. A legitimate operation emails you an itemized quote — it takes four minutes to produce. If they won't do it, the written number would likely explain the reluctance.</p>

<p><strong>Pressure to book immediately.</strong> "That rate is only available today." Sometimes true. More often it is a tactic. A company with a solid operation is not running out of containers if you call back tomorrow. Compare quotes. Take a day. If the rate disappears overnight, another company with the same container still has one.</p>

<p><strong>Vague overage rates.</strong> Every company charges for loads over the weight limit. The reliable ones state the rate clearly: "$75 per ton over the included limit." If a company is evasive about what they charge when the load is heavy, assume the number is high and that you will see it on the back of the invoice after the container is already gone. Before booking, it is also worth knowing which materials require specialized disposal — the <a href="https://www.epa.gov/hw" target="_blank" rel="noopener noreferrer" class="text-orange hover:underline">EPA's hazardous waste guidance</a> covers what cannot legally go into a standard roll-off and why.</p>

<figure class="not-prose my-8">
  <img
    src="https://images.pexels.com/photos/8293769/pexels-photo-8293769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    alt="Contractor in yellow hard hat reviewing a project pricing document on a job site"
    width="1260"
    height="750"
    loading="lazy"
    class="w-full rounded-lg"
  />
</figure>

<h2 id="pricing-table">What the Numbers Actually Look Like</h2>

<p>Here is a realistic look at all-in pricing for standard roll-off rentals in the Front Range Colorado market. Mountain and rural markets run 5–10 percent higher. National providers vary — sometimes lower in dense markets, sometimes higher where inventory is thin. Before comparing prices, match the container to the job first: the <a href="/blog/how-to-choose-the-right-dumpster-size" class="text-orange hover:underline">dumpster sizing guide</a> walks through every standard container against every common project type.</p>

<div class="not-prose my-6 overflow-x-auto">
  <table class="w-full text-sm border-collapse">
    <thead>
      <tr class="bg-charcoal text-white">
        <th class="px-4 py-3 text-left font-semibold">Container</th>
        <th class="px-4 py-3 text-left font-semibold">Included Weight</th>
        <th class="px-4 py-3 text-left font-semibold">All-In Price Range</th>
        <th class="px-4 py-3 text-left font-semibold">Common Uses</th>
      </tr>
    </thead>
    <tbody>
      <tr class="border-b border-gray-200 bg-white">
        <td class="px-4 py-3 font-semibold text-orange">10-yard</td>
        <td class="px-4 py-3">1–2 tons</td>
        <td class="px-4 py-3">$280–$480</td>
        <td class="px-4 py-3">Garage cleanouts, single-room remodels</td>
      </tr>
      <tr class="border-b border-gray-200 bg-gray-50">
        <td class="px-4 py-3 font-semibold text-orange">15-yard</td>
        <td class="px-4 py-3">1.5–2.5 tons</td>
        <td class="px-4 py-3">$320–$540</td>
        <td class="px-4 py-3">Bathroom remodels, small deck removal</td>
      </tr>
      <tr class="border-b border-gray-200 bg-white">
        <td class="px-4 py-3 font-semibold text-orange">20-yard</td>
        <td class="px-4 py-3">2–4 tons</td>
        <td class="px-4 py-3">$380–$650</td>
        <td class="px-4 py-3">Roofing, kitchen remodels, full home cleanouts</td>
      </tr>
      <tr class="border-b border-gray-200 bg-gray-50">
        <td class="px-4 py-3 font-semibold text-orange">30-yard</td>
        <td class="px-4 py-3">3–5 tons</td>
        <td class="px-4 py-3">$450–$780</td>
        <td class="px-4 py-3">Full renovations, large demolition jobs</td>
      </tr>
      <tr class="bg-white">
        <td class="px-4 py-3 font-semibold text-orange">40-yard</td>
        <td class="px-4 py-3">4–6 tons</td>
        <td class="px-4 py-3">$580–$1,100+</td>
        <td class="px-4 py-3">New construction, commercial projects</td>
      </tr>
    </tbody>
  </table>
</div>

<p>Same-day delivery carries a premium — usually $50–$100 above standard scheduling. If your project has a fixed start date, booking two or three days ahead typically gets you a better rate and more size options. The urgency premium is avoidable if you plan for it.</p>

<h2 id="when-to-skip">When to Skip the Roll-Off Entirely</h2>

<p>A roll-off is the right tool for most medium-to-large debris removal jobs. It is not the right tool for all of them.</p>

<p><strong>Skip it if your job is under two yards.</strong> A 10-yard container runs $280 minimum plus fees for a 7-day rental. If your entire project fits in a pickup truck, a junk removal service that charges by volume — they do the loading themselves — is almost always cheaper for the same result.</p>

<p><strong>Skip it if you're hauling primarily hazardous materials.</strong> No licensed roll-off provider accepts paint, solvents, motor oil, asbestos, batteries, or household hazardous waste in a standard container. These require a dedicated disposal facility. A provider who says they will take anything is either uninformed or hoping you won't ask follow-up questions. (They will know you asked when the driver shows up and declines to haul the container. The call that follows is a special kind of conversation.) Your county household hazardous waste facility handles restricted materials, usually at low or no cost.</p>

<p><strong>Skip it if you need ongoing trash service.</strong> A roll-off is a project tool — for a one-time accumulation of debris with a clear endpoint. If you need recurring waste pickup for a business or rental property, that is a commercial dumpster service on a subscription model. Different product, different company, completely different pricing structure.</p>

<p>If you're in Colorado and looking for local roll-off availability by city, the <a href="/locations" class="text-orange hover:underline">locations guide</a> covers provider availability and typical pricing across the state.</p>

<p>The best dumpster rental company is the one whose invoice matches the quote. That is a lower bar than it sounds — which tells you something about the industry and something about invoices generally. Give us a call. We'll match you with a provider who clears it.</p>
`,
  },
  {
    slug: 'commercial-dumpster-rental',
    title: 'Commercial Dumpster Rental: What Businesses Actually Need',
    excerpt:
      'Commercial dumpster rental is the same product as a residential rental — a roll-off container, same weight limits, same pricing structure. What changes is scale, site access, and the permit checklist. Here is what to book and when to skip it.',
    category: 'Buyers Guide',
    coverImage:
      'https://images.pexels.com/photos/8811446/pexels-photo-8811446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    coverImageAlt: 'Large roll-off container positioned on commercial pavement outside a business building',
    date: '2026-05-19',
    author: 'Adam Chandler',
    metaDescription:
      'Commercial dumpster rental for job sites, office renovations, and business cleanouts. How to size, price, and book a roll-off — and when to skip it entirely.',
    readingTime: 9,
    keywords: [
      'commercial dumpster rental',
      'roll off dumpster service',
      'dumpster service near me',
      'dumpster delivery',
      'construction debris container rental',
      'commercial roll off dumpster',
      'business dumpster rental',
    ],
    toc: [
      { id: 'what-commercial-means', title: 'What "Commercial" Actually Means for a Rental' },
      { id: 'sizing', title: 'Sizing the Container for Common Commercial Jobs' },
      { id: 'pricing', title: 'What the Numbers Look Like' },
      { id: 'accepted-materials', title: 'What Goes in a Commercial Container' },
      { id: 'when-to-skip', title: 'When the Roll-Off Is the Wrong Tool' },
      { id: 'booking-questions', title: 'Six Questions to Ask Before Booking' },
      { id: 'faq', title: 'Straight Answers' },
    ],
    faq: [
      {
        question: 'How much does a commercial dumpster rental cost?',
        answer:
          'Commercial dumpster rental pricing matches residential: $380–$650 all-in for a 20-yard container in most Front Range markets, $450–$780 for a 30-yard. The base rate does not include fuel surcharges ($15–$35), disposal fees ($10–$30), or weight overage charges ($65–$95 per ton over the included limit). Get a written, itemized quote before committing.',
      },
      {
        question: 'What size dumpster do I need for a commercial renovation?',
        answer:
          'Most commercial renovations — office build-outs, retail tenant improvements, restaurant remodels — land in the 20- to 30-yard range. The 20-yard handles standard office and retail jobs without heavy structural demo. Step to a 30-yard for full gut renovations or any job with significant concrete, tile, or structural demolition.',
      },
      {
        question: 'Do I need a permit for a commercial dumpster?',
        answer:
          'Placement on private commercial property — a business parking lot or loading dock — typically does not require a permit. Street placement in front of a commercial property almost always does. Permits run $20–$150 depending on municipality. Confirm with your city or county permit office before the container is scheduled.',
      },
      {
        question: 'Can I keep a roll-off container on-site for more than two weeks?',
        answer:
          'Yes. Most providers extend at $5–$15 per day past the base rental period. For projects running longer than two weeks, negotiate a longer base period at booking — the daily extension rate is typically higher than what a longer upfront period costs. Confirm the extension policy in the written quote.',
      },
      {
        question: 'What materials are prohibited in a commercial dumpster?',
        answer:
          'The prohibited list matches residential: paint, motor oil, solvents, batteries, propane tanks, tires, appliances with refrigerants, asbestos-containing materials, and hazardous waste. Commercial jobs also commonly generate fluorescent lighting tubes and electronics, both of which require separate disposal at certified recycling facilities rather than a standard roll-off.',
      },
      {
        question: 'What is the difference between a roll-off and a commercial dumpster service?',
        answer:
          'A roll-off is a project tool — a one-time container rental with a defined start and end date. A commercial dumpster service is an ongoing subscription with a permanent container serviced on a regular schedule. If the need is recurring waste pickup, a roll-off is the wrong product. If the need is a one-time project, it is exactly right.',
      },
      {
        question: 'How fast can I get a commercial dumpster delivered?',
        answer:
          'Same-day delivery is available from most roll-off providers at a premium of $50–$100 above standard rates. Next-day delivery is standard when ordered before midday. For planned commercial projects, booking two to three days ahead typically gets you better availability, a wider choice of container sizes, and a better rate.',
      },
    ],
    body: `
<p>A <strong>commercial dumpster rental</strong> is still just a box on wheels. The word "commercial" is doing a lot of heavy lifting there — which, coincidentally, is the variable that catches most projects off guard. For most commercial jobs — tenant improvements, office renovations, retail build-outs — you are booking the same 20- or 30-yard container a homeowner rents for a kitchen gut. Same weight limits, same pricing structure, same driver who needs 60 feet of clearance and does not need input on where to park.</p>

<p>What actually changes on a commercial job is scale, rental duration, and the pre-delivery checklist. More debris. Longer timelines. More stakeholders with opinions. The container itself is indifferent to all of this.</p>

<div class="not-prose my-8 rounded-lg border border-orange-200 bg-orange-50 p-6">
  <p class="text-sm font-semibold uppercase tracking-wide text-orange-700 mb-2">TL;DR</p>
  <p class="text-charcoal text-sm leading-relaxed">Most commercial jobs need a 20- or 30-yard container, booked for 7–14 days. Weight matters more than volume on dense debris. Get a written, itemized quote — fuel surcharges, disposal fees, and overage rates live in the line items, not the headline number.</p>
</div>

<nav class="not-prose my-8">
  <p class="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-3">In This Guide</p>
  <ol class="list-decimal list-inside space-y-1 text-sm text-charcoal">
    <li><a href="#what-commercial-means" class="text-orange hover:underline">What "Commercial" Actually Means for a Rental</a></li>
    <li><a href="#sizing" class="text-orange hover:underline">Sizing the Container for Common Commercial Jobs</a></li>
    <li><a href="#pricing" class="text-orange hover:underline">What the Numbers Look Like</a></li>
    <li><a href="#accepted-materials" class="text-orange hover:underline">What Goes in a Commercial Container</a></li>
    <li><a href="#when-to-skip" class="text-orange hover:underline">When the Roll-Off Is the Wrong Tool</a></li>
    <li><a href="#booking-questions" class="text-orange hover:underline">Six Questions to Ask Before Booking</a></li>
    <li><a href="#faq" class="text-orange hover:underline">Straight Answers</a></li>
  </ol>
</nav>

<h2 id="what-commercial-means">What "Commercial" Actually Means for a Rental</h2>

<figure class="not-prose my-8">
  <img
    src="https://images.pexels.com/photos/12708007/pexels-photo-12708007.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    alt="Commercial building exterior with industrial waste containers outside during a renovation project"
    width="1260"
    height="750"
    loading="lazy"
    class="w-full rounded-lg"
  />
</figure>

<p>In practice, commercial dumpster rental covers three main scenarios:</p>

<ul class="my-4 space-y-2 pl-5 list-disc text-charcoal">
  <li><strong>Project-based business work</strong> — office renovation, retail build-out, restaurant gut. One-time, short rental window, clear endpoint.</li>
  <li><strong>Property management cleanouts</strong> — clearing units between tenants, handling a building renovation section by section, clearing common areas before a full remodel.</li>
  <li><strong>Contractor-managed construction</strong> — new commercial build, large tenant improvement, structural demolition. These are the jobs where multiple containers or multiple pulls on the same container start to make financial sense.</li>
</ul>

<p>The container you rent for all three is the same roll-off product a homeowner gets. The differences are logistics and scale, not the product. A 30-yard container does not know whether it is sitting in front of a house or a warehouse. Neither does the driver — they need flat ground, 60 feet of clearance, and the correct address. Everything else is coordination.</p>

<p>Where commercial jobs add complexity is pre-delivery approvals. On a commercial property, you may need sign-off from the building owner, the property manager, and the municipality before a container lands. If the container goes on a public street, a permit is almost always required. None of that changes the container. It just adds to the checklist the week before delivery day.</p>

<h2 id="sizing">Sizing the Container for Common Commercial Jobs</h2>

<p>The default for most commercial projects is the 20- or 30-yard container. The 20-yard handles a standard office renovation, a retail build-out, or a tenant improvement without structural demo. Step to the 30-yard when the job includes significant structural work, multi-room demolition, or when you are genuinely uncertain — the cost gap between a 20 and 30 is smaller than the cost of a second haul on a 20 that runs short.</p>

<div class="not-prose my-6 overflow-x-auto">
  <table class="w-full text-sm border-collapse">
    <thead>
      <tr class="bg-charcoal text-white">
        <th class="px-4 py-3 text-left font-semibold">Project Type</th>
        <th class="px-4 py-3 text-left font-semibold">Recommended Size</th>
        <th class="px-4 py-3 text-left font-semibold">Weight Note</th>
      </tr>
    </thead>
    <tbody>
      <tr class="border-b border-gray-200 bg-white">
        <td class="px-4 py-3">Office cleanout or light renovation</td>
        <td class="px-4 py-3 font-semibold text-orange">10–20 yard</td>
        <td class="px-4 py-3">Low — furniture, drywall, flooring</td>
      </tr>
      <tr class="border-b border-gray-200 bg-gray-50">
        <td class="px-4 py-3">Retail build-out or tenant improvement</td>
        <td class="px-4 py-3 font-semibold text-orange">20 yard</td>
        <td class="px-4 py-3">Medium — mixed demolition debris</td>
      </tr>
      <tr class="border-b border-gray-200 bg-white">
        <td class="px-4 py-3">Restaurant renovation</td>
        <td class="px-4 py-3 font-semibold text-orange">20–30 yard</td>
        <td class="px-4 py-3">High — tile, equipment, concrete floor</td>
      </tr>
      <tr class="border-b border-gray-200 bg-gray-50">
        <td class="px-4 py-3">Full office gut or structural demo</td>
        <td class="px-4 py-3 font-semibold text-orange">30–40 yard</td>
        <td class="px-4 py-3">High — concrete, structural materials</td>
      </tr>
      <tr class="border-b border-gray-200 bg-white">
        <td class="px-4 py-3">Multi-unit property cleanout</td>
        <td class="px-4 py-3 font-semibold text-orange">20–30 yard (multiple pulls)</td>
        <td class="px-4 py-3">Medium — unit contents vary</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="px-4 py-3">New commercial construction</td>
        <td class="px-4 py-3 font-semibold text-orange">30–40 yard</td>
        <td class="px-4 py-3">High — ongoing debris throughout the build</td>
      </tr>
    </tbody>
  </table>
</div>

<p>Weight is the variable most commercial operators underestimate. A contractor gutting a commercial kitchen generates tile, concrete, and old equipment — all dense. A 20-yard container that looks half-full may already be at its weight limit. For any job involving concrete floors, tile, or structural demolition, confirm the weight limit and the overage rate before the first load goes in. For a full sizing breakdown, the <a href="/blog/how-to-choose-the-right-dumpster-size" class="text-orange hover:underline">roll off dumpster sizes guide</a> matches every standard container to common project types.</p>

<h2 id="pricing">What the Numbers Look Like</h2>

<p>Commercial dumpster rental pricing follows the same structure as residential: base rate plus fuel surcharge, disposal fee, and overage charges for loads over the included weight limit. The numbers are the same too — a 20-yard on a commercial job costs the same as a 20-yard on a residential one, assuming the same market and debris type.</p>

<div class="not-prose my-6 overflow-x-auto">
  <table class="w-full text-sm border-collapse">
    <thead>
      <tr class="bg-charcoal text-white">
        <th class="px-4 py-3 text-left font-semibold">Container</th>
        <th class="px-4 py-3 text-left font-semibold">All-In Price Range</th>
        <th class="px-4 py-3 text-left font-semibold">Included Weight</th>
        <th class="px-4 py-3 text-left font-semibold">Overage Rate</th>
      </tr>
    </thead>
    <tbody>
      <tr class="border-b border-gray-200 bg-white">
        <td class="px-4 py-3 font-semibold text-orange">20-yard</td>
        <td class="px-4 py-3">$380–$650</td>
        <td class="px-4 py-3">2–4 tons</td>
        <td class="px-4 py-3">$65–$95/ton over</td>
      </tr>
      <tr class="border-b border-gray-200 bg-gray-50">
        <td class="px-4 py-3 font-semibold text-orange">30-yard</td>
        <td class="px-4 py-3">$450–$780</td>
        <td class="px-4 py-3">3–5 tons</td>
        <td class="px-4 py-3">$65–$95/ton over</td>
      </tr>
      <tr class="bg-white">
        <td class="px-4 py-3 font-semibold text-orange">40-yard</td>
        <td class="px-4 py-3">$580–$1,100+</td>
        <td class="px-4 py-3">4–6 tons</td>
        <td class="px-4 py-3">$65–$95/ton over</td>
      </tr>
    </tbody>
  </table>
</div>

<p>Standard rental periods run 7–10 days for residential jobs. Commercial projects often run longer. Extended rental fees are typically $5–$15 per day past the included period. If the project timeline is more than two weeks, negotiate a longer rental period upfront — the per-day extension rate is almost always higher than what a longer base period costs at booking. (I have seen more than a few commercial project managers figure this out on day 12. The lesson tends to stick.)</p>

<p>Same-day delivery carries a premium of $50–$100 above standard scheduling on most commercial containers. For planned projects with a known start date, booking two or three days ahead typically gets better availability and a better rate. For a full breakdown of every line item between the quote and the invoice, the <a href="/blog/what-does-a-dumpster-rental-cost" class="text-orange hover:underline">dumpster rental cost guide</a> covers the variables in detail.</p>

<h2 id="accepted-materials">What Goes in a Commercial Container</h2>

<figure class="not-prose my-8">
  <img
    src="https://images.pexels.com/photos/15105580/pexels-photo-15105580.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    alt="Debris and rubble from a commercial building demolition, including broken concrete and construction waste"
    width="1260"
    height="750"
    loading="lazy"
    class="w-full rounded-lg"
  />
</figure>

<p>Commercial projects generate most of the same debris categories as residential jobs. General construction materials — drywall, framing lumber, flooring, ceiling tiles, ductwork, cabinets, fixtures — are accepted in a standard roll-off container. Office furniture, shelving, cubicle systems, and general cleanout material all go in without issue.</p>

<p>A few categories worth confirming in advance on a commercial job:</p>

<ul class="my-4 space-y-2 pl-5 list-disc text-charcoal">
  <li><strong>Commercial kitchen equipment</strong> — refrigerators, freezer units, and HVAC equipment require certified refrigerant removal before disposal. If you are demoing a commercial kitchen, confirm which appliances contain refrigerants before loading them into the bin.</li>
  <li><strong>Electronics</strong> — servers, monitors, computers, and commercial AV equipment are restricted at many disposal facilities. Some providers accept them with a surcharge; others decline entirely. Confirm before loading.</li>
  <li><strong>Fluorescent lighting</strong> — contains mercury and usually requires separate recycling. Large commercial renovations often generate significant quantities of tubes. Your county hazardous waste facility or a certified recycler handles these.</li>
  <li><strong>Concrete and tile</strong> — accepted, but dense. A commercial floor demo can push weight limits before the container looks anything close to full. For concrete-heavy jobs, ask about a heavy-debris container rather than a standard roll-off.</li>
</ul>

<p>What never goes in a commercial container is the same list as residential: paint, motor oil, solvents, batteries, propane tanks, tires, appliances with refrigerants, asbestos-containing materials, and hazardous waste. The <a href="https://www.epa.gov/smm/construction-and-demolition-materials" target="_blank" rel="noopener noreferrer" class="text-orange hover:underline">EPA's construction and demolition materials guidance</a> covers how restricted commercial waste categories are handled at licensed facilities. For the complete accepted and prohibited breakdown, see <a href="/blog/what-can-you-put-in-a-roll-off-dumpster" class="text-orange hover:underline">what can you put in a roll-off dumpster</a>.</p>

<h2 id="when-to-skip">When the Roll-Off Is the Wrong Tool</h2>

<p>I will tell you when to skip it.</p>

<p><strong>If you need ongoing waste pickup, a roll-off is not your product.</strong> A roll-off container is a project tool — one-time debris accumulation, defined endpoint, haul it away. If your business generates regular waste and needs weekly or bi-weekly pickup, that is a commercial dumpster service on a subscription model. Different container type, different truck, different company, entirely different pricing structure. A roll-off sitting on your lot for six months is not a service. It is a very expensive parking space.</p>

<p><strong>If the project is primarily hazardous material.</strong> No licensed roll-off provider takes paint, solvents, asbestos, lead paint, or anything classified as hazardous waste in a standard container. Commercial buildings constructed before 1978 commonly contain asbestos in flooring, ceiling tiles, insulation, and fireproofing. If there is any possibility of asbestos-containing materials, a licensed abatement contractor handles that before any demo crew touches the structure, and the dumpster goes on order after abatement is complete — not before. The <a href="https://www.epa.gov/asbestos" target="_blank" rel="noopener noreferrer" class="text-orange hover:underline">EPA's asbestos guidance</a> covers commercial building abatement requirements and regulated quantities.</p>

<p><strong>If the scope is too small for a roll-off.</strong> A 10-yard container starts around $280 plus fees for a 7-day rental. If a single office cleanout generates a couple of pieces of furniture and two cubic yards of general debris, a junk removal service that charges by volume — and does the loading themselves — costs less. The roll-off makes financial sense when you have enough debris to justify a 7-day minimum and enough project complexity to need a container onsite for the duration.</p>

<h2 id="booking-questions">Six Questions to Ask Before Booking</h2>

<p>These are worth raising before the container is scheduled — not after it arrives and a budget line does not account for the overage rate.</p>

<ol class="my-4 space-y-3 pl-5 list-decimal text-charcoal">
  <li><strong>Is street placement allowed at this address, and what permit does it require?</strong> Commercial properties in busy areas may have restrictions. Street placement permits typically run $20–$150 depending on municipality. Confirm before booking.</li>
  <li><strong>What is the weight limit, and what is the overage rate?</strong> Get both numbers in writing. For any job involving concrete, tile, or dense debris, this is the number that determines whether the quote matches the invoice.</li>
  <li><strong>How long is the base rental period, and what does an extension cost per day?</strong> Standard is 7–10 days. Commercial projects run long. Negotiate a longer base period upfront rather than paying daily extension rates on week three.</li>
  <li><strong>Are there multiple containers available if the scope grows?</strong> Larger commercial projects sometimes need a second container mid-job. Confirm availability before the first one arrives.</li>
  <li><strong>Is there a surcharge for heavy debris or specific material types?</strong> Concrete and commercial kitchen demolition debris often trigger a material-specific surcharge. Ask at booking, not after the first pull.</li>
  <li><strong>What is the cancellation and rescheduling policy?</strong> Commercial project timelines shift. Same-day cancellations typically carry a $50–$75 fee. Confirm the policy before the container is on the schedule.</li>
</ol>

<p>For more on what to compare between roll-off providers before committing, the <a href="/blog/how-to-choose-a-dumpster-rental-company" class="text-orange hover:underline">dumpster rental company guide</a> covers what to evaluate and what to walk away from. For local pricing and provider availability by city, the <a href="/locations" class="text-orange hover:underline">location guides</a> cover markets across Colorado and Arizona.</p>

<h2 id="faq">Straight Answers</h2>

<h3>How much does a commercial dumpster rental cost?</h3>
<p>Commercial dumpster rental pricing matches residential: $380–$650 all-in for a 20-yard container in most Front Range markets, $450–$780 for a 30-yard. The base rate does not include fuel surcharges ($15–$35), disposal fees ($10–$30), or weight overage charges ($65–$95 per ton over the included limit). Get a written, itemized quote before committing.</p>

<h3>What size dumpster do I need for a commercial renovation?</h3>
<p>Most commercial renovations — office build-outs, retail tenant improvements, restaurant remodels — land in the 20- to 30-yard range. The 20-yard handles standard office and retail jobs without heavy structural demo. Step to a 30-yard for full gut renovations or any job with significant concrete, tile, or structural demolition.</p>

<h3>Do I need a permit for a commercial dumpster?</h3>
<p>Placement on private commercial property — a business parking lot or loading dock — typically does not require a permit. Street placement in front of a commercial property almost always does. Permits run $20–$150 depending on municipality. Confirm with your city or county permit office before the container is scheduled.</p>

<h3>Can I keep a roll-off container on-site for more than two weeks?</h3>
<p>Yes. Most providers extend at $5–$15 per day past the base rental period. For projects running longer than two weeks, negotiate a longer base period at booking — the daily extension rate is typically higher than what a longer upfront period costs. Confirm the extension policy in the written quote.</p>

<h3>What materials are prohibited in a commercial dumpster?</h3>
<p>The prohibited list matches residential: paint, motor oil, solvents, batteries, propane tanks, tires, appliances with refrigerants, asbestos-containing materials, and hazardous waste. Commercial jobs also commonly generate fluorescent lighting tubes and electronics, both of which require separate disposal at certified recycling facilities.</p>

<h3>What is the difference between a roll-off and a commercial dumpster service?</h3>
<p>A roll-off is a project tool — a one-time container rental with a defined start and end date. A commercial dumpster service is an ongoing subscription with a permanent container serviced on a regular schedule. If the need is recurring waste pickup, a roll-off is the wrong product. If the need is a one-time project, it is exactly right.</p>

<h3>How fast can I get a commercial dumpster delivered?</h3>
<p>Same-day delivery is available from most roll-off providers at a premium of $50–$100 above standard rates. Next-day delivery is standard when ordered before midday. For planned commercial projects, booking two to three days ahead typically gets better availability, a wider choice of container sizes, and a better rate.</p>

<p>The container is the easy part of a commercial project. Three site managers debating where it should go is the hard part. Give us a call — we will sort out the container. The committee is on you.</p>
`,
  },
]
