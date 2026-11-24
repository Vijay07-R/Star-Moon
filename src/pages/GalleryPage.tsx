import { useMemo, useState } from 'react'
import GalleryGrid from '../components/sections/GalleryGrid'
import FilterTabs from '../components/ui/FilterTabs'
import { galleryCategories, galleryImages } from '../data/gallery'
import type { GalleryCategory } from '../types'
import CardFan from '../components/story/CardFan'
import { BlurInText } from '../components/story/Words'

export default function GalleryPage() {
  const [active, setActive] = useState<GalleryCategory | 'all'>('all')
  const visible = useMemo(() => (active === 'all' ? galleryImages : galleryImages.filter((g) => g.category === active)), [active])

  return (
    <>
      <section className="bg-cream pt-16 pb-6 md:pt-24">
        <div className="container-page">
          <div className="mx-auto max-w-3xl text-center">
            <p className="anim-blur-in text-xs font-bold tracking-[0.3em] text-beige-dark uppercase">Our Portfolio</p>
            <BlurInText as="h1" text="Beauty Gallery" delay={120} className="mt-3 text-4xl font-semibold sm:text-6xl" />
            <p className="anim-blur-in mt-4 text-espresso/65 [--delay:400ms]">Real looks created by our team for brides, parties and everyday glow.</p>
          </div>
        </div>
      </section>

      {/* Signature animation: the photos spread from a deck into a fan */}
      <CardFan images={galleryImages} eyebrow="Signature Looks" title="Our Finest Work" />

      <section className="section bg-cream pt-4">
        <div className="container-page">
          <FilterTabs label="Filter gallery by category" options={galleryCategories} active={active} onChange={setActive} />
          <GalleryGrid key={active} images={visible} />
        </div>
      </section>
    </>
  )
}
