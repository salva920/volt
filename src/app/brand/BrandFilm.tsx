'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import styles from './BrandFilm.module.css'

const COLORS = [
  { name: 'Negro base', hex: '#0A0A0A', role: 'Fondo' },
  { name: 'Superficie', hex: '#1A1A1A', role: 'Navbar' },
  { name: 'Amarillo Volt', hex: '#FFD60A', role: 'CTA botones', dark: true },
  { name: 'Amarillo apoyo', hex: '#F5C518', role: 'Títulos', dark: true },
  { name: 'Texto / fondos claros', hex: '#F7F7F5', role: 'Texto', dark: true },
  { name: 'Texto secundario', hex: '#9CA3AF', role: 'Bordes', dark: true },
]

const USES = [
  { label: 'Fondo', hex: '#0A0A0A' },
  { label: 'Navbar', hex: '#1A1A1A' },
  { label: 'CTA botones', hex: '#FFD60A', dark: true },
  { label: 'Títulos', hex: '#F5C518', dark: true },
  { label: 'Texto', hex: '#F7F7F5', dark: true },
  { label: 'Bordes', hex: '#9CA3AF', dark: true },
]

export default function BrandFilm() {
  const stageRef = useRef<HTMLDivElement>(null)
  const [runId, setRunId] = useState(0)
  const [progress, setProgress] = useState(0)
  const [ended, setEnded] = useState(false)
  const [recording, setRecording] = useState(true)
  const [phone, setPhone] = useState(false)
  const [showHud, setShowHud] = useState(false)

  const replay = useCallback(() => {
    setEnded(false)
    setProgress(0)
    setRunId((n) => n + 1)
  }, [])

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const isRecord = params.get('record') === '1'
    const isPhone = params.get('phone') === '1'
    setRecording(isRecord)
    setPhone(isPhone)
    setShowHud(!isRecord)
  }, [])

  useEffect(() => {
    const film = stageRef.current
    if (!film) return

    const onMove = (e: MouseEvent) => {
      const r = film.getBoundingClientRect()
      film.style.setProperty('--mx', `${((e.clientX - r.left) / r.width) * 100}%`)
      film.style.setProperty('--my', `${((e.clientY - r.top) / r.height) * 100}%`)
    }

    film.addEventListener('mousemove', onMove)
    return () => film.removeEventListener('mousemove', onMove)
  }, [runId])

  useEffect(() => {
    const started = performance.now()
    let frame = 0

    const tick = (now: number) => {
      const t = Math.min(1, (now - started) / 22000)
      setProgress(t)
      if (t < 1) frame = requestAnimationFrame(tick)
      else setEnded(true)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [runId])

  return (
    <div
      ref={stageRef}
      className={`${styles.stage} ${recording ? styles.recording : ''} ${phone ? styles.phone : ''}`}
      onDoubleClick={replay}
    >
      <div key={runId} className={styles.film} aria-label="Intro de marca VOLT">
        <div className={styles.hatch} aria-hidden />
        <div className={styles.orb} aria-hidden />
        <div className={styles.cursorGlow} aria-hidden />

        <svg className={styles.strike} viewBox="0 0 200 320" aria-hidden>
          <path
            className={styles.strikePath}
            d="M118 8 L72 132 H118 L52 312"
            fill="none"
            stroke="#ffd60a"
            strokeWidth="10"
            strokeLinejoin="miter"
            strokeLinecap="square"
          />
        </svg>

        <div className={styles.flash} aria-hidden />

        <div className={styles.logoScene}>
          <img
            src="/img/logo-volt-film.png"
            alt="VOLT Multiservicios SPA"
            className={styles.logo}
          />
        </div>

        <section className={styles.paletteScene} aria-label="Paleta de marca">
          <header className={styles.paletteHead}>
            <div>
              <h1 className={styles.paletteTitle}>
                <span>VOLT</span> — Paleta de marca
              </h1>
              <p className={styles.paletteSub}>Presencia visual para web</p>
            </div>
            <svg className={styles.boltMark} viewBox="0 0 48 80" aria-hidden>
              <path d="M28 2 L10 38 H24 L8 78 L40 34 H24 L38 2 Z" fill="#ffd60a" />
            </svg>
          </header>

          <div className={styles.swatches}>
            {COLORS.map((color) => (
              <article key={color.hex} className={styles.swatch}>
                <div
                  className={styles.swatchFill}
                  style={{ background: color.hex }}
                />
                <div className={styles.swatchMeta}>
                  <strong>{color.name}</strong>
                  <i />
                  <span>{color.hex}</span>
                </div>
              </article>
            ))}
          </div>

          <div className={styles.usage}>
            <p className={styles.usageTitle}>Uso en web</p>
            <div className={styles.usageRow}>
              {USES.map((item) => (
                <div key={item.label} className={styles.usageItem}>
                  <em>{item.label}</em>
                  <b
                    style={{
                      background: item.hex,
                      color: item.dark ? '#0A0A0A' : '#F7F7F5',
                    }}
                  >
                    {item.hex}
                  </b>
                </div>
              ))}
            </div>
          </div>

          <footer className={styles.paletteFoot}>
            <span>VOLT | MULTISERVICIOS SPA</span>
            <svg className={styles.boltMark} viewBox="0 0 48 80" aria-hidden>
              <path d="M28 2 L10 38 H24 L8 78 L40 34 H24 L38 2 Z" fill="#ffd60a" />
            </svg>
          </footer>
        </section>
      </div>

      {showHud ? (
        <div className={styles.hud}>
          <div className={styles.bar}>
            <i style={{ transform: `scaleX(${progress})` }} />
          </div>
          <button type="button" className={styles.replay} onClick={replay}>
            {ended ? 'Reproducir de nuevo' : 'Reiniciar'}
          </button>
        </div>
      ) : null}
    </div>
  )
}
