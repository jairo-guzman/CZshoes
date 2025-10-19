export function Header() {
  return (
    <header className="header">
      <nav className="navbar" aria-label="Navegación principal">
        <div className="nav-container">
          <a href="#" className="logo">
            <img
              src="media/logos/logo.png"
              alt="CzShoes Logo"
              className="logo-img"
            />
            <span className="logo-text">CzShoes</span>
          </a>
          <ul className="nav-menu">
            <li>
              <a href="#hero" className="nav-link">
                Inicio
              </a>
            </li>
            <li>
              <a href="#features" className="nav-link">
                Ventajas
              </a>
            </li>
            <li>
              <a href="#products" className="nav-link">
                Catálogo
              </a>
            </li>
            <li>
              <a href="#categories" className="nav-link">
                Categorías
              </a>
            </li>
            <li>
              <a href="#about" className="nav-link">
                Sobre Nosotros
              </a>
            </li>
            <li>
              <a href="#contact" className="nav-link">
                Contacto
              </a>
            </li>
          </ul>
          <div className="nav-actions">
            <a
              href="https://wa.me/573136811023?text=Hola,%20me%20interesa%20saber%20más%20sobre%20sus%20productos."
              target="_blank"
              className="btn btn-whatsapp"
              aria-label="Contactar por WhatsApp"
              rel="noopener"
            >
              <i className="fab fa-whatsapp"></i> WhatsApp
            </a>
          </div>
          <button className="hamburger" aria-label="Abrir menú móvil">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
    </header>
  );
}
