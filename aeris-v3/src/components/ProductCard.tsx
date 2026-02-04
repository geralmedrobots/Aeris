import Link from "next/link";
import type { Product } from "@/lib/products";
import { formatPriceEUR } from "@/lib/products";
import { DynamicProductImage } from "./client/DynamicProductImage";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link className="card" href={`/product/${product.slug}`}>
      <h3 className="card__title">{product.name}</h3>
      <div className="card__media">
        <DynamicProductImage
          src={product.images[0] ?? "/product-placeholder.png"}
          alt={product.name}
          sizes="(max-width: 768px) 50vw, 25vw"
        />
      </div>
      <div className="card__body">
        <div className="card__top">
          <span className="card__price">{formatPriceEUR(product.priceCents)}</span>
        </div>
        <p className="card__subtitle muted">{product.subtitle}</p>
        <div className="tagRow" aria-label="tags">
          {product.tags.slice(0, 2).map((t) => (
            <span key={t} className="tag">
              {t}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
