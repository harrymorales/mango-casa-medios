export default function Clients() {
  const clients = [
    "/logos/telecaribe.png",
    "/logos/mintic.svg",
    "/logos/procaps.png",
    "/logos/ficci.png",
    "/logos/canal13.png",
    "/logos/diabetrics.svg",
  ];

  return (
    <section id="clientes" className="py-24 bg-[#081223]">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold mb-12">
          Confían en Nosotros
        </h2>

        <div className="overflow-hidden whitespace-nowrap">

          <div className="inline-flex gap-16 animate-pulse">

            {clients.concat(clients).map((logo, i) => (
              <img
                key={i}
                src={logo}
                className="h-16 object-contain opacity-70 hover:opacity-100 transition"
              />
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}