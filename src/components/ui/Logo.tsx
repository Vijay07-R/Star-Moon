import { MoonStar } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2.5" aria-label="Star Moon Beauty Salon — Home">
      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-beige/60 bg-burgundy-dark">
        <MoonStar className="h-5 w-5 text-beige" aria-hidden />
      </span>
      <span className="leading-none">
        <span className="block font-serif text-xl font-semibold tracking-wide text-white">Star Moon</span>
        <span className="mt-1 block text-[10px] font-medium tracking-[0.3em] text-beige uppercase">Beauty Salon</span>
      </span>
    </Link>
  )
}
