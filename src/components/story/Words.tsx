import type { CSSProperties, ElementType } from 'react'
import { clamp } from './motion'

/** Words that fade in and un-blur one after another as t goes 0→1 (scroll-driven). */
export function BlurWords({ text, t, className = '' }: { text: string; t: number; className?: string }) {
  const words = text.split(' ')
  const n = words.length
  return (
    <span className={className}>
      {words.map((w, i) => {
        const k = clamp(t * (n + 1) - i)
        return (
          <span
            key={i}
            className="inline-block whitespace-pre"
            style={{ opacity: k, filter: k < 0.99 ? `blur(${(1 - k) * 10}px)` : undefined, transform: `translateY(${(1 - k) * 12}px)` }}
          >
            {w + (i < n - 1 ? ' ' : '')}
          </span>
        )
      })}
    </span>
  )
}

/** Words that go from faint to full colour one by one as t goes 0→1 (scroll-driven). */
export function FillWords({
  text,
  t,
  offset = 0,
  total,
  className = '',
}: {
  text: string
  t: number
  offset?: number
  total: number
  className?: string
}) {
  const words = text.split(' ')
  return (
    <span className={className}>
      {words.map((w, i) => {
        const k = clamp(t * total - (offset + i))
        return (
          <span key={i} style={{ opacity: 0.16 + k * 0.84, transition: 'opacity 0.15s linear' }}>
            {w}
            {i < words.length - 1 ? ' ' : ''}
          </span>
        )
      })}
    </span>
  )
}

/** Text whose words blur in one after another when the page loads (time-based). */
export function BlurInText({
  text,
  as: Tag = 'span',
  className = '',
  delay = 0,
  step = 110,
}: {
  text: string
  as?: ElementType
  className?: string
  delay?: number
  step?: number
}) {
  const words = text.split(' ')
  return (
    <Tag className={className}>
      {words.map((w, i) => (
        <span key={i} className="anim-blur-in inline-block" style={{ '--delay': `${delay + i * step}ms` } as CSSProperties}>
          {w}
          {i < words.length - 1 ? ' ' : ''}
        </span>
      ))}
    </Tag>
  )
}
