import { CalendarCheck, Check, Clock } from 'lucide-react'
import { getDiscount } from '../../data/packages'
import { formatPrice } from '../../data/site'
import type { BeautyPackage } from '../../types'
import { bookingLink } from '../../utils/booking'
import { ButtonLink } from '../ui/Button'

export default function PackageCard({ pkg }: { pkg: BeautyPackage }) {
  const featured = Boolean(pkg.tag)
  return (
    <article
      className={`relative flex flex-col rounded-xl border bg-white p-7 shadow-sm transition-shadow hover:shadow-lg ${
        featured ? 'border-gold' : 'border-forest/10'
      }`}
    >
      {pkg.tag && (
        <span className="absolute -top-3 left-7 rounded-full bg-gold px-3 py-1 text-xs font-semibold tracking-wide text-forest uppercase">
          {pkg.tag}
        </span>
      )}
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-xl font-semibold">{pkg.name}</h3>
        <span className="shrink-0 rounded-md bg-emerald-soft px-2 py-1 text-xs font-semibold text-emerald-deep">
          {getDiscount(pkg)}% OFF
        </span>
      </div>
      <p className="mt-2 text-[15px] leading-relaxed text-forest/70">{pkg.description}</p>

      <div className="mt-5 flex items-end gap-3 border-y border-dashed border-forest/15 py-4">
        <span className="font-serif text-3xl font-semibold text-emerald-deep">{formatPrice(pkg.offerPrice)}</span>
        <span className="pb-1 text-base text-forest/45 line-through" aria-label={`Original price ${formatPrice(pkg.originalPrice)}`}>
          {formatPrice(pkg.originalPrice)}
        </span>
      </div>

      <p className="mt-4 flex items-center gap-1.5 text-sm text-forest/60">
        <Clock className="h-4 w-4 text-gold-dark" aria-hidden /> {pkg.duration}
      </p>

      <ul className="mt-4 flex-1 space-y-2.5">
        {pkg.includes.map((item) => (
          <li key={item} className="flex items-start gap-2 text-[15px] text-forest/80">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold-dark" aria-hidden /> {item}
          </li>
        ))}
      </ul>

      <ButtonLink to={bookingLink(pkg.id)} variant={featured ? 'gold' : 'primary'} className="mt-7 w-full">
        <CalendarCheck className="h-4 w-4" aria-hidden /> Book This Package
      </ButtonLink>
    </article>
  )
}
