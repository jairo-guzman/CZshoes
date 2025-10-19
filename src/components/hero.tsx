export function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full h-[650px] overflow-hidden bg-accent-primary"
      aria-labelledby="hero-title"
    >
      <h2 id="hero-title" className="sr-only">
        Nuevas colecciones y ofertas destacadas
      </h2>

      <div className="absolute top-0 left-0">
        <div className="hero-slide active">
          <div className="hero-content">
            <h1 className="hero-title">Nueva Colección Deportiva</h1>
            <p className="hero-subtitle">
              Descubre el rendimiento y estilo que necesitas para superar tus
              límites.
            </p>
            <div className="hero-buttons">
              <a href="#products" className="btn btn-primary">
                Ver Catálogo
              </a>
              <a href="#features" className="btn btn-outline">
                Nuestras Ventajas
              </a>
            </div>
          </div>
        </div>

        <div className="hero-slide">
          <div className="hero-content">
            <h1 className="hero-title">Máximo Rendimiento</h1>
            <p className="hero-subtitle">
              Siente la comodidad y el confort necesario para empezar el dia con
              el pie derecho.
            </p>
            <div className="hero-buttons">
              <a href="#products" className="btn btn-primary">
                Explorar
              </a>
              <a
                href="https://wa.me/573136811023?text=Hola,%20me%20interesa%20saber%20más%20sobre%20sus%20productos."
                target="_blank"
                className="btn btn-outline"
                rel="noopener"
              >
                Consultar
              </a>
            </div>
          </div>
        </div>

        <div className="hero-slide">
          <div className="hero-content">
            <h1 className="hero-title">Estilo Urbano y Atlético</h1>
            <p className="hero-subtitle">
              Combina comodidad y moda en cada ocasión. Atención personalizada.
            </p>
            <div className="hero-buttons">
              <a href="#products" className="btn btn-primary">
                Explorar Estilos
              </a>
              <a
                href="https://wa.me/573136811023?text=Hola,%20me%20interesa%20saber%20más%20sobre%20sus%20productos."
                target="_blank"
                className="btn btn-outline"
                rel="noopener"
              >
                Contáctanos
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-controls">
        <button className="hero-prev" aria-label="Diapositiva anterior">
          <i className="fas fa-chevron-left"></i>
        </button>
        <button className="hero-next" aria-label="Diapositiva siguiente">
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
      <div
        className="hero-indicators"
        role="tablist"
        aria-label="Diapositivas del héroe"
      >
        <button
          className="indicator active"
          role="tab"
          aria-selected="true"
          aria-controls="hero-slide-1"
          id="hero-indicator-1"
          aria-label="Ir a diapositiva 1"
        ></button>
        <button
          className="indicator"
          role="tab"
          aria-selected="false"
          aria-controls="hero-slide-2"
          id="hero-indicator-2"
          aria-label="Ir a diapositiva 2"
        ></button>
        <button
          className="indicator"
          role="tab"
          aria-selected="false"
          aria-controls="hero-slide-3"
          id="hero-indicator-3"
          aria-label="Ir a diapositiva 3"
        ></button>
      </div>
    </section>
  );
}
