import "./globals.css";

export const metadata = {
  title: "Mango Casa de Medios",
  description:
    "Producción audiovisual, eventos corporativos y estrategias de comunicación.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}