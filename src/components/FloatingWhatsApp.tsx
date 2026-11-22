import { WHATSAPP_LINK } from "@/lib/constants";
import { WhatsAppIcon } from "./Icons";

/** Sticky WhatsApp bubble, always within reach on every page. */
export function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/15 transition-transform duration-200 hover:scale-105 active:scale-95 sm:bottom-7 sm:right-7"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
