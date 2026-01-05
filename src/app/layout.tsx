import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Joshio Rojas Moraga - Rechtsanwalt Hamburg",
  description: "Klar im Recht. Klar bei den Kosten. Individuelle Rechtsberatung mit Fokus auf Ihr Ziel.",
  keywords: ["Rechtsanwalt", "Hamburg", "Vertragsrecht", "Maritimes Wirtschaftsrecht", "Versicherungsrecht"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={inter.className}>
        <div className="mx-auto min-h-screen max-w-5xl px-6 py-12 sm:py-24 md:py-32">
          {children}
        </div>
      </body>
    </html>
  );
}
