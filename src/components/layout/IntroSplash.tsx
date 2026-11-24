import { useCallback, useEffect, useState } from 'react'
import type { CSSProperties } from 'react'
import logoMark from '../../assets/brand/logo-mark.webp'
import logoScript from '../../assets/brand/logo-script.webp'

/**
 * Opening animation shown once per browser session:
 * the logo turns in with a raised 3D look, a string of pearls draws in like a pearl hair clip,
 * a gloss sweeps across the logo, the name fades in, then the screen splits open onto the site.
 * Skipped entirely when the visitor's device asks for reduced motion.
 */
const SEEN_KEY = 'sm-intro-seen'
const HOLD_MS = 3300 // when the opening starts
const OPEN_MS = 1000 // how long the split takes

// Pearl clip: points along a curve in a 420×520 design box (behind the logo, rising to the right)
const PEARLS = (() => {
  const n = 24
  const p0 = { x: 34, y: 286 }
  const c = { x: 120, y: 70 }
  const p1 = { x: 352, y: 92 }
  return Array.from({ length: n }, (_, i) => {
    const t = i / (n - 1)
    const x = (1 - t) ** 2 * p0.x + 2 * (1 - t) * t * c.x + t ** 2 * p1.x
    const y = (1 - t) ** 2 * p0.y + 2 * (1 - t) * t * c.y + t ** 2 * p1.y
    return { x, y, r: 6.5 }
  }).concat([
    { x: 372, y: 70, r: 15 },
    { x: 388, y: 104, r: 14 },
    { x: 360, y: 128, r: 13 },
  ])
})()
const WIRE = `M 34 286 Q 120 70 352 92`

function shouldShow() {
  try {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false
    return sessionStorage.getItem(SEEN_KEY) !== '1'
  } catch {
    return false
  }
}

export default function IntroSplash() {
  const [stage, setStage] = useState<'hidden' | 'playing' | 'opening'>(() => (shouldShow() ? 'playing' : 'hidden'))

  const open = useCallback(() => {
    setStage((s) => (s === 'playing' ? 'opening' : s))
  }, [])

  useEffect(() => {
    if (stage === 'hidden') return
    const root = document.documentElement
    if (stage === 'playing') {
      try {
        sessionStorage.setItem(SEEN_KEY, '1')
      } catch {
        /* private mode: the intro may show again, which is fine */
      }
      root.classList.add('intro-playing')
      const t = window.setTimeout(open, HOLD_MS)
      return () => window.clearTimeout(t)
    }
    // opening: let the page's own entrance animations start, then remove the overlay
    root.classList.remove('intro-playing')
    const t = window.setTimeout(() => setStage('hidden'), OPEN_MS + 50)
    return () => window.clearTimeout(t)
  }, [stage, open])

  useEffect(() => () => document.documentElement.classList.remove('intro-playing'), [])

  if (stage === 'hidden') return null
  const opening = stage === 'opening'

  return (
    <div className={`intro ${opening ? 'intro--opening' : ''}`} role="presentation">
      {/* the two halves that split apart */}
      <div className="intro__half intro__half--top" />
      <div className="intro__half intro__half--bottom" />

      <div className="intro__content">
        <div className="intro__scale">
          <div className="intro__box">
            {/* gold wire + pearls (behind the logo) */}
            <svg className="intro__wire" viewBox="0 0 420 520" aria-hidden>
              <defs>
                <linearGradient id="intro-gold" x1="0" x2="1">
                  <stop offset="0" stopColor="#9b7650" />
                  <stop offset="0.5" stopColor="#f1dcb2" />
                  <stop offset="1" stopColor="#9b7650" />
                </linearGradient>
              </defs>
              <path d={WIRE} fill="none" stroke="url(#intro-gold)" strokeWidth="5" strokeLinecap="round" pathLength={1} />
            </svg>
            {PEARLS.map((pl, i) => (
              <span
                key={i}
                className={`intro__pearl ${pl.r > 10 ? 'intro__pearl--big' : ''}`}
                style={
                  {
                    left: `${(pl.x / 420) * 100}%`,
                    top: `${(pl.y / 520) * 100}%`,
                    width: pl.r * 2,
                    height: pl.r * 2,
                    '--d': `${700 + i * 38}ms`,
                  } as CSSProperties
                }
              />
            ))}

            {/* the logo, raised in 3D, with a gloss sweep clipped to its shape */}
            <div className="intro__logo3d">
              <img src={logoMark} alt="Star Moon Beauty Salon & Studio" className="intro__logo" draggable={false} />
              <span className="intro__gloss" style={{ maskImage: `url(${logoMark})`, WebkitMaskImage: `url(${logoMark})` } as CSSProperties} />
            </div>
          </div>

          <img src={logoScript} alt="Beautician & MakeUp Artist" className="intro__script" draggable={false} />
          <p className="intro__name">Star Moon</p>
          <p className="intro__tag">Beauty Salon &amp; Studio</p>
        </div>
      </div>

      <button type="button" className="intro__skip" onClick={open}>
        Skip
      </button>
    </div>
  )
}
