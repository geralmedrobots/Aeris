import Image from "next/image";
import Link from "next/link";

const boots = [
	{
		name: "Predator",
		tone: "Gradiente neon",
		tag: "predator",
		image: "/products/pngtree-holographic-sneakers-2026-branding-chunky-sole-design-futuristic-athletic-footwear-fashion-image_19635922.png",
	},
	{
		name: "F50",
		tone: "Vermelho energia",
		tag: "f50",
		image: "/products/pngtree-futuristic-3d-wireframe-sneakers-on-a-production-line-image_20423440.png",
	},
	{
		name: "Copa",
		tone: "Branco clássico",
		tag: "copa",
		image: "/products/71FYBBtfuoL._AC_UY900_.png",
	},
	{
		name: "X",
		tone: "Holográfico",
		tag: "x",
		image: "/products/futuristic-and-stylish-sneaker-designed-with-a-transparent-outer-shell-one-of-kind_11304108.png",
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
								<Image
									src={boots[0].image}
									alt=""
									fill
									sizes="(max-width: 900px) 50vw, 360px"
									style={{ objectFit: "cover" }}
									priority
								/>
							</div>
							<div className="heroAdidas__player heroAdidas__player--right">
								<Image
									src={boots[1].image}
									alt=""
									fill
									sizes="(max-width: 900px) 50vw, 360px"
									style={{ objectFit: "cover" }}
									priority
								/>
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
								<div className="bootCard__media" aria-hidden>
									<Image
										src={boot.image}
										alt=""
										fill
										sizes="(max-width: 900px) 50vw, 25vw"
										style={{ objectFit: "cover" }}
									/>
								</div>
								<div className="bootCard__meta">
									<p className="bootCard__title">{boot.name}</p>
									<p className="bootCard__tone">{boot.tone}</p>
									<Link className="textLink" href={`/shop?tag=${boot.tag}`}>
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
