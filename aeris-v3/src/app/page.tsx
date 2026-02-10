import Link from "next/link";

import { FeaturedTabs } from "@/components/client/FeaturedTabs";
import { BlogGrid } from "@/components/client/BlogGrid";

import { getLocale } from "@/components/useLocale";
import { t } from "@/lib/i18n";

const featuredShoes = [
	{
		name: "AirVolt Retro",
		votes: "7.3k",
		likes: "1.2k",
		progress: "10%",
		author: "Joana Mendes",
		image: "/products/1/1.png",
		country: "Portugal",
	},
	{
		name: "Vaporium X1",
		votes: "9.4k",
		likes: "1.5k",
		progress: "100%",
		author: "Ricardo Costa",
		badge: "Em produção",
		image: "/products/1/2.png",
		country: "Brasil",
	},
	{
		name: "AeroRun 307",
		votes: "6.3k",
		likes: "890",
		progress: "50%",
		author: "Inês Batista",
		image: "/products/1/4.png",
		country: "Portugal",
	},
	{
		name: "CloudStep Pro",
		votes: "5.8k",
		likes: "1.1k",
		progress: "65%",
		author: "Miguel Santos",
		image: "/products/1/5.png",
		country: "Espanha",
	},
	{
		name: "UrbanGlide",
		votes: "8.1k",
		likes: "1.4k",
		progress: "82%",
		author: "Ana Silva",
		image: "/products/1/6.png",
		country: "Portugal",
	},
	{
		name: "FlexWave",
		votes: "6.7k",
		likes: "980",
		progress: "71%",
		author: "Pedro Alves",
		image: "/products/1/7.png",
		country: "Brasil",
	},
	{
		name: "Neopulse Elite",
		votes: "7.9k",
		likes: "1.3k",
		progress: "78%",
		author: "Sofia Pereira",
		image: "/products/1/8.png",
		country: "Portugal",
	},
	{
		name: "Velocity Max",
		votes: "9.2k",
		likes: "1.7k",
		progress: "88%",
		author: "Tiago Ferreira",
		badge: "Quase lá!",
		image: "/products/1/9.png",
		country: "França",
	},
	{
		name: "EcoStride",
		votes: "5.4k",
		likes: "820",
		progress: "62%",
		author: "Mariana Costa",
		image: "/products/1/10.png",
		country: "Itália",
	},
	{
		name: "TechRunner",
		votes: "7.5k",
		likes: "1.2k",
		progress: "75%",
		author: "João Oliveira",
		image: "/products/1/11.png",
		country: "Portugal",
	},
	{
		name: "LunarFlex",
		votes: "8.6k",
		likes: "1.5k",
		progress: "84%",
		author: "Beatriz Lopes",
		image: "/products/1/12.png",
		country: "Reino Unido",
	},
	{
		name: "PulseRun",
		votes: "6.2k",
		likes: "950",
		progress: "69%",
		author: "Rui Cardoso",
		image: "/products/1/13.png",
		country: "Portugal",
	},
	{
		name: "StreetFlow",
		votes: "7.1k",
		likes: "1.1k",
		progress: "74%",
		author: "Carolina Dias",
		image: "/products/1/14.png",
		country: "Brasil",
	},
	{
		name: "AeroBoost",
		votes: "8.8k",
		likes: "1.6k",
		progress: "86%",
		author: "Diogo Rocha",
		badge: "Popular",
		image: "/products/1/15.png",
		country: "Espanha",
	},
	{
		name: "NightRider",
		votes: "9.1k",
		likes: "1.8k",
		progress: "92%",
		author: "Francisca Gomes",
		image: "/products/1/16.png",
		country: "Portugal",
	},
	{
		name: "SolarWave",
		votes: "5.9k",
		likes: "870",
		progress: "66%",
		author: "André Martins",
		image: "/products/1/17.png",
		country: "França",
	},
	{
		name: "HyperDrive",
		votes: "8.3k",
		likes: "1.4k",
		progress: "81%",
		author: "Catarina Reis",
		image: "/products/1/18.png",
		country: "Itália",
	},
	{
		name: "ZenStep",
		votes: "6.5k",
		likes: "1.0k",
		progress: "70%",
		author: "Nuno Sousa",
		image: "/products/1/19.png",
		country: "Portugal",
	},
	{
		name: "BlitzRunner",
		votes: "7.8k",
		likes: "1.3k",
		progress: "77%",
		author: "Rita Fernandes",
		image: "/products/1/20.png",
		country: "Alemanha",
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
							<a className="btn btn--ghost" href="#community">
								{t(locale, "home_cta_how")}
							</a>
						</div>
					</div>

					<div className="heroAeris__visual">

					</div>
				</div>
			</section>

			<FeaturedTabs shoes={featuredShoes} locale={locale} />
            {/* Community Hero Section*/}
			<section className="community community--hero" id="community">
				<div className="container community__heroLayout">
					<div className="community__content">
						<h2>Empowering Creators with Intelligent Design</h2>
						<p className="community__lead">AI-driven tools to create, personalize and scale content globally.</p>
					</div>

					<div className="community__visual">
						<div className="community__network">
							<span className="community__line community__line--1" />
							<span className="community__line community__line--2" />
							<span className="community__line community__line--3" />
							<span className="community__spark community__spark--1" />
							<span className="community__spark community__spark--2" />
							<span className="community__spark community__spark--3" />

						<div className="community__node community__node--1">
							<div className="community__avatarRing">
								<img
									src="/personal/1.jpg"
									alt="Criadora em Lisboa"
									loading="lazy"
								/>
							</div>
						</div>
						<div className="community__node community__node--2">
							<div className="community__avatarRing">
								<img
									src="/personal/2.jpg"
									alt="Criador em São Paulo"
									loading="lazy"
								/>
							</div>
						</div>
						<div className="community__node community__node--3">
							<div className="community__avatarRing">
								<img
									src="/personal/3.jpg"
									alt="Designer em Nova York"
									loading="lazy"
								/>
							</div>
						</div>
						<div className="community__node community__node--4">
							<div className="community__avatarRing">
								<img
									src="/personal/4.jpg"
									alt="Criadora em Seul"
									loading="lazy"
								/>
							</div>
						</div>
						<div className="community__node community__node--5">
							<div className="community__avatarRing">
								<img
									src="/personal/5.jpg"
									alt="Criador em Cidade do Cabo"
									loading="lazy"
								/>
							</div>
						</div>
						<div className="community__node community__node--6">
							<div className="community__avatarRing">
								<img
									src="/personal/6.jpg"
									alt="Designer em Tóquio"
									loading="lazy"
								/>
							</div>
						</div>
						</div>
					</div>
				</div>
			</section>
            {/* Community Banner Section */}
            {/*
            <section className="communityBanner">
                <div className="communityBanner__wrapper">
                    <img
                        src="/personal/comnidade.png"
                        alt="Comunidade Aeris"
                        className="communityBanner__image"
                    />
                </div>
            </section>
*/}
            <BlogGrid />


            <section className="community community--cta" id="community1">
                <div className="container">
                    <div className="community__ctaWrapper">
                        <div className="community__ctaDecoLeft">
                            <div className="decorCircle decorCircle--1"></div>
                            <div className="decorCircle decorCircle--2"></div>
                            <div className="decorCircle decorCircle--3"></div>
                            <div className="decorLine decorLine--1"></div>
                            <div className="decorLine decorLine--2"></div>
                        </div>

                        <div className="community__cta">
                            <h3>Pronto para criar?</h3>
                            <div className="community__ctaActions">
                                <Link href="/design" className="btn btn--primary">
                                    Começar Agora
                                </Link>
                                <Link href="/about" className="btn btn--ghost">
                                    Saiba Mais
                                </Link>
                            </div>
                        </div>

                        <div className="community__ctaDecoRight">
                            <div className="decorCircle decorCircle--1"></div>
                            <div className="decorCircle decorCircle--2"></div>
                            <div className="decorCircle decorCircle--3"></div>
                            <div className="decorLine decorLine--1"></div>
                            <div className="decorLine decorLine--2"></div>
                        </div>
                    </div>
                </div>
            </section>
		</main>
	);
}
