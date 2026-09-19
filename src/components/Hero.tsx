import { siteConfig } from '@/data/site'
import styles from './Hero.module.css'

export default function Hero() {
  const wa = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
    'Hola VOLT, me gustaría solicitar una cotización.'
  )}`

  return (
    <section id="inicio" className={styles.hero}>
      <div className={styles.hatch} aria-hidden />

      <div
        className={styles.visual}
        role="img"
        aria-label="Faena VOLT: tablero eléctrico industrial"
      >
        <div className={styles.visualShade} aria-hidden />
      </div>

      <div className={styles.wrap}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Electricidad y
            <br />
            construcción
            <br />
            con respaldo profesional
          </h1>
          <p className={styles.lead}>{siteConfig.heroLead}</p>

          <div className={styles.actions}>
            <a href="#cotizacion" className={styles.btnPrimary}>
              Solicitar cotización
            </a>
            <a href={wa} target="_blank" rel="noopener noreferrer" className={styles.btnGhost}>
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
