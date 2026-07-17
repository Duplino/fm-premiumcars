interface DirectusCarRecord {
  id: string;
  archived: boolean;
  sort: number | null;
  Imagen: string | null;
  auto: string | null;
  anio: number | null;
  descripcion: string | null;
  origen: string | null;
  destacado?: boolean | null;
  estado?: "stock" | "importado" | null;
}

export interface Car {
  id: string;
  modelo: string;
  anio: number | null;
  origen: string | null;
  descripcion: string | null;
  imagenUrl: string;
  destacado: boolean;
  estado: "stock" | "importado" | null;
}

const DIRECTUS_URL = process.env.DIRECTUS_URL ?? "https://directus.scalise.ar";

export function directusAssetUrl(
  fileId: string,
  { width, quality = 80 }: { width?: number; quality?: number } = {}
): string {
  const params = new URLSearchParams();
  if (width) params.set("width", String(width));
  params.set("quality", String(quality));
  return `${DIRECTUS_URL}/assets/${fileId}?${params.toString()}`;
}

export async function getCars(): Promise<Car[]> {
  try {
    const res = await fetch(
      `${DIRECTUS_URL}/items/FM_Premium_Cars?filter[archived][_eq]=false&sort=sort`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return [];

    const json = (await res.json()) as { data?: DirectusCarRecord[] };
    const records = json.data ?? [];

    return records
      .filter((car): car is DirectusCarRecord & { auto: string; Imagen: string } =>
        Boolean(car.auto && car.Imagen)
      )
      .map((car) => ({
        id: car.id,
        modelo: car.auto,
        anio: car.anio,
        origen: car.origen,
        descripcion: car.descripcion,
        imagenUrl: directusAssetUrl(car.Imagen, { width: 800 }),
        destacado: car.destacado ?? false,
        estado: car.estado ?? null,
      }));
  } catch {
    return [];
  }
}
