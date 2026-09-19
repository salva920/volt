'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { FiMenu, FiX } from 'react-icons/fi'
import { navLinks, siteConfig } from '@/data/site'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('#inicio')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const ids = navLinks.map((link) => link.href.slice(1))
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActive(`#${visible.target.id}`)
      },
      { rootMargin: '-35% 0px -50% 0px', threshold: [0.1, 0.25, 0.5] }
    )

    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <a href="#inicio" className={styles.brand} aria-label={siteConfig.name}>
          <Image
            src="/img/logo-volt-nav.png"
            alt="VOLT Multiservicios"
            width={186}
            height={50}
            priority
            className={styles.logo}
          />
        </a>

        <nav className={styles.navDesktop} aria-label="Principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`${styles.link} ${active === link.href ? styles.linkActive : ''}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className={styles.right}>
          <a href="#cotizacion" className={styles.cta}>
            Cotizar
          </a>
          <button
            type="button"
            className={styles.menuBtn}
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className={styles.mobilePanel}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={styles.mobileLink}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a href="#cotizacion" className={styles.ctaMobile} onClick={() => setOpen(false)}>
            Cotizar
          </a>
        </div>
      )}
    </header>
  )
}
