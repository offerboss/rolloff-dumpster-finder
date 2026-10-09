'use client'
import Script from 'next/script'

interface Props {
  formId: string
  formName: string
  dataHeight?: number
}

export default function GhlFormEmbed({
  formId,
  formName,
  dataHeight = 1643,
}: Props) {
  return (
    <>
      <iframe
        src={`https://api.leadconnectorhq.com/widget/form/${formId}`}
        style={{ width: '100%', height: `${dataHeight}px`, border: 'none', borderRadius: '8px' }}
        id={`inline-${formId}`}
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name={formName}
        data-height={dataHeight}
        data-layout-iframe-id={`inline-${formId}`}
        data-form-id={formId}
        data-cookie-consent="true"
        data-cookie-consent-provider="auto"
        title={formName}
      />
      <Script
        src="https://link.msgsndr.com/js/form_embed.js"
        strategy="afterInteractive"
      />
    </>
  )
}
