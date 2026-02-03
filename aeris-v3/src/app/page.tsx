import Link from "next/link";

const boots = [
  {
    name: "Predator",
    tone: "Gradiente neon",
  },
  {
    name: "F50",
    tone: "Vermelho energia",
  },
  {
    name: "Copa",
    tone: "Branco clássico",
  },
  {
    name: "X",
    tone: "Holográfico",
  },
];

const collections = [
  {
    title: "Treino diário",
    copy: "Peças leves para cada sessão.",
  },
  {
    title: "Essenciais de rua",
    copy: "Silhuetas urbanas com ADN desportivo.",
  },
  {
    title: "Clássicos adidas",
    copy: "Ícones que atravessam gerações.",
  },
];

export default function Home() {
  return (
    <main className="home">
      <section className="heroAdidas">
        <div className="container">
          <div className="heroAdidas__notice">
            Diz o que sentes com a adidas ♡ Compra os presentes perfeitos para o
            Dia dos Namorados.
          </div>
          <div className="heroAdidas__panel">
            <div className="heroAdidas__copy">
              <span className="heroAdidas__tag">PREDATOR OU F50</span>
              <h1>Escolhe a bota que dita o teu ritmo.</h1>
              <p>
                Performance, velocidade e controlo. Descobre a nova geração de
                chuteiras com ajuste preciso e energia total.
              </p>
              <div className="heroAdidas__cta">
                <Link className="btn btn--dark" href="/shop?tag=predator">
                  Predator →
                </Link>
                <Link className="btn btn--ghostDark" href="/shop?tag=f50">
                  F50 →
                </Link>
              </div>
            </div>
            <div className="heroAdidas__visual" aria-hidden>
              <div className="heroAdidas__player heroAdidas__player--left">
                <span className="heroAdidas__boot heroAdidas__boot--red" />
              </div>
              <div className="heroAdidas__player heroAdidas__player--right">
                <span className="heroAdidas__boot heroAdidas__boot--green" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bootFinder">
        <div className="container">
          <h2>ENCONTRA A BOTA PERFEITA</h2>
          <div className="bootGrid">
            {boots.map((boot) => (
              <div className="bootCard" key={boot.name}>
                <div className="bootCard__media" aria-hidden />
                <div className="bootCard__meta">
                  <p className="bootCard__title">{boot.name}</p>
                  <p className="bootCard__tone">{boot.tone}</p>
                  <Link className="textLink" href={`/shop?tag=${boot.name}`}>
                    Ver coleção →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="collectionStrip">
        <div className="container collectionStrip__inner">
          {collections.map((collection) => (
            <div className="collectionCard" key={collection.title}>
              <h3>{collection.title}</h3>
              <p>{collection.copy}</p>
              <Link className="textLink" href="/shop">
                Comprar →
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
