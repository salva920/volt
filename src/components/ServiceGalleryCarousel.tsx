'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import styles from './ServiceGalleryCarousel.module.css'

type Slide = {
  image: string
  alt: string
  title: string
  fit?: 'contain' | 'cover'
  category?: string
}

const defaultSlides: Slide[] = [
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

export default function ServiceGalleryCarousel({
  slides = defaultSlides,
  ariaLabel = 'Galería de trabajos',
  size = 'default',
}: {
  slides?: Slide[]
  ariaLabel?: string
  size?: 'default' | 'large'
}) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (!slides.length) return
    if (isPaused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const timer = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % slides.length)
    }, 5000)

    return () => window.clearInterval(timer)
  }, [isPaused, slides.length])

  const goTo = (index: number) => {
    if (!slides.length) return
    setActiveIndex((index + slides.length) % slides.length)
  }

  const next = () => goTo(activeIndex + 1)
  const prev = () => goTo(activeIndex - 1)

  if (!slides.length) return null

  return (
    <div
      className={styles.carousel}
      data-size={size}
      role="region"
      aria-label={ariaLabel}
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
              key={`${slide.image}-${index}`}
              aria-hidden={index !== activeIndex}
              data-fit={slide.fit ?? 'cover'}
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
                {slide.category && <span className={styles.category}>{slide.category}</span>}
                <span>{slide.title}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      <div className={styles.controls}>
        <button type="button" className={styles.arrow} aria-label="Proyecto anterior" onClick={prev}>
          <FiChevronLeft size={22} />
        </button>

        <div className={styles.dots} aria-label="Selector de proyectos">
          {slides.map((slide, index) => (
            <button
              key={`${slide.image}-dot-${index}`}
              type="button"
              className={styles.dot}
              aria-label={`Ir al proyecto ${index + 1}`}
              aria-current={activeIndex === index ? 'true' : 'false'}
              onClick={() => goTo(index)}
            />
          ))}
        </div>

        <button type="button" className={styles.arrow} aria-label="Siguiente proyecto" onClick={next}>
          <FiChevronRight size={22} />
        </button>
      </div>
    </div>
  )
}