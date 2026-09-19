import type { Metadata } from 'next'
import BrandFilm from './BrandFilm'

export const metadata: Metadata = {
  title: 'VOLT — Intro de marca',
  description: 'Animación del logo VOLT y paleta visual para web.',
}

export default function BrandPage() {
  return <BrandFilm />
}
