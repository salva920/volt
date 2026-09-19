import styles from './About.module.css'

export default function About() {
  return (
    <section id="nosotros" className={`section section--light ${styles.section}`}>
      <div className={`container ${styles.grid}`}>
        <div>
          <p className="section__eyebrow">Quiénes somos</p>
          <h2 className="section__title">Soluciones confiables para cada proyecto</h2>
          <p className="section__lead">
            VOLT Multiservicios SPA ejecuta proyectos eléctricos, construcción, remodelación y
            mantenimiento para particulares, empresas, instituciones y obras comerciales e
            industriales. Soluciones confiables, con experiencia en terreno, seguridad y calidad.
          </p>
          <p className="section__lead">
            Instalaciones y montajes eléctricos, CCDD y CCTV, además de obras y mantenimiento de
            infraestructura.
          </p>
        </div>

        <ul className={styles.list}>
          <li>
            <strong>Experiencia técnica</strong>
            <span>Proyectos ordenados, seguros y con enfoque práctico en terreno.</span>
          </li>
          <li>
            <strong>Atención cercana</strong>
            <span>Acompañamos desde la cotización hasta la entrega del proyecto.</span>
          </li>
          <li>
            <strong>Calidad y cumplimiento</strong>
            <span>Estándares altos para resultados funcionales, duraderos y a tiempo.</span>
          </li>
        </ul>
      </div>
    </section>
  )
}
