export default function WhyUs() {
  const items = [
    "Experiencia y creatividad",
    "Resultados garantizados",
    "Soluciones a medida",
    "Calidad y profesionalismo",
  ];

  return (
    <section className="py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-center text-5xl font-bold mb-16">
          ¿Por qué elegirnos?
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {items.map((item) => (
            <div
              key={item}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center"
            >
              <p className="text-lg font-semibold">
                {item}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}