import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import AboutPage from './pages/AboutPage'
import AcademyPage from './pages/AcademyPage'
import ContactPage from './pages/ContactPage'
import GalleryPage from './pages/GalleryPage'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import OffersPage from './pages/OffersPage'
import PreviewPage from './pages/PreviewPage'
import ServicesPage from './pages/ServicesPage'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="gallery" element={<GalleryPage />} />
        <Route path="offers" element={<OffersPage />} />
        <Route path="academy" element={<AcademyPage />} />
        <Route path="contact" element={<ContactPage />} />
        {/* Design preview of a scroll-driven hero; not linked in the menu yet */}
        <Route path="preview" element={<PreviewPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
