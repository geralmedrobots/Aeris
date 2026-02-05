import Link from "next/link";
import Image from "next/image";
import { getLocale } from "@/components/useLocale";
import { t } from "@/lib/i18n";
import "../design.css";

export default async function DesignPage() {
  const locale = await getLocale();

  const designConcepts = [
    {
      id: "urban-matrix",
      name: t(locale, "design_concept1_name"),
      category: t(locale, "design_concept1_category"),
      colors: ["#0A0E27", "#1C2541", "#8B92A8"],
      description: t(locale, "design_concept1_desc"),
      image: "/products/product_det/ChatGPT Image Feb 4, 2026, 03_53_00 PM.png",
      status: t(locale, "design_concept1_status"),
      manufacturability: 95,
    },
    {
      id: "neo-flow",
      name: t(locale, "design_concept2_name"),
      category: t(locale, "design_concept2_category"),
      colors: ["#141B2D", "#2D3E5F", "#6B7A99"],
      description: t(locale, "design_concept2_desc"),
      image: "/products/product_det/ChatGPT Image Feb 4, 2026, 03_53_07 PM.png",
      status: t(locale, "design_concept2_status"),
      manufacturability: 88,
    },
    {
      id: "shadow-wave",
      name: t(locale, "design_concept3_name"),
      category: t(locale, "design_concept3_category"),
      colors: ["#0F1419", "#293241", "#98A6BD"],
      description: t(locale, "design_concept3_desc"),
      image: "/products/product_det/ChatGPT Image Feb 4, 2026, 03_53_13 PM.png",
      status: t(locale, "design_concept3_status"),
      manufacturability: 92,
    },
  ];

  return (
    <main className="designPage">
      {/* Hero Section */}
      <section className="designHero">
        <div className="container">
          <div className="designHero__content">
            <span className="designHero__badge">{t(locale, "design_badge")}</span>
            <h1 className="designHero__title">
              {t(locale, "design_hero_title1")}
              <span className="designHero__highlight"> {t(locale, "design_hero_title2")}</span>
            </h1>
            <p className="designHero__subtitle">
              {t(locale, "design_hero_subtitle")}
            </p>
            <div className="designHero__stats">
              <div className="stat">
                <span className="stat__value">100%</span>
                <span className="stat__label">{t(locale, "design_stat_original")}</span>
              </div>
              <div className="stat">
                <span className="stat__value">3</span>
                <span className="stat__label">{t(locale, "design_stat_colors")}</span>
              </div>
              <div className="stat">
                <span className="stat__value">90+%</span>
                <span className="stat__label">{t(locale, "design_stat_viability")}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Principles */}
      <section className="designPrinciples">
        <div className="container">
          <h2 className="section__title">{t(locale, "design_principles_title")}</h2>
          <div className="principles__grid">
            <div className="principle__card">
              <div className="principle__icon">⚡</div>
              <h3 className="principle__title">{t(locale, "design_principle1_title")}</h3>
              <p className="principle__desc">
                {t(locale, "design_principle1_desc")}
              </p>
            </div>
            <div className="principle__card">
              <div className="principle__icon">🎨</div>
              <h3 className="principle__title">{t(locale, "design_principle2_title")}</h3>
              <p className="principle__desc">
                {t(locale, "design_principle2_desc")}
              </p>
            </div>
            <div className="principle__card">
              <div className="principle__icon">🔒</div>
              <h3 className="principle__title">{t(locale, "design_principle3_title")}</h3>
              <p className="principle__desc">
                {t(locale, "design_principle3_desc")}
              </p>
            </div>
            <div className="principle__card">
              <div className="principle__icon">🌐</div>
              <h3 className="principle__title">{t(locale, "design_principle4_title")}</h3>
              <p className="principle__desc">
                {t(locale, "design_principle4_desc")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Design Concepts */}
      <section className="designConcepts">
        <div className="container">
          <div className="concepts__header">
            <h2 className="section__title">{t(locale, "design_concepts_title")}</h2>
            <p className="section__subtitle">
              {t(locale, "design_concepts_subtitle")}
            </p>
          </div>

          <div className="concepts__grid">
            {designConcepts.map((concept) => (
              <article key={concept.id} className="conceptCard">
                <div className="conceptCard__imageWrapper">
                  <Image
                    src={concept.image}
                    alt={concept.name}
                    width={600}
                    height={600}
                    className="conceptCard__image"
                  />
                  <div className="conceptCard__overlay">
                    <span className="conceptCard__status">{concept.status}</span>
                  </div>
                </div>

                <div className="conceptCard__content">
                  <span className="conceptCard__category">{concept.category}</span>
                  <h3 className="conceptCard__name">{concept.name}</h3>
                  <p className="conceptCard__description">{concept.description}</p>

                  <div className="conceptCard__colors">
                    <span className="colors__label">{t(locale, "design_palette")}</span>
                    <div className="colors__swatches">
                      {concept.colors.map((color, idx) => (
                        <div
                          key={idx}
                          className="color__swatch"
                          style={{ backgroundColor: color }}
                          title={color}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="conceptCard__manufacturability">
                    <div className="manufacturability__header">
                      <span className="manufacturability__label">{t(locale, "design_manufacturability")}</span>
                      <span className="manufacturability__value">{concept.manufacturability}%</span>
                    </div>
                    <div className="manufacturability__bar">
                      <div
                        className="manufacturability__progress"
                        style={{ width: `${concept.manufacturability}%` }}
                      />
                    </div>
                  </div>

                  <button className="conceptCard__cta">
                    {t(locale, "design_view_details")}
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="technicalSpecs">
        <div className="container">
          <h2 className="section__title">{t(locale, "design_specs_title")}</h2>
          <div className="specs__grid">
            <div className="spec__card">
              <h4 className="spec__title">{t(locale, "design_specs1_title")}</h4>
              <ul className="spec__list">
                <li>{t(locale, "design_specs1_1")}</li>
                <li>{t(locale, "design_specs1_2")}</li>
                <li>{t(locale, "design_specs1_3")}</li>
                <li>{t(locale, "design_specs1_4")}</li>
              </ul>
            </div>
            <div className="spec__card">
              <h4 className="spec__title">{t(locale, "design_specs2_title")}</h4>
              <ul className="spec__list">
                <li>{t(locale, "design_specs2_1")}</li>
                <li>{t(locale, "design_specs2_2")}</li>
                <li>{t(locale, "design_specs2_3")}</li>
                <li>{t(locale, "design_specs2_4")}</li>
              </ul>
            </div>
            <div className="spec__card">
              <h4 className="spec__title">{t(locale, "design_specs3_title")}</h4>
              <ul className="spec__list">
                <li>{t(locale, "design_specs3_1")}</li>
                <li>{t(locale, "design_specs3_2")}</li>
                <li>{t(locale, "design_specs3_3")}</li>
                <li>{t(locale, "design_specs3_4")}</li>
              </ul>
            </div>
            <div className="spec__card">
              <h4 className="spec__title">{t(locale, "design_specs4_title")}</h4>
              <ul className="spec__list">
                <li>{t(locale, "design_specs4_1")}</li>
                <li>{t(locale, "design_specs4_2")}</li>
                <li>{t(locale, "design_specs4_3")}</li>
                <li>{t(locale, "design_specs4_4")}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="designCTA">
        <div className="container">
          <div className="cta__content">
            <h2 className="cta__title">{t(locale, "design_cta_title")}</h2>
            <p className="cta__description">
              {t(locale, "design_cta_desc")}
            </p>
            <div className="cta__actions">
              <Link href="/shop" className="btn btn--primary">
                {t(locale, "design_cta_shop")}
              </Link>
              <Link href="/discover" className="btn btn--secondary">
                {t(locale, "design_cta_create")}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
