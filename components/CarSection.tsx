import { getCars } from "@/lib/directus";
import CarCatalog from "@/components/CarCatalog";

export default async function CarSection() {
  const cars = await getCars();

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

        <CarCatalog initialCars={cars} />
      </div>
    </section>
  );
}
