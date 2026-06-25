"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";


export default function Hero() {
  return (
    <section
      id="inicio"
      className="
        relative
        min-h-screen
        flex
        items-center
        overflow-hidden
      "
    >
      {/* FONDO */}

      <div
        className="
          absolute
          inset-0
          bg-cover
          bg-center
          scale-105
        "
        style={{
          backgroundImage:
            "url('/images/hero-premium.jpg')",
        }}
      />

      {/* OVERLAY */}

      <div className="absolute inset-0 bg-white/75" />

      {/* DEGRADADO MANGO */}

      <div
        className="
          absolute
          top-0
          right-0
          w-[700px]
          h-[700px]
          rounded-full
          bg-[#ECDAB7]/40
          blur-3xl
        "
      />

      <div
        className="
          absolute
          bottom-0
          left-0
          w-[500px]
          h-[500px]
          rounded-full
          bg-[#5F1A17]/10
          blur-3xl
        "
      />

      {/* CONTENIDO */}

      <div
        className="
          relative
          z-10
          max-w-7xl
          mx-auto
          px-6
          w-full
          pt-32
        "
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* TEXTO */}

          <motion.div
            initial={{
              opacity: 0,
              y: 60,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
            }}
          >
            <span
              className="
                uppercase
                tracking-[5px]
                text-[#5F1A17]
                font-medium
              "
            >
              Productora Audiovisual · Eventos · Comunicación
            </span>

            <h1
              className="
                mt-6
                text-5xl
                md:text-7xl
                font-bold
                leading-tight
                text-[#111111]
              "
            >
              Convertimos
              <br />
              ideas ambiciosas
              <br />
              en experiencias
              <span className="text-[#5F1A17]">
                {" "}
                memorables
              </span>
            </h1>

            <p
              className="
                mt-8
                text-lg
                text-gray-700
                max-w-xl
                leading-8
              "
            >
              Producción audiovisual, eventos
              corporativos y estrategias de
              comunicación que conectan personas,
              marcas y territorios.
            </p>

            {/* BOTONES */}

            <div className="flex flex-wrap gap-4 mt-10">

              <a
                href="#contacto"
                className="
                  bg-[#5F1A17]
                  text-white
                  px-8
                  py-4
                  rounded-full
                  font-semibold
                  hover:bg-[#3D4436]
                  transition-all
                  duration-300
                  hover:scale-105
                "
              >
                Hablemos de tu proyecto
              </a>

              <a
                href="https://wa.me/573188273153"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  border
                  border-[#3D4436]
                  text-[#3D4436]
                  px-8
                  py-4
                  rounded-full
                  font-semibold
                  hover:bg-[#3D4436]
                  hover:text-white
                  transition-all
                  duration-300
                "
              >
                WhatsApp
              </a>

            </div>

          </motion.div>

          {/* ESTADÍSTICAS */}

          <motion.div
            initial={{
              opacity: 0,
              x: 80,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.2,
            }}
            className="
              grid
              grid-cols-2
              gap-6
            "
          >

            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h3 className="text-5xl font-bold text-[#5F1A17]">
                <CountUp end={10} duration={3} />+
              </h3>

              <p className="mt-2 text-gray-600">
                Años de experiencia
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h3 className="text-5xl font-bold text-[#5F1A17]">
                <CountUp end={250} duration={3} />+
              </h3>

              <p className="mt-2 text-gray-600">
                Proyectos realizados
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h3 className="text-5xl font-bold text-[#5F1A17]">
                <CountUp end={50} duration={3} />+
              </h3>

              <p className="mt-2 text-gray-600">
                Marcas atendidas
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h3 className="text-5xl font-bold text-[#5F1A17]">
                <CountUp end={8} duration={3} />+
              </h3>

              <p className="mt-2 text-gray-600">
                Ciudades impactadas
              </p>
            </div>

          </motion.div>

        </div>
      </div>

      {/* SCROLL INDICATOR */}

      <div
        className="
          absolute
          bottom-8
          left-1/2
          -translate-x-1/2
          text-[#5F1A17]
          animate-bounce
        "
      >
        ↓
      </div>

    </section>
  );
}