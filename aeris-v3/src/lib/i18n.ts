export type Locale = "pt" | "en";

export const DEFAULT_LOCALE: Locale = "pt";
export const LOCALE_COOKIE = "aeris_locale";

export function isLocale(v: unknown): v is Locale {
  return v === "pt" || v === "en";
}

export function getLocaleFromCookie(cookieValue: string | undefined): Locale {
  if (!cookieValue) return DEFAULT_LOCALE;
  const v = cookieValue.toLowerCase();
  if (v.startsWith("en")) return "en";
  if (v.startsWith("pt")) return "pt";
  return DEFAULT_LOCALE;
}

type Dict = Record<string, { pt: string; en: string }>;

// Minimal dictionary for the demo. Add keys as needed.
export const I18N: Dict = {
  nav_create: { pt: "Criar", en: "Create" },
  nav_discover: { pt: "Descobrir", en: "Discover" },
  nav_shop: { pt: "Loja", en: "Shop" },
  nav_cart: { pt: "Carrinho", en: "Cart" },

  header_launch: { pt: "Lançar a tua ideia", en: "Launch your idea" },
  header_notifications: { pt: "Notificações", en: "Notifications" },

  home_eyebrow: { pt: "Aeris Collective", en: "Aeris Collective" },
  home_title: {
    pt: "Tu crias. Nós tornamos real.",
    en: "You create. We make it real.",
  },
  home_lead: {
    pt: "Cria os teus ténis ideais, valida com a comunidade, compra e torna-os reais.",
    en: "Create your ideal sneakers, validate with the community, buy, and bring them to life.",
  },
  home_cta_shop: { pt: "Comprar agora", en: "Shop now" },
  home_cta_how: { pt: "Ver como funciona", en: "See how it works" },

  featured_title: { pt: "Em destaque", en: "Featured" },
  featured_tab_best: { pt: "Mais vendidos", en: "Best sellers" },
  featured_tab_voted: { pt: "Mais votados", en: "Most voted" },
  featured_tab_liked: { pt: "Mais gostados", en: "Most liked" },
  featured_aria: { pt: "Categorias em destaque", en: "Featured categories" },

  quality_title: { pt: "Qualidade e Processo", en: "Quality & Process" },
  quality_subtitle: {
    pt: "Do design à entrega: transparência em cada passo",
    en: "From design to delivery: transparency at every step",
  },
  quality_card1_title: { pt: "Design Colaborativo", en: "Collaborative design" },
  quality_card1_desc: {
    pt: "A comunidade vota e valida cada design antes de passar para produção.",
    en: "The community votes and validates each design before production.",
  },
  quality_card2_title: { pt: "Controlo de Qualidade", en: "Quality control" },
  quality_card2_desc: {
    pt: "Materiais premium e inspeção rigorosa garantem excelência em cada par.",
    en: "Premium materials and rigorous inspection ensure excellence in every pair.",
  },
  quality_card3_title: {
    pt: "Produção Transparente",
    en: "Transparent production",
  },
  quality_card3_desc: {
    pt: "Acompanha o processo de fabrico em tempo real, do início ao fim.",
    en: "Track manufacturing in real time, from start to finish.",
  },
  quality_card4_title: { pt: "Entrega Garantida", en: "Guaranteed delivery" },
  quality_card4_desc: {
    pt: "Envio seguro e rastreável para que os teus ténis cheguem perfeitos.",
    en: "Secure, trackable shipping so your sneakers arrive perfect.",
  },

  creators_eyebrow: { pt: "Para criadores", en: "For creators" },
  creators_title: { pt: "O que tu ganhas conosco", en: "What you get with us" },
  creators_sub: {
    pt: "Publica a tua ideia, deixa a comunidade decidir e transforma design em impacto (e receita).",
    en: "Publish your idea, let the community decide, and turn design into impact (and revenue).",
  },
  creators_cta_explore: { pt: "Começar a explorar", en: "Start exploring" },
  creators_fineprint: {
    pt: "Nota: esta é uma demo. Os valores e percentagens são ilustrativos.",
    en: "Note: this is a demo. Values and percentages are illustrative.",
  },

  shop_title: { pt: "Loja", en: "Shop" },
  shop_items: { pt: "itens", en: "items" },
  shop_tag: { pt: "Tag", en: "Tag" },
  shop_home: { pt: "Início", en: "Home" },
  shop_quick_tags: { pt: "Tags rápidas:", en: "Quick tags:" },
  shop_all: { pt: "Todos", en: "All" },
  shop_search_placeholder: { pt: "Pesquisar produtos…", en: "Search products…" },
  shop_search: { pt: "Pesquisar", en: "Search" },

  cart_title: { pt: "Carrinho", en: "Your cart" },
  cart_sub: {
    pt: "Revê os itens e avança para checkout (demo).",
    en: "Review items and proceed to checkout (demo).",
  },
  cart_continue: { pt: "Continuar a comprar", en: "Continue shopping" },

  footer_tagline: {
    pt: "Tu crias. Nós tornamos real. Uma vitrine demo para experimentar UX de e-commerce (sem pagamentos reais).",
    en: "You create. We make it real. A demo showcase to explore e-commerce UX (no real payments).",
  },
  footer_explore: { pt: "Explorar", en: "Explore" },
  footer_aeris: { pt: "Aeris", en: "Aeris" },
  footer_legal: { pt: "Legal", en: "Legal" },
  footer_contacts: { pt: "Contactos", en: "Contacts" },
  footer_quality: { pt: "Qualidade & Processo", en: "Quality & Process" },
  footer_privacy: { pt: "Privacidade", en: "Privacy" },
  footer_terms: { pt: "Termos", en: "Terms" },
  footer_cookies: { pt: "Cookies", en: "Cookies" },
  footer_note: {
    pt: "Loja demo feita para aprender. Sem afiliação com qualquer marca. Sem pagamentos reais.",
    en: "Demo shop built for learning. No affiliation with any brand. No real payments.",
  },
};

export function t(locale: Locale, key: keyof typeof I18N): string {
  return I18N[key][locale];
}

