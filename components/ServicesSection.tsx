import Link from "next/link";
import { Handshake, Car, Truck, Wrench } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
}

const services: Service[] = [
  {
    icon: Handshake,
    title: "Gestión de venta",
    description:
      "Gestionamos la venta de tu vehículo actual al mejor precio. Nos encargamos de todo el proceso.",
    href: "/servicios/gestion-venta",
  },
  {
    icon: Car,
    title: "Venta de coches en stock",
    description:
      "Amplio catálogo de vehículos importados en stock, listos para entrega inmediata.",
    href: "/servicios/stock",
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
    title: "Revisión integral de coches",
    description:
      "Inspección técnica completa de tu vehículo con informe detallado.",
    href: "/servicios/revision",
  },
];

export default function ServicesSection() {
  return (
    <section id="servicios" className="py-20 bg-[#1a1a1a]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <span className="inline-block bg-[#D50000] text-white text-xs tracking-widest font-bold px-3 py-1 rounded-sm">
            Servicios
          </span>
          <h2 className="text-3xl sm:text-4xl font-racing text-white tracking-tight">
            Nuestros servicios
          </h2>
          <p className="text-xl text-[#CCCCCC] max-w-3xl mx-auto tracking-wide">
            Todo lo que necesitas para importar o vender tu vehículo con total garantía
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.href}
                className="bg-[#111111] rounded-lg p-8 flex flex-col gap-4 shadow-lg hover:shadow-xl transition-shadow border border-[#222222]"
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
