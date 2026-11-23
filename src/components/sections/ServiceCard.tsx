import { CalendarCheck, Clock } from 'lucide-react'
import { formatPrice } from '../../data/site'
import type { Service } from '../../types'
import { bookingLink } from '../../utils/booking'
import { Button, ButtonLink } from '../ui/Button'
import SmartImage from '../ui/SmartImage'

interface ServiceCardProps {
  service: Service
  onViewDetails: (service: Service) => void
}

export default function ServiceCard({ service, onViewDetails }: ServiceCardProps) {
  const Icon = service.icon
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-espresso/10 bg-white shadow-sm transition-shadow hover:shadow-lg">
      <div className="relative aspect-[4/3] overflow-hidden">
        <SmartImage src={service.image} alt={service.name} className="h-full w-full object-cover" />
        <span className="absolute -bottom-6 left-6 flex h-12 w-12 items-center justify-center rounded-full border-4 border-white bg-burgundy">
          <Icon className="h-5 w-5 text-beige" aria-hidden />
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6 pt-9">
        <h3 className="text-xl font-semibold">{service.name}</h3>
        <p className="mt-2 flex-1 text-[15px] leading-relaxed text-espresso/70">{service.shortDescription}</p>
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
