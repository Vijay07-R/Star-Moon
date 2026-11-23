import { whyChooseUs } from '../../data/team'
import SectionHeading from '../ui/SectionHeading'

export default function WhyChooseUs() {
  return (
    <section className="section bg-burgundy">
      <div className="container-page">
        <SectionHeading
          light
          eyebrow="Why Choose Us"
          title="Beauty Care You Can Trust"
          description="We combine skilled professionals, premium products and the highest hygiene standards to give you a salon experience worth returning to."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map(({ icon: Icon, title, description }) => (
            <div key={title} className="rounded-xl border border-white/10 bg-white/5 p-7 text-center">
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-beige/50">
                <Icon className="h-6 w-6 text-beige" aria-hidden />
              </span>
              <h3 className="mt-5 text-xl text-white">{title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-white/70">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
