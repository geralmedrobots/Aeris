import Link from "next/link";
import { DynamicImageCard } from "@/components/client/DynamicImageCard";

const featuredShoes = [
  {
    name: "AirVolt Retro",
    votes: "7.3k",
    likes: "1.2k",
    progress: "68%",
    author: "Joana Mendes",
    tone: "Gradiente alperce",
    image: "/products/1/1.png",
  },
  {
    name: "Vaporium X1",
    votes: "9.4k",
    likes: "1.5k",
    progress: "100%",
    author: "Ricardo Costa",
    tone: "Carvão com neon",
    badge: "Em produção",
    image: "/products/1/2.png",
  },
  {
    name: "AeroRun 307",
    votes: "6.3k",
    likes: "890",
    progress: "73%",
    author: "Inês Batista",
    tone: "Nude esportivo",
    image: "/products/1/4.png",
  },
  {
    name: "CloudStep Pro",
    votes: "5.8k",
    likes: "1.1k",
    progress: "65%",
    author: "Miguel Santos",
    tone: "Cinza minimalista",
    image: "/products/1/5.png",
  },
  {
    name: "UrbanGlide",
    votes: "8.1k",
    likes: "1.4k",
    progress: "82%",
    author: "Ana Silva",
    tone: "Preto urbano",
    image: "/products/1/6.png",
  },
  {
    name: "FlexWave",
    votes: "6.7k",
    likes: "980",
    progress: "71%",
    author: "Pedro Alves",
    tone: "Azul dinâmico",
    image: "/products/1/7.png",
  },
  {
    name: "Neopulse Elite",
    votes: "7.9k",
    likes: "1.3k",
    progress: "78%",
    author: "Sofia Pereira",
    tone: "Branco premium",
    image: "/products/1/8.png",
  },
  {
    name: "Velocity Max",
    votes: "9.2k",
    likes: "1.7k",
    progress: "88%",
    author: "Tiago Ferreira",
    tone: "Vermelho racing",
    badge: "Quase lá!",
    image: "/products/1/9.png",
  },
  {
    name: "EcoStride",
    votes: "5.4k",
    likes: "820",
    progress: "62%",
    author: "Mariana Costa",
    tone: "Verde natural",
    image: "/products/1/10.png",
  },
  {
    name: "TechRunner",
    votes: "7.5k",
    likes: "1.2k",
    progress: "75%",
    author: "João Oliveira",
    tone: "Grafite tech",
    image: "/products/1/11.png",
  },
  {
    name: "LunarFlex",
    votes: "8.6k",
    likes: "1.5k",
    progress: "84%",
    author: "Beatriz Lopes",
    tone: "Prata lunar",
    image: "/products/1/12.png",
  },
  {
    name: "PulseRun",
    votes: "6.2k",
    likes: "950",
    progress: "69%",
    author: "Rui Cardoso",
    tone: "Laranja energético",
    image: "/products/1/13.png",
  },
  {
    name: "StreetFlow",
    votes: "7.1k",
    likes: "1.1k",
    progress: "74%",
    author: "Carolina Dias",
    tone: "Bege street",
    image: "/products/1/14.png",
  },
  {
    name: "AeroBoost",
    votes: "8.8k",
    likes: "1.6k",
    progress: "86%",
    author: "Diogo Rocha",
    tone: "Azul céu",
    badge: "Popular",
    image: "/products/1/15.png",
  },
  {
    name: "NightRider",
    votes: "9.1k",
    likes: "1.8k",
    progress: "92%",
    author: "Francisca Gomes",
    tone: "Preto noturno",
    image: "/products/1/16.png",
  },
  {
    name: "SolarWave",
    votes: "5.9k",
    likes: "870",
    progress: "66%",
    author: "André Martins",
    tone: "Amarelo solar",
    image: "/products/1/17.png",
  },
  {
    name: "HyperDrive",
    votes: "8.3k",
    likes: "1.4k",
    progress: "81%",
    author: "Catarina Reis",
    tone: "Rosa vibrante",
    image: "/products/1/18.png",
  },
  {
    name: "ZenStep",
    votes: "6.5k",
    likes: "1.0k",
    progress: "70%",
    author: "Nuno Sousa",
    tone: "Cinza zen",
    image: "/products/1/19.png",
  },
  {
    name: "BlitzRunner",
    votes: "7.8k",
    likes: "1.3k",
    progress: "77%",
    author: "Rita Fernandes",
    tone: "Verde neon",
    image: "/products/1/20.png",
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
                <DynamicImageCard
                  src="/products/1/8.png"
                  alt="Neopulse Runner"
                  className="heroAeris__dynamicImage"
                  priority
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
                <h3 className="featuredCard__title">{shoe.name}</h3>
                <DynamicImageCard
                  src={shoe.image}
                  alt={shoe.name}
                  className="featuredCard__media"
                />
                <div className="featuredCard__body">
                  <p className="featuredCard__tone">{shoe.tone}</p>
                  <div className="featuredCard__stats">
                    <span className="featuredCard__stat">
                      <span className="featuredCard__icon">❤</span>
                      <span className="featuredCard__value">{shoe.votes}</span>
                    </span>
                    <span className="featuredCard__stat">
                      <span className="featuredCard__icon">☆</span>
                      <span className="featuredCard__value">{shoe.likes}</span>
                    </span>
                  </div>
                  <div className="featuredCard__author">
                    <span className="avatar avatar--sm" aria-hidden>
                      {shoe.author
                        .split(" ")
                        .map((part) => part[0])
                        .join("")}
                    </span>
                    <span className="featuredCard__authorName">{shoe.author}</span>
                  </div>
                  <div className="featuredCard__progress">
                    <div className="featuredCard__progressBar">
                      <span
                        className="featuredCard__progressFill"
                        style={{ width: shoe.progress }}
                      />
                    </div>
                  </div>
                  <div className="featuredCard__footer">
                    <span className="featuredCard__progressText">{shoe.progress}</span>
                    <span className="featuredCard__votesLabel">para produção</span>
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
