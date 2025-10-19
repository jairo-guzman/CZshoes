import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavItem } from "@/components/nav-item";

export function Header() {
  return (
    <header className="bg-background-secondary sticky top-0 left-0 w-full z-50 shadow-md">
      <nav className="p-4" aria-label="Navegación principal">
        <div className="flex justify-between items-center max-w-7xl w-full mx-auto px-4">
          <a href="/">
            <img src="/logo.png" alt="CZShoes Logo" className="w-[115px]" />
          </a>

          <ul className="gap-8 hidden sm:flex">
            <NavItem href="#hero" label="Inicio" />
            <NavItem href="#products" label="Catálogo" />
            <NavItem href="#categories" label="Categorías" />
            <NavItem href="#about" label="Sobre Nosotros" />
            <NavItem href="#contact" label="Contacto" />
          </ul>

          <div className="nav-actions">
            <a
              href="https://wa.me/573136811023?text=Hola,%20me%20interesa%20saber%20más%20sobre%20sus%20productos."
              target="_blank"
              className="btn btn-whatsapp"
              aria-label="Contactar por WhatsApp"
              rel="noopener"
            >
              <FontAwesomeIcon icon={faWhatsapp} /> ¡Contáctanos!
            </a>
          </div>

          <button
            type="button"
            className="flex sm:hidden flex-col justify-between w-8 h-5 cursor-pointer"
            aria-label="Abrir menú móvil"
          >
            <span className="block w-full h-0.5 bg-white transition-all duration-200 ease-in"></span>
            <span className="block w-full h-0.5 bg-white transition-all duration-200 ease-in"></span>
            <span className="block w-full h-0.5 bg-white transition-all duration-200 ease-in"></span>
          </button>
        </div>
      </nav>
    </header>
  );
}
