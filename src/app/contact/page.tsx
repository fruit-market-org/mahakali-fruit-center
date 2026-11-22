import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/Section";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import {
  ClockIcon,
  MailIcon,
  PhoneIcon,
  PinIcon,
  WhatsAppIcon,
} from "@/components/Icons";
import { COMPANY, CONTACT, SERVICES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Get in touch with ${COMPANY.name}. WhatsApp us on ${CONTACT.phoneDisplay} for today's rates, availability and bulk orders.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="One message is all it takes"
        description="No forms to fill in. Tap the button below and you are straight through to us on WhatsApp — we usually reply within the hour."
      />

      <section className="container-page py-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
          {/* Primary CTA card */}
          <div className="relative overflow-hidden rounded-3xl bg-leaf px-7 pb-14 pt-12 sm:px-10 lg:pb-16 lg:pt-14">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-14 -top-14 h-56 w-56 rounded-full bg-white/10"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-16 -left-10 h-48 w-48 rounded-full bg-banana/20"
            />
            <div className="relative">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-white">
                <WhatsAppIcon className="h-8 w-8" />
              </span>
              <h2 className="mt-6 font-display text-3xl leading-tight text-white sm:text-4xl">
                Chat with us on WhatsApp
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-white/85">
                Ask for today&apos;s arrivals and rates, place a bulk order, or
                arrange a fruit hamper for a festival or wedding.
              </p>
              <WhatsAppButton
                label={`Message ${CONTACT.phoneDisplay}`}
                variant="light"
                size="lg"
                className="mt-8"
              />
              <p className="mt-5 text-sm text-white/70">
                Prefer to call? Dial{" "}
                <a
                  href={`tel:${CONTACT.phoneHref}`}
                  className="font-medium text-white underline underline-offset-4"
                >
                  {CONTACT.phoneDisplay}
                </a>
                .
              </p>
            </div>
          </div>

          {/* Details */}
          <div>
            <h2 className="font-display text-2xl text-ink">Our details</h2>
            <ul className="mt-6 space-y-5">
              <li className="flex gap-4 rounded-2xl border border-line bg-white p-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-leaf-light text-leaf">
                  <WhatsAppIcon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-moss">
                    WhatsApp
                  </p>
                  <p className="mt-1 font-medium text-ink">
                    {CONTACT.phoneDisplay}
                  </p>
                </div>
              </li>

              <li className="flex gap-4 rounded-2xl border border-line bg-white p-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-leaf-light text-leaf">
                  <PhoneIcon />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-moss">
                    Phone
                  </p>
                  <a
                    href={`tel:${CONTACT.phoneHref}`}
                    className="mt-1 block font-medium text-ink transition-colors hover:text-leaf"
                  >
                    {CONTACT.phoneDisplay}
                  </a>
                </div>
              </li>

              <li className="flex gap-4 rounded-2xl border border-line bg-white p-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-leaf-light text-leaf">
                  <MailIcon />
                </span>
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-[0.15em] text-moss">
                    Email
                  </p>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="mt-1 block break-all font-medium text-ink transition-colors hover:text-leaf"
                  >
                    {CONTACT.email}
                  </a>
                </div>
              </li>

              {COMPANY.address && (
                <li className="flex gap-4 rounded-2xl border border-line bg-white p-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-leaf-light text-leaf">
                    <PinIcon />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.15em] text-moss">
                      Visit the shop
                    </p>
                    <p className="mt-1 font-medium text-ink">
                      {COMPANY.address}
                    </p>
                  </div>
                </li>
              )}

              {COMPANY.hours && (
                <li className="flex gap-4 rounded-2xl border border-line bg-white p-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-leaf-light text-leaf">
                    <ClockIcon />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.15em] text-moss">
                      Opening hours
                    </p>
                    <p className="mt-1 font-medium text-ink">{COMPANY.hours}</p>
                  </div>
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* What you can ask about */}
        <div className="mt-20">
          <h2 className="font-display text-2xl text-ink">
            What you can message us about
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((service) => (
              <div
                key={service.title}
                className="rounded-2xl border border-line bg-white p-6"
              >
                <h3 className="font-display text-lg text-ink">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-moss">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Shop photo */}
        <div className="mt-20 grid items-center gap-10 rounded-3xl border border-line bg-white p-6 sm:p-8 lg:grid-cols-2 lg:gap-14 lg:p-10">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="/images/shopfront.webp"
              alt="The shopfront of Shree Mahakali Fruit Center"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="font-display text-2xl text-ink sm:text-3xl">
              {COMPANY.name}
            </h2>
            <p className="mt-2 font-display text-lg text-moss">
              {COMPANY.nameLocal}
            </p>
            <p className="mt-5 text-base leading-relaxed text-moss">
              Serving fresh fruit since {COMPANY.foundedOn}. Walk in any day for
              the morning&apos;s arrivals, or message us ahead and we will keep
              your order ready.
            </p>
            <WhatsAppButton size="lg" className="mt-7" />
          </div>
        </div>
      </section>
    </>
  );
}
