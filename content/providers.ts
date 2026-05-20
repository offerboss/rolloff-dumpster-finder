export interface Provider {
  id: string
  slug: string
  name: string
  state: string
  serviceAreas: string[]
  cities: string[]
  dumpsterSizes: string[]
  debrisTypes: string[]
  phone: string | null
  website: string | null
  featured: boolean
  description: string
  logoUrl: string | null
  ctaLink: string | null
  verified: boolean
}

export const coloradoProviders: Provider[] = []
