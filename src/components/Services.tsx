"use client";

import { motion } from "framer-motion";

import {
  Megaphone,
  CalendarDays,
  Users,
  Music4,
  Clapperboard,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Megaphone,
    title: "Estrategias de Comunicación",
    description:
      "Diseñamos campañas, comunicación institucional, posicionamiento digital y estrategias que conectan marcas con sus audiencias.",
  },

  {
    icon: CalendarDays,
    title: "Eventos Corporativos",
    description:
      "Producción integral de conferencias, ferias, convenciones, lanzamientos y experiencias empresariales de alto impacto.",
  },

  {
    icon: Users,
    title: "Suministro de Personal",
    description:
      "Anfitriones, modelos, logística, asistentes técnicos y personal especializado para cualquier tipo de evento.",
  },

  {
    icon: Music4,
    title: "Talento Artístico",
    description:
      "Músicos, artistas, actores, presentadores y experiencias en vivo para fortalecer la conexión con el público.",
  },

  {
    icon: Clapperboard,
    title: "Producción Audiovisual",
    description:
      "Videos corporativos, comerciales, streaming, fotografía, cobertura de eventos y postproducción profesional.",
  },
];

export default function Services() {
  return (
    <section
      id="servicios"
      className="py-32 bg-[#F8F7F5]"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}

        <div className="text-center mb-20">

          <span
            className="
              uppercase
              tracking-[4px]
              text-[#5F1A17]
              font-medium
            "
          >
            Nuestros Servicios
          </span>

          <h2
            className="
              mt-4
              text-5xl
              md:text-6xl
              font-bold
              text-[#111111]
            "
          >
            Soluciones que generan impacto
          </h2>

          <p
            className="
              mt-6
              max-w-3xl
              mx-auto
              text-lg
              text-gray-600
              leading-8
            "
          >
            Integramos creatividad, tecnología y
            producción para transformar ideas en
            experiencias memorables.
          </p>

        </div>

        {/* GRID */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => {

            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="
                  group
                  bg-white
                  rounded-3xl
                  p-8
                  shadow-lg
                  hover:shadow-2xl
                  transition-all
                  duration-500
                  hover:-translate-y-2
                "
              >

                <div
                  className="
                    w-16
                    h-16
                    rounded-2xl
                    bg-[#ECDAB7]
                    flex
                    items-center
                    justify-center
                    mb-6

                    group-hover:bg-[#5F1A17]
                    transition
                  "
                >

                  <Icon
                    size={30}
                    className="
                      text-[#5F1A17]
                      group-hover:text-white
                      transition
                    "
                  />

                </div>

                <h3
                  className="
                    text-2xl
                    font-bold
                    text-[#111111]
                  "
                >
                  {service.title}
                </h3>

                <p
                  className="
                    mt-4
                    text-gray-600
                    leading-7
                  "
                >
                  {service.description}
                </p>

                <div
                  className="
                    mt-8
                    flex
                    items-center
                    gap-2
                    font-semibold
                    text-[#5F1A17]
                  "
                >
                  Conocer más

                  <ArrowRight
                    size={18}
                    className="
                      group-hover:translate-x-2
                      transition
                    "
                  />

                </div>

              </motion.div>
            );
          })}

        </div>

        {/* CTA */}

        <div
          className="
            mt-24
            bg-[#5F1A17]
            rounded-[40px]
            p-12
            text-center
            text-white
          "
        >

          <h3
            className="
              text-4xl
              md:text-5xl
              font-bold
            "
          >
            ¿Tienes un proyecto en mente?
          </h3>

          <p
            className="
              mt-6
              max-w-3xl
              mx-auto
              text-white/80
              text-lg
            "
          >
            Nuestro equipo está listo para ayudarte
            a diseñar una experiencia audiovisual,
            corporativa o institucional que genere
            resultados reales.
          </p>

          <a
            href="#contacto"
            className="
              inline-block
              mt-8
              bg-[#ECDAB7]
              text-[#5F1A17]
              px-8
              py-4
              rounded-full
              font-semibold
              hover:scale-105
              transition
            "
          >
            Solicitar Cotización
          </a>

        </div>

      </div>
    </section>
  );
}