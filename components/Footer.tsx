import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, Instagram } from "lucide-react";
import { CONTACT } from "@/lib/contact";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-[#999999] text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Image
                src="/logo.png"
                alt="Logo FM Premium Cars"
                width={120}
                height={63}
              />
            </div>
            <p className="text-[#CCCCCC] tracking-wide">
              Te ayudo a comprar tu coche sin equivocarte: asesoría,
              importación y revisión pre-compra.
            </p>
          </div>
          <div></div>

          <div>
            <h3 className="font-semibold mb-4 tracking-wide font-racing">
              Servicios
            </h3>
            <ul className="space-y-2 text-[#CCCCCC] tracking-wide">
              <li>
                <Link href="/servicios/asesoria-compra" className="hover:text-white transition-colors">
                  Asesoría Comprá tu Coche
                </Link>
              </li>
              <li>
                <Link href="/servicios/importacion" className="hover:text-white transition-colors">
                  Importación a la Carta
                </Link>
              </li>
              <li>
                <Link href="/servicios/revision-pre-compra" className="hover:text-white transition-colors">
                  Revisión Pre-Compra
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 tracking-wide font-racing">
              Contacto
            </h3>
            <div className="space-y-2 gap-4 text-[#CCCCCC] tracking-wide">
              <span className="flex items-center gap-1">
                <Phone className="w-4 h-4 text-white" />
                {CONTACT.phoneDisplay}
              </span>
              <span className="flex items-center gap-1">
                <Mail className="w-4 h-4 text-white" />
                <span className="text-sm">{CONTACT.email}</span>
              </span>
              <span className="flex items-center gap-1">
                <Instagram className="w-4 h-4 text-white" />
                {CONTACT.instagramHandle}
              </span>
            </div>
          </div>
        </div>

        <div className="border-t border-[#999999] mt-12 pt-8 text-center text-[#CCCCCC] tracking-wide">
          <p>
            &copy; {new Date().getFullYear()} FM Premium Cars. Todos los
            derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
