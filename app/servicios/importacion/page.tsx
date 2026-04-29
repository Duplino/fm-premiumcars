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
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = stepRefs.current.map((ref, i) => {
      if (!ref) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveStep(i);
        },
        { threshold: 0.4 }
      );
      obs.observe(ref);
      return obs;
    });
    return () => observers.forEach((obs) => obs?.disconnect());
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Sticky header with integrated horizontal progress bar */}
      <header className="sticky top-0 z-50 bg-[#0a0a0a] border-b border-[#222222]">
        {/* Top row: back + logo */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-3">
            <Link
              href="/"
              className="flex items-center gap-2 text-[#CCCCCC] hover:text-white transition-colors text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              Volver al inicio
            </Link>
            <Image src="/logo.png" alt="FM Premium Cars" width={80} height={80} />
          </div>
        </div>

        {/* Progress bar row */}
        <div className="border-t border-[#1a1a1a] bg-[#0d0d0d] px-4 py-3">
          <div className="container mx-auto max-w-2xl">
            <div className="flex items-center justify-between">
              {steps.map((step, i) => {
                const Icon = step.icon;
                const isActive = i === activeStep;
                const isPast = i < activeStep;
                return (
                  <div key={step.id} className="flex items-center flex-1">
                    {/* Step dot */}
                    <div className="flex flex-col items-center gap-1">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center border-2 transition-all duration-500 ${
                          isActive
                            ? "bg-[#D50000] border-[#D50000] scale-110"
                            : isPast
                            ? "bg-[#B71C1C] border-[#B71C1C]"
                            : "bg-[#111111] border-[#444444]"
                        }`}
                      >
                        <Icon className="w-3.5 h-3.5 text-white" />
                      </div>
                      <span
                        className={`text-[10px] font-medium tracking-wide hidden sm:block transition-colors duration-300 ${
                          isActive ? "text-white" : "text-[#555555]"
                        }`}
                      >
                        {step.title}
                      </span>
                    </div>
                    {/* Connector line (not after last) */}
                    {i < steps.length - 1 && (
                      <div className="flex-1 mx-2 h-0.5 transition-colors duration-500 relative">
                        <div className="absolute inset-0 bg-[#222222] rounded-full" />
                        <div
                          className="absolute inset-y-0 left-0 bg-[#D50000] rounded-full transition-all duration-500"
                          style={{ width: isPast ? "100%" : isActive ? "50%" : "0%" }}
                        />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-16 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#1a1a1a] to-black" />
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#D50000] transform skew-x-12 translate-x-1/2 opacity-80" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block bg-[#D50000] text-white text-xs tracking-widest font-bold px-3 py-1 rounded-sm mb-6">
              Servicio
            </span>
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

      {/* Steps – scrollable, each tracked by IntersectionObserver */}
      <div className="py-8 space-y-6">
        {steps.map((step, i) => {
          const Icon = step.icon;
          const isEven = i % 2 === 0;
          return (
            <section
              key={step.id}
              ref={(el) => { stepRefs.current[i] = el as HTMLDivElement | null; }}
              className={`py-16 ${isEven ? "bg-[#0d0d0d]" : "bg-[#1a1a1a]"}`}
            >
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                {/* Step card */}
                <div className="bg-[#111111] rounded-xl border border-[#222222] p-8 shadow-xl">
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
                    <div className="grid sm:grid-cols-2 gap-4 mt-4">
                      {step.details.map((detail, di) => {
                        const DetailIcon = detail.icon;
                        return (
                          <div
                            key={di}
                            className="flex items-start gap-3 bg-[#0a0a0a] p-4 rounded-lg border border-[#1e1e1e]"
                          >
                            <div className="w-8 h-8 bg-[#D50000] rounded-sm flex items-center justify-center shrink-0">
                              <DetailIcon className="w-4 h-4 text-white" />
                            </div>
                            <div>
                              <h4 className="text-white text-sm font-racing mb-1">{detail.title}</h4>
                              <p className="text-[#999999] text-xs">{detail.desc}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* CTA */}
      <section className="py-20 bg-[#0d0d0d]">
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
