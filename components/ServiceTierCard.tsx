import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { bookingLink } from "@/lib/contact";

interface ServiceTierCardProps {
  tierLabel: string;
  title: string;
  idealPara: string;
  features: string[];
  meta?: string;
  footnote?: string;
  highlight?: boolean;
  ctaLabel?: string;
  ctaMessage?: string;
  secondaryCta?: { label: string; href: string };
}

export default function ServiceTierCard({
  tierLabel,
  title,
  idealPara,
  features,
  meta,
  footnote,
  highlight = false,
  ctaLabel = "Agendá tu llamada",
  ctaMessage,
  secondaryCta,
}: ServiceTierCardProps) {
  return (
    <div
      className={`relative rounded-xl p-6 flex flex-col h-full bg-[#111111] transition-colors ${
        highlight
          ? "border-2 border-[#D50000]"
          : "border border-[#222222] hover:border-[#D50000]/50"
      }`}
    >
      {highlight && (
        <Badge className="absolute -top-3 left-6 bg-[#D50000] text-white border-0 tracking-wider font-bold">
          Recomendado
        </Badge>
      )}

      <p className="text-[#D50000] text-xs font-bold tracking-widest uppercase mb-2">
        Opción {tierLabel}
      </p>
      <h3 className="text-2xl font-racing text-white tracking-wide mb-3">
        {title}
      </h3>
      <p className="text-[#999999] text-sm leading-relaxed mb-6">
        Ideal para: {idealPara}
      </p>

      <ul className="space-y-3 mb-6 flex-1">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2">
            <Check className="w-4 h-4 text-[#D50000] shrink-0 mt-0.5" />
            <span className="text-[#CCCCCC] text-sm leading-relaxed tracking-wide">
              {feature}
            </span>
          </li>
        ))}
      </ul>

      {meta && (
        <p className="text-[#999999] text-xs tracking-wide mb-2 border-t border-[#222222] pt-4">
          {meta}
        </p>
      )}
      {footnote && (
        <p className="text-[#999999] text-sm italic leading-relaxed mb-4">
          {footnote}
        </p>
      )}

      <div className="mt-4 space-y-3">
        <Link
          href={bookingLink(ctaMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex w-full items-center justify-center gap-2 font-bold px-6 py-3 rounded transition-colors text-sm ${
            highlight
              ? "bg-[#D50000] hover:bg-[#B71C1C] text-white"
              : "bg-transparent border border-[#444444] text-white hover:border-[#D50000]"
          }`}
        >
          {ctaLabel}
          <ArrowRight className="w-4 h-4" />
        </Link>
        {secondaryCta && (
          <Link
            href={secondaryCta.href}
            className="block text-center text-[#D50000] hover:text-[#ff1a1a] transition-colors text-sm font-semibold tracking-wide"
          >
            {secondaryCta.label}
          </Link>
        )}
      </div>
    </div>
  );
}
