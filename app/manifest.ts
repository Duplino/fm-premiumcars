import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "FM Premium Cars",
    short_name: "FM Premium Cars",
    description: "Te ayudo a comprar tu coche sin equivocarte.",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#D50000",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
