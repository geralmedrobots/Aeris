import Link from "next/link";
import { CreatorsBenefitsSection } from "@/components/CreatorsBenefitsSection";
import { FeaturedTabs } from "@/components/client/FeaturedTabs";
import { getLocale } from "@/components/useLocale";
import { t } from "@/lib/i18n";

const featuredShoes = [
	{
		name: "AirVolt Retro",
		votes: "7.3k",
		likes: "1.2k",
		progress: "10%",
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
		progress: "50%",
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

export default async function Home() {
	const locale = await getLocale();

	return (
		<main className="home">
			<section className="heroAeris">
				<div className="heroAeris__video" aria-hidden>
					<video
						className="heroAeris__videoEl"
						autoPlay
						loop
						muted
						playsInline
						preload="metadata"
						poster="/products/1/8.png"
					>
						<source
							src="/products/vedio/AI_Sneaker_Design_Platform_Video.mp4"
							type="video/mp4"
						/>
					</video>
				</div>

				<div className="container heroAeris__inner">
					<div className="heroAeris__copy">
						<p className="eyebrow">{t(locale, "home_eyebrow")}</p>
						<h1>{t(locale, "home_title")}</h1>
						<p className="heroAeris__lead">{t(locale, "home_lead")}</p>
						<div className="heroAeris__actions">
							<Link className="btn btn--primary" href="/shop">
								{t(locale, "home_cta_shop")}
							</Link>
							<a className="btn btn--ghost" href="#quality-process">
								{t(locale, "home_cta_how")}
							</a>
						</div>
					</div>

					<div className="heroAeris__visual" />
				</div>
			</section>

			<FeaturedTabs shoes={featuredShoes} locale={locale} />

			<CreatorsBenefitsSection locale={locale} />

			<section className="qualityProcess" id="quality-process">
				<div className="container">
					<div className="qualityProcess__header">
						<h2>{t(locale, "quality_title")}</h2>
						<p className="qualityProcess__subtitle">
							{t(locale, "quality_subtitle")}
						</p>
					</div>

					<div className="qualityProcess__grid">
						<div className="qualityProcess__card">
							<div className="qualityProcess__icon">✨</div>
							<h3>{t(locale, "quality_card1_title")}</h3>
							<p>{t(locale, "quality_card1_desc")}</p>
						</div>

						<div className="qualityProcess__card">
							<div className="qualityProcess__icon">🔍</div>
							<h3>{t(locale, "quality_card2_title")}</h3>
							<p>{t(locale, "quality_card2_desc")}</p>
						</div>

						<div className="qualityProcess__card">
							<div className="qualityProcess__icon">🏭</div>
							<h3>{t(locale, "quality_card3_title")}</h3>
							<p>{t(locale, "quality_card3_desc")}</p>
						</div>

						<div className="qualityProcess__card">
							<div className="qualityProcess__icon">📦</div>
							<h3>{t(locale, "quality_card4_title")}</h3>
							<p>{t(locale, "quality_card4_desc")}</p>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
