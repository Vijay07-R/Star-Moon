import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import IntroSplash from './IntroSplash'
import Header from './Header'
import RevealOnScroll from './RevealOnScroll'
import ScrollManager from './ScrollManager'
import TiltEffect from './TiltEffect'
import WhatsAppButton from '../ui/WhatsAppButton'

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollManager />
      <RevealOnScroll />
      <TiltEffect />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
      <IntroSplash />
    </div>
  )
}
