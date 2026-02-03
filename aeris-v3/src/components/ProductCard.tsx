import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/products";
import { formatPriceEUR } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link className="card" href={`/product/${product.slug}`}>
      <div className="card__media">
        <Image
          src={product.images[0] ?? "/product-placeholder.png"}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="card__body">
        <div className="card__top">
          <h3 className="card__title">{product.name}</h3>
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
