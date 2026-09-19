# VOLT Multiservicios SPA — Sitio Web

Landing page corporativa para presencia online.

## Alcance

- Quiénes somos
- Servicios
- Proyectos ejecutados
- Solicitar cotización
- Contacto (WhatsApp + correo)

**Inversión referencial:** USD $300  
**Plazo:** 1–2 semanas

## Estructura del proyecto

```
volt-multiservicios/
├── branding/
│   ├── logos/          # Versiones del logo
│   ├── mockups/        # Hero y secciones
│   └── paleta/         # Tablero de colores
├── docs/               # Paleta y estructura visual
├── public/
│   └── img/            # Assets listos para la web
└── src/                # Código de la app (próximo paso)
```

## Branding incluido

### Logos (`branding/logos/`)
| Archivo | Descripción |
|---------|-------------|
| `volt-logo-moderno-v2.png` | **Recomendado** — monograma V + rayo |
| `volt-logo-moderno-v3.png` | Alternativa — icono en cuadro |
| `volt-multiservicios-logo-mejorado.png` | Ajuste tipográfico del original |

Logo web activo: `public/img/logo-volt.png` (copia de v2)

### Mockups (`branding/mockups/`)
- `volt-mockup-hero.png`
- `volt-mockup-secciones.png`

### Paleta (`branding/paleta/`)
- `volt-paleta-colores.png`

## Tokens de color

```css
--volt-yellow: #FFD60A;
--volt-yellow-soft: #F5C518;
--volt-black: #0A0A0A;
--volt-surface: #1A1A1A;
--volt-text: #F7F7F5;
--volt-muted: #9CA3AF;
--volt-bg-light: #FAFAF8;
--volt-text-dark: #111111;
--volt-whatsapp: #25D366;
```

## Secciones de la landing

1. Hero  
2. Quiénes somos  
3. Servicios  
4. Proyectos ejecutados  
5. Cotización  
6. Contacto / Footer  

## Cómo correr el proyecto

```bash
cd C:\Users\salva\volt-multiservicios
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000)

## Configurar datos del cliente

Edita `src/data/site.ts`:
- WhatsApp
- Correo
- Textos de servicios / proyectos

## Stack

- Next.js 14 (App Router)
- TypeScript
- CSS Modules + tokens de marca VOLT

## Desplegar en Vercel

1. Sube este repo a GitHub (`salva920/volt`).
2. En [vercel.com](https://vercel.com) → Add New Project → Import `salva920/volt`.
3. Framework: Next.js (se detecta solo). Build: `next build`.
4. Variables de entorno (opcional): `GOOGLE_MAPS_API_KEY` si quieres autocompletar de direcciones con Google. Sin ella el sitio igual funciona.
5. Deploy. El dominio quedará tipo `volt-xxxxx.vercel.app`; luego puedes agregar un dominio propio.
# volt
