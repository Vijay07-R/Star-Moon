import { Link } from 'react-router-dom'
import logoMark from '../../assets/brand/logo-mark.webp'

export default function Logo() {
  return (
    <Link to="/" className="flex items-center gap-3" aria-label="Star Moon Beauty Salon & Studio — Home">
      <span className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full bg-cream ring-1 ring-beige/70 shadow-[inset_0_-2px_6px_rgb(59_34_38/0.12)]">
        <img src={logoMark} alt="" className="h-10 w-auto" />
      </span>
      <span className="leading-none">
        <span className="block font-serif text-2xl font-semibold tracking-wide text-white">Star Moon</span>
        <span className="mt-1 block text-[10px] font-medium tracking-[0.18em] whitespace-nowrap text-beige uppercase sm:tracking-[0.3em]">Beauty Salon &amp; Studio</span>
      </span>
    </Link>
  )
}
