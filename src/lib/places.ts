export type PlaceSuggestion = {
  id: string
  label: string
  secondary: string
  provider: 'google' | 'osm'
  lat?: number
  lng?: number
  address?: string
}

export type PlaceDetails = {
  id: string
  address: string
  lat: number
  lng: number
  mapsUrl: string
}

export function mapsSearchUrl(lat?: number, lng?: number, address?: string) {
  const query = address?.trim() || (lat && lng ? `${lat},${lng}` : '')
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`
}

export function mapsEmbedUrl(lat?: number, lng?: number, address?: string) {
  const query = lat && lng ? `${lat},${lng}` : address?.trim() || ''
  return `https://maps.google.com/maps?q=${encodeURIComponent(query)}&hl=es&z=16&output=embed`
}
