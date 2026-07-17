import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { bookingLink } from "@/lib/contact";

interface ServiceHeroProps {
  eyebrow?: string;
  titleLine1: string;
  titleLine2: string;
  description: string;
  ctaMessage?: string;
}

export default function ServiceHero({
  eyebrow = "Servicio",
  titleLine1,
  titleLine2,
  description,
  ctaMessage,
}: ServiceHeroProps) {
  return (
    <section className="py-16 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#1a1a1a] to-black" />
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#D50000] transform skew-x-12 translate-x-1/2 opacity-80" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <span className="inline-block bg-[#D50000] text-white text-xs tracking-widest font-bold px-3 py-1 rounded-sm mb-6">
            {eyebrow}
          </span>
          <h1 className="text-4xl sm:text-5xl font-racing text-white tracking-tight mb-6">
            {titleLine1}
            <span className="text-[#D50000] block mt-2">{titleLine2}</span>
          </h1>
          <p className="text-xl text-[#CCCCCC] leading-relaxed tracking-wide max-w-2xl mb-8">
            {description}
          </p>
          <Link
            href={bookingLink(ctaMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#D50000] hover:bg-[#B71C1C] text-white font-bold px-8 py-4 rounded transition-colors text-base"
          >
            Agendá tu llamada
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
