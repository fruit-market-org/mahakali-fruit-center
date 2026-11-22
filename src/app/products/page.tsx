import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, SectionHeading } from "@/components/Section";
import { ProductCard } from "@/components/ProductCard";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import {
  COMPANY,
  PRODUCTS,
  PRODUCT_CATEGORIES,
  type ProductCategoryId,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: "Our Fruits",
  description: `Bananas, grapes, mangoes, pomegranates, melons and exotic fruit — the full range stocked at ${COMPANY.name}. Fresh arrivals daily, retail and wholesale.`,
};

export default function ProductsPage() {
  const grouped = PRODUCT_CATEGORIES.map((category) => ({
    category,
    items: PRODUCTS.filter(
      (product) => product.category === (category.id as ProductCategoryId),
    ),
  })).filter((group) => group.items.length > 0);

  return (
    <>
      <PageHero
        eyebrow="Our products"
        title="Everything on our counter"
        description={`${PRODUCTS.length} varieties across the year — the everyday staples our customers buy by the kilo, and the seasonal fruit worth waiting for.`}
      >
        <div className="flex flex-wrap gap-2">
          {PRODUCT_CATEGORIES.map((category) => (
            <Link
              key={category.id}
              href={`#${category.id}`}
              className="rounded-full border border-line bg-white px-4 py-2 text-sm font-medium text-moss transition-colors hover:border-leaf/40 hover:text-leaf"
            >
              {category.label}
            </Link>
          ))}
        </div>
      </PageHero>

      {grouped.map((group, index) => (
        <section
          key={group.category.id}
          id={group.category.id}
          className={`scroll-mt-24 py-16 lg:py-20 ${
            index % 2 === 1 ? "border-y border-line bg-white" : ""
          }`}
        >
          <div className="container-page">
            <SectionHeading
              eyebrow={`${group.items.length} ${
                group.items.length === 1 ? "variety" : "varieties"
              }`}
              title={group.category.label}
              description={group.category.description}
            />
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {group.items.map((product, i) => (
                <ProductCard
                  key={product.slug}
                  product={product}
                  priority={index === 0 && i < 3}
                />
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="container-page py-16 lg:py-20">
        <div className="rounded-3xl border border-leaf/20 bg-leaf-light px-7 py-12 text-center sm:px-12">
          <h2 className="font-display text-2xl text-ink sm:text-3xl">
            Looking for something not listed here?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-moss">
            Our stock changes with the season and we source on request for bulk
            orders. Tell us what you need and by when.
          </p>
          <WhatsAppButton
            label="Ask about availability"
            size="lg"
            className="mt-7"
          />
        </div>
      </section>
    </>
  );
}
