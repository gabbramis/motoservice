import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import Script from "next/script";
import { Suspense } from "react";

import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "MotoService - Auxilio Mecánico de Motos 24hs en Uruguay",
  description:
    "Auxilio mecánico de motos en Montevideo y zona costera. Pinchazos gratis, asistencia 24 horas y planes especiales para flotas. Servicio rápido y profesional.",
  keywords: [
    "auxilio motos Montevideo",
    "auxilio mecánico motos",
    "taller de motos Montevideo",
    "pinchazos gratis motos",
    "asistencia 24 horas motos",
    "servicio de motos para flotas",
  ],
  openGraph: {
    title: "MotoService - Auxilio Mecánico 24hs",
    description:
      "Auxilio mecánico para motos 24 horas en Montevideo y alrededores. Servicio confiable con beneficios como pinchazos gratis y planes para flotas.",
    url: "https://motoservice.com.uy",
    siteName: "MotoService",
    locale: "es_UY",
    type: "website",
  },
  alternates: {
    canonical: "https://motoservice.com.uy",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <head>
        {/* JSON-LD con Schema.org */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "MotoService",
              image: "https://motoservice.com.uy/logo.png",
              "@id": "https://motoservice.com.uy",
              url: "https://motoservice.com.uy",
              telephone: "+598-99-218-183",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Dirección aquí",
                addressLocality: "Montevideo",
                addressCountry: "UY",
              },
              openingHours: "Mo-Su 00:00-23:59",
              priceRange: "$$", // da contexto a Google
              sameAs: [
                "https://www.facebook.com/MotoserviceUruguay",
                "https://www.instagram.com/motoserviceuruguay/",
              ],
              serviceOffered: [
                {
                  "@type": "Service",
                  name: "Auxilio mecánico 24 horas",
                  description:
                    "Asistencia inmediata para motos en Montevideo y alrededores.",
                },
                {
                  "@type": "Service",
                  name: "Pinchazos gratis",
                  description:
                    "Reparación de pinchazos incluida dentro de nuestra asistencia.",
                },
                {
                  "@type": "Service",
                  name: "Planes para flotas",
                  description:
                    "Convenios especiales para empresas con flotas de motos.",
                },
              ],
            }),
          }}
        />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Header />
        <Suspense fallback={null}>{children}</Suspense>
        <Footer />
        {process.env.NODE_ENV === "production" && (
          <>
            <Script src="https://www.googletagmanager.com/gtag/js?id=G-FGVGFPNW6L" />
            <Script id="gtag-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-FGVGFPNW6L');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
