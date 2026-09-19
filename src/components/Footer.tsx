import Image from 'next/image'
import { siteConfig } from '@/data/site'
import styles from './Footer.module.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <Image
          src="/img/logo-volt.png"
          alt="VOLT"
          width={140}
          height={40}
          className={styles.logo}
        />
        <p>
          © {year} {siteConfig.name}. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}
