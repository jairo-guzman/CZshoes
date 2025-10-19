export function Footer() {
  return (
    <footer id="contact" className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section about-us">
            <a href="#" className="footer-logo">
              <img src="media/logos/logo.png" alt="CzShoes Logo" />
              <span className="footer-logo-text">CzShoes</span>
            </a>
            <p className="footer-description">
              Tu destino principal para zapatillas deportivas de alta calidad,
              estilo y rendimiento.
            </p>
            <div className="social-links" aria-label="Enlaces a redes sociales">
              <a
                href="https://www.facebook.com/CzShoesOficial"
                className="social-link"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://www.tiktok.com/@cz.shoes1"
                className="social-link"
                aria-label="Twitter"
              >
                <i className="fab fa-tiktok"></i>
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=573136811023&text=Hola%20quiero%20más%20información"
                className="social-link"
                aria-label="LinkedIn"
              >
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>

          <div className="footer-section quick-links">
            <h4 className="footer-title">Enlaces Rápidos</h4>
            <ul className="footer-links">
              <li>
                <a href="#hero">Inicio</a>
              </li>
              <li>
                <a href="#products">Catálogo</a>
              </li>
              <li>
                <a href="#about">Sobre Nosotros</a>
              </li>
              <li>
                <a href="https://api.whatsapp.com/send?phone=573136811023&text=Hola%20quiero%20m%C3%A1s%20informaci%C3%B3n">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-section categories">
            <h4 className="footer-title">Categorías</h4>
            <ul className="footer-links">
              <li>
                <a href="#">Hombre</a>
              </li>
              <li>
                <a href="#">Mujer</a>
              </li>
              <li>
                <a href="#">Niños</a>
              </li>
              <li>
                <a href="#">Running</a>
              </li>
              <li>
                <a href="#">Casual</a>
              </li>
            </ul>
          </div>

          <div className="footer-section contact-info">
            <h4 className="footer-title">Contáctanos</h4>
            <ul>
              <li>
                <i className="fas fa-map-marker-alt"></i>
                <span>Ciudadela S.Bolivar #103, Ibague, Colombia</span>
              </li>
              <li>
                <i className="fas fa-phone"></i>
                <span>+57 3136811023</span>
              </li>
              <li>
                <i className="fas fa-envelope"></i>
                <span>info@czshoes.com</span>
              </li>
              <li>
                <i className="fas fa-clock"></i>
                <span>Lun - Sáb: 9:00am - 8:00pm</span>
              </li>
              <li>
                <i className="fab fa-whatsapp"></i>
                <a
                  href="https://wa.me/573136811023?text=Hola,%20tengo%20una%20consulta%20general."
                  target="_blank"
                  rel="noopener"
                >
                  Escríbenos a WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              &copy; 2025 CzShoes. Todos los derechos reservados.
            </p>
            <div className="footer-bottom-links">
              <li>
                <a href="#">Preguntas Frecuentes</a>
              </li>
              <li>
                <a href="#">Envíos y Devoluciones</a>
              </li>
              <li>
                <a href="#">Guía de Tallas</a>
              </li>
              <li>
                <a href="#">Términos y Condiciones</a>
              </li>
              <li>
                <a href="#">Política de Privacidad</a>
              </li>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
