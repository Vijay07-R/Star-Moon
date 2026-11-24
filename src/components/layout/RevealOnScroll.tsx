import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Fades and slides page content in as it scrolls into view, with a small stagger
 * for items in a grid. Works on every page without per-element markup:
 *  - grid items (cards, gallery tiles, price-list blocks) reveal one after another
 *  - other blocks inside a section container reveal as a whole
 * Anything inside [data-no-reveal] is skipped (e.g. the home hero, which has its own entrance).
 *
 * Content is only hidden once JS has run and motion is allowed, and the attribute is
 * removed after the reveal so hover transitions on cards keep working.
 */
const TARGETS = ['main .container-page > :not(.grid):not(:has(.grid))', 'main .grid > *'].join(', ')
const STAGGER_MS = 90
const MAX_DELAY_MS = 450

export default function RevealOnScroll() {
  const { pathname } = useLocation()

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const elements = Array.from(document.querySelectorAll<HTMLElement>(TARGETS)).filter(
      (el) => !el.closest('[data-no-reveal]'),
    )
    const timers: number[] = []

    const finish = (el: HTMLElement) => {
      el.removeAttribute('data-reveal')
      el.style.removeProperty('--reveal-delay')
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          const el = entry.target as HTMLElement
          observer.unobserve(el)
          el.dataset.reveal = 'shown'
          const delay = parseInt(el.style.getPropertyValue('--reveal-delay')) || 0
          timers.push(window.setTimeout(() => finish(el), 900 + delay))
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    )

    for (const el of elements) {
      const siblings = el.parentElement?.matches('.grid') ? Array.from(el.parentElement.children) : []
      const delay = Math.min(Math.max(siblings.indexOf(el), 0) * STAGGER_MS, MAX_DELAY_MS)
      el.style.setProperty('--reveal-delay', `${delay}ms`)
      el.dataset.reveal = 'hidden'
      observer.observe(el)
    }

    return () => {
      observer.disconnect()
      timers.forEach(window.clearTimeout)
      elements.forEach(finish)
    }
  }, [pathname])

  return null
}
