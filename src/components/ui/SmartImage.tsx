import { useState } from 'react'
import type { ImgHTMLAttributes } from 'react'
import { Flower2 } from 'lucide-react'

type SmartImageProps = ImgHTMLAttributes<HTMLImageElement> & { alt: string }

/** Lazy-loaded image that falls back to a branded tile if the photo fails to load. */
export default function SmartImage({ className = '', alt, ...rest }: SmartImageProps) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex items-center justify-center bg-gradient-to-br from-emerald-soft to-gold-light ${className}`}
      >
        <Flower2 className="h-10 w-10 text-emerald-deep/40" aria-hidden />
      </div>
    )
  }

  return <img loading="lazy" decoding="async" alt={alt} onError={() => setFailed(true)} className={className} {...rest} />
}
