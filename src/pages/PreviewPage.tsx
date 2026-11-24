import { useEffect, useRef, useState } from 'react'
import type { CSSProperties } from 'react'
import { ArrowDown, CalendarCheck, GraduationCap, HeartHandshake, Sparkles, Star } from 'lucide-react'
import CtaBanner from '../components/sections/CtaBanner'
import { ButtonLink } from '../components/ui/Button'
import { photos } from '../data/photos'

/**
 * DESIGN PREVIEW (not linked in the menu): a scroll-driven story in three scenes.
 *  1. Portrait hero: headline, stats, and "focus" frames on the bride's look
 *  2. The photo slides left and zooms into her face; a panel opens with titles that blur in
 *  3. A statement whose words fill with colour as you scroll, with floating tags
 * The stage stays pinned while the page scrolls through a tall container.
 */

// ---------- small animation helpers ----------
const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v))
/** 0→1 as p goes from a to b */
const seg = (p: number, a: number, b: number) => clamp((p - a) / (b - a))
const ease = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2)
const mix = (a: number, b: number, t: number) => a + (b - a) * t

/** Photo is 728×1600; positions below are fractions of the full image. */
const PHOTO_ASPECT = 728 / 1600
const focusFrames: { x: number; y: number; label: string; side: 'left' | 'right' }[] = [
  { x: 0.53, y: 0.218, label: 'Maang Tikka', side: 'right' },
  { x: 0.465, y: 0.282, label: 'Eye Makeup', side: 'left' },
  { x: 0.535, y: 0.334, label: 'Lip Shade', side: 'right' },
]
const facePoints = [
  { x: 0.6, y: 0.282, label: 'Eye Look' },
  { x: 0.45, y: 0.315, label: 'HD Base' },
  { x: 0.535, y: 0.337, label: 'Lip Colour' },
  { x: 0.53, y: 0.225, label: 'Jewellery' },
]
const stats = [
  { icon: Star, value: '12+', label: 'Years of experience' },
  { icon: GraduationCap, value: '500+', label: 'Students trained' },
  { icon: HeartHandshake, value: '15K+', label: 'Happy clients' },
]
const statement =
  'Star Moon Beauty Salon & Studio helps you look and feel your best. From everyday care to your wedding day, every visit is crafted with skill, warmth and premium products'
const statementEnd = 'for your most confident glow.'
const tags = [
  { label: 'Beautiful', x: '12%', y: '18%', dot: 'bg-beige', dur: '6s', edge: true },
  { label: 'Confident', x: '6%', y: '62%', dot: 'bg-burgundy', dur: '7.5s', edge: false },
  { label: 'Glowing', x: '30%', y: '84%', dot: 'bg-beige-dark', dur: '6.8s', edge: true },
  { label: 'Elegant', x: '72%', y: '14%', dot: 'bg-burgundy', dur: '7s', edge: true },
  { label: 'Bridal Ready', x: '84%', y: '58%', dot: 'bg-beige', dur: '8s', edge: false },
  { label: 'Happy', x: '64%', y: '86%', dot: 'bg-beige-dark', dur: '6.4s', edge: true },
]

/** Words that fade and un-blur one after another as t goes 0→1. */
function BlurWords({ text, t, className = '' }: { text: string; t: number; className?: string }) {
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
            style={{ opacity: k, filter: `blur(${(1 - k) * 10}px)`, transform: `translateY(${(1 - k) * 12}px)` }}
          >
            {w + (i < n - 1 ? ' ' : '')}
          </span>
        )
      })}
    </span>
  )
}

/** Square "focus" frame with corner brackets, and a label pulled out to one side on a thin line. */
function FocusFrame({ label, delay, side, showLabel }: { label: string; delay: number; side: 'left' | 'right'; showLabel: boolean }) {
  const corner = 'absolute h-2.5 w-2.5 border-beige'
  return (
    <div className="anim-blur-in relative -translate-x-1/2 -translate-y-1/2" style={{ '--delay': `${delay}ms` } as CSSProperties}>
      <div className="anim-focus relative h-8 w-8 md:h-10 md:w-10">
        <span className={`${corner} top-0 left-0 border-t-2 border-l-2`} />
        <span className={`${corner} top-0 right-0 border-t-2 border-r-2`} />
        <span className={`${corner} bottom-0 left-0 border-b-2 border-l-2`} />
        <span className={`${corner} right-0 bottom-0 border-r-2 border-b-2`} />
      </div>
      {showLabel && (
      <span
        className={`absolute top-1/2 flex -translate-y-1/2 items-center ${side === 'right' ? 'left-full flex-row' : 'right-full flex-row-reverse'}`}
      >
        <span className="h-px w-8 bg-beige/80 md:w-14" />
        <span className="rounded-full bg-burgundy/90 px-2 py-0.5 text-[9px] font-semibold tracking-wider whitespace-nowrap text-cream uppercase shadow md:text-[10px]">
          {label}
        </span>
      </span>
      )}
    </div>
  )
}

function Stage({ p, w, h }: { p: number; w: number; h: number }) {
  const mobile = w < 768

  // Timeline (p = 0 → 1 across the whole pinned scroll)
  const textOut = seg(p, 0.05, 0.14)
  const move = ease(seg(p, 0.1, 0.3))
  const panelIn = ease(seg(p, 0.16, 0.32))
  const dotsIn = seg(p, 0.3, 0.36)
  const title1 = seg(p, 0.31, 0.39)
  const lineIn = ease(seg(p, 0.38, 0.47))
  const title2 = seg(p, 0.46, 0.55)
  const out2 = ease(seg(p, 0.6, 0.7))
  const in3 = ease(seg(p, 0.64, 0.73))
  const fill = seg(p, 0.7, 0.94)

  // Photo box: centred portrait → left half (desktop) / top half (mobile)
  const s1 = mobile
    ? { l: w * 0.12, t: h * 0.26, bw: w * 0.76, bh: h * 0.54 }
    : { l: w / 2 - Math.min(w * 0.36, 540) / 2, t: h * 0.02, bw: Math.min(w * 0.36, 540), bh: h * 0.98 }
  const s2 = mobile ? { l: 0, t: 0, bw: w, bh: h * 0.5 } : { l: 0, t: 0, bw: w / 2, bh: h }
  const box = { l: mix(s1.l, s2.l, move), t: mix(s1.t, s2.t, move), bw: mix(s1.bw, s2.bw, move), bh: mix(s1.bh, s2.bh, move) }

  // Inside the box the full photo is placed so a focus point lands on an anchor, at a zoom level.
  const zoom = mix(mobile ? 1.45 : 1.55, mobile ? 3.4 : 3, move)
  const fx = mix(0.53, 0.535, move)
  const fy = mix(0.33, 0.29, move)
  const ax = 0.5
  const ay = mix(0.42, 0.48, move)
  const ch = box.bh * zoom
  const cw = ch * PHOTO_ASPECT
  const canvas = { left: box.bw * ax - cw * fx, top: box.bh * ay - ch * fy, width: cw, height: ch }

  // Soft vignette into the cream background that opens up as the photo fills its half
  const inner = mix(28, 100, move)
  const size = mix(46, 160, move)
  const mask = `radial-gradient(ellipse ${size}% ${size * 1.05}% at 50% 42%, #000 ${inner}%, transparent 100%)`

  const fade = (o: number, blurPx: number, dx = 0, dy = 0): CSSProperties => ({
    opacity: o,
    filter: blurPx > 0.1 ? `blur(${blurPx}px)` : undefined,
    transform: `translate(${dx}px, ${dy}px)`,
    pointerEvents: o < 0.5 ? 'none' : undefined,
  })

  return (
    <div className="relative h-full w-full overflow-hidden bg-gradient-to-b from-cream via-cream to-blush/60">
      {/* ---------- Scene 1 & 2: the photo ---------- */}
      <div
        className="absolute overflow-hidden"
        style={{
          left: box.l,
          top: box.t,
          width: box.bw,
          height: box.bh,
          maskImage: mask,
          WebkitMaskImage: mask,
          opacity: 1 - out2,
          transform: `scale(${1 - out2 * 0.08})`,
          filter: out2 > 0.01 ? `blur(${out2 * 8}px)` : undefined,
        }}
      >
        <div className="anim-breathe absolute" style={canvas}>
          <img src={photos.bridalLehenga} alt="Bride styled by Star Moon" className="h-full w-full select-none" draggable={false} />

          {/* Scene 1: focus frames on the look */}
          <div style={{ opacity: 1 - seg(p, 0.07, 0.15) }}>
            {focusFrames.map((f, i) => (
              <div key={f.label} className="absolute" style={{ left: `${f.x * 100}%`, top: `${f.y * 100}%` }}>
                <FocusFrame label={f.label} side={f.side} showLabel={!mobile} delay={900 + i * 220} />
              </div>
            ))}
          </div>

          {/* Scene 2: labelled points */}
          {facePoints.map((d, i) => {
            const k = clamp(dotsIn * 1.6 - i * 0.2)
            return (
              <div
                key={d.label}
                className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1.5"
                style={{ left: `${d.x * 100}%`, top: `${d.y * 100}%`, opacity: k * (1 - out2) }}
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="anim-pulse-ring absolute inset-0 rounded-full bg-white" />
                  <span className="relative h-2.5 w-2.5 rounded-full bg-white shadow" />
                </span>
                <span className="text-[9px] font-semibold tracking-[0.2em] whitespace-nowrap text-white uppercase [text-shadow:0_1px_6px_rgb(0_0_0/0.6)] md:text-[10px]">
                  {d.label}
                </span>
              </div>
            )
          })}
        </div>
      </div>

      {/* ---------- Scene 1: headline + stats ---------- */}
      <div
        className={mobile ? 'absolute inset-x-5 top-[4%] text-center' : 'absolute top-1/2 left-[6%] w-[28%] max-w-md -translate-y-1/2'}
        style={fade(1 - textOut, textOut * 10, mobile ? 0 : -textOut * 50, mobile ? -textOut * 30 : 0)}
      >
        <span className="anim-blur-in inline-flex items-center gap-2 rounded-full border border-beige/70 bg-white/70 px-4 py-1.5 text-[10px] font-bold tracking-[0.22em] text-burgundy uppercase backdrop-blur-sm">
          <Sparkles className="h-3.5 w-3.5 text-beige-dark" aria-hidden /> Premium Women's Salon
        </span>
        <h1 className="mt-5 font-serif leading-[1.02] font-bold text-espresso" style={{ fontSize: mobile ? 'clamp(2.2rem, 10vw, 2.9rem)' : 'clamp(2.8rem, 4.6vw, 4.6rem)' }}>
          {['Your', 'Beauty,'].map((wd, i) => (
            <span key={wd} className="anim-blur-in inline-block" style={{ '--delay': `${150 + i * 120}ms` } as CSSProperties}>
              {wd}&nbsp;
            </span>
          ))}
          <br className={mobile ? 'hidden' : ''} />
          {['Our', 'Passion'].map((wd, i) => (
            <span key={wd} className="anim-blur-in inline-block text-burgundy italic" style={{ '--delay': `${400 + i * 120}ms` } as CSSProperties}>
              {wd}&nbsp;
            </span>
          ))}
        </h1>
        {!mobile && (
          <>
            <p className="anim-blur-in mt-5 text-[15px] leading-relaxed text-espresso/70 [--delay:700ms]">
              Bridal makeup, hair and skin care by experts who listen first, for every day and your wedding day.
            </p>
            <div className="anim-blur-in mt-7 [--delay:850ms]">
              <ButtonLink to="/contact#appointment" size="md" className="shadow-lg">
                <CalendarCheck className="h-4 w-4" aria-hidden /> Book Appointment
              </ButtonLink>
            </div>
          </>
        )}
      </div>

      <div
        className={mobile ? 'absolute inset-x-4 bottom-[3%] grid grid-cols-3 gap-2' : 'absolute top-1/2 right-[6%] -translate-y-1/2 space-y-7'}
        style={fade(1 - textOut, textOut * 10, mobile ? 0 : textOut * 50, mobile ? textOut * 30 : 0)}
      >
        {stats.map(({ icon: Icon, value, label }, i) => (
          <div
            key={label}
            className={`anim-blur-in flex items-center gap-3 ${mobile ? 'flex-col gap-1 text-center' : ''}`}
            style={{ '--delay': `${600 + i * 150}ms` } as CSSProperties}
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-beige/60 bg-white/70">
              <Icon className="h-4 w-4 text-burgundy" aria-hidden />
            </span>
            <span>
              <span className="block font-serif text-2xl leading-none font-bold text-burgundy md:text-3xl">{value}</span>
              <span className="mt-1 block text-[10px] tracking-wide text-espresso/60 md:text-xs">{label}</span>
            </span>
          </div>
        ))}
      </div>

      {/* Scroll hint */}
      <div
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] font-semibold tracking-[0.3em] text-espresso/50 uppercase md:flex"
        style={{ opacity: 1 - seg(p, 0, 0.05) }}
      >
        Scroll
        <span className="anim-scroll-hint h-8 w-px bg-gradient-to-b from-burgundy to-transparent" />
      </div>

      {/* ---------- Scene 2: the side panel ---------- */}
      <div
        className={`absolute flex flex-col items-center justify-center bg-gradient-to-b from-blush via-cream to-beige-light/70 text-center ${
          mobile ? 'inset-x-0 bottom-0 h-1/2 px-6' : 'top-0 right-0 h-full w-1/2 px-[6%]'
        }`}
        style={{
          transform: mobile ? `translateY(${(1 - panelIn) * 100}%)` : `translateX(${(1 - panelIn) * 100}%)`,
          opacity: (0.4 + panelIn * 0.6) * (1 - out2),
          filter: out2 > 0.01 ? `blur(${out2 * 8}px)` : undefined,
        }}
      >
        <span className="text-[10px] font-bold tracking-[0.3em] text-beige-dark uppercase" style={{ opacity: title1 }}>
          Star Moon Signature
        </span>
        <h2 className="mt-3 font-serif font-bold text-espresso" style={{ fontSize: mobile ? '2rem' : 'clamp(2.4rem, 3.6vw, 3.6rem)' }}>
          <BlurWords text="Bridal Artistry" t={title1} />
        </h2>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-espresso/65" style={{ opacity: title1 }}>
          Every look starts with your skin, your features and your style. Then we bring out your glow.
        </p>

        <div className="relative my-4 flex flex-col items-center md:my-7" style={{ height: mobile ? 48 : 110 }}>
          <span className="w-px origin-top bg-gradient-to-b from-burgundy/10 to-burgundy" style={{ height: '100%', transform: `scaleY(${lineIn})` }} />
          <ArrowDown className="-mt-2 h-4 w-4 text-burgundy" style={{ opacity: lineIn }} aria-hidden />
        </div>

        <h3 className="font-serif font-bold text-burgundy" style={{ fontSize: mobile ? '1.6rem' : 'clamp(2rem, 2.8vw, 2.8rem)' }}>
          <BlurWords text="Timeless Beauty" t={title2} />
        </h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-espresso/65" style={{ opacity: title2 }}>
          HD makeup, hairstyling, saree draping and jewellery setting, ready for every photo.
        </p>
      </div>

      {/* ---------- Scene 3: statement ---------- */}
      <div
        className="absolute inset-0 flex items-center justify-center px-6"
        style={{ opacity: in3, transform: `translateY(${(1 - in3) * 40}px)`, pointerEvents: in3 < 0.5 ? 'none' : undefined }}
      >
        {tags.map((tg, i) => (
          <span
            key={tg.label}
            className={`absolute ${mobile && !tg.edge ? 'hidden' : ''}`}
            style={{ left: tg.x, top: tg.y, opacity: clamp(in3 * 1.5 - i * 0.08) }}
          >
            <span
              className="anim-float flex items-center gap-1.5 rounded-full border border-beige/50 bg-white/80 px-3 py-1.5 text-xs font-medium text-espresso shadow-sm backdrop-blur-sm"
              style={{ animationDuration: tg.dur }}
            >
              <span className={`h-2 w-2 rounded-full ${tg.dot}`} /> {tg.label}
            </span>
          </span>
        ))}
        <p className="max-w-4xl text-center font-medium leading-[1.2] tracking-tight" style={{ fontSize: mobile ? '1.55rem' : 'clamp(1.9rem, 3.2vw, 3rem)' }}>
          <FillWords text={statement} t={fill} total={statement.split(' ').length + statementEnd.split(' ').length} />{' '}
          <FillWords
            text={statementEnd}
            t={fill}
            offset={statement.split(' ').length}
            total={statement.split(' ').length + statementEnd.split(' ').length}
            className="font-serif text-burgundy italic"
          />
        </p>
      </div>
    </div>
  )
}

/** Words go from faint to full colour one by one as t goes 0→1. */
function FillWords({ text, t, offset = 0, total, className = '' }: { text: string; t: number; offset?: number; total: number; className?: string }) {
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

const HEADER = 72 // sticky header height (px)

export default function PreviewPage() {
  const trackRef = useRef<HTMLDivElement>(null)
  const stageRef = useRef<HTMLDivElement>(null)
  const [p, setP] = useState(0)
  const [size, setSize] = useState({ w: 1280, h: 720 })
  const [reduce] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches)

  useEffect(() => {
    const stage = stageRef.current
    if (!stage) return
    const ro = new ResizeObserver(([e]) => setSize({ w: e.contentRect.width, h: e.contentRect.height }))
    ro.observe(stage)
    return () => ro.disconnect()
  }, [])

  useEffect(() => {
    if (reduce) return
    let frame = 0
    const update = () => {
      const el = trackRef.current
      if (!el) return
      const r = el.getBoundingClientRect()
      const total = el.offsetHeight - (window.innerHeight - HEADER)
      setP(clamp((HEADER - r.top) / total))
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
  }, [reduce])

  const stageStyle = { height: `calc(100svh - ${HEADER}px)` }

  // Reduced motion: show the three scenes as still frames, one after another.
  if (reduce) {
    return (
      <div data-no-reveal>
        {[0.02, 0.58, 0.97].map((still) => (
          <div key={still} ref={still === 0.02 ? stageRef : undefined} style={stageStyle}>
            <Stage p={still} w={size.w} h={size.h} />
          </div>
        ))}
        <CtaBanner />
      </div>
    )
  }

  return (
    <div data-no-reveal>
      <div ref={trackRef} className="relative" style={{ height: '520vh' }}>
        <div ref={stageRef} className="sticky" style={{ top: HEADER, ...stageStyle }}>
          <Stage p={p} w={size.w} h={size.h} />
        </div>
      </div>
      <CtaBanner />
    </div>
  )
}
