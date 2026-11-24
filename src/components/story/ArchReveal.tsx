import { useRef } from 'react'
import type { ReactNode } from 'react'
import { clamp, ease, HEADER_PX, mix, prefersReducedMotion, seg, useElementSize, usePinnedProgress } from './motion'
import { BlurWords } from './Words'

/**
 * Academy signature animation: a classic arched salon mirror sits in front of a large title.
 * As you scroll, the arch opens out to fill the screen (the title's letters drift apart and fade),
 * the photo inside settles from a gentle zoom, and a caption rises over it.
 */
export default function ArchReveal({
  src,
  alt,
  position = '50% 30%',
  bigTitle,
  eyebrow,
  title,
  text,
  action,
}: {
  src: string
  alt: string
  position?: string
  bigTitle: string
  eyebrow: string
  title: string
  text: string
  action?: ReactNode
}) {
  const trackRef = useRef<HTMLDivElement>(null)
  const stageRef = useRef<HTMLDivElement>(null)
  const reduce = prefersReducedMotion()
  const p = usePinnedProgress(trackRef, !reduce)
  const { w, h } = useElementSize(stageRef)
  const stageStyle = { height: `calc(100svh - ${HEADER_PX}px)` }
  const props = { src, alt, position, bigTitle, eyebrow, title, text, action, w, h }

  if (reduce) {
    return (
      <section data-no-reveal ref={stageRef} style={stageStyle}>
        <Stage {...props} p={1} />
      </section>
    )
  }
  return (
    <section ref={trackRef} data-no-reveal className="relative" style={{ height: '260vh' }}>
      <div ref={stageRef} className="sticky" style={{ top: HEADER_PX, ...stageStyle }}>
        <Stage {...props} p={p} />
      </div>
    </section>
  )
}

function Stage({
  src,
  alt,
  position,
  bigTitle,
  eyebrow,
  title,
  text,
  action,
  p,
  w,
  h,
}: {
  src: string
  alt: string
  position: string
  bigTitle: string
  eyebrow: string
  title: string
  text: string
  action?: ReactNode
  p: number
  w: number
  h: number
}) {
  const mobile = w < 768
  const grow = ease(seg(p, 0.1, 0.62))
  const titleOut = seg(p, 0.08, 0.4)
  const caption = seg(p, 0.6, 0.8)

  // arch: small mirror → full stage
  const aw0 = mobile ? w * 0.62 : Math.min(w * 0.24, 360)
  const ah0 = mobile ? h * 0.6 : h * 0.66
  const aw = mix(aw0, w, grow)
  const ah = mix(ah0, h, grow)
  const top = mix(h - ah0 - h * 0.06, 0, grow)
  const radius = mix(aw0 / 2, 0, grow) // round top → square
  const frame = 1 - grow

  const letters = bigTitle.split('')

  return (
    <div className="relative h-full w-full overflow-hidden bg-gradient-to-b from-cream to-blush/50">
      {/* big title behind the mirror; letters drift apart as the arch opens */}
      <p
        aria-hidden
        className="absolute inset-x-0 text-center font-serif leading-none font-bold whitespace-nowrap text-burgundy select-none"
        style={{
          top: mobile ? '6%' : '5%',
          fontSize: mobile ? '2.6rem' : 'clamp(3rem, 6.5vw, 6rem)',
          opacity: (1 - titleOut) * 0.95,
          letterSpacing: `${mix(0.02, 0.35, titleOut)}em`,
          filter: titleOut > 0.01 ? `blur(${titleOut * 6}px)` : undefined,
        }}
      >
        {letters.map((ch, i) => (
          <span key={i} className="anim-blur-in inline-block" style={{ ['--delay' as string]: `${i * 45}ms` }}>
            {ch === ' ' ? ' ' : ch}
          </span>
        ))}
      </p>

      {/* the arched mirror */}
      <div
        className="absolute left-1/2 overflow-hidden"
        style={{
          top,
          width: aw,
          height: ah,
          marginLeft: -aw / 2,
          borderRadius: `${radius}px ${radius}px ${mix(18, 0, grow)}px ${mix(18, 0, grow)}px`,
          boxShadow: `0 30px 60px -20px rgb(59 34 38 / ${0.45 * frame})`,
        }}
      >
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover"
          style={{ objectPosition: position, transform: `scale(${mix(1.25, 1, grow)})` }}
          draggable={false}
        />
        {/* gold mirror frame (fades as it opens) */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            borderRadius: 'inherit',
            boxShadow: `inset 0 0 0 ${6 * frame}px #fbf7f0, inset 0 0 0 ${8 * frame}px #d8bf9a`,
          }}
        />
        {/* caption over the photo */}
        <div
          className="absolute inset-x-0 bottom-0 flex flex-col items-center bg-gradient-to-t from-burgundy-dark/90 via-burgundy-dark/50 to-transparent px-6 pt-32 pb-10 text-center md:pb-16"
          style={{ opacity: caption }}
        >
          <p className="text-xs font-bold tracking-[0.3em] text-beige uppercase">{eyebrow}</p>
          <h2 className="mt-3 font-serif font-bold text-white" style={{ fontSize: mobile ? '2.2rem' : 'clamp(2.6rem, 4.4vw, 4.4rem)' }}>
            <BlurWords text={title} t={caption} />
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/85 md:text-base">{text}</p>
          {action && <div className="mt-6" style={{ pointerEvents: caption > 0.5 ? 'auto' : 'none' }}>{action}</div>}
        </div>
      </div>

      {/* Scroll hint */}
      <div
        className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] font-semibold tracking-[0.3em] text-espresso/50 uppercase md:flex"
        style={{ opacity: clamp(1 - seg(p, 0.02, 0.1)) }}
      >
        Scroll
        <span className="anim-scroll-hint h-8 w-px bg-gradient-to-b from-burgundy to-transparent" />
      </div>
    </div>
  )
}
