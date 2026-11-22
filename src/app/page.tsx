import Image from "next/image";
import Link from "next/link";
import { FruitArt } from "@/components/FruitArt";
import { ProductCard } from "@/components/ProductCard";
import { SectionHeading } from "@/components/Section";
import { SmartImage } from "@/components/SmartImage";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ArrowIcon, ICONS, QuoteIcon } from "@/components/Icons";
import {
  COMPANY,
  FEATURED_PRODUCTS,
  SERVICES,
  STATS,
  STORY_PARAGRAPHS,
  TESTIMONIALS,
  VALUE_PROPS,
} from "@/lib/constants";

export default function HomePage() {
  const [heroFruit, ...sideFruits] = FEATURED_PRODUCTS;

  return (
    <>
      {/* ---------------------------------------------------------------- */}
      {/* Hero                                                             */}
      {/* ---------------------------------------------------------------- */}
      <section className="relative overflow-hidden bg-gradient-to-b from-leaf-light/70 via-cream to-cream">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-leaf/10 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-banana/15 blur-3xl"
        />

        <div className="container-page relative grid items-center gap-12 py-16 lg:grid-cols-2 lg:gap-16 lg:py-24">
          <div className="animate-rise">
            <span className="inline-flex items-center gap-2 rounded-full border border-leaf/20 bg-white/70 px-4 py-1.5 text-xs font-medium text-leaf backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-leaf" />
              Trusted since {COMPANY.foundedYear} · {COMPANY.yearsOfExperience}{" "}
              years
            </span>

            <h1 className="mt-6 font-display text-4xl leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-6xl">
              Fresh fruits,
              <br />
              <span className="text-leaf">picked right.</span>
              <br />
              Every single day.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-moss">
              {COMPANY.intro} Bananas, grapes, mangoes and the best of every
              season — chosen by hand at the market before sunrise.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <WhatsAppButton label="WhatsApp us for today's rates" size="lg" />
              <Link
                href="/products"
                className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-7 py-3.5 text-base font-medium text-ink transition-all duration-200 hover:border-leaf/40 hover:text-leaf"
              >
                See our fruits
                <ArrowIcon />
              </Link>
            </div>

            <p className="mt-7 font-display text-xl text-moss">
              {COMPANY.nameLocal}
            </p>
          </div>

          {/* Image collage */}
          <div className="relative animate-rise lg:h-[520px]">
            <div className="grid grid-cols-2 gap-4 lg:gap-5">
              <div className="relative aspect-[3/4] overflow-hidden rounded-3xl border border-line bg-cream-deep shadow-lg shadow-ink/5 lg:mt-10">
                {heroFruit && (
                  <SmartImage
                    src={heroFruit.image}
                    alt={heroFruit.imageAlt}
                    priority
                    sizes="(max-width: 1024px) 45vw, 25vw"
                    className="object-cover"
                    fallback={
                      <FruitArt
                        variant={heroFruit.art.variant}
                        from={heroFruit.art.from}
                        to={heroFruit.art.to}
                        accent={heroFruit.art.accent}
                        label={heroFruit.name}
                        className="h-full w-full"
                      />
                    }
                  />
                )}
              </div>

              <div className="space-y-4 lg:space-y-5">
                <div className="relative aspect-square overflow-hidden rounded-3xl border border-line bg-cream-deep shadow-lg shadow-ink/5">
                  {sideFruits[0] && (
                    <SmartImage
                      src={sideFruits[0].image}
                      alt={sideFruits[0].imageAlt}
                      priority
                      sizes="(max-width: 1024px) 45vw, 25vw"
                      className="object-cover"
                      fallback={
                        <FruitArt
                          variant={sideFruits[0].art.variant}
                          from={sideFruits[0].art.from}
                          to={sideFruits[0].art.to}
                          accent={sideFruits[0].art.accent}
                          label={sideFruits[0].name}
                          className="h-full w-full"
                        />
                      }
                    />
                  )}
                </div>
                <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-line bg-cream-deep shadow-lg shadow-ink/5">
                  {sideFruits[1] && (
                    <SmartImage
                      src={sideFruits[1].image}
                      alt={sideFruits[1].imageAlt}
                      sizes="(max-width: 1024px) 45vw, 25vw"
                      className="object-cover"
                      fallback={
                        <FruitArt
                          variant={sideFruits[1].art.variant}
                          from={sideFruits[1].art.from}
                          to={sideFruits[1].art.to}
                          accent={sideFruits[1].art.accent}
                          label={sideFruits[1].name}
                          className="h-full w-full"
                        />
                      }
                    />
                  )}
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 left-1/2 w-[86%] -translate-x-1/2 rounded-2xl border border-line bg-white/95 p-4 text-center shadow-xl shadow-ink/5 backdrop-blur sm:w-auto sm:px-7 lg:-bottom-2 lg:left-0 lg:translate-x-0 lg:text-left">
              <p className="font-display text-2xl text-leaf">
                {COMPANY.customersServedRange}
              </p>
              <p className="text-xs uppercase tracking-[0.15em] text-moss">
                Customers served
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Stats                                                            */}
      {/* ---------------------------------------------------------------- */}
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

      {/* ---------------------------------------------------------------- */}
      {/* Featured fruits                                                  */}
      {/* ---------------------------------------------------------------- */}
      <section className="container-page py-20 lg:py-24">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="What's on the counter"
            title="The fruit our customers come back for"
            description="A glimpse of what we stock. The full range changes with the season — message us and we will tell you what came in this morning."
          />
          <Link
            href="/products"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-medium text-leaf transition-colors hover:text-leaf-dark"
          >
            View all fruits
            <ArrowIcon />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURED_PRODUCTS.map((product, index) => (
            <ProductCard
              key={product.slug}
              product={product}
              priority={index < 3}
            />
          ))}
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Why choose us                                                    */}
      {/* ---------------------------------------------------------------- */}
      <section className="border-y border-line bg-white py-20 lg:py-24">
        <div className="container-page">
          <SectionHeading
            align="center"
            eyebrow="Why choose us"
            title={`${COMPANY.yearsOfExperience} years of getting the simple things right`}
            description="No gimmicks — just good fruit, fair prices and the same people behind the counter who have been here for decades."
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

      {/* ---------------------------------------------------------------- */}
      {/* Story                                                            */}
      {/* ---------------------------------------------------------------- */}
      <section className="container-page py-20 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-line shadow-xl shadow-ink/5">
            <Image
              src="/images/shopfront.webp"
              alt="The shopfront of Shree Mahakali Fruit Center"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div>
            <SectionHeading
              eyebrow="Our story"
              title={`The same counter since ${COMPANY.foundedYear}`}
            />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-moss">
              {STORY_PARAGRAPHS.slice(0, 2).map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <Link
              href="/about"
              className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-leaf transition-colors hover:text-leaf-dark"
            >
              Read our full story
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Services                                                         */}
      {/* ---------------------------------------------------------------- */}
      <section className="border-y border-line bg-white py-20 lg:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="What we do"
            title="From a single kilo to a full carton"
            description="However much you need, and whatever the occasion, we will have it ready."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {SERVICES.map((service, index) => (
              <div
                key={service.title}
                className="rounded-2xl border border-line bg-cream p-7 transition-colors hover:border-leaf/30"
              >
                <span className="font-display text-sm text-leaf">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-xl text-ink">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-moss">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Testimonials                                                     */}
      {/* ---------------------------------------------------------------- */}
      <section className="container-page py-20 lg:py-24">
        <SectionHeading
          align="center"
          eyebrow="In their words"
          title="Customers who have stayed for decades"
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <figure
              key={testimonial.quote}
              className="flex flex-col rounded-2xl border border-line bg-white p-7"
            >
              <QuoteIcon className="h-7 w-7 text-banana" />
              <blockquote className="mt-4 flex-1 font-display text-lg leading-relaxed text-ink">
                “{testimonial.quote}”
              </blockquote>
              <figcaption className="mt-5 border-t border-line pt-4 text-sm">
                <span className="font-medium text-ink">
                  {testimonial.author}
                </span>
                <span className="block text-xs text-moss">
                  {testimonial.role}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* CTA                                                              */}
      {/* ---------------------------------------------------------------- */}
      <section className="container-page pb-4">
        <div className="relative overflow-hidden rounded-3xl bg-leaf px-7 py-14 text-center sm:px-12 lg:py-20">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-banana/20"
          />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="font-display text-3xl leading-tight text-white sm:text-4xl">
              Want to know what&apos;s fresh today?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/85">
              Send us a message on WhatsApp for today&apos;s arrivals, rates and
              bulk orders. We usually reply within the hour.
            </p>
            <WhatsAppButton
              label="Message us on WhatsApp"
              variant="light"
              size="lg"
              className="mt-8"
            />
          </div>
        </div>
      </section>
    </>
  );
}
