"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const projects = [
  {
    title: "Colombia 4.0",
    client: "Ministerio TIC",
    category: "Eventos",
    city: "Barranquilla",
    attendees: "2.000+",
    image: "/images/portfolio/mintic.jpg",

    gallery: [
      "/images/portfolio/mintic.jpg",
      "/images/portfolio/mintic-1.jpg",
      "/images/portfolio/mintic-2.jpg",
    ],

    video: "",

    services: [
      "Producción Audiovisual",
      "Streaming",
      "Pantallas LED",
      "Experiencias Interactivas",
    ],

    description:
      "Producción integral de encuentros nacionales, experiencias interactivas, streaming y cobertura audiovisual para proyectos de transformación digital y fortalecimiento de medios comunitarios.",
  },

  {
    title: "Telecaribe",
    client: "Canal Telecaribe",
    category: "Audiovisual",
    city: "Cartagena",
    attendees: "500+",
    image: "/images/portfolio/telecaribe.jpg",

    gallery: [
      "/images/portfolio/telecaribe.jpg",
      "/images/portfolio/telecaribe-1.jpg",
    ],

    video: "",

    services: [
      "Producción TV",
      "Edición",
      "Cobertura Audiovisual",
    ],

    description:
      "Producción audiovisual para televisión regional, cubrimiento de eventos y generación de contenidos multiplataforma.",
  },

  {
    title: "Procaps",
    client: "Procaps",
    category: "Eventos",
    city: "Barranquilla",
    attendees: "800+",
    image: "/images/portfolio/procaps.jpg",

    gallery: [
      "/images/portfolio/procaps.jpg",
      "/images/portfolio/procaps-1.jpg",
    ],

    video: "",

    services: [
      "Eventos Corporativos",
      "Logística",
      "Escenografía",
      "Producción General",
    ],

    description:
      "Diseño, coordinación y producción de experiencias corporativas enfocadas en fortalecer la cultura organizacional.",
  },

  {
    title: "FICCI",
    client: "Festival Internacional de Cine de Cartagena",
    category: "Audiovisual",
    city: "Cartagena",
    attendees: "3.000+",
    image: "/images/portfolio/ficci.jpg",

    gallery: [
      "/images/portfolio/ficci.jpg",
    ],

    video: "",

    services: [
      "Cobertura Audiovisual",
      "Fotografía",
      "Producción Técnica",
    ],

    description:
      "Apoyo audiovisual y cobertura de actividades desarrolladas durante el festival.",
  },

  {
    title: "Canal Trece",
    client: "Canal Trece",
    category: "Audiovisual",
    city: "Bogotá",
    attendees: "1.000+",
    image: "/images/portfolio/canal13.jpg",

    gallery: [
      "/images/portfolio/canal13.jpg",
    ],

    video: "",

    services: [
      "Producción TV",
      "Contenido Digital",
      "Entrevistas",
    ],

    description:
      "Producción de contenidos televisivos y digitales para múltiples plataformas.",
  },

  {
    title: "Eventos Institucionales",
    client: "Entidades Públicas",
    category: "Comunicación",
    city: "Colombia",
    attendees: "5.000+",
    image: "/images/portfolio/eventos.jpg",

    gallery: [
      "/images/portfolio/eventos.jpg",
    ],

    video: "",

    services: [
      "Comunicación Estratégica",
      "Experiencias de Marca",
      "Activaciones",
    ],

    description:
      "Diseño y ejecución de experiencias inmersivas para entidades públicas y privadas.",
  },
];

export default function Portfolio() {
  const [selected, setSelected] = useState<any>(null);

  const [filter, setFilter] = useState("Todos");

  const categories = [
    "Todos",
    "Eventos",
    "Audiovisual",
    "Comunicación",
  ];

  const filteredProjects =
    filter === "Todos"
      ? projects
      : projects.filter(
          (project) => project.category === filter
        );

  return (
    <section
      id="portafolio"
      className="py-32 bg-[#F8F7F5]"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="uppercase tracking-[4px] text-[#5F1A17]">
            Casos de Éxito
          </span>

          <h2 className="text-5xl md:text-6xl font-bold mt-4">
            Nuestro Portafolio
          </h2>

          <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
            Proyectos desarrollados para empresas,
            medios de comunicación y entidades públicas.
          </p>

        </div>

        {/* FILTROS */}

        <div className="flex flex-wrap justify-center gap-4 mb-16">

          {categories.map((category) => (

            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-3 rounded-full transition-all

              ${
                filter === category
                  ? "bg-[#5F1A17] text-white"
                  : "bg-white text-[#3D4436] border"
              }
            `}
            >
              {category}
            </button>

          ))}

        </div>

        {/* GRID */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {filteredProjects.map((project, index) => (

            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              onClick={() => setSelected(project)}
              className="
                bg-white
                rounded-3xl
                overflow-hidden
                shadow-lg
                hover:shadow-2xl
                cursor-pointer
                group
              "
            >

              <div className="overflow-hidden">

                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    w-full
                    h-80
                    object-cover
                    group-hover:scale-110
                    transition
                    duration-700
                  "
                />

              </div>

              <div className="p-8">

                <span className="text-[#5F1A17] text-sm uppercase">
                  {project.category}
                </span>

                <h3 className="text-2xl font-bold mt-3">
                  {project.title}
                </h3>

                <p className="mt-4 text-gray-600">
                  {project.description.substring(0, 100)}...
                </p>

                <div className="mt-6 font-semibold text-[#3D4436]">
                  Ver Proyecto →
                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

      {/* MODAL */}

      <AnimatePresence>

        {selected && (

          <motion.div
            className="
              fixed
              inset-0
              bg-black/70
              z-[999]
              flex
              items-center
              justify-center
              p-4
            "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >

            <motion.div
              className="
                bg-white
                max-w-5xl
                w-full
                rounded-3xl
                overflow-hidden
                max-h-[90vh]
                overflow-y-auto
              "
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >

              <Swiper slidesPerView={1}>

                {selected.gallery.map(
                  (image: string, index: number) => (
                    <SwiperSlide key={index}>
                      <img
                        src={image}
                        alt=""
                        className="
                          w-full
                          h-[450px]
                          object-cover
                        "
                      />
                    </SwiperSlide>
                  )
                )}

              </Swiper>

              <div className="p-10">

                <span className="text-[#5F1A17] uppercase">
                  {selected.category}
                </span>

                <h3 className="text-4xl font-bold mt-3">
                  {selected.title}
                </h3>

                <p className="mt-6 text-gray-600 leading-8">
                  {selected.description}
                </p>

                {/* ESTADÍSTICAS */}

                <div className="grid md:grid-cols-3 gap-4 mt-10">

                  <div className="bg-[#F8F7F5] p-5 rounded-xl">
                    <p className="text-gray-500 text-sm">
                      Cliente
                    </p>

                    <p className="font-semibold">
                      {selected.client}
                    </p>
                  </div>

                  <div className="bg-[#F8F7F5] p-5 rounded-xl">
                    <p className="text-gray-500 text-sm">
                      Ciudad
                    </p>

                    <p className="font-semibold">
                      {selected.city}
                    </p>
                  </div>

                  <div className="bg-[#F8F7F5] p-5 rounded-xl">
                    <p className="text-gray-500 text-sm">
                      Participantes
                    </p>

                    <p className="font-semibold">
                      {selected.attendees}
                    </p>
                  </div>

                </div>

                {/* SERVICIOS */}

                <div className="mt-10">

                  <h4 className="font-bold text-xl mb-4">
                    Servicios Ejecutados
                  </h4>

                  <div className="flex flex-wrap gap-3">

                    {selected.services.map(
                      (service: string) => (
                        <span
                          key={service}
                          className="
                            bg-[#ECDAB7]
                            text-[#5F1A17]
                            px-4
                            py-2
                            rounded-full
                          "
                        >
                          {service}
                        </span>
                      )
                    )}

                  </div>

                </div>

                {/* VIDEO OPCIONAL */}

                {selected.video && (

                  <div className="mt-10">

                    <iframe
                      className="
                        w-full
                        aspect-video
                        rounded-2xl
                      "
                      src={selected.video}
                      allowFullScreen
                    />

                  </div>

                )}

                <button
                  onClick={() => setSelected(null)}
                  className="
                    mt-10
                    bg-[#5F1A17]
                    text-white
                    px-8
                    py-3
                    rounded-full
                  "
                >
                  Cerrar Proyecto
                </button>

              </div>

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

    </section>
  );
}