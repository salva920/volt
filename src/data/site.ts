export const siteConfig = {
  name: 'VOLT Multiservicios SPA',
  shortName: 'VOLT',
  whatsapp: '56974651026',
  email: 'voltmultiserviciosspa@gmail.com',
  phoneLabel: '+56 9 7465 1026',
  address: 'Chile, Región Metropolitana, comuna San Joaquín, calle Rivas 694 B-14',
  tagline: 'Electricidad y construcción con respaldo profesional',
  heroLead:
    'Instalaciones y montajes eléctricos, CCDD, CCTV, obras menores y mantenimiento, con calidad, seguridad y atención cercana.',
}

export const navLinks = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#contacto', label: 'Contacto' },
]

export const serviceGroups = [
  {
    id: 'electrico',
    title: 'Eléctrico',
    lead: 'Montaje, mantención y puesta en marcha.',
    image: '/img/tablero%20europeo.png',
    imageAlt: 'Tablero eléctrico con interruptores modulares y cableado norma IEC',
    imageFit: 'contain' as const,
    items: [
      {
        title: 'Instalaciones y montajes',
        description: 'Tableros IEC, canalización, fuerza e iluminación.',
      },
      {
        title: 'CCDD y CCTV',
        description: 'Corrientes débiles, cámaras y monitoreo.',
      },
      {
        title: 'Mantenimiento',
        description: 'Preventivo y correctivo para continuidad operacional.',
      },
    ],
  },
  {
    id: 'construccion',
    title: 'Construcción',
    lead: 'Obras menores y terminaciones, coordinadas con lo eléctrico.',
    image: '/img/estructuras%20metalicas.jpg',
    imageAlt: 'Estructura Metalcon en obra, sin albañilería de ladrillo',
    imageFit: 'cover' as const,
    items: [
      {
        title: 'Obras menores y remodelación',
        description: 'Metalcon, volcanita, ampliaciones y habilitación de espacios.',
      },
      {
        title: 'Revestimientos y cubiertas',
        description: 'Fachadas, interiores, tejas y techumbres.',
      },
      {
        title: 'Protección contra incendio',
        description: 'Montaje, mantención y normalización de sistemas.',
      },
    ],
  },
]

export const projects = [
  {
    title: 'Tablero eléctrico norma IEC',
    category: 'Eléctrico',
    image: '/img/tablero%20europeo.png',
    alt: 'Tablero eléctrico con interruptores modulares y cableado según configuración europea IEC',
    fit: 'contain' as const,
    featured: true,
  },
  {
    title: 'Estructura Metalcon',
    category: 'Construcción',
    image: '/img/estructuras%20metalicas.jpg',
    alt: 'Estructura de perfiles metálicos Metalcon en construcción',
  },
  {
    title: 'Tabiques Metalcon',
    category: 'Construcción',
    image: '/img/estructura%20metalica.jpg',
    alt: 'Tabiques interiores de perfilería metálica',
  },
  {
    title: 'Obra Metalcon en terreno',
    category: 'Construcción',
    image: '/img/estructura%20metalica2.jpg',
    alt: 'Montaje de estructura Metalcon en terreno',
  },
  {
    title: 'Mantención de techumbres',
    category: 'Construcción',
    image: '/img/ladrillos%20techo.jpg',
    alt: 'Cubiertas de teja, zinc y membranas en techumbres',
  },
]
