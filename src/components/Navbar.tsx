"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Inicio", href: "#inicio" },
    { name: "Quiénes Somos", href: "#nosotros" },
    { name: "Servicios", href: "#servicios" },
    { name: "Proceso", href: "#proceso" },
    { name: "Portafolio", href: "#portafolio" },
    { name: "Clientes", href: "#clientes" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <header
      className="
      fixed
      top-0
      left-0
      w-full
      z-50
      bg-black/20
      backdrop-blur-xl
      border-b
      border-white/10
      shadow-lg
      shadow-black/20
      "
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}

        <a
          href="#inicio"
          className="flex items-center gap-3"
        >
          <Image
            src="/images/logo.svg"
            alt="Mango Casa de Medios"
            width={180}
            height={50}
            priority
            className="h-10 w-auto"
          />
        </a>

        {/* MENU DESKTOP */}

        <nav className="hidden md:flex items-center gap-8 text-sm">

          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="
                text-white
                hover:text-yellow-400
                transition-all
                duration-300
              "
            >
              {link.name}
            </a>
          ))}

          <a
            href="#contacto"
            className="
              ml-2
              px-5
              py-2
              rounded-full
              bg-yellow-400
              text-black
              font-semibold
              hover:scale-105
              transition-all
              duration-300
            "
          >
            Cotizar
          </a>

        </nav>

        {/* BOTON MOVIL */}

        <button
          aria-label="Abrir menú"
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>

      </div>

      {/* MENU MOVIL */}

      {open && (
        <div
          className="
          md:hidden
          bg-black/95
          backdrop-blur-xl
          border-t
          border-white/10
          "
        >
          <div className="px-6 py-6 flex flex-col gap-5">

            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="
                  text-white
                  hover:text-yellow-400
                  transition
                "
              >
                {link.name}
              </a>
            ))}

            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="
                mt-2
                bg-yellow-400
                text-black
                text-center
                py-3
                rounded-full
                font-semibold
              "
            >
              Solicitar Cotización
            </a>

          </div>
        </div>
      )}
    </header>
  );
}