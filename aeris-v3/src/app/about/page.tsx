import Link from "next/link";
import Image from "next/image";
import { getLocale } from "@/components/useLocale";
import { t } from "@/lib/i18n";
import "../about.css";

export default async function AboutPage() {
  const locale = await getLocale();

  const teamMembers = [
    {
      name: "Ana Silva",
      role: t(locale, "about_team1_role"),
      image: "/products/1/1.png",
    },
    {
      name: "Ricardo Costa",
      role: t(locale, "about_team2_role"),
      image: "/products/1/2.png",
    },
    {
      name: "Joana Mendes",
      role: t(locale, "about_team3_role"),
      image: "/products/1/4.png",
    },
    {
      name: "Miguel Santos",
      role: t(locale, "about_team4_role"),
      image: "/products/1/5.png",
    },
  ];

  const values = [
    {
      icon: "🎨",
      title: t(locale, "about_value1_title"),
      description: t(locale, "about_value1_desc"),
    },
    {
      icon: "🌍",
      title: t(locale, "about_value2_title"),
      description: t(locale, "about_value2_desc"),
    },
    {
      icon: "🤝",
      title: t(locale, "about_value3_title"),
      description: t(locale, "about_value3_desc"),
    },
    {
      icon: "⚡",
      title: t(locale, "about_value4_title"),
      description: t(locale, "about_value4_desc"),
    },
  ];

  return (
    <main className="aboutPage">
      {/* Hero Section */}
      <section className="aboutHero">
        <div className="container">
          <div className="aboutHero__content">
            <span className="aboutHero__badge">{t(locale, "about_badge")}</span>
            <h1 className="aboutHero__title">
              {t(locale, "about_hero_title")}
            </h1>
            <p className="aboutHero__subtitle">
              {t(locale, "about_hero_subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="aboutMission">
        <div className="container">
          <div className="mission__grid">
            <div className="mission__content">
              <h2 className="mission__title">{t(locale, "about_mission_title")}</h2>
              <p className="mission__text">
                {t(locale, "about_mission_text1")}
              </p>
              <p className="mission__text">
                {t(locale, "about_mission_text2")}
              </p>
              <div className="mission__stats">
                <div className="mission__stat">
                  <span className="stat__number">10k+</span>
                  <span className="stat__label">{t(locale, "about_stat_designs")}</span>
                </div>
                <div className="mission__stat">
                  <span className="stat__number">50k+</span>
                  <span className="stat__label">{t(locale, "about_stat_community")}</span>
                </div>
                <div className="mission__stat">
                  <span className="stat__number">95%</span>
                  <span className="stat__label">{t(locale, "about_stat_satisfaction")}</span>
                </div>
              </div>
            </div>
            <div className="mission__image">
              <Image
                src="/products/product_det/ChatGPT Image Feb 4, 2026, 03_53_00 PM.png"
                alt="Nossa Missão"
                width={600}
                height={600}
                className="mission__img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="aboutValues">
        <div className="container">
          <h2 className="section__title">{t(locale, "about_values_title")}</h2>
          <p className="section__subtitle">{t(locale, "about_values_subtitle")}</p>

          <div className="values__grid">
            {values.map((value, index) => (
              <div key={index} className="value__card">
                <div className="value__icon">{value.icon}</div>
                <h3 className="value__title">{value.title}</h3>
                <p className="value__description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="aboutTeam">
        <div className="container">
          <h2 className="section__title">{t(locale, "about_team_title")}</h2>
          <p className="section__subtitle">{t(locale, "about_team_subtitle")}</p>

          <div className="team__grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team__card">
                <div className="team__imageWrapper">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={400}
                    height={400}
                    className="team__image"
                  />
                </div>
                <div className="team__info">
                  <h3 className="team__name">{member.name}</h3>
                  <p className="team__role">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="aboutStory">
        <div className="container">
          <div className="story__content">
            <h2 className="story__title">{t(locale, "about_story_title")}</h2>
            <div className="story__timeline">
              <div className="timeline__item">
                <span className="timeline__year">2020</span>
                <h3 className="timeline__title">{t(locale, "about_timeline1_title")}</h3>
                <p className="timeline__desc">{t(locale, "about_timeline1_desc")}</p>
              </div>
              <div className="timeline__item">
                <span className="timeline__year">2022</span>
                <h3 className="timeline__title">{t(locale, "about_timeline2_title")}</h3>
                <p className="timeline__desc">{t(locale, "about_timeline2_desc")}</p>
              </div>
              <div className="timeline__item">
                <span className="timeline__year">2024</span>
                <h3 className="timeline__title">{t(locale, "about_timeline3_title")}</h3>
                <p className="timeline__desc">{t(locale, "about_timeline3_desc")}</p>
              </div>
              <div className="timeline__item">
                <span className="timeline__year">2026</span>
                <h3 className="timeline__title">{t(locale, "about_timeline4_title")}</h3>
                <p className="timeline__desc">{t(locale, "about_timeline4_desc")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="aboutCTA">
        <div className="container">
          <div className="cta__content">
            <h2 className="cta__title">{t(locale, "about_cta_title")}</h2>
            <p className="cta__description">
              {t(locale, "about_cta_desc")}
            </p>
            <div className="cta__actions">
              <Link href="/discover" className="btn btn--primary">
                {t(locale, "about_cta_discover")}
              </Link>
              <Link href="/shop" className="btn btn--secondary">
                {t(locale, "about_cta_shop")}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

