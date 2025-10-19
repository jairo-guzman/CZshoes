export function Products() {
  return (
    <section
      id="products"
      className="products section-padding"
      aria-labelledby="products-title"
    >
      <div className="container">
        <div className="section-header">
          <h2 id="products-title" className="section-title">
            Catálogo de Productos
          </h2>
          <p className="section-subtitle">
            Descubre nuestra selección más popular y las últimas novedades.
          </p>
        </div>
        <div className="products-grid">
          <div className="product-card">
            <div className="product-image">
              <img
                src="media/zapatos reference/ADIDAS Bailleli Blancas&Cafes.jpg"
                alt="Zapatillas Running Pro"
                loading="lazy"
              />
              <div className="product-overlay">
                <a
                  href="https://wa.me/573136811023?text=Hola,%20me%20interesa%20saber%20más%20sobre%20sus%20productos."
                  target="_blank"
                  className="product-btn btn-whatsapp-card"
                  aria-label="Consultar por WhatsApp Zapatillas Running Pro"
                  rel="noopener"
                >
                  <i className="fab fa-whatsapp"></i> Consultar
                </a>
                <button
                  className="product-btn"
                  aria-label="Vista rápida de Zapatillas Running Pro"
                >
                  Vista Rápida
                </button>
              </div>
              <span className="product-badge">Nuevo</span>
            </div>
            <div className="product-info">
              <h3 className="product-name">Zapatillas Running Pro</h3>
              <p className="product-category">Hombre | Running</p>
              <div
                className="product-rating"
                aria-label="Valoración de 4.5 de 5 estrellas"
              >
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i> <span>(4.5)</span>
              </div>
              <div className="product-price">
                <span className="price-current">Precio: $99.99</span>
                <span className="price-old">$120.00</span>
              </div>
            </div>
          </div>

          <div className="product-card">
            <div className="product-image">
              <img
                src="media/zapatos reference/ADIDAS Bailleli Blancas.jpg"
                alt="Sneakers Casual Urbano"
                loading="lazy"
              />
              <div className="product-overlay">
                <a
                  href="https://wa.me/573136811023?text=Hola,%20me%20interesa%20saber%20más%20sobre%20sus%20productos."
                  target="_blank"
                  className="product-btn btn-whatsapp-card"
                  aria-label="Consultar por WhatsApp Sneakers Casual Urbano"
                  rel="noopener"
                >
                  <i className="fab fa-whatsapp"></i> Consultar
                </a>
                <button
                  className="product-btn"
                  aria-label="Vista rápida de Sneakers Casual Urbano"
                >
                  Vista Rápida
                </button>
              </div>
              <span className="product-badge">Bestseller</span>
            </div>
            <div className="product-info">
              <h3 className="product-name">Sneakers Casual Urbano</h3>
              <p className="product-category">Mujer | Casual</p>
              <div
                className="product-rating"
                aria-label="Valoración de 5 de 5 estrellas"
              >
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i> <span>(5.0)</span>
              </div>
              <div className="product-price">
                <span className="price-current">Precio: $75.50</span>
              </div>
            </div>
          </div>

          <div className="product-card">
            <div className="product-image">
              <img
                src="media/zapatos reference/ADIDAS Bounce 25 Negro.jpg"
                alt="Zapatillas Entrenamiento"
                loading="lazy"
              />
              <div className="product-overlay">
                <a
                  href="https://wa.me/573136811023?text=Hola,%20me%20interesa%20la%20Zapatilla%20Entrenamiento.%20Código:%20P003"
                  target="_blank"
                  className="product-btn btn-whatsapp-card"
                  aria-label="Consultar por WhatsApp Zapatillas Entrenamiento"
                  rel="noopener"
                >
                  <i className="fab fa-whatsapp"></i> Consultar
                </a>
                <button
                  className="product-btn"
                  aria-label="Vista rápida de Zapatillas Entrenamiento"
                >
                  Vista Rápida
                </button>
              </div>
              <span className="product-badge sale">Oferta</span>
            </div>
            <div className="product-info">
              <h3 className="product-name">Zapatillas Entrenamiento</h3>
              <p className="product-category">Unisex | Training</p>
              <div
                className="product-rating"
                aria-label="Valoración de 4 de 5 estrellas"
              >
                <div>Products</div>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i> <span>(4.0)</span>
              </div>
              <div className="product-price">
                <span className="price-current">Precio: $65.00</span>
                <span className="price-old">$80.00</span>
              </div>
            </div>
          </div>

          <div className="product-card">
            <div className="product-image">
              <img
                src="media/zapatos reference/ADIDAS DROP STEP Blan&Amar.jpg"
                alt="Zapatillas Baloncesto Elite"
                loading="lazy"
              />
              <div className="product-overlay">
                <a
                  href="https://wa.me/573136811023?text=Hola,%20me%20interesa%20la%20Zapatilla%20Baloncesto%20Elite.%20Código:%20P004"
                  target="_blank"
                  className="product-btn btn-whatsapp-card"
                  aria-label="Consultar por WhatsApp Zapatillas Baloncesto Elite"
                  rel="noopener"
                >
                  <i className="fab fa-whatsapp"></i> Consultar
                </a>
                <button
                  className="product-btn"
                  aria-label="Vista rápida de Zapatillas Baloncesto Elite"
                >
                  Vista Rápida
                </button>
              </div>
              <span className="product-badge">Top Ventas</span>
            </div>
            <div className="product-info">
              <h3 className="product-name">Zapatillas Baloncesto Elite</h3>
              <p className="product-category">Hombre | Baloncesto</p>
              <div
                className="product-rating"
                aria-label="Valoración de 4.8 de 5 estrellas"
              >
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i> <span>(4.8)</span>
              </div>
              <div className="product-price">
                <span className="price-current">Precio: $110.00</span>
              </div>
            </div>
          </div>

          <div className="product-card">
            <div className="product-image">
              <img
                src="media/zapatos reference/ADIDAS Equipment Beige&Negro.jpg"
                alt="Zapatillas Deportivas Niños"
                loading="lazy"
              />
              <div className="product-overlay">
                <a
                  href="https://wa.me/573136811023?text=Hola,%20me%20interesa%20la%20Zapatilla%20Deportiva%20Niños.%20Código:%20P005"
                  target="_blank"
                  className="product-btn btn-whatsapp-card"
                  aria-label="Consultar por WhatsApp Zapatillas Deportivas Niños"
                  rel="noopener"
                >
                  <i className="fab fa-whatsapp"></i> Consultar
                </a>
                <button
                  className="product-btn"
                  aria-label="Vista rápida de Zapatillas Deportivas Niños"
                >
                  Vista Rápida
                </button>
              </div>
              <span className="product-badge kids">Niños</span>
            </div>
            <div className="product-info">
              <h3 className="product-name">Zapatillas Deportivas Niños</h3>
              <p className="product-category">Niños | Multisport</p>
              <div
                className="product-rating"
                aria-label="Valoración de 4.2 de 5 estrellas"
              >
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i> <span>(4.2)</span>
              </div>
              <div className="product-price">
                <span className="price-current">Precio: $55.00</span>
              </div>
            </div>
          </div>

          <div className="product-card">
            <div className="product-image">
              <img
                src="media/zapatos reference/ADIDAS Equipment Negras.jpg"
                alt="Zapatillas Trail Aventura"
                loading="lazy"
              />
              <div className="product-overlay">
                <a
                  href="https://wa.me/573136811023?text=Hola,%20me%20interesa%20la%20Zapatilla%20Trail%20Aventura.%20Código:%20P006"
                  target="_blank"
                  className="product-btn btn-whatsapp-card"
                  aria-label="Consultar por WhatsApp Zapatillas Trail Aventura"
                  rel="noopener"
                >
                  <i className="fab fa-whatsapp"></i> Consultar
                </a>
                <button
                  className="product-btn"
                  aria-label="Vista rápida de Zapatillas Trail Aventura"
                >
                  Vista Rápida
                </button>
              </div>
              <span className="product-badge">Novedad</span>
            </div>
            <div className="product-info">
              <h3 className="product-name">Zapatillas Trail Aventura</h3>
              <p className="product-category">Unisex | Trail Running</p>
              <div
                className="product-rating"
                aria-label="Valoración de 4.7 de 5 estrellas"
              >
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i> <span>(4.7)</span>
              </div>
              <div className="product-price">
                <span className="price-current">Precio: $130.00</span>
              </div>
            </div>
          </div>
        </div>
        <div className="section-footer">
          <a
            href="CATALOGO-FINAL.html"
            target="_blank"
            className="btn btn-primary"
            rel="noopener"
          >
            Ver Catálogo Completo
          </a>
        </div>
      </div>
    </section>
  );
}
