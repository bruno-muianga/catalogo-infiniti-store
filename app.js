/**
 * ==========================================================================
 * INFINITY STORE — CATÁLOGO OFICIAL PANDORA
 * Coleções completas baseadas em pt.pandora.net:
 * Pulseiras, Anéis, Colares, Brincos, Pingentes (Contas & Pendentes)
 * ==========================================================================
 */

'use strict';

/**
 * Função inteligente de fallback e resolução de imagens:
 * Suporta automaticamente .jpg, .png, .jpeg e .webp quando o usuário coloca fotos
 */
window.handleImgError = function(img) {
  const currentSrc = img.getAttribute('src') || '';
  const retry = parseInt(img.dataset.retry || '0', 10);
  img.dataset.retry = (retry + 1).toString();

  if (retry === 0 && currentSrc.endsWith('.jpg')) {
    img.src = currentSrc.slice(0, -4) + '.png';
    return;
  }
  if (retry === 1 && currentSrc.endsWith('.png')) {
    img.src = currentSrc.slice(0, -4) + '.jpeg';
    return;
  }
  if (retry === 2 && currentSrc.endsWith('.jpeg')) {
    img.src = currentSrc.slice(0, -5) + '.webp';
    return;
  }

  // Fallback seguro de alta qualidade
  img.onerror = null;
  img.src = 'assets/ring_pink_heart.jpg';
};

// 1. CATÁLOGO DE JOIAS PANDORA (Sem Exibição de Preços)
const DEFAULT_CATALOG = [
  // --------------------------------------------------------------------------
  // 1. PULSEIRAS & BRACELETES (PANDORA MOMENTS, PANDORA ME, TIMELESS, STUDDED)
  // --------------------------------------------------------------------------
  {
    id: 101,
    name: "Pulseira com Tachas Pandora Moments (Studded Chain)",
    category: "pulseiras",
    categoryName: "Pulseiras",
    collection: "Pandora Moments",
    material: "prata-925",
    materialLabel: "Prata de Lei 925",
    badge: "Nova Coleção",
    price: 2500,
    description: "A inovadora corrente de tachas piramidais da Pandora. Uma textura marcante e flexível esculpida em prata de lei 925 com fecho infinito de esfera cravada, dividida em três secções para pendentes e contas.",
    specs: [
      "Coleção: Pandora Moments Studded",
      "Metal: Prata de Lei 925",
      "Malha: Corrente com Tachas Piramidais",
      "Fecho: Esférico com Infinito em Relevo",
      "Tamanhos: 16cm, 17cm, 18cm, 19cm, 20cm, 21cm"
    ],
    imgPrimary: "assets/pulseiras/pulseira-studded.jpg",
    imgAlt: "assets/pulseiras/pulseira-1.jpg"
  },
  {
    id: 102,
    name: "Pulseira Moments Infinity Knots (Nó do Infinito)",
    category: "pulseiras",
    categoryName: "Pulseiras",
    collection: "Pandora Moments",
    material: "prata-925",
    materialLabel: "Prata de Lei 925",
    badge: "Amor Eterno",
    price: 2500,
    description: "Inspirada no nó que nunca se desfaz. Apresenta o icónico fecho com nó do infinito em relevo assimétrico e malha snake flexível em prata 925.",
    specs: [
      "Símbolo: Nó do Infinito",
      "Metal: Prata de Lei 925",
      "Fecho: Sistema de Encaixe com Nó Esculpido",
      "Compatibilidade: Todas as contas Moments"
    ],
    imgPrimary: "assets/pulseiras/pulseira-infinity-knots.jpg",
    imgAlt: "assets/pulseiras/pulseira-2.jpg"
  },
  {
    id: 103,
    name: "Pulseira Coração com Pedra Tripla Pandora Timeless",
    category: "pulseiras",
    categoryName: "Pulseiras",
    collection: "Pandora Timeless",
    material: "cristais",
    materialLabel: "Prata 925 & Zircónias",
    badge: "Timeless",
    price: 2500,
    description: "Corrente delicada em prata de lei 925 com três zircónias em corte coração no centro e fecho deslizante com esfera de silicone para ajuste sob medida.",
    specs: [
      "Coleção: Pandora Timeless",
      "Pedras: 3 Zircónias Cúbicas Corte Coração",
      "Fecho: Deslizante Ajustável",
      "Comprimento: Até 25cm"
    ],
    imgPrimary: "assets/pulseiras/pulseira-coracao-pedra-tripla.jpg",
    imgAlt: "assets/pulseiras/pulseira-3.jpg"
  },
  {
    id: 104,
    name: "Pulseira Malha Snake com Fecho Coração em Revestimento de Ouro 14k",
    category: "pulseiras",
    categoryName: "Pulseiras",
    collection: "Pandora Moments",
    material: "ouro-amarelo",
    materialLabel: "Revestimento de Ouro 14k",
    badge: "Ouro Radiante",
    price: 2500,
    description: "O clássico modelo Moments com requintado revestimento a ouro 14k em toda a malha snake e fecho de coração polido com gravação oficial Pandora.",
    specs: [
      "Coleção: Pandora Moments Ouro",
      "Metal: Revestimento de Ouro 14k",
      "Fecho: Coração de Pressão Seguro",
      "Tamanhos: 17cm, 18cm, 19cm, 20cm"
    ],
    imgPrimary: "assets/pulseiras/pulseira-ouro-fecho-coracao.jpg",
    imgAlt: "assets/pulseiras/pulseira-4.jpg"
  },
  {
    id: 105,
    name: "Pulseira de Corrente de Caixa com Cordão Ajustável",
    category: "pulseiras",
    categoryName: "Pulseiras",
    collection: "Pandora Moments",
    material: "prata-925",
    materialLabel: "Prata 925 & Tecido",
    badge: "Versátil",
    price: 2500,
    description: "Design casual e moderno que combina corrente veneziana em prata de lei com cordão acetinado durável e terminais em prata gravados.",
    specs: [
      "Estilo: Cordão & Corrente de Caixa",
      "Metal: Prata 925",
      "Ajuste: Deslizante tipo macramé",
      "Capacidade: Até 6 contas Moments"
    ],
    imgPrimary: "assets/pulseiras/pulseira-corrente-caixa.jpg",
    imgAlt: "assets/pulseiras/pulseira-5.jpg"
  },
  {
    id: 106,
    name: "Pulseira de Couro Duplo Trançado Preto Pandora Moments",
    category: "pulseiras",
    categoryName: "Pulseiras",
    collection: "Pandora Moments",
    material: "prata-925",
    materialLabel: "Couro Legítimo & Prata 925",
    badge: "Couro Genuíno",
    price: 2500,
    description: "Couro legítimo trançado em duas voltas com fecho esférico em prata de lei 925. Pode ser usada como pulseira de duas voltas ou como gargantilha choker.",
    specs: [
      "Material: Couro Genuíno Preto Trançado",
      "Fecho: Esfera em Prata 925 de Encaixe",
      "Uso Duplo: Pulseira de 2 voltas ou Colar Choker"
    ],
    imgPrimary: "assets/pulseiras/pulseira-couro-trancado.jpg",
    imgAlt: "assets/pulseiras/pulseira-6.jpg"
  },
  {
    id: 107,
    name: "Pulseira Malha Snake Pandora Moments com Fecho Borboleta Azul",
    category: "pulseiras",
    categoryName: "Pulseiras",
    collection: "Pandora Garden",
    material: "cristais",
    materialLabel: "Prata 925 & Esmalte",
    badge: "Primavera",
    price: 2500,
    description: "Fecho em formato de borboleta em voo com asas esmaltadas em degradê azul celeste e zircónias transparentes cravejadas nas pontas.",
    specs: [
      "Coleção: Pandora Garden",
      "Detalhes: Esmalte Azul Noite Aplicado à Mão",
      "Fecho: Borboleta Articulada com Trava"
    ],
    imgPrimary: "assets/pulseiras/pulseira-borboleta-azul.jpg",
    imgAlt: "assets/pulseiras/pulseira-7.jpg"
  },
  {
    id: 108,
    name: "Pulseira com Coroa O Pandora Signature",
    category: "pulseiras",
    categoryName: "Pulseiras",
    collection: "Pandora Signature",
    material: "prata-925",
    materialLabel: "Prata de Lei 925",
    badge: "Signature",
    price: 2500,
    description: "Apresenta o icónico fecho circular com a coroa O da Pandora gravada e aro cravejado em micro pavé de cristais reluzentes.",
    specs: [
      "Coleção: Pandora Signature",
      "Símbolo: Coroa O Pandora Cravejada",
      "Metal: Prata de Lei 925"
    ],
    imgPrimary: "assets/pulseiras/pulseira-coroa-signature.jpg",
    imgAlt: "assets/pulseiras/pulseira-8.jpg"
  },
  {
    id: 109,
    name: "Pulseira Malha Snake Pandora Moments com Fecho Coração Prata 925",
    category: "pulseiras",
    categoryName: "Pulseiras",
    collection: "Pandora Moments",
    material: "prata-925",
    materialLabel: "Prata de Lei 925",
    badge: "Ícone Pandora",
    price: 2500,
    description: "O clássico supremo da Pandora. Confeccionada em prata de lei 925 com a icónica malha snake flexível e fecho em formato de coração gravado com a assinatura Pandora.",
    specs: [
      "Coleção: Pandora Moments",
      "Metal: Prata de Lei 925 Maciça",
      "Fecho: Coração de Pressão Seguro"
    ],
    imgPrimary: "assets/pulseiras/pulseira-moments-fecho-coracao.jpg",
    imgAlt: "assets/pulseiras/pulseira-9.jpg"
  },
  {
    id: 110,
    name: "Bracelete Rígido Pandora Moments com Fecho Barril",
    category: "pulseiras",
    categoryName: "Pulseiras",
    collection: "Pandora Moments",
    material: "prata-925",
    materialLabel: "Prata de Lei 925",
    badge: "Mais Vendido",
    price: 2500,
    description: "Bracelete rígido estruturado em prata de lei 925 com o tradicional fecho cilíndrico tipo barril gravado Pandora.",
    specs: [
      "Metal: Prata 925 Polida",
      "Design: Estrutura Rígida com Terminais Fixos",
      "Fecho: Barril de Pressão"
    ],
    imgPrimary: "assets/pulseiras/bracelete-rigido-barril.jpg",
    imgAlt: "assets/pulseiras/pulseira-10.jpg"
  },
  {
    id: 111,
    name: "Pulseira Malha Snake Pandora Moments Revestida a Ouro Rosa 14k",
    category: "pulseiras",
    categoryName: "Pulseiras",
    collection: "Pandora Moments",
    material: "ouro-rose",
    materialLabel: "Ouro Rosa 14k",
    badge: "Edição Especial",
    price: 2500,
    description: "Acabamento luminoso numa liga única de metais com revestimento nobre a ouro rosa 14k com fecho esférico contrastante.",
    specs: [
      "Coleção: Pandora Moments Ouro Rosa",
      "Metal: Revestimento de Ouro Rosa 14k",
      "Malha: Snake Articulada"
    ],
    imgPrimary: "assets/pulseiras/pulseira-ouro-rosa.jpg",
    imgAlt: "assets/pulseiras/pulseira-11.jpg"
  },
  {
    id: 112,
    name: "Pulseira de Elos Pandora ME",
    category: "pulseiras",
    categoryName: "Pulseiras",
    collection: "Pandora ME",
    material: "prata-925",
    materialLabel: "Prata de Lei 925",
    badge: "Tendência",
    price: 2500,
    description: "Corrente de elos largos em prata 925 com elos articulados que podem ser abertos para personalizar com mini-medalhões e links.",
    specs: [
      "Coleção: Pandora ME",
      "Metal: Prata de Lei 925",
      "Fecho: Mosquetão estilizado"
    ],
    imgPrimary: "assets/pulseiras/pulseira-elos-pandora-me.jpg",
    imgAlt: "assets/pulseiras/pulseira-12.jpg"
  },

  // --------------------------------------------------------------------------
  // 2. ANÉIS (PANDORA TIMELESS, MOMENTS, SIGNATURE)
  // --------------------------------------------------------------------------
  {
    id: 206,
    name: "Anel Coração Elevado Rosa Pandora Timeless",
    category: "aneis",
    categoryName: "Anéis",
    collection: "Pandora Timeless",
    material: "prata-925",
    materialLabel: "Prata de Lei 925",
    badge: "Novo",
    price: 2500,
    description: "Anel de coração elevado em prata de lei 925 com uma zircónia rosa em corte coração no centro, rodeada por um halo de zircónias brancas cintilantes. O aro fino é pavimentado com cristais que refletem luz em todos os ângulos.",
    specs: [
      "Coleção: Pandora Timeless Heart",
      "Metal: Prata de Lei 925",
      "Pedra Central: Zircónia Rosa Corte Coração",
      "Cravação: Halo de Zircónias Brancas",
      "Aros Disponíveis: 48, 50, 52, 54, 56, 58"
    ],
    imgPrimary: "assets/aneis/anel-coracao-rosa.jpg",
    imgAlt: "assets/aneis/anel-1.jpg"
  },
  {
    id: 207,
    name: "Anel Coração Elevado Rosa Pavê Pandora Timeless",
    category: "aneis",
    categoryName: "Anéis",
    collection: "Pandora Timeless",
    material: "cristais",
    materialLabel: "Prata 925 & Zircónia Rosa",
    badge: "Amor Radiante",
    price: 2550,
    description: "Variante premium do anel de coração Pandora com acabamento pavê completo no aro e pedra central rosa mais intensa. Ideal para momentos especiais e presentes de amor inesquecíveis.",
    specs: [
      "Coleção: Pandora Timeless Heart Pavê",
      "Metal: Prata de Lei 925",
      "Pedra: Zircónia Rosa Intenso em Coração",
      "Aro: Cravejado em Pavê Total",
      "Gravação: S925 ALE Pandora"
    ],
    imgPrimary: "assets/aneis/anel-coracao-rosa-pave.jpg",
    imgAlt: "assets/aneis/anel-2.jpg"
  },
  {
    id: 208,
    name: "Anel Coração Elevado Azul Pandora Timeless",
    category: "aneis",
    categoryName: "Anéis",
    collection: "Pandora Timeless",
    material: "cristais",
    materialLabel: "Prata 925 & Zircónia Azul",
    badge: "Edição Especial",
    price: 2600,
    description: "Anel de coração azul profundo em prata de lei 925. A zircónia central em azul oceano intenso é rodeada por um halo de diamantes CZ brancos e o aro é finamente adornado com cristais pavê para um brilho total.",
    specs: [
      "Coleção: Pandora Timeless Blue Heart",
      "Metal: Prata de Lei 925",
      "Pedra Central: Zircónia Azul Oceano Corte Coração",
      "Cravação: Halo + Pavê no Aro",
      "Aros Disponíveis: 48, 50, 52, 54, 56, 58"
    ],
    imgPrimary: "assets/aneis/anel-coracao-azul.jpg",
    imgAlt: "assets/aneis/anel-3.jpg"
  },
  {
    id: 209,
    name: "Anel Sol & Lua Bicolor Pandora Celestial",
    category: "aneis",
    categoryName: "Anéis",
    collection: "Pandora Celestial",
    material: "ouro-amarelo",
    materialLabel: "Bicolor (Ouro 14k & Prata 925)",
    badge: "Celestial",
    price: 2700,
    description: "Um anel de design único e audacioso que une dois mundos: o sol dourado e a lua prateada num mesmo medalhão circular estilo yin-yang. A metade em ouro 14k traz o sol gravado com raios detalhados; a metade em prata 925 apresenta a lua crescente e estrelas cintilantes.",
    specs: [
      "Coleção: Pandora Celestial",
      "Metal: Revestimento de Ouro 14k + Prata de Lei 925",
      "Design: Bicolor Sol & Lua Yin-Yang",
      "Gravação: Pandora + S925 ALE",
      "Símbolo: Equilíbrio Dia & Noite"
    ],
    imgPrimary: "assets/aneis/anel-sol-lua.jpg",
    imgAlt: "assets/aneis/anel-4.jpg"
  },
  {
    id: 210,
    name: "Anel Floco de Neve Cintilante Pandora Sparkling",
    category: "aneis",
    categoryName: "Anéis",
    collection: "Pandora Sparkling",
    material: "cristais",
    materialLabel: "Prata 925 & Cristais Marquise",
    badge: "Exclusivo",
    price: 2650,
    description: "Um anel que celebra a magia do inverno com um floco de neve esculpido em cristais marquise brancos ao redor de um cristal azul central. Oito pétalas de cristal em corte marquise irradiam luz em todas as direções, criando um efeito deslumbrante como neve ao sol.",
    specs: [
      "Coleção: Pandora Sparkling Snowflake",
      "Metal: Prata de Lei 925",
      "Pedra Central: Cristal Azul Redondo",
      "Pétalas: 8 Cristais Marquise Brancos",
      "Aro: Micro Pavê de Zircónias"
    ],
    imgPrimary: "assets/aneis/anel-floco-neve.jpg",
    imgAlt: "assets/aneis/anel-5.jpg"
  },
  {
    id: 201,
    name: "Anel Coroa Tiara de Princesa Brilhante",
    category: "aneis",
    categoryName: "Anéis",
    collection: "Pandora Moments",
    material: "prata-925",
    materialLabel: "Prata de Lei 925",
    badge: "Mais Procurado",
    price: 2500,
    description: "O anel mais desejado da Pandora. Inspirado numa tiara real de conto de fadas, esculpido em prata de lei 925 com microcravejamento de zircónias cúbicas e pequenas esferas no topo das pontas.",
    specs: [
      "Coleção: Pandora Princess Tiara",
      "Metal: Prata de Lei 925",
      "Pedras: Micro Zircónias Cúbicas",
      "Aros Disponíveis: 48, 50, 52, 54, 56, 58, 60"
    ],
    imgPrimary: "assets/aneis/anel-tiara-princesa.jpg",
    imgAlt: "assets/aneis/anel-6.jpg"
  },
  {
    id: 202,
    name: "Anel Solitário Rosa Radiante Pandora Timeless",
    category: "aneis",
    categoryName: "Anéis",
    collection: "Pandora Timeless",
    material: "ouro-rose",
    materialLabel: "Ouro Rosa 14k",
    badge: "Assinatura",
    price: 2500,
    description: "Uma zircónia cúbica central elevada em garras clássicas, envolvida por um aro fino e polido com acabamento a ouro rosa 14k. O solitário perfeito para ocasiões inesquecíveis.",
    specs: [
      "Coleção: Pandora Timeless Elegance",
      "Metal: Revestimento de Ouro Rosa 14k",
      "Pedra Central: Zircónia 6mm Lapidação Redonda",
      "Cravação: 4 Garras Elevadas"
    ],
    imgPrimary: "assets/aneis/anel-solitario-rosa.jpg",
    imgAlt: "assets/aneis/anel-7.jpg"
  },
  {
    id: 203,
    name: "Anel Onda Polida e Pavé Pandora",
    category: "aneis",
    categoryName: "Anéis",
    collection: "Pandora Timeless",
    material: "prata-925",
    materialLabel: "Prata de Lei 925",
    badge: "Lançamento",
    price: 2500,
    description: "Inspirado no movimento orgânico das ondas oceânicas. Apresenta uma metade com acabamento liso e espelhado e a outra metade cintilante com pavé de zircónias.",
    specs: [
      "Metal: Prata de Lei 925",
      "Cravação: Pavé Frontal",
      "Ideal para: Empilhar com outros anéis de onda"
    ],
    imgPrimary: "assets/aneis/anel-onda-pave.jpg",
    imgAlt: "assets/aneis/anel-8.jpg"
  },
  {
    id: 204,
    name: "Anel Infinito Entrelaçado Pandora",
    category: "aneis",
    categoryName: "Anéis",
    collection: "Pandora Moments",
    material: "prata-925",
    materialLabel: "Prata de Lei 925",
    badge: "Amor Eterno",
    price: 2500,
    description: "Símbolos do infinito entrelaçados em padrão contínuo ao redor de todo o aro, celebrando laços eternos e amizades incondicionais.",
    specs: [
      "Símbolo: Infinito Contínuo 360°",
      "Metal: Prata 925 Maciça",
      "Acabamento: Polido e Hipoalergénico"
    ],
    imgPrimary: "assets/aneis/anel-infinito.jpg",
    imgAlt: "assets/aneis/anel-9.jpg"
  },
  {
    id: 205,
    name: "Aliança Três Aros Entrelaçados Pandora Crossover",
    category: "aneis",
    categoryName: "Anéis",
    collection: "Pandora Signature",
    material: "ouro-rose",
    materialLabel: "Bicolor (Prata & Ouro Rosa)",
    badge: "Destaque",
    price: 2500,
    description: "Três aros sobrepostos que se cruzam harmoniosamente: um em prata de lei 925 lisa, um com banho de ouro rosa e o terceiro cravejado com pavé de cristais.",
    specs: [
      "Coleção: Pandora Signature",
      "Estilo: Bicolor Crossover",
      "Pedras: Zircónias Cúbicas Transparentes"
    ],
    imgPrimary: "assets/aneis/anel-tres-aros.jpg",
    imgAlt: "assets/aneis/anel-10.jpg"
  },

  // --------------------------------------------------------------------------
  // 3. COLARES & GARGANTILHAS (PANDORA TIMELESS, SIGNATURE, MOMENTS)
  // --------------------------------------------------------------------------
  {
    id: 301,
    name: "Colar com Pendente Círculo Pavé Pandora Timeless",
    category: "colares",
    categoryName: "Colares",
    collection: "Pandora Timeless",
    material: "prata-925",
    materialLabel: "Prata de Lei 925",
    badge: "Essencial",
    price: 2500,
    description: "Pendente circular de dupla face em prata de lei 925, com uma face em pavé reluzente de zircónias e o verso vazado com corações comemorativos. Acompanha corrente ajustável.",
    specs: [
      "Coleção: Pandora Timeless Circle",
      "Corrente: Ajustável em 3 comprimentos (38cm, 42cm, 45cm)",
      "Pedras: Zircónia Cúbica Micro Pavé",
      "Metal: Prata de Lei 925"
    ],
    imgPrimary: "assets/colares/colar-circulo-pave.jpg",
    imgAlt: "assets/colares/colar-1.jpg"
  },
  {
    id: 302,
    name: "Colar Ponto de Luz Solitário em Prata 925",
    category: "colares",
    categoryName: "Colares",
    collection: "Pandora Timeless",
    material: "prata-925",
    materialLabel: "Prata de Lei 925",
    badge: "Mais Vendido",
    price: 2500,
    description: "Um ponto de luz solitário que irradia luminosidade pura sobre o colo. Cravação clássica de 4 garras segurando uma zircónia de lapidação brilhante.",
    specs: [
      "Pedra: Zircónia Cúbica Transparente 5mm",
      "Corrente: Veneziana Fina 45cm",
      "Fecho: Mosquetão com pingente de coroa Pandora"
    ],
    imgPrimary: "assets/colares/colar-ponto-de-luz.jpg",
    imgAlt: "assets/colares/colar-2.jpg"
  },
  {
    id: 303,
    name: "Colar com Pendente Árvore da Família Pandora",
    category: "colares",
    categoryName: "Colares",
    collection: "Pandora Moments",
    material: "ouro-rose",
    materialLabel: "Ouro Rosa 14k & Prata",
    badge: "Família",
    price: 2500,
    description: "Medalhão vazado com uma árvore genealógica estilizada em ouro rosa 14k, com pequenas folhas decoradas com zircónias e detalhes em filigrana de prata.",
    specs: [
      "Significado: Raízes, União e Família",
      "Metal: Combinação Bicolor Prata 925 e Ouro Rosa 14k",
      "Diâmetro do Pendente: 18mm"
    ],
    imgPrimary: "assets/colares/colar-arvore-familia.jpg",
    imgAlt: "assets/colares/colar-3.jpg"
  },
  {
    id: 304,
    name: "Colar Halo Quadrado Brilhante Pandora Timeless",
    category: "colares",
    categoryName: "Colares",
    collection: "Pandora Timeless",
    material: "cristais",
    materialLabel: "Prata 925 & Zircónias",
    badge: "Elegância",
    price: 2500,
    description: "Inspirado nas peças vintage de alta joalharia. Apresenta uma gema central com corte cushion cercada por uma auréola quadrada de zircónias minúsculas.",
    specs: [
      "Lapidação: Cushion Cut com Halo Quadrado",
      "Metal: Prata de Lei 925",
      "Comprimento: 45cm regulável"
    ],
    imgPrimary: "assets/colares/colar-halo-quadrado.jpg",
    imgAlt: "assets/colares/colar-4.jpg"
  },
  {
    id: 305,
    name: "Colar Coração Elevado Pandora Timeless",
    category: "colares",
    categoryName: "Colares",
    collection: "Pandora Timeless",
    material: "cristais",
    materialLabel: "Prata 925 & Zircónias",
    badge: "Romântico",
    price: 2500,
    description: "Pendente em formato de coração elevado cravado com zircónia cintilante e aro pavé em prata de lei 925 com corrente ajustável.",
    specs: [
      "Coleção: Pandora Timeless Heart",
      "Metal: Prata de Lei 925",
      "Pedras: Zircónias Cúbicas de Lapidação Coração",
      "Comprimento: 45cm regulável"
    ],
    imgPrimary: "assets/colares/colar-coracao-elevado.jpg",
    imgAlt: "assets/colares/colar-5.jpg"
  },
  {
    id: 306,
    name: "Colar com Pendente Infinito Brilhante",
    category: "colares",
    categoryName: "Colares",
    collection: "Pandora Moments",
    material: "prata-925",
    materialLabel: "Prata de Lei 925",
    badge: "Amor Eterno",
    price: 2500,
    description: "Símbolo do infinito com metade cravada em zircónias transparentes e metade em prata polida, simbolizando laços indestrutíveis.",
    specs: [
      "Símbolo: Nó do Infinito",
      "Metal: Prata de Lei 925",
      "Comprimento: Ajustável em 3 níveis (38cm, 42cm, 45cm)"
    ],
    imgPrimary: "assets/colares/colar-infinito.jpg",
    imgAlt: "assets/colares/colar-6.jpg"
  },
  {
    id: 307,
    name: "Colar com Pendente Pavé em Ouro Rosa 14k",
    category: "colares",
    categoryName: "Colares",
    collection: "Pandora Moments",
    material: "ouro-rose",
    materialLabel: "Ouro Rosa 14k",
    badge: "Dourado Nobre",
    price: 2500,
    description: "Pendente requintado em revestimento de ouro rosa 14k cravejado com pavé reluzente e corrente de elos finos com fecho mosquetão.",
    specs: [
      "Metal: Revestimento de Ouro Rosa 14k",
      "Pedras: Zircónias Cúbicas Micro Pavé",
      "Comprimento: 45cm regulável"
    ],
    imgPrimary: "assets/colares/colar-circulo-ouro-rose.jpg",
    imgAlt: "assets/colares/colar-7.jpg"
  },
  {
    id: 308,
    name: "Colar de Corrente de Elos Pandora ME",
    category: "colares",
    categoryName: "Colares",
    collection: "Pandora ME",
    material: "prata-925",
    materialLabel: "Prata de Lei 925",
    badge: "Urbano & Trendy",
    price: 2500,
    description: "Corrente de elos grossos em prata de lei 925 com elos de abrir para personalizar com mini pendentes e medalhões Pandora ME.",
    specs: [
      "Coleção: Pandora ME",
      "Metal: Prata de Lei 925",
      "Comprimento: 45cm com elos personalizáveis"
    ],
    imgPrimary: "assets/colares/colar-elos-pandora-me.jpg",
    imgAlt: "assets/colares/colar-8.jpg"
  },
  {
    id: 309,
    name: "Colar Gota Radiante Pandora Timeless",
    category: "colares",
    categoryName: "Colares",
    collection: "Pandora Timeless",
    material: "cristais",
    materialLabel: "Prata 925 & Zircónias",
    badge: "Elegância Clássica",
    price: 2500,
    description: "Pendente de gota facetada cercado por uma auréola de micro zircónias brilhantes, refletindo luz a cada movimento.",
    specs: [
      "Pedra: Gota Facetada (Pear Cut)",
      "Metal: Prata de Lei 925",
      "Comprimento: 45cm ajustável"
    ],
    imgPrimary: "assets/colares/colar-gota-radiante.jpg",
    imgAlt: "assets/colares/colar-9.jpg"
  },
  {
    id: 310,
    name: "Colar com Pérola Barroca de Cultura Pandora",
    category: "colares",
    categoryName: "Colares",
    collection: "Pandora Moments",
    material: "prata-925",
    materialLabel: "Prata 925 & Pérola",
    badge: "Alta Joalharia",
    price: 2500,
    description: "Pérola de cultura de água doce natural suspensa num pendente delicado em prata de lei 925 polida.",
    specs: [
      "Pérola: Pérola Natural de Cultura de Água Doce",
      "Metal: Prata de Lei 925",
      "Comprimento: 45cm regulável"
    ],
    imgPrimary: "assets/colares/colar-perola-cultura.jpg",
    imgAlt: "assets/colares/colar-10.jpg"
  },

  // --------------------------------------------------------------------------
  // 4. BRINCOS (PANDORA TIMELESS, MOMENTS, SIGNATURE)
  // --------------------------------------------------------------------------
  {
    id: 401,
    name: "Brincos de Espigão Coração Brilhante Pandora Timeless",
    category: "brincos",
    categoryName: "Brincos",
    collection: "Pandora Timeless",
    material: "prata-925",
    materialLabel: "Prata de Lei 925",
    badge: "Clássico",
    price: 2500,
    description: "Brincos de botão em formato de coração em prata de lei 925, cada um cravado com uma zircónia em corte coração e aro perolado.",
    specs: [
      "Coleção: Pandora Timeless Heart",
      "Metal: Prata de Lei 925",
      "Fecho: Espigão com Tarracha Anatómica",
      "Dimensões: 6mm x 6mm"
    ],
    imgPrimary: "assets/brincos/brinco-1.jpg",
    imgAlt: "assets/brincos/brinco-1.jpg"
  },
  {
    id: 402,
    name: "Brincos de Argola Pavé em Ouro Rosa 14k",
    category: "brincos",
    categoryName: "Brincos",
    collection: "Pandora Moments",
    material: "ouro-rose",
    materialLabel: "Ouro Rosa 14k",
    badge: "Mais Procurado",
    price: 2500,
    description: "Argolas clássicas de 15mm com fecho click articulado, cravejadas em pavé na parte frontal e interna para brilho total em qualquer ângulo.",
    specs: [
      "Diâmetro: 15mm",
      "Metal: Revestimento de Ouro Rosa 14k",
      "Fecho: Click Invisível com Mola Segura"
    ],
    imgPrimary: "assets/brincos/brinco-2.jpg",
    imgAlt: "assets/brincos/brinco-2.jpg"
  },
  {
    id: 403,
    name: "Brincos de Argola Dupla Pandora Signature",
    category: "brincos",
    categoryName: "Brincos",
    collection: "Pandora Signature",
    material: "prata-925",
    materialLabel: "Prata de Lei 925",
    badge: "Design Geométrico",
    price: 2500,
    description: "Dois círculos interligados em prata 925, um com zircónias pavé cintilantes e outro com o logotipo gravado da Pandora.",
    specs: [
      "Coleção: Pandora Signature",
      "Metal: Prata 925",
      "Estilo: Círculos Entrelaçados"
    ],
    imgPrimary: "assets/brincos/brinco-3.jpg",
    imgAlt: "assets/brincos/brinco-3.jpg"
  },
  {
    id: 404,
    name: "Brincos Pendentes Gota Radiante Pandora",
    category: "brincos",
    categoryName: "Brincos",
    collection: "Pandora Timeless",
    material: "cristais",
    materialLabel: "Prata 925 & Zircónias",
    badge: "Festa & Gala",
    price: 2500,
    description: "Gotas de zircónia facetadas suspensas numa base de espigão cravejada, conferindo movimento fluido e reflexos luminosos.",
    specs: [
      "Formato: Gota Facetada (Pear Cut)",
      "Metal: Prata de Lei 925",
      "Comprimento Total: 28mm"
    ],
    imgPrimary: "assets/brincos/brinco-4.jpg",
    imgAlt: "assets/brincos/brinco-4.jpg"
  },
  {
    id: 405,
    name: "Brincos de Argola Infinito Pandora Moments",
    category: "brincos",
    categoryName: "Brincos",
    collection: "Pandora Moments",
    material: "prata-925",
    materialLabel: "Prata de Lei 925",
    badge: "Amor Eterno",
    price: 2500,
    description: "Argolas assimétricas com o formato do símbolo infinito esculpido em prata de lei 925 polida com fecho articulado seguro.",
    specs: [
      "Símbolo: Nó do Infinito",
      "Metal: Prata de Lei 925",
      "Fecho: Articulado Seguro"
    ],
    imgPrimary: "assets/brincos/brinco-5.jpg",
    imgAlt: "assets/brincos/brinco-5.jpg"
  },
  {
    id: 406,
    name: "Brincos de Espigão Ponto de Luz Solitário",
    category: "brincos",
    categoryName: "Brincos",
    collection: "Pandora Timeless",
    material: "cristais",
    materialLabel: "Prata 925 & Zircónias",
    badge: "Brilho Puro",
    price: 2500,
    description: "Clássicos brincos solitários com cravação em 4 garras segurando zircónias cúbicas de lapidação brilhante.",
    specs: [
      "Pedra: Zircónia Cúbica Lapidação Redonda",
      "Metal: Prata de Lei 925",
      "Fecho: Espigão com Tarracha"
    ],
    imgPrimary: "assets/brincos/brinco-6.jpg",
    imgAlt: "assets/brincos/brinco-6.jpg"
  },
  {
    id: 407,
    name: "Brincos de Argola Pequena com Pavé em Prata 925",
    category: "brincos",
    categoryName: "Brincos",
    collection: "Pandora Timeless",
    material: "prata-925",
    materialLabel: "Prata de Lei 925",
    badge: "Delicado",
    price: 2500,
    description: "Argolas compactas huggie com fileira frontal de micro zircónias cravadas em pavé, ideais para o dia a dia ou segundo furo.",
    specs: [
      "Diâmetro: 11mm",
      "Metal: Prata de Lei 925",
      "Pedras: Micro Pavé de Zircónias"
    ],
    imgPrimary: "assets/brincos/brinco-7.jpg",
    imgAlt: "assets/brincos/brinco-7.jpg"
  },
  {
    id: 408,
    name: "Brincos Pendentes Halo Redondo Timeless",
    category: "brincos",
    categoryName: "Brincos",
    collection: "Pandora Timeless",
    material: "cristais",
    materialLabel: "Prata 925 & Zircónias",
    badge: "Elegância Clássica",
    price: 2500,
    description: "Pendente circular de zircónia facetada envolvida por auréola brilhante em base de prata de lei 925.",
    specs: [
      "Lapidação: Brilliant Cut com Halo",
      "Metal: Prata de Lei 925",
      "Fecho: Gancho com Trava"
    ],
    imgPrimary: "assets/brincos/brinco-8.jpg",
    imgAlt: "assets/brincos/brinco-8.jpg"
  },
  {
    id: 409,
    name: "Brincos de Espigão Nó do Infinito em Prata",
    category: "brincos",
    categoryName: "Brincos",
    collection: "Pandora Moments",
    material: "prata-925",
    materialLabel: "Prata de Lei 925",
    badge: "Símbolos",
    price: 2500,
    description: "Design moderno em espigão com entrelaçamento do infinito em prata polida, simbolizando conexão e afeto.",
    specs: [
      "Símbolo: Nó do Infinito",
      "Metal: Prata de Lei 925",
      "Dimensões: 7mm x 4mm"
    ],
    imgPrimary: "assets/brincos/brinco-9.jpg",
    imgAlt: "assets/brincos/brinco-9.jpg"
  },
  {
    id: 410,
    name: "Brincos de Argola com Revestimento em Ouro 14k",
    category: "brincos",
    categoryName: "Brincos",
    collection: "Pandora Moments",
    material: "ouro-amarelo",
    materialLabel: "Revestimento de Ouro 14k",
    badge: "Ouro Radiante",
    price: 2500,
    description: "Argolas clássicas e elegantes com acabamento espelhado em revestimento de ouro 14k de alta durabilidade.",
    specs: [
      "Metal: Revestimento de Ouro 14k",
      "Diâmetro: 16mm",
      "Fecho: Click Articulado"
    ],
    imgPrimary: "assets/brincos/brinco-10.jpg",
    imgAlt: "assets/brincos/brinco-10.jpg"
  },

  // --------------------------------------------------------------------------
  // 5. PINGENTES & CONTAS (PANDORA MOMENTS, MURANO, DISNEY, SYMBOLS)
  // --------------------------------------------------------------------------
  {
    id: 501,
    name: "Conta Pendente Coração Divisível Amor de Mãe",
    category: "pingentes",
    categoryName: "Pingentes",
    collection: "Pandora Moments",
    material: "prata-925",
    materialLabel: "Prata de Lei 925",
    badge: "Amor de Mãe",
    price: 2500,
    description: "Dois pendentes em formato de coração em prata de lei 925 com esmalte rosa suave e zircónias. Um para si e o outro para a sua mãe, com as gravações 'Mother' e 'Daughter'.",
    specs: [
      "Coleção: Pandora Moments Amor Familiar",
      "Metal: Prata 925 e Esmalte Rosa Translúcido",
      "Função: Pendente Divisível em 2 Peças",
      "Compatibilidade: Pulseiras e colares Moments"
    ],
    imgPrimary: "assets/pingentes/pingente-coracao-mae.jpg",
    imgAlt: "assets/pingentes/pingente-1.jpg"
  },
  {
    id: 502,
    name: "Conta em Vidro Murano Rosa Radiante Pandora",
    category: "pingentes",
    categoryName: "Pingentes",
    collection: "Pandora Murano",
    material: "cristais",
    materialLabel: "Vidro Murano & Prata",
    badge: "Vidro Italiano",
    price: 2500,
    description: "Vidro Murano veneziano moldado artesanalmente com inclusão de folha metálica luminescente e núcleo em prata 925 gravado com o logótipo Pandora.",
    specs: [
      "Material: Vidro de Murano Autêntico",
      "Núcleo: Prata de Lei 925",
      "Efeito: Reflexos Iridiscentes em Tom Rosa"
    ],
    imgPrimary: "assets/pingentes/pingente-murano-rosa.jpg",
    imgAlt: "assets/pingentes/pingente-2.jpg"
  },
  {
    id: 503,
    name: "Conta Pendente Cadeado e Chave de Amor Pandora",
    category: "pingentes",
    categoryName: "Pingentes",
    collection: "Pandora Moments",
    material: "ouro-rose",
    materialLabel: "Bicolor (Prata & Ouro Rosa)",
    badge: "Amor & Laços",
    price: 2500,
    description: "Cadeado em prata 925 com coração vazado e chave independente em ouro rosa 14k. A chave pode ser usada dentro do cadeado ou pendurada separadamente.",
    specs: [
      "Mecanismo: Chave articulada removível",
      "Metal: Prata de Lei 925 e Ouro Rosa 14k",
      "Gravação: 'Love is the Key'"
    ],
    imgPrimary: "assets/pingentes/pingente-cadeado-chave.jpg",
    imgAlt: "assets/pingentes/pingente-3.jpg"
  },
  {
    id: 504,
    name: "Conta Separadora Pavé de Cristais Azuis Celestiais",
    category: "pingentes",
    categoryName: "Pingentes",
    collection: "Pandora Colours",
    material: "cristais",
    materialLabel: "Prata 925 & Cristais",
    badge: "Cores & Céu",
    price: 2500,
    description: "Conta separadora em prata 925 cravejada com um degradê de cristais azuis e zircónias transparentes, com travão de silicone interno para manter as contas no lugar.",
    specs: [
      "Função: Separador e Clipe com Silicone Interno",
      "Pedras: Cristais Lapidados em Tons Oceano e Celeste",
      "Metal: Prata de Lei 925"
    ],
    imgPrimary: "assets/pingentes/pingente-separador-azul.jpg",
    imgAlt: "assets/pingentes/pingente-4.jpg"
  },
  {
    id: 505,
    name: "Conta Pendente Trevo de Quatro Folhas da Sorte",
    category: "pingentes",
    categoryName: "Pingentes",
    collection: "Pandora Symbols",
    material: "ouro-rose",
    materialLabel: "Ouro Rosa 14k & Cristais",
    badge: "Sorte & Proteção",
    price: 2500,
    description: "Amuleto em ouro rosa 14k com quatro folhas em formato de coração, uma delas cravejada com cristais verdes cintilantes para atrair prosperidade.",
    specs: [
      "Símbolo: Trevo de 4 Folhas e Prosperidade",
      "Metal: Ouro Rosa 14k",
      "Pedras: Zircónias Verdes e Transparentes"
    ],
    imgPrimary: "assets/pingentes/pingente-trevo-sorte.jpg",
    imgAlt: "assets/pingentes/pingente-5.jpg"
  },
  {
    id: 506,
    name: "Conta Disney Mickey & Minnie Abraço de Amor",
    category: "pingentes",
    categoryName: "Pingentes",
    collection: "Disney x Pandora",
    material: "prata-925",
    materialLabel: "Prata 925 & Esmalte",
    badge: "Disney Oficial",
    price: 2500,
    description: "O casal mais famoso da Disney esculpido em prata de lei 925 abraçado em torno de um coração esmaltado em vermelho radiante aplicado à mão.",
    specs: [
      "Colaboração: Disney x Pandora Oficial",
      "Metal: Prata 925 e Esmalte Vermelho",
      "Gravação: Símbolo Disney"
    ],
    imgPrimary: "assets/pingentes/pingente-disney-mickey.jpg",
    imgAlt: "assets/pingentes/pingente-6.jpg"
  },
  {
    id: 507,
    name: "Conta Pendente Asas de Anjo e Coração de Proteção",
    category: "pingentes",
    categoryName: "Pingentes",
    collection: "Pandora Moments",
    material: "prata-925",
    materialLabel: "Prata de Lei 925",
    badge: "Proteção & Fé",
    price: 2500,
    description: "Asas de anjo esculpidas em prata de lei 925 abraçando um coração central cravado com pavé de zircónias cintilantes.",
    specs: [
      "Símbolo: Asas de Anjo e Coração",
      "Metal: Prata de Lei 925",
      "Pedras: Zircónias Cúbicas Micro Pavé"
    ],
    imgPrimary: "assets/pingentes/pingente-asas-anjo.jpg",
    imgAlt: "assets/pingentes/pingente-7.jpg"
  },
  {
    id: 508,
    name: "Conta Esfera Rendada Árvore da Vida em Prata",
    category: "pingentes",
    categoryName: "Pingentes",
    collection: "Pandora Moments",
    material: "prata-925",
    materialLabel: "Prata de Lei 925",
    badge: "Família & Raízes",
    price: 2500,
    description: "Conta esférica aberta com padrão rendado de ramos e folhas da árvore genealógica em filigrana de prata polida.",
    specs: [
      "Símbolo: Árvore da Vida e Genealogia",
      "Metal: Prata de Lei 925",
      "Design: Vazado Rendado"
    ],
    imgPrimary: "assets/pingentes/pingente-arvore-vida.jpg",
    imgAlt: "assets/pingentes/pingente-8.jpg"
  },
  {
    id: 509,
    name: "Conta Pendente Coroa Real Princesa em Ouro Rosa",
    category: "pingentes",
    categoryName: "Pingentes",
    collection: "Pandora Moments",
    material: "ouro-rose",
    materialLabel: "Ouro Rosa 14k & Cristais",
    badge: "Real & Nobre",
    price: 2500,
    description: "Coroa majestosa esculpida com revestimento a ouro rosa 14k e detalhes em zircónias na base e pontas.",
    specs: [
      "Símbolo: Coroa Real de Princesa",
      "Metal: Revestimento de Ouro Rosa 14k",
      "Pedras: Zircónias Cúbicas Facetadas"
    ],
    imgPrimary: "assets/pingentes/pingente-coroa-real.jpg",
    imgAlt: "assets/pingentes/pingente-9.jpg"
  },
  {
    id: 510,
    name: "Conta Sol & Lua Crescente com Zircónias Azuis",
    category: "pingentes",
    categoryName: "Pingentes",
    collection: "Pandora Moments",
    material: "cristais",
    materialLabel: "Prata 925 & Cristais",
    badge: "Místico & Céu",
    price: 2500,
    description: "Conta dupla articulada com sol radiante em relevo e lua crescente cravada com pedras azuis e gravura 'You are my sunshine'.",
    specs: [
      "Símbolo: Sol e Lua Crescente",
      "Metal: Prata de Lei 925",
      "Gravação: 'You are my sunshine'"
    ],
    imgPrimary: "assets/pingentes/pingente-sol-lua.jpg",
    imgAlt: "assets/pingentes/pingente-10.jpg"
  }
];

// Metadados das Categorias do Site Oficial Pandora
const CATEGORY_META = {
  pulseiras: {
    title: "Coleção de Pulseiras & Braceletes Pandora",
    desc: "Descubra a gama completa de pulseiras Pandora Moments, braceletes rígidos, malhas snake e correntes de elos Pandora ME para personalizar a sua história."
  },
  aneis: {
    title: "Coleção de Anéis Pandora",
    desc: "Desde as icónicas tiaras de princesa a anéis solitários reluzentes e alianças de sobreposição para empilhar e criar o seu visual de assinatura."
  },
  colares: {
    title: "Coleção de Colares & Pendentes Pandora",
    desc: "Fios delicados em prata de lei 925, colares em ouro rosa 14k e pendentes circulares pavé que conferem brilho e sofisticação a qualquer decote."
  },
  brincos: {
    title: "Coleção de Brincos Pandora",
    desc: "Argolas clássicas cravejadas em pavé, brincos de espigão de coração e pontos de luz intemporais concebidos para usar do dia à noite."
  },
  pingentes: {
    title: "Coleção de Contas & Pendentes Pandora",
    desc: "Personalize a sua pulseira com contas em vidro Murano, pendentes gravados, amuletos de amor e colaborações exclusivas Disney e Marvel."
  }
};

// 2. CONFIGURAÇÃO DE CONTATO, ESTADO & STORAGE
const WHATSAPP_PHONE = "5511999999999";
const WHATSAPP_SVG_ICON = `<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-5.805 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>`;

const STORAGE_KEYS = {
  OVERRIDES: 'infinity_store_overrides_v1',
  CUSTOM_ITEMS: 'infinity_store_custom_items_v1'
};

// ==========================================================================
// AUTENTICAÇÃO DE ADMINISTRADOR
// Apenas quem souber a senha (PIN) pode adicionar ou alterar joias.
// Mude o valor de ADMIN_PIN abaixo para a senha que desejar.
// ==========================================================================
const ADMIN_PIN = '1234';               // ← MUDE AQUI PARA A SUA SENHA
const ADMIN_SESSION_KEY = 'infinity_admin_session';

function isAdminAuthenticated() {
  return sessionStorage.getItem(ADMIN_SESSION_KEY) === 'ok';
}

// Verifica autenticação antes de qualquer ação protegida.
// Se não estiver logado, abre o modal de login e devolve false.
function requireAdminAuth(onSuccess) {
  if (isAdminAuthenticated()) {
    onSuccess();
    return true;
  }
  // Guarda o callback para executar após login bem-sucedido
  window._adminPendingAction = onSuccess;
  openAdminLoginModal();
  return false;
}

function openAdminLoginModal() {
  const modal = document.getElementById('admin-login-modal');
  if (!modal) return;
  // Limpar pin display
  const display = document.getElementById('admin-pin-display');
  if (display) display.textContent = '';
  modal.classList.add('is-open');
  document.body.classList.add('no-scroll');
  // Focar no campo invisível para teclado mobile
  const hiddenInput = document.getElementById('admin-pin-hidden');
  if (hiddenInput) { hiddenInput.value = ''; setTimeout(() => { if (typeof hiddenInput.focus === 'function') hiddenInput.focus(); }, 100); }
}

function closeAdminLoginModal() {
  const modal = document.getElementById('admin-login-modal');
  if (modal) modal.classList.remove('is-open');
  document.body.classList.remove('no-scroll');
  // NÃO anular _adminPendingAction aqui — adminLoginSubmit() precisa dele logo após esta chamada
}

function adminPinKey(char) {
  const display = document.getElementById('admin-pin-display');
  if (!display) return;
  if (char === 'DEL') {
    display.textContent = display.textContent.slice(0, -1);
  } else if (char === 'OK') {
    adminLoginSubmit();
  } else {
    if (display.textContent.length >= 8) return;
    display.textContent += char;
  }
  // Shake feedback se campo vazio ao tentar apagar
}

function adminLoginSubmit() {
  const display = document.getElementById('admin-pin-display');
  if (!display) return;
  const entered = display.textContent.trim();
  if (entered === ADMIN_PIN) {
    sessionStorage.setItem(ADMIN_SESSION_KEY, 'ok');
    // Salvar callback ANTES de fechar o modal (que pode destruí-lo)
    const pendingAction = window._adminPendingAction;
    window._adminPendingAction = null;
    closeAdminLoginModal();
    updateAdminUIVisibility();
    showToast('✅ Acesso de administrador concedido!');
    // Executar a ação pendente (ex: abrir editor de produto)
    if (typeof pendingAction === 'function') {
      try {
        pendingAction();
      } catch (err) {
        console.error('[adminLoginSubmit] erro ao executar ação pendente:', err);
      }
    }
  } else {
    display.textContent = '';
    // Shake animation
    const pinBox = document.getElementById('admin-pin-display-box');
    if (pinBox) {
      pinBox.classList.add('pin-shake');
      setTimeout(() => pinBox.classList.remove('pin-shake'), 500);
    }
    showToast('❌ Senha incorrecta. Tente novamente.');
  }
}

function adminLogout() {
  sessionStorage.removeItem(ADMIN_SESSION_KEY);
  updateAdminUIVisibility();
  showToast('🔒 Sessão de administrador encerrada.');
}

// Mostra/oculta os elementos de admin conforme o estado de autenticação
function updateAdminUIVisibility() {
  const isAdmin = isAdminAuthenticated();
  // Header pill — elementos apenas visíveis para admin
  document.querySelectorAll('.admin-only-element').forEach(el => {
    el.style.display = isAdmin ? '' : 'none';
  });
  // Botão de login — visível apenas quando NÃO é admin
  document.querySelectorAll('.guest-only-element').forEach(el => {
    el.style.display = isAdmin ? 'none' : '';
  });
  // Floating action bar
  const fab = document.getElementById('floating-quick-actions');
  if (fab) fab.style.display = isAdmin ? 'flex' : 'none';
  // Botões Editar em cada card
  document.querySelectorAll('.product-edit-btn').forEach(btn => {
    btn.style.display = isAdmin ? '' : 'none';
  });
  // Botões de add na categoria banner
  document.querySelectorAll('.category-admin-btn').forEach(btn => {
    btn.style.display = isAdmin ? '' : 'none';
  });
  // Card de adicionar na grade
  document.querySelectorAll('.add-new-product-card').forEach(el => {
    el.style.display = isAdmin ? '' : 'none';
  });
  // Botão editar no quick-view
  document.querySelectorAll('.qv-edit-btn').forEach(btn => {
    btn.style.display = isAdmin ? '' : 'none';
  });
  // Botão gerir no mobile bottom nav
  const mobAdmin = document.getElementById('mob-nav-admin-li');
  if (mobAdmin) mobAdmin.style.display = isAdmin ? '' : 'none';
}

let CATALOG = [];
let managerFilterCategory = 'all';

// Inicializa o catálogo sincronizando padrões com edições do usuário
function initCatalog() {
  try {
    const rawOverrides = localStorage.getItem(STORAGE_KEYS.OVERRIDES);
    const overrides = rawOverrides ? JSON.parse(rawOverrides) : {};

    const rawCustom = localStorage.getItem(STORAGE_KEYS.CUSTOM_ITEMS);
    const customItems = rawCustom ? JSON.parse(rawCustom) : [];

    const defaultItems = DEFAULT_CATALOG.map(item => {
      const copy = { ...item, specs: Array.isArray(item.specs) ? [...item.specs] : [] };
      if (overrides[copy.id]) {
        Object.assign(copy, overrides[copy.id]);
        copy._isCustomized = true;
      }
      return copy;
    });

    const customFormatted = customItems.map(item => ({ ...item, _isNewProduct: true }));
    // Coloca os itens adicionados pelo usuário no início do catálogo para ficarem no topo da sua categoria!
    CATALOG = [...customFormatted, ...defaultItems];
  } catch (err) {
    console.error("Erro ao ler catálogo:", err);
    CATALOG = DEFAULT_CATALOG.map(i => ({ ...i, specs: [...i.specs] }));
  }
  window.CATALOG = CATALOG;
}

// Salva modificação ou novo produto
function saveProductData(productData) {
  const isExisting = productData.id && CATALOG.some(p => p.id === productData.id);
  const isDefault = productData.id && DEFAULT_CATALOG.some(p => p.id === productData.id);

  if (isExisting) {
    if (isDefault) {
      const raw = localStorage.getItem(STORAGE_KEYS.OVERRIDES);
      const overrides = raw ? JSON.parse(raw) : {};
      overrides[productData.id] = {
        name: productData.name,
        price: Number(productData.price) || 0,
        imgPrimary: productData.imgPrimary,
        imgAlt: productData.imgAlt || productData.imgPrimary,
        category: productData.category,
        categoryName: productData.categoryName,
        collection: productData.collection,
        material: productData.material,
        materialLabel: productData.materialLabel,
        badge: productData.badge,
        description: productData.description,
        specs: productData.specs
      };
      try {
        localStorage.setItem(STORAGE_KEYS.OVERRIDES, JSON.stringify(overrides));
      } catch (e) {
        console.warn("Storage warning:", e);
      }
    } else {
      const raw = localStorage.getItem(STORAGE_KEYS.CUSTOM_ITEMS);
      let custom = raw ? JSON.parse(raw) : [];
      const idx = custom.findIndex(p => p.id === productData.id);
      if (idx >= 0) custom[idx] = { ...productData };
      else custom.unshift(productData);
      try {
        localStorage.setItem(STORAGE_KEYS.CUSTOM_ITEMS, JSON.stringify(custom));
      } catch (e) {
        console.warn("Storage warning:", e);
      }
    }
    showToast(`✨ Joia "${productData.name}" atualizada com sucesso!`);
  } else {
    productData.id = Date.now();
    productData._isNewProduct = true;
    const raw = localStorage.getItem(STORAGE_KEYS.CUSTOM_ITEMS);
    let custom = raw ? JSON.parse(raw) : [];
    custom.unshift(productData);
    try {
      localStorage.setItem(STORAGE_KEYS.CUSTOM_ITEMS, JSON.stringify(custom));
    } catch (quotaErr) {
      console.warn("Storage quota exceeded, keeping most recent items...", quotaErr);
      try {
        localStorage.setItem(STORAGE_KEYS.CUSTOM_ITEMS, JSON.stringify(custom.slice(0, 15)));
      } catch (e2) {
        console.warn("Storage fallback error:", e2);
      }
    }
    showToast(`✨ Nova joia "${productData.name}" adicionada no topo do catálogo!`);
  }

  initCatalog();
  refreshCatalogUI();
}

function resetProductToDefault(productId) {
  const raw = localStorage.getItem(STORAGE_KEYS.OVERRIDES);
  const overrides = raw ? JSON.parse(raw) : {};
  if (overrides[productId]) {
    delete overrides[productId];
    localStorage.setItem(STORAGE_KEYS.OVERRIDES, JSON.stringify(overrides));
    initCatalog();
    refreshCatalogUI();
    showToast("Joia restaurada para a foto e preço originais!");
  }
}

function deleteCustomProduct(productId) {
  if (!confirm("Tem certeza que deseja excluir esta joia do catálogo?")) return;
  const raw = localStorage.getItem(STORAGE_KEYS.CUSTOM_ITEMS);
  let custom = raw ? JSON.parse(raw) : [];
  custom = custom.filter(p => p.id !== productId);
  localStorage.setItem(STORAGE_KEYS.CUSTOM_ITEMS, JSON.stringify(custom));
  initCatalog();
  refreshCatalogUI();
  showToast("Joia removida do catálogo.");
}

function resetAllCatalogToDefault() {
  if (!confirm("Tem certeza que deseja restaurar todo o catálogo original de fábrica? Todas as fotos e preços personalizados serão removidos.")) return;
  localStorage.removeItem(STORAGE_KEYS.OVERRIDES);
  localStorage.removeItem(STORAGE_KEYS.CUSTOM_ITEMS);
  initCatalog();
  refreshCatalogUI();
  renderCatalogManagerList();
  showToast("Catálogo 100% restaurado para o estado de fábrica!");
}

function exportCatalogBackup() {
  const backup = {
    exportDate: new Date().toISOString(),
    overrides: JSON.parse(localStorage.getItem(STORAGE_KEYS.OVERRIDES) || '{}'),
    customItems: JSON.parse(localStorage.getItem(STORAGE_KEYS.CUSTOM_ITEMS) || '[]')
  };
  const blob = new Blob([JSON.stringify(backup, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `infinity_store_catalogo_${new Date().toISOString().slice(0, 10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
  showToast("Backup do catálogo baixado com sucesso!");
}

function importCatalogBackup(fileInput) {
  const file = fileInput.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const data = JSON.parse(e.target.result);
      if (data.overrides || data.customItems) {
        if (data.overrides) localStorage.setItem(STORAGE_KEYS.OVERRIDES, JSON.stringify(data.overrides));
        if (data.customItems) localStorage.setItem(STORAGE_KEYS.CUSTOM_ITEMS, JSON.stringify(data.customItems));
        initCatalog();
        refreshCatalogUI();
        renderCatalogManagerList();
        showToast("Backup importado e catálogo atualizado!");
      } else {
        showToast("Arquivo de backup inválido.");
      }
    } catch (err) {
      showToast("Erro ao processar arquivo de backup.");
    }
  };
  reader.readAsText(file);
  fileInput.value = '';
}

// Otimiza e converte foto do usuário via Canvas para Base64 leve
function compressAndReadImage(file, callback) {
  if (!file) return;

  let objectUrl = null;
  try {
    objectUrl = URL.createObjectURL(file);
  } catch (e) {}

  const processImg = (src, isBlob) => {
    const img = new Image();
    img.onload = function() {
      if (isBlob && objectUrl) URL.revokeObjectURL(objectUrl);

      const maxDim = 720;
      let w = img.width;
      let h = img.height;
      if (w > maxDim || h > maxDim) {
        if (w > h) {
          h = Math.round((h * maxDim) / w);
          w = maxDim;
        } else {
          w = Math.round((w * maxDim) / h);
          h = maxDim;
        }
      }
      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      const ctx = canvas.getContext('2d');

      const isPng = (file.type && file.type.indexOf('png') !== -1) || (file.name && file.name.toLowerCase().endsWith('.png'));

      let dataUrl;
      try {
        if (isPng) {
          ctx.clearRect(0, 0, w, h);
          ctx.drawImage(img, 0, 0, w, h);
          dataUrl = canvas.toDataURL('image/png');
          if (dataUrl.length > 500000) {
            ctx.fillStyle = '#ffffff';
            ctx.fillRect(0, 0, w, h);
            ctx.drawImage(img, 0, 0, w, h);
            dataUrl = canvas.toDataURL('image/jpeg', 0.85);
          }
        } else {
          ctx.fillStyle = '#ffffff';
          ctx.fillRect(0, 0, w, h);
          ctx.drawImage(img, 0, 0, w, h);
          dataUrl = canvas.toDataURL('image/jpeg', 0.82);
        }
      } catch (err) {
        dataUrl = src;
      }
      callback(dataUrl);
    };

    img.onerror = function() {
      if (isBlob && objectUrl) URL.revokeObjectURL(objectUrl);
      const reader = new FileReader();
      reader.onload = function(e) { callback(e.target.result); };
      reader.onerror = function() { showToast('Não foi possível ler a foto.'); };
      reader.readAsDataURL(file);
    };

    img.src = src;
  };

  if (objectUrl) {
    processImg(objectUrl, true);
  } else {
    const reader = new FileReader();
    reader.onload = function(e) { processImg(e.target.result, false); };
    reader.onerror = function() { showToast('Erro ao ler arquivo.'); };
    reader.readAsDataURL(file);
  }
}

function onFileSelected(fileInput, targetInputId, previewImgId) {
  const file = fileInput.files[0];
  if (!file) return;
  compressAndReadImage(file, (dataUrl) => {
    const input = document.getElementById(targetInputId);
    const preview = document.getElementById(previewImgId);
    if (input) input.value = dataUrl;
    if (preview) preview.src = dataUrl;
    showToast("Foto carregada com sucesso!");
  });
}

function updatePreviewFromInput(inputId, previewImgId) {
  const input = document.getElementById(inputId);
  const preview = document.getElementById(previewImgId);
  if (input && preview) {
    preview.src = input.value.trim() || 'assets/ring_pink_heart.jpg';
  }
}

function updatePriceBadge(val) {
  const badge = document.getElementById('price-live-badge');
  if (badge) {
    const num = Number(val) || 0;
    badge.textContent = num > 0 ? `${num.toLocaleString('pt-MZ')} MT` : 'Sem preço';
  }
}

function setPriceValue(val) {
  const input = document.getElementById('edit-input-price');
  if (input) {
    input.value = val;
    updatePriceBadge(val);
  }
}

function selectEasyCategory(cat) {
  const input = document.getElementById('edit-select-category');
  if (input) input.value = cat;
  document.querySelectorAll('.cat-tap-btn').forEach(btn => {
    btn.classList.toggle('is-selected', btn.getAttribute('data-cat') === cat);
  });
}

function toggleAdvancedOptions() {
  const panel = document.getElementById('easy-advanced-panel');
  const btn = document.getElementById('btn-toggle-advanced');
  if (!panel || !btn) return;
  const isHidden = panel.style.display === 'none';
  panel.style.display = isHidden ? 'block' : 'none';
  btn.innerHTML = isHidden ? '▲ Recolher detalhes adicionais' : '▼ Mais detalhes opcionais (descrição, material, foto secundária)...';
}

// Modal do Editor de Produto
function openProductEditor(productId, event, defaultCategory) {
  console.log('[openProductEditor] chamado. productId:', productId, 'admin:', isAdminAuthenticated(), 'defaultCategory:', defaultCategory);
  if (event) {
    try { event.stopPropagation(); } catch (e) {}
  }
  if (!isAdminAuthenticated()) {
    console.log('[openProductEditor] não autenticado, abrindo login...');
    requireAdminAuth(() => openProductEditor(productId, null, defaultCategory));
    return;
  }

  // Fecha outros modais sem atrasos para evitar conflito de overlay
  const catModal = document.getElementById('catalog-manager-modal');
  if (catModal) catModal.classList.remove('is-open');

  const qvModal = document.getElementById('quick-view-modal');
  if (qvModal) qvModal.classList.remove('is-open');

  const modal = document.getElementById('product-editor-modal');
  if (!modal) return;

  const product = productId ? CATALOG.find(p => p.id === productId) : null;
  const isNew = !product;

  document.getElementById('edit-product-id').value = isNew ? '' : product.id;
  document.getElementById('editor-modal-title').textContent = isNew ? 'Adicionar Nova Joia ao Catálogo' : `Modificar Joia: ${product.name}`;

  const priceVal = isNew ? 2500 : (product.price || 0);
  document.getElementById('edit-input-price').value = priceVal;
  updatePriceBadge(priceVal);

  document.getElementById('edit-input-name').value = isNew ? '' : product.name;
  
  const cat = isNew ? (defaultCategory || STATE.currentCategory || 'pulseiras') : product.category;
  selectEasyCategory(cat);

  const advPanel = document.getElementById('easy-advanced-panel');
  if (advPanel) advPanel.style.display = 'none';
  const advBtn = document.getElementById('btn-toggle-advanced');
  if (advBtn) advBtn.innerHTML = '▼ Mais detalhes opcionais (descrição, material, foto secundária)...';
  
  document.getElementById('edit-input-collection').value = isNew ? 'Pandora Moments' : (product.collection || '');
  document.getElementById('edit-input-material').value = isNew ? 'Prata de Lei 925' : (product.materialLabel || '');
  document.getElementById('edit-input-badge').value = isNew ? 'Nova Coleção' : (product.badge || '');
  document.getElementById('edit-input-desc').value = isNew ? '' : (product.description || '');
  document.getElementById('edit-input-specs').value = isNew ? 'Metal: Prata de Lei 925\nAcabamento: Polido de Alta Joalheria' : (product.specs ? product.specs.join('\n') : '');

  const defImg = `assets/${cat}/${cat === 'pulseiras' ? 'pulseira' : cat === 'aneis' ? 'anel' : cat === 'colares' ? 'colar' : cat === 'brincos' ? 'brinco' : 'pingente'}-1.jpg`;
  const primaryImg = isNew ? defImg : product.imgPrimary;
  const altImg = isNew ? defImg : (product.imgAlt || product.imgPrimary);

  document.getElementById('edit-input-primary').value = primaryImg;
  const previewPrimary = document.getElementById('edit-preview-primary');
  if (previewPrimary) previewPrimary.src = primaryImg;

  document.getElementById('edit-input-alt').value = altImg;
  const previewAlt = document.getElementById('edit-preview-alt');
  if (previewAlt) previewAlt.src = altImg;

  // Botões de restaurar / excluir
  const btnRestore = document.getElementById('btn-restore-product');
  const btnDelete = document.getElementById('btn-delete-product');

  if (isNew) {
    if (btnRestore) btnRestore.style.display = 'none';
    if (btnDelete) btnDelete.style.display = 'none';
  } else if (product._isNewProduct) {
    if (btnRestore) btnRestore.style.display = 'none';
    if (btnDelete) btnDelete.style.display = 'inline-flex';
  } else {
    if (btnDelete) btnDelete.style.display = 'none';
    if (btnRestore) btnRestore.style.display = product._isCustomized ? 'inline-flex' : 'none';
  }

  modal.classList.add('is-open');
  console.log('[openProductEditor] modal aberto! classes:', modal.className);
  document.getElementById('drawer-overlay')?.classList.add('is-active');
  document.body.classList.add('no-scroll');
}

function closeProductEditor() {
  document.getElementById('product-editor-modal')?.classList.remove('is-open');
  const mgrOpen = document.getElementById('catalog-manager-modal')?.classList.contains('is-open');
  if (!mgrOpen) {
    document.getElementById('drawer-overlay')?.classList.remove('is-active');
    document.body.classList.remove('no-scroll');
  }
}

function handleProductEditorSubmit(event) {
  console.log('[handleProductEditorSubmit] chamado!');
  if (event) event.preventDefault();

  const idVal = document.getElementById('edit-product-id').value;
  const categoryVal = document.getElementById('edit-select-category').value || 'pulseiras';
  
  const catNames = {
    pulseiras: "Pulseiras",
    aneis: "Anéis",
    colares: "Colares",
    brincos: "Brincos",
    pingentes: "Pingentes"
  };

  const rawName = document.getElementById('edit-input-name').value.trim();
  const defaultCategoryName = catNames[categoryVal] || categoryVal;
  const finalName = rawName || `Joia ${defaultCategoryName} #${Math.floor(100 + Math.random() * 900)}`;

  const specsText = document.getElementById('edit-input-specs').value.trim();
  const specsArr = specsText ? specsText.split('\n').map(s => s.trim()).filter(Boolean) : [];

  const defImg = `assets/${categoryVal}/${categoryVal === 'pulseiras' ? 'pulseira' : categoryVal === 'aneis' ? 'anel' : categoryVal === 'colares' ? 'colar' : categoryVal === 'brincos' ? 'brinco' : 'pingente'}-1.jpg`;
  const primaryImg = document.getElementById('edit-input-primary').value.trim() || defImg;

  const productData = {
    id: idVal ? (isNaN(Number(idVal)) ? idVal : Number(idVal)) : null,
    name: finalName,
    price: Number(document.getElementById('edit-input-price').value) || 0,
    category: categoryVal,
    categoryName: defaultCategoryName,
    collection: document.getElementById('edit-input-collection').value.trim() || 'Pandora Moments',
    material: 'prata-925',
    materialLabel: document.getElementById('edit-input-material').value.trim() || 'Prata de Lei 925',
    badge: document.getElementById('edit-input-badge').value.trim() || 'Nova Joia',
    description: document.getElementById('edit-input-desc').value.trim() || `Peça exclusiva da coleção ${defaultCategoryName}.`,
    specs: specsArr.length > 0 ? specsArr : ['Metal: Prata de Lei 925', 'Acabamento: Polido de Alta Joalheria'],
    imgPrimary: primaryImg,
    imgAlt: document.getElementById('edit-input-alt').value.trim() || primaryImg
  };

  const isNew = !productData.id;
  console.log('[handleProductEditorSubmit] salvando...', 'isNew:', isNew, 'name:', productData.name, 'price:', productData.price, 'category:', productData.category);
  saveProductData(productData);
  console.log('[handleProductEditorSubmit] salvo! CATALOG.length:', CATALOG.length, 'productData.id:', productData.id);
  closeProductEditor();

  // Navega para a categoria da joia para mostrá-la imediatamente no topo com destaque visual
  if (isNew) {
    showCategoryPage(productData.category);
    setTimeout(() => {
      const newCard = document.querySelector(`.product-card[data-id="${productData.id}"]`);
      if (newCard) {
        newCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
        newCard.style.outline = '3px solid var(--color-accent)';
        newCard.style.boxShadow = '0 0 25px rgba(184, 134, 11, 0.5)';
        newCard.style.transition = 'all 0.5s ease';
        setTimeout(() => {
          newCard.style.outline = '';
          newCard.style.boxShadow = '';
        }, 3500);
      }
    }, 350);
  }
}

function onRestoreCurrentProduct() {
  const idVal = document.getElementById('edit-product-id').value;
  if (!idVal) return;
  const pid = isNaN(Number(idVal)) ? idVal : Number(idVal);
  resetProductToDefault(pid);
  closeProductEditor();
}

function onDeleteCurrentProduct() {
  const idVal = document.getElementById('edit-product-id').value;
  if (!idVal) return;
  const pid = isNaN(Number(idVal)) ? idVal : Number(idVal);
  deleteCustomProduct(pid);
  closeProductEditor();
}

// Modal do Gerenciador do Catálogo
function openCatalogManager() {
  if (!isAdminAuthenticated()) {
    requireAdminAuth(() => openCatalogManager());
    return;
  }
  closeAllDrawers();
  const modal = document.getElementById('catalog-manager-modal');
  if (!modal) return;
  
  modal.classList.add('is-open');
  document.getElementById('drawer-overlay')?.classList.add('is-active');
  document.body.classList.add('no-scroll');
  renderCatalogManagerList();
}

function closeCatalogManager() {
  document.getElementById('catalog-manager-modal')?.classList.remove('is-open');
  const editorOpen = document.getElementById('product-editor-modal')?.classList.contains('is-open');
  if (!editorOpen) {
    document.getElementById('drawer-overlay')?.classList.remove('is-active');
    document.body.classList.remove('no-scroll');
  }
}

function renderCatalogManagerList() {
  const container = document.getElementById('manager-items-list');
  if (!container) return;

  const q = (document.getElementById('manager-search-input')?.value || '').toLowerCase().trim();

  let items = CATALOG;
  if (managerFilterCategory !== 'all') {
    items = items.filter(p => p.category === managerFilterCategory);
  }
  if (q.length > 0) {
    items = items.filter(p => 
      p.name.toLowerCase().includes(q) ||
      p.collection.toLowerCase().includes(q) ||
      p.materialLabel.toLowerCase().includes(q) ||
      String(p.id).includes(q)
    );
  }

  // Atualiza estatísticas
  const totalCount = CATALOG.length;
  const pricedCount = CATALOG.filter(p => p.price && Number(p.price) > 0).length;
  const customCount = CATALOG.filter(p => p._isCustomized || p._isNewProduct).length;

  const statTotal = document.getElementById('manager-stat-total');
  const statPriced = document.getElementById('manager-stat-priced');
  const statCustom = document.getElementById('manager-stat-custom');

  if (statTotal) statTotal.textContent = totalCount;
  if (statPriced) statPriced.textContent = pricedCount;
  if (statCustom) statCustom.textContent = customCount;

  if (items.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 40px 20px; color: var(--color-text-muted);">
        <p>Nenhuma joia encontrada com os filtros atuais.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = items.map(p => {
    const isCustom = p._isCustomized || p._isNewProduct;
    return `
      <div class="manager-item-row" data-id="${p.id}">
        <img src="${p.imgPrimary}" alt="${p.name}" class="manager-item-thumb" onerror="handleImgError(this)">
        <div class="manager-item-meta">
          <div class="manager-item-name">${p.name}</div>
          <div class="manager-item-sub">#${p.id} &bull; ${p.categoryName} &bull; ${p.collection}</div>
          <div class="manager-item-badges">
            <span style="font-size: 0.68rem; color: var(--color-text-muted);">${p.materialLabel}</span>
            ${isCustom ? `<span class="badge-pill-custom">${p._isNewProduct ? 'Nova Peça' : 'Modificado'}</span>` : ''}
          </div>
        </div>
        <div class="manager-item-price-col">
          <div class="manager-price-display">${p.price ? Number(p.price).toLocaleString('pt-MZ') + ' MT' : 'Sem preço'}</div>
        </div>
        <div class="manager-item-actions">
          <button class="btn-luxury btn-luxury-primary btn-sm" onclick="openProductEditor(${p.id}, event)" title="Editar foto e preço desta peça" style="padding: 8px 14px; font-weight: 700; gap: 6px;">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
            Editar Foto &amp; Preço
          </button>
        </div>
      </div>
    `;
  }).join('');
}

function filterManagerList() {
  renderCatalogManagerList();
}

function setManagerCategoryFilter(cat, btn) {
  managerFilterCategory = cat;
  document.querySelectorAll('.manager-pill').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  renderCatalogManagerList();
}

function refreshCatalogUI() {
  if (STATE.activeView === 'category' && STATE.currentCategory) {
    renderCategoryView();
  }
  renderHomeCatalogGrid();
  refreshCarouselScenes();
  updateWishlistBadges();
  updateCartBadges();
  if (document.getElementById('catalog-manager-modal')?.classList.contains('is-open')) {
    renderCatalogManagerList();
  }
}

// Sincroniza fotos e preços nos slides da página inicial
function refreshCarouselScenes() {
  const sceneMap = [
    { sceneId: 'scene-1', prodId: 101 },
    { sceneId: 'scene-2', prodId: 301 },
    { sceneId: 'scene-3', prodId: 206 },
    { sceneId: 'scene-4', prodId: 401 },
    { sceneId: 'scene-5', prodId: 501 }
  ];

  sceneMap.forEach(({ sceneId, prodId }) => {
    const p = CATALOG.find(item => item.id === prodId);
    const scene = document.getElementById(sceneId);
    if (!p || !scene) return;

    const img = scene.querySelector('.carousel-img');
    if (img && p.imgPrimary) img.src = p.imgPrimary;

    const eyebrow = scene.querySelector('.carousel-eyebrow');
    if (eyebrow && p.price) {
      eyebrow.innerHTML = `${p.badge} &bull; ${p.materialLabel} &bull; <strong style="color:var(--color-accent); font-weight:700;">${Number(p.price).toLocaleString('pt-MZ')} MT</strong>`;
    }
  });
}

// Finalizar compra individual no WhatsApp com inclusão de preço
function buyProductViaWhatsApp(productId) {
  const product = CATALOG.find(p => p.id === productId);
  if (!product) return;
  const priceLine = product.price ? `
• *Preço:* ${Number(product.price).toLocaleString('pt-MZ')} MT` : '';
  const msg = `Olá, Infinity Store! 💎

Gostaria de finalizar a compra da seguinte joia:

• *Produto:* ${product.name}${priceLine}
• *Coleção:* ${product.collection}
• *Material:* ${product.materialLabel}
• *Código:* #${product.id}

Poderiam me informar sobre disponibilidade e dados para pagamento?`;
  const url = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');
}

// Finalizar sacola no WhatsApp com soma dos preços
function checkoutBagViaWhatsApp() {
  if (STATE.cart.length === 0) {
    showToast('Sua sacola está vazia.');
    return;
  }
  let total = 0;
  const itemsSummary = STATE.cart.map(i => {
    const prod = CATALOG.find(p => p.id === i.id);
    const unitPrice = prod && prod.price ? Number(prod.price) : 0;
    const subtotal = unitPrice * i.qty;
    total += subtotal;
    const priceText = unitPrice > 0 ? ` - ${unitPrice.toLocaleString('pt-MZ')} MT` : '';
    return `• ${i.qty}x *${i.name}* (${i.materialLabel})${priceText} - Cód #${i.id}`;
  }).join('\n');

  const totalLine = total > 0 ? `

*Total Estimado:* ${total.toLocaleString('pt-MZ')} MT` : '';
  const msg = `Olá, Infinity Store! 💎

Gostaria de finalizar meu pedido com as seguintes joias selecionadas:

${itemsSummary}${totalLine}

Como posso prosseguir com o pagamento e a entrega?`;
  const url = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');
  closeBagDrawer();
}

const STATE = {
  activeView: 'immersive', // 'immersive' ou 'category'
  currentCategory: null,
  cart: [],
  wishlist: [101, 201, 501]
};

// 3. INICIALIZAÇÃO
document.addEventListener('DOMContentLoaded', () => {
  initCatalog();
  setupNavigation();
  setupSearch();
  setupDrawersAndModals();
  setupStoryScroll();
  updateWishlistBadges();
  updateCartBadges();
  refreshCarouselScenes();
  renderHomeCatalogGrid();
  updateAdminUIVisibility(); // Aplica visibilidade dos elementos de admin
});

// 4. NAVEGAÇÃO ENTRE CATEGORIAS
function setupNavigation() {
  const categoryLinks = document.querySelectorAll('.nav-category-link');
  
  categoryLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const cat = link.getAttribute('data-category');
      showCategoryPage(cat);
    });
  });

  // Logo retorna para a experiência de carrosséis da página inicial
  const logoBtn = document.querySelector('.header-brand');
  if (logoBtn) {
    logoBtn.addEventListener('click', (e) => {
      e.preventDefault();
      showImmersiveHome();
    });
  }
}

function showCategoryPage(categoryKey) {
  STATE.activeView = 'category';
  STATE.currentCategory = categoryKey;

  document.body.classList.remove('immersive-mode');
  document.body.classList.add('catalog-mode');

  document.getElementById('immersive-view').style.display = 'none';
  const categoryView = document.getElementById('category-page-view');
  categoryView.classList.add('active-view');

  // Atualiza classe ativa nos links do menu
  document.querySelectorAll('.nav-category-link').forEach(link => {
    link.classList.toggle('active', link.getAttribute('data-category') === categoryKey);
  });

  // Renderiza produtos da categoria
  renderCategoryView();
  if (typeof window.scrollTo === 'function') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

function showImmersiveHome() {
  STATE.activeView = 'immersive';
  STATE.currentCategory = null;

  document.body.classList.remove('catalog-mode');
  document.body.classList.add('immersive-mode');

  document.getElementById('immersive-view').style.display = 'block';
  document.getElementById('category-page-view').classList.remove('active-view');

  document.querySelectorAll('.nav-category-link').forEach(link => link.classList.remove('active'));
  refreshCarouselScenes();
}

function renderCategoryView() {
  const meta = CATEGORY_META[STATE.currentCategory] || { title: "Joalharia Pandora", desc: "Peças autênticas esculpidas com perfeição." };
  
  // Atualiza o Banner
  document.getElementById('cat-banner-title').textContent = meta.title;
  document.getElementById('cat-banner-desc').textContent = meta.desc;
  document.getElementById('breadcrumb-current').textContent = STATE.currentCategory.toUpperCase();

  // Filtra produtos da categoria
  const items = CATALOG.filter(p => p.category === STATE.currentCategory);

  // Renderiza a Grade de Produtos
  const grid = document.getElementById('products-catalog-grid');
  if (!grid) return;

  const addNewCardHtml = `
    <article class="product-card add-new-product-card" onclick="openProductEditor(null, event, STATE.currentCategory)">
      <div class="add-card-inner">
        <div class="add-card-icon-wrap">
          <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2.5">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </div>
        <h3 class="add-card-title">+ Adicionar Joia</h3>
        <p class="add-card-desc">Clique aqui para colocar uma foto e preço nesta categoria em 10 segundos.</p>
        <span class="catalog-btn-secondary" style="pointer-events: none; padding: 6px 14px; font-size: 0.75rem;">+ Adicionar Peça</span>
      </div>
    </article>
  `;

  grid.innerHTML = addNewCardHtml + items.map(product => {
    const isFav = STATE.wishlist.includes(product.id);
    return `
      <article class="product-card" data-id="${product.id}">
        <div class="product-media">
          <span class="product-badge">${product.badge}</span>

          <button class="product-edit-btn" onclick="openProductEditor(${product.id}, event)" title="Modificar foto e preço desta peça" aria-label="Editar">
            <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 20h9"></path>
              <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
            </svg>
            <span>📷 Mudar Foto / Preço</span>
          </button>

          <button class="product-wishlist-btn ${isFav ? 'active' : ''}" onclick="toggleWishlist(${product.id})" aria-label="Favoritar">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="${isFav ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="1.8">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>
          
          <img src="${product.imgPrimary}" alt="${product.name}" class="product-img primary-img" loading="lazy" onerror="handleImgError(this)">
          <img src="${product.imgAlt}" alt="${product.name}" class="product-img alt-img" loading="lazy" onerror="handleImgError(this)">
          
          <button class="product-quick-view-btn" onclick="openQuickView(${product.id})">
            Espiar Detalhes
          </button>
        </div>

        <div class="product-info">
          <span class="product-cat-tag">${product.collection} &bull; ${product.materialLabel}</span>
          <h3 class="product-title" onclick="openQuickView(${product.id})">${product.name}</h3>
          <p class="product-material-text">${product.specs[0] || ''}</p>
          <p class="product-price">${product.price ? Number(product.price).toLocaleString('pt-MZ') + ' MT' : 'Preço sob consulta'}</p>

          <div class="product-card-actions">
            <button class="product-whatsapp-btn" onclick="buyProductViaWhatsApp(${product.id})" title="Finalizar compra no WhatsApp">
              ${WHATSAPP_SVG_ICON}
              <span>Comprar no WhatsApp</span>
            </button>
            <button class="product-bag-add-btn" onclick="addToBag(${product.id})" title="Adicionar à Sacola">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
              </svg>
            </button>
          </div>
        </div>
      </article>
    `;
  }).join('');

  // Garante que elementos de admin são exibidos/ocultos de acordo com o estado de autenticação
  updateAdminUIVisibility();
}

// ==========================================================================
// 4.1. VITRINE DE TODOS OS PRODUTOS NA PÁGINA PRINCIPAL
// ==========================================================================

let homeCatalogFilter = 'all';
let homeCatalogSearch = '';
let homeCatalogSort = 'featured';

const CATEGORY_NAMES = {
  pulseiras: "Pulseiras",
  aneis: "Anéis",
  colares: "Colares",
  brincos: "Brincos",
  pingentes: "Pingentes"
};

function renderHomeCatalogGrid() {
  const grid = document.getElementById('home-products-grid');
  if (!grid) return;

  let items = [...CATALOG];

  // 1. Filtro por categoria
  if (homeCatalogFilter !== 'all') {
    items = items.filter(p => p.category === homeCatalogFilter);
  }

  // 2. Filtro por busca de texto
  const q = homeCatalogSearch.trim().toLowerCase();
  if (q.length > 0) {
    items = items.filter(p => 
      (p.name && p.name.toLowerCase().includes(q)) ||
      (p.collection && p.collection.toLowerCase().includes(q)) ||
      (p.materialLabel && p.materialLabel.toLowerCase().includes(q)) ||
      (p.description && p.description.toLowerCase().includes(q)) ||
      String(p.id).includes(q)
    );
  }

  // 3. Ordenação
  if (homeCatalogSort === 'price-asc') {
    items.sort((a, b) => (Number(a.price) || 0) - (Number(b.price) || 0));
  } else if (homeCatalogSort === 'price-desc') {
    items.sort((a, b) => (Number(b.price) || 0) - (Number(a.price) || 0));
  } else if (homeCatalogSort === 'name-asc') {
    items.sort((a, b) => (a.name || '').localeCompare(b.name || '', 'pt'));
  }
  // 'featured' mantém a ordem do catálogo (novos adicionados no topo!)

  // 4. Atualiza os contadores nas abas
  updateHomeCategoryCounts();

  // 5. Atualiza o texto de status
  const statusEl = document.getElementById('home-catalog-status-text');
  if (statusEl) {
    const catLabel = homeCatalogFilter === 'all' ? 'todas as peças' : (CATEGORY_NAMES[homeCatalogFilter] || homeCatalogFilter);
    statusEl.textContent = `Mostrando ${items.length} ${items.length === 1 ? 'joia' : 'joias'} em ${catLabel}${q ? ` para "${homeCatalogSearch}"` : ''}`;
  }

  // Card para adicionar joia rápida (modo admin)
  const addNewCardHtml = `
    <article class="product-card add-new-product-card admin-only-element" onclick="openProductEditor(null, event, homeCatalogFilter === 'all' ? 'pulseiras' : homeCatalogFilter)">
      <div class="add-card-inner">
        <div class="add-card-icon-wrap">
          <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2.5">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </div>
        <h3 class="add-card-title">+ Adicionar Joia</h3>
        <p class="add-card-desc">Coloque foto e preço de uma nova peça para aparecer agora mesmo no site.</p>
        <span class="catalog-btn-secondary" style="pointer-events: none; padding: 6px 14px; font-size: 0.75rem;">+ Adicionar Peça</span>
      </div>
    </article>
  `;

  if (items.length === 0) {
    grid.innerHTML = addNewCardHtml + `
      <div class="home-catalog-empty" style="grid-column: 1 / -1; text-align: center; padding: 50px 20px; color: var(--color-text-muted);">
        <p style="font-size: 1.1rem; margin-bottom: 12px;">Nenhuma joia encontrada com estes filtros.</p>
        <button class="btn-luxury btn-luxury-outline btn-sm" onclick="clearHomeCatalogSearch(); filterHomeCatalog('all')">Limpar Filtros e Ver Todas</button>
      </div>
    `;
    updateAdminUIVisibility();
    return;
  }

  grid.innerHTML = addNewCardHtml + items.map(product => {
    const isFav = STATE.wishlist.includes(product.id);
    const altPhoto = product.imgAlt || product.imgPrimary;
    const priceText = product.price && Number(product.price) > 0 
      ? `${Number(product.price).toLocaleString('pt-MZ')} MT` 
      : 'Preço sob consulta';

    return `
      <article class="product-card" data-id="${product.id}">
        <div class="product-media">
          <span class="product-badge">${product.badge || 'Exclusivo'}</span>

          <button class="product-edit-btn admin-only-element" onclick="openProductEditor(${product.id}, event)" title="Modificar foto e preço desta peça" aria-label="Editar">
            <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 20h9"></path>
              <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
            </svg>
            <span>📷 Mudar Foto / Preço</span>
          </button>

          <button class="product-wishlist-btn ${isFav ? 'active' : ''}" onclick="toggleWishlist(${product.id})" aria-label="Favoritar">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="${isFav ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="1.8">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>
          
          <img src="${product.imgPrimary}" alt="${product.name}" class="product-img primary-img" loading="lazy" onerror="handleImgError(this)" onclick="openQuickView(${product.id})">
          <img src="${altPhoto}" alt="${product.name}" class="product-img alt-img" loading="lazy" onerror="handleImgError(this)" onclick="openQuickView(${product.id})">
          
          <button class="product-quick-view-btn" onclick="openQuickView(${product.id})">
            Espiar Detalhes
          </button>
        </div>

        <div class="product-info">
          <span class="product-cat-tag">${product.collection || 'Pandora Moments'} &bull; ${CATEGORY_NAMES[product.category] || product.category}</span>
          <h3 class="product-title" onclick="openQuickView(${product.id})">${product.name}</h3>
          <p class="product-material-text">${(product.specs && product.specs[0]) || product.materialLabel || 'Prata de Lei 925'}</p>
          <p class="product-price">${priceText}</p>

          <div class="product-card-actions">
            <button class="product-whatsapp-btn" onclick="buyProductViaWhatsApp(${product.id})" title="Finalizar compra no WhatsApp">
              ${WHATSAPP_SVG_ICON}
              <span>Comprar no WhatsApp</span>
            </button>
            <button class="product-bag-add-btn" onclick="addToBag(${product.id})" title="Adicionar à Sacola">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
              </svg>
            </button>
          </div>
        </div>
      </article>
    `;
  }).join('');

  updateAdminUIVisibility();
}

function updateHomeCategoryCounts() {
  const countAll = document.getElementById('count-all');
  if (countAll) countAll.textContent = CATALOG.length;

  ['pulseiras', 'aneis', 'colares', 'brincos', 'pingentes'].forEach(cat => {
    const el = document.getElementById(`count-${cat}`);
    if (el) {
      el.textContent = CATALOG.filter(p => p.category === cat).length;
    }
  });
}

function filterHomeCatalog(cat) {
  homeCatalogFilter = cat;
  document.querySelectorAll('.home-pill-btn').forEach(btn => {
    btn.classList.toggle('is-active', btn.getAttribute('data-filter') === cat);
  });
  renderHomeCatalogGrid();
}

function onHomeCatalogSearch(val) {
  homeCatalogSearch = val || '';
  const clearBtn = document.getElementById('home-search-clear');
  if (clearBtn) clearBtn.style.display = homeCatalogSearch.length > 0 ? 'block' : 'none';
  renderHomeCatalogGrid();
}

function clearHomeCatalogSearch() {
  homeCatalogSearch = '';
  const input = document.getElementById('home-catalog-search');
  if (input) input.value = '';
  const clearBtn = document.getElementById('home-search-clear');
  if (clearBtn) clearBtn.style.display = 'none';
  renderHomeCatalogGrid();
}

function onHomeCatalogSort(sortVal) {
  homeCatalogSort = sortVal;
  renderHomeCatalogGrid();
}

function scrollToHomeCatalog(category) {
  if (STATE.activeView !== 'immersive') {
    showImmersiveHome();
  }
  if (category) {
    filterHomeCatalog(category);
  }
  setTimeout(() => {
    const target = document.getElementById('home-all-products');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, 60);
}

// 5. MOTOR DE BUSCA EM TEMPO REAL
function setupSearch() {
  const searchInput = document.getElementById('search-input');
  const dropdown = document.getElementById('search-dropdown');
  if (!searchInput || !dropdown) return;

  searchInput.addEventListener('input', (e) => {
    const q = e.target.value.trim().toLowerCase();
    if (q.length < 2) {
      dropdown.classList.remove('active');
      return;
    }

    const matches = CATALOG.filter(p => 
      p.name.toLowerCase().includes(q) ||
      p.categoryName.toLowerCase().includes(q) ||
      p.collection.toLowerCase().includes(q) ||
      p.materialLabel.toLowerCase().includes(q)
    ).slice(0, 6);

    if (matches.length > 0) {
      dropdown.innerHTML = `
        <div class="search-results-header">Joias Infinity Encontradas (${matches.length})</div>
        ${matches.map(p => `
          <div class="search-item" onclick="openQuickView(${p.id}); document.getElementById('search-dropdown').classList.remove('active');">
            <img src="${p.imgPrimary}" alt="${p.name}" onerror="handleImgError(this)">
            <div class="search-item-info">
              <div class="search-item-title">${p.name}</div>
              <div class="search-item-cat">${p.collection} &bull; ${p.categoryName} &bull; <strong style="color:var(--color-accent); font-weight:700;">${p.price ? Number(p.price).toLocaleString('pt-MZ') + ' MT' : ''}</strong></div>
            </div>
          </div>
        `).join('')}
      `;
      dropdown.classList.add('active');
    } else {
      dropdown.innerHTML = `<div class="search-results-header">Nenhum produto encontrado para "${q}"</div>`;
      dropdown.classList.add('active');
    }
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.header-search-wrap')) {
      dropdown.classList.remove('active');
    }
  });
}

// 6. MODAIS, GAVETA DE SACOLA E FAVORITOS
function setupDrawersAndModals() {
  document.getElementById('drawer-overlay')?.addEventListener('click', closeAllDrawers);
}

function openQuickView(productId) {
  const product = CATALOG.find(p => p.id === productId);
  if (!product) return;

  const modal = document.getElementById('quick-view-modal');
  const content = document.getElementById('quick-view-content');
  if (!modal || !content) return;

  content.innerHTML = `
    <div class="quick-view-grid">
      <div>
        <img src="${product.imgPrimary}" alt="${product.name}" class="qv-img" onerror="handleImgError(this)">
      </div>
      <div class="qv-details">
        <span class="qv-tag">${product.collection} &bull; ${product.badge}</span>
        <h2 class="qv-title">${product.name}</h2>
        <p class="qv-price">${product.price ? Number(product.price).toLocaleString('pt-MZ') + ' MT' : 'Preço sob consulta'}</p>
        <p class="qv-desc">${product.description}</p>
        
        <div class="qv-specs">
          ${product.specs.map(s => `<div>&bull; ${s}</div>`).join('')}
        </div>

        <div style="margin-top: auto; display: flex; gap: 10px; flex-wrap: wrap; padding-top: 16px;">
          <button class="btn-luxury btn-luxury-whatsapp" style="flex: 1;" onclick="buyProductViaWhatsApp(${product.id}); closeQuickView();">
            ${WHATSAPP_SVG_ICON}
            Finalizar Compra no WhatsApp
          </button>
          <button class="btn-luxury btn-luxury-outline" style="padding: 12px 18px;" onclick="addToBag(${product.id}); closeQuickView();" title="Adicionar à Sacola">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
            </svg>
          </button>
          <button class="btn-luxury btn-luxury-outline qv-edit-btn" style="padding: 12px 18px;" onclick="closeQuickView(); openProductEditor(${product.id});" title="Modificar Foto e Preço">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 20h9"></path>
              <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
            </svg>
            Editar
          </button>
        </div>
      </div>
    </div>
  `;

  modal.classList.add('is-open');
  console.log('[openProductEditor] modal aberto! classes:', modal.className);
  document.getElementById('drawer-overlay')?.classList.add('is-active');
  document.body.classList.add('no-scroll');
}

function closeQuickView() {
  document.getElementById('quick-view-modal')?.classList.remove('is-open');
  document.getElementById('drawer-overlay')?.classList.remove('is-active');
  document.body.classList.remove('no-scroll');
}

// Sacola de Compras
function openBagDrawer() {
  renderBagItems();
  document.getElementById('bag-drawer')?.classList.add('is-open');
  document.getElementById('drawer-overlay')?.classList.add('is-active');
  document.body.classList.add('no-scroll');
}

function closeBagDrawer() {
  document.getElementById('bag-drawer')?.classList.remove('is-open');
  document.getElementById('drawer-overlay')?.classList.remove('is-active');
  document.body.classList.remove('no-scroll');
}

function addToBag(productId) {
  const product = CATALOG.find(p => p.id === productId);
  if (!product) return;

  const existing = STATE.cart.find(i => i.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    STATE.cart.push({
      id: product.id,
      name: product.name,
      materialLabel: product.materialLabel,
      img: product.imgPrimary,
      price: product.price || 0,
      qty: 1
    });
  }

  updateCartBadges();
  showToast(`${product.name} adicionado à sacola!`);
  openBagDrawer();
}

function renderBagItems() {
  const body = document.getElementById('bag-drawer-body');
  if (!body) return;

  if (STATE.cart.length === 0) {
    body.innerHTML = `
      <div style="text-align: center; padding: 60px 20px; color: var(--color-text-muted);">
        <h3 style="font-family: var(--font-serif); font-size: 1.4rem; color: var(--color-text-primary);">Sua sacola está vazia</h3>
        <p style="font-size: 0.85rem; margin-top: 8px;">Explore as categorias para adicionar joias Infinity.</p>
      </div>
    `;
    const footer = document.querySelector('#bag-drawer .drawer-footer');
    if (footer) footer.style.display = 'none';
    return;
  }

  let total = 0;
  const itemsHtml = STATE.cart.map(item => {
    const prod = CATALOG.find(p => p.id === item.id) || item;
    const price = prod.price ? Number(prod.price) : 0;
    const subtotal = price * item.qty;
    total += subtotal;

    return `
      <div class="drawer-item">
        <img src="${prod.imgPrimary || item.img}" alt="${item.name}" onerror="handleImgError(this)">
        <div class="drawer-item-info">
          <h4 class="drawer-item-title">${item.name}</h4>
          <span class="drawer-item-meta">${item.materialLabel} &bull; Qtd: ${item.qty}</span>
          ${price > 0 ? `<div class="drawer-item-price">${price.toLocaleString('pt-MZ')} MT <span style="font-size:0.75rem; color:var(--color-text-muted); font-weight:normal;">(Sub: ${subtotal.toLocaleString('pt-MZ')} MT)</span></div>` : ''}
          <div class="drawer-item-controls">
            <button style="font-size: 0.75rem; color: var(--color-accent); text-decoration: underline;" onclick="removeFromBag(${item.id})">Remover</button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  body.innerHTML = `
    ${itemsHtml}
    ${total > 0 ? `
      <div class="bag-total-summary">
        <div class="bag-total-row">
          <span>Subtotal estimado:</span>
          <strong>${total.toLocaleString('pt-MZ')} MT</strong>
        </div>
      </div>
    ` : ''}
  `;

  const footer = document.querySelector('#bag-drawer .drawer-footer');
  if (footer) {
    footer.style.display = 'block';
    footer.innerHTML = `
      <button class="btn-luxury btn-luxury-whatsapp" style="width: 100%;" onclick="checkoutBagViaWhatsApp()">
        ${WHATSAPP_SVG_ICON}
        Finalizar Pedido no WhatsApp (${total > 0 ? total.toLocaleString('pt-MZ') + ' MT' : 'Sacola'})
      </button>
    `;
  }
}

function removeFromBag(productId) {
  STATE.cart = STATE.cart.filter(i => i.id !== productId);
  updateCartBadges();
  renderBagItems();
  showToast("Item removido da sacola.");
}

function updateCartBadges() {
  const total = STATE.cart.reduce((s, i) => s + i.qty, 0);
  document.querySelectorAll('.bag-count-badge').forEach(b => {
    b.textContent = total;
    b.style.display = total > 0 ? 'flex' : 'none';
  });
  // Sync mobile bottom nav badge
  document.querySelectorAll('.mob-bag-count').forEach(b => {
    b.textContent = total;
    b.style.display = total > 0 ? 'flex' : 'none';
  });
}

// Favoritos
function openWishlistDrawer() {
  renderWishlistItems();
  document.getElementById('wishlist-drawer')?.classList.add('is-open');
  document.getElementById('drawer-overlay')?.classList.add('is-active');
  document.body.classList.add('no-scroll');
}

function closeWishlistDrawer() {
  document.getElementById('wishlist-drawer')?.classList.remove('is-open');
  document.getElementById('drawer-overlay')?.classList.remove('is-active');
  document.body.classList.remove('no-scroll');
}

function toggleWishlist(productId) {
  const product = CATALOG.find(p => p.id === productId);
  if (!product) return;

  const idx = STATE.wishlist.indexOf(productId);
  if (idx > -1) {
    STATE.wishlist.splice(idx, 1);
    showToast(`${product.name} removido dos favoritos.`);
  } else {
    STATE.wishlist.push(productId);
    showToast(`${product.name} salvo nos favoritos!`);
  }

  updateWishlistBadges();
  if (STATE.activeView === 'category') renderCategoryView();
}

function renderWishlistItems() {
  const body = document.getElementById('wishlist-drawer-body');
  if (!body) return;

  const favs = CATALOG.filter(p => STATE.wishlist.includes(p.id));

  if (favs.length === 0) {
    body.innerHTML = `
      <div style="text-align: center; padding: 60px 20px; color: var(--color-text-muted);">
        <h3 style="font-family: var(--font-serif); font-size: 1.4rem; color: var(--color-text-primary);">Lista de desejos vazia</h3>
        <p style="font-size: 0.85rem; margin-top: 8px;">Favorite suas joias prediletas clicando no coração.</p>
      </div>
    `;
    return;
  }

  body.innerHTML = favs.map(product => `
    <div class="drawer-item">
      <img src="${product.imgPrimary}" alt="${product.name}" onerror="handleImgError(this)">
      <div class="drawer-item-info">
        <h4 class="drawer-item-title">${product.name}</h4>
        <span class="drawer-item-meta">${product.categoryName} &bull; ${product.materialLabel}</span>
        ${product.price ? `<div class="drawer-item-price">${Number(product.price).toLocaleString('pt-MZ')} MT</div>` : ''}
        <div class="drawer-item-controls" style="margin-top: 10px; display: flex; gap: 8px; align-items: center;">
          <button class="product-whatsapp-btn" style="padding: 6px 12px; font-size: 0.72rem;" onclick="buyProductViaWhatsApp(${product.id})">
            ${WHATSAPP_SVG_ICON}
            <span>Comprar</span>
          </button>
          <button class="btn-luxury btn-luxury-outline" style="padding: 6px 10px; font-size: 0.72rem;" onclick="addToBag(${product.id})">Sacola</button>
          <button style="font-size: 0.75rem; color: var(--color-text-muted); margin-left: auto;" onclick="toggleWishlist(${product.id}); renderWishlistItems();">Remover</button>
        </div>
      </div>
    </div>
  `).join('');
}

function updateWishlistBadges() {
  const count = STATE.wishlist.length;
  document.querySelectorAll('.wishlist-count-badge').forEach(b => {
    b.textContent = count;
    b.style.display = count > 0 ? 'flex' : 'none';
  });
  // Sync mobile bottom nav badge
  document.querySelectorAll('.mob-wish-count').forEach(b => {
    b.textContent = count;
    b.style.display = count > 0 ? 'flex' : 'none';
  });
}

function closeAllDrawers() {
  document.getElementById('bag-drawer')?.classList.remove('is-open');
  document.getElementById('wishlist-drawer')?.classList.remove('is-open');
  document.getElementById('quick-view-modal')?.classList.remove('is-open');
  document.getElementById('product-editor-modal')?.classList.remove('is-open');
  document.getElementById('catalog-manager-modal')?.classList.remove('is-open');
  document.getElementById('drawer-overlay')?.classList.remove('is-active');
  document.body.classList.remove('no-scroll');
}

function showToast(message) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// 7. CARROSSÉIS IMERSIVOS NA PÁGINA INICIAL
function setupStoryScroll() {
  const scenes = document.querySelectorAll('.story-scene');
  const vDots = document.querySelectorAll('.v-dot-btn');
  const counterEl = document.getElementById('story-counter');
  const trackFill = document.getElementById('v-track-fill');

  let currentScene = 0;
  let isCooldown = false;

  function goToScene(idx) {
    if (idx < 0 || idx >= scenes.length || isCooldown) return;
    isCooldown = true;
    setTimeout(() => { isCooldown = false; }, 850);

    scenes.forEach((s, i) => s.classList.toggle('is-active-scene', i === idx));
    vDots.forEach((d, i) => d.classList.toggle('is-current', i === idx));
    currentScene = idx;

    if (counterEl) counterEl.textContent = `0${idx + 1} / 0${scenes.length}`;
    if (trackFill) trackFill.style.top = `${(idx / (scenes.length - 1)) * 80}%`;
  }

  // Click nos botões de navegação lateral
  vDots.forEach((dot, idx) => {
    dot.addEventListener('click', () => goToScene(idx));
  });

  // Listener de Scroll da Roda do Mouse
  window.addEventListener('wheel', (e) => {
    if (STATE.activeView !== 'immersive') return;
    
    // Se o usuário já rolou para baixo além do topo (na vitrine de produtos), permite rolagem normal!
    if (window.scrollY > 50) return;

    if (e.deltaY > 25) {
      if (currentScene < scenes.length - 1) {
        e.preventDefault();
        goToScene(currentScene + 1);
      }
      // Se já está na última cena e roda para baixo, deixa a rolagem fluir naturalmente para o catálogo!
    } else if (e.deltaY < -25) {
      if (currentScene > 0 && window.scrollY <= 10) {
        e.preventDefault();
        goToScene(currentScene - 1);
      }
    }
  }, { passive: false });

  // Swipe gestures for mobile carousel
  let touchStartY = 0;
  let touchEndY = 0;

  const swipeArea = document.getElementById('immersive-view');
  if (swipeArea) {
    swipeArea.addEventListener('touchstart', (e) => {
      touchStartY = e.changedTouches[0].screenY;
    }, { passive: true });

    swipeArea.addEventListener('touchend', (e) => {
      if (STATE.activeView !== 'immersive') return;
      if (window.scrollY > 40) return; // Permite rolagem normal pelos produtos no celular
      touchEndY = e.changedTouches[0].screenY;
      const diff = touchStartY - touchEndY;
      if (Math.abs(diff) < 40) return;
      if (diff > 0) {
        if (currentScene < scenes.length - 1) {
          goToScene(currentScene + 1);
        } else {
          scrollToHomeCatalog();
        }
      } else {
        goToScene(currentScene - 1);
      }
    }, { passive: true });
  }
}

// ==========================================================================
// MOBILE-SPECIFIC FUNCTIONS
// ==========================================================================

/** Open the mobile full-screen search overlay */
function openMobileSearch() {
  const overlay = document.getElementById('mobile-search-overlay');
  const input = document.getElementById('mobile-search-input');
  if (!overlay) return;
  overlay.classList.add('active');
  document.body.classList.add('no-scroll');
  setTimeout(() => input && input.focus(), 100);
}

/** Close the mobile search overlay */
function closeMobileSearch(event) {
  if (event && event.target !== document.getElementById('mobile-search-overlay')) return;
  const overlay = document.getElementById('mobile-search-overlay');
  if (!overlay) return;
  overlay.classList.remove('active');
  document.body.classList.remove('no-scroll');
  const input = document.getElementById('mobile-search-input');
  const results = document.getElementById('mobile-search-results');
  if (input) input.value = '';
  if (results) results.innerHTML = '';
}

/** Handle mobile search input — reuse catalog data */
function handleMobileSearch(query) {
  const results = document.getElementById('mobile-search-results');
  if (!results) return;

  if (!query || query.trim().length < 2) {
    results.innerHTML = '';
    return;
  }

  const q = query.toLowerCase();
  const matches = CATALOG.filter(p =>
    p.name.toLowerCase().includes(q) ||
    p.categoryName.toLowerCase().includes(q) ||
    p.collection.toLowerCase().includes(q)
  ).slice(0, 8);

  if (matches.length === 0) {
    results.innerHTML = `<div style="padding:20px;text-align:center;color:var(--color-text-muted);font-size:0.85rem;">Nenhum resultado encontrado.</div>`;
    return;
  }

  results.innerHTML = matches.map(p => `
    <div class="search-item" onclick="closeMobileSearch(); openQuickView(${p.id});" style="padding:12px 16px;">
      <img src="${p.imgPrimary}" alt="${p.name}" style="width:48px;height:48px;object-fit:cover;border-radius:8px;" onerror="handleImgError(this)">
      <div class="search-item-info">
        <div class="search-item-title">${p.name}</div>
        <div class="search-item-cat">${p.categoryName} &bull; ${p.collection} &bull; <strong style="color:var(--color-accent); font-weight:700;">${p.price ? Number(p.price).toLocaleString('pt-MZ') + ' MT' : ''}</strong></div>
      </div>
    </div>
  `).join('');
}

/** Set the active state on the mobile bottom nav */
function setMobileActiveNav(activeId) {
  document.querySelectorAll('.mobile-bottom-nav-btn').forEach(btn => {
    btn.classList.toggle('active', btn.id === activeId);
  });
}

// Retornar para immersive ativa home no bottom nav
const _origShowImmersiveHome = window.showImmersiveHome;
window.showImmersiveHome = function() {
  if (typeof _origShowImmersiveHome === 'function') _origShowImmersiveHome();
  setMobileActiveNav('mob-nav-home');
};

// ==========================================================================
// EXPOSIÇÃO GLOBAL DE FUNÇÕES PARA O HTML
// ==========================================================================
window.initCatalog = initCatalog;
window.saveProductData = saveProductData;
window.resetProductToDefault = resetProductToDefault;
window.deleteCustomProduct = deleteCustomProduct;
window.resetAllCatalogToDefault = resetAllCatalogToDefault;
window.exportCatalogBackup = exportCatalogBackup;
window.importCatalogBackup = importCatalogBackup;
window.openProductEditor = openProductEditor;
window.closeProductEditor = closeProductEditor;
window.handleProductEditorSubmit = handleProductEditorSubmit;
window.selectEasyCategory = selectEasyCategory;
window.toggleAdvancedOptions = toggleAdvancedOptions;
window.onFileSelected = onFileSelected;
window.updatePreviewFromInput = updatePreviewFromInput;
window.updatePriceBadge = updatePriceBadge;
window.setPriceValue = setPriceValue;
window.onRestoreCurrentProduct = onRestoreCurrentProduct;
window.onDeleteCurrentProduct = onDeleteCurrentProduct;
window.openCatalogManager = openCatalogManager;
window.closeCatalogManager = closeCatalogManager;
window.renderCatalogManagerList = renderCatalogManagerList;
window.filterManagerList = filterManagerList;
window.setManagerCategoryFilter = setManagerCategoryFilter;
window.buyProductViaWhatsApp = buyProductViaWhatsApp;
window.checkoutBagViaWhatsApp = checkoutBagViaWhatsApp;
window.addToBag = addToBag;
window.removeFromBag = removeFromBag;
window.openBagDrawer = openBagDrawer;
window.closeBagDrawer = closeBagDrawer;
window.toggleWishlist = toggleWishlist;
window.openWishlistDrawer = openWishlistDrawer;
window.closeWishlistDrawer = closeWishlistDrawer;
window.openQuickView = openQuickView;
window.closeQuickView = closeQuickView;
window.closeAllDrawers = closeAllDrawers;
window.showCategoryPage = showCategoryPage;
window.showToast = showToast;

// Home Catalog Showcase
window.renderHomeCatalogGrid = renderHomeCatalogGrid;
window.filterHomeCatalog = filterHomeCatalog;
window.onHomeCatalogSearch = onHomeCatalogSearch;
window.clearHomeCatalogSearch = clearHomeCatalogSearch;
window.onHomeCatalogSort = onHomeCatalogSort;
window.scrollToHomeCatalog = scrollToHomeCatalog;
window.updateHomeCategoryCounts = updateHomeCategoryCounts;


// Auth functions
window.isAdminAuthenticated = isAdminAuthenticated;
window.requireAdminAuth = requireAdminAuth;
window.openAdminLoginModal = openAdminLoginModal;
window.closeAdminLoginModal = closeAdminLoginModal;
window.adminPinKey = adminPinKey;
window.adminLoginSubmit = adminLoginSubmit;
window.adminLogout = adminLogout;
window.updateAdminUIVisibility = updateAdminUIVisibility;
