import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/contact";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "/",
    "/presupuesto/",
    "/servicios/asesoria-compra/",
    "/servicios/importacion/",
    "/servicios/revision-pre-compra/",
  ];

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "/" ? 1 : 0.8,
  }));
}
