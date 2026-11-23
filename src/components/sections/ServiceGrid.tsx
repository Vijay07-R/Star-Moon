import { useState } from 'react'
import { CalendarCheck, Check, Clock, Tag } from 'lucide-react'
import { formatPrice } from '../../data/site'
import type { Service } from '../../types'
import { bookingLink } from '../../utils/booking'
import { ButtonLink } from '../ui/Button'
import Modal from '../ui/Modal'
import SmartImage from '../ui/SmartImage'
import ServiceCard from './ServiceCard'

/** Grid of service cards with a shared "View Details" dialog. */
export default function ServiceGrid({ services }: { services: Service[] }) {
  const [selected, setSelected] = useState<Service | null>(null)

  return (
    <>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} onViewDetails={setSelected} />
        ))}
      </div>

      <Modal
        open={selected !== null}
        onClose={() => setSelected(null)}
        labelledBy="service-dialog-title"
        className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-xl bg-white shadow-2xl"
      >
        {selected && (
          <div className="grid md:grid-cols-2">
            <SmartImage src={selected.image} alt={selected.name} className="h-56 w-full object-cover md:h-full" />
            <div className="p-6 md:p-8">
              <p className="text-xs font-semibold tracking-[0.25em] text-beige-dark uppercase">Service Details</p>
              <h3 id="service-dialog-title" className="mt-2 text-2xl font-semibold">
                {selected.name}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-espresso/75">{selected.description}</p>
              <div className="mt-5 flex flex-wrap gap-4 text-sm">
                <span className="flex items-center gap-1.5 rounded-full bg-cream px-3 py-1.5">
                  <Clock className="h-4 w-4 text-beige-dark" aria-hidden /> {selected.duration}
                </span>
                <span className="flex items-center gap-1.5 rounded-full bg-cream px-3 py-1.5">
                  <Tag className="h-4 w-4 text-beige-dark" aria-hidden /> From {formatPrice(selected.startingPrice)}
                </span>
              </div>
              <h4 className="mt-6 font-sans text-sm font-semibold tracking-wide uppercase">What&apos;s included</h4>
              <ul className="mt-3 space-y-2">
                {selected.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-[15px] text-espresso/80">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-burgundy" aria-hidden /> {h}
                  </li>
                ))}
              </ul>
              <ButtonLink to={bookingLink(selected.id)} className="mt-7 w-full">
                <CalendarCheck className="h-4 w-4" aria-hidden /> Book {selected.name}
              </ButtonLink>
            </div>
          </div>
        )}
      </Modal>
    </>
  )
}
