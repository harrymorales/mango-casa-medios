export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/30 backdrop-blur-md">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <a href="/">
          <img
            src="/images/logo.svg"
            alt="Mango Casa de Medios"
            className="h-10"
          />
        </a>

        <div className="hidden md:flex items-center gap-8">

          <a href="#inicio"
             className="text-white hover:text-yellow-400 transition">
             Inicio
          </a>

          <a href="#servicios"
             className="text-white hover:text-yellow-400 transition">
             Servicios
          </a>

          <a href="#portafolio"
             className="text-white hover:text-yellow-400 transition">
             Portafolio
          </a>

          <a href="#nosotros"
             className="text-white hover:text-yellow-400 transition">
             Nosotros
          </a>

          <a href="#contacto"
             className="text-white hover:text-yellow-400 transition">
             Contacto
          </a>

          <a
            href="#cotizar"
            className="
              px-6 py-2
              rounded-full
              border
              border-yellow-400
              text-yellow-400
              hover:bg-yellow-400
              hover:text-black
              transition
            "
          >
            Cotizar
          </a>

        </div>

      </div>

    </nav>
  );
}