import type { FilterOption, GalleryCategory, GalleryImage } from '../types'
import { photos } from './photos'

export const galleryCategories: FilterOption<GalleryCategory>[] = [
  { value: 'all', label: 'All' },
  { value: 'bridal', label: 'Bridal Makeup' },
  { value: 'hair', label: 'Hair Styling' },
  { value: 'transformations', label: 'Beauty Transformations' },
]

export const galleryImages: GalleryImage[] = [
  { id: 1, src: photos.bridalLehenga, title: 'Bridal lehenga look', category: 'bridal', position: '50% 25%' },
  { id: 2, src: photos.bridalFlowerJadai, title: 'Traditional flower jadai', category: 'hair', position: '50% 30%' },
  { id: 3, src: photos.sareeLook, title: 'Silk saree glam', category: 'transformations', position: '50% 20%' },
  { id: 4, src: photos.jewelledBraid, title: 'Jewelled braid styling', category: 'hair', position: '50% 30%' },
  { id: 5, src: photos.receptionLook, title: 'Soft reception glam', category: 'bridal', position: '50% 15%' },
]
