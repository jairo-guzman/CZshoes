import "@/styles/App.css";
import "@/styles/index.css";

import { About } from "@/components/about";
import { Categories } from "@/components/categories";
import { Features } from "@/components/features";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Products } from "@/components/products";

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Features />
        <Products />
        <Categories />
        <About />
      </main>

      <Footer />

      <button
        type="button"
        className="back-to-top"
        id="backToTop"
        aria-label="Volver arriba"
      >
        <i className="fas fa-chevron-up"></i>
      </button>
    </>
  );
}

export default App;
