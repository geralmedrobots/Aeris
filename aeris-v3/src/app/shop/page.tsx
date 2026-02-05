import Link from "next/link";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";
import { getLocale } from "@/components/useLocale";
import { t } from "@/lib/i18n";

type Props = {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

function asString(v: string | string[] | undefined) {
  if (Array.isArray(v)) return v[0];
  return v;
}

export default async function ShopPage({ searchParams }: Props) {
  const locale = await getLocale();
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
            <h1>{t(locale, "shop_title")}</h1>
            <p className="muted">
              {filtered.length} {t(locale, "shop_items")}
              {tag ? ` · ${t(locale, "shop_tag")}: ${tag}` : ""}
            </p>
          </div>
          <Link className="textLink" href="/">
            ← {t(locale, "shop_home")}
          </Link>
        </div>

        <div className="filters">
          <div className="filterRow">
            <span className="muted">{t(locale, "shop_quick_tags")}</span>
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
                {t(locale, "shop_all")}
              </Link>
            </div>
          </div>

          <form className="search" action="/shop" method="get">
            {tag ? <input type="hidden" name="tag" value={tag} /> : null}
            <input
              name="q"
              defaultValue={q ?? ""}
              placeholder={t(locale, "shop_search_placeholder")}
              aria-label={t(locale, "shop_search")}
            />
            <button className="btn btn--ghost" type="submit">
              {t(locale, "shop_search")}
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
