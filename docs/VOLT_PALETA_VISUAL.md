# VOLT Multiservicios — Paleta y presencia visual

Propuesta de identidad visual para la web corporativa (landing: quiénes somos, servicios, proyectos, cotización y contacto).

---

## Concepto

**Energía + confianza + servicio técnico.**  
Negro profundo como base profesional; amarillo eléctrico como acento de acción (cotizar, WhatsApp, CTAs).

---

## Paleta principal

| Rol | Color | HEX | Uso en la web |
|-----|--------|-----|----------------|
| **Primario** | Amarillo Volt | `#FFD60A` | Botones, iconos, underline, highlights, hover |
| **Apoyo** | Amarillo cálido | `#F5C518` | Logo, acentos suaves, badges |
| **Base** | Negro | `#0A0A0A` | Fondo hero, footer, navbar oscura |
| **Superficie** | Carbón | `#1A1A1A` | Cards, secciones oscuras, menú |
| **Texto claro** | Hueso | `#F7F7F5` | Títulos y texto sobre fondos oscuros |
| **Texto secundario** | Gris | `#9CA3AF` | Párrafos, captions, placeholders |
| **Fondo claro** | Blanco humo | `#FAFAF8` | Secciones de contenido / proyectos |
| **Texto oscuro** | Negro suave | `#111111` | Texto sobre fondos claros |

### Opcional (confianza / éxito)
| Rol | Color | HEX | Uso |
|-----|--------|-----|-----|
| Éxito / WhatsApp | Verde | `#25D366` | Solo botón WhatsApp |
| Alerta suave | Ámbar | `#F59E0B` | Avisos menores (si aplica) |

---

## Presencia visual (cómo se ve la web)

### Hero / primera pantalla
- Fondo **negro** (`#0A0A0A`)
- Logo amarillo
- Título grande en `#F7F7F5`
- CTA principal en botón **amarillo** (`#FFD60A`) con texto negro
- CTA secundario: borde amarillo / texto amarillo (ghost)

### Secciones (Quiénes somos / Servicios)
- Alternar bloques: uno oscuro, uno claro (`#FAFAF8`)
- Iconos de servicio en amarillo
- Títulos fuertes, poco texto, mucho aire

### Proyectos ejecutados
- Grid de fotos con overlay oscuro al hover
- Etiqueta de proyecto en amarillo o blanco
- Sin “cards” con muchas sombras: limpio y técnico

### Cotización y contacto
- Formulario sobre fondo claro o card carbón
- Botón enviar = amarillo Volt
- WhatsApp = verde oficial (reconocible)
- Correo = link en amarillo o gris oscuro

### Tipografía sugerida
- **Títulos:** sans-serif moderna bold (Outfit, Montserrat o similar)
- **Cuerpo:** sans-serif legible (DM Sans, Inter)
- Evitar serif (para alinear con el logo moderno)

### Estilo general
- Contraste alto (negro / amarillo)
- Poco ruido visual
- Bordes sutiles, radios moderados (8–12px)
- Motivo gráfico: rayo / líneas diagonales muy sutiles (opcional)

---

## Jerarquía de color (regla rápida)

1. **80%** negro / blanco / grises → estructura  
2. **15%** texto y superficies  
3. **5%** amarillo → solo donde quieres que el usuario haga clic

> Si todo es amarillo, pierde fuerza. El amarillo debe “gritar” en los botones.

---

## Ejemplo CSS (tokens)

```css
:root {
  --volt-yellow: #FFD60A;
  --volt-yellow-soft: #F5C518;
  --volt-black: #0A0A0A;
  --volt-surface: #1A1A1A;
  --volt-text: #F7F7F5;
  --volt-muted: #9CA3AF;
  --volt-bg-light: #FAFAF8;
  --volt-text-dark: #111111;
  --volt-whatsapp: #25D366;
}
```

---

## Archivo visual

Tablero de paleta: `volt-paleta-colores.png`

---

## paleta de colores

> Para la web de VOLT propongo una presencia visual **negro + amarillo eléctrico**, alineada al logo: profesional, energética y clara.  
> El amarillo se usa sobre todo en botones (Cotizar / Contacto) para guiar la acción; el negro da seriedad; el blanco/gris organizan el contenido de servicios y proyectos.

¿Te parece esta dirección o prefieres una versión más clara (fondo blanco dominante)?
