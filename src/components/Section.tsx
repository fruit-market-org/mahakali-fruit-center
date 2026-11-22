import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={`${
        align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"
      } ${className}`}
    >
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-leaf">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-3 font-display text-3xl leading-tight tracking-tight text-ink sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-moss">{description}</p>
      )}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-gradient-to-b from-leaf-light/60 to-cream">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-banana/10 blur-3xl"
      />
      <div className="container-page relative py-16 sm:py-20 lg:py-24">
        <div className="max-w-3xl animate-rise">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-leaf">
            {eyebrow}
          </p>
          <h1 className="mt-4 font-display text-4xl leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-moss">
            {description}
          </p>
          {children && <div className="mt-8">{children}</div>}
        </div>
      </div>
    </section>
  );
}
