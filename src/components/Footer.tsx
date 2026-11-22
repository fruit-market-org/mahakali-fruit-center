import Link from "next/link";
import {
  COMPANY,
  CONTACT,
  NAV_LINKS,
  PRODUCT_CATEGORIES,
  SOCIAL,
} from "@/lib/constants";
import { Logo } from "./Logo";
import { WhatsAppButton } from "./WhatsAppButton";
import { MailIcon, PhoneIcon, PinIcon, ClockIcon } from "./Icons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-line bg-white">
      <div className="container-page grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr] lg:gap-16">
        <div className="max-w-sm">
          <Logo />
          <p className="mt-5 text-sm leading-relaxed text-moss">
            {COMPANY.intro}
          </p>
          <p className="mt-4 font-display text-lg text-ink">
            {COMPANY.nameLocal}
          </p>
          <WhatsAppButton className="mt-6" />
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink">
            Explore
          </h2>
          <ul className="mt-5 space-y-3 text-sm">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-moss transition-colors hover:text-leaf"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <h2 className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-ink">
            Our range
          </h2>
          <ul className="mt-5 space-y-3 text-sm">
            {PRODUCT_CATEGORIES.map((category) => (
              <li key={category.id}>
                <Link
                  href={`/products#${category.id}`}
                  className="text-moss transition-colors hover:text-leaf"
                >
                  {category.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink">
            Get in touch
          </h2>
          <ul className="mt-5 space-y-4 text-sm text-moss">
            <li className="flex items-start gap-3">
              <PhoneIcon className="mt-0.5 h-4 w-4 shrink-0 text-leaf" />
              <a
                href={`tel:${CONTACT.phoneHref}`}
                className="transition-colors hover:text-leaf"
              >
                {CONTACT.phoneDisplay}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MailIcon className="mt-0.5 h-4 w-4 shrink-0 text-leaf" />
              <a
                href={`mailto:${CONTACT.email}`}
                className="break-all transition-colors hover:text-leaf"
              >
                {CONTACT.email}
              </a>
            </li>
            {COMPANY.address && (
              <li className="flex items-start gap-3">
                <PinIcon className="mt-0.5 h-4 w-4 shrink-0 text-leaf" />
                <span>{COMPANY.address}</span>
              </li>
            )}
            {COMPANY.hours && (
              <li className="flex items-start gap-3">
                <ClockIcon className="mt-0.5 h-4 w-4 shrink-0 text-leaf" />
                <span>{COMPANY.hours}</span>
              </li>
            )}
          </ul>

          {(SOCIAL.instagram || SOCIAL.facebook) && (
            <div className="mt-6 flex gap-3">
              {SOCIAL.instagram && (
                <a
                  href={SOCIAL.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-moss transition-colors hover:text-leaf"
                >
                  Instagram
                </a>
              )}
              {SOCIAL.facebook && (
                <a
                  href={SOCIAL.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-moss transition-colors hover:text-leaf"
                >
                  Facebook
                </a>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="border-t border-line">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-6 text-xs text-moss sm:flex-row">
          <p>
            © {year} {COMPANY.name}. All rights reserved.
          </p>
          <p>
            Serving fresh fruit since {COMPANY.foundedYear} ·{" "}
            {COMPANY.yearsOfExperience} years and counting
          </p>
        </div>
      </div>
    </footer>
  );
}
