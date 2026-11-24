import { useEffect } from 'react'

/**
 * 3D tilt for anything marked with `data-tilt`: the element leans toward the mouse
 * and a soft light follows the cursor. `data-tilt="hero"` leans further and its
 * children can sit at different depths (see the home hero photo).
 * Only runs on devices with a real mouse, and never when reduced motion is requested.
 */
const MAX_TILT_DEG = 8
const MAX_TILT_HERO_DEG = 12

export default function TiltEffect() {
  useEffect(() => {
    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!canHover || reduce) return

    let current: HTMLElement | null = null
    let frame = 0

    const reset = (el: HTMLElement) => {
      el.style.removeProperty('transform')
      el.removeAttribute('data-tilt-active')
    }

    const onMove = (e: PointerEvent) => {
      const el = (e.target as Element | null)?.closest<HTMLElement>('[data-tilt]') ?? null
      if (current && current !== el) reset(current)
      // Wait until the scroll-in animation has finished before tilting.
      current = el && !el.hasAttribute('data-reveal') ? el : null
      if (!current) return

      const target = current
      const { clientX, clientY } = e
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const r = target.getBoundingClientRect()
        const px = (clientX - r.left) / r.width - 0.5
        const py = (clientY - r.top) / r.height - 0.5
        const max = target.dataset.tilt === 'hero' ? MAX_TILT_HERO_DEG : MAX_TILT_DEG
        target.style.transform = `perspective(1000px) rotateX(${(-py * max).toFixed(2)}deg) rotateY(${(px * max).toFixed(2)}deg)`
        target.style.setProperty('--gx', `${((px + 0.5) * 100).toFixed(1)}%`)
        target.style.setProperty('--gy', `${((py + 0.5) * 100).toFixed(1)}%`)
        target.setAttribute('data-tilt-active', '')
      })
    }

    const onLeave = () => {
      if (current) reset(current)
      current = null
    }

    document.addEventListener('pointermove', onMove, { passive: true })
    document.documentElement.addEventListener('pointerleave', onLeave)
    return () => {
      cancelAnimationFrame(frame)
      document.removeEventListener('pointermove', onMove)
      document.documentElement.removeEventListener('pointerleave', onLeave)
      if (current) reset(current)
    }
  }, [])

  return null
}
