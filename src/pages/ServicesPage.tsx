import { useSearchParams } from 'react-router-dom'
import ServiceGrid from '../components/sections/ServiceGrid'
import FilterTabs from '../components/ui/FilterTabs'
import SectionHeading from '../components/ui/SectionHeading'
import { serviceCategories, services } from '../data/services'
import type { ServiceCategory } from '../types'

export default function ServicesPage() {
  const [params, setParams] = useSearchParams()
  const requested = params.get('category')
  const active = (serviceCategories.some((c) => c.value === requested) ? requested : 'all') as ServiceCategory | 'all'
  const visible = active === 'all' ? services : services.filter((s) => s.category === active)

  const setActive = (value: ServiceCategory | 'all') =>
    setParams(value === 'all' ? {} : { category: value }, { replace: true, preventScrollReset: true })

  return (
    <>
      <section className="section bg-cream">
        <div className="container-page">
          <div className="mx-auto max-w-3xl text-center mb-8">
            <h1 className="text-4xl font-semibold sm:text-5xl">Beauty Services</h1>
          </div>
          <SectionHeading
            eyebrow="What We Offer"
            title="Explore Our Services"
          />
          <FilterTabs label="Filter services by category" options={serviceCategories} active={active} onChange={setActive} />
          <p className="mb-6 text-center text-sm text-espresso/60" aria-live="polite">
            Showing {visible.length} {visible.length === 1 ? 'service' : 'services'}
          </p>
          <ServiceGrid services={visible} />
        </div>
      </section>
    </>
  )
}
