import type React from "react"
import type { Metadata } from "next"
import { Space_Mono } from "next/font/google"
import localFont from "next/font/local"
import "./globals.css"
import { CONTACT, SITE_URL } from "@/lib/contact"

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
  display: "swap",
})

const boldonse = localFont({
  src: "../public/fonts/Boldonse-Regular.ttf",
  variable: "--font-boldonse",
  display: "swap",
})

const title = "FM Premium Cars — Te ayudo a comprar tu coche sin equivocarte"
const description =
  "Asesoría 1:1 para comprar coche, importación desde Alemania y revisión pre-compra en Barcelona. Evitá errores caros y comprá con confianza."

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  openGraph: {
    title,
    description,
    url: SITE_URL,
    siteName: "FM Premium Cars",
    locale: "es_ES",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: title }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.png"],
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutomotiveBusiness",
  name: "FM Premium Cars",
  description,
  url: SITE_URL,
  email: CONTACT.email,
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Barcelona y Cataluña",
  },
  sameAs: [CONTACT.instagramUrl],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${spaceMono.variable} ${boldonse.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  )
}
