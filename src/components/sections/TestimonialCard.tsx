import { Quote } from 'lucide-react'
import type { Testimonial } from '../../types'
import SmartImage from '../ui/SmartImage'
import StarRating from '../ui/StarRating'

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article className="flex flex-col rounded-xl border border-forest/10 bg-white p-7 shadow-sm">
      <div className="flex items-center justify-between">
        <StarRating rating={testimonial.rating} />
        <Quote className="h-8 w-8 text-gold/40" aria-hidden />
      </div>
      <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-forest/80">“{testimonial.review}”</blockquote>
      <div className="mt-6 flex items-center gap-4 border-t border-forest/10 pt-5">
        <SmartImage
          src={testimonial.photo}
          alt={testimonial.name}
          className="h-14 w-14 shrink-0 rounded-full border-2 border-gold/50 object-cover"
        />
        <div>
          <p className="font-serif text-lg font-semibold">{testimonial.name}</p>
          <p className="text-sm text-forest/60">
            {testimonial.service} · {testimonial.date}
          </p>
        </div>
      </div>
    </article>
  )
}
