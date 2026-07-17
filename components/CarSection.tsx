import { getCars } from "@/lib/directus";
import CarCard from "@/components/CarCard";
import CarCarousel from "@/components/CarCarousel";
import { whatsappLink } from "@/lib/contact";
import Link from "next/link";

export default async function CarSection() {
  const cars = await getCars();
  const featured = cars.filter((c) => c.destacado);
  const rest = cars.filter((c) => !c.destacado);

  return (
    <section id="autos" className="py-20 bg-black scroll-mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <span className="inline-block bg-[#D50000] text-white text-xs tracking-widest font-bold px-3 py-1 rounded-sm">
            Autos
          </span>
          <h2 className="text-3xl sm:text-4xl font-racing text-white tracking-tight">
            Nuestros vehículos
          </h2>
          <p className="text-xl text-[#CCCCCC] tracking-wide">
            Vehículos premium importados desde Alemania
          </p>
        </div>

        {cars.length === 0 ? (
          <div className="max-w-xl mx-auto text-center bg-[#111111] border border-[#222222] rounded-xl p-10">
            <p className="text-[#CCCCCC] leading-relaxed mb-4">
              Estamos actualizando el catálogo. Mientras tanto, escribinos y
              te contamos qué tenemos disponible.
            </p>
            <Link
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D50000] hover:text-[#ff1a1a] transition-colors text-sm font-semibold tracking-wide"
            >
              Escribinos por WhatsApp →
            </Link>
          </div>
        ) : (
          <>
            {featured.length > 0 && (
              <div className="grid md:grid-cols-3 gap-6 mb-16">
                {featured.map((car) => (
                  <CarCard key={car.id} car={car} />
                ))}
              </div>
            )}

            {rest.length > 0 && (
              <div>
                {featured.length > 0 && (
                  <h3 className="text-xl font-racing text-[#CCCCCC] mb-8 text-center tracking-wide">
                    Más vehículos disponibles
                  </h3>
                )}
                <CarCarousel cars={rest} />
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
