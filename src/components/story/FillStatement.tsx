import { useRef } from 'react'
import { clamp, prefersReducedMotion, useViewProgress } from './motion'
import { FillWords } from './Words'

const defaultTags = ['Beautiful', 'Confident', 'Glowing', 'Elegant']
const tagSpots = [
  { x: '4%', y: '6%', dot: 'bg-beige', dur: '6s' },
  { x: '82%', y: '2%', dot: 'bg-burgundy', dur: '7.2s' },
  { x: '8%', y: '88%', dot: 'bg-beige-dark', dur: '6.6s' },
  { x: '78%', y: '92%', dot: 'bg-burgundy', dur: '7.8s' },
]

/**
 * A large statement whose words fill with colour as it scrolls up the screen,
 * with a few floating tags around it (same style as the end of the home story).
 */
export default function FillStatement({
  eyebrow,
  text,
  highlight,
  tags = defaultTags,
  className = 'bg-cream',
}: {
  eyebrow?: string
  text: string
  /** last words, shown in burgundy italic */
  highlight?: string
  tags?: string[]
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = prefersReducedMotion()
  const p = useViewProgress(ref, 0.9, 0.35, !reduce)
  const n1 = text.split(' ').length
  const total = n1 + (highlight ? highlight.split(' ').length : 0)

  return (
    <section data-no-reveal className={`overflow-hidden py-24 md:py-36 ${className}`}>
      <div ref={ref} className="relative mx-auto max-w-5xl px-6 md:px-16">
        {tags.slice(0, 4).map((tag, i) => (
          <span
            key={tag}
            className="absolute hidden md:block"
            style={{ left: tagSpots[i].x, top: tagSpots[i].y, opacity: clamp(p * 2.2 - i * 0.15) }}
          >
            <span
              className="anim-float flex items-center gap-1.5 rounded-full border border-beige/50 bg-white/80 px-3 py-1.5 text-xs font-medium text-espresso shadow-sm backdrop-blur-sm"
              style={{ animationDuration: tagSpots[i].dur }}
            >
              <span className={`h-2 w-2 rounded-full ${tagSpots[i].dot}`} /> {tag}
            </span>
          </span>
        ))}
        {eyebrow && (
          <p className="mb-6 text-center text-xs font-bold tracking-[0.3em] text-beige-dark uppercase" style={{ opacity: clamp(p * 3) }}>
            {eyebrow}
          </p>
        )}
        <p className="text-center leading-[1.25] font-medium tracking-tight text-espresso" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.7rem)' }}>
          <FillWords text={text} t={p} total={total} />
          {highlight && (
            <>
              {' '}
              <FillWords text={highlight} t={p} offset={n1} total={total} className="font-serif font-semibold text-burgundy italic" />
            </>
          )}
        </p>
      </div>
    </section>
  )
}
