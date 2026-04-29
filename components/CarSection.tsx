"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import carsData from "@/public/data/cars.json";

interface Car {
  id: number;
  modelo: string;
  año: number;
  origen: string;
  estado: "stock" | "importado";
  imagen: string;
  destacado: boolean;
}

const cars: Car[] = carsData as Car[];
const featured = cars.filter((c) => c.destacado);
const rest = cars.filter((c) => !c.destacado);

function CarCard({ car }: { car: Car }) {
  return (
    <div className="bg-[#1a1a1a] rounded-lg overflow-hidden shadow-lg flex flex-col h-full border border-[#222222]">
      <div className="relative w-full h-52">
        <Image
          src={car.imagen}
          alt={car.modelo}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="p-5 flex flex-col gap-2 flex-1">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-white font-racing text-lg leading-snug">{car.modelo}</h3>
          <Badge
            className={
              car.estado === "stock"
                ? "bg-green-700 text-white border-0 shrink-0"
                : "bg-[#D50000] text-white border-0 shrink-0"
            }
          >
            {car.estado === "stock" ? "En stock" : "Importado"}
          </Badge>
        </div>
        <p className="text-[#CCCCCC] text-sm tracking-wide">
          {car.año} · {car.origen}
        </p>
      </div>
    </div>
  );
}

export default function CarSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);
  const total = rest.length;

  useEffect(() => {
    const update = () => setItemsPerPage(window.innerWidth >= 768 ? 3 : 1);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxIndex = Math.max(0, total - itemsPerPage);

  // Clamp index when screen size changes
  useEffect(() => {
    setCurrentIndex((i) => Math.min(i, maxIndex));
  }, [maxIndex]);

  const prev = () => setCurrentIndex((i) => Math.max(i - 1, 0));
  const next = () => setCurrentIndex((i) => Math.min(i + 1, maxIndex));

  const cardWidth = itemsPerPage > 1 ? `${100 / itemsPerPage}%` : "100%";

  return (
    <section id="autos" className="py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <span className="inline-block bg-[#D50000] text-white text-xs tracking-widest font-bold px-3 py-1 rounded-sm">
            Autos
          </span>
          <h2 className="text-3xl sm:text-4xl font-racing text-white tracking-tight">
            Nuestros vehículos
          </h2>
          <p className="text-xl text-[#CCCCCC] tracking-wide">
            Vehículos premium importados con éxito desde Alemania
          </p>
        </div>

        {/* Featured grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {featured.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>

        {/* Carousel */}
        {rest.length > 0 && (
          <div>
            <h3 className="text-xl font-racing text-[#CCCCCC] mb-8 text-center tracking-wide">
              Más vehículos disponibles
            </h3>
            <div className="relative flex items-center gap-4">
              <button
                onClick={prev}
                disabled={currentIndex === 0}
                className="shrink-0 w-10 h-10 bg-[#D50000] hover:bg-[#B71C1C] disabled:opacity-30 rounded-full flex items-center justify-center text-white transition-colors"
                aria-label="Anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex-1 overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{
                    transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
                  }}
                >
                  {rest.map((car) => (
                    <div
                      key={car.id}
                      className="shrink-0 px-2"
                      style={{ width: cardWidth }}
                    >
                      <CarCard car={car} />
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={next}
                disabled={currentIndex >= maxIndex}
                className="shrink-0 w-10 h-10 bg-[#D50000] hover:bg-[#B71C1C] disabled:opacity-30 rounded-full flex items-center justify-center text-white transition-colors"
                aria-label="Siguiente"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Dots – one per valid page position */}
            {maxIndex > 0 && (
              <div className="flex justify-center gap-2 mt-6">
                {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      i === currentIndex ? "bg-[#D50000]" : "bg-[#444444]"
                    }`}
                    aria-label={`Ir a la posición ${i + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
