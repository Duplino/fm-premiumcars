"use client";

import Image from "next/image";
import Link from "next/link";
import { whatsappLink } from "@/lib/contact";

export default function WhatsAppButton() {
  return (
    <Link
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#D50000] hover:bg-[#B71C1C] rounded-full flex items-center justify-center shadow-lg transition-colors"
      aria-label="Contactar por WhatsApp"
    >
      <Image src="/wsp.png" alt="WhatsApp" width={30} height={30} />
    </Link>
  );
}
