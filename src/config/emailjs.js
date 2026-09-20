// These EmailJS values are public by design (they ship in the browser bundle).
// Never put private keys, DATABASE_URL or any secret in this file.

const _envServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const _envTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

export const SERVICE_ID =
  _envServiceId && _envServiceId.trim() ? _envServiceId : "service_ly88dhu";

export const TEMPLATE_ID =
  _envTemplateId && _envTemplateId.trim() ? _envTemplateId : "template_yzillrp";

export const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
