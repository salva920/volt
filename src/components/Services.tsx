import Image from 'next/image'
import { FiZap, FiTool, FiSettings, FiHome, FiMaximize, FiCheckSquare } from 'react-icons/fi'
import type { IconType } from 'react-icons'
import { serviceGroups } from '@/data/site'
import ServiceGalleryCarousel from './ServiceGalleryCarousel'
import styles from './Services.module.css'

const icons: Record<string, IconType[]> = {
  electrico: [FiZap, FiTool, FiSettings],
  construccion: [FiHome, FiMaximize, FiCheckSquare],
}

export default function Services() {
  return (
    <section id="servicios" className={`section ${styles.section}`}>
      <div className="container">
        <p className="section__eyebrow">Servicios</p>
        <h2 className="section__title">Electricidad y construcción</h2>
        <p className={`section__lead ${styles.lead}`}>
          Dos especialidades, un mismo criterio de ejecución: orden, seguridad y resultado.
        </p>

        <div className={styles.groups}>
          {serviceGroups.map((group) => (
            <div key={group.id} className={styles.group}>
              <div className={styles.groupVisual} data-fit={group.imageFit}>
                <Image
                  src={group.image}
                  alt={group.imageAlt}
                  fill
                  sizes="(min-width: 860px) 45vw, 100vw"
                  className={styles.groupPhoto}
                />
              </div>
              <div className={styles.groupHead}>
                <h3>{group.title}</h3>
                <p>{group.lead}</p>
              </div>
              <ul className={styles.points}>
                {group.items.map((service, index) => {
                  const Icon = (icons[group.id] ?? icons.electrico)[index]
                  return (
                    <li key={service.title}>
                      <span className={styles.icon}>
                        <Icon size={18} />
                      </span>
                      <div>
                        <h4>{service.title}</h4>
                        <p>{service.description}</p>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className={styles.feature}>
          <ServiceGalleryCarousel />
          <div className={styles.featureCopy}>
            <p className={styles.featureEyebrow}>Terminaciones y diseño</p>
            <h3>Revestimientos e iluminación LED</h3>
            <p>
              Fachadas, interiores y cubiertas, con iluminación que realza el espacio. La
              protección contra incendio se coordina en la misma faena cuando el proyecto lo
              requiere.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
