"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import CarCard from "@/components/CarCard";
import CarCarousel from "@/components/CarCarousel";
import { getCars, type Car } from "@/lib/directus";
import { whatsappLink } from "@/lib/contact";

/**
 * Seeded with the catalog snapshot taken at build time (so the page has
 * real content immediately, even on a static export with no server). On
 * mount, it quietly re-fetches straight from Directus in the browser and
 * swaps in the result if it succeeds — this is what keeps the catalog
 * live between deploys instead of only updating on the next rebuild.
 * Requires Directus's Public role to allow CORS from this site's origin;
 * if that isn't set up (or the fetch fails for any reason), it just keeps
 * showing the build-time snapshot.
 */
export default function CarCatalog({ initialCars }: { initialCars: Car[] }) {
  const [cars, setCars] = useState(initialCars);

  useEffect(() => {
    let cancelled = false;

    getCars()
      .then((fresh) => {
        if (!cancelled && fresh.length > 0) setCars(fresh);
      })
      .catch(() => {
        // No CORS / offline / Directus down — keep the build-time snapshot.
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const featured = cars.filter((c) => c.destacado);
  const rest = cars.filter((c) => !c.destacado);

  if (cars.length === 0) {
    return (
      <div className="max-w-xl mx-auto text-center bg-[#111111] border border-[#222222] rounded-xl p-10">
        <p className="text-[#CCCCCC] leading-relaxed mb-4">
          Estamos actualizando el catálogo. Mientras tanto, escribinos y te
          contamos qué tenemos disponible.
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
    );
  }

  return (
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
  );
}
