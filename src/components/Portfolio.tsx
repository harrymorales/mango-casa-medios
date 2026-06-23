export default function Portfolio() {
  const projects = [
    {
      title: "Eventos Corporativos",
      image: "/images/evento1.jpg",
    },
    {
      title: "Producción Audiovisual",
      image: "/images/audiovisual.jpg",
    },
    {
      title: "Streaming Profesional",
      image: "/images/evento2.jpg",
    },
    {
      title: "Tecnología y Conectividad",
      image: "/images/about.jpg",
    },
  ];

  return (
    <section id="portafolio" className="py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-center text-5xl font-bold mb-16">
          Portafolio Destacado
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative rounded-3xl overflow-hidden border border-white/10"
            >

              <img
                src={project.image}
                alt={project.title}
                className="w-full h-72 object-cover group-hover:scale-110 transition duration-500"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

              <div className="absolute bottom-0 p-6">
                <h3 className="text-xl font-bold">
                  {project.title}
                </h3>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}