"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

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

const clamp = (val: number, min: number, max: number) =>
  Math.min(max, Math.max(min, val));

export default function PresupuestoClient() {
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
      <Navbar />

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
                <span className={labelClass} id="anio-group-label">Año del vehículo</span>
                {/* Editable number inputs */}
                <div className="flex items-center gap-3 mb-4 mt-1">
                  <div className="flex items-center gap-2 flex-1">
                    <label htmlFor="anio-min" className="text-xs text-[#999999] shrink-0">Desde</label>
                    <input
                      id="anio-min"
                      type="number"
                      min={AÑO_MIN}
                      max={AÑO_MAX}
                      value={form.añoMin}
                      onChange={(e) => {
                        const val = Number(e.target.value);
                        if (!isNaN(val)) set("añoMin", val);
                      }}
                      onBlur={() =>
                        set("añoMin", Math.min(clamp(form.añoMin, AÑO_MIN, AÑO_MAX), form.añoMax))
                      }
                      className={`${inputClass} text-center`}
                    />
                  </div>
                  <span className="text-[#999999]" aria-hidden="true">–</span>
                  <div className="flex items-center gap-2 flex-1">
                    <label htmlFor="anio-max" className="text-xs text-[#999999] shrink-0">Hasta</label>
                    <input
                      id="anio-max"
                      type="number"
                      min={AÑO_MIN}
                      max={AÑO_MAX}
                      value={form.añoMax}
                      onChange={(e) => {
                        const val = Number(e.target.value);
                        if (!isNaN(val)) set("añoMax", val);
                      }}
                      onBlur={() =>
                        set("añoMax", Math.max(clamp(form.añoMax, AÑO_MIN, AÑO_MAX), form.añoMin))
                      }
                      className={`${inputClass} text-center`}
                    />
                  </div>
                </div>
                {/* Dual-handle slider */}
                <div className="relative h-5" role="group" aria-labelledby="anio-group-label">
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
                    aria-label="Año mínimo"
                    min={AÑO_MIN}
                    max={AÑO_MAX}
                    value={form.añoMin}
                    onChange={(e) => {
                      const val = Math.min(Number(e.target.value), form.añoMax);
                      set("añoMin", val);
                    }}
                    className="dual-range-input absolute w-full h-2 top-1/2 -translate-y-1/2 appearance-none bg-transparent"
                    style={{ zIndex: form.añoMin > (AÑO_MIN + AÑO_MAX) / 2 ? 5 : 3 }}
                  />
                  <input
                    type="range"
                    aria-label="Año máximo"
                    min={AÑO_MIN}
                    max={AÑO_MAX}
                    value={form.añoMax}
                    onChange={(e) => {
                      const val = Math.max(Number(e.target.value), form.añoMin);
                      set("añoMax", val);
                    }}
                    className="dual-range-input absolute w-full h-2 top-1/2 -translate-y-1/2 appearance-none bg-transparent"
                    style={{ zIndex: form.añoMax < (AÑO_MIN + AÑO_MAX) / 2 ? 5 : 3 }}
                  />
                </div>
                <div className="flex justify-between text-xs text-[#999999] mt-2 px-1">
                  <span>{AÑO_MIN}</span>
                  <span>{AÑO_MAX}</span>
                </div>
              </div>

              {/* KM max */}
              <div>
                <label className={labelClass} htmlFor="km-max">
                  Kilómetros máximos:{" "}
                  <span className="text-white">{form.kmMax.toLocaleString("es-ES")} km</span>
                </label>
                <div className="flex items-center gap-3 mt-2">
                  <span className="text-xs text-[#999999]">0</span>
                  <input
                    id="km-max"
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
                <span className={labelClass} id="transmision-label">Transmisión</span>
                <div className="flex flex-wrap gap-2 mt-1" role="group" aria-labelledby="transmision-label">
                  {["Automática", "Manual", "Cualquiera"].map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      aria-pressed={form.transmision === opt}
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
                <span className={labelClass} id="combustible-label">Combustible</span>
                <div className="flex flex-wrap gap-2 mt-1" role="group" aria-labelledby="combustible-label">
                  {["Gasolina", "Diésel", "Híbrido", "Eléctrico", "Cualquiera"].map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      aria-pressed={form.combustible === opt}
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
                <label className={labelClass} htmlFor="carroceria">Carrocería</label>
                <select
                  id="carroceria"
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
                  <label htmlFor="presupuesto-min" className="text-xs text-[#999999] shrink-0">Desde</label>
                  <div className="relative flex-1">
                    <input
                      id="presupuesto-min"
                      type="number"
                      min={PRESUPUESTO_MIN}
                      max={PRESUPUESTO_MAX}
                      step={PRESUPUESTO_STEP}
                      value={form.presupuestoMin}
                      onChange={(e) => {
                        const val = Number(e.target.value);
                        if (!isNaN(val)) set("presupuestoMin", val);
                      }}
                      onBlur={() =>
                        set(
                          "presupuestoMin",
                          Math.min(
                            clamp(form.presupuestoMin, PRESUPUESTO_MIN, PRESUPUESTO_MAX),
                            form.presupuestoMax
                          )
                        )
                      }
                      className={`${inputClass} pr-8 text-center`}
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#999999] text-sm pointer-events-none">€</span>
                  </div>
                </div>
                <span className="text-[#999999]" aria-hidden="true">–</span>
                <div className="flex items-center gap-2 flex-1">
                  <label htmlFor="presupuesto-max" className="text-xs text-[#999999] shrink-0">Hasta</label>
                  <div className="relative flex-1">
                    <input
                      id="presupuesto-max"
                      type="number"
                      min={PRESUPUESTO_MIN}
                      max={PRESUPUESTO_MAX}
                      step={PRESUPUESTO_STEP}
                      value={form.presupuestoMax}
                      onChange={(e) => {
                        const val = Number(e.target.value);
                        if (!isNaN(val)) set("presupuestoMax", val);
                      }}
                      onBlur={() =>
                        set(
                          "presupuestoMax",
                          Math.max(
                            clamp(form.presupuestoMax, PRESUPUESTO_MIN, PRESUPUESTO_MAX),
                            form.presupuestoMin
                          )
                        )
                      }
                      className={`${inputClass} pr-8 text-center`}
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#999999] text-sm pointer-events-none">€</span>
                  </div>
                </div>
              </div>

              {/* Dual-handle slider */}
              <div className="relative h-5" role="group" aria-label="Rango de presupuesto">
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
                  aria-label="Presupuesto mínimo"
                  min={PRESUPUESTO_MIN}
                  max={PRESUPUESTO_MAX}
                  step={PRESUPUESTO_STEP}
                  value={form.presupuestoMin}
                  onChange={(e) => {
                    const val = Math.min(Number(e.target.value), form.presupuestoMax);
                    set("presupuestoMin", val);
                  }}
                  className="dual-range-input absolute w-full h-2 top-1/2 -translate-y-1/2 appearance-none bg-transparent"
                  style={{ zIndex: form.presupuestoMin > (PRESUPUESTO_MIN + PRESUPUESTO_MAX) / 2 ? 5 : 3 }}
                />
                <input
                  type="range"
                  aria-label="Presupuesto máximo"
                  min={PRESUPUESTO_MIN}
                  max={PRESUPUESTO_MAX}
                  step={PRESUPUESTO_STEP}
                  value={form.presupuestoMax}
                  onChange={(e) => {
                    const val = Math.max(Number(e.target.value), form.presupuestoMin);
                    set("presupuestoMax", val);
                  }}
                  className="dual-range-input absolute w-full h-2 top-1/2 -translate-y-1/2 appearance-none bg-transparent"
                  style={{ zIndex: form.presupuestoMax < (PRESUPUESTO_MIN + PRESUPUESTO_MAX) / 2 ? 5 : 3 }}
                />
              </div>
              <div className="flex justify-between text-xs text-[#999999] px-1">
                <span>{PRESUPUESTO_MIN.toLocaleString("es-ES")}€</span>
                <span>{PRESUPUESTO_MAX.toLocaleString("es-ES")}€</span>
              </div>
            </fieldset>

            {/* Extras y equipamiento */}
            <fieldset className="bg-[#1a1a1a] rounded-lg p-6 border border-[#222222]">
              <legend className="text-lg font-racing text-white px-2 -ml-2">Extras y equipamiento</legend>
              <label htmlFor="extras" className="text-xs text-[#999999] mt-1 mb-4 leading-relaxed block">
                ¿Tienes preferencias sobre el equipamiento? Indica cuáles son imprescindibles o excluyentes.
                <br />
                <span className="text-[#999999]">
                  Ejemplos: techo panorámico, cámara de reversa, asientos calefactables, navegación GPS, sensores de aparcamiento, llantas específicas...
                </span>
              </label>
              <textarea
                id="extras"
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

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
