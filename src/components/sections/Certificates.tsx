import { useState } from 'react'
import { Award, ZoomIn } from 'lucide-react'
import { certificates } from '../../data/certificates'
import type { Certificate } from '../../data/certificates'
import Modal from '../ui/Modal'

/** Real certificates & awards, each opening full size on click. */
export default function Certificates() {
  const [open, setOpen] = useState<Certificate | null>(null)

  return (
    <section className="section bg-white">
      <div className="container-page">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="text-xs font-bold tracking-[0.25em] text-beige uppercase">Certificates & Awards</span>
          <div className="mx-auto mt-2 mb-6 h-1 w-16 rounded-full bg-beige" />
          <h2 className="text-4xl font-bold lg:text-5xl">Recognised for Our Work</h2>
        </div>

        <div className="mx-auto grid max-w-5xl gap-10">
          {certificates.map((cert) => (
            <article key={cert.id} data-tilt className="grid items-center gap-8 rounded-3xl bg-gradient-to-br from-cream to-blush/40 p-6 shadow-lg md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] md:p-10">
              <button
                type="button"
                onClick={() => setOpen(cert)}
                className="group relative mx-auto block w-full max-w-sm overflow-hidden rounded-xl shadow-xl ring-4 ring-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-beige"
                aria-label={`View ${cert.title} full size`}
              >
                <img src={cert.image} alt={`${cert.title} from ${cert.issuer}, awarded to ${cert.awardedTo}`} loading="lazy" className="aspect-[3/4] w-full object-cover" />
                <span className="absolute inset-0 flex items-center justify-center bg-burgundy/60 text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                  <ZoomIn className="h-8 w-8" aria-hidden />
                </span>
              </button>
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-burgundy px-4 py-1.5 text-xs font-bold tracking-wider text-beige uppercase">
                  <Award className="h-4 w-4" aria-hidden /> {cert.issuer} · {cert.year}
                </span>
                <h3 className="mt-5 text-3xl font-bold">{cert.title}</h3>
                <p className="mt-2 text-lg font-semibold text-burgundy">Awarded to {cert.awardedTo}</p>
                <p className="mt-4 text-lg leading-relaxed text-espresso/75">{cert.description}</p>
                {cert.reference && <p className="mt-4 text-sm tracking-wide text-espresso/55">{cert.reference}</p>}
              </div>
            </article>
          ))}
        </div>
      </div>

      <Modal open={open !== null} onClose={() => setOpen(null)} labelledBy="certificate-title" dark className="flex w-full max-w-2xl flex-col items-center">
        {open && (
          <>
            <img src={open.image} alt={`${open.title} from ${open.issuer}`} className="max-h-[80vh] w-auto rounded-lg object-contain shadow-2xl" />
            <p id="certificate-title" className="mt-4 text-center font-serif text-xl text-white">
              {open.title} · {open.issuer} {open.year}
            </p>
          </>
        )}
      </Modal>
    </section>
  )
}
