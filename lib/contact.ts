// Hosted on GitHub Pages at the default project-page URL. If a custom
// domain gets attached later, update this (and drop BASE_PATH usage /
// next.config.ts's basePath) to point at the root domain instead.
export const SITE_URL = "https://duplino.github.io/fm-premiumcars";
export const BASE_PATH = "/fm-premiumcars";

/**
 * `next/image` is set to `unoptimized` (GitHub Pages has no server to run
 * the optimizer), and unoptimized images do NOT get `basePath` auto-prefixed
 * the way the optimizer proxy path normally would. Wrap every local
 * (public/) image src in this so it still resolves under /fm-premiumcars/.
 * Not needed for absolute URLs (e.g. Directus asset URLs).
 */
export function assetPath(path: string): string {
  return `${BASE_PATH}${path}`;
}

export const CONTACT = {
  phone: "34641774061",
  phoneDisplay: "641-774-061",
  email: "info.fmpremiumcars@gmail.com",
  instagramHandle: "@fm.premiumcars",
  instagramUrl: "https://www.instagram.com/fm.premiumcars/",
} as const;

const WHATSAPP_BASE_URL = "https://api.whatsapp.com/send";

export function whatsappLink(message?: string): string {
  const params = new URLSearchParams({ phone: CONTACT.phone });
  if (message) params.set("text", message);
  return `${WHATSAPP_BASE_URL}?${params.toString()}`;
}

/**
 * Dedicated seam for the "Agendá tu llamada" CTA. Today it just opens
 * WhatsApp with a prefilled message; when a real booking link (Calendly,
 * etc.) exists, only this function's body needs to change.
 */
export function bookingLink(
  message: string = "Hola! Quiero agendar una llamada."
): string {
  return whatsappLink(message);
}
