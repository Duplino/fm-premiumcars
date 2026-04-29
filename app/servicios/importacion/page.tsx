"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Search,
  ClipboardCheck,
  Wrench,
  Truck,
  Paintbrush,
  Lightbulb,
  Zap,
  Shield,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const steps = [
  {
    id: 1,
    title: "Búsqueda",
    subtitle: "Encontramos tu coche ideal",
    icon: Search,
    description:
      "Analizamos tus preferencias y presupuesto para encontrar el vehículo perfecto en los mercados alemanes. Te presentamos múltiples opciones verificadas.",
    details: null,
  },
  {
    id: 2,
    title: "Verificación",
    subtitle: "Comprobamos cada detalle",
    icon: ClipboardCheck,
    description:
      "Verificamos que el coche esté en perfectas condiciones, toda la documentación en regla, y el historial del vehículo antes de cualquier compromiso.",
    details: null,
  },
  {
    id: 3,
    title: "Revisión",
    subtitle: "Inspección presencial en Alemania",
    icon: Wrench,
    description:
      "Realizamos una inspección técnica exhaustiva en Alemania antes de la compra.",
    details: [
      { icon: Paintbrush, title: "Medición de espesor de pintura", desc: "Verificación completa del estado de la carrocería" },
      { icon: Wrench, title: "Revisión de bajos y motor", desc: "Control de óxidos, fugas y estado general" },
      { icon: Lightbulb, title: "Verificación de faros y tornillería", desc: "Inspección de fecha de fabricación y componentes" },
      { icon: Zap, title: "Diagnóstico electrónico", desc: "Verificación de kilometraje y sistemas" },
      { icon: ClipboardCheck, title: "Historial de mantenimiento", desc: "Revisión completa de servicios y ITV" },
      { icon: Shield, title: "Documentación completa", desc: "Verificación de toda la papelería legal" },
    ],
  },
  {
    id: 4,
    title: "Transporte",
    subtitle: "Entrega en España",
    icon: Truck,
    description:
      "Nos ocupamos de todo el transporte y la matriculación. Recibes tu vehículo completamente legalizado y listo para circular en España.",
    details: [
      { icon: Truck, title: "Transporte seguro", desc: "Entrega puerta a puerta con seguro completo" },
      { icon: Shield, title: "Matriculación en España", desc: "Gestionamos todos los trámites legales" },
    ],
  },
];

export default function ImportacionPage() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = -rect.top;
      const sectionHeight = sectionRef.current.offsetHeight - window.innerHeight;
      if (sectionTop < 0 || sectionHeight <= 0) return;
      const progress = Math.min(1, Math.max(0, sectionTop / sectionHeight));
      const step = Math.min(steps.length - 1, Math.floor(progress * steps.length));
      setActiveStep(step);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Nav */}
      <header className="border-b border-[#333333] bg-[#0a0a0a] sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <Link
              href="/"
              className="flex items-center gap-2 text-[#CCCCCC] hover:text-white transition-colors text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              Volver al inicio
            </Link>
            <Image src="/logo.png" alt="FM Premium Cars" width={100} height={100} />
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#1a1a1a] to-black" />
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#D50000] transform skew-x-12 translate-x-1/2 opacity-80" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <Badge className="bg-[#D50000] text-white border-0 tracking-widest font-bold mb-6">
              Servicio
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-racing text-white tracking-tight mb-6">
              Importación
              <span className="text-[#D50000] block mt-2">A la carta</span>
            </h1>
            <p className="text-xl text-[#CCCCCC] leading-relaxed tracking-wide max-w-2xl">
              Importamos el coche de tus sueños desde Alemania con total garantía y
              transparencia. Desde la búsqueda hasta la entrega en tu puerta.
            </p>
          </div>
        </div>
      </section>

      {/* Scroll-driven steps */}
      <div ref={sectionRef} style={{ height: "400vh" }} className="relative">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="flex gap-8 lg:gap-16 items-start">
              {/* Progress bar (vertical, desktop) */}
              <div className="hidden md:flex flex-col items-center gap-0 pt-1 shrink-0">
                <div className="relative flex flex-col items-center">
                  {steps.map((step, i) => {
                    const Icon = step.icon;
                    const isActive = i === activeStep;
                    const isPast = i < activeStep;
                    return (
                      <div key={step.id} className="flex flex-col items-center">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-500 ${
                            isActive
                              ? "bg-[#D50000] border-[#D50000] scale-110"
                              : isPast
                              ? "bg-[#B71C1C] border-[#B71C1C]"
                              : "bg-[#111111] border-[#444444]"
                          }`}
                        >
                          <Icon className="w-4 h-4 text-white" />
                        </div>
                        <span
                          className={`text-xs mt-1 mb-1 tracking-wide transition-colors duration-300 ${
                            isActive ? "text-white" : "text-[#666666]"
                          }`}
                        >
                          {step.title}
                        </span>
                        {i < steps.length - 1 && (
                          <div
                            className={`w-0.5 h-12 transition-colors duration-500 ${
                              isPast ? "bg-[#D50000]" : "bg-[#333333]"
                            }`}
                          />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Card area */}
              <div className="flex-1 relative min-h-[420px]">
                {/* Mobile progress (horizontal) */}
                <div className="flex md:hidden items-center gap-2 mb-6">
                  {steps.map((step, i) => {
                    const Icon = step.icon;
                    const isActive = i === activeStep;
                    const isPast = i < activeStep;
                    return (
                      <div key={step.id} className="flex items-center gap-1">
                        <div
                          className={`w-7 h-7 rounded-full flex items-center justify-center border transition-all duration-300 ${
                            isActive
                              ? "bg-[#D50000] border-[#D50000]"
                              : isPast
                              ? "bg-[#B71C1C] border-[#B71C1C]"
                              : "bg-[#111111] border-[#444444]"
                          }`}
                        >
                          <Icon className="w-3 h-3 text-white" />
                        </div>
                        {i < steps.length - 1 && (
                          <div
                            className={`h-0.5 w-6 transition-colors duration-300 ${
                              isPast ? "bg-[#D50000]" : "bg-[#333333]"
                            }`}
                          />
                        )}
                      </div>
                    );
                  })}
                </div>

                {steps.map((step, i) => {
                  const Icon = step.icon;
                  const offset = i - activeStep;
                  const isActive = offset === 0;
                  const isNext = offset === 1;
                  const isPrevious = offset < 0;

                  return (
                    <div
                      key={step.id}
                      className="absolute inset-0 transition-all duration-700 ease-in-out"
                      style={{
                        transform: isPrevious
                          ? "translateX(-110%) scale(0.85)"
                          : isActive
                          ? "translateX(0%) scale(1)"
                          : isNext
                          ? "translateX(110%) scale(0.9)"
                          : "translateX(220%) scale(0.85)",
                        opacity: isActive ? 1 : isNext ? 0.4 : 0,
                        zIndex: isActive ? 10 : 5,
                        pointerEvents: isActive ? "auto" : "none",
                      }}
                    >
                      <div className="bg-[#1a1a1a] rounded-xl p-8 border border-[#222222] h-full overflow-y-auto">
                        <div className="flex items-start gap-4 mb-6">
                          <div className="w-14 h-14 bg-[#D50000] rounded-lg flex items-center justify-center shrink-0">
                            <Icon className="w-7 h-7 text-white" />
                          </div>
                          <div>
                            <p className="text-[#D50000] text-xs font-bold tracking-widest uppercase mb-1">
                              Paso {step.id}
                            </p>
                            <h2 className="text-2xl font-racing text-white">{step.title}</h2>
                            <p className="text-[#CCCCCC] text-sm tracking-wide">{step.subtitle}</p>
                          </div>
                        </div>
                        <p className="text-[#CCCCCC] leading-relaxed mb-6">{step.description}</p>

                        {step.details && (
                          <div className="grid sm:grid-cols-2 gap-4">
                            {step.details.map((detail, di) => {
                              const DetailIcon = detail.icon;
                              return (
                                <div
                                  key={di}
                                  className="flex items-start gap-3 bg-[#111111] p-4 rounded-lg"
                                >
                                  <div className="w-8 h-8 bg-[#D50000] rounded-sm flex items-center justify-center shrink-0">
                                    <DetailIcon className="w-4 h-4 text-white" />
                                  </div>
                                  <div>
                                    <h4 className="text-white text-sm font-racing mb-1">
                                      {detail.title}
                                    </h4>
                                    <p className="text-[#999999] text-xs">{detail.desc}</p>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <section className="py-20 bg-[#1a1a1a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-racing text-white mb-4">
            ¿Listo para importar tu coche?
          </h2>
          <p className="text-[#CCCCCC] mb-8 max-w-xl mx-auto">
            Solicita tu presupuesto personalizado sin compromiso y te contactaremos en menos de 24 horas.
          </p>
          <Link
            href="/presupuesto"
            className="inline-flex items-center gap-2 bg-[#D50000] hover:bg-[#B71C1C] text-white font-bold px-8 py-4 rounded transition-colors text-base"
          >
            Solicitar presupuesto
            <ArrowLeft className="w-5 h-5 rotate-180" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-[#333333] text-[#CCCCCC] py-8 text-center text-sm">
        <p>© {new Date().getFullYear()} FM Premium Cars. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
