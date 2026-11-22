import type { Metadata } from "next";
import { FruitArt } from "@/components/FruitArt";
import { PageHero } from "@/components/Section";
import { SmartImage } from "@/components/SmartImage";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { COMPANY, GALLERY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Gallery",
  description: `A look inside ${COMPANY.name} — our shop, our counter and the fresh fruit that passes through it every day.`,
};

/** Soft colour pairs cycled through for the illustrated fallbacks. */
const FALLBACK_ART = [
  { variant: "cluster", from: "#D8B4FE", to: "#6B21A8" },
  { variant: "crescent", from: "#FDE68A", to: "#F59E0B" },
  { variant: "round", from: "#FCA5A5", to: "#B91C1C" },
  { variant: "citrus", from: "#FDBA74", to: "#EA580C" },
  { variant: "slice", from: "#FB7185", to: "#BE123C" },
  { variant: "oval", from: "#FCD34D", to: "#EA580C" },
] as const;

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="A look at the shop"
        description="The counter, the crates and the colour of a good morning's stock."
      />

      <section className="container-page py-16 lg:py-20">
        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>figure]:mb-5">
          {GALLERY.map((item, index) => {
            const art = FALLBACK_ART[index % FALLBACK_ART.length];
            return (
              <figure
                key={item.src}
                className="group break-inside-avoid overflow-hidden rounded-2xl border border-line bg-white"
              >
                <div
                  className={`relative overflow-hidden bg-cream-deep ${
                    item.tall ? "aspect-[3/4]" : "aspect-[4/3]"
                  }`}
                >
                  <SmartImage
                    src={item.src}
                    alt={item.alt}
                    priority={index < 2}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    fallback={
                      <FruitArt
                        variant={art.variant}
                        from={art.from}
                        to={art.to}
                        label={item.alt}
                        className="h-full w-full"
                      />
                    }
                  />
                </div>
                <figcaption className="px-5 py-4 text-sm text-moss">
                  {item.caption}
                </figcaption>
              </figure>
            );
          })}
        </div>

        <div className="mt-14 rounded-3xl border border-leaf/20 bg-leaf-light px-7 py-12 text-center sm:px-12">
          <h2 className="font-display text-2xl text-ink sm:text-3xl">
            Visit us in store
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-moss">
            Photographs only go so far — come and pick your own, or message us
            and we will set it aside.
          </p>
          <WhatsAppButton size="lg" className="mt-7" />
        </div>
      </section>
    </>
  );
}
