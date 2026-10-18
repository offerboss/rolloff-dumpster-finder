'use client'

import { useEffect, useState } from 'react'
import Script from 'next/script'
import { getLandingPage, getUtmParams, getReferrer } from '@/lib/rdf-attribution'

// RDF survey pilot — two resource articles. Each instance gets a unique DOM id
// (survey ID + placement) so form_embed.js resizes and routes postMessage
// traffic for every copy independently.
const SURVEY_ID = 'WgVkZYl4tP4ayvQI11V1'
const SITE_NAME = 'Rolloff Dumpster Finder'

// Bootstrap height passed to GHL. form_embed.js overrides this once the
// survey reports its real per-slide size via postMessage.
const INITIAL_HEIGHT = 500

// Skeleton height shown before the iframe src is computed client-side.
// Smaller than INITIAL_HEIGHT — it is our loading state choice, not a claim
// about the survey's rendered height.
const SKELETON_HEIGHT = 320

export type SurveyPlacement =
  | 'mid_article'
  | 'bottom_article'
  | 'get_quote_page'
  | 'location_hub'
  | 'city_page'
  | 'provider_directory'
  | 'homepage'

interface RDFLeadSurveyProps {
  headline: string
  description: string
  placement: SurveyPlacement
  /** URL path of the article, e.g. "/resources/20-yard-dumpster-rental". */
  sourcePage: string
  /** Clean article title for attribution — not the full <title> tag. */
  sourceTitle: string
  className?: string
}

export default function RDFLeadSurvey({
  headline,
  description,
  placement,
  sourcePage,
  sourceTitle,
  className = '',
}: RDFLeadSurveyProps) {
  const instanceId = `${SURVEY_ID}-${placement}`
  const baseSrc = `https://api.leadconnectorhq.com/widget/survey/${SURVEY_ID}`

  // Attribution params are browser-only (localStorage, document.referrer,
  // current URL query string). The iframe is not rendered at all until those
  // params are ready — SSR and the first client render both emit no iframe,
  // so there is no hydration mismatch. The attributed src mounts once in the
  // effect below.
  const [src, setSrc] = useState<string | null>(null)

  useEffect(() => {
    const params = new URLSearchParams()
    params.set('rdf_source_site', SITE_NAME)
    params.set('rdf_source_page', sourcePage)
    params.set('rdf_source_title', sourceTitle)
    params.set('rdf_cta_placement', placement)

    const landingPage = getLandingPage()
    if (landingPage) params.set('rdf_landing_page', landingPage)

    for (const [key, value] of Object.entries(getUtmParams())) {
      params.set(key, value)
    }

    const referrer = getReferrer()
    if (referrer) params.set('rdf_referrer', referrer)

    setSrc(`${baseSrc}?${params.toString()}`)
    // sourcePage/sourceTitle/placement are stable per instance — intentionally
    // run once on mount.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className={className}>
      <div className="bg-[#F5F4F0] border border-[#E8E4DE] rounded-2xl p-4 sm:p-6">
        <div className="w-8 h-[3px] bg-orange rounded-sm mb-4" />
        <h2 className="text-xl sm:text-2xl font-bold text-charcoal mb-1.5">{headline}</h2>
        <p className="text-[#6B7280] text-sm sm:text-base mb-4">{description}</p>
        <div
          className="rounded-xl overflow-hidden bg-white"
          style={!src ? { minHeight: SKELETON_HEIGHT } : undefined}
        >
          {src && (
            <iframe
              src={src}
              id={`inline-${instanceId}`}
              style={{
                width: '100%',
                height: `${INITIAL_HEIGHT}px`,
                border: 'none',
                borderRadius: '8px',
              }}
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name={`RDF Lead Survey — ${placement}`}
              data-height={String(INITIAL_HEIGHT)}
              data-layout-iframe-id={`inline-${instanceId}`}
              data-form-id={SURVEY_ID}
              data-cookie-consent="true"
              data-cookie-consent-provider="auto"
              title={headline}
              className="w-full"
            />
          )}
        </div>
      </div>
      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="afterInteractive" />
    </div>
  )
}
