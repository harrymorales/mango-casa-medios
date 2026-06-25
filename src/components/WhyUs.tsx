"use client";

import { motion } from "framer-motion";

import {
  Sparkles,
  Trophy,
  Target,
  ShieldCheck,
} from "lucide-react";

const benefits = [
  {
    icon: Sparkles,
    title: "Experiencia y Creatividad",
    description:
      "Combinamos experiencia en medios, eventos y comunicación con una visión innovadora para desarrollar proyectos únicos.",
  },

  {
    icon: Trophy,
    title: "Resultados Garantizados",
    description:
      "Diseñamos estrategias orientadas a objetivos medibles y experiencias que generan impacto real.",
  },

  {
    icon: Target,
    title: "Soluciones a Medida",
    description:
      "Cada cliente recibe una propuesta personalizada alineada con sus necesidades y metas.",
  },

  {
    icon: ShieldCheck,
    title: "Calidad y Profesionalismo",
    description:
      "Nos comprometemos con altos estándares de producción, ejecución y acompañamiento.",
  },
];

export default function WhyUs() {
  return (
    <section
      className="
        py-32
        bg-gradient-to-b
        from-white
        to-[#F8F7F5]
      "
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
            Nuestra Diferencia
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
            ¿Por qué elegir
            Mango Casa de Medios?
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
            Más que una productora, somos un aliado
            estratégico que acompaña cada proyecto
            desde la idea inicial hasta la entrega
            de resultados.
          </p>

        </div>

        {/* BENEFICIOS */}

        <div className="grid md:grid-cols-2 gap-8">

          {benefits.map((item, index) => {

            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
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
                className="
                  bg-white
                  rounded-[32px]
                  p-10
                  shadow-lg
                  hover:shadow-2xl
                  transition-all
                  duration-500
                  hover:-translate-y-2
                "
              >

                <div
                  className="
                    w-20
                    h-20
                    rounded-3xl
                    bg-[#ECDAB7]
                    flex
                    items-center
                    justify-center
                  "
                >
                  <Icon
                    size={36}
                    className="text-[#5F1A17]"
                  />
                </div>

                <h3
                  className="
                    mt-8
                    text-3xl
                    font-bold
                    text-[#111111]
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    mt-5
                    text-gray-600
                    leading-8
                  "
                >
                  {item.description}
                </p>

              </motion.div>
            );
          })}

        </div>

        {/* MÉTRICAS */}

        <div
          className="
            mt-24
            bg-[#5F1A17]
            rounded-[40px]
            p-12
            text-white
          "
        >

          <div className="grid md:grid-cols-4 gap-10 text-center">

            <div>
              <h3 className="text-5xl font-bold">
                10+
              </h3>

              <p className="mt-3 text-white/80">
                Años de experiencia
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-bold">
                250+
              </h3>

              <p className="mt-3 text-white/80">
                Proyectos realizados
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-bold">
                50+
              </h3>

              <p className="mt-3 text-white/80">
                Clientes atendidos
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-bold">
                8+
              </h3>

              <p className="mt-3 text-white/80">
                Ciudades impactadas
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}