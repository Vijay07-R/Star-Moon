import type { PriceCategory } from '../types'

/**
 * Full salon price list, shown on the Services page.
 * Prices are display strings so ranges and options ("₹700 / ₹1,000") can be shown as-is.
 */
export const priceList: PriceCategory[] = [
  {
    id: 'haircut',
    title: 'Haircut',
    items: [
      { name: 'Straight Cut', price: '₹200' },
      { name: 'U Cut', price: '₹300' },
      { name: 'V Cut', price: '₹300' },
      { name: 'Deep U Cut', price: '₹350' },
      { name: 'Volume Cut', price: '₹400' },
      { name: 'Feather Cut', price: '₹500' },
      { name: 'Layer Cut', price: '₹600' },
      { name: 'Advance Layer Cut', price: '₹600' },
      { name: 'Step Cut', price: '₹600' },
      { name: 'Butterfly Cut', price: '₹700' },
    ],
  },
  {
    id: 'hair-colouring',
    title: 'Hair Colouring',
    items: [
      { name: 'Highlights', price: '₹250', note: 'per streak' },
      { name: 'Root Touch-Up', price: '₹800 – ₹1,000' },
      { name: 'Balayage', price: '₹2,000' },
      { name: 'Global Hair Colour', price: '₹2,500 – ₹4,000' },
    ],
  },
  {
    id: 'hair-treatments',
    title: 'Hair Treatments',
    items: [
      { name: 'Dandruff Treatment', price: '₹1,200' },
      { name: 'Hair Fall Treatment', price: '₹1,500' },
      { name: 'Smoothening', price: '₹3,500 – ₹5,000' },
      { name: 'Straightening', price: '₹3,500 – ₹5,000' },
      { name: 'Keratin Treatment', price: '₹3,500 – ₹5,000' },
      { name: 'Hair Botox Treatment', price: '₹3,500 – ₹5,000' },
      { name: 'Nanoplasty', price: '₹3,500 – ₹5,000' },
    ],
  },
  {
    id: 'head-massage',
    title: 'Head Massage & Hair Wash',
    items: [
      { name: 'Hair Wash', price: '₹200 / ₹300' },
      { name: 'Head Massage', price: '₹500' },
      { name: 'Coconut Oil', price: '₹500' },
      { name: 'Olive Oil', price: '₹600' },
      { name: 'Rosemary Oil', price: '₹800' },
      { name: 'Badam Oil', price: '₹800' },
    ],
  },
  {
    id: 'facials',
    title: 'Facials',
    items: [
      { name: 'Mini Facial', price: '₹500' },
      { name: 'Fruit Facial', price: '₹800' },
      { name: 'Glow Facial', price: '₹1,000' },
      { name: 'Silver Facial', price: '₹1,200' },
      { name: 'Wine Facial', price: '₹1,500' },
      { name: 'Pearl Facial', price: '₹1,500' },
      { name: 'Fresh Fruit Facial', price: '₹1,600' },
      { name: 'Dhaaga Facial', price: '₹1,700' },
      { name: 'Aroma Facial', price: '₹1,800' },
      { name: 'Bridal Facial', price: '₹1,800' },
      { name: 'Vitamin Facial', price: '₹1,800' },
      { name: 'Golden Facial', price: '₹2,000' },
      { name: 'Organic Facial', price: '₹2,000' },
      { name: 'Anti-Ageing Facial', price: '₹2,000' },
      { name: 'O3+ Facial', price: '₹2,500' },
      { name: 'Skin Miracle Facial', price: '₹2,500' },
    ],
  },
  {
    id: 'bleach-detan',
    title: 'Bleach & De-Tan',
    items: [
      { name: 'Fruit Bleach', price: '₹300' },
      { name: 'Oxy / Silky Bleach', price: '₹400' },
      { name: 'Golden Bleach', price: '₹500' },
      { name: 'D-Tan / Tan Remove', price: '₹500' },
      { name: 'Raaga D-Tan', price: '₹500' },
      { name: 'Full Hand Bleach', price: '₹1,000' },
      { name: 'Full Leg Bleach', price: '₹1,600' },
      { name: 'Full Body Bleach', price: '₹2,500' },
    ],
  },
  {
    id: 'threading',
    title: 'Threading',
    items: [
      { name: 'Upper Lip', price: '₹10' },
      { name: 'Forehead', price: '₹10' },
      { name: 'Chin', price: '₹20' },
      { name: 'Eyebrow Threading', price: '₹60' },
    ],
  },
  {
    id: 'waxing',
    title: 'Waxing',
    items: [
      { name: 'Face Waxing', price: '₹250' },
      { name: 'Half Hand', price: '₹350' },
      { name: 'Half Leg', price: '₹600' },
      { name: 'Full Hand', price: '₹700' },
      { name: 'Full Leg', price: '₹1,000' },
    ],
  },
  {
    id: 'pedicure-manicure',
    title: 'Pedicure & Manicure',
    items: [
      { name: 'Pedicure Clean', price: '₹400' },
      { name: 'Manicure', price: '₹500' },
      { name: 'Pedicure', price: '₹700 / ₹1,000' },
    ],
  },
  {
    id: 'bridal-party-makeup',
    title: 'Bridal & Party Makeup',
    items: [
      { name: 'Party Makeup', price: '₹3,500 – ₹5,000' },
      { name: 'Bridal Makeup', price: '₹8,000' },
      { name: 'Waterproof Makeup', price: '₹13,000' },
      { name: 'HD Makeup', price: '₹15,000' },
      { name: 'Airbrush Makeup', price: '₹15,000' },
    ],
    footnote: 'Bridal makeup includes hairstyle, makeup, eyelashes, lens, saree draping and changeover.',
  },
  {
    id: 'bridal-facial-package',
    title: 'Special Bridal Facial Package',
    items: [{ name: 'Special Bridal Facial Package', price: '₹3,499' }],
    footnote: 'Includes Bridal Facial, D-Tan & Bleach, Pedicure, Hand Waxing and Threading.',
  },
]
