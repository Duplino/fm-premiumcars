import type { Metadata } from "next";
import PresupuestoClient from "./PresupuestoClient";

export const metadata: Metadata = {
  title: "Solicitá tu presupuesto | FM Premium Cars",
  description:
    "Contanos qué coche buscás — marca, modelo, año, presupuesto y equipamiento — y te contactamos con las mejores opciones.",
};

export default function PresupuestoPage() {
  return <PresupuestoClient />;
}
