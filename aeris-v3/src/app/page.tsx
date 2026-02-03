import Link from "next/link";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";

export default function Home() {
  const featured = products.slice(0, 4);

  return (
    <main>
      <section className="hero">
        <div className="container hero__inner">
          <div className="hero__copy">
            <p className="eyebrow">NEW SEASON</p>
            <h1 className="hero__title">Move fast. Stay light.</h1>
            <p className="hero__lead">
              Sportswear essentials built for training days and weekend city runs.
              Original demo storefront.
            </p>
            <div className="row gap">
              <Link className="btn" href="/shop">
                Shop now
              </Link>
              <Link className="btn btn--ghost" href="/shop?tag=new">
                New arrivals
              </Link>
            </div>
          </div>

          <div className="hero__panel" aria-hidden>
            <div className="heroCard">
              <div className="heroCard__stripe" />
              <div className="heroCard__content">
                <p className="muted">Drop of the week</p>
                <p className="heroCard__name">STRIDE Trailrunner</p>
                <p className="muted">Grip + cushion for any surface</p>
                <Link className="textLink" href="/product/stride-trailrunner">
                  View product →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section__head">
            <h2>Featured</h2>
            <Link className="textLink" href="/shop">
              See all →
            </Link>
          </div>
          <div className="grid">
            {featured.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="split">
            <div>
              <h2>Training-ready layers</h2>
              <p className="muted">
                Soft fleece. Sweat-wicking liners. Built to stack and move.
              </p>
              <div className="row gap">
                <Link className="btn btn--ghost" href="/shop?tag=apparel">
                  Shop apparel
                </Link>
                <Link className="btn btn--ghost" href="/shop?tag=training">
                  Shop training
                </Link>
              </div>
            </div>
            <div className="featureTiles" aria-hidden>
              <div className="tile" />
              <div className="tile tile--accent" />
              <div className="tile" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
