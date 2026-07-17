import Image from "next/image";
import type { Car } from "@/lib/directus";

export default function CarCard({ car }: { car: Car }) {
  const meta = [car.anio, car.origen].filter(Boolean).join(" · ");

  return (
    <div className="bg-[#111111] rounded-xl overflow-hidden shadow-lg flex flex-col h-full border border-[#222222] transition-colors hover:border-[#D50000]/50">
      <div className="relative w-full h-52">
        <Image
          src={car.imagenUrl}
          alt={car.anio ? `${car.modelo} ${car.anio}` : car.modelo}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 85vw, 33vw"
        />
        {car.destacado && (
          <span className="absolute top-3 left-3 bg-[#D50000] text-white text-xs tracking-widest font-bold px-2 py-1 rounded-sm">
            Destacado
          </span>
        )}
        {car.estado && (
          <span className="absolute top-3 right-3 bg-black/70 border border-white/30 text-white text-xs tracking-wide font-semibold px-2 py-1 rounded-sm backdrop-blur-sm">
            {car.estado === "stock" ? "En stock" : "Importado"}
          </span>
        )}
      </div>
      <div className="p-5 flex flex-col gap-2 flex-1">
        <h3 className="text-white font-racing text-lg leading-snug">{car.modelo}</h3>
        {meta && (
          <p className="text-[#CCCCCC] text-sm tracking-wide">{meta}</p>
        )}
        {car.descripcion && (
          <p className="text-[#999999] text-sm leading-relaxed">{car.descripcion}</p>
        )}
      </div>
    </div>
  );
}
