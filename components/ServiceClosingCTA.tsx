import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { bookingLink } from "@/lib/contact";

interface ServiceClosingCTAProps {
  title: string;
  description: string;
  ctaMessage?: string;
}

export default function ServiceClosingCTA({
  title,
  description,
  ctaMessage,
}: ServiceClosingCTAProps) {
  return (
    <section className="py-20 bg-[#0d0d0d]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-racing text-white mb-4">{title}</h2>
        <p className="text-[#CCCCCC] mb-8 max-w-xl mx-auto">{description}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={bookingLink(ctaMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#D50000] hover:bg-[#B71C1C] text-white font-bold px-8 py-4 rounded transition-colors text-base"
          >
            Agendá tu llamada
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="/presupuesto"
            className="inline-flex items-center justify-center gap-2 border border-[#444444] hover:border-[#D50000] text-white font-bold px-8 py-4 rounded transition-colors text-base"
          >
            Solicitar presupuesto
          </Link>
        </div>
      </div>
    </section>
  );
}
