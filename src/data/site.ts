export const siteConfig = {
  name: 'VOLT Multiservicios SPA',
  shortName: 'VOLT',
  whatsapp: '56974651026',
  email: 'voltmultiserviciosspa@gmail.com',
  phoneLabel: '+56 9 7465 1026',
  address: 'Chile, Región Metropolitana, comuna San Joaquín, calle Rivas 694 B-14',
  tagline: 'Electricidad y construcción con respaldo profesional',
  heroLead:
    'Instalaciones y montajes eléctricos, CCDD, CCTV, obras y mantenimiento ejecutados con calidad, seguridad y atención cercana.',
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
    lead: 'Montaje, mantención y puesta en marcha con estándar de faena.',
    items: [
      {
        title: 'Instalaciones y montajes eléctricos, CCDD',
        description:
          'Instalación, montaje, mantenimiento y normalización de sistemas eléctricos en proyectos residenciales, comerciales e industriales: tableros, canalizaciones, cableado, iluminación, fuerza y control, además de corrientes débiles (CCDD) e infraestructura tecnológica.',
      },
      {
        title: 'CCTV y seguridad',
        description: 'Sistema de cámaras de seguridad, monitoreo y soluciones de vigilancia para viviendas, comercios e instalaciones que requieren control y protección.',
      },
      {
        title: 'Mantenimiento y servicios industriales',
        description: 'Trabajos de mantenimiento preventivo y correctivo, reparación de instalaciones, adecuaciones y mejoras para reducir interrupciones y mantener la continuidad operacional de la infraestructura.',
      },
    ],
  },
  {
    id: 'construccion',
    title: 'Construcción',
    lead: 'Obra gruesa y terminaciones, coordinadas con la parte eléctrica.',
    items: [
      {
        title: 'Construcción y remodelación',
        description: 'Ejecución de obras civiles, ampliaciones, remodelaciones y habilitación de espacios comerciales, institucionales y residenciales, coordinando las distintas especialidades necesarias para una correcta ejecución.',
      },
      {
        title: 'Mantenimiento y mejoras',
        description: 'Adecuaciones, reparaciones y mejoras de instalaciones para mantener operatividad, funcionalidad y seguridad en los espacios.',
      },
      {
        title: 'Sistemas de protección contra incendio',
        description: 'Ejecución y apoyo en trabajos relacionados con sistemas de protección contra incendios, incluyendo montaje, mantenimiento y normalización de instalaciones y elementos asociados a la seguridad de personas e infraestructura.',
      },
    ],
  },
]

export const projects = [
  {
    title: 'Tablero e instalación industrial',
    category: 'Eléctrico',
    image: '/img/proyectos/tablero-industrial.png',
    alt: 'Tablero eléctrico industrial en faena',
  },
  {
    title: 'Canalización en edificio',
    category: 'Eléctrico',
    image: '/img/proyectos/instalacion-edificio.png',
    alt: 'Instalación eléctrica en edificio en obra',
  },
  {
    title: 'Albañilería y ampliación',
    category: 'Construcción',
    image: '/img/proyectos/albanileria-ampliacion.png',
    alt: 'Faena de albañilería y ampliación',
  },
  {
    title: 'Terminaciones interiores',
    category: 'Construcción',
    image: '/img/proyectos/terminaciones.png',
    alt: 'Terminaciones de pintura y pavimento en interior',
  },
]
