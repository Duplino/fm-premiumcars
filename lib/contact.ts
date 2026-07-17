export const SITE_URL = "https://fmpremiumcars.com";

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
