export default function Footer() {
  return (
    <footer className="bg-[#3D4436] text-[#ECDAB7]">

      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-4 gap-12">

          {/* LOGO */}
          <div>

            <img
              src="/images/logo.png"
              alt="Mango Casa de Medios"
              className="h-16 w-auto mb-6"
            />

            <p className="leading-7 text-[#ECDAB7]/80">
              La casa de los contenidos que conectan.
              Producción audiovisual, eventos corporativos
              y estrategias de comunicación para marcas,
              empresas e instituciones.
            </p>

          </div>

          {/* NAVEGACIÓN */}
          <div>

            <h3 className="font-semibold text-lg mb-5">
              Navegación
            </h3>

            <ul className="space-y-3">

              <li>
                <a href="#inicio" className="hover:text-white transition">
                  Inicio
                </a>
              </li>

              <li>
                <a href="#nosotros" className="hover:text-white transition">
                  Nosotros
                </a>
              </li>

              <li>
                <a href="#servicios" className="hover:text-white transition">
                  Servicios
                </a>
              </li>

              <li>
                <a href="#portafolio" className="hover:text-white transition">
                  Portafolio
                </a>
              </li>

              <li>
                <a href="#contacto" className="hover:text-white transition">
                  Contacto
                </a>
              </li>

            </ul>

          </div>

          {/* SERVICIOS */}
          <div>

            <h3 className="font-semibold text-lg mb-5">
              Servicios
            </h3>

            <ul className="space-y-3">

              <li>Estrategias de Comunicación</li>
              <li>Eventos Corporativos</li>
              <li>Producción Audiovisual</li>
              <li>Talento Artístico</li>
              <li>Suministro de Personal</li>

            </ul>

          </div>

          {/* CONTACTO */}
          <div>

            <h3 className="font-semibold text-lg mb-5">
              Contacto
            </h3>

            <div className="space-y-4">

              <p>
                📍 Barranquilla, Colombia
              </p>

              <p>
                ✉ soymangoproducciones@gmail.com
              </p>

              <p>
                📞 +57 318 827 3153
              </p>

            </div>

            <div className="flex gap-4 mt-8">

              <a
                href="https://instagram.com/soymangoproducciones"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-10 h-10
                  rounded-full
                  border border-[#ECDAB7]
                  flex items-center justify-center
                  hover:bg-[#ECDAB7]
                  hover:text-[#3D4436]
                  transition
                "
              >
                IG
              </a>

              <a
                href="#"
                className="
                  w-10 h-10
                  rounded-full
                  border border-[#ECDAB7]
                  flex items-center justify-center
                  hover:bg-[#ECDAB7]
                  hover:text-[#3D4436]
                  transition
                "
              >
                FB
              </a>

              <a
                href="#"
                className="
                  w-10 h-10
                  rounded-full
                  border border-[#ECDAB7]
                  flex items-center justify-center
                  hover:bg-[#ECDAB7]
                  hover:text-[#3D4436]
                  transition
                "
              >
                IN
              </a>

            </div>

          </div>

        </div>

        {/* Línea inferior */}

        <div className="border-t border-[#ECDAB7]/20 mt-16 pt-8">

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">

            <p className="text-sm text-[#ECDAB7]/70">
              © 2026 Mango Casa de Medios. Todos los derechos reservados.
            </p>

            <p className="text-sm text-[#ECDAB7]/70">
              Barranquilla · Colombia
            </p>

          </div>

        </div>

      </div>

    </footer>
  );
}