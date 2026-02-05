import Link from "next/link";
import Image from "next/image";
import { getLocale } from "@/components/useLocale";
import { t } from "@/lib/i18n";

type DiscoverItem = {
  id: string;
  name: string;
  author: string;
  votes: string;
  likes: string;
  progress: string;
  tone: string;
  image: string;
  badge?: string;
  status: "voting" | "production" | "completed";
};

const discoverItems: DiscoverItem[] = [
  {
    id: "1",
    name: "AirVolt Retro",
    votes: "7.3k",
    likes: "1.2k",
    progress: "10%",
    author: "Joana Mendes",
    tone: "Gradiente alperce",
    image: "/products/1/1.png",
    status: "voting",
  },
  {
    id: "2",
    name: "Vaporium X1",
    votes: "9.4k",
    likes: "1.5k",
    progress: "100%",
    author: "Ricardo Costa",
    tone: "Carvão com neon",
    badge: "Em produção",
    image: "/products/1/2.png",
    status: "production",
  },
  {
    id: "3",
    name: "AeroRun 307",
    votes: "6.3k",
    likes: "890",
    progress: "50%",
    author: "Inês Batista",
    tone: "Nude esportivo",
    image: "/products/1/4.png",
    status: "voting",
  },
  {
    id: "4",
    name: "CloudStep Pro",
    votes: "5.8k",
    likes: "1.1k",
    progress: "65%",
    author: "Miguel Santos",
    tone: "Cinza minimalista",
    image: "/products/1/5.png",
    status: "voting",
  },
  {
    id: "5",
    name: "UrbanGlide",
    votes: "8.1k",
    likes: "1.4k",
    progress: "82%",
    author: "Ana Silva",
    tone: "Preto urbano",
    image: "/products/1/6.png",
    status: "voting",
  },
  {
    id: "6",
    name: "FlexWave",
    votes: "6.7k",
    likes: "980",
    progress: "71%",
    author: "Pedro Alves",
    tone: "Azul dinâmico",
    image: "/products/1/7.png",
    status: "voting",
  },
  {
    id: "7",
    name: "Neopulse Elite",
    votes: "7.9k",
    likes: "1.3k",
    progress: "78%",
    author: "Sofia Pereira",
    tone: "Branco premium",
    image: "/products/1/8.png",
    status: "voting",
  },
  {
    id: "8",
    name: "Velocity Max",
    votes: "9.2k",
    likes: "1.7k",
    progress: "88%",
    author: "Tiago Ferreira",
    tone: "Vermelho racing",
    badge: "Quase lá!",
    image: "/products/1/9.png",
    status: "voting",
  },
  {
    id: "9",
    name: "EcoStride",
    votes: "5.4k",
    likes: "820",
    progress: "62%",
    author: "Mariana Costa",
    tone: "Verde natural",
    image: "/products/1/10.png",
    status: "voting",
  },
  {
    id: "10",
    name: "TechRunner",
    votes: "7.5k",
    likes: "1.2k",
    progress: "75%",
    author: "João Oliveira",
    tone: "Grafite tech",
    image: "/products/1/11.png",
    status: "voting",
  },
  {
    id: "11",
    name: "LunarFlex",
    votes: "8.6k",
    likes: "1.5k",
    progress: "84%",
    author: "Beatriz Lopes",
    tone: "Prata lunar",
    image: "/products/1/12.png",
    status: "voting",
  },
  {
    id: "12",
    name: "PulseRun",
    votes: "6.2k",
    likes: "950",
    progress: "69%",
    author: "Rui Cardoso",
    tone: "Laranja energético",
    image: "/products/1/13.png",
    status: "voting",
  },
];

type Props = {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

function asString(v: string | string[] | undefined) {
  if (Array.isArray(v)) return v[0];
  return v;
}

export default async function DiscoverPage({ searchParams }: Props) {
  const locale = await getLocale();
  const sp = (await searchParams) ?? {};
  const filter = asString(sp.filter) || "all";
  const q = asString(sp.q)?.trim().toLowerCase();

  const filtered = discoverItems.filter((item) => {
    if (filter === "voting" && item.status !== "voting") return false;
    if (filter === "production" && item.status !== "production") return false;
    if (filter === "completed" && item.status !== "completed") return false;
    if (q) {
      const hay = `${item.name} ${item.author} ${item.tone}`.toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  });

  return (
    <main className="section">
      <div className="container">
        <div className="section__head">
          <div>
            <h1>{t(locale, "discover_title")}</h1>
            <p className="muted">
              {filtered.length} {t(locale, "discover_designs")}
              {filter !== "all" ? ` · ${t(locale, `discover_filter_${filter}`)}` : ""}
            </p>
          </div>
          <Link className="textLink" href="/">
            ← {t(locale, "shop_home")}
          </Link>
        </div>

        <div className="filters">
          <div className="filterRow">
            <span className="muted">{t(locale, "discover_quick_filters")}</span>
            <div className="tagRow">
              <Link
                className={`chip ${filter === "all" ? "chip--active" : ""}`}
                href="/discover?filter=all"
              >
                {t(locale, "discover_filter_all")}
              </Link>
              <Link
                className={`chip ${filter === "voting" ? "chip--active" : ""}`}
                href="/discover?filter=voting"
              >
                {t(locale, "discover_filter_voting")}
              </Link>
              <Link
                className={`chip ${filter === "production" ? "chip--active" : ""}`}
                href="/discover?filter=production"
              >
                {t(locale, "discover_filter_production")}
              </Link>
              <Link
                className={`chip ${filter === "completed" ? "chip--active" : ""}`}
                href="/discover?filter=completed"
              >
                {t(locale, "discover_filter_completed")}
              </Link>
            </div>
          </div>

          <form className="search" action="/discover" method="get">
            {filter && filter !== "all" ? <input type="hidden" name="filter" value={filter} /> : null}
            <input
              name="q"
              defaultValue={q ?? ""}
              placeholder={t(locale, "discover_search_placeholder")}
              aria-label={t(locale, "discover_search")}
            />
            <button className="btn btn--ghost" type="submit">
              {t(locale, "discover_search")}
            </button>
          </form>
        </div>

        <div className="discoverGrid">
          {filtered.map((item) => (
            <article key={item.id} className="discoverCard">
              <div className="discoverCard__media">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  style={{ objectFit: "contain" }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {item.badge && (
                  <span className="discoverCard__badge">{item.badge}</span>
                )}
              </div>

              <div className="discoverCard__content">
                <h3 className="discoverCard__title">{item.name}</h3>
                <p className="discoverCard__author">{t(locale, "discover_by")} {item.author}</p>
                <p className="discoverCard__tone">{item.tone}</p>

                <div className="discoverCard__stats">
                  <div className="discoverCard__stat">
                    <span className="discoverCard__statIcon">👍</span>
                    <span>{item.votes}</span>
                  </div>
                  <div className="discoverCard__stat">
                    <span className="discoverCard__statIcon">❤️</span>
                    <span>{item.likes}</span>
                  </div>
                </div>

                <div className="discoverCard__progress">
                  <div className="discoverCard__progressBar">
                    <div
                      className="discoverCard__progressFill"
                      style={{ width: item.progress }}
                    />
                  </div>
                  <span className="discoverCard__progressText">{item.progress}</span>
                </div>

                <div className="discoverCard__actions">
                  <button className="btn btn--primary btn--sm">
                    {t(locale, "discover_vote")}
                  </button>
                  <button className="btn btn--ghost btn--sm">
                    {t(locale, "discover_details")}
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="emptyState">
            <p className="emptyState__icon">🔍</p>
            <h3>{t(locale, "discover_empty_title")}</h3>
            <p className="muted">{t(locale, "discover_empty_message")}</p>
            <Link className="btn btn--primary" href="/discover">
              {t(locale, "discover_empty_reset")}
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}

