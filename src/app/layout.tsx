import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Joshio Rojas Moraga - Rechtsanwalt Hamburg",
  description: "Klar im Recht. Klar bei den Kosten. Individuelle Rechtsberatung mit Fokus auf Ihr Ziel.",
  keywords: ["Rechtsanwalt", "Hamburg", "Vertragsrecht", "Maritimes Wirtschaftsrecht", "Versicherungsrecht"],
  authors: [{ name: "Joshio Rojas Moraga" }],
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://joshiorojas-website.vercel.app",
    title: "Joshio Rojas Moraga - Rechtsanwalt Hamburg",
    description: "Klar im Recht. Klar bei den Kosten. Individuelle Rechtsberatung mit klarem Fokus auf Ihr angestrebtes Ziel.",
    siteName: "Joshio Rojas Moraga",
    images: [
      {
        url: "https://joshiorojas-website.vercel.app/avatar.jpg",
        width: 400,
        height: 400,
        alt: "Joshio Rojas Moraga - Rechtsanwalt",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Joshio Rojas Moraga - Rechtsanwalt Hamburg",
    description: "Klar im Recht. Klar bei den Kosten. Individuelle Rechtsberatung mit Fokus auf Ihr Ziel.",
    images: ["https://joshiorojas-website.vercel.app/avatar.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Attorney",
  name: "Joshio Rojas Moraga",
  image: "https://joshiorojas-website.vercel.app/avatar.jpg",
  "@id": "https://joshiorojas-website.vercel.app",
  url: "https://joshiorojas-website.vercel.app",
  telephone: "+49-177-7983780",
  email: "jrm@jrmlegal.de",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Farnweg 3b",
    addressLocality: "Hamburg",
    postalCode: "22459",
    addressCountry: "DE"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 53.6355,
    longitude: 9.9532
  },
  areaServed: {
    "@type": "Place",
    name: "Hamburg"
  },
  priceRange: "$$",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday"
    ],
    opens: "09:00",
    closes: "18:00"
  },
  sameAs: [],
  knowsAbout: [
    "Vertragsrecht",
    "Maritimes Wirtschaftsrecht",
    "Versicherungsrecht",
    "Schiedsverfahren",
    "Mietrecht",
    "AGB-Prüfung und -Gestaltung",
    "Verwaltungsrecht"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <div className="mx-auto min-h-screen max-w-5xl px-6 py-12 sm:py-24 md:py-32">
          {children}
        </div>
      </body>
    </html>
  );
}
