import Image from 'next/image'
import { projects } from '@/data/site'
import styles from './Projects.module.css'

export default function Projects() {
  return (
    <section id="proyectos" className={`section section--light ${styles.section}`}>
      <div className="container">
        <p className="section__eyebrow">Proyectos ejecutados</p>
        <h2 className="section__title">Faena eléctrica y de construcción</h2>
        <p className={`section__lead ${styles.lead}`}>
          Tableros, canalización, albañilería y terminaciones. El mismo criterio de orden y
          seguridad en cada obra.
        </p>

        <div className={styles.grid}>
          {projects.map((project) => (
            <article key={project.title} className={styles.card}>
              <Image
                src={project.image}
                alt={project.alt}
                fill
                sizes="(min-width: 800px) 50vw, 100vw"
                className={styles.photo}
              />
              <div className={styles.overlay} />
              <div className={styles.meta}>
                <span>{project.category}</span>
                <h3>{project.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
