import ibwr2025Vasanthi from '../assets/certificates/ibwr-2025-vasanthi.webp'

export interface Certificate {
  id: string
  image: string
  title: string
  issuer: string
  year: string
  awardedTo: string
  description: string
  reference?: string
}

/** Real certificates and awards. Add new ones here and they appear on the About page. */
export const certificates: Certificate[] = [
  {
    id: 'ibwr-2025',
    image: ibwr2025Vasanthi,
    title: 'Certificate of Appreciation',
    issuer: 'India Book of World Records',
    year: '2025',
    awardedTo: 'B. Vasanthi',
    description:
      'Awarded for the Magical Hands World Record — Creative Multi Beauty Showcase Ramp Show, in appreciation of outstanding dedication and service in the beauty profession.',
    reference: 'Reg. No. IBWR/EP01280/2025',
  },
]
