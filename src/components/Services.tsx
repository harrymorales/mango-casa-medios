import {
  Camera,
  Radio,
  SatelliteDish,
  MonitorSmartphone,
} from "lucide-react";

const services = [
  {
    title: "Producción Audiovisual",
    description:
      "Cobertura profesional, fotografía, video corporativo y contenidos digitales.",
    icon: Camera,
  },

  {
    title: "Streaming Profesional",
    description:
      "Transmisiones multicámara para eventos híbridos y virtuales.",
    icon: Radio,
  },

  {
    title: "Conectividad Starlink",
    description:
      "Internet satelital de alta velocidad para eventos en cualquier lugar.",
    icon: SatelliteDish,
  },

  {
    title: "Experiencias Interactivas",
    description:
      "Pantallas táctiles, mupis digitales, IA y activaciones tecnológicas.",
    icon: MonitorSmartphone,
  },
];

export default function Services() {
  return (
    <section
      id="servicios"
      className="
      py-32
      bg-gradient-to-b
      from-black
      to-[#081223]
      "
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">

          <span className="text-yellow-400 uppercase tracking-widest">
            Nuestros Servicios
          </span>

          <h2 className="mt-4 text-5xl font-bold">
            Tecnología + Creatividad
          </h2>

          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            Soluciones audiovisuales y tecnológicas
            para eventos corporativos, gubernamentales
            y experiencias inmersivas.
          </p>

        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">

          {services.map((service, index) => {

            const Icon = service.icon;

            return (
              <div
                key={index}
                className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-white/5
                backdrop-blur-lg
                p-8
                transition-all
                duration-500
                hover:-translate-y-3
                hover:border-yellow-400
                hover:shadow-[0_0_40px_rgba(255,195,45,0.25)]
                "
              >

                <div
                  className="
                  absolute
                  inset-0
                  opacity-0
                  group-hover:opacity-100
                  transition
                  duration-500
                  bg-gradient-to-br
                  from-yellow-400/10
                  via-pink-500/10
                  to-purple-500/10
                  "
                />

                <div className="relative z-10">

                  <div
                    className="
                    w-16
                    h-16
                    rounded-2xl
                    bg-gradient-to-br
                    from-yellow-400
                    via-orange-500
                    to-pink-500
                    flex
                    items-center
                    justify-center
                    mb-6
                    "
                  >

                    <Icon size={32} color="white" />

                  </div>

                  <h3 className="text-2xl font-bold mb-4">

                    {service.title}

                  </h3>

                  <p className="text-gray-400">

                    {service.description}

                  </p>

                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}