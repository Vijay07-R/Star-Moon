import TestimonialCard from '../components/sections/TestimonialCard'
import SectionHeading from '../components/ui/SectionHeading'
import StarRating from '../components/ui/StarRating'
import { averageRating, testimonials } from '../data/testimonials'

export default function TestimonialsPage() {
  const avg = averageRating()
  const breakdown = [5, 4, 3, 2, 1].map((stars) => ({
    stars,
    count: testimonials.filter((t) => t.rating === stars).length,
  }))

  return (
    <>
      <section className="section bg-cream">
        <div className="container-page">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h1 className="text-4xl font-semibold sm:text-5xl">Testimonials</h1>
            <p className="mt-4 text-lg text-espresso/75">Honest reviews from the women who visit us — and keep coming back.</p>
          </div>

          {/* Rating summary */}
          <div className="mx-auto mb-14 grid max-w-3xl items-center gap-8 rounded-xl border border-beige/30 bg-white p-8 sm:grid-cols-2">
            <div className="text-center sm:border-r sm:border-espresso/10">
              <p className="font-serif text-6xl font-semibold text-burgundy">{avg}</p>
              <div className="mt-2 flex justify-center">
                <StarRating rating={Math.round(avg)} size={20} />
              </div>
              <p className="mt-2 text-sm text-espresso/60">Based on {testimonials.length} verified reviews</p>
            </div>
            <ul className="space-y-2">
              {breakdown.map(({ stars, count }) => (
                <li key={stars} className="flex items-center gap-3 text-sm">
                  <span className="w-12 text-espresso/70">{stars} star</span>
                  <span className="h-2 flex-1 overflow-hidden rounded-full bg-cream">
                    <span className="block h-full rounded-full bg-beige" style={{ width: `${(count / testimonials.length) * 100}%` }} />
                  </span>
                  <span className="w-6 text-right text-espresso/60">{count}</span>
                </li>
              ))}
            </ul>
          </div>

          <SectionHeading eyebrow="Client Reviews" title="Stories From Our Clients" />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
