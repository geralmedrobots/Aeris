import Link from "next/link";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";

type Props = {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

function asString(v: string | string[] | undefined) {
  if (Array.isArray(v)) return v[0];
  return v;
}

export default async function ShopPage({ searchParams }: Props) {
  const sp = (await searchParams) ?? {};
  const tag = asString(sp.tag);
  const q = asString(sp.q)?.trim().toLowerCase();

  const filtered = products.filter((p) => {
    if (tag && !p.tags.includes(tag)) return false;
    if (q) {
      const hay = `${p.name} ${p.subtitle} ${p.tags.join(" ")}`.toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  });

  return (
    <main className="section">
      <div className="container">
        <div className="section__head">
          <div>
            <h1>Shop</h1>
            <p className="muted">
              {filtered.length} item{filtered.length === 1 ? "" : "s"}
              {tag ? ` · Tag: ${tag}` : ""}
            </p>
          </div>
          <Link className="textLink" href="/">
            ← Home
          </Link>
        </div>

        <div className="filters">
          <div className="filterRow">
            <span className="muted">Quick tags:</span>
            <div className="tagRow">
              {[
                ["new", "New"],
                ["bestseller", "Bestsellers"],
                ["running", "Running"],
                ["training", "Training"],
                ["lifestyle", "Lifestyle"],
                ["apparel", "Apparel"],
              ].map(([value, label]) => (
                <Link
                  key={value}
                  className={`chip ${tag === value ? "chip--active" : ""}`}
                  href={`/shop?tag=${value}`}
                >
                  {label}
                </Link>
              ))}
              <Link className={`chip ${!tag ? "chip--active" : ""}`} href="/shop">
                All
              </Link>
            </div>
          </div>

          <form className="search" action="/shop" method="get">
            {tag ? <input type="hidden" name="tag" value={tag} /> : null}
            <input
              name="q"
              defaultValue={q ?? ""}
              placeholder="Search products…"
              aria-label="Search"
            />
            <button className="btn btn--ghost" type="submit">
              Search
            </button>
          </form>
        </div>

        <div className="grid">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </main>
  );
}
