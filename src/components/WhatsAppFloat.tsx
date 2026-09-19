import { FaWhatsapp } from 'react-icons/fa'
import { siteConfig } from '@/data/site'
import styles from './WhatsAppFloat.module.css'

export default function WhatsAppFloat() {
  return (
    <a
      href={`https://wa.me/${siteConfig.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.float}
      aria-label="Contactar por WhatsApp"
    >
      <FaWhatsapp size={26} />
    </a>
  )
}
