import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ServiceHero from "@/components/ServiceHero";
import ServiceTierCard from "@/components/ServiceTierCard";
import ServiceClosingCTA from "@/components/ServiceClosingCTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Asesoría Comprá tu Coche | FM Premium Cars",
  description:
    "Asesoría personalizada para comprar tu coche usado sin errores caros: análisis de anuncios, videollamadas y acompañamiento en la compra.",
};

export default function AsesoriaCompraPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <ServiceHero
        titleLine1="Asesoría"
        titleLine2="Comprá tu Coche"
        description="Servicio pensado para ayudarte a comprar un coche usado de forma inteligente, evitando errores caros, malas compras y pérdidas de dinero."
        ctaMessage="Hola! Quiero asesorarme para comprar mi coche."
      />

      {/* Tiers */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <span className="inline-block bg-[#D50000] text-white text-xs tracking-widest font-bold px-3 py-1 rounded-sm">
              Elegí tu nivel de acompañamiento
            </span>
            <h2 className="text-3xl sm:text-4xl font-racing text-white tracking-tight">
              Tres formas de ayudarte a comprar bien
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <ServiceTierCard
              tierLabel="A"
              title="Asesoría Express"
              idealPara="personas que ya encontraron un coche y quieren una opinión profesional rápida antes de avanzar."
              features={[
                "Análisis del anuncio",
                "Opinión honesta sobre el coche",
                "Recomendación sobre si vale la pena o no / otros modelos",
                "Problemas frecuentes del modelo/motor",
                "Valoración del precio",
                "Respuesta por WhatsApp/audio/Videollamada (25 min)",
              ]}
              meta="Modalidad: Online · Tiempo: Respuesta dentro de 24h"
              ctaMessage="Hola! Quiero la Asesoría Express para un coche que encontré."
            />
            <ServiceTierCard
              tierLabel="B"
              title="Asesoría Completa"
              idealPara="personas que todavía no saben qué coche comprar o quieren ayuda más personalizada."
              features={[
                "Videollamada personalizada",
                "Análisis de necesidades y presupuesto",
                "Recomendación de modelos",
                "Motores recomendados y motores a evitar",
                "Consejos sobre mantenimiento y reventa",
                "Revisión de anuncios enviados por el cliente",
                "Resolución de dudas",
              ]}
              meta="Modalidad: Videollamada (Google Meet/WhatsApp), 45 min · Tiempo: 30-45 min + seguimiento posterior 1 semana"
              ctaMessage="Hola! Quiero agendar la Asesoría Completa para comprar mi coche."
            />
            <ServiceTierCard
              tierLabel="C"
              title='Pack "Compra Segura"'
              idealPara="personas que quieren acompañamiento completo para comprar con tranquilidad."
              features={[
                "Todo lo incluido en la Asesoría Completa",
                "Búsqueda personalizada de vehículos",
                "Filtrado de anuncios",
                "Análisis detallado de opciones",
                "Recomendación de mejores alternativas",
                "Negociación con vendedor (si aplica)",
                "Acompañamiento durante el proceso de compra",
                "Soporte directo durante la búsqueda",
              ]}
              highlight
              ctaMessage='Hola! Quiero contratar el Pack "Compra Segura".'
              secondaryCta={{
                label: "¿Vas a revisar el coche antes de comprarlo? Mirá la Revisión Pre-Compra →",
                href: "/servicios/revision-pre-compra",
              }}
            />
          </div>
        </div>
      </section>

      <ServiceClosingCTA
        title="¿Listo para comprar tu coche sin equivocarte?"
        description="Agendá tu llamada y contanos qué coche estás buscando o qué anuncio querés que analicemos."
        ctaMessage="Hola! Quiero asesorarme para comprar mi coche."
      />

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
