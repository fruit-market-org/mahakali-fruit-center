import { WHATSAPP_LINK } from "@/lib/constants";
import { WhatsAppIcon } from "./Icons";

interface WhatsAppButtonProps {
  label?: string;
  className?: string;
  variant?: "solid" | "outline" | "light";
  size?: "md" | "lg";
}

const variants = {
  solid:
    "bg-leaf text-white hover:bg-leaf-dark shadow-sm shadow-leaf/20 hover:shadow-md hover:shadow-leaf/25",
  outline:
    "border border-leaf/30 bg-white text-leaf hover:border-leaf hover:bg-leaf-light",
  light: "bg-white text-leaf hover:bg-cream-deep shadow-sm",
};

const sizes = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

/** The site's only call to action — opens WhatsApp with a pre-filled message. */
export function WhatsAppButton({
  label = "WhatsApp us",
  className = "",
  variant = "solid",
  size = "md",
}: WhatsAppButtonProps) {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2.5 rounded-full font-medium transition-all duration-200 ${variants[variant]} ${sizes[size]} ${className}`}
    >
      <WhatsAppIcon className={size === "lg" ? "h-5 w-5" : "h-4.5 w-4.5"} />
      {label}
    </a>
  );
}
