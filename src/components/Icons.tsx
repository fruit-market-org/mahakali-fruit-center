import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};

export function WhatsAppIcon({ className = "h-5 w-5", ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden {...props}>
      <path d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.48 1.34 5L2 22l5.17-1.35a9.93 9.93 0 0 0 4.87 1.24h.01c5.5 0 9.96-4.46 9.96-9.96 0-2.66-1.04-5.16-2.92-7.04A9.88 9.88 0 0 0 12.04 2Zm0 18.18h-.01a8.27 8.27 0 0 1-4.21-1.15l-.3-.18-3.07.8.82-2.99-.2-.31a8.23 8.23 0 0 1-1.26-4.39c0-4.56 3.71-8.27 8.28-8.27 2.21 0 4.29.86 5.85 2.43a8.22 8.22 0 0 1 2.42 5.85c0 4.57-3.71 8.28-8.32 8.28Zm4.54-6.2c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.13-.16.24-.64.8-.78.97-.14.16-.29.18-.54.06a6.76 6.76 0 0 1-2-1.23 7.5 7.5 0 0 1-1.38-1.72c-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.43.13-.15.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.48c-.16 0-.43.06-.65.31-.22.25-.85.84-.85 2.04s.87 2.37.99 2.53c.12.17 1.71 2.61 4.14 3.66.58.25 1.03.4 1.38.51.58.19 1.11.16 1.53.1.47-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.16-.48-.28Z" />
    </svg>
  );
}

export function LeafIcon({ className = "h-5 w-5", ...props }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden {...props}>
      <path d="M4 20c0-8 5-13 16-14 0 10-5 15-13 15H4Z" />
      <path d="M4 20c3-5 7-8 12-10" />
    </svg>
  );
}

export function SunriseIcon({ className = "h-5 w-5", ...props }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden {...props}>
      <path d="M12 3v3M5.6 8.6 7.7 10.7M3 16h2M19 16h2M16.3 10.7l2.1-2.1" />
      <path d="M8 16a4 4 0 0 1 8 0" />
      <path d="M2 20h20" />
    </svg>
  );
}

export function TagIcon({ className = "h-5 w-5", ...props }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden {...props}>
      <path d="M3 11.5V4a1 1 0 0 1 1-1h7.5a1 1 0 0 1 .7.3l8.5 8.5a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0L3.3 12.2a1 1 0 0 1-.3-.7Z" />
      <circle cx="7.5" cy="7.5" r="1.4" />
    </svg>
  );
}

export function BoxIcon({ className = "h-5 w-5", ...props }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden {...props}>
      <path d="M3 8.5 12 4l9 4.5v7L12 20l-9-4.5v-7Z" />
      <path d="M3 8.5 12 13l9-4.5M12 13v7" />
    </svg>
  );
}

export function ShieldIcon({ className = "h-5 w-5", ...props }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden {...props}>
      <path d="M12 3 5 6v6c0 4.4 3 7.9 7 9 4-1.1 7-4.6 7-9V6l-7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function ChatIcon({ className = "h-5 w-5", ...props }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden {...props}>
      <path d="M21 12a8 8 0 0 1-8 8H7l-4 3V12a8 8 0 0 1 8-8h2a8 8 0 0 1 8 8Z" />
      <path d="M9 11h6M9 15h4" />
    </svg>
  );
}

export function MailIcon({ className = "h-5 w-5", ...props }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </svg>
  );
}

export function PhoneIcon({ className = "h-5 w-5", ...props }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden {...props}>
      <path d="M6.5 3h3l1.5 4-2 1.5a12 12 0 0 0 5.5 5.5L16 12l4 1.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 3.5 5.2 2 2 0 0 1 5.5 3h1Z" />
    </svg>
  );
}

export function PinIcon({ className = "h-5 w-5", ...props }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden {...props}>
      <path d="M12 21s7-5.7 7-11a7 7 0 1 0-14 0c0 5.3 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export function ClockIcon({ className = "h-5 w-5", ...props }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

export function ArrowIcon({ className = "h-4 w-4", ...props }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function MenuIcon({ className = "h-6 w-6", ...props }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function CloseIcon({ className = "h-6 w-6", ...props }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden {...props}>
      <path d="m6 6 12 12M18 6 6 18" />
    </svg>
  );
}

export function QuoteIcon({ className = "h-6 w-6", ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden {...props}>
      <path d="M9.5 5C6.5 6.6 5 9.2 5 12.8V19h6.2v-6.2H8.1c0-2.4.9-4 2.8-5L9.5 5Zm9.4 0c-3 1.6-4.5 4.2-4.5 7.8V19h6.2v-6.2h-3.1c0-2.4.9-4 2.8-5L18.9 5Z" />
    </svg>
  );
}

export const ICONS = {
  leaf: LeafIcon,
  sunrise: SunriseIcon,
  tag: TagIcon,
  box: BoxIcon,
  shield: ShieldIcon,
  chat: ChatIcon,
} as const;

export type IconName = keyof typeof ICONS;
