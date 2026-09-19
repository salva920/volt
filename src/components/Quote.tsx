'use client'

import { FormEvent, useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { siteConfig } from '@/data/site'
import { mapsSearchUrl } from '@/lib/places'
import AddressField from './AddressField'
import styles from './Quote.module.css'

const workTypes = [
  { id: 'electrico', label: 'Eléctrico', hint: 'Instalación, montaje, CCDD, CCTV, mantención…' },
  { id: 'construccion', label: 'Construcción', hint: 'Obra, ampliación, tabiques, terminaciones…' },
  { id: 'ambos', label: 'Ambos', hint: 'Describe el proyecto eléctrico y de construcción…' },
] as const

export default function Quote() {
  const [sent, setSent] = useState(false)
  const [workType, setWorkType] = useState<(typeof workTypes)[number]['id']>('electrico')
  const selectedType = workTypes.find((item) => item.id === workType) ?? workTypes[0]

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const name = String(form.get('name') || '')
    const email = String(form.get('email') || '')
    const phone = String(form.get('phone') || '')
    const address = String(form.get('address') || '')
    const mapsUrl = String(form.get('mapsUrl') || '') || mapsSearchUrl(undefined, undefined, address)
    const message = String(form.get('message') || '')

    const lines = [
      `Hola VOLT, soy ${name}.`,
      `Tipo de trabajo: ${selectedType.label}`,
      `Email: ${email}`,
      `Tel: ${phone}`,
      `Dirección: ${address}`,
    ]
    if (mapsUrl) lines.push(`Ver en Maps: ${mapsUrl}`)
    lines.push('', 'Solicitud:', message)

    window.open(
      `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(lines.join('\n'))}`,
      '_blank',
    )
    setSent(true)
  }

  return (
    <section id="cotizacion" className="section">
      <div className={`container ${styles.wrap}`}>
        <div>
          <p className="section__eyebrow">Cotización</p>
          <h2 className="section__title">Cuéntanos qué necesitas</h2>
          <p className="section__lead">
            Completa el formulario y te contactamos. Elige si es eléctrico, construcción o ambos,
            e indica la dirección de la obra para estimar traslado y visita.
          </p>
          <a
            href={`https://wa.me/${siteConfig.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`btn btn--whatsapp ${styles.wa}`}
          >
            <FaWhatsapp size={18} />
            Escribir por WhatsApp
          </a>
        </div>

        <form className={styles.form} onSubmit={onSubmit}>
          <label>
            Nombre
            <input name="name" required placeholder="Tu nombre o empresa" />
          </label>
          <label>
            Correo
            <input name="email" type="email" required placeholder="correo@empresa.cl" />
          </label>
          <label>
            Teléfono
            <input name="phone" required placeholder="+56 9 ..." />
          </label>
          <fieldset className={styles.workType}>
            <legend>Tipo de trabajo</legend>
            <div className={styles.workTypeOptions} role="radiogroup" aria-label="Tipo de trabajo">
              {workTypes.map((item) => (
                <label key={item.id} className={workType === item.id ? styles.chipOn : styles.chip}>
                  <input
                    type="radio"
                    name="workType"
                    value={item.id}
                    checked={workType === item.id}
                    onChange={() => setWorkType(item.id)}
                  />
                  {item.label}
                </label>
              ))}
            </div>
          </fieldset>
          <AddressField />
          <label>
            ¿Qué necesitas cotizar?
            <textarea
              name="message"
              required
              rows={4}
              placeholder={selectedType.hint}
            />
          </label>
          <button type="submit" className="btn btn--primary btn--block">
            Enviar solicitud
          </button>
          {sent && (
            <p className={styles.ok}>Se abrirá WhatsApp con tu mensaje listo para enviar.</p>
          )}
        </form>
      </div>
    </section>
  )
}
