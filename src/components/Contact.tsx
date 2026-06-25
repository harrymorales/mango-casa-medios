"use client";

import {
  Mail,
  Phone,
  Instagram,
  Facebook,
  Linkedin,
  MessageCircle,
} from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contacto"
      className="py-32 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}

        <div className="text-center mb-20">

          <span
            className="
              uppercase
              tracking-[4px]
              text-[#5F1A17]
            "
          >
            Contacto
          </span>

          <h2
            className="
              mt-4
              text-5xl
              md:text-6xl
              font-bold
            "
          >
            Hablemos de tu proyecto
          </h2>

          <p
            className="
              mt-6
              text-lg
              text-gray-600
              max-w-3xl
              mx-auto
            "
          >
            Estamos listos para ayudarte a crear
            experiencias memorables, eventos
            corporativos y producciones audiovisuales
            de alto impacto.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-16">

          {/* INFORMACIÓN */}

          <div>

            <div
              className="
                bg-[#F8F7F5]
                rounded-[40px]
                p-10
              "
            >

              <h3 className="text-3xl font-bold">
                Información de contacto
              </h3>

              <div className="mt-10 space-y-8">

                <div className="flex gap-4">

                  <Mail
                    className="text-[#5F1A17]"
                    size={26}
                  />

                  <div>
                    <p className="font-semibold">
                      Correo
                    </p>

                    <p className="text-gray-600">
                      soymangoproducciones@gmail.com
                    </p>
                  </div>

                </div>

                <div className="flex gap-4">

                  <Phone
                    className="text-[#5F1A17]"
                    size={26}
                  />

                  <div>
                    <p className="font-semibold">
                      Teléfono
                    </p>

                    <p className="text-gray-600">
                      +57 300 123 4567
                    </p>
                  </div>

                </div>

              </div>

              {/* WHATSAPP */}

              <a
                href="https://wa.me/573001234567"
                target="_blank"
                className="
                  mt-10
                  flex
                  items-center
                  justify-center
                  gap-3
                  bg-[#25D366]
                  text-white
                  py-4
                  rounded-2xl
                  font-semibold
                  hover:scale-105
                  transition
                "
              >
                <MessageCircle size={22} />

                WhatsApp Directo
              </a>

              {/* REDES */}

              <div className="mt-10">

                <p className="font-semibold mb-4">
                  Redes Sociales
                </p>

                <div className="flex gap-4">

                  <a
                    href="#"
                    className="
                      w-12
                      h-12
                      rounded-full
                      bg-white
                      flex
                      items-center
                      justify-center
                      shadow
                    "
                  >
                    <Instagram />
                  </a>

                  <a
                    href="#"
                    className="
                      w-12
                      h-12
                      rounded-full
                      bg-white
                      flex
                      items-center
                      justify-center
                      shadow
                    "
                  >
                    <Facebook />
                  </a>

                  <a
                    href="#"
                    className="
                      w-12
                      h-12
                      rounded-full
                      bg-white
                      flex
                      items-center
                      justify-center
                      shadow
                    "
                  >
                    <Linkedin />
                  </a>

                </div>

              </div>

            </div>

          </div>

          {/* FORMULARIO */}

          <div
            className="
              bg-[#F8F7F5]
              rounded-[40px]
              p-10
            "
          >

            <form className="space-y-6">

              <div>

                <label className="font-medium">
                  Nombre
                </label>

                <input
                  type="text"
                  className="
                    mt-2
                    w-full
                    p-4
                    rounded-xl
                    border
                    border-gray-200
                    bg-white
                  "
                />

              </div>

              <div>

                <label className="font-medium">
                  Correo
                </label>

                <input
                  type="email"
                  className="
                    mt-2
                    w-full
                    p-4
                    rounded-xl
                    border
                    border-gray-200
                    bg-white
                  "
                />

              </div>

              <div>

                <label className="font-medium">
                  Empresa
                </label>

                <input
                  type="text"
                  className="
                    mt-2
                    w-full
                    p-4
                    rounded-xl
                    border
                    border-gray-200
                    bg-white
                  "
                />

              </div>

              <div>

                <label className="font-medium">
                  Cuéntanos tu proyecto
                </label>

                <textarea
                  rows={5}
                  className="
                    mt-2
                    w-full
                    p-4
                    rounded-xl
                    border
                    border-gray-200
                    bg-white
                  "
                />

              </div>

              <button
                type="submit"
                className="
                  w-full
                  bg-[#5F1A17]
                  text-white
                  py-4
                  rounded-xl
                  font-semibold
                  hover:bg-[#3D4436]
                  transition
                "
              >
                Enviar Solicitud
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}