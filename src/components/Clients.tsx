"use client";

export default function Clients() {
  const clients = [
    "/logos/telecaribe.png",
    "/logos/mintic.png",
    "/logos/procaps.png",
    "/logos/ficci.png",
    "/logos/canal13.png",
    "/logos/diabetrics.png",
  ];

  return (
    <section
      id="clientes"
      className="py-32 bg-[#F8F7F5] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">

        <span className="uppercase tracking-[4px] text-[#5F1A17]">
          Clientes
        </span>

        <h2 className="text-5xl md:text-6xl font-bold mt-4">
          Marcas que han confiado en nosotros
        </h2>

        <p className="max-w-3xl mx-auto mt-6 text-gray-600">
          Hemos desarrollado proyectos para entidades públicas,
          medios de comunicación, organizaciones culturales
          y empresas líderes en Colombia.
        </p>

      </div>

      <div className="relative mt-20">

        <div className="flex animate-marquee gap-16">

          {[...clients, ...clients].map((logo, index) => (
            <div
              key={index}
              className="
                bg-white
                rounded-3xl
                shadow-md
                p-8
                min-w-[220px]
                h-32
                flex
                items-center
                justify-center
              "
            >
              <img
                src={logo}
                alt="Cliente"
                className="
                  max-h-12
                  object-contain
                  grayscale
                  opacity-70
                  hover:grayscale-0
                  hover:opacity-100
                  transition-all
                "
              />
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}