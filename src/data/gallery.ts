import type { FilterOption, GalleryCategory, GalleryImage } from '../types'
import { img } from './images'
import bridalLehenga from '../assets/gallery/bridal-lehenga.jpg'
import bridalFlowerJadai from '../assets/gallery/bridal-flower-jadai.jpg'
import sareeLook from '../assets/gallery/saree-look.jpg'
import jewelledBraid from '../assets/gallery/jewelled-braid.jpg'
import receptionLook from '../assets/gallery/reception-look.jpg'

export const galleryCategories: FilterOption<GalleryCategory>[] = [
  { value: 'all', label: 'All' },
  { value: 'bridal', label: 'Bridal Makeup' },
  { value: 'hair', label: 'Hair Styling' },
  { value: 'skincare', label: 'Skincare' },
  { value: 'interior', label: 'Salon Interior' },
  { value: 'transformations', label: 'Beauty Transformations' },
]

export const galleryImages: GalleryImage[] = [
  // Our own salon work (shown first)
  { id: 19, src: bridalLehenga, title: 'Bridal lehenga look', category: 'bridal', position: '50% 25%' },
  { id: 20, src: bridalFlowerJadai, title: 'Traditional flower jadai', category: 'hair', position: '50% 30%' },
  { id: 21, src: sareeLook, title: 'Silk saree glam', category: 'transformations', position: '50% 20%' },
  { id: 22, src: jewelledBraid, title: 'Jewelled braid styling', category: 'hair', position: '50% 30%' },
  { id: 23, src: receptionLook, title: 'Soft reception glam', category: 'bridal', position: '50% 15%' },
  // Stock photography
  { id: 1, src: img('1519741497674-611481863552', 1200), title: 'Classic bridal elegance', category: 'bridal' },
  { id: 2, src: img('1560066984-138dadb4c035', 1200), title: 'Our styling lounge', category: 'interior' },
  { id: 3, src: img('1562322140-8baeececf3df', 1200), title: 'Precision colour work', category: 'hair' },
  { id: 4, src: img('1570172619644-dfd03ed5d881', 1200), title: 'Relaxing facial therapy', category: 'skincare' },
  { id: 5, src: img('1487412947147-5cebf100ffc2', 1200), title: 'Soft glam finish', category: 'transformations' },
  { id: 6, src: img('1606800052052-a08af7148866', 1200), title: 'Bridal portrait', category: 'bridal' },
  { id: 7, src: img('1522337360788-8b13dee7a37e', 1200), title: 'Blow-dry & styling', category: 'hair' },
  { id: 8, src: img('1600948836101-f9ffda59d250', 1200), title: 'Reception & waiting area', category: 'interior' },
  { id: 9, src: img('1598440947619-2c35fc9aa908', 1200), title: 'Premium skincare rituals', category: 'skincare' },
  { id: 10, src: img('1487412720507-e7ab37603c6f', 1200), title: 'Radiant natural look', category: 'transformations' },
  { id: 11, src: img('1511285560929-80b456fea0bc', 1200), title: 'Wedding day ready', category: 'bridal' },
  { id: 12, src: img('1560869713-7d0a29430803', 1200), title: 'Hair spa treatment', category: 'hair' },
  { id: 13, src: img('1521590832167-7bcbfaa6381f', 1200), title: 'Styling stations', category: 'interior' },
  { id: 14, src: img('1616394584738-fc6e612e71b9', 1200), title: 'Glowing skin care', category: 'skincare' },
  { id: 15, src: img('1531746020798-e6953c6e8e04', 1200), title: 'Fresh, confident glow', category: 'transformations' },
  { id: 16, src: img('1595476108010-b4d1f102b1b1', 1200), title: 'Effortless waves', category: 'hair' },
  { id: 17, src: img('1633681926022-84c23e8cb2d6', 1200), title: 'Treatment suite', category: 'interior' },
  { id: 18, src: img('1512496015851-a90fb38ba796', 1200), title: 'Professional makeup kit', category: 'transformations' },
]
