import type { FruitArtVariant } from "@/lib/constants";

interface FruitArtProps {
  variant: FruitArtVariant;
  from: string;
  to: string;
  accent?: string;
  label?: string;
  className?: string;
}

/**
 * Hand-drawn SVG fruit artwork. Used as the graceful fallback whenever a
 * product photograph fails to load, so a card is never left empty.
 */
export function FruitArt({
  variant,
  from,
  to,
  accent = "#2E7D4F",
  label,
  className = "",
}: FruitArtProps) {
  const uid = `${variant}-${from}-${to}`.replace(/[^a-zA-Z0-9]/g, "");
  const body = `body-${uid}`;
  const glow = `glow-${uid}`;

  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      role="img"
      aria-label={label ? `Illustration of ${label}` : "Fruit illustration"}
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id={body} x1="0.2" y1="0" x2="0.8" y2="1">
          <stop offset="0%" stopColor={from} />
          <stop offset="100%" stopColor={to} />
        </linearGradient>
        <radialGradient id={glow} cx="0.5" cy="0.45" r="0.6">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="200" height="200" fill="#F7F4EC" />
      <circle cx="100" cy="96" r="78" fill={glow ? `url(#${glow})` : "#fff"} />

      {variant === "round" && (
        <g>
          <circle cx="100" cy="108" r="52" fill={`url(#${body})`} />
          <path
            d="M100 58c0-10-6-18-16-22 2 12 7 19 16 22z"
            fill={accent}
          />
          <path d="M100 58c3-9 12-14 23-14-4 10-12 15-23 14z" fill={accent} />
          <ellipse
            cx="82"
            cy="92"
            rx="14"
            ry="20"
            fill="#fff"
            opacity="0.25"
            transform="rotate(-20 82 92)"
          />
        </g>
      )}

      {variant === "citrus" && (
        <g>
          <circle cx="100" cy="104" r="54" fill={`url(#${body})`} />
          <circle cx="100" cy="104" r="38" fill="#fff" opacity="0.16" />
          {Array.from({ length: 8 }).map((_, i) => (
            <path
              key={i}
              d="M100 104 L100 66"
              stroke="#fff"
              strokeOpacity="0.4"
              strokeWidth="3"
              strokeLinecap="round"
              transform={`rotate(${i * 45} 100 104)`}
            />
          ))}
          <path d="M100 50c4-10 14-15 26-14-5 11-14 16-26 14z" fill={accent} />
        </g>
      )}

      {variant === "cluster" && (
        <g>
          <path
            d="M100 44c0-10 8-18 20-20-2 12-9 19-20 20z"
            fill={accent}
          />
          <path d="M100 46v14" stroke={accent} strokeWidth="5" strokeLinecap="round" />
          {[
            [100, 72],
            [82, 92],
            [118, 92],
            [100, 100],
            [66, 114],
            [134, 114],
            [84, 122],
            [116, 122],
            [100, 134],
            [84, 152],
            [116, 152],
            [100, 166],
          ].map(([cx, cy], i) => (
            <circle key={i} cx={cx} cy={cy} r="15" fill={`url(#${body})`} />
          ))}
          <circle cx="94" cy="88" r="4" fill="#fff" opacity="0.4" />
          <circle cx="112" cy="118" r="4" fill="#fff" opacity="0.35" />
        </g>
      )}

      {variant === "crescent" && (
        <g strokeLinejoin="round" strokeWidth="4" stroke={accent}>
          <path
            d="M28 92c8 44 44 70 88 64 24-4 40-18 44-38-36 10-78-4-132-26z"
            fill={`url(#${body})`}
          />
          <path
            d="M34 72c10 42 46 66 90 60 23-4 38-18 42-38-36 8-78-4-132-22z"
            fill={`url(#${body})`}
          />
          <path
            d="M44 54c12 38 48 60 90 54 22-3 36-18 40-38-36 7-76-3-130-16z"
            fill={`url(#${body})`}
          />
        </g>
      )}

      {variant === "oval" && (
        <g>
          <ellipse
            cx="100"
            cy="110"
            rx="46"
            ry="56"
            fill={`url(#${body})`}
            transform="rotate(-14 100 110)"
          />
          <path d="M98 56c2-10 12-16 24-16-4 11-13 17-24 16z" fill={accent} />
          <ellipse
            cx="80"
            cy="94"
            rx="12"
            ry="22"
            fill="#fff"
            opacity="0.22"
            transform="rotate(-22 80 94)"
          />
        </g>
      )}

      {variant === "slice" && (
        <g>
          <path
            d="M24 112a76 76 0 0 0 152 0z"
            fill="#1F7A3F"
          />
          <path d="M33 112a67 67 0 0 0 134 0z" fill="#F6F3E6" />
          <path d="M42 112a58 58 0 0 0 116 0z" fill={`url(#${body})`} />
          {[
            [72, 134],
            [100, 150],
            [128, 134],
            [86, 124],
            [114, 124],
          ].map(([cx, cy], i) => (
            <ellipse key={i} cx={cx} cy={cy} rx="4" ry="6" fill="#2A1A0A" />
          ))}
        </g>
      )}

      {variant === "spiky" && (
        <g>
          <g fill={accent}>
            {[-38, -22, -8, 8, 22, 38].map((deg, i) => (
              <path
                key={i}
                d="M100 72c-5-20-2-38 0-48 4 10 7 28 0 48z"
                transform={`rotate(${deg} 100 76)`}
              />
            ))}
          </g>
          <ellipse cx="100" cy="124" rx="46" ry="52" fill={`url(#${body})`} />
          {[0, 1, 2, 3].map((row) =>
            [0, 1, 2, 3].map((col) => (
              <circle
                key={`${row}-${col}`}
                cx={70 + col * 20 + (row % 2) * 10}
                cy={96 + row * 20}
                r="4.5"
                fill="#fff"
                opacity="0.28"
              />
            )),
          )}
        </g>
      )}

      {variant === "berry" && (
        <g>
          <path
            d="M100 170c-32-10-52-34-52-60 0-20 22-34 52-34s52 14 52 34c0 26-20 50-52 60z"
            fill={`url(#${body})`}
          />
          <g fill={accent}>
            <path d="M100 72c-14 0-26-4-34-12 12-6 24-7 34-4 10-3 22-2 34 4-8 8-20 12-34 12z" />
            <path d="M96 56h8v18h-8z" />
          </g>
          {[
            [84, 100],
            [100, 112],
            [116, 100],
            [92, 130],
            [108, 130],
            [100, 150],
          ].map(([cx, cy], i) => (
            <circle key={i} cx={cx} cy={cy} r="3.4" fill="#FFF3C4" />
          ))}
        </g>
      )}
    </svg>
  );
}
