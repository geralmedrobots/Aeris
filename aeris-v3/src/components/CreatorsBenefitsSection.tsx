import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { t } from "@/lib/i18n";

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

export function CreatorsBenefitsSection({ locale = "pt" }: { locale?: Locale }) {
  return (
    <section
      className="creatorsBenefits"
      aria-labelledby="creators-benefits-title"
    >
      <div className="container">
        <div className="creatorsBenefits__head">
          <div>
            <p className="eyebrow">{t(locale, "creators_eyebrow")}</p>
            <h2 id="creators-benefits-title">{t(locale, "creators_title")}</h2>
            <p className="creatorsBenefits__sub">{t(locale, "creators_sub")}</p>
          </div>

          <div className="creatorsBenefits__cta">
            <Link className="btn btn--primary" href="/shop">
              {t(locale, "creators_cta_explore")}
            </Link>
            <a className="btn btn--ghost" href="#quality-process">
              {t(locale, "home_cta_how")}
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

        <p className="creatorsBenefits__fineprint">{t(locale, "creators_fineprint")}</p>
      </div>
    </section>
  );
}
