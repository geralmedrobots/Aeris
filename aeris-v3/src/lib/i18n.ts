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
  nav_create: { pt: "Sobre Nós", en: "About Us" },
  nav_discover: { pt: "Descobrir", en: "Discover" },
  nav_design: { pt: "Design", en: "Design" },
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

  discover_title: { pt: "Descobrir", en: "Discover" },
  discover_designs: { pt: "designs", en: "designs" },
  discover_quick_filters: { pt: "Filtros rápidos:", en: "Quick filters:" },
  discover_filter_all: { pt: "Todos", en: "All" },
  discover_filter_voting: { pt: "Em votação", en: "Voting" },
  discover_filter_production: { pt: "Em produção", en: "In production" },
  discover_filter_completed: { pt: "Completados", en: "Completed" },
  discover_search_placeholder: { pt: "Pesquisar designs…", en: "Search designs…" },
  discover_search: { pt: "Pesquisar", en: "Search" },
  discover_by: { pt: "por", en: "by" },
  discover_vote: { pt: "Votar", en: "Vote" },
  discover_details: { pt: "Ver detalhes", en: "View details" },
  discover_empty_title: { pt: "Nenhum design encontrado", en: "No designs found" },
  discover_empty_message: { pt: "Tenta ajustar os filtros ou pesquisar por algo diferente.", en: "Try adjusting your filters or search for something else." },
  discover_empty_reset: { pt: "Ver todos os designs", en: "View all designs" },

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

  // Design Page
  design_badge: { pt: "Design Innovation Lab", en: "Design Innovation Lab" },
  design_hero_title1: { pt: "Criação Original", en: "Original Creation" },
  design_hero_title2: { pt: "Inovação Técnica", en: "Technical Innovation" },
  design_hero_subtitle: {
    pt: "Designs exclusivos com foco em viabilidade industrial, estética urbana contemporânea e proteção de propriedade intelectual. Cada conceito é desenvolvido para produção em escala global.",
    en: "Exclusive designs focused on industrial viability, contemporary urban aesthetics, and intellectual property protection. Each concept is developed for global-scale production.",
  },
  design_stat_original: { pt: "Original", en: "Original" },
  design_stat_colors: { pt: "Cores Máx.", en: "Max Colors" },
  design_stat_viability: { pt: "Viabilidade", en: "Viability" },

  design_principles_title: { pt: "Princípios de Design", en: "Design Principles" },
  design_principle1_title: { pt: "Inovação Industrial", en: "Industrial Innovation" },
  design_principle1_desc: {
    pt: "Designs viáveis para processos de estamparia, impressão e fabricação técnica em escala industrial.",
    en: "Viable designs for stamping, printing, and technical manufacturing processes at industrial scale.",
  },
  design_principle2_title: { pt: "Estética Urbana", en: "Urban Aesthetics" },
  design_principle2_desc: {
    pt: "Inspiração metropolitana asiática com tons escuros, padrões orgânicos e sofisticação contemporânea.",
    en: "Asian metropolitan inspiration with dark tones, organic patterns, and contemporary sophistication.",
  },
  design_principle3_title: { pt: "Propriedade Intelectual", en: "Intellectual Property" },
  design_principle3_desc: {
    pt: "100% original, sem referências a marcas ou obras protegidas. Pronto para registro e proteção legal.",
    en: "100% original, no references to protected brands or works. Ready for registration and legal protection.",
  },
  design_principle4_title: { pt: "Escalabilidade Global", en: "Global Scalability" },
  design_principle4_desc: {
    pt: "Designs pensados para produção internacional, com identidade forte e apelo universal.",
    en: "Designs intended for international production, with strong identity and universal appeal.",
  },

  design_concepts_title: { pt: "Conceitos Exclusivos", en: "Exclusive Concepts" },
  design_concepts_subtitle: {
    pt: "Cada design é desenvolvido com rigor técnico e validação industrial",
    en: "Each design is developed with technical rigor and industrial validation",
  },

  design_concept1_name: { pt: "Urban Matrix", en: "Urban Matrix" },
  design_concept1_category: { pt: "Metropolitan Collection", en: "Metropolitan Collection" },
  design_concept1_desc: {
    pt: "Padrão geométrico inspirado em circuitos urbanos e arquitetura contemporânea",
    en: "Geometric pattern inspired by urban circuits and contemporary architecture",
  },
  design_concept1_status: { pt: "Protótipo Validado", en: "Validated Prototype" },

  design_concept2_name: { pt: "Neo Flow", en: "Neo Flow" },
  design_concept2_category: { pt: "Organic Tech Series", en: "Organic Tech Series" },
  design_concept2_desc: {
    pt: "Padrão fluido com elementos orgânicos e técnicos integrados",
    en: "Fluid pattern with integrated organic and technical elements",
  },
  design_concept2_status: { pt: "Em Desenvolvimento", en: "In Development" },

  design_concept3_name: { pt: "Shadow Wave", en: "Shadow Wave" },
  design_concept3_category: { pt: "Dynamic Surface", en: "Dynamic Surface" },
  design_concept3_desc: {
    pt: "Ondulações assimétricas com gradientes técnicos suaves",
    en: "Asymmetric undulations with smooth technical gradients",
  },
  design_concept3_status: { pt: "Pronto para Produção", en: "Ready for Production" },

  design_palette: { pt: "Paleta:", en: "Palette:" },
  design_manufacturability: { pt: "Viabilidade Industrial", en: "Industrial Viability" },
  design_view_details: { pt: "Ver Detalhes Técnicos", en: "View Technical Details" },

  design_specs_title: { pt: "Especificações Técnicas", en: "Technical Specifications" },
  design_specs1_title: { pt: "Processos Compatíveis", en: "Compatible Processes" },
  design_specs1_1: { pt: "Estamparia digital de alta resolução", en: "High-resolution digital printing" },
  design_specs1_2: { pt: "Impressão offset e serigrafia", en: "Offset and screen printing" },
  design_specs1_3: { pt: "Aplicação em materiais técnicos", en: "Application on technical materials" },
  design_specs1_4: { pt: "Moldagem por injeção com textura", en: "Injection molding with texture" },

  design_specs2_title: { pt: "Requisitos Cromáticos", en: "Chromatic Requirements" },
  design_specs2_1: { pt: "Máximo 3 cores principais", en: "Maximum 3 main colors" },
  design_specs2_2: { pt: "Tons escuros predominantes", en: "Predominant dark tones" },
  design_specs2_3: { pt: "Gradientes suaves permitidos", en: "Smooth gradients allowed" },
  design_specs2_4: { pt: "Perfis de cor CMYK/Pantone", en: "CMYK/Pantone color profiles" },

  design_specs3_title: { pt: "Padrões & Texturas", en: "Patterns & Textures" },
  design_specs3_1: { pt: "Aplicação contínua sem emendas visíveis", en: "Continuous application without visible seams" },
  design_specs3_2: { pt: "Padrões orgânicos e geométricos", en: "Organic and geometric patterns" },
  design_specs3_3: { pt: "Repetição modular escalável", en: "Scalable modular repetition" },
  design_specs3_4: { pt: "Alta densidade de detalhe", en: "High detail density" },

  design_specs4_title: { pt: "Proteção Legal", en: "Legal Protection" },
  design_specs4_1: { pt: "Design 100% original", en: "100% original design" },
  design_specs4_2: { pt: "Documentação completa de autoria", en: "Complete authorship documentation" },
  design_specs4_3: { pt: "Pronto para registro de marca", en: "Ready for trademark registration" },
  design_specs4_4: { pt: "Sem conflitos de propriedade intelectual", en: "No intellectual property conflicts" },

  design_cta_title: { pt: "Pronto para Inovar?", en: "Ready to Innovate?" },
  design_cta_desc: {
    pt: "Explore nossos designs exclusivos e leve seus produtos ao próximo nível com identidade visual única e tecnicamente viável.",
    en: "Explore our exclusive designs and take your products to the next level with unique and technically viable visual identity.",
  },
  design_cta_shop: { pt: "Explorar Produtos", en: "Explore Products" },
  design_cta_create: { pt: "Criar Seu Design", en: "Create Your Design" },

  // About Us Page
  about_badge: { pt: "Sobre Nós", en: "About Us" },
  about_hero_title: {
    pt: "Transformando Criatividade em Realidade",
    en: "Transforming Creativity into Reality"
  },
  about_hero_subtitle: {
    pt: "Somos uma plataforma que conecta designers, criadores e comunidade para dar vida a produtos únicos e inovadores.",
    en: "We are a platform that connects designers, creators, and community to bring unique and innovative products to life.",
  },

  about_mission_title: { pt: "Nossa Missão", en: "Our Mission" },
  about_mission_text1: {
    pt: "Na Aeris, acreditamos que todos têm uma ideia brilhante esperando para ser descoberta. Nossa missão é democratizar o design e a produção, permitindo que criadores de todos os níveis transformem suas visões em produtos reais.",
    en: "At Aeris, we believe everyone has a brilliant idea waiting to be discovered. Our mission is to democratize design and production, allowing creators of all levels to transform their visions into real products.",
  },
  about_mission_text2: {
    pt: "Combinamos tecnologia de ponta, processos industriais sustentáveis e o poder da comunidade para criar uma nova forma de fazer produtos. Cada design é validado, refinado e produzido com excelência.",
    en: "We combine cutting-edge technology, sustainable industrial processes, and the power of community to create a new way of making products. Each design is validated, refined, and produced with excellence.",
  },
  about_stat_designs: { pt: "Designs Criados", en: "Designs Created" },
  about_stat_community: { pt: "Membros da Comunidade", en: "Community Members" },
  about_stat_satisfaction: { pt: "Satisfação", en: "Satisfaction" },

  about_values_title: { pt: "Nossos Valores", en: "Our Values" },
  about_values_subtitle: {
    pt: "Os princípios que guiam tudo o que fazemos",
    en: "The principles that guide everything we do",
  },

  about_value1_title: { pt: "Criatividade Sem Limites", en: "Unlimited Creativity" },
  about_value1_desc: {
    pt: "Acreditamos que a criatividade não deve ter barreiras. Fornecemos ferramentas e suporte para que qualquer pessoa possa criar.",
    en: "We believe creativity should have no barriers. We provide tools and support so anyone can create.",
  },
  about_value2_title: { pt: "Sustentabilidade", en: "Sustainability" },
  about_value2_desc: {
    pt: "Comprometidos com processos de produção responsáveis e materiais sustentáveis para proteger nosso planeta.",
    en: "Committed to responsible production processes and sustainable materials to protect our planet.",
  },
  about_value3_title: { pt: "Comunidade Primeiro", en: "Community First" },
  about_value3_desc: {
    pt: "Nossa comunidade é o coração de tudo. Valorizamos cada voz, voto e contribuição para criar produtos que todos amam.",
    en: "Our community is the heart of everything. We value every voice, vote, and contribution to create products everyone loves.",
  },
  about_value4_title: { pt: "Inovação Constante", en: "Constant Innovation" },
  about_value4_desc: {
    pt: "Buscamos sempre novas tecnologias e métodos para melhorar a experiência de criação e produção.",
    en: "We always seek new technologies and methods to improve the creation and production experience.",
  },

  about_team_title: { pt: "Nossa Equipe", en: "Our Team" },
  about_team_subtitle: {
    pt: "Conheça as pessoas que tornam tudo possível",
    en: "Meet the people who make it all possible",
  },
  about_team1_role: { pt: "CEO & Fundadora", en: "CEO & Founder" },
  about_team2_role: { pt: "Director de Design", en: "Design Director" },
  about_team3_role: { pt: "Head de Comunidade", en: "Community Head" },
  about_team4_role: { pt: "CTO", en: "CTO" },

  about_story_title: { pt: "Nossa História", en: "Our Story" },
  about_timeline1_title: { pt: "O Início", en: "The Beginning" },
  about_timeline1_desc: {
    pt: "A Aeris nasceu da visão de democratizar o design de produtos e dar voz aos criadores independentes.",
    en: "Aeris was born from the vision of democratizing product design and giving voice to independent creators.",
  },
  about_timeline2_title: { pt: "Primeira Produção", en: "First Production" },
  about_timeline2_desc: {
    pt: "Lançamos nosso primeiro produto criado pela comunidade, validando nosso modelo de co-criação.",
    en: "We launched our first community-created product, validating our co-creation model.",
  },
  about_timeline3_title: { pt: "Expansão Global", en: "Global Expansion" },
  about_timeline3_desc: {
    pt: "Expandimos para mercados internacionais, alcançando criadores em mais de 50 países.",
    en: "We expanded to international markets, reaching creators in over 50 countries.",
  },
  about_timeline4_title: { pt: "Inovação Contínua", en: "Continuous Innovation" },
  about_timeline4_desc: {
    pt: "Hoje, continuamos a inovar com novas tecnologias, processos sustentáveis e designs revolucionários.",
    en: "Today, we continue to innovate with new technologies, sustainable processes, and revolutionary designs.",
  },

  about_cta_title: { pt: "Faça Parte da Nossa Comunidade", en: "Join Our Community" },
  about_cta_desc: {
    pt: "Descubra designs incríveis criados pela comunidade ou comece a criar os seus próprios produtos únicos.",
    en: "Discover amazing community-created designs or start creating your own unique products.",
  },
  about_cta_discover: { pt: "Descobrir Designs", en: "Discover Designs" },
  about_cta_shop: { pt: "Explorar Loja", en: "Explore Shop" },
};

export function t(locale: Locale, key: keyof typeof I18N): string {
  return I18N[key][locale];
}
