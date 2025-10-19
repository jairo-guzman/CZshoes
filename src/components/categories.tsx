export function Categories() {
  return (
    <section
      id="categories"
      className="categories section-padding"
      aria-labelledby="categories-title"
    >
      <div className="container">
        <div className="section-header">
          <h2 id="categories-title" className="section-title">
            Explora por Categoría
          </h2>
          <p className="section-subtitle">
            Encuentra el calzado perfecto para cada necesidad y estilo.
          </p>
        </div>
        <div className="categories-grid">
          <div className="category-card">
            <div className="category-image">
              <img
                src="media/logos/catalogo logo hombre.png"
                alt="Calzado para Hombre"
                loading="lazy"
              />
              <div className="category-overlay">
                <div className="category-content">
                  <h3 className="category-title">Hombre</h3>
                  <p className="category-subtitle">
                    Rendimiento y estilo en cada par.
                  </p>
                  <a
                    href="https://wa.me/573136811023?text=Hola,%20me%20interesa%20la%20categoría:%20Hombre."
                    target="_blank"
                    className="btn btn-outline"
                    rel="noopener"
                  >
                    Consultar Colección
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="category-card">
            <div className="category-image">
              <img
                src="media/logos/catalogo logo mujer.png"
                alt="Calzado para Mujer"
                loading="lazy"
              />
              <div className="category-overlay">
                <div className="category-content">
                  <h3 className="category-title">Mujer</h3>
                  <p className="category-subtitle">
                    Comodidad y diseño para tu día a día.
                  </p>
                  <a
                    href="https://wa.me/573136811023?text=Hola,%20me%20interesa%20la%20categoría:%20Mujer."
                    target="_blank"
                    className="btn btn-outline"
                    rel="noopener"
                  >
                    Consultar Colección
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="category-card">
            <div className="category-image">
              <img
                src="media/logos/catalogo logo niños.png"
                alt="Calzado para Niños"
                loading="lazy"
              />
              <div className="category-overlay">
                <div className="category-content">
                  <h3 className="category-title">Niños</h3>
                  <p className="category-subtitle">
                    Diversión y soporte para los más pequeños.
                  </p>
                  <a
                    href="https://wa.me/573136811023?text=Hola,%20me%20interesa%20la%20categoría:%20Niños."
                    target="_blank"
                    className="btn btn-outline"
                    rel="noopener"
                  >
                    Consultar Colección
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
