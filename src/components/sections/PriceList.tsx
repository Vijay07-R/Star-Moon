import { priceList } from '../../data/priceList'
import SectionHeading from '../ui/SectionHeading'

/** Full menu of services and prices, grouped by category, with jump links. */
export default function PriceList() {
  return (
    <section id="price-list" className="section scroll-mt-24 bg-white">
      <div className="container-page">
        <SectionHeading eyebrow="Our Menu" title="Service Price List" />

        <nav aria-label="Price list categories" className="mx-auto mb-10 flex max-w-4xl flex-wrap justify-center gap-2">
          {priceList.map((cat) => (
            <a
              key={cat.id}
              href={`#price-${cat.id}`}
              className="rounded-full border border-burgundy/20 px-4 py-1.5 text-sm text-burgundy transition-colors hover:bg-burgundy hover:text-white"
            >
              {cat.title}
            </a>
          ))}
        </nav>

        <div className="columns-1 gap-6 md:columns-2">
          {priceList.map((cat) => (
            <div
              key={cat.id}
              id={`price-${cat.id}`}
              className="mb-6 scroll-mt-28 break-inside-avoid rounded-xl border border-beige/40 bg-cream p-6 md:p-7"
            >
              <h3 className="mb-4 border-b border-beige/50 pb-3 font-serif text-xl font-semibold text-burgundy md:text-2xl">
                {cat.title}
              </h3>
              <ul className="space-y-2.5">
                {cat.items.map((item) => (
                  <li key={item.name} className="flex items-baseline gap-3 text-[15px]">
                    <span className="text-espresso">{item.name}</span>
                    <span aria-hidden className="flex-1 translate-y-[-3px] border-b border-dotted border-espresso/25" />
                    <span className="shrink-0 text-right font-semibold whitespace-nowrap text-burgundy">
                      {item.price}
                      {item.note && <span className="ml-1 text-xs font-normal text-espresso/60">({item.note})</span>}
                    </span>
                  </li>
                ))}
              </ul>
              {cat.footnote && <p className="mt-4 text-sm text-espresso/65 italic">{cat.footnote}</p>}
            </div>
          ))}
        </div>

        <p className="mt-4 text-center text-sm text-espresso/60">
          Prices may vary with hair length and products used. Please ask our team for an exact quote.
        </p>
      </div>
    </section>
  )
}
