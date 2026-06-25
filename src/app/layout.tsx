import "./globals.css";

import {
  Poppins,
  Cormorant_Garamond,
} from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata = {
  title:
    "Mango Casa de Medios | Producción Audiovisual y Eventos Corporativos",

  description:
    "Productora audiovisual en Barranquilla especializada en eventos corporativos, streaming, producción audiovisual y estrategias de comunicación.",

  keywords: [
    "productora audiovisual barranquilla",
    "eventos corporativos barranquilla",
    "streaming profesional colombia",
    "producción audiovisual colombia",
    "agencia audiovisual barranquilla",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={poppins.className}>
        {children}
      </body>
    </html>
  );
}
