import type { Metadata } from "next";
import { Gauge, Paintbrush, ClipboardCheck, Car, Wrench, FileText, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import ServiceHero from "@/components/ServiceHero";
import ServiceClosingCTA from "@/components/ServiceClosingCTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Revisión Pre-Compra en Barcelona | FM Premium Cars",
  description:
    "Revisamos el coche antes de que lo compres: diagnosis, espesor de pintura, prueba dinámica e informe final. Cobertura en Barcelona y Cataluña.",
};

const items = [
  {
    icon: Gauge,
    title: "Diagnosis para comprobar kms y fallos",
    desc: "Verificación del kilometraje real y detección de fallos registrados",
  },
  {
    icon: Paintbrush,
    title: "Medición de espesor de pintura",
    desc: "Para descartar repintados o masillados",
  },
  {
    icon: ClipboardCheck,
    title: "Comprobación de estado general",
    desc: "Revisión completa de carrocería, interior y equipamiento",
  },
  {
    icon: Car,
    title: "Prueba dinámica",
    desc: "Si es posible, probamos el coche en marcha",
  },
  {
    icon: Wrench,
    title: "Detección de posibles problemas de motor",
    desc: "Revisión técnica del motor y componentes mecánicos",
  },
  {
    icon: FileText,
    title: "Informe/resumen final",
    desc: "Un resumen claro con todo lo encontrado",
  },
];

export default function RevisionPreCompraPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <ServiceHero
        titleLine1="Revisión"
        titleLine2="Pre-Compra"
        description="Servicio pensado para personas que quieren revisar un coche antes de comprarlo para evitar problemas ocultos o malas decisiones."
        ctaMessage="Hola! Quiero revisar un coche antes de comprarlo."
      />

      {/* Incluye */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <span className="inline-block bg-[#D50000] text-white text-xs tracking-widest font-bold px-3 py-1 rounded-sm">
              Incluye
            </span>
            <h2 className="text-3xl sm:text-4xl font-racing text-white tracking-tight">
              Qué revisamos
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {items.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="flex items-start gap-3 bg-[#111111] p-6 rounded-xl border border-[#222222] transition-colors hover:border-[#D50000]/50"
                >
                  <div className="w-8 h-8 bg-[#D50000] rounded-sm flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white text-sm font-racing mb-1">{item.title}</h3>
                    <p className="text-[#999999] text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cobertura */}
      <section className="py-8 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto bg-[#111111] border border-[#222222] rounded-xl p-6 flex items-start gap-4">
            <MapPin className="w-6 h-6 text-[#D50000] shrink-0 mt-1" />
            <div>
              <h3 className="text-white font-racing text-lg mb-2">
                Cobertura: Barcelona y Cataluña
              </h3>
              <p className="text-[#CCCCCC] text-sm leading-relaxed">
                Incluida para clientes de Barcelona y alrededores. Para
                clientes fuera de Barcelona, el coste de desplazamiento y
                revisión se calcula aparte.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Objetivo */}
      <section className="py-12 bg-[#0d0d0d]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xl text-[#CCCCCC] max-w-2xl mx-auto tracking-wide italic">
            &quot;Ayudarte a comprar con tranquilidad y evitar errores caros.&quot;
          </p>
        </div>
      </section>

      <ServiceClosingCTA
        title="¿Querés revisar un coche antes de comprarlo?"
        description="Agendá tu llamada y contanos qué coche querés que revisemos."
        ctaMessage="Hola! Quiero revisar un coche antes de comprarlo."
      />

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
