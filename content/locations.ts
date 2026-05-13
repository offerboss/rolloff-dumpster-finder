// ─────────────────────────────────────────────────────────────
//  City location data
//  To add a new city: add an entry to cityLocations below.
//  The page template at /app/locations/[slug]/page.tsx will
//  automatically generate a static route for every slug here.
// ─────────────────────────────────────────────────────────────

export interface PricingRow {
  size: string
  uses: string
  range: string
}

export interface ProjectCard {
  number: string
  name: string
  description: string
}

export interface FaqItem {
  question: string
  answer: string
}

export interface CityLocation {
  slug: string
  cityName: string
  stateName: string
  stateAbbr: string
  metaTitle: string
  metaDescription: string
  primaryKeyword: string
  secondaryKeywords: string[]
  heroH1: string
  heroSubheadline: string
  introParagraphs: string[]
  pricingGuide: PricingRow[]
  projects: ProjectCard[]
  placementIntro: string
  placementNotes: string[]
  neighborhoods: string[]
  nearbyCities: string[]
  faq: FaqItem[]
  latitude?: number
  longitude?: number
}

export const cityLocations: CityLocation[] = [
  // ─── DENVER ───────────────────────────────────────────────
  {
    slug: 'denver-co-dumpster-rental',
    cityName: 'Denver',
    stateName: 'Colorado',
    stateAbbr: 'CO',
    metaTitle: 'Roll Off Dumpster Rental in Denver, CO | Sizes, Costs & Local Guide',
    metaDescription:
      'Need a roll off dumpster rental in Denver, CO? Compare dumpster sizes, estimated costs, common project uses, placement tips, and local Denver rental considerations.',
    primaryKeyword: 'roll off dumpster rental Denver',
    secondaryKeywords: [
      'dumpster rental Denver',
      'dumpster rental Denver CO',
      'roll off dumpster Denver',
      'roll off dumpster rental Denver CO',
      'roll-off dumpster rental Denver',
      'Denver roll off dumpster rental',
      'Denver dumpster rental',
      '10 yard dumpster rental Denver',
      '20 yard dumpster rental Denver',
      '30 yard dumpster rental Denver',
      'construction dumpster Denver',
      'roofing dumpster Denver',
      'residential dumpster rental Denver',
    ],
    heroH1: 'Roll Off Dumpster Rental in Denver, Colorado',
    heroSubheadline:
      'Find roll off dumpster rental options for home cleanouts, remodels, roofing debris, construction jobs, yard waste, and demolition projects in Denver and the surrounding metro.',
    introParagraphs: [
      "Denver is a city of active renovation and older housing stock. Many neighborhoods have homes built from the early 1900s through the mid-century, and full gut renovations are a regular part of life in Capitol Hill, Baker, Wash Park, Five Points, Highlands, Sunnyside, Berkeley, and Park Hill. Whether you are updating a century-old craftsman, clearing an estate, or gutting a duplex kitchen, a roll off dumpster rental is one of the most practical ways to manage the volume of debris that comes out of an older Denver home without making thirty trips to the landfill.",
      'Infill development and active construction around RiNo, LoDo, Cherry Creek, and downtown Denver continue to drive demand for construction-grade containers. Smaller lot sizes and urban density in many Denver neighborhoods mean dumpsters often need to go in a driveway, down an alley, or in a designated area — not the wide open suburban front yard that a lot of rental guides assume. Planning where the container lands before it arrives makes the whole rental go smoother.',
      'The broader Denver metro — Lakewood, Aurora, Arvada, Wheat Ridge, Englewood, Littleton, Westminster, Thornton, and Commerce City — sees steady dumpster rental demand from suburban cleanouts, residential remodels, roofing jobs, and rental property turnovers. Rolloff Dumpster Finder helps connect Denver-area customers with roll off dumpster rental options sized for the project at hand, not just the next size up.',
    ],
    pricingGuide: [
      {
        size: '10 Yard',
        uses: 'Small cleanouts, single-room remodels, minor roofing jobs, garage cleanouts',
        range: '$280–$480 / week',
      },
      {
        size: '15 Yard',
        uses: 'Bathroom remodels, medium cleanouts, yard debris and landscaping waste',
        range: '$320–$540 / week',
      },
      {
        size: '20 Yard',
        uses: 'Kitchen remodels, roofing tear-offs, basement cleanouts, deck removal',
        range: '$380–$650 / week',
      },
      {
        size: '30 Yard',
        uses: 'Large home renovations, estate cleanouts, mixed construction debris',
        range: '$450–$780 / week',
      },
      {
        size: '40 Yard',
        uses: 'Major construction, commercial renovation, large demolition jobs',
        range: '$580–$1,100+ / week',
      },
    ],
    projects: [
      {
        number: '01',
        name: 'Home Cleanouts',
        description:
          'Clearing furniture, junk, and accumulated debris from older Denver homes. Many Capitol Hill, Park Hill, and Highlands properties have decades of storage that comes out fast once you have a container in the driveway.',
      },
      {
        number: '02',
        name: 'Construction Debris',
        description:
          'Framing lumber, drywall, insulation, and mixed C&D waste from active builds and renovations. RiNo, LoDo, and Cherry Creek see constant construction and conversion projects that produce steady container demand.',
      },
      {
        number: '03',
        name: 'Roofing Tear-Offs',
        description:
          'Denver sees significant hail activity — roof replacements are common across the metro. A 20-yard container handles most residential roofing jobs, but shingles are heavy. Always confirm weight limits before booking.',
      },
      {
        number: '04',
        name: 'Kitchen & Bath Remodels',
        description:
          "Older Denver housing stock means full kitchen and bathroom gut jobs are routine. Cabinets, tile, drywall, fixtures, and flooring add up fast. A 10 or 15-yard container fits most single-room remodels; a 20-yard if you're doing both at once.",
      },
      {
        number: '05',
        name: 'Basement Cleanouts',
        description:
          'Many Denver homes have unfinished or under-used basements that accumulate decades of stuff. Estate cleanouts and pre-sale clearances regularly require 20 or 30-yard containers for basement-heavy homes in the Highlands, Park Hill, and Wash Park areas.',
      },
      {
        number: '06',
        name: 'Garage Cleanouts',
        description:
          'Detached garages are common throughout Denver neighborhoods. A single-car detached garage cleanout usually fits in a 10-yard container. A double garage or combined garage-and-basement cleanout typically needs a 20-yard.',
      },
      {
        number: '07',
        name: 'Yard Waste & Landscaping',
        description:
          'Xeriscape conversions, turf removals, and landscaping overhauls are common in Denver as water costs rise. Yard debris hauls lighter than construction waste, but volume adds up. A 10 or 15-yard handles most residential landscaping jobs.',
      },
      {
        number: '08',
        name: 'Estate Cleanouts',
        description:
          "Multi-generational homes across the Denver metro often carry 40 or 50 years of accumulated belongings. Estate cleanouts frequently need a 20 or 30-yard container, and sometimes two pulls if the home is large or hasn't been cleared in years.",
      },
      {
        number: '09',
        name: 'Rental Property Cleanouts',
        description:
          'High-density rental areas like Capitol Hill, Congress Park, Baker, and LoHi see regular tenant turnover and property cleanouts. A 10-yard typically handles an apartment unit; a 20-yard for a full duplex or triplex.',
      },
      {
        number: '10',
        name: 'Commercial Renovation',
        description:
          "Denver's active commercial construction market — office conversions, retail buildouts, and restaurant renovations — regularly needs 30 and 40-yard containers for mixed debris hauls. Commercial pricing and permit requirements may differ from residential.",
      },
    ],
    placementIntro:
      'Dumpster placement in Denver depends on your property layout, the neighborhood, and what the City and County of Denver permits for your specific situation.',
    placementNotes: [
      'Private driveway placement is the most common option and typically the simplest. If your driveway has enough length and clearance for the delivery truck, this avoids permit requirements in most cases.',
      'Alley access is common in older Denver neighborhoods and can work well when the alley is wide enough for the truck and free of overhead obstructions.',
      'Street or right-of-way placement may require a permit from the City and County of Denver. Check with your rental provider or the Denver Department of Public Works before placing a container on a public street.',
      'Avoid blocking sidewalks, bike lanes, fire hydrants, ADA curb ramps, or active traffic lanes regardless of placement location.',
      'Denser neighborhoods like Capitol Hill, Congress Park, LoHi, and Baker often have limited driveway and alley space. Smaller containers or careful coordination with the provider may be needed.',
      'When in doubt, confirm placement requirements with your rental provider before scheduling delivery — not after the truck arrives.',
    ],
    neighborhoods: [
      'Capitol Hill',
      'Highlands',
      'LoHi',
      'Berkeley',
      'Sunnyside',
      'Wash Park',
      'Cherry Creek',
      'Park Hill',
      'Five Points',
      'Baker',
      'RiNo',
      'LoDo',
      'City Park',
      'Congress Park',
      'Platt Park',
      'University',
      "Sloan's Lake",
    ],
    nearbyCities: [
      'Lakewood',
      'Aurora',
      'Arvada',
      'Wheat Ridge',
      'Englewood',
      'Littleton',
      'Westminster',
      'Thornton',
      'Commerce City',
      'Glendale',
      'Sheridan',
      'Edgewater',
      'Golden',
    ],
    faq: [
      {
        question: 'How much does a dumpster rental cost in Denver?',
        answer:
          'Dumpster rental prices in Denver vary based on container size, debris type, weight, rental period, and delivery location. A 10-yard container typically runs $280–$480 per week. A 20-yard runs $380–$650. A 30-yard ranges from $450–$780. These are general estimates — your actual quote will depend on your project specifics and provider availability.',
      },
      {
        question: 'What size dumpster do I need for a home cleanout in Denver?',
        answer:
          'For a full-home cleanout in Denver, most homeowners find a 20-yard dumpster handles the job comfortably. For a garage-only or single-room cleanout, a 10-yard may be enough. For larger estate cleanouts or homes with heavy accumulated debris, a 30-yard gives you more room without needing a second haul.',
      },
      {
        question: 'Can I put a dumpster on the street in Denver?',
        answer:
          'Street placement in Denver may require a permit from the City and County of Denver. If your driveway or alley can accommodate the container, that is typically the simpler option. Check with your rental provider and the Denver Department of Public Works before placing a container in a public right-of-way.',
      },
      {
        question: 'What dumpster size is best for a roofing project in Denver?',
        answer:
          'A 20-yard dumpster handles most residential roofing tear-offs in Denver. Shingles are heavy — most 20-yard containers have a weight limit of 2–4 tons, and a full roof tear-off can approach or exceed that depending on roof size and material. Confirm the weight limit with your provider before booking a roofing container.',
      },
      {
        question: 'Can I rent a dumpster for concrete, dirt, or brick in Denver?',
        answer:
          'Yes, but heavy debris like concrete, soil, brick, and asphalt typically requires a dedicated heavy-material container with appropriate weight allowances. Standard roll off dumpsters have weight limits that dense materials hit quickly. Let your provider know upfront what you are hauling so they can quote the right container.',
      },
      {
        question: 'How long can I keep a dumpster rental in Denver?',
        answer:
          'Standard dumpster rental periods are typically 7–10 days. Extensions are available at a daily rate. If you know your project will run longer, ask about extended rental pricing upfront — it is often more cost-effective to book a longer window from the start than to extend mid-rental.',
      },
      {
        question: 'Do dumpster rental prices in Denver include disposal fees?',
        answer:
          'Most flat-rate dumpster rental quotes include delivery, the rental period, pickup, and disposal up to the stated weight limit. If your load exceeds the weight limit, you may be charged an overweight fee — typically $40–$200 per extra ton. Always confirm what is included before you confirm the booking.',
      },
      {
        question: 'Are there items I cannot throw in a Denver dumpster?',
        answer:
          'Yes. Paint, chemicals, motor oil, propane tanks, batteries, tires, appliances with refrigerants, asbestos, and hazardous waste are not accepted in standard roll off dumpsters. Electronics restrictions vary by provider. Check with your rental company if you have items you are unsure about.',
      },
      {
        question: 'Do you serve Denver suburbs like Aurora, Lakewood, and Arvada?',
        answer:
          'Yes. Rolloff Dumpster Finder helps customers throughout the Denver metro area, including Aurora, Lakewood, Arvada, Wheat Ridge, Englewood, Littleton, Westminster, Thornton, Commerce City, and other surrounding communities. Availability and pricing may vary by specific delivery location.',
      },
      {
        question: 'How soon can I get a roll off dumpster delivered in Denver?',
        answer:
          'Delivery availability depends on the provider and current demand. Same-week delivery is often possible, and some providers may offer next-day options depending on availability. For planned projects, booking a few days in advance gives you more flexibility on delivery timing.',
      },
    ],
    latitude: 39.7392,
    longitude: -104.9903,
  },

  // ─── COLORADO SPRINGS ─────────────────────────────────────
  {
    slug: 'colorado-springs-co-dumpster-rental',
    cityName: 'Colorado Springs',
    stateName: 'Colorado',
    stateAbbr: 'CO',
    metaTitle: 'Dumpster Rental Colorado Springs CO | Roll-Off Dumpster Finder',
    metaDescription:
      'Find roll-off dumpster rentals in Colorado Springs, CO for cleanouts, roofing, construction, landscaping, and commercial debris. Compare dumpster sizes and request pricing fast.',
    primaryKeyword: 'dumpster rental Colorado Springs',
    secondaryKeywords: [
      'roll off dumpster rental Colorado Springs',
      'Colorado Springs dumpster rental',
      'construction dumpster rental Colorado Springs',
      'residential dumpster rental Colorado Springs',
      'roofing dumpster rental Colorado Springs',
      '10 yard dumpster rental Colorado Springs',
      '20 yard dumpster rental Colorado Springs',
      '30 yard dumpster rental Colorado Springs',
      '40 yard dumpster rental Colorado Springs',
    ],
    heroH1: 'Dumpster Rental in Colorado Springs, Colorado',
    heroSubheadline:
      'Roll-off dumpster rental options for home cleanouts, roofing tear-offs, construction debris, landscaping, and commercial projects in Colorado Springs and El Paso County.',
    introParagraphs: [
      "Colorado Springs is a city of two speeds. Old Colorado City, Ivywild, and the neighborhoods around downtown have homes going back to the late 1800s — the kind that hold a century of accumulated material in basements, detached garages, and closets that were never meant for long-term storage. Briargate, Northgate, and Stetson Hills on the north end are the opposite: newer builds, active renovations, and construction debris stacking up as the city's fastest-growing corridor keeps expanding. Both ends of that spectrum generate containers.",
      "Hail hits the Springs hard. El Paso County ranks among the higher-frequency hail zones in Colorado, which means roofing tear-offs run steady from late spring through fall. A 20-yard container handles most residential roofing jobs, but shingles load heavy. A full strip-and-replace can push or breach a standard weight allowance depending on roof size and materials. Confirm the weight limit before you book — not after the driver drops the container and the scale comes back over.",
      'Military rotation cycles at Fort Carson, Peterson Space Force Base, and the surrounding installations add a steady rhythm of household cleanouts across the Colorado Springs area. A family clearing a home after a four-year tour generates roughly the same debris volume as a small estate cleanout — furniture, accumulated household goods, and whatever ended up in the garage. Rolloff Dumpster Finder helps Colorado Springs-area customers find roll off dumpster rental options sized for the actual job, not just the default upsell.',
    ],
    pricingGuide: [
      {
        size: '10 Yard',
        uses: 'Small garage or room cleanout, minor roofing job, single-bathroom remodel, yard debris',
        range: '$260–$460 / week',
      },
      {
        size: '15 Yard',
        uses: 'Bathroom remodel, medium cleanout, deck removal, landscaping and turf waste',
        range: '$300–$520 / week',
      },
      {
        size: '20 Yard',
        uses: 'Kitchen remodel, roofing tear-off, full-home cleanout, basement and garage debris',
        range: '$360–$620 / week',
      },
      {
        size: '30 Yard',
        uses: 'Large renovation, estate cleanout, new construction cleanup, mixed C&D debris',
        range: '$430–$740 / week',
      },
      {
        size: '40 Yard',
        uses: 'Major construction, commercial renovation, large demolition, multi-unit cleanout',
        range: '$560–$1,050+ / week',
      },
    ],
    projects: [
      {
        number: '01',
        name: 'Home Cleanouts',
        description:
          'Older properties in Old Colorado City, Ivywild, and downtown carry decades of accumulated material. Military relocation cycles at Fort Carson and Peterson Space Force Base also add a steady volume of household cleanouts across the Springs.',
      },
      {
        number: '02',
        name: 'Roofing Tear-Offs',
        description:
          'El Paso County takes regular hail hits. A 20-yard container handles most residential roofing jobs in the Springs, but shingles hit weight limits before they fill the container. Confirm weight allowances before booking.',
      },
      {
        number: '03',
        name: 'Construction Debris',
        description:
          'New construction is active across Northgate, Stetson Hills, and the expanding north side. Framing lumber, drywall, insulation, and mixed C&D waste are standard loads for active builds in Colorado Springs.',
      },
      {
        number: '04',
        name: 'Kitchen & Bath Remodels',
        description:
          "Older Colorado Springs homes — in Broadmoor, Rockrimmon, and the Patty Jewett area — see regular kitchen and bath gut jobs. Cabinets, tile, drywall, and fixtures from a single kitchen remodel typically fill a 10 or 15-yard container.",
      },
      {
        number: '05',
        name: 'Basement & Garage Cleanouts',
        description:
          'Attached two-car garages are standard across most Colorado Springs suburbs. A double-garage cleanout fits a 10 or 15-yard. Homes in older downtown neighborhoods with partial basements often need a 20-yard.',
      },
      {
        number: '06',
        name: 'Estate Cleanouts',
        description:
          'Long-term Colorado Springs residents moving out of larger Broadmoor or Palmer Park homes often need 20 or 30-yard containers. Full estate clearances tend to require more volume than the homeowner expects.',
      },
      {
        number: '07',
        name: 'Yard Waste & Landscaping',
        description:
          'Water restrictions across the Pikes Peak region have made turf removal and xeriscape conversions common. Yard debris hauls light, but soil and sod add weight fast. A 10 or 15-yard handles most residential landscaping jobs.',
      },
      {
        number: '08',
        name: 'Concrete & Heavy Debris',
        description:
          'Patio demolition, driveway removal, and retaining wall teardowns are common in hillside neighborhoods like Rockrimmon and Broadmoor. Dense materials need dedicated containers — standard roll-offs hit weight limits well before the bin is full.',
      },
      {
        number: '09',
        name: 'Rental Property Cleanouts',
        description:
          "Colorado Springs has a large military renter population. Property turnover near Fort Carson, Powers Boulevard, and the east side is steady. A 10-yard handles most single-unit apartment cleanouts; a 20-yard for a duplex or accumulated debris.",
      },
      {
        number: '10',
        name: 'Commercial Renovation',
        description:
          'Downtown Colorado Springs and the Powers Boulevard corridor see regular office, retail, and restaurant renovations. Commercial debris hauls typically need 30 or 40-yard containers for mixed construction waste.',
      },
    ],
    placementIntro:
      'Dumpster placement in Colorado Springs depends on your lot, the neighborhood, and whether the container goes on private property or needs to sit in a public right-of-way.',
    placementNotes: [
      'Most Colorado Springs residential lots have a driveway long enough to accommodate delivery. That is the easiest placement option and typically avoids permit requirements.',
      'Alley access is less common in Colorado Springs than in older Denver neighborhoods. Most customers in Briargate, Northgate, and Stetson Hills are working off driveways.',
      'Street or right-of-way placement may require a permit from the City of Colorado Springs. Check with your provider or the Colorado Springs Development Review office before placing a container on a public street.',
      'Mountain weather is a real factor. Late spring snowstorms and early fall hail can affect both delivery access and your project timeline. Build buffer into your rental period if your project spans a weather window.',
      'Rockrimmon, Broadmoor, and other hillside neighborhoods can have steep or narrow driveways. Confirm truck clearance and turning radius with your provider before scheduling delivery — not while the truck is idling at the end of the street.',
      'When in doubt, confirm placement requirements with your rental provider before scheduling delivery.',
    ],
    neighborhoods: [
      'Old Colorado City',
      'Briargate',
      'Broadmoor',
      'Rockrimmon',
      'Northgate',
      'Stetson Hills',
      'Downtown Colorado Springs',
      'Ivywild',
      'Shooks Run',
      'Austin Bluffs',
      'Chapel Hills',
      'Patty Jewett',
      'Powers',
      'Palmer Park',
    ],
    nearbyCities: [
      'Manitou Springs',
      'Fountain',
      'Security-Widefield',
      'Monument',
      'Cimarron Hills',
      'Peyton',
      'Black Forest',
      'Woodland Park',
      'Pueblo West',
      'Canon City',
    ],
    faq: [
      {
        question: 'How much does dumpster rental cost in Colorado Springs?',
        answer:
          'Dumpster rental prices in Colorado Springs vary based on container size, debris type, weight, rental period, and delivery location. A 10-yard container typically runs $260–$460 per week. A 20-yard runs $360–$620. A 30-yard ranges from $430–$740. These are general estimates — your actual quote will depend on project specifics and provider availability.',
      },
      {
        question: 'What size dumpster do I need for a Colorado Springs home cleanout?',
        answer:
          'For a full-home cleanout in Colorado Springs, most homeowners find a 20-yard dumpster handles the job comfortably. For a garage-only or single-room cleanout, a 10-yard is usually enough. For a large estate cleanout or a home with heavy accumulated debris, a 30-yard gives you room to work without needing a second haul.',
      },
      {
        question: 'Can I rent a dumpster for roofing debris in Colorado Springs?',
        answer:
          'Yes. A 20-yard container handles most residential roofing tear-offs in Colorado Springs. Shingles are heavy — a full strip-and-replace can push or exceed a standard 2-ton weight allowance depending on roof size and material layers. Confirm the weight limit with your provider before booking a roofing container.',
      },
      {
        question: 'Are roll-off dumpsters available for construction projects in Colorado Springs?',
        answer:
          'Yes. Construction dumpster rental is common across the Springs — for active new builds on the growing north side and renovation projects in older neighborhoods like Old Colorado City and downtown. Typical loads include framing lumber, drywall, insulation, and mixed C&D debris.',
      },
      {
        question: 'Can I throw away concrete, dirt, or heavy debris in Colorado Springs?',
        answer:
          'Yes, but dense materials like concrete, soil, brick, and asphalt require a dedicated heavy-material container with appropriate weight allowances. Standard roll-off dumpsters have weight limits that dense debris hits well before the container looks full. Tell your provider upfront what you are hauling so they can quote the right container.',
      },
      {
        question: 'How quickly can I get a dumpster delivered in Colorado Springs?',
        answer:
          'Delivery availability depends on the provider and current demand. Same-week delivery is often possible, and some providers offer next-day options when availability allows. For planned projects, booking a few days ahead gives you more flexibility on delivery date and timing.',
      },
      {
        question: 'Do you serve areas near Colorado Springs like Fountain, Monument, or Manitou Springs?',
        answer:
          'Yes. Rolloff Dumpster Finder helps customers throughout the greater Colorado Springs area, including Fountain, Security-Widefield, Monument, Manitou Springs, Cimarron Hills, Peyton, and other El Paso County communities. Availability and pricing vary by specific delivery location.',
      },
      {
        question: 'What dumpster size is best for a roofing project in Colorado Springs?',
        answer:
          'A 20-yard dumpster is the most common choice for residential roofing jobs in Colorado Springs. If you have a large roof or multiple layers of old shingles, discuss weight limits with your provider before booking — roofing debris is dense, and overweight fees can add up quickly.',
      },
      {
        question: 'How long can I keep a dumpster rental in Colorado Springs?',
        answer:
          'Standard rental periods run 7–10 days. Extensions are available at a daily rate. If you know the project will run long, ask about extended rental pricing upfront — it is typically more cost-effective than adding days after the rental is already open.',
      },
      {
        question: 'Are there items I cannot put in a Colorado Springs dumpster?',
        answer:
          'Yes. Paint, chemicals, motor oil, propane tanks, batteries, tires, appliances containing refrigerants, asbestos, and hazardous waste are not accepted in standard roll-off dumpsters. Electronics restrictions vary by provider. Confirm with your rental company if you have items you are not sure about.',
      },
    ],
    latitude: 38.8339,
    longitude: -104.8214,
  },

  // ─── FUTURE CITIES ────────────────────────────────────────
  // To add a new city, copy an existing block above and update:
  //   slug, cityName, metaTitle, metaDescription, heroH1,
  //   heroSubheadline, introParagraphs, projects,
  //   placementIntro, placementNotes, neighborhoods,
  //   nearbyCities, faq, latitude, longitude
  //
  // Pricing guide ranges can stay the same for Colorado cities
  // or be adjusted based on local market data.
]
