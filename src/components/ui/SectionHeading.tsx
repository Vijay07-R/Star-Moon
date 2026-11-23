interface SectionHeadingProps {
  eyebrow: string
  title: string
  description?: string
  align?: 'center' | 'left'
  light?: boolean
}

export default function SectionHeading({ eyebrow, title, description, align = 'center', light = false }: SectionHeadingProps) {
  const alignment = align === 'center' ? 'mx-auto text-center' : 'text-left'
  return (
    <div className={`mb-10 max-w-2xl md:mb-14 ${alignment}`}>
      <p className={`mb-3 text-xs font-semibold tracking-[0.25em] uppercase ${light ? 'text-gold' : 'text-gold-dark'}`}>
        {eyebrow}
      </p>
      <h2 className={`text-3xl leading-tight font-semibold md:text-4xl ${light ? 'text-white' : ''}`}>{title}</h2>
      <div className={`mt-4 h-px w-16 bg-gold ${align === 'center' ? 'mx-auto' : ''}`} />
      {description && (
        <p className={`mt-5 text-base leading-relaxed md:text-lg ${light ? 'text-white/80' : 'text-forest/70'}`}>{description}</p>
      )}
    </div>
  )
}
