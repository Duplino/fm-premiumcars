import Link from "next/link";
import { UserCheck, Truck, Wrench } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
}

const services: Service[] = [
  {
    icon: UserCheck,
    title: "Asesoría Comprá tu Coche",
    description:
      "Te ayudamos a elegir y comprar el coche ideal, evitando errores caros y malas decisiones. Desde una opinión rápida hasta acompañamiento completo.",
    href: "/servicios/asesoria-compra",
  },
  {
    icon: Truck,
    title: "Importación a la carta",
    description:
      "Importamos el coche de tus sueños desde Alemania, personalizado según tus preferencias.",
    href: "/servicios/importacion",
  },
  {
    icon: Wrench,
    title: "Revisión Pre-Compra",
    description:
      "Revisamos el coche antes de que lo compres para detectar problemas ocultos y evitar malas decisiones. Cobertura en Barcelona y Cataluña.",
    href: "/servicios/revision-pre-compra",
  },
];

export default function ServicesSection() {
  return (
    <section id="servicios" className="py-20 bg-[#0d0d0d] scroll-mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <span className="inline-block bg-[#D50000] text-white text-xs tracking-widest font-bold px-3 py-1 rounded-sm">
            Servicios
          </span>
          <h2 className="text-3xl sm:text-4xl font-racing text-white tracking-tight">
            Nuestros servicios
          </h2>
          <p className="text-xl text-[#CCCCCC] max-w-3xl mx-auto tracking-wide">
            Todo lo que necesitas para comprar tu coche con total garantía, sin errores ni sorpresas
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.href}
                className="bg-[#111111] rounded-xl p-6 flex flex-col gap-4 border border-[#222222] transition-colors hover:border-[#D50000]/50"
              >
                <div className="w-12 h-12 bg-[#D50000] rounded-sm flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-racing text-white tracking-wide mb-2">
                    {service.title}
                  </h3>
                  <p className="text-[#CCCCCC] tracking-wide leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <Link
                  href={service.href}
                  className="text-[#D50000] hover:text-[#ff1a1a] transition-colors text-sm font-semibold tracking-wide mt-auto self-start"
                >
                  Ver más →
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
