import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Scrolls to the top when the page changes, or to the element matching the URL hash
 * (e.g. /contact#appointment). Query-string-only changes such as filters keep the scroll position.
 */
export default function ScrollManager() {
  const { pathname, hash, key } = useLocation()

  useEffect(() => {
    if (!hash) window.scrollTo(0, 0)
  }, [pathname, hash])

  useEffect(() => {
    if (!hash) return
    // Wait a tick so the target page has rendered.
    const timer = window.setTimeout(() => {
      document.getElementById(hash.slice(1))?.scrollIntoView({ block: 'start' })
    }, 50)
    return () => window.clearTimeout(timer)
  }, [pathname, hash, key])

  return null
}
