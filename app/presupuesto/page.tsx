"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const AÑO_MIN = 1990;
const AÑO_MAX = 2024;
const PRESUPUESTO_MIN = 10000;
const PRESUPUESTO_MAX = 150000;
const PRESUPUESTO_STEP = 1000;

type FormData = {
  nombre: string;
  contacto: string;
  marca: string;
  modelo: string;
  añoMin: number;
  añoMax: number;
  kmMax: number;
  transmision: string;
  combustible: string;
  carroceria: string;
  presupuestoMin: number;
  presupuestoMax: number;
  extras: string;
};

const initialForm: FormData = {
  nombre: "",
  contacto: "",
  marca: "",
  modelo: "",
  añoMin: 2010,
  añoMax: 2022,
  kmMax: 100000,
  transmision: "Cualquiera",
  combustible: "Cualquiera",
  carroceria: "Cualquiera",
  presupuestoMin: 15000,
  presupuestoMax: 40000,
  extras: "",
};

export default function PresupuestoPage() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const set = <K extends keyof FormData>(key: K, value: FormData[K]) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(JSON.stringify(form, null, 2));
    setSubmitted(true);
  };

  const labelClass = "block text-[#CCCCCC] text-sm font-semibold mb-1 tracking-wide";
  const inputClass =
    "w-full bg-[#111111] border border-[#333333] text-white rounded px-3 py-2 text-sm focus:outline-none focus:border-[#D50000] transition-colors";
  const selectClass = inputClass;

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Nav */}
      <header className="border-b border-[#333333] bg-[#0a0a0a] sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <Link href="/" className="flex items-center gap-2 text-[#CCCCCC] hover:text-white transition-colors text-sm">
              <ArrowLeft className="w-4 h-4" />
              Volver al inicio
            </Link>
            <Image src="/logo.png" alt="FM Premium Cars" width={100} height={100} />
          </div>
        </div>
      </header>

      {/* Form */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-2xl">
        <div className="text-center mb-12">
          <span className="inline-block bg-[#D50000] text-white text-xs tracking-widest font-bold px-3 py-1 rounded-sm mb-4">
            Presupuesto
          </span>
          <h1 className="text-3xl sm:text-4xl font-racing text-white tracking-tight mb-4">
            Solicita tu presupuesto
          </h1>
          <p className="text-[#CCCCCC] tracking-wide">
            Cuéntanos qué coche buscas y te contactaremos con las mejores opciones.
          </p>
        </div>

        {submitted ? (
          <div className="bg-[#1a1a1a] border border-[#D50000] rounded-lg p-10 text-center space-y-6">
            <div className="w-16 h-16 bg-[#D50000] rounded-full flex items-center justify-center mx-auto">
              <ArrowRight className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-racing text-white">¡Solicitud enviada!</h2>
            <p className="text-[#CCCCCC]">
              Hemos recibido tu presupuesto. Nos pondremos en contacto contigo en menos de 24 horas.
            </p>
            <Button
              className="bg-[#D50000] hover:bg-[#B71C1C] text-white border-0 font-bold"
              onClick={() => setSubmitted(false)}
            >
              Enviar otro presupuesto
            </Button>
            <div className="pt-2">
              <Link href="/" className="text-[#999999] hover:text-white text-sm transition-colors">
                Volver al inicio
              </Link>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-10">
            {/* Contacto */}
            <fieldset className="bg-[#1a1a1a] rounded-lg p-6 space-y-5 border border-[#222222]">
              <legend className="text-lg font-racing text-white px-2 -ml-2">Contacto</legend>
              <div>
                <label className={labelClass} htmlFor="nombre">Nombre</label>
                <input
                  id="nombre"
                  type="text"
                  required
                  className={inputClass}
                  value={form.nombre}
                  onChange={(e) => set("nombre", e.target.value)}
                  placeholder="Tu nombre completo"
                />
              </div>
              <div>
                <label className={labelClass} htmlFor="contacto">Email o Teléfono</label>
                <input
                  id="contacto"
                  type="text"
                  required
                  className={inputClass}
                  value={form.contacto}
                  onChange={(e) => set("contacto", e.target.value)}
                  placeholder="email@ejemplo.com o +34 600 000 000"
                />
              </div>
            </fieldset>

            {/* Sobre el auto */}
            <fieldset className="bg-[#1a1a1a] rounded-lg p-6 space-y-6 border border-[#222222]">
              <legend className="text-lg font-racing text-white px-2 -ml-2">Sobre el vehículo</legend>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelClass} htmlFor="marca">Marca</label>
                  <input
                    id="marca"
                    type="text"
                    className={inputClass}
                    value={form.marca}
                    onChange={(e) => set("marca", e.target.value)}
                    placeholder="BMW, Audi, Mercedes..."
                  />
                </div>
                <div>
                  <label className={labelClass} htmlFor="modelo">Modelo</label>
                  <input
                    id="modelo"
                    type="text"
                    className={inputClass}
                    value={form.modelo}
                    onChange={(e) => set("modelo", e.target.value)}
                    placeholder="Serie 3, A4, Clase C..."
                  />
                </div>
              </div>

              {/* Year range – dual-handle slider with editable inputs */}
              <div>
                <label className={labelClass}>Año del vehículo</label>
                {/* Editable number inputs */}
                <div className="flex items-center gap-3 mb-4 mt-1">
                  <div className="flex items-center gap-2 flex-1">
                    <span className="text-xs text-[#999999] shrink-0">Desde</span>
                    <input
                      type="number"
                      min={AÑO_MIN}
                      max={AÑO_MAX}
                      value={form.añoMin}
                      onChange={(e) => {
                        const val = Number(e.target.value);
                        if (!isNaN(val) && val >= AÑO_MIN && val <= form.añoMax - 1)
                          set("añoMin", val);
                      }}
                      className={`${inputClass} text-center`}
                    />
                  </div>
                  <span className="text-[#666666]">–</span>
                  <div className="flex items-center gap-2 flex-1">
                    <span className="text-xs text-[#999999] shrink-0">Hasta</span>
                    <input
                      type="number"
                      min={AÑO_MIN}
                      max={AÑO_MAX}
                      value={form.añoMax}
                      onChange={(e) => {
                        const val = Number(e.target.value);
                        if (!isNaN(val) && val <= AÑO_MAX && val >= form.añoMin + 1)
                          set("añoMax", val);
                      }}
                      className={`${inputClass} text-center`}
                    />
                  </div>
                </div>
                {/* Dual-handle slider */}
                <div className="relative h-5">
                  <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 h-2 bg-[#333333] rounded-full" />
                  <div
                    className="absolute top-1/2 -translate-y-1/2 h-2 bg-[#D50000] rounded-full pointer-events-none"
                    style={{
                      left: `${((form.añoMin - AÑO_MIN) / (AÑO_MAX - AÑO_MIN)) * 100}%`,
                      right: `${100 - ((form.añoMax - AÑO_MIN) / (AÑO_MAX - AÑO_MIN)) * 100}%`,
                    }}
                  />
                  <input
                    type="range"
                    min={AÑO_MIN}
                    max={AÑO_MAX}
                    value={form.añoMin}
                    onChange={(e) => {
                      const val = Math.min(Number(e.target.value), form.añoMax - 1);
                      set("añoMin", val);
                    }}
                    className="dual-range-input absolute w-full h-2 top-1/2 -translate-y-1/2 appearance-none bg-transparent"
                    style={{ zIndex: form.añoMin > (AÑO_MIN + AÑO_MAX) / 2 ? 5 : 3 }}
                  />
                  <input
                    type="range"
                    min={AÑO_MIN}
                    max={AÑO_MAX}
                    value={form.añoMax}
                    onChange={(e) => {
                      const val = Math.max(Number(e.target.value), form.añoMin + 1);
                      set("añoMax", val);
                    }}
                    className="dual-range-input absolute w-full h-2 top-1/2 -translate-y-1/2 appearance-none bg-transparent"
                    style={{ zIndex: form.añoMax < (AÑO_MIN + AÑO_MAX) / 2 ? 5 : 3 }}
                  />
                </div>
                <div className="flex justify-between text-xs text-[#666666] mt-2 px-1">
                  <span>{AÑO_MIN}</span>
                  <span>{AÑO_MAX}</span>
                </div>
              </div>

              {/* KM max */}
              <div>
                <label className={labelClass}>
                  Kilómetros máximos:{" "}
                  <span className="text-white">{form.kmMax.toLocaleString("es-ES")} km</span>
                </label>
                <div className="flex items-center gap-3 mt-2">
                  <span className="text-xs text-[#999999]">0</span>
                  <input
                    type="range"
                    min={0}
                    max={300000}
                    step={5000}
                    value={form.kmMax}
                    onChange={(e) => set("kmMax", Number(e.target.value))}
                    className="flex-1 accent-[#D50000]"
                  />
                  <span className="text-xs text-[#999999]">300k</span>
                </div>
              </div>

              {/* Transmision */}
              <div>
                <label className={labelClass}>Transmisión</label>
                <div className="flex flex-wrap gap-2 mt-1">
                  {["Automática", "Manual", "Cualquiera"].map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => set("transmision", opt)}
                      className={`px-4 py-2 rounded text-sm font-medium border transition-colors ${
                        form.transmision === opt
                          ? "bg-[#D50000] border-[#D50000] text-white"
                          : "bg-transparent border-[#444444] text-[#CCCCCC] hover:border-[#D50000]"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Combustible */}
              <div>
                <label className={labelClass}>Combustible</label>
                <div className="flex flex-wrap gap-2 mt-1">
                  {["Gasolina", "Diésel", "Híbrido", "Eléctrico", "Cualquiera"].map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => set("combustible", opt)}
                      className={`px-4 py-2 rounded text-sm font-medium border transition-colors ${
                        form.combustible === opt
                          ? "bg-[#D50000] border-[#D50000] text-white"
                          : "bg-transparent border-[#444444] text-[#CCCCCC] hover:border-[#D50000]"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Carroceria */}
              <div>
                <label className={labelClass}>Carrocería</label>
                <select
                  value={form.carroceria}
                  onChange={(e) => set("carroceria", e.target.value)}
                  className={selectClass}
                >
                  {["Sedán", "SUV", "Coupé", "Berlina", "Familiar", "Cabrio", "Cualquiera"].map(
                    (opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    )
                  )}
                </select>
              </div>
            </fieldset>

            {/* Presupuesto */}
            <fieldset className="bg-[#1a1a1a] rounded-lg p-6 space-y-6 border border-[#222222]">
              <legend className="text-lg font-racing text-white px-2 -ml-2">Presupuesto</legend>
              <p className="text-xs text-[#D50000] font-semibold tracking-wide -mt-2">
                ⚠ No trabajamos con presupuestos por debajo de los 10.000€
              </p>

              {/* Editable number inputs */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 flex-1">
                  <span className="text-xs text-[#999999] shrink-0">Desde</span>
                  <div className="relative flex-1">
                    <input
                      type="number"
                      min={PRESUPUESTO_MIN}
                      max={PRESUPUESTO_MAX}
                      step={PRESUPUESTO_STEP}
                      value={form.presupuestoMin}
                      onChange={(e) => {
                        const val = Number(e.target.value);
                        if (!isNaN(val) && val >= PRESUPUESTO_MIN && val < form.presupuestoMax)
                          set("presupuestoMin", val);
                      }}
                      className={`${inputClass} pr-8 text-center`}
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#666666] text-sm pointer-events-none">€</span>
                  </div>
                </div>
                <span className="text-[#666666]">–</span>
                <div className="flex items-center gap-2 flex-1">
                  <span className="text-xs text-[#999999] shrink-0">Hasta</span>
                  <div className="relative flex-1">
                    <input
                      type="number"
                      min={PRESUPUESTO_MIN}
                      max={PRESUPUESTO_MAX}
                      step={PRESUPUESTO_STEP}
                      value={form.presupuestoMax}
                      onChange={(e) => {
                        const val = Number(e.target.value);
                        if (!isNaN(val) && val <= PRESUPUESTO_MAX && val > form.presupuestoMin)
                          set("presupuestoMax", val);
                      }}
                      className={`${inputClass} pr-8 text-center`}
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#666666] text-sm pointer-events-none">€</span>
                  </div>
                </div>
              </div>

              {/* Dual-handle slider */}
              <div className="relative h-5">
                <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 h-2 bg-[#333333] rounded-full" />
                <div
                  className="absolute top-1/2 -translate-y-1/2 h-2 bg-[#D50000] rounded-full pointer-events-none"
                  style={{
                    left: `${((form.presupuestoMin - PRESUPUESTO_MIN) / (PRESUPUESTO_MAX - PRESUPUESTO_MIN)) * 100}%`,
                    right: `${100 - ((form.presupuestoMax - PRESUPUESTO_MIN) / (PRESUPUESTO_MAX - PRESUPUESTO_MIN)) * 100}%`,
                  }}
                />
                <input
                  type="range"
                  min={PRESUPUESTO_MIN}
                  max={PRESUPUESTO_MAX}
                  step={PRESUPUESTO_STEP}
                  value={form.presupuestoMin}
                  onChange={(e) => {
                    const val = Math.min(Number(e.target.value), form.presupuestoMax - PRESUPUESTO_STEP);
                    set("presupuestoMin", val);
                  }}
                  className="dual-range-input absolute w-full h-2 top-1/2 -translate-y-1/2 appearance-none bg-transparent"
                  style={{ zIndex: form.presupuestoMin > (PRESUPUESTO_MIN + PRESUPUESTO_MAX) / 2 ? 5 : 3 }}
                />
                <input
                  type="range"
                  min={PRESUPUESTO_MIN}
                  max={PRESUPUESTO_MAX}
                  step={PRESUPUESTO_STEP}
                  value={form.presupuestoMax}
                  onChange={(e) => {
                    const val = Math.max(Number(e.target.value), form.presupuestoMin + PRESUPUESTO_STEP);
                    set("presupuestoMax", val);
                  }}
                  className="dual-range-input absolute w-full h-2 top-1/2 -translate-y-1/2 appearance-none bg-transparent"
                  style={{ zIndex: form.presupuestoMax < (PRESUPUESTO_MIN + PRESUPUESTO_MAX) / 2 ? 5 : 3 }}
                />
              </div>
              <div className="flex justify-between text-xs text-[#666666] px-1">
                <span>{PRESUPUESTO_MIN.toLocaleString("es-ES")}€</span>
                <span>{PRESUPUESTO_MAX.toLocaleString("es-ES")}€</span>
              </div>
            </fieldset>

            {/* Extras y equipamiento */}
            <fieldset className="bg-[#1a1a1a] rounded-lg p-6 border border-[#222222]">
              <legend className="text-lg font-racing text-white px-2 -ml-2">Extras y equipamiento</legend>
              <p className="text-xs text-[#999999] mt-1 mb-4 leading-relaxed">
                ¿Tienes preferencias sobre el equipamiento? Indica cuáles son imprescindibles o excluyentes.
                <br />
                <span className="text-[#666666]">
                  Ejemplos: techo panorámico, cámara de reversa, asientos calefactables, navegación GPS, sensores de aparcamiento, llantas específicas...
                </span>
              </p>
              <textarea
                rows={4}
                value={form.extras}
                onChange={(e) => set("extras", e.target.value)}
                placeholder="Escribe aquí tus preferencias o extras imprescindibles..."
                className="w-full bg-[#111111] border border-[#333333] text-white rounded px-3 py-2 text-sm focus:outline-none focus:border-[#D50000] transition-colors resize-none"
              />
            </fieldset>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-[#D50000] hover:bg-[#B71C1C] text-white border-0 tracking-wide font-bold text-base py-6"
            >
              Solicitar presupuesto
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </form>
        )}
      </main>
    </div>
  );
}
