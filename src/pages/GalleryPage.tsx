import { useMemo, useState } from 'react'
import GalleryGrid from '../components/sections/GalleryGrid'
import FilterTabs from '../components/ui/FilterTabs'
import { galleryCategories, galleryImages } from '../data/gallery'
import type { GalleryCategory } from '../types'
import PhotoStory from '../components/story/PhotoStory'
import { BlurInText } from '../components/story/Words'
import { photos } from '../data/photos'

export default function GalleryPage() {
  const [active, setActive] = useState<GalleryCategory | 'all'>('all')
  const visible = useMemo(() => (active === 'all' ? galleryImages : galleryImages.filter((g) => g.category === active)), [active])

  return (
    <>
      <section className="section bg-cream">
        <div className="container-page">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <p className="anim-blur-in text-xs font-bold tracking-[0.3em] text-beige-dark uppercase">Our Portfolio</p>
            <BlurInText as="h1" text="Beauty Gallery" delay={120} className="mt-3 text-4xl font-semibold sm:text-6xl" />
            <p className="anim-blur-in mt-4 text-espresso/65 [--delay:400ms]">Real looks created by our team for brides, parties and everyday glow.</p>
          </div>
          <FilterTabs label="Filter gallery by category" options={galleryCategories} active={active} onChange={setActive} />
          <GalleryGrid key={active} images={visible} />
        </div>
      </section>

      {/* Scroll story: a closer look at one of our hairstyles */}
      <PhotoStory
        src={photos.jewelledBraid}
        alt="Puff braid with jewelled hair clips by Star Moon"
        aspect={725 / 1600}
        from={{ x: 0.52, y: 0.4, zoom: 1.0 }}
        to={{ x: 0.53, y: 0.35, zoom: 1.7 }}
        points={[
          { x: 0.56, y: 0.175, label: 'Hair Jewels' },
          { x: 0.545, y: 0.33, label: 'Puff Braid' },
          { x: 0.51, y: 0.62, label: 'Pearl Drops' },
        ]}
        side="right"
        eyebrow="A Closer Look"
        title="Every Detail Counts"
        text="Volume at the crown, a soft puff braid and jewelled clips placed by hand to catch the light."
        title2="Styled to Shine"
        text2="Matched to your saree, jewellery and the moment you're dressing for."
      />
    </>
  )
}
