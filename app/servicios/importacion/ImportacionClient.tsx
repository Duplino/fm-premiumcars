"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Search,
  ClipboardCheck,
  Wrench,
  Truck,
  Paintbrush,
  Lightbulb,
  Zap,
  Shield,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import ServiceTierCard from "@/components/ServiceTierCard";
import ServiceClosingCTA from "@/components/ServiceClosingCTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { bookingLink } from "@/lib/contact";

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

export default function ImportacionClient() {
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const sections = stepRefs.current.filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const idx = stepRefs.current.findIndex((el) => el === entry.target);
          if (idx !== -1) setActiveStep(idx);
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

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
            <p className="text-xl text-[#CCCCCC] leading-relaxed tracking-wide max-w-2xl mb-8">
              Servicio pensado para personas que quieren importar un coche desde
              Alemania o Europa de forma segura y evitando errores comunes.
              Elegí cuánto querés hacer por tu cuenta y cuánto dejarnos a
              nosotros.
            </p>
            <Link
              href={bookingLink("Hola! Quiero asesorarme para importar mi coche.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#D50000] hover:bg-[#B71C1C] text-white font-bold px-8 py-4 rounded transition-colors text-base"
            >
              Agendá tu llamada
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Tiers */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <span className="inline-block bg-[#D50000] text-white text-xs tracking-widest font-bold px-3 py-1 rounded-sm">
              Elegí tu nivel de acompañamiento
            </span>
            <h2 className="text-3xl sm:text-4xl font-racing text-white tracking-tight">
              Asesoría &quot;Importa tu coche&quot;
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <ServiceTierCard
              tierLabel="A"
              title="Asesoría Express"
              idealPara="personas que quieren importar por su cuenta, pero necesitan entender cómo funciona el proceso desde Alemania."
              features={[
                "Videollamada personalizada",
                "Dónde buscar coches",
                "Cómo buscar correctamente",
                "Cómo negociar con vendedores",
                "Plataformas recomendadas",
                "Documentación básica alemana",
                "Cómo funcionan las matrículas temporales",
                "Costes aproximados de importación",
                "Consejos básicos para evitar errores",
                "Resolución de dudas generales sobre Alemania/importación",
              ]}
              meta="Modalidad: Videollamada · Tiempo: 45-60 minutos"
              ctaMessage="Hola! Quiero agendar la Asesoría Express de Importación."
            />
            <ServiceTierCard
              tierLabel="B"
              title="Asesoría Completa"
              idealPara="personas que quieren importar por su cuenta, pero entendiendo TODO el proceso completo hasta tener el coche matriculado en España."
              features={[
                "Todo lo incluido en la Asesoría Express",
                "Explicación completa de matriculación en España",
                "ITV y homologación",
                "Impuestos y tasas",
                "Documentación española necesaria",
                "Consejos sobre gestoría y trámites",
                "Cómo evitar errores administrativos",
                "Explicación completa del proceso de legalización en España",
                "Resolución de dudas específicas",
              ]}
              meta="Modalidad: Videollamada · Tiempo: 60-90 minutos"
              ctaMessage="Hola! Quiero agendar la Asesoría Completa de Importación."
            />
            <ServiceTierCard
              tierLabel="C"
              title='Pack "Importación Segura"'
              idealPara="personas que quieren olvidarse de todo el proceso y dejar la importación completamente en manos profesionales."
              features={[
                "Todo lo incluido en la Asesoría Completa",
                "Búsqueda personalizada del vehículo",
                "Filtrado y análisis de anuncios",
                "Negociación con vendedores",
                "Revisión del vehículo",
                "Gestión documental",
                "Transporte en camión",
                "Matriculación en España",
                "ITV nueva",
                "Entrega del vehículo matriculado",
                "Garantía",
                "Acompañamiento completo durante todo el proceso",
              ]}
              footnote="Objetivo: recibir el coche listo para disfrutar, sin preocuparte por trámites, desplazamientos o gestiones."
              highlight
              ctaMessage='Hola! Quiero contratar el Pack "Importación Segura".'
              secondaryCta={{ label: "Ver el proceso paso a paso ↓", href: "#proceso-pack" }}
            />
          </div>
        </div>
      </section>

      {/* Steps — the sticky mini-timeline lives inside this wrapper, so it only
          appears (and only sticks) once this section scrolls into view, and
          scrolls away naturally once you pass the last step. */}
      <div className="relative bg-black">
        <div id="proceso-pack" className="text-center pt-16 pb-6 px-4 scroll-mt-24">
          <span className="inline-block bg-[#D50000] text-white text-xs tracking-widest font-bold px-3 py-1 rounded-sm mb-3">
            Pack &quot;Importación Segura&quot;
          </span>
          <p className="text-[#CCCCCC] text-sm max-w-xl mx-auto">
            Así es el proceso completo si preferís dejarlo todo en nuestras manos.
          </p>
        </div>

        <header className="sticky top-24 z-30 border-y border-[#222222] bg-[#0d0d0d]/95 backdrop-blur-sm px-4 py-3">
          <div className="container mx-auto max-w-2xl">
            <div className="flex items-center justify-between">
              {steps.map((step, i) => {
                const Icon = step.icon;
                const isActive = i === activeStep;
                const isPast = i < activeStep;
                return (
                  <div key={step.id} className="flex items-center flex-1">
                    <button
                      type="button"
                      aria-label={`Ir a ${step.title}`}
                      aria-current={isActive}
                      onClick={() =>
                        stepRefs.current[i]?.scrollIntoView({ behavior: "smooth", block: "start" })
                      }
                      className="flex flex-col items-center gap-1"
                    >
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center border-2 transition-all duration-500 ${
                          isActive
                            ? "bg-[#D50000] border-[#D50000] scale-125 shadow-[0_0_18px_rgba(213,0,0,0.65)]"
                            : isPast
                              ? "bg-[#B71C1C] border-[#B71C1C]"
                              : "bg-[#111111] border-[#444444]"
                        }`}
                      >
                        <Icon className="w-3.5 h-3.5 text-white" />
                      </div>
                      <span
                        className={`text-[10px] font-medium tracking-wide hidden sm:block transition-colors duration-300 ${
                          isActive ? "text-white" : "text-[#999999]"
                        }`}
                      >
                        {step.title}
                      </span>
                    </button>

                    {i < steps.length - 1 && (
                      <div className="flex-1 mx-2 h-0.5 transition-colors duration-500 relative">
                        <div className="absolute inset-0 bg-[#222222] rounded-full" />
                        <div
                          className="absolute inset-y-0 left-0 bg-[#D50000] rounded-full transition-all duration-700 ease-out"
                          style={{ width: isPast ? "100%" : isActive ? "50%" : "0%" }}
                        />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </header>

        <div className="space-y-6 pb-6">
          {steps.map((step, i) => {
            const Icon = step.icon;
            const isEven = i % 2 === 0;
            const isActive = i === activeStep;
            return (
              <section
                key={step.id}
                ref={(el) => { stepRefs.current[i] = el; }}
                className={`min-h-screen snap-start scroll-mt-24 flex items-center py-10 ${isEven ? "bg-[#0d0d0d]" : "bg-[#1a1a1a]"}`}
              >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                  {/* Step card */}
                  <div
                    className={`relative overflow-hidden bg-[#111111] rounded-xl border p-6 transition-all duration-700 ${
                      isActive
                        ? "border-[#D50000]/40 opacity-100 translate-y-0"
                        : "border-[#222222] opacity-60 translate-y-3"
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className="pointer-events-none select-none absolute -right-4 -top-8 text-[10rem] leading-none font-racing text-white/[0.04]"
                    >
                      0{step.id}
                    </span>

                    <div className="relative flex items-start gap-4 mb-6">
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
                    <p className="relative text-[#CCCCCC] leading-relaxed mb-6">{step.description}</p>

                    {step.details && (
                      <div className="relative grid sm:grid-cols-2 gap-4 mt-4">
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
                                <h3 className="text-white text-sm font-racing mb-1">{detail.title}</h3>
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
      </div>

      <ServiceClosingCTA
        title="¿Listo para importar tu coche?"
        description="Agendá tu llamada o solicitá tu presupuesto sin compromiso y te contactamos en menos de 24 horas."
        ctaMessage="Hola! Quiero asesorarme para importar mi coche."
      />

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
