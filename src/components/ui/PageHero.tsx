import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

interface PageHeroProps {
  title: string
  subtitle: string
  image: string
}

export default function PageHero({ title, subtitle, image }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-emerald-deep">
      <img src={image} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-deep via-emerald-deep/90 to-emerald-deep/60" />
      <div className="container-page relative py-16 md:py-24">
        <nav aria-label="Breadcrumb" className="mb-4 flex items-center gap-1.5 text-sm text-white/70">
          <Link to="/" className="hover:text-gold">
            Home
          </Link>
          <ChevronRight className="h-4 w-4" aria-hidden />
          <span className="text-gold">{title}</span>
        </nav>
        <h1 className="text-4xl font-semibold text-white md:text-5xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">{subtitle}</p>
      </div>
    </section>
  )
}
