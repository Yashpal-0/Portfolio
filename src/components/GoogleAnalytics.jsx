import { useEffect } from 'react'

const GoogleAnalytics = () => {
  useEffect(() => {
    // Check if we're in development mode or if GA tracking ID is not set
    const trackingId = import.meta.env.VITE_GA_TRACKING_ID || 'G-XXXXXXXXXX'
    
    // Only load GA in production or if tracking ID is properly set
    if (trackingId === 'G-XXXXXXXXXX' && import.meta.env.DEV) {
      console.log('Google Analytics: Tracking ID not set, skipping GA initialization')
      return
    }

    // Google Analytics 4 (GA4) tracking code
    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`
    document.head.appendChild(script)

    // Initialize gtag
    window.dataLayer = window.dataLayer || []
    function gtag() {
      window.dataLayer.push(arguments)
    }
    window.gtag = gtag
    gtag('js', new Date())
    gtag('config', trackingId, {
      page_title: document.title,
      page_location: window.location.href,
    })

    // Track page views on route changes
    const handleRouteChange = () => {
      gtag('config', trackingId, {
        page_title: document.title,
        page_location: window.location.href,
      })
    }

    // Listen for popstate events (back/forward navigation)
    window.addEventListener('popstate', handleRouteChange)

    // Cleanup
    return () => {
      window.removeEventListener('popstate', handleRouteChange)
    }
  }, [])

  return null
}

export default GoogleAnalytics
