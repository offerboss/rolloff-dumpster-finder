import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://rolloffdumpsterfinder.com',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://rolloffdumpsterfinder.com/services',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://rolloffdumpsterfinder.com/resources',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://rolloffdumpsterfinder.com/locations',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://rolloffdumpsterfinder.com/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://rolloffdumpsterfinder.com/blog/what-does-a-dumpster-rental-cost',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://rolloffdumpsterfinder.com/locations/denver-co-dumpster-rental',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://rolloffdumpsterfinder.com/locations/colorado-springs-co-dumpster-rental',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://rolloffdumpsterfinder.com/blog/what-can-you-put-in-a-roll-off-dumpster',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://rolloffdumpsterfinder.com/blog/roofing-dumpster-rental',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://rolloffdumpsterfinder.com/locations/fort-collins-co-dumpster-rental',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://rolloffdumpsterfinder.com/locations/boulder-co-dumpster-rental',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://rolloffdumpsterfinder.com/locations/grand-junction-co-dumpster-rental',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://rolloffdumpsterfinder.com/locations/steamboat-springs-co-dumpster-rental',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://rolloffdumpsterfinder.com/blog/how-to-choose-a-dumpster-rental-company',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://rolloffdumpsterfinder.com/blog/how-to-choose-the-right-dumpster-size',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://rolloffdumpsterfinder.com/locations/colorado',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://rolloffdumpsterfinder.com/locations/arizona',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://rolloffdumpsterfinder.com/locations/phoenix-az-dumpster-rental',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://rolloffdumpsterfinder.com/locations/scottsdale-az-dumpster-rental',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://rolloffdumpsterfinder.com/locations/chandler-az-dumpster-rental',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://rolloffdumpsterfinder.com/locations/mesa-az-dumpster-rental',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://rolloffdumpsterfinder.com/locations/tempe-az-dumpster-rental',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://rolloffdumpsterfinder.com/locations/glendale-az-dumpster-rental',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://rolloffdumpsterfinder.com/blog/commercial-dumpster-rental',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://rolloffdumpsterfinder.com/providers',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://rolloffdumpsterfinder.com/providers/colorado',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://rolloffdumpsterfinder.com/providers/arizona',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]
}
