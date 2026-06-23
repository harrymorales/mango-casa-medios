export default function Hero() {

  return (

    <section
      id="inicio"
      className="relative h-screen overflow-hidden"
    >

      <img
        src="/images/hero.png"
        alt="Producción audiovisual"
        className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
        "
      />

      <div className="absolute inset-0 bg-black/65"></div>

      <div className="relative z-10 h-full flex items-center">

        <div className="max-w-7xl mx-auto px-6">

          <div className="max-w-2xl">

            <h1 className="
              text-6xl
              md:text-6xl
              font-extrabold
              leading-tight
            ">

              CREAMOS

              <br />

              <span className="
                bg-gradient-to-r
                from-yellow-400
                via-pink-500
                to-purple-500
                bg-clip-text
                text-transparent
              ">
                EXPERIENCIAS
              </span>

              <br />

              QUE SE SIENTEN.

            </h1>

            <p className="
              mt-8
              text-gray-200
              text-xl
              leading-relaxed
            ">
              Producción audiovisual,
              streaming,
              eventos híbridos
              y experiencias tecnológicas
              que conectan personas y marcas.
            </p>

            <div className="mt-10 flex gap-4">

              <a
                href="#contacto"
                className="
                  bg-yellow-400
                  text-black
                  px-8
                  py-4
                  rounded-full
                  font-semibold
                  hover:scale-105
                  transition
                "
              >
                SOLICITAR COTIZACIÓN
              </a>

              <a
                href="#portafolio"
                className="
                  border
                  border-white
                  text-white
                  px-8
                  py-4
                  rounded-full
                  hover:bg-white
                  hover:text-black
                  transition
                "
              >
                VER PROYECTOS
              </a>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}