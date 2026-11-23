import { useMemo, useState } from 'react'
import GalleryGrid from '../components/sections/GalleryGrid'
import FilterTabs from '../components/ui/FilterTabs'
import SectionHeading from '../components/ui/SectionHeading'
import { galleryCategories, galleryImages } from '../data/gallery'
import type { GalleryCategory } from '../types'

export default function GalleryPage() {
  const [active, setActive] = useState<GalleryCategory | 'all'>('all')
  const visible = useMemo(() => (active === 'all' ? galleryImages : galleryImages.filter((g) => g.category === active)), [active])

  return (
    <>
      <section className="section bg-cream">
        <div className="container-page">
          <div className="mx-auto max-w-3xl text-center mb-8">
            <h1 className="text-4xl font-semibold sm:text-5xl"></h1>
          </div>
          <SectionHeading eyebrow="Our Portfolio" title="Beauty Gallery" />
          <FilterTabs label="Filter gallery by category" options={galleryCategories} active={active} onChange={setActive} />
          <GalleryGrid key={active} images={visible} />
        </div>
      </section>
    </>
  )
}
