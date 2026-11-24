import { useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'
import { ease, mix, prefersReducedMotion, useViewProgress } from './motion'

/** Classic ornamental divider that draws itself in (gold line, mirrored curls, a diamond at the centre). */
export function Flourish({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 320 40" className={`anim-flourish ${className}`} aria-hidden fill="none" stroke="currentColor" strokeLinecap="round">
      {/* long lines */}
      <path pathLength={1} strokeWidth="1.2" d="M8 20 H112" />
      <path pathLength={1} strokeWidth="1.2" d="M312 20 H208" />
      {/* curls */}
      <path pathLength={1} strokeWidth="1.4" d="M112 20 C126 20 132 8 142 8 C150 8 152 16 146 18 C141 20 138 14 142 12" />
      <path pathLength={1} strokeWidth="1.4" d="M208 20 C194 20 188 8 178 8 C170 8 168 16 174 18 C179 20 182 14 178 12" />
      <path pathLength={1} strokeWidth="1.4" d="M112 20 C126 20 132 32 142 32 C150 32 152 24 146 22 C141 20 138 26 142 28" />
      <path pathLength={1} strokeWidth="1.4" d="M208 20 C194 20 188 32 178 32 C170 32 168 24 174 22 C179 20 182 26 178 28" />
      {/* centre diamond */}
      <path pathLength={1} strokeWidth="1.4" d="M160 10 L170 20 L160 30 L150 20 Z" />
      <circle cx="160" cy="20" r="2.4" fill="currentColor" stroke="none" className="anim-flourish-dot" />
    </svg>
  )
}

/**
 * Turns a card in like the page of a book when it comes into view (staggered by index).
 * Waits for the opening intro to finish so the turn is actually seen.
 */
export function PageTurn({ index, children }: { index: number; children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const [shown, setShown] = useState(() => prefersReducedMotion())

  useEffect(() => {
    if (shown) return
    const el = ref.current
    if (!el) return
    let frame = 0
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        io.disconnect()
        const go = () => {
          if (document.documentElement.classList.contains('intro-playing')) frame = requestAnimationFrame(go)
          else setShown(true)
        }
        go()
      },
      { threshold: 0.25 },
    )
    io.observe(el)
    return () => {
      io.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [shown])

  return (
    <div
      ref={ref}
      style={{
        transform: shown ? 'none' : 'perspective(1200px) rotateY(-95deg)',
        transformOrigin: 'left center',
        opacity: shown ? 1 : 0,
        transition: `transform 1.1s cubic-bezier(0.2, 0.7, 0.2, 1) ${index * 180}ms, opacity 0.5s ease ${index * 180}ms`,
      }}
    >
      {children}
    </div>
  )
}

/** Opens its content in a growing circle as it scrolls into view (like a lens opening). */
export function CircleReveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = prefersReducedMotion()
  const p = useViewProgress(ref, 0.95, 0.4, !reduce)
  const r = mix(8, 75, ease(p))
  return (
    <div ref={ref} className={className} style={{ clipPath: p < 1 ? `circle(${r}% at 50% 50%)` : undefined }}>
      {children}
    </div>
  )
}
