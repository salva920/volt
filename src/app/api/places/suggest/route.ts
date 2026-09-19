import { NextResponse } from 'next/server'
import type { PlaceSuggestion } from '@/lib/places'

export const dynamic = 'force-dynamic'

type GooglePrediction = {
  place_id: string
  description: string
  structured_formatting?: {
    main_text?: string
    secondary_text?: string
  }
}

type OsmResult = {
  place_id: number
  display_name: string
  lat: string
  lon: string
  address?: {
    road?: string
    house_number?: string
    city?: string
    town?: string
    village?: string
    municipality?: string
    state?: string
  }
}

async function suggestGoogle(query: string, key: string): Promise<PlaceSuggestion[]> {
  const url = new URL('https://maps.googleapis.com/maps/api/place/autocomplete/json')
  url.searchParams.set('input', query)
  url.searchParams.set('components', 'country:cl')
  url.searchParams.set('language', 'es')
  url.searchParams.set('key', key)

  const res = await fetch(url.toString(), { next: { revalidate: 0 } })
  if (!res.ok) throw new Error('Google Places no disponible')

  const data = (await res.json()) as { status: string; predictions?: GooglePrediction[] }
  if (data.status !== 'OK' && data.status !== 'ZERO_RESULTS') {
    throw new Error(data.status)
  }

  return (data.predictions ?? []).map((item) => ({
    id: item.place_id,
    label: item.structured_formatting?.main_text || item.description,
    secondary: item.structured_formatting?.secondary_text || '',
    provider: 'google' as const,
  }))
}

async function suggestOsm(query: string): Promise<PlaceSuggestion[]> {
  const url = new URL('https://nominatim.openstreetmap.org/search')
  url.searchParams.set('q', query)
  url.searchParams.set('countrycodes', 'cl')
  url.searchParams.set('format', 'json')
  url.searchParams.set('addressdetails', '1')
  url.searchParams.set('limit', '6')

  const res = await fetch(url.toString(), {
    headers: {
      Accept: 'application/json',
      'User-Agent': 'VOLT Multiservicios cotizacion (contacto@voltmultiservicios.cl)',
    },
    next: { revalidate: 0 },
  })
  if (!res.ok) throw new Error('No se pudo buscar la dirección')

  const data = (await res.json()) as OsmResult[]
  return data.map((item) => {
    const locality =
      item.address?.city ||
      item.address?.town ||
      item.address?.village ||
      item.address?.municipality ||
      item.address?.state ||
      ''
    const street = [item.address?.road, item.address?.house_number].filter(Boolean).join(' ')
    return {
      id: `osm:${item.place_id}`,
      label: street || item.display_name.split(',')[0] || item.display_name,
      secondary: locality || item.display_name,
      provider: 'osm' as const,
      lat: Number(item.lat),
      lng: Number(item.lon),
      address: item.display_name,
    }
  })
}

export async function GET(request: Request) {
  const query = new URL(request.url).searchParams.get('q')?.trim() ?? ''
  if (query.length < 3) {
    return NextResponse.json({ suggestions: [] satisfies PlaceSuggestion[] })
  }

  const key = process.env.GOOGLE_MAPS_API_KEY

  if (key) {
    try {
      const suggestions = await suggestGoogle(query, key)
      return NextResponse.json({ suggestions, provider: 'google' })
    } catch {
      // Si la key no está habilitada o hay cuota, cae a OSM.
    }
  }

  try {
    const suggestions = await suggestOsm(query)
    return NextResponse.json({ suggestions, provider: 'osm' })
  } catch {
    return NextResponse.json({ suggestions: [] }, { status: 502 })
  }
}
