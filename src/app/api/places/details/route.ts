import { NextResponse } from 'next/server'
import { mapsSearchUrl, type PlaceDetails } from '@/lib/places'

export const dynamic = 'force-dynamic'

type GoogleDetails = {
  status: string
  result?: {
    formatted_address?: string
    name?: string
    url?: string
    geometry?: { location?: { lat: number; lng: number } }
  }
}

export async function GET(request: Request) {
  const id = new URL(request.url).searchParams.get('id')?.trim() ?? ''
  if (!id || id.startsWith('osm:')) {
    return NextResponse.json({ error: 'place_id inválido' }, { status: 400 })
  }

  const key = process.env.GOOGLE_MAPS_API_KEY
  if (!key) {
    return NextResponse.json({ error: 'Falta GOOGLE_MAPS_API_KEY' }, { status: 501 })
  }

  const url = new URL('https://maps.googleapis.com/maps/api/place/details/json')
  url.searchParams.set('place_id', id)
  url.searchParams.set('fields', 'formatted_address,geometry,url,name')
  url.searchParams.set('language', 'es')
  url.searchParams.set('key', key)

  const res = await fetch(url.toString(), { next: { revalidate: 0 } })
  if (!res.ok) {
    return NextResponse.json({ error: 'Google Places no disponible' }, { status: 502 })
  }

  const data = (await res.json()) as GoogleDetails
  const loc = data.result?.geometry?.location
  if (data.status !== 'OK' || !loc) {
    return NextResponse.json({ error: data.status || 'Sin coordenadas' }, { status: 404 })
  }

  const address = data.result?.formatted_address || data.result?.name || ''
  const details: PlaceDetails = {
    id,
    address,
    lat: loc.lat,
    lng: loc.lng,
    mapsUrl: data.result?.url || mapsSearchUrl(loc.lat, loc.lng, address),
  }

  return NextResponse.json(details)
}
