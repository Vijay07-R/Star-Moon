import { CalendarCheck, Clock } from 'lucide-react'
import { formatPrice } from '../../data/site'
import type { Service } from '../../types'
import { bookingLink } from '../../utils/booking'
import { Button, ButtonLink } from '../ui/Button'

interface ServiceCardProps {
  service: Service
  onViewDetails: (service: Service) => void
}

export default function ServiceCard({ service, onViewDetails }: ServiceCardProps) {
  const Icon = service.icon
  return (
    <article data-tilt className="group flex flex-col overflow-hidden rounded-xl border border-espresso/10 bg-white shadow-sm transition-shadow hover:shadow-lg">
      <div className="flex items-center gap-4 border-b border-beige/40 bg-gradient-to-br from-cream to-blush px-6 py-5">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-burgundy">
          <Icon className="h-5 w-5 text-beige" aria-hidden />
        </span>
        <h3 className="text-xl font-semibold">{service.name}</h3>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="flex-1 text-[15px] leading-relaxed text-espresso/70">{service.shortDescription}</p>
        <div className="mt-4 flex items-center justify-between border-t border-espresso/10 pt-4 text-sm">
          <span className="flex items-center gap-1.5 text-espresso/60">
            <Clock className="h-4 w-4 text-beige-dark" aria-hidden /> {service.duration}
          </span>
          <span className="font-medium text-burgundy">From {formatPrice(service.startingPrice)}</span>
        </div>
        <div className="mt-5 grid grid-cols-2 gap-3">
          <Button variant="outline" size="sm" onClick={() => onViewDetails(service)}>
            View Details
          </Button>
          <ButtonLink to={bookingLink(service.id)} size="sm">
            <CalendarCheck className="h-4 w-4" aria-hidden /> Book Now
          </ButtonLink>
        </div>
      </div>
    </article>
  )
}
