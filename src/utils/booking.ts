/** Builds a link to the appointment form with the service or package pre-selected. */
export const bookingLink = (itemId?: string): string =>
  itemId ? `/contact?service=${encodeURIComponent(itemId)}#appointment` : '/contact#appointment'
