import { Button } from "@/components/ui/button";
import { ArrowRight, Instagram, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/ServicesSection";
import CarSection from "@/components/CarSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";
import { CONTACT, assetPath, bookingLink, whatsappLink } from "@/lib/contact";

export default function FMPremiumCarsLanding() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#1a1a1a] to-black"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#D50000] transform skew-x-12 translate-x-1/2"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-2xl sm:text-4xl lg:text-5xl font-racing text-white leading-tight tracking-tight">
                  TE AYUDO A COMPRAR TU COCHE
                  <span className="text-[#D50000] block mt-4">SIN EQUIVOCARTE</span>
                </h1>
                <p className="text-base sm:text-lg text-[#CCCCCC] font-bold tracking-wide font-racing">
                  Asesoría 1:1 · Importación · Revisión pre-compra
                </p>
                <p className="text-sm sm:text-base text-white leading-relaxed">
                  Te ayudo a elegir y comprar el coche ideal evitando errores
                  caros: asesoría personalizada, importación desde Alemania
                  con total garantía y revisión pre-compra en Barcelona.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="text-lg px-8 py-6 bg-[#D50000] hover:bg-[#B71C1C] text-white border-0  tracking-wide font-bold"
                  asChild
                >
                  <Link href={bookingLink()} target="_blank" rel="noopener noreferrer">
                    AGENDÁ TU LLAMADA
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-6 bg-transparent border-[#444444] text-white hover:border-[#D50000] hover:bg-transparent  tracking-wide font-bold"
                  asChild
                >
                  <Link href="/#servicios">VER SERVICIOS</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <Image
                src={assetPath("/car1.jpg")}
                alt="Coche deportivo importado desde Alemania"
                width={800}
                height={600}
                priority
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <ServicesSection />
      <CarSection />

      {/* Contacto directo */}
      <section id="contacto" className="py-20 bg-black scroll-mt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <span className="inline-block bg-[#D50000] text-white text-xs tracking-widest font-bold px-3 py-1 rounded-sm">
              Contacto
            </span>
            <h2 className="text-3xl sm:text-4xl font-racing text-white tracking-tight">
              ¿Hablamos?
            </h2>
            <p className="text-xl text-[#CCCCCC] tracking-wide max-w-2xl mx-auto">
              Agendá tu llamada y contanos qué coche estás buscando, o
              escribinos directamente.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <div className="bg-[#111111] rounded-xl p-8 text-center border border-[#222222] transition-colors hover:border-[#D50000]/50">
              <div className="w-16 h-16 bg-[#D50000] rounded-sm flex items-center justify-center mx-auto mb-4">
                <Image src={assetPath("/wsp.png")} alt="WhatsApp" width={35} height={35} />
              </div>
              <h3 className="font-racing text-white tracking-wide mb-3">
                Whatsapp
              </h3>
              <p className="text-2xl font-bold text-white mb-2">
                <Link href={whatsappLink()} target="_blank">
                  {CONTACT.phoneDisplay}
                </Link>
              </p>
              <p className="text-[#CCCCCC] tracking-wide">
                Llamanos directamente
              </p>
            </div>

            <div className="bg-[#111111] rounded-xl p-8 text-center border border-[#222222] transition-colors hover:border-[#D50000]/50">
              <div className="w-16 h-16 bg-[#D50000] rounded-sm flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-racing text-white tracking-wide mb-3">
                Email
              </h3>
              <p className="text-sm font-semibold text-white mb-2">
                <Link href={`mailto:${CONTACT.email}`}>{CONTACT.email}</Link>
              </p>
              <p className="text-[#CCCCCC] tracking-wide">
                Escribinos tu consulta
              </p>
            </div>

            <div className="bg-[#111111] rounded-xl p-8 text-center border border-[#222222] transition-colors hover:border-[#D50000]/50">
              <div className="w-16 h-16 bg-[#D50000] rounded-sm flex items-center justify-center mx-auto mb-4">
                <Instagram className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-racing text-white tracking-wide mb-3">
                Instagram
              </h3>
              <p className="text-lg font-semibold text-white mb-2">
                <Link href={CONTACT.instagramUrl} target="_blank">
                  {CONTACT.instagramHandle}
                </Link>
              </p>
              <p className="text-[#CCCCCC] tracking-wide">
                Seguinos en redes
              </p>
            </div>
          </div>

          <div className="text-center space-y-4">
            <Link
              href={bookingLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#D50000] hover:bg-[#B71C1C] text-white font-bold px-8 py-4 rounded transition-colors text-base"
            >
              Agendá tu llamada
              <ArrowRight className="w-5 h-5" />
            </Link>
            <p className="text-sm text-[#CCCCCC] tracking-wide">
              ¿Preferís un formulario?{" "}
              <Link
                href="/presupuesto"
                className="text-[#D50000] hover:text-[#ff1a1a] underline underline-offset-2 transition-colors"
              >
                Solicitá tu presupuesto
              </Link>
            </p>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
