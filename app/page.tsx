import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowRight,
  FileText,
  Handshake,
  Instagram,
  Mail,
  Phone,
  Search,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/ServicesSection";
import CarSection from "@/components/CarSection";
import WhatsAppButton from "@/components/WhatsAppButton";

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
                  IMPORTACIÓN DE COCHES
                  <span className="text-[#D50000] block mt-4">A LA CARTA</span>
                </h1>
                <p className="text-base sm:text-lg text-[#CCCCCC] font-bold tracking-wide font-racing">
                  Exclusividad premium al precio justo
                </p>
                <p className="text-sm sm:text-base text-white leading-relaxed">
                  Importamos tu coche ideal desde Alemania con total garantía y
                  transparencia. Proceso completo de verificación y entrega
                  legal en España.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="text-lg px-8 py-6 bg-[#D50000] hover:bg-[#B71C1C] text-white border-0  tracking-wide font-bold"
                  asChild
                >
                  <Link href="/presupuesto">
                    SOLICITÁ TU PRESUPUESTO
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-6 bg-transparent border-[#CCCCCC] text-white hover:bg-[#CCCCCC] hover:text-black  tracking-wide font-bold"
                >
                  <Link href="#proceso">VER PROCESO</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/car1.jpg"
                alt="Coche deportivo importado desde Alemania"
                width={800}
                height={600}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <ServicesSection />
      <CarSection />

      {/* ¿Cómo funciona? - Proceso de importación */}
      <section id="proceso" className="py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge
              variant="secondary"
              className="w-fit mx-auto bg-[#D50000] text-white border-0  tracking-wider font-bold"
            >
              Proceso
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-racing text-white  tracking-tight">
              ¿Cómo funciona? – Proceso de importación
            </h2>
            <p className="text-xl text-[#CCCCCC] max-w-3xl mx-auto  tracking-wide">
              Un proceso simple y transparente en tres pasos para conseguir tu
              coche ideal
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow relative bg-[#1a1a1a] text-white">
              <div className="absolute -top-4 left-6 w-8 h-8 bg-[#D50000] text-white rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <CardHeader className="pt-8">
                <div className="w-12 h-12 bg-[#D50000] rounded-sm flex items-center justify-center mb-4">
                  <Search className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl  tracking-wide font-bold font-racing">
                  Búsqueda personalizada
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-[#CCCCCC]  tracking-wide">
                  Te ofrecemos diferentes opciones ajustadas a tus preferencias
                  y presupuesto. Vos elegís la unidad ideal.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow relative bg-[#1a1a1a] text-white">
              <div className="absolute -top-4 left-6 w-8 h-8 bg-[#D50000] text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <CardHeader className="pt-8">
                <div className="w-12 h-12 bg-[#D50000] rounded-sm flex items-center justify-center mb-4">
                  <Handshake className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl  tracking-wide font-bold font-racing">
                  Contacto con el concesionario
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-[#CCCCCC]  tracking-wide">
                  Verificamos que el coche esté en perfectas condiciones y toda
                  la documentación en regla.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow relative bg-[#1a1a1a] text-white">
              <div className="absolute -top-4 left-6 w-8 h-8 bg-[#D50000] text-white rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <CardHeader className="pt-8">
                <div className="w-12 h-12 bg-[#D50000] rounded-sm flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl  tracking-wide font-bold font-racing">
                  Formalización del contrato
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-[#CCCCCC]  tracking-wide">
                  Te damos la cotización final y, con el pago del servicio,
                  iniciamos el proceso de importación.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Nuestras Importaciones - Photo Gallery - REMOVED, replaced by CarSection */}

      {/* Revisión presencial en Alemania - REMOVED, now in /servicios/importacion */}

      {/* Transporte y entrega en España - REMOVED, now in /servicios/importacion */}

      {/* Contacto directo */}
      <section id="contacto" className="py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge
              variant="secondary"
              className="w-fit mx-auto bg-[#D50000] text-white border-0  tracking-wider font-bold"
            >
              Contacto
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-racing text-white  tracking-tight">
              Contacto directo
            </h2>
            <p className="text-xl text-[#CCCCCC]  tracking-wide">
              Estamos disponibles para resolver todas tus dudas
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center bg-black text-white">
              <CardHeader>
                <div className="w-16 h-16 bg-[#D50000] rounded-sm flex items-center justify-center mx-auto mb-4">
                  <Image src="/wsp.png" alt="WhatsApp" width={35} height={35} />
                </div>
                <CardTitle className=" tracking-wide font-bold font-racing">
                  Whatsapp
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-white mb-2">
                  <Link
                    href="https://api.whatsapp.com/send?phone=34641774061"
                    target="_blank"
                  >
                    641-774-061
                  </Link>
                </p>
                <p className="text-[#CCCCCC]  tracking-wide">
                  Llamanos directamente
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center bg-black text-white">
              <CardHeader>
                <div className="w-16 h-16 bg-[#D50000] rounded-sm flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <CardTitle className=" tracking-wide font-bold font-racing">
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-semibold text-white mb-2">
                  <Link href="mailto:info.fmpremiumcars@gmail.com">
                    info.fmpremiumcars@gmail.com
                  </Link>
                </p>
                <p className="text-[#CCCCCC]  tracking-wide">
                  Escribinos tu consulta
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center bg-black text-white">
              <CardHeader>
                <div className="w-16 h-16 bg-[#D50000] rounded-sm flex items-center justify-center mx-auto mb-4">
                  <Instagram className="w-8 h-8 text-white" />
                </div>
                <CardTitle className=" tracking-wide font-bold font-racing">
                  Instagram
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold text-white mb-2">
                  <Link
                    href="https://www.instagram.com/fm.premiumcars/"
                    target="_blank"
                  >
                    @fm.premiumcars
                  </Link>
                </p>
                <p className="text-[#CCCCCC]  tracking-wide">
                  Seguinos en redes
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Presupuesto */}
      <section className="py-20 bg-[#1a1a1a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl sm:text-4xl font-racing text-white tracking-tight">
              ¿Querés que te contactemos?
            </h2>
            <p className="text-xl text-[#CCCCCC] tracking-wide">
              Solicita tu presupuesto personalizado y uno de nuestros expertos se
              pondrá en contacto contigo en menos de 24 horas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="text-lg px-8 py-6 bg-[#D50000] hover:bg-[#B71C1C] text-white border-0 tracking-wide font-bold"
                asChild
              >
                <Link href="/presupuesto">
                  Solicitar presupuesto
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-[#CCCCCC] text-white hover:bg-[#CCCCCC] hover:text-black tracking-wide font-bold bg-transparent"
                asChild
              >
                <Link
                  href="https://api.whatsapp.com/send?phone=34641774061"
                  className="flex items-center gap-2"
                  target="_blank"
                >
                  <Image src="/wsp.png" alt="WhatsApp" width={20} height={20} />
                  641-774-061
                </Link>
              </Button>
            </div>
            <p className="text-sm text-[#CCCCCC] tracking-wide">
              Respuesta garantizada en menos de 24 horas • Asesoramiento gratuito
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-[#999999] text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Image
                  src="/logo.png"
                  alt="Logo FM Premium Cars"
                  width={120}
                  height={120}
                />
              </div>
              <p className="text-[#CCCCCC]  tracking-wide">
                Especialistas en importación de vehículos premium desde Alemania
                con garantía total.
              </p>
            </div>
            <div></div>

            <div>
              <h3 className="font-semibold mb-4  tracking-wide font-racing">
                Servicios
              </h3>
              <ul className="space-y-2 text-[#CCCCCC]  tracking-wide">
                <li>Búsqueda personalizada</li>
                <li>Revisión en Alemania</li>
                <li>Transporte seguro</li>
                <li>Matriculación España</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4  tracking-wide font-racing">
                Contacto
              </h3>
              <div className="space-y-2 gap-4 text-[#CCCCCC] tracking-wide">
                <span className="flex items-center gap-1">
                  <Phone className="w-4 h-4 text-white" />
                  641-774-061
                </span>
                <span className="flex items-center gap-1">
                  <Mail className="w-4 h-4 text-white" />
                  <span className="text-sm">info.fmpremiumcars@gmail.com</span>
                </span>
                <span className="flex items-center gap-1">
                  <Instagram className="w-4 h-4 text-white" />
                  @fm.premiumcars
                </span>
              </div>
            </div>

            {/*             <div>
              <h3 className="font-semibold mb-4  tracking-wide font-racing">
                Legal
              </h3>
              <ul className="space-y-2 text-[#CCCCCC]  tracking-wide">
                <li>Términos y condiciones</li>
                <li>Política de privacidad</li>
                <li>Aviso legal</li>
              </ul>
            </div> */}
          </div>

          <div className="border-t border-[#999999] mt-12 pt-8 text-center text-[#CCCCCC]  tracking-wide">
            <p>
              &copy; {new Date().getFullYear()} FM Premium Cars. Todos los
              derechos reservados.
            </p>
          </div>
        </div>
      </footer>
      <WhatsAppButton />
    </div>
  );
}
