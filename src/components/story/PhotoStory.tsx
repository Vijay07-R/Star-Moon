import { useRef } from 'react'
import { ArrowDown } from 'lucide-react'
import { clamp, ease, HEADER_PX, mix, prefersReducedMotion, seg, useElementSize, usePinnedProgress } from './motion'
import { BlurWords } from './Words'

export interface PhotoStoryPoint {
  /** position on the full photo, 0–1 */
  x: number
  y: number
  label: string
}

interface PhotoStoryProps {
  src: string
  alt: string
  /** photo width / height */
  aspect: number
  /** point of the photo to keep centred at the start, and to zoom into at the end (0–1) */
  from: { x: number; y: number; zoom: number }
  to: { x: number; y: number; zoom: number }
  points: PhotoStoryPoint[]
  eyebrow: string
  title: string
  text: string
  title2: string
  text2: string
  /** which side the photo ends up on (desktop) */
  side?: 'left' | 'right'
}

/**
 * A pinned scroll scene in the same style as the home story:
 * a soft portrait in the middle slides to one side and zooms in while a panel opens
 * with labelled points on the photo, blur-in titles and a line that draws down.
 */
export default function PhotoStory(props: PhotoStoryProps) {
  const trackRef = useRef<HTMLDivElement>(null)
  const stageRef = useRef<HTMLDivElement>(null)
  const reduce = prefersReducedMotion()
  const p = usePinnedProgress(trackRef, !reduce)
  const { w, h } = useElementSize(stageRef)
  const stageStyle = { height: `calc(100svh - ${HEADER_PX}px)` }

  if (reduce) {
    return (
      <section data-no-reveal ref={stageRef} style={stageStyle}>
        <Stage {...props} p={1} w={w} h={h} />
      </section>
    )
  }

  return (
    <section ref={trackRef} data-no-reveal className="relative" style={{ height: '300vh' }}>
      <div ref={stageRef} className="sticky" style={{ top: HEADER_PX, ...stageStyle }}>
        <Stage {...props} p={p} w={w} h={h} />
      </div>
    </section>
  )
}

function Stage({ src, alt, aspect, from, to, points, eyebrow, title, text, title2, text2, side = 'left', p, w, h }: PhotoStoryProps & { p: number; w: number; h: number }) {
  const mobile = w < 768
  const right = side === 'right' && !mobile

  const move = ease(seg(p, 0.04, 0.34))
  const panelIn = ease(seg(p, 0.1, 0.36))
  const dotsIn = seg(p, 0.34, 0.44)
  const t1 = seg(p, 0.36, 0.48)
  const lineIn = ease(seg(p, 0.48, 0.6))
  const t2 = seg(p, 0.58, 0.72)

  // Photo box: centred soft portrait → one half of the stage
  const portraitW = mobile ? w * 0.7 : Math.min(w * 0.32, 480)
  const s1 = mobile ? { l: (w - portraitW) / 2, t: h * 0.06, bw: portraitW, bh: h * 0.62 } : { l: (w - portraitW) / 2, t: h * 0.04, bw: portraitW, bh: h * 0.92 }
  const s2 = mobile ? { l: 0, t: 0, bw: w, bh: h * 0.5 } : { l: right ? w / 2 : 0, t: 0, bw: w / 2, bh: h }
  const box = { l: mix(s1.l, s2.l, move), t: mix(s1.t, s2.t, move), bw: mix(s1.bw, s2.bw, move), bh: mix(s1.bh, s2.bh, move) }

  const zoom = mix(from.zoom, to.zoom, move)
  const fx = mix(from.x, to.x, move)
  const fy = mix(from.y, to.y, move)
  const ch = box.bh * zoom
  const cw = ch * aspect
  // never let the photo leave a gap inside its box
  const scaleUp = Math.max(1, box.bw / cw)
  const canvas = {
    width: cw * scaleUp,
    height: ch * scaleUp,
    left: clamp(box.bw * 0.5 - cw * scaleUp * fx, box.bw - cw * scaleUp, 0),
    top: clamp(box.bh * 0.5 - ch * scaleUp * fy, box.bh - ch * scaleUp, 0),
  }

  const inner = mix(30, 100, move)
  const size = mix(48, 160, move)
  const mask = `radial-gradient(ellipse ${size}% ${size * 1.05}% at 50% 45%, #000 ${inner}%, transparent 100%)`

  return (
    <div className="relative h-full w-full overflow-hidden bg-gradient-to-b from-cream to-blush/50">
      {/* Panel */}
      <div
        className={`absolute flex flex-col items-center justify-center bg-gradient-to-b from-blush via-cream to-beige-light/70 text-center ${
          mobile ? 'inset-x-0 bottom-0 h-1/2 px-6' : `top-0 h-full w-1/2 px-[6%] ${right ? 'left-0' : 'right-0'}`
        }`}
        style={{
          transform: mobile ? `translateY(${(1 - panelIn) * 100}%)` : `translateX(${(1 - panelIn) * (right ? -100 : 100)}%)`,
          opacity: 0.3 + panelIn * 0.7,
        }}
      >
        <span className="text-[10px] font-bold tracking-[0.3em] text-beige-dark uppercase" style={{ opacity: t1 }}>
          {eyebrow}
        </span>
        <h2 className="mt-3 font-serif font-bold text-espresso" style={{ fontSize: mobile ? '2.1rem' : 'clamp(2.6rem, 3.8vw, 3.9rem)', lineHeight: 1.05 }}>
          <BlurWords text={title} t={t1} />
        </h2>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-espresso/65" style={{ opacity: t1 }}>
          {text}
        </p>
        <div className="relative my-4 flex flex-col items-center md:my-7" style={{ height: mobile ? 40 : 100 }}>
          <span className="h-full w-px origin-top bg-gradient-to-b from-burgundy/10 to-burgundy" style={{ transform: `scaleY(${lineIn})` }} />
          <ArrowDown className="-mt-2 h-4 w-4 text-burgundy" style={{ opacity: lineIn }} aria-hidden />
        </div>
        <h3 className="font-serif font-bold text-burgundy italic" style={{ fontSize: mobile ? '1.7rem' : 'clamp(2.1rem, 3vw, 3rem)' }}>
          <BlurWords text={title2} t={t2} />
        </h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-espresso/65" style={{ opacity: t2 }}>
          {text2}
        </p>
      </div>

      {/* Photo */}
      <div className="absolute overflow-hidden" style={{ left: box.l, top: box.t, width: box.bw, height: box.bh, maskImage: mask, WebkitMaskImage: mask }}>
        <div className="anim-breathe absolute" style={canvas}>
          <img src={src} alt={alt} className="h-full w-full select-none" draggable={false} />
          {points.map((d, i) => {
            const k = clamp(dotsIn * 1.6 - i * 0.2)
            return (
              <div
                key={d.label}
                className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1.5"
                style={{ left: `${d.x * 100}%`, top: `${d.y * 100}%`, opacity: k }}
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="anim-pulse-ring absolute inset-0 rounded-full bg-white" />
                  <span className="relative h-2.5 w-2.5 rounded-full bg-white shadow" />
                </span>
                <span className="rounded-full bg-espresso/55 px-2 py-0.5 text-[9px] font-semibold tracking-[0.2em] whitespace-nowrap text-white uppercase backdrop-blur-sm md:text-[10px]">
                  {d.label}
                </span>
              </div>
            )
          })}
        </div>
      </div>

      {/* Scroll hint */}
      <div
        className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] font-semibold tracking-[0.3em] text-espresso/50 uppercase md:flex"
        style={{ opacity: 1 - seg(p, 0, 0.06) }}
      >
        Scroll
        <span className="anim-scroll-hint h-8 w-px bg-gradient-to-b from-burgundy to-transparent" />
      </div>
    </div>
  )
}
