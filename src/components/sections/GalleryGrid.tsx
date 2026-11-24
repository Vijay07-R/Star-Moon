import { useCallback, useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react'
import { galleryCategories } from '../../data/gallery'
import type { GalleryImage } from '../../types'
import Modal from '../ui/Modal'
import SmartImage from '../ui/SmartImage'

const categoryLabel = (value: string) => galleryCategories.find((c) => c.value === value)?.label ?? ''

/** Responsive image grid with a click-to-view lightbox (keyboard: ← → Esc). */
export default function GalleryGrid({ images }: { images: GalleryImage[] }) {
  const [index, setIndex] = useState<number | null>(null)
  const close = useCallback(() => setIndex(null), [])
  const step = useCallback(
    (dir: number) => setIndex((i) => (i === null ? i : (i + dir + images.length) % images.length)),
    [images.length],
  )

  useEffect(() => {
    if (index === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') step(1)
      if (e.key === 'ArrowLeft') step(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [index, step])

  const current = index !== null ? images[index] : null

  return (
    <>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
        {images.map((image, i) => (
          <button
            key={image.id}
            data-tilt
            type="button"
            onClick={() => setIndex(i)}
            className="group relative aspect-square overflow-hidden rounded-lg bg-blush focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-beige"
            aria-label={`View ${image.title}`}
          >
            <SmartImage
              src={image.src}
              alt={image.title}
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              style={image.position ? { objectPosition: image.position } : undefined}
            />
            <span className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-burgundy/70 p-3 text-center text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
              <ZoomIn className="h-6 w-6 text-beige" aria-hidden />
              <span className="font-serif text-base md:text-lg">{image.title}</span>
              <span className="text-xs tracking-widest text-beige uppercase">{categoryLabel(image.category)}</span>
            </span>
          </button>
        ))}
      </div>

      <Modal open={current !== null} onClose={close} labelledBy="lightbox-title" dark className="flex w-full max-w-5xl flex-col items-center">
        {current && (
          <>
            <div className="relative flex w-full items-center justify-center">
              <button
                type="button"
                onClick={() => step(-1)}
                aria-label="Previous image"
                className="absolute left-0 z-10 rounded-full bg-white/10 p-2 text-white hover:bg-white/25 md:-left-14"
              >
                <ChevronLeft className="h-7 w-7" />
              </button>
              <SmartImage
                key={current.id}
                src={current.src}
                alt={current.title}
                loading="eager"
                className="max-h-[75vh] w-auto max-w-full rounded-md object-contain"
              />
              <button
                type="button"
                onClick={() => step(1)}
                aria-label="Next image"
                className="absolute right-0 z-10 rounded-full bg-white/10 p-2 text-white hover:bg-white/25 md:-right-14"
              >
                <ChevronRight className="h-7 w-7" />
              </button>
            </div>
            <div className="mt-4 text-center">
              <p id="lightbox-title" className="font-serif text-xl text-white">
                {current.title}
              </p>
              <p className="mt-1 text-sm text-white/60">
                {categoryLabel(current.category)} · {index! + 1} / {images.length}
              </p>
            </div>
          </>
        )}
      </Modal>
    </>
  )
}
