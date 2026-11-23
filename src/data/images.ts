/**
 * Central image helper. All photography is served from Unsplash.
 * Swap these URLs for your own salon photos when available.
 */
export const img = (id: string, width = 900, height?: number): string =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${width}${height ? `&h=${height}` : ''}&q=80`
