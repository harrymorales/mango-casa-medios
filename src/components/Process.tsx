"use client";

import { motion } from "framer-motion";

import {
  Search,
  Lightbulb,
  Rocket,
  BarChart3,
} from "lucide-react";

const processSteps = [
  {
    number: "01",
    icon: Search,
    title: "Consultoría Inicial",
    description:
      "Analizamos los objetivos, necesidades y visión del cliente para construir una estrategia alineada con sus metas.",
  },

  {
    number: "02",
    icon: Lightbulb,
    title: "Propuesta Creativa",
    description:
      "Diseñamos una solución personalizada integrando creatividad, comunicación y producción.",
  },

  {
    number: "03",
    icon: Rocket,
    title: "Ejecución",
    description:
      "Ponemos en marcha el proyecto garantizando calidad, cumplimiento y una experiencia impecable.",
  },

  {
    number: "04",
    icon: BarChart3,
    title: "Evaluación y Feedback",
    description:
      "Medimos resultados, analizamos el impacto y generamos oportunidades de mejora continua.",
  },
];

export default function Process() {
  return (
    <section
      id="proceso"
      className="py-32 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}

        <div className="text-center mb-24">

          <span
            className="
              uppercase
              tracking-[4px]
              text-[#5F1A17]
              font-medium
            "
          >
            Nuestro Método
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
            Cómo hacemos realidad
            tus proyectos
          </h2>

          <p
            className="
              mt-6
              text-lg
              text-gray-600
              max-w-3xl
              mx-auto
              leading-8
            "
          >
            Cada proyecto sigue un proceso
            estructurado que garantiza calidad,
            creatividad y resultados medibles.
          </p>

        </div>

        {/* TIMELINE */}

        <div className="relative">

          {/* LÍNEA CENTRAL DESKTOP */}

          <div
            className="
              hidden
              lg:block
              absolute
              top-24
              left-0
              right-0
              h-[2px]
              bg-[#ECDAB7]
            "
          />

          <div className="grid lg:grid-cols-4 gap-12">

            {processSteps.map((step, index) => {

              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
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
                    delay: index * 0.15,
                  }}
                  className="relative text-center"
                >

                  {/* CÍRCULO */}

                  <div
                    className="
                      relative
                      z-10
                      mx-auto
                      w-24
                      h-24
                      rounded-full
                      bg-[#5F1A17]
                      text-white
                      flex
                      items-center
                      justify-center
                      shadow-xl
                    "
                  >
                    <Icon size={34} />
                  </div>

                  {/* NÚMERO */}

                  <div
                    className="
                      mt-8
                      text-[#5F1A17]
                      text-sm
                      font-bold
                      tracking-[3px]
                    "
                  >
                    ETAPA {step.number}
                  </div>

                  {/* TÍTULO */}

                  <h3
                    className="
                      mt-4
                      text-2xl
                      font-bold
                      text-[#111111]
                    "
                  >
                    {step.title}
                  </h3>

                  {/* TEXTO */}

                  <p
                    className="
                      mt-4
                      text-gray-600
                      leading-7
                    "
                  >
                    {step.description}
                  </p>

                </motion.div>
              );
            })}

          </div>

        </div>

        {/* BLOQUE DESTACADO */}

        <div
          className="
            mt-24
            rounded-[40px]
            bg-[#F8F7F5]
            p-12
            text-center
          "
        >

          <h3
            className="
              text-4xl
              font-bold
              text-[#111111]
            "
          >
            Más que proveedores,
            somos aliados estratégicos
          </h3>

          <p
            className="
              mt-6
              max-w-4xl
              mx-auto
              text-gray-600
              leading-8
            "
          >
            En Mango Casa de Medios acompañamos
            cada etapa del proyecto para garantizar
            que la idea inicial se convierta en una
            experiencia memorable que conecte con
            las personas y genere resultados.
          </p>

        </div>

      </div>
    </section>
  );
}