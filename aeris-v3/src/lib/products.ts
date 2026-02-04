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
      "/products/1/ChatGPT Image Feb 3, 2026, 04_06_57 PM.png",
      "/products/1/ChatGPT Image Feb 3, 2026, 04_15_27 PM.png",
      "/products/1/ChatGPT Image Feb 3, 2026, 04_21_03 PM.png",
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
      "/products/1/ChatGPT Image Feb 3, 2026, 04_24_58 PM.png",
      "/products/1/ChatGPT Image Feb 3, 2026, 04_27_05 PM.png",
      "/products/1/ChatGPT Image Feb 3, 2026, 04_29_20 PM.png",
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
    images: [
      "/products/1/ChatGPT Image Feb 3, 2026, 04_30_50 PM.png",
      "/products/1/Gemini_Generated_Image_zfzkfwzfzkfwzfzk.png",
    ],
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
      "/products/1/faz-este-tenis-com-meu-logo_18w8Dt7TQ66QVQiu5Z28pQ_78ZG3_RgSHmyyDCSXuSSdQ_sd.jpeg",
      "/products/1/faz-este-tenis-com-meu-logo_jsPVNy8zS8KIzrSK-TYspg_78ZG3_RgSHmyyDCSXuSSdQ_sd.jpeg",
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
