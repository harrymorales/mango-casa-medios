"use client";

import { motion } from "framer-motion";
import {
  Lightbulb,
  Megaphone,
  Clapperboard,
  Users,
} from "lucide-react";

export default function About() {
  return (
    <section
      id="nosotros"
      className="py-32 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* IMAGEN */}

          <motion.div
            initial={{
              opacity: 0,
              x: -60,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
            }}
            className="relative"
          >

            <img
              src="/images/about-mango.jpg"
              alt="Mango Casa de Medios"
              className="
                rounded-[40px]
                shadow-2xl
                object-cover
                w-full
                h-[650px]
              "
            />

            {/* TARJETA FLOTANTE */}

            <div
              className="
                absolute
                -bottom-8
                -right-8
                bg-white
                p-8
                rounded-3xl
                shadow-2xl
                max-w-xs
              "
            >
              <h3 className="text-5xl font-bold text-[#5F1A17]">
                10+
              </h3>

              <p className="text-gray-600 mt-2">
                Años creando experiencias,
                contenidos y eventos memorables.
              </p>
            </div>

          </motion.div>

          {/* TEXTO */}

          <motion.div
            initial={{
              opacity: 0,
              x: 60,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
            }}
          >

            <span
              className="
                uppercase
                tracking-[4px]
                text-[#5F1A17]
                font-medium
              "
            >
              Quiénes Somos
            </span>

            <h2
              className="
                mt-5
                text-5xl
                md:text-6xl
                font-bold
                text-[#111111]
                leading-tight
              "
            >
              La casa de los contenidos
              que conectan.
            </h2>

            <p
              className="
                mt-8
                text-lg
                text-gray-600
                leading-8
              "
            >
              Somos una empresa dedicada a
              ofrecer soluciones creativas y
              estratégicas en el mundo de la
              comunicación y el entretenimiento.

              Transformamos ideas en experiencias
              memorables mediante producción
              audiovisual, eventos corporativos,
              estrategias de comunicación y
              activaciones de marca.
            </p>

            <p
              className="
                mt-6
                text-lg
                text-gray-600
                leading-8
              "
            >
              Trabajamos junto a empresas,
              instituciones públicas, medios de
              comunicación y organizaciones para
              construir proyectos que generan
              impacto real y fortalecen la conexión
              con sus audiencias.
            </p>

            {/* VALORES */}

            <div className="grid md:grid-cols-2 gap-6 mt-12">

              <div
                className="
                  p-6
                  rounded-2xl
                  bg-[#F8F7F5]
                "
              >
                <Lightbulb
                  className="text-[#5F1A17]"
                  size={36}
                />

                <h3 className="font-bold mt-4">
                  Creatividad
                </h3>

                <p className="text-gray-600 mt-2">
                  Ideas innovadoras que generan
                  experiencias memorables.
                </p>
              </div>

              <div
                className="
                  p-6
                  rounded-2xl
                  bg-[#F8F7F5]
                "
              >
                <Megaphone
                  className="text-[#5F1A17]"
                  size={36}
                />

                <h3 className="font-bold mt-4">
                  Comunicación
                </h3>

                <p className="text-gray-600 mt-2">
                  Estrategias efectivas para
                  conectar marcas y audiencias.
                </p>
              </div>

              <div
                className="
                  p-6
                  rounded-2xl
                  bg-[#F8F7F5]
                "
              >
                <Clapperboard
                  className="text-[#5F1A17]"
                  size={36}
                />

                <h3 className="font-bold mt-4">
                  Producción
                </h3>

                <p className="text-gray-600 mt-2">
                  Ejecución audiovisual con altos
                  estándares de calidad.
                </p>
              </div>

              <div
                className="
                  p-6
                  rounded-2xl
                  bg-[#F8F7F5]
                "
              >
                <Users
                  className="text-[#5F1A17]"
                  size={36}
                />

                <h3 className="font-bold mt-4">
                  Experiencia
                </h3>

                <p className="text-gray-600 mt-2">
                  Equipo especializado en eventos,
                  medios y comunicación.
                </p>
              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}