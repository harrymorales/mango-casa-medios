"use client";

import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Fondo */}

      <div className="absolute inset-0 bg-gradient-to-br from-[#081223] via-black to-[#FF7A00]/20" />

      {/* Glow */}

      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-orange-500/20 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        <div className="max-w-4xl">

          <span className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-sm">
            Producción Audiovisual • Eventos • Tecnología
          </span>

          <h1 className="mt-8 text-5xl md:text-7xl font-black leading-tight">
            Creamos
            <span className="block text-yellow-400">
              experiencias
            </span>
            que conectan
          </h1>

          <p className="mt-8 text-xl text-gray-300 max-w-2xl">
            Estrategias de comunicación, producción audiovisual,
            eventos corporativos y experiencias tecnológicas.
          </p>

          <div className="flex flex-col md:flex-row gap-4 mt-10">

            <a
              href="#contacto"
              className="bg-yellow-400 text-black px-8 py-4 rounded-full font-bold inline-flex items-center gap-2"
            >
              Solicitar Cotización
              <ArrowRight size={18} />
            </a>

            <a
              href="#portafolio"
              className="border border-white/20 px-8 py-4 rounded-full inline-flex items-center gap-2"
            >
              <Play size={18} />
              Ver Portafolio
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}