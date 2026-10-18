// Lightweight lead-attribution helpers for the RDF survey pilot.
// Captures which article and which CTA placement produced each GHL survey
// submission. Intentionally minimal — not a full analytics stack.

const LANDING_PAGE_KEY = 'rdf_landing_page'

/**
 * Returns the first RDF page this visitor landed on, stored once in
 * localStorage with no expiry. If this is the browser's first recorded
 * RDF page, that page is stored and returned on every subsequent call.
 *
 * Returns null during SSR or if localStorage is unavailable.
 */
export function getLandingPage(): string | null {
  if (typeof window === 'undefined') return null
  try {
    const existing = window.localStorage.getItem(LANDING_PAGE_KEY)
    if (existing) return existing
    const current = window.location.pathname + window.location.search
    window.localStorage.setItem(LANDING_PAGE_KEY, current)
    return current
  } catch {
    return null
  }
}

/** Reads utm_source / utm_medium / utm_campaign from the current URL, if present. */
export function getUtmParams(): Record<string, string> {
  if (typeof window === 'undefined') return {}
  const params = new URLSearchParams(window.location.search)
  const utm: Record<string, string> = {}
  for (const key of ['utm_source', 'utm_medium', 'utm_campaign']) {
    const value = params.get(key)
    if (value) utm[key] = value
  }
  return utm
}

/** Returns document.referrer if present, otherwise null. */
export function getReferrer(): string | null {
  if (typeof window === 'undefined') return null
  return document.referrer || null
}
