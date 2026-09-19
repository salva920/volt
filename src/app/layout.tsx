import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'VOLT Multiservicios SPA | Electricidad y construcción',
  description:
    'VOLT Multiservicios: instalaciones y montajes eléctricos, CCDD y CCTV, construcción, remodelación y mantenimiento. Cotiza por WhatsApp o correo.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
