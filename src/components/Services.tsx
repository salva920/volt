import { FiZap, FiTool, FiSettings, FiHome, FiMaximize, FiCheckSquare } from 'react-icons/fi'
import type { IconType } from 'react-icons'
import { serviceGroups } from '@/data/site'
import styles from './Services.module.css'

const icons: Record<string, IconType[]> = {
  electrico: [FiZap, FiTool, FiSettings],
  construccion: [FiHome, FiMaximize, FiCheckSquare],
}

export default function Services() {
  return (
    <section id="servicios" className="section">
      <div className="container">
        <p className="section__eyebrow">Servicios</p>
        <h2 className="section__title">Electricidad y construcción</h2>
        <p className={`section__lead ${styles.lead}`}>
          Instalaciones y montajes eléctricos, CCDD y CCTV, además de construcción, remodelación
          y mantenimiento, adaptados a cada proyecto.
        </p>

        <div className={styles.groups}>
          {serviceGroups.map((group) => (
            <div key={group.id} className={styles.group}>
              <div className={styles.groupHead}>
                <h3>{group.title}</h3>
                <p>{group.lead}</p>
              </div>
              <div className={styles.grid}>
                {group.items.map((service, index) => {
                  const Icon = (icons[group.id] ?? icons.electrico)[index]
                  return (
                    <article key={service.title} className={styles.item}>
                      <div className={styles.icon}>
                        <Icon size={22} />
                      </div>
                      <h4>{service.title}</h4>
                      <p>{service.description}</p>
                    </article>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
