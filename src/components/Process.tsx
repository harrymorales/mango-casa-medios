export default function Process() {
  const steps = [
    "Consultoría Inicial",
    "Propuesta Creativa",
    "Ejecución",
    "Evaluación y Feedback",
  ];

  return (
    <section
      id="proceso"
      className="py-32 bg-[#081223]"
    >
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-center text-5xl font-bold mb-20">
          Nuestro Proceso
        </h2>

        <div className="grid md:grid-cols-4 gap-8">

          {steps.map((step, index) => (
            <div
              key={step}
              className="bg-white/5 border border-white/10 rounded-3xl p-8"
            >
              <div className="text-yellow-400 text-5xl font-black mb-4">
                0{index + 1}
              </div>

              <h3 className="text-xl font-semibold">
                {step}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}