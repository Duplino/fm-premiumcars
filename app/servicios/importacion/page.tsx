import type { Metadata } from "next";
import ImportacionClient from "./ImportacionClient";

export const metadata: Metadata = {
  title: "Importación de Coches desde Alemania | FM Premium Cars",
  description:
    "Importá tu coche desde Alemania con asesoría a medida o con el Pack Importación Segura: búsqueda, revisión, transporte y matriculación.",
};

export default function ImportacionPage() {
  return <ImportacionClient />;
}
