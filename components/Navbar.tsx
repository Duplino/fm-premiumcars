"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { bookingLink } from "@/lib/contact";

const navLinks = [
  { href: "/#servicios", label: "Servicios" },
  { href: "/#autos", label: "Autos" },
  { href: "/#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-b border-[#999999] bg-black sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Logo FM Premium Cars"
              width={120}
              height={63}
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#CCCCCC] hover:text-white transition-colors tracking-wide text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <Link href={bookingLink()} target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#D50000] hover:bg-[#B71C1C] text-white border-0 tracking-wide font-bold">
                Agendá tu llamada
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div id="mobile-menu" className="md:hidden bg-black border-t border-[#333333] px-4 pb-4">
          <nav className="flex flex-col space-y-4 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#CCCCCC] hover:text-white transition-colors tracking-wide text-sm font-medium py-2 border-b border-[#222222]"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={bookingLink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
            >
              <Button className="w-full bg-[#D50000] hover:bg-[#B71C1C] text-white border-0 tracking-wide font-bold mt-2">
                Agendá tu llamada
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
