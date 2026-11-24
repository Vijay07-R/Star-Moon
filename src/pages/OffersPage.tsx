import { useState } from 'react'
import { BadgePercent, CalendarCheck, Gift, Info } from 'lucide-react'
import PackageCard from '../components/sections/PackageCard'
import { ButtonLink } from '../components/ui/Button'
import FilterTabs from '../components/ui/FilterTabs'
import SectionHeading from '../components/ui/SectionHeading'
import { packageCategories, packages } from '../data/packages'
import type { PackageCategory } from '../types'
import { BlurInText } from '../components/story/Words'

export default function OffersPage() {
  const [active, setActive] = useState<PackageCategory | 'all'>('all')
  const visible = active === 'all' ? packages : packages.filter((p) => p.category === active)

  return (
    <>
      <section className="section bg-cream">
        <div className="container-page">
          <div className="mx-auto max-w-3xl text-center mb-8">
            <BlurInText as="h1" text="Offers & Packages" className="text-4xl font-semibold sm:text-5xl" />
          </div>
        </div>
      </section>

      {/* Highlight strip */}
      <section className="bg-white">
        <div className="container-page grid gap-4 py-10 md:grid-cols-3">
          {[
            { icon: BadgePercent, title: 'Save up to 33%', text: 'On combo and seasonal packages' },
            { icon: Gift, title: 'Free Consultation', text: 'With every bridal package' },
            { icon: CalendarCheck, title: 'Flexible Scheduling', text: 'Split sessions across visits' },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex items-center gap-4 rounded-xl border border-beige/30 bg-cream p-5">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-burgundy">
                <Icon className="h-5 w-5 text-beige" aria-hidden />
              </span>
              <div>
                <p className="font-serif text-lg font-semibold">{title}</p>
                <p className="text-sm text-espresso/65">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section bg-cream">
        <div className="container-page">
          <SectionHeading
            eyebrow="Pricing"
            title="Beauty Packages & Offers"
          />
          <FilterTabs label="Filter packages by category" options={packageCategories} active={active} onChange={setActive} />
          <div className="grid gap-8 pt-3 md:grid-cols-2 lg:grid-cols-3">
            {visible.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>

          <div className="mt-12 flex flex-col items-start gap-4 rounded-xl border border-espresso/10 bg-white p-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="flex items-start gap-3 text-sm text-espresso/70">
              <Info className="mt-0.5 h-5 w-5 shrink-0 text-beige-dark" aria-hidden />
              Offers are valid for a limited period and cannot be combined with other discounts. Want a custom package for a group or
              family event? Contact us and we will create one for you.
            </p>
            <ButtonLink to="/contact" variant="outline" size="sm" className="shrink-0">
              Request Custom Package
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  )
}
