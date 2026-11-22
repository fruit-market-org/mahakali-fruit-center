import type { Product } from "@/lib/constants";
import { FruitArt } from "./FruitArt";
import { SmartImage } from "./SmartImage";

export function ProductCard({
  product,
  priority = false,
}: {
  product: Product;
  priority?: boolean;
}) {
  return (
    <article
      id={product.slug}
      className="group flex scroll-mt-24 flex-col overflow-hidden rounded-2xl border border-line bg-white transition-all duration-300 hover:-translate-y-1 hover:border-leaf/30 hover:shadow-xl hover:shadow-ink/5"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-cream-deep">
        <SmartImage
          src={product.image}
          alt={product.imageAlt}
          priority={priority}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          fallback={
            <FruitArt
              variant={product.art.variant}
              from={product.art.from}
              to={product.art.to}
              accent={product.art.accent}
              label={product.name}
              className="h-full w-full transition-transform duration-500 group-hover:scale-105"
            />
          }
        />
        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-medium text-leaf backdrop-blur-sm">
          {product.season}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-display text-xl text-ink">{product.name}</h3>
          {product.localName && (
            <span className="text-sm text-moss">{product.localName}</span>
          )}
        </div>
        <p className="mt-2 text-sm leading-relaxed text-moss">
          {product.description}
        </p>
      </div>
    </article>
  );
}
