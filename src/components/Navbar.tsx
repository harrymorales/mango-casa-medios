"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const links = [
    { label: "Inicio", href: "#inicio" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Servicios", href: "#servicios" },
    { label: "Proceso", href: "#proceso" },
    { label: "Portafolio", href: "#portafolio" },
    { label: "Clientes", href: "#clientes" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    <header
      className={`
        fixed
        top-0
        left-0
        w-full
        z-50
        transition-all
        duration-500

        ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl border-b border-[#ECDAB7] shadow-lg"
            : "bg-transparent"
        }
      `}
    >
      <div
        className={`
          max-w-7xl
          mx-auto
          px-6
          flex
          items-center
          justify-between
          transition-all
          duration-500

          ${scrolled ? "py-3" : "py-5"}
        `}
      >

        {/* LOGO */}

        <a href="#inicio" className="flex items-center">
          <img
            src="/images/logo.png"
            alt="Mango Casa de Medios"
            className={`
              transition-all
              duration-500

              ${
                scrolled
                  ? "h-12 md:h-14"
                  : "h-14 md:h-16"
              }
            `}
          />
        </a>

        {/* DESKTOP */}

        <nav className="hidden lg:flex items-center gap-8">

          {links.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`
                font-medium
                transition-all
                duration-300

                ${
                  scrolled
                    ? "text-[#3D4436] hover:text-[#5F1A17]"
                    : "text-white hover:text-[#ECDAB7]"
                }
              `}
            >
              {item.label}
            </a>
          ))}

          <a
            href="#contacto"
            className={`
              ml-2
              px-6
              py-3
              rounded-full
              font-semibold
              transition-all
              duration-300
              hover:scale-105

              ${
                scrolled
                  ? "bg-[#5F1A17] text-white hover:bg-[#3D4436]"
                  : "bg-[#ECDAB7] text-[#5F1A17] hover:bg-white"
              }
            `}
          >
            Cotizar Proyecto
          </a>

        </nav>

        {/* MOBILE BUTTON */}

        <button
          className={`
            lg:hidden
            transition-all

            ${
              scrolled
                ? "text-[#3D4436]"
                : "text-white"
            }
          `}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>

      </div>

      {/* MOBILE MENU */}

      {open && (
        <div
          className={`
            lg:hidden
            backdrop-blur-xl
            border-t

            ${
              scrolled
                ? "bg-white border-[#ECDAB7]"
                : "bg-black/90 border-white/10"
            }
          `}
        >

          <div className="flex flex-col p-6 gap-5">

            {links.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`
                  font-medium
                  transition-all

                  ${
                    scrolled
                      ? "text-[#3D4436] hover:text-[#5F1A17]"
                      : "text-white hover:text-[#ECDAB7]"
                  }
                `}
              >
                {item.label}
              </a>
            ))}

            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className={`
                mt-2
                text-center
                py-3
                rounded-full
                font-semibold
                transition-all

                ${
                  scrolled
                    ? "bg-[#5F1A17] text-white"
                    : "bg-[#ECDAB7] text-[#5F1A17]"
                }
              `}
            >
              Solicitar Cotización
            </a>

          </div>

        </div>
      )}

    </header>
  );
}