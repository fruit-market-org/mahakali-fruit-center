import { COMPANY } from "@/lib/constants";

/**
 * The circular MFC badge: a leaf-tipped green crescent wrapping the monogram,
 * with a bunch of bananas beneath it.
 */
export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      role="img"
      aria-label={`${COMPANY.shortName} logo`}
      className={className}
    >
      <defs>
      <linearGradient id="mfc-leaf" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#3FB36A"/>
        <stop offset="100%" stopColor="#15803D"/>
      </linearGradient>
      <linearGradient id="mfc-banana" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#FDE047"/>
        <stop offset="100%" stopColor="#F1A80B"/>
      </linearGradient>
      </defs>
      <g transform="translate(60 62) scale(0.8) translate(-60 -60)">
    <path d="M74 15.5 A46 46 0 1 0 74 104.5" fill="none" stroke="url(#mfc-leaf)" strokeWidth="10.5" strokeLinecap="round"/>
    <g fill="url(#mfc-leaf)">
      <path d="M75 14.5c-3.4-9.6 1.2-19.3 11.6-23.2 3.4 9.9-1.3 19.4-11.6 23.2z"/>
      <path d="M76.5 13.8c5.2-8.9 15.8-12 26-7.6-5.3 9-15.7 12.1-26 7.6z"/>
    </g>
    <text x="59" y="55" textAnchor="middle" dominantBaseline="central" fontFamily="var(--font-display, Georgia), 'Times New Roman', serif" fontSize="31" fontWeight="700" letterSpacing="0.5" fill="currentColor">MFC</text>
    <g transform="translate(56 86) scale(0.92)" stroke="#5A3708" strokeWidth="2.2" strokeLinejoin="round" strokeLinecap="round" fill="url(#mfc-banana)">
      <path d="M-25 1c3.4 11.4 14.6 17.6 26.4 15.1 6.8-1.4 11-5.6 11.9-11.6-11.5 2.6-24.2-.2-38.3-3.5z"/>
      <path d="M-22 -6.5c4.2 10.9 15.4 16.2 26.8 13.1 6.6-1.8 10.4-6.2 10.9-12.2-11.2 3.2-23.8 1.2-37.7-.9z"/>
      <path d="M-17 -13c5.2 10 16.2 14.2 27.2 10.4 6.3-2.2 9.7-6.9 9.8-12.9-10.8 4-23.3 3.3-37-2.5z"/>
    </g>
      </g>
    </svg>
  );
}

/** Badge plus the company name, used in the header and footer. */
export function Logo({
  className = "",
  variant = "dark",
}: {
  className?: string;
  variant?: "dark" | "light";
}) {
  const isLight = variant === "light";
  return (
    <span className={`flex min-w-0 items-center gap-2.5 sm:gap-3 ${className}`}>
      <LogoMark
        className={`h-9 w-9 shrink-0 sm:h-11 sm:w-11 ${
          isLight ? "text-white" : "text-ink"
        }`}
      />
      <span className="flex min-w-0 flex-col leading-tight">
        <span
          className={`font-display text-[15px] font-semibold leading-snug tracking-tight sm:text-lg ${
            isLight ? "text-white" : "text-ink"
          }`}
        >
          {COMPANY.shortName}
        </span>
        <span
          className={`text-[10px] font-medium uppercase tracking-[0.16em] sm:text-[11px] ${
            isLight ? "text-white/70" : "text-moss"
          }`}
        >
          Since {COMPANY.foundedYear}
        </span>
      </span>
    </span>
  );
}
