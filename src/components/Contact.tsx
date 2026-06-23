export default function Contact() {
  return (
    <section id="contacto" className="py-20">

      <h2 className="text-4xl text-center mb-10">
        Contacto
      </h2>

      <div className="max-w-xl mx-auto">

        <input
          className="w-full border p-3 mb-4"
          placeholder="Nombre"
        />

        <input
          className="w-full border p-3 mb-4"
          placeholder="Empresa"
        />

        <textarea
          className="w-full border p-3 mb-4"
          rows={5}
          placeholder="Mensaje"
        />

      </div>

    </section>
  );
}