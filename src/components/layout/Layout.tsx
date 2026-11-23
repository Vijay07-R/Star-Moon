import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import ScrollManager from './ScrollManager'
import WhatsAppButton from '../ui/WhatsAppButton'

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollManager />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
