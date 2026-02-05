import Link from "next/link";

type Benefit = {
  title: string;
  description: string;
};

const benefits: Benefit[] = [
  {
    title: "Renda por cada venda",
    description:
      "Ganhas uma percentagem quando a tua ideia chega ao mercado e é comprada. Transparente e simples.",
  },
  {
    title: "Validação com a comunidade",
    description:
      "Recebe votos e feedback real antes de investir tempo e dinheiro numa produção completa.",
  },
  {
    title: "Visibilidade e portefólio",
    description:
      "O teu perfil vira uma vitrine: designs, progresso, histórico e credibilidade para novas colaborações.",
  },
  {
    title: "Do conceito ao produto",
    description:
      "Nós cuidamos do caminho: seleção, preparação e lançamento. Tu ficas no que importa: criar.",
  },
];

export function CreatorsBenefitsSection() {
  return (
    <section
      className="creatorsBenefits"
      aria-labelledby="creators-benefits-title"
    >
      <div className="container">
        <div className="creatorsBenefits__head">
          <div>
            <p className="eyebrow">Para criadores</p>
            <h2 id="creators-benefits-title">O que tu ganhas conosco</h2>
            <p className="creatorsBenefits__sub">
              Publica a tua ideia, deixa a comunidade decidir e transforma design em
              impacto (e receita).
            </p>
          </div>

          <div className="creatorsBenefits__cta">
            <Link className="btn btn--primary" href="/shop">
              Começar a explorar
            </Link>
            <a className="btn btn--ghost" href="#quality-process">
              Ver como funciona
            </a>
          </div>
        </div>

        <div className="creatorsBenefits__grid">
          {benefits.map((item) => (
            <article key={item.title} className="creatorsBenefits__card">
              <h3 className="creatorsBenefits__cardTitle">{item.title}</h3>
              <p className="creatorsBenefits__cardDesc">{item.description}</p>
            </article>
          ))}
        </div>

        <p className="creatorsBenefits__fineprint">
          Nota: esta é uma demo. Os valores e percentagens são ilustrativos.
        </p>
      </div>
    </section>
  );
}
