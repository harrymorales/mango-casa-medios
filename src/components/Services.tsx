import {
  Megaphone,
  Briefcase,
  Users,
  Music,
  Video,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Megaphone size={40} />,
      title: "Estrategias de Comunicación",
      description:
        "Campañas digitales, posicionamiento y comunicación corporativa.",
    },
    {
      icon: <Briefcase size={40} />,
      title: "Eventos Corporativos",
      description:
        "Planeación y ejecución integral de eventos.",
    },
    {
      icon: <Users size={40} />,
      title: "Suministro de Personal",
      description:
        "Logística, staff, anfitriones y personal especializado.",
    },
    {
      icon: <Music size={40} />,
      title: "Talento Artístico",
      description:
        "Artistas, músicos y entretenimiento en vivo.",
    },
    {
      icon: <Video size={40} />,
      title: "Producción Audiovisual",
      description:
        "Videos corporativos, streaming y cobertura de eventos.",
    },
  ];

  return (
    <section
      id="servicios"
      className="py-32 bg-black"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">

          <span className="text-yellow-400 uppercase tracking-widest">
            Servicios
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Soluciones Integrales
          </h2>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-yellow-400 transition"
            >
              <div className="text-yellow-400 mb-6">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {service.title}
              </h3>

              <p className="text-gray-400">
                {service.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}