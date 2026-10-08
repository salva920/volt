'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from './ServiceGalleryCarousel.module.css'

const slides = [
  {
    image: '/img/fachada.png',
    alt: 'Fachada con revestimiento exterior decorativo e iluminación LED integrada',
    title: 'Fachada decorativa e iluminación LED',
    fit: 'contain',
  },
  {
    image: '/img/servicios/fachada-listones.jpg',
    alt: 'Fachada contemporánea con revestimiento exterior de listones de madera',
    title: 'Revestimiento exterior decorativo',
  },
  {
    image: '/img/servicios/revestimiento-interior.jpg',
    alt: 'Paneles de madera decorativos en un espacio interior',
    title: 'Paneles y terminaciones interiores',
  },
  {
    image: '/img/servicios/cubierta-tejas-instalacion.jpg',
    alt: 'Instalación de tejas de arcilla en la cubierta de una vivienda',
    title: 'Instalación de cubiertas exteriores',
  },
]

export default function ServiceGalleryCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const timer = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % slides.length)
    }, 5000)

    return () => window.clearInterval(timer)
  }, [isPaused])

  return (
    <div
      className={styles.carousel}
      role="region"
      aria-label="Galería de revestimientos y terminaciones"
      aria-roledescription="carrusel"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setIsPaused(false)
        }
      }}
    >
      <div className={styles.viewport}>
        <div className={styles.track} style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
          {slides.map((slide, index) => (
            <figure
              className={styles.slide}
              key={slide.image}
              aria-hidden={index !== activeIndex}
              data-fit={slide.fit}
            >
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                sizes="(min-width: 800px) 42vw, 100vw"
                className={styles.photo}
                priority={index === 0}
              />
              <figcaption className={styles.caption}>
                {slide.title}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </div>
  )
}