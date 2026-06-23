export default function Contact() {
  return (
    <section id="contacto" className="py-32 bg-[#081223]">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">

        {/* INFO */}
        <div>
          <h2 className="text-5xl font-bold mb-8">
            Hablemos de tu proyecto
          </h2>

          <p className="text-gray-300 mb-6">
            Cuéntanos tu idea y la convertimos en una experiencia memorable.
          </p>

          <div className="space-y-3 text-gray-400">
            <p>📧 soymangoproducciones@gmail.com</p>
            <p>📍 Barranquilla, Colombia</p>
            <p>📱 Instagram: @soymangoproducciones</p>
          </div>
        </div>

        {/* FORM */}
        <form className="space-y-4">

          <input
            type="text"
            placeholder="Nombre"
            className="w-full p-4 rounded-xl bg-white/5 border border-white/10"
          />

          <input
            type="email"
            placeholder="Correo"
            className="w-full p-4 rounded-xl bg-white/5 border border-white/10"
          />

          <textarea
            placeholder="Mensaje"
            rows={5}
            className="w-full p-4 rounded-xl bg-white/5 border border-white/10"
          />

          <button className="w-full bg-yellow-400 text-black font-bold py-4 rounded-xl">
            Enviar Mensaje
          </button>

        </form>

      </div>
    </section>
  );
}