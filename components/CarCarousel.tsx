"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import CarCard from "@/components/CarCard";
import type { Car } from "@/lib/directus";

export default function CarCarousel({ cars }: { cars: Car[] }) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollByAmount = (direction: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-car-card]");
    const amount = (card?.offsetWidth ?? el.clientWidth) + 16;
    el.scrollBy({ left: direction * amount, behavior: "smooth" });
  };

  return (
    <div className="relative flex items-center gap-4">
      <button
        onClick={() => scrollByAmount(-1)}
        className="hidden sm:flex shrink-0 w-10 h-10 bg-[#D50000] hover:bg-[#B71C1C] rounded-full items-center justify-center text-white transition-colors"
        aria-label="Anterior"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <div
        ref={scrollerRef}
        className="flex-1 flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {cars.map((car) => (
          <div
            key={car.id}
            data-car-card
            className="shrink-0 snap-start w-[85%] sm:w-[45%] md:w-[31%]"
          >
            <CarCard car={car} />
          </div>
        ))}
      </div>

      <button
        onClick={() => scrollByAmount(1)}
        className="hidden sm:flex shrink-0 w-10 h-10 bg-[#D50000] hover:bg-[#B71C1C] rounded-full items-center justify-center text-white transition-colors"
        aria-label="Siguiente"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
}
