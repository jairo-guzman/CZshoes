export function About() {
  return (
    <section
      id="about"
      className="about section-padding"
      aria-labelledby="about-title"
    >
      <div className="container">
        <div className="section-header">
          <h2 id="about-title" className="section-title">
            Sobre CzShoes
          </h2>
          <p className="section-subtitle">
            Conoce nuestra historia y el compromiso con la calidad que nos
            impulsa.
          </p>
        </div>
        <div className="about-content">
          <div className="about-text">
            <h3 className="about-title">Nuestra Pasión por el Calzado</h3>
            <div className="about-description">
              <p>
                En CzShoes, brindamos un servicio rapido y efectio en donde el
                calzado adecuado puede transformar tu experiencia, ya sea que
                estés en el gimnasio, en el trabajo o en las calles de la
                ciudad. Desde 2020, nos hemos dedicado a ofrecer zapatillas
                deportivas de la más alta calidad, combinando diseño y
                comodidad, confort excepcional y diseños innovadores.
              </p>
              <p>
                Trabajamos incansablemente para seleccionar las mejores marcas y
                diseños, asegurando que cada par de zapatillas que vendemos no
                solo cumpla, sino que supere tus expectativas. Nuestro objetivo
                es que te sientas seguro, cómodo y con estilo en cada paso.
              </p>
            </div>
            <div className="about-stats">
              <div className="stat-item">
                <span className="stat-number">1000+</span>
                <span className="stat-label">Clientes Satisfechos</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">500+</span>
                <span className="stat-label">Productos en Catálogo</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">5+</span>
                <span className="stat-label">Años de Experiencia</span>
              </div>
            </div>
            <div className="about-actions">
              <a
                href="https://wa.me/573136811023?text=Hola,%20me%20gustaría%20saber%20más%20sobre%20CzShoes."
                target="_blank"
                className="btn btn-primary"
                rel="noopener"
              >
                Contáctanos
              </a>
              <a href="#" className="btn btn-outline">
                Nuestra Historia Completa
              </a>
            </div>
          </div>
          <div className="about-image">
            <img
              src="media/logos/logo black.png"
              alt="Sobre CzShoes"
              loading="lazy"
            />
            <span className="about-badge">Desde 2020</span>
          </div>
        </div>
      </div>
    </section>
  );
}
