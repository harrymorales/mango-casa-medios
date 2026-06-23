import Image from "next/image";

export default function Portfolio() {

  const proyectos = [
    "/images/proyecto1.png",
    "/images/proyecto2.png",
    "/images/proyecto3.png",
  ];

  return (
    <section id="portafolio" className="py-20">

      <h2 className="text-4xl text-center mb-10">
        Portafolio
      </h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">

        {proyectos.map((imagen, index) => (

          <div
            key={index}
            className="overflow-hidden rounded-xl"
          >

            <Image
              src={imagen}
              alt={`Proyecto ${index + 1}`}
              width={700}
              height={500}
              className="w-full h-72 object-cover"
            />

          </div>

        ))}

      </div>

    </section>
  );
}