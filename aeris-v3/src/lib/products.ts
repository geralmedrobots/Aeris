export type Product = {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  priceCents: number;
  tags: string[];
  colors: { name: string; hex: string }[];
  sizes: string[];
  images: string[];
  description: string;
};

export const products: Product[] = [
  {
    id: "p_trailrunner_01",
    slug: "stride-trailrunner",
    name: "STRIDE Trailrunner",
    subtitle: "Running • All-terrain grip",
    priceCents: 12999,
    tags: ["running", "outdoor", "new"],
    colors: [
      { name: "Core Black", hex: "#0B0C0F" },
      { name: "Cloud White", hex: "#F2F3F7" },
      { name: "Solar Lime", hex: "#B9FF2C" },
    ],
    sizes: ["39", "40", "41", "42", "43", "44", "45"],
    images: [
      "/products/pngtree-holographic-sneakers-2026-branding-chunky-sole-design-futuristic-athletic-footwear-fashion-image_19635922.png",
      "/products/pngtree-futuristic-3d-wireframe-sneakers-on-a-production-line-image_20423440.png",
      "/products/futuristic-and-stylish-sneaker-designed-with-a-transparent-outer-shell-one-of-kind_11304108.png",
    ],
    description:
      "Lightweight trail shoe with responsive cushioning and a lugged outsole for wet or loose surfaces. Built for daily runs and weekend adventures.",
  },
  {
    id: "p_citysneaker_01",
    slug: "metro-city-sneaker",
    name: "METRO City Sneaker",
    subtitle: "Originals • Everyday comfort",
    priceCents: 9999,
    tags: ["lifestyle", "bestseller"],
    colors: [
      { name: "Chalk", hex: "#EFE7DA" },
      { name: "Midnight", hex: "#111827" },
    ],
    sizes: ["36", "37", "38", "39", "40", "41", "42"],
    images: [
      "/products/71FYBBtfuoL._AC_UY900_.png",
      "/products/il_570xN.6795842081_l6ry.png",
      "/products/E6M5HK7EYJC43BSXWLMSCXBWHY.png",
    ],
    description:
      "Clean silhouette with soft lining and a durable rubber cupsole. A minimal sneaker that works with everything.",
  },
  {
    id: "p_hoodie_01",
    slug: "aeris-fleece-hoodie",
    name: "AERIS Fleece Hoodie",
    subtitle: "Essentials • Soft brushed interior",
    priceCents: 6999,
    tags: ["apparel", "new"],
    colors: [
      { name: "Ash Grey", hex: "#9CA3AF" },
      { name: "Deep Navy", hex: "#0B1B3A" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    images: ["/products/1.png"],
    description:
      "Heavyweight fleece hoodie with a relaxed fit, rib cuffs, and a roomy kangaroo pocket. Made for warm-ups and cool-downs.",
  },
  {
    id: "p_shorts_01",
    slug: "tempo-training-shorts",
    name: "TEMPO Training Shorts",
    subtitle: "Training • 2-in-1 support",
    priceCents: 4499,
    tags: ["training", "apparel"],
    colors: [
      { name: "Graphite", hex: "#1F2937" },
      { name: "Ice Blue", hex: "#93C5FD" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [
      "/products/1542024131342342.png",
      "/products/1.png",
    ],
    description:
      "Breathable woven outer short with built-in liner. Sweat-wicking and ready for high-intensity sessions.",
  },
];

export function formatPriceEUR(priceCents: number) {
  return new Intl.NumberFormat("pt-PT", {
    style: "currency",
    currency: "EUR",
  }).format(priceCents / 100);
}

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug) ?? null;
}
