import { Star } from 'lucide-react'

export default function StarRating({ rating, size = 16 }: { rating: number; size?: number }) {
  return (
    <div className="flex items-center gap-0.5" role="img" aria-label={`Rated ${rating} out of 5`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          width={size}
          height={size}
          aria-hidden
          className={i < rating ? 'fill-beige text-beige' : 'fill-transparent text-espresso/20'}
        />
      ))}
    </div>
  )
}
