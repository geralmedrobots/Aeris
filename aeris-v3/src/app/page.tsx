import Image from "next/image";
import Link from "next/link";

const featuredShoes = [
  {
    name: "AirVolt Retro",
    votes: "7.3k",
    likes: "1.2k",
    progress: "68%",
    author: "Joana Mendes",
    tone: "Gradiente alperce",
    image: "/products/1/1 (4).png",
  },
  {
    name: "Vaporium X1",
    votes: "9.4k",
    likes: "1.5k",
    progress: "1000%",
    author: "Ricardo Costa",
    tone: "Carvão com neon",
    badge: "Em produção",
    image: "/products/1/1 (2).png",
  },
  {
    name: "AeroRun 307",
    votes: "6.3k",
    likes: "890",
    progress: "73%",
    author: "Inês Batista",
    tone: "Nude esportivo",
    image: "/products/1/1 (3).png",
  },
];

export default function Home() {
  return (
    <main className="home">
      <section className="heroAeris">
        <div className="container heroAeris__inner">
          <div className="heroAeris__copy">
            <p className="eyebrow">Aeris Collective</p>
            <h1>Tu crias. Nós tornamos real.</h1>
            <p className="heroAeris__lead">
              Cria os teus ténis ideais, valida com a comunidade, compra e
              torna-os reais.
            </p>
            <div className="heroAeris__actions">
              <Link className="btn btn--primary" href="/create">
                Criar agora
              </Link>
              <Link className="btn btn--ghost" href="/discover">
                Explorar ideias
              </Link>
            </div>
          </div>

          <div className="heroAeris__visual">
            <div className="heroAeris__card">
              <div className="heroAeris__shoe" aria-hidden>
                <Image
                  src="/products/1/1 (3).png"
                  alt="Neopulse Runner"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div className="heroAeris__info">
                <div>
                  <h3>Neopulse Runner</h3>
                  <div className="heroAeris__stats">
                    <span>❤ 8.2k</span>
                    <span>☆ 1.5k</span>
                    <span>🗳 1.8k</span>
                  </div>
                </div>
                <div className="heroAeris__meta">
                  <span className="heroAeris__author">Marco Ribeiro</span>
                  <span className="heroAeris__votes">12,355 votos</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="featured">
        <div className="container">
          <div className="featured__header">
            <div>
              <h2>Em destaque</h2>
              <div className="tabs">
                <button className="tab tab--active" type="button">
                  Tendências
                </button>
                <button className="tab" type="button">
                  Mais votados
                </button>
                <button className="tab" type="button">
                  Acabaram de ser lançados
                </button>
              </div>
            </div>
          </div>

          <div className="featuredGrid">
            {featuredShoes.map((shoe) => (
              <article className="featuredCard" key={shoe.name}>
                {shoe.badge ? (
                  <span className="featuredCard__badge">{shoe.badge}</span>
                ) : null}
                <div className="featuredCard__media">
                  <Image
                    src={shoe.image}
                    alt={shoe.name}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="featuredCard__body">
                  <h3>{shoe.name}</h3>
                  <p className="featuredCard__tone">{shoe.tone}</p>
                  <div className="featuredCard__stats">
                    <span>❤ {shoe.votes}</span>
                    <span>☆ {shoe.likes}</span>
                  </div>
                  <div className="featuredCard__author">
                    <span className="avatar avatar--sm" aria-hidden>
                      {shoe.author
                        .split(" ")
                        .map((part) => part[0])
                        .join("")}
                    </span>
                    <span>{shoe.author}</span>
                  </div>
                  <div className="featuredCard__progress">
                    <span />
                  </div>
                  <div className="featuredCard__footer">
                    <span>{shoe.progress}</span>
                    <span>votos</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
