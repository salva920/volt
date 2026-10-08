import Image from 'next/image'
import { projects } from '@/data/site'
import styles from './Projects.module.css'
import Reveal from './Reveal'

export default function Projects() {
  return (
    <section id="proyectos" className={`section section--light ${styles.section}`}>
      <div className="container">
        <p className={`section__eyebrow ${styles.eyebrow}`}>Proyectos ejecutados</p>
        <h2 className="section__title">Faena eléctrica y de construcción</h2>
        <p className={`section__lead ${styles.lead}`}>
          Tableros norma IEC, canalización, estructuras Metalcon y techumbres. El mismo criterio
          de orden y seguridad en cada proyecto.
        </p>

        <div className={styles.grid}>
          {projects.map((project, index) => {
            const featured = Boolean(project.featured)
            const cardClass = `${styles.card} ${featured ? styles.cardFeatured : ''} ${
              project.fit === 'contain' ? styles.cardContain : ''
            }`

            return (
              <Reveal
                key={project.title}
                className={`${styles.cardReveal} ${featured ? styles.cardRevealFeatured : ''}`}
                delay={index * 0.08}
              >
                <article className={cardClass}>
                  <div className={styles.frame}>
                    <Image
                      src={project.image}
                      alt={project.alt}
                      fill
                      sizes="(min-width: 800px) 50vw, 100vw"
                      className={styles.photo}
                    />
                  </div>
                  <div className={styles.meta}>
                    <span>{project.category}</span>
                    <h3>{project.title}</h3>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
