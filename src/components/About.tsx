export default function About() {
  return (
    <section
      id="nosotros"
      className="py-32 bg-[#081223]"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <span className="text-yellow-400 uppercase tracking-widest">
              Quiénes Somos
            </span>

            <h2 className="text-5xl font-bold mt-4 mb-8">
              La casa de los contenidos que conectan
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed">
              Somos una empresa dedicada a ofrecer soluciones creativas y
              estratégicas en comunicación, entretenimiento y producción audiovisual.
            </p>

            <p className="text-gray-400 mt-6">
              Transformamos ideas en experiencias memorables para empresas,
              organizaciones y entidades públicas.
            </p>

          </div>

          <div>
            <img
              src="/images/about.jpg"
              alt="Mango Casa de Medios"
              className="rounded-3xl"
            />
          </div>

        </div>

      </div>
    </section>
  );
}