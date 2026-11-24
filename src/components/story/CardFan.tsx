import { useRef } from 'react'
import type { GalleryImage } from '../../types'
import { ease, HEADER_PX, mix, prefersReducedMotion, seg, useElementSize, usePinnedProgress } from './motion'
import { BlurWords } from './Words'

/**
 * Gallery signature animation: photos start as a neat stacked deck, spread into a
 * 3D fan as you scroll, then straighten into a row with their titles.
 */
export default function CardFan({ images, eyebrow, title }: { images: GalleryImage[]; eyebrow: string; title: string }) {
  const trackRef = useRef<HTMLDivElement>(null)
  const stageRef = useRef<HTMLDivElement>(null)
  const reduce = prefersReducedMotion()
  const p = usePinnedProgress(trackRef, !reduce)
  const { w, h } = useElementSize(stageRef)
  const stageStyle = { height: `calc(100svh - ${HEADER_PX}px)` }

  if (reduce) {
    return (
      <section data-no-reveal ref={stageRef} style={stageStyle}>
        <Stage images={images} eyebrow={eyebrow} title={title} p={1} w={w} h={h} />
      </section>
    )
  }
  return (
    <section ref={trackRef} data-no-reveal className="relative" style={{ height: '280vh' }}>
      <div ref={stageRef} className="sticky" style={{ top: HEADER_PX, ...stageStyle }}>
        <Stage images={images} eyebrow={eyebrow} title={title} p={p} w={w} h={h} />
      </div>
    </section>
  )
}

const deckTilt = [-7, 5, -3, 8, -5, 3, -8]

function Stage({ images, eyebrow, title, p, w, h }: { images: GalleryImage[]; eyebrow: string; title: string; p: number; w: number; h: number }) {
  const mobile = w < 768
  const n = images.length
  const mid = (n - 1) / 2

  const titleIn = 0.45 + 0.55 * seg(p, 0.0, 0.14)
  const fan = ease(seg(p, 0.12, 0.5))
  const line = ease(seg(p, 0.55, 0.85))
  const captions = seg(p, 0.75, 0.92)

  // card size: fits n cards in a row at the end
  const cardW = mobile ? Math.min(w * 0.36, 170) : Math.min((w * 0.86) / n - 18, 250)
  const cardH = cardW * 1.3
  const centerY = h * (mobile ? 0.56 : 0.58)
  const fanSpread = mobile ? w * 0.13 : Math.min(w * 0.11, 150)
  const rowGap = mobile ? w * 0.13 : cardW + 18

  return (
    <div className="relative h-full w-full overflow-hidden bg-gradient-to-b from-cream via-blush/40 to-cream" style={{ perspective: 1400 }}>
      {/* soft spotlight behind the deck */}
      <div
        aria-hidden
        className="absolute left-1/2 rounded-full bg-beige-light/70 blur-3xl"
        style={{ top: centerY - cardH * 0.7, width: cardW * 3, height: cardH * 1.4, marginLeft: -cardW * 1.5, opacity: 0.4 + fan * 0.6 }}
      />

      <div className="absolute inset-x-0 text-center" style={{ top: mobile ? '5%' : '7%', opacity: titleIn }}>
        <p className="text-xs font-bold tracking-[0.3em] text-beige-dark uppercase">{eyebrow}</p>
        <h2 className="mt-3 font-serif font-bold text-espresso" style={{ fontSize: mobile ? '2.2rem' : 'clamp(2.6rem, 4vw, 4rem)' }}>
          <BlurWords text={title} t={titleIn} />
        </h2>
      </div>

      {images.map((img, i) => {
        const o = i - mid
        // deck → fan → row
        const deckX = o * 3
        const deckY = -o * 2
        const fanX = o * fanSpread
        const fanY = Math.abs(o) ** 1.6 * (mobile ? 10 : 16)
        const fanRot = o * (mobile ? 9 : 7)
        const fanRotY = -o * 10
        const rowX = mobile ? o * rowGap : o * rowGap
        const rowY = mobile ? Math.abs(o) ** 1.6 * 8 : 0

        const x = mix(mix(deckX, fanX, fan), rowX, line)
        const y = mix(mix(deckY, fanY, fan), rowY, line)
        const rotZ = mix(mix(deckTilt[i % deckTilt.length], fanRot, fan), mobile ? o * 3 : 0, line)
        const rotY = mix(mix(0, fanRotY, fan), 0, line)
        const lift = Math.sin(Math.PI * fan) * 40 * (1 - line)
        const z = mix(n - Math.abs(o), n - Math.abs(o), fan)

        return (
          <figure
            key={img.id}
            className="absolute m-0"
            style={{
              left: '50%',
              top: centerY,
              width: cardW,
              height: cardH,
              marginLeft: -cardW / 2,
              marginTop: -cardH / 2,
              zIndex: Math.round(z * 10) + (o === 0 ? 5 : 0),
              transform: `translate3d(${x}px, ${y}px, ${lift}px) rotateZ(${rotZ}deg) rotateY(${rotY}deg)`,
            }}
          >
            <div className="h-full w-full overflow-hidden rounded-2xl bg-white p-1.5 shadow-[0_25px_50px_-12px_rgb(59_34_38/0.35)] ring-1 ring-beige/50">
              <img
                src={img.src}
                alt={img.title}
                className="h-full w-full rounded-xl object-cover"
                style={img.position ? { objectPosition: img.position } : undefined}
                draggable={false}
              />
            </div>
            <figcaption
              className="mt-3 text-center font-serif text-sm font-semibold text-burgundy md:text-lg"
              style={{ opacity: mobile ? 0 : captions, transform: `translateY(${(1 - captions) * 8}px)` }}
            >
              {img.title}
            </figcaption>
          </figure>
        )
      })}

      {/* Scroll hint */}
      <div
        className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] font-semibold tracking-[0.3em] text-espresso/50 uppercase md:flex"
        style={{ opacity: 1 - seg(p, 0.02, 0.1) }}
      >
        Scroll
        <span className="anim-scroll-hint h-8 w-px bg-gradient-to-b from-burgundy to-transparent" />
      </div>
    </div>
  )
}
