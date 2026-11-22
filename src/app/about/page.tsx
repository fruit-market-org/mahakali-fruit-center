import type { Metadata } from "next";
import Image from "next/image";
import { PageHero, SectionHeading } from "@/components/Section";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ICONS } from "@/components/Icons";
import {
  COMPANY,
  MILESTONES,
  SERVICES,
  STATS,
  STORY_PARAGRAPHS,
  VALUE_PROPS,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us",
  description: `${COMPANY.name} has been trading fresh fruit since ${COMPANY.foundedOn}. ${COMPANY.yearsOfExperience} years of hand-picked quality, honest pricing and daily fresh stock.`,
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title={`A fruit shop built on ${COMPANY.yearsOfExperience} years of trust`}
        description={`${COMPANY.name} opened on ${COMPANY.foundedOn}. Three decades later, the fruit is still chosen by hand and the standard has not moved.`}
      />

      {/* Story + photo */}
      <section className="container-page py-20 lg:py-24">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-line shadow-xl shadow-ink/5 lg:sticky lg:top-28">
            <Image
              src="/images/shopfront.webp"
              alt="The shopfront of Shree Mahakali Fruit Center"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>

          <div>
            <SectionHeading eyebrow="Our story" title="How it started" />
            <div className="mt-6 space-y-5 text-base leading-relaxed text-moss">
              {STORY_PARAGRAPHS.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <dl className="mt-10 grid grid-cols-2 gap-6 rounded-2xl border border-line bg-white p-7">
              <div>
                <dt className="text-xs uppercase tracking-[0.15em] text-moss">
                  Established
                </dt>
                <dd className="mt-1 font-display text-xl text-ink">
                  {COMPANY.foundedOn}
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.15em] text-moss">
                  Experience
                </dt>
                <dd className="mt-1 font-display text-xl text-ink">
                  {COMPANY.yearsOfExperience} years
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.15em] text-moss">
                  Customers served
                </dt>
                <dd className="mt-1 font-display text-xl text-ink">
                  {COMPANY.customersServedRange}
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.15em] text-moss">
                  Product range
                </dt>
                <dd className="mt-1 font-display text-xl text-ink">
                  {COMPANY.productRangeSummary}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-line bg-white">
        <div className="container-page grid grid-cols-2 gap-x-6 gap-y-10 py-12 lg:grid-cols-4 lg:py-14">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center lg:text-left">
              <p className="font-display text-3xl text-leaf sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm font-medium text-ink">{stat.label}</p>
              <p className="mt-1 text-xs leading-relaxed text-moss">
                {stat.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="container-page py-20 lg:py-24">
        <SectionHeading
          eyebrow="Our journey"
          title="Three decades, one counter"
          description="The milestones that shaped the shop you walk into today."
        />

        <ol className="mt-14 space-y-10 border-l border-line pl-8 sm:pl-10">
          {MILESTONES.map((milestone) => (
            <li key={milestone.year} className="relative">
              <span className="absolute -left-[41px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-leaf bg-cream sm:-left-[49px]">
                <span className="h-1.5 w-1.5 rounded-full bg-leaf" />
              </span>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-leaf">
                {milestone.year}
              </p>
              <h3 className="mt-2 font-display text-xl text-ink">
                {milestone.title}
              </h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-moss">
                {milestone.description}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* Values */}
      <section className="border-y border-line bg-white py-20 lg:py-24">
        <div className="container-page">
          <SectionHeading
            align="center"
            eyebrow="How we work"
            title="The promises behind every crate"
          />
          <div className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {VALUE_PROPS.map((item) => {
              const Icon = ICONS[item.icon];
              return (
                <div key={item.title} className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-leaf-light text-leaf">
                    <Icon />
                  </span>
                  <div>
                    <h3 className="font-display text-lg text-ink">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-moss">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="container-page py-20 lg:py-24">
        <SectionHeading
          eyebrow="What we offer"
          title="Ways we can help"
          description="Retail, wholesale or something for a special occasion."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-line bg-white p-7"
            >
              <h3 className="font-display text-xl text-ink">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-moss">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-3xl border border-leaf/20 bg-leaf-light px-7 py-12 text-center sm:px-12">
          <h2 className="font-display text-2xl text-ink sm:text-3xl">
            Come and see for yourself
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-moss">
            Drop us a message and we will tell you what arrived at the shop this
            morning.
          </p>
          <WhatsAppButton size="lg" className="mt-7" />
        </div>
      </section>
    </>
  );
}
