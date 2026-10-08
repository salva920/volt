import { FaWhatsapp } from 'react-icons/fa'
import { FiMail, FiMapPin } from 'react-icons/fi'
import { siteConfig } from '@/data/site'
import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section id="contacto" className={`section ${styles.section}`}>
      <div className={`container ${styles.layout}`}>
        <div className={styles.intro}>
          <p className={`section__eyebrow ${styles.eyebrow}`}>Contacto</p>
          <h2 className={`section__title ${styles.title}`}>Hablemos de tu próximo proyecto</h2>
          <p className={styles.lead}>Tu proyecto merece una ejecución segura, ordenada y bien hecha.</p>
          <a
            className={styles.whatsappCta}
            href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
              'Hola VOLT, me gustaría solicitar una cotización.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp size={19} aria-hidden="true" />
            Cotizar por WhatsApp
          </a>
        </div>

        <div className={styles.grid}>
          <a
            className={styles.item}
            href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
              'Hola VOLT, me gustaría solicitar una cotización.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp size={22} />
            <div>
              <strong>WhatsApp</strong>
              <span>{siteConfig.phoneLabel}</span>
            </div>
          </a>

          <a className={styles.item} href={`mailto:${siteConfig.email}`}>
            <FiMail size={22} />
            <div>
              <strong>Correo</strong>
              <span>{siteConfig.email}</span>
            </div>
          </a>

          <div className={styles.item}>
            <FiMapPin size={22} />
            <div>
              <strong>Ubicación</strong>
              <span>{siteConfig.address}</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
