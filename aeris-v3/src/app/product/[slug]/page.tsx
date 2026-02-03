import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductBySlug, products } from "@/lib/products";
import { formatPriceEUR } from "@/lib/products";
import { AddToCart } from "@/components/client/AddToCart";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return notFound();

  return (
    <main className="section">
      <div className="container">
        <div className="crumbs">
          <Link className="textLink" href="/shop">
            ← Back to shop
          </Link>
        </div>

        <div className="product">
          <div className="product__gallery">
            <div className="product__image">
              <Image
                src={product.images[0] ?? "/product-placeholder.png"}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
            <div className="product__thumbs" aria-hidden>
              {product.images.slice(1).map((src) => (
                <div key={src} className="thumb">
                  <Image src={src} alt="" fill style={{ objectFit: "cover" }} />
                </div>
              ))}
            </div>
          </div>

          <div className="product__info">
            <p className="muted">{product.subtitle}</p>
            <h1 className="product__title">{product.name}</h1>
            <p className="product__price">{formatPriceEUR(product.priceCents)}</p>

            <div className="stack">
              <div>
                <p className="label">Colors</p>
                <div className="swatches">
                  {product.colors.map((c) => (
                    <span
                      key={c.name}
                      className="swatch"
                      title={c.name}
                      style={{ background: c.hex }}
                    />
                  ))}
                </div>
              </div>

              <AddToCart product={product} />

              <div className="panel">
                <p className="label">Details</p>
                <p className="muted">{product.description}</p>
                <ul className="bullets">
                  <li>Free returns (demo text)</li>
                  <li>Shipping in 2–4 business days (demo text)</li>
                  <li>Secure checkout (demo text)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
