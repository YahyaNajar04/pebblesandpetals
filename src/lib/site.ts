import site from "../data/site.json";

export const WHATSAPP = `https://wa.me/${site.whatsapp}`;
export const TEL = `tel:${site.phone.replace(/\s/g,"")}`;

export const waLink = (msg?: string) =>
      msg ? `${WHATSAPP}?text=${encodeURIComponent(msg)}` : WHATSAPP;

export { site };