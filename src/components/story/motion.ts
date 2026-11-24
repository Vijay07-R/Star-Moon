import { useEffect, useState } from 'react'
import type { RefObject } from 'react'

export const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v))
/** 0→1 as p goes from a to b */
export const seg = (p: number, a: number, b: number) => clamp((p - a) / (b - a))
export const ease = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2)
export const mix = (a: number, b: number, t: number) => a + (b - a) * t

/** Height of the sticky site header, which pinned scenes sit below. */
export const HEADER_PX = 72

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

/**
 * Scroll progress (0→1) of a tall "track" element whose child is pinned with position: sticky.
 * 0 when the track's top reaches the header, 1 when its bottom reaches the bottom of the screen.
 */
export function usePinnedProgress(trackRef: RefObject<HTMLElement | null>, enabled = true) {
  const [p, setP] = useState(0)
  useEffect(() => {
    if (!enabled) return
    let frame = 0
    const update = () => {
      const el = trackRef.current
      if (!el) return
      const total = el.offsetHeight - (window.innerHeight - HEADER_PX)
      setP(clamp((HEADER_PX - el.getBoundingClientRect().top) / Math.max(total, 1)))
    }
    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [trackRef, enabled])
  return p
}

/**
 * Progress (0→1) of an ordinary element as it travels up the screen:
 * 0 when its top is at `start` of the viewport height, 1 when it reaches `end`.
 */
export function useViewProgress(ref: RefObject<HTMLElement | null>, start = 0.85, end = 0.3, enabled = true) {
  const [p, setP] = useState(enabled ? 0 : 1)
  useEffect(() => {
    if (!enabled) return
    let frame = 0
    const update = () => {
      const el = ref.current
      if (!el) return
      const vh = window.innerHeight
      const top = el.getBoundingClientRect().top
      setP(clamp((vh * start - top) / (vh * (start - end))))
    }
    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [ref, start, end, enabled])
  return p
}

/** Tracks the size of an element (used to lay out pinned scenes). */
export function useElementSize(ref: RefObject<HTMLElement | null>) {
  const [size, setSize] = useState({ w: 1280, h: 720 })
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const ro = new ResizeObserver(([e]) => setSize({ w: e.contentRect.width, h: e.contentRect.height }))
    ro.observe(el)
    return () => ro.disconnect()
  }, [ref])
  return size
}
