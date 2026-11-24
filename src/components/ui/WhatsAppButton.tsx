import { whatsappLink } from '../../data/site'
import { WhatsAppIcon } from './SocialIcons'

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed right-4 bottom-4 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-colors hover:bg-[#1ebe5b] md:right-6 md:bottom-6 md:h-14 md:w-14"
    >
      <span aria-hidden className="anim-pulse-ring absolute inset-0 rounded-full bg-[#25D366]" />
      <WhatsAppIcon className="relative h-6 w-6 fill-current md:h-7 md:w-7" />
    </a>
  )
}
