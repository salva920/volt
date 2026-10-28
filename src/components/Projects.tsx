import { projects } from '@/data/site'
import styles from './Projects.module.css'
import ServiceGalleryCarousel from './ServiceGalleryCarousel'

export default function Projects() {
  const categories = projects
    .map((project) => project.category)
    .filter((category, index, allCategories) => allCategories.indexOf(category) === index)
  const projectGroups = categories.map((category) =>
    projects.filter((project) => project.category === category),
  )
  const groupLength = Math.max(...projectGroups.map((group) => group.length))
  const mixedProjects = Array.from({ length: groupLength }, (_, index) =>
    projectGroups.flatMap((group) => (group[index] ? [group[index]] : [])),
  ).flat()
  const projectSlides = mixedProjects.map((project) => ({
    image: project.image,
    alt: project.alt,
    title: project.title,
    fit: project.fit,
    category: project.category,
  }))

  return (
    <section id="proyectos" className={`section section--light ${styles.section}`}>
      <div className="container">
        <p className={`section__eyebrow ${styles.eyebrow}`}>Proyectos ejecutados</p>
        <h2 className="section__title">Faena eléctrica y de construcción</h2>
        <p className={`section__lead ${styles.lead}`}>
          Tableros norma IEC, fabricación de bandejas portaconductores BPC, canalización,
          estructuras Metalcon y techumbres. El mismo criterio de orden y seguridad en cada proyecto.
        </p>

        <div className={styles.carouselWrap}>
          <ServiceGalleryCarousel
            slides={projectSlides}
            ariaLabel="Galería de proyectos ejecutados"
            size="large"
            showArrows={false}
          />
        </div>
      </div>
    </section>
  )
}
