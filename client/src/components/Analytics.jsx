import { useEffect } from 'react'

// ============================================
// ANALYTICS INTEGRATION
// Uncomment the provider you want to use:
//
// Option 1: Vercel Analytics
//   npm install @vercel/analytics
//   import { Analytics } from '@vercel/analytics/react'
//   Then add <Analytics /> in App.jsx
//
// Option 2: Google Analytics (gtag)
//   Add your GA_MEASUREMENT_ID below
//
// Option 3: Custom event tracking
//   Use trackEvent() anywhere in your app
// ============================================

const GA_ID = '' // e.g. 'G-XXXXXXXXXX'

export function useAnalytics() {
  useEffect(() => {
    if (!GA_ID) return

    // Load gtag script
    const script = document.createElement('script')
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
    script.async = true
    document.head.appendChild(script)

    window.dataLayer = window.dataLayer || []
    function gtag() { window.dataLayer.push(arguments) }
    gtag('js', new Date())
    gtag('config', GA_ID)

    return () => document.head.removeChild(script)
  }, [])
}

export function trackEvent(name, params = {}) {
  if (window.gtag) {
    window.gtag('event', name, params)
  }
}

// Vercel Analytics component placeholder
// Install: npm install @vercel/analytics
// Then uncomment below and add <VercelAnalytics /> in App
// import { Analytics as VercelAnalytics } from '@vercel/analytics/react'
// export { VercelAnalytics }
