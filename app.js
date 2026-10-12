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
const CATALOG = [
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

// 2. CONFIGURAÇÃO DE CONTATO & ESTADO
const WHATSAPP_PHONE = "5511999999999";
const WHATSAPP_SVG_ICON = `<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-5.805 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>`;

// Função para finalizar compra de produto individual diretamente no WhatsApp
function buyProductViaWhatsApp(productId) {
  const product = CATALOG.find(p => p.id === productId);
  if (!product) return;
  const msg = `Olá, Infinity Store! 💎\n\nGostaria de finalizar a compra da seguinte joia:\n\n• *Produto:* ${product.name}\n• *Coleção:* ${product.collection}\n• *Material:* ${product.materialLabel}\n• *Código:* #${product.id}\n\nPoderiam me informar sobre prazos de entrega e dados para pagamento?`;
  const url = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');
}

// Função para finalizar sacola com múltiplos produtos no WhatsApp
function checkoutBagViaWhatsApp() {
  if (STATE.cart.length === 0) {
    showToast('Sua sacola está vazia.');
    return;
  }
  const itemsSummary = STATE.cart.map(i => `• ${i.qty}x *${i.name}* (${i.materialLabel}) - Cód #${i.id}`).join('\n');
  const msg = `Olá, Infinity Store! 💎\n\nGostaria de finalizar meu pedido com as seguintes joias selecionadas:\n\n${itemsSummary}\n\nComo posso prosseguir com o pagamento e a entrega?`;
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
  setupNavigation();
  setupSearch();
  setupDrawersAndModals();
  setupStoryScroll();
  updateWishlistBadges();
  updateCartBadges();
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
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showImmersiveHome() {
  STATE.activeView = 'immersive';
  STATE.currentCategory = null;

  document.body.classList.remove('catalog-mode');
  document.body.classList.add('immersive-mode');

  document.getElementById('immersive-view').style.display = 'block';
  document.getElementById('category-page-view').classList.remove('active-view');

  document.querySelectorAll('.nav-category-link').forEach(link => link.classList.remove('active'));
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

  grid.innerHTML = items.map(product => {
    const isFav = STATE.wishlist.includes(product.id);
    return `
      <article class="product-card" data-id="${product.id}">
        <div class="product-media">
          <span class="product-badge">${product.badge}</span>
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
          ${product.price ? `<p class="product-price">${product.price.toLocaleString('pt-MZ')} MT</p>` : ''}

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
        <div class="search-results-header">Produtos Pandora Encontrados (${matches.length})</div>
        ${matches.map(p => `
          <div class="search-item" onclick="openQuickView(${p.id}); document.getElementById('search-dropdown').classList.remove('active');">
            <img src="${p.imgPrimary}" alt="${p.name}" onerror="handleImgError(this)">
            <div class="search-item-info">
              <div class="search-item-title">${p.name}</div>
              <div class="search-item-cat">${p.collection} &bull; ${p.categoryName}</div>
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
        ${product.price ? `<p class="qv-price">${product.price.toLocaleString('pt-MZ')} MT</p>` : ''}
        <p class="qv-desc">${product.description}</p>
        
        <div class="qv-specs">
          ${product.specs.map(s => `<div>&bull; ${s}</div>`).join('')}
        </div>

        <div style="margin-top: auto; display: flex; gap: 10px; flex-wrap: wrap;">
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
        </div>
      </div>
    </div>
  `;

  modal.classList.add('is-open');
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
        <p style="font-size: 0.85rem; margin-top: 8px;">Explore as categorias para adicionar joias Pandora.</p>
      </div>
    `;
    return;
  }

  body.innerHTML = STATE.cart.map(item => `
    <div class="drawer-item">
      <img src="${item.img}" alt="${item.name}">
      <div class="drawer-item-info">
        <h4 class="drawer-item-title">${item.name}</h4>
        <span class="drawer-item-meta">${item.materialLabel} &bull; Qtd: ${item.qty}</span>
        <div class="drawer-item-controls">
          <button style="font-size: 0.75rem; color: var(--color-accent); text-decoration: underline;" onclick="removeFromBag(${item.id})">Remover</button>
        </div>
      </div>
    </div>
  `).join('');
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
    e.preventDefault();
    if (e.deltaY > 25) {
      goToScene(currentScene + 1);
    } else if (e.deltaY < -25) {
      goToScene(currentScene - 1);
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
      touchEndY = e.changedTouches[0].screenY;
      const diff = touchStartY - touchEndY;
      if (Math.abs(diff) < 40) return; // ignore small swipes
      if (diff > 0) {
        goToScene(currentScene + 1);
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
  // If called from the backdrop click, only close when clicking the backdrop itself
  if (event && event.target !== document.getElementById('mobile-search-overlay')) return;
  const overlay = document.getElementById('mobile-search-overlay');
  if (!overlay) return;
  overlay.classList.remove('active');
  document.body.classList.remove('no-scroll');
  // Reset
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
    <div class="search-item" onclick="closeMobileSearch(); showCategoryPage('${p.category}');" style="padding:12px 16px;">
      <img src="${p.imgPrimary}" alt="${p.name}" style="width:48px;height:48px;object-fit:cover;border-radius:8px;" onerror="handleImgError(this)">
      <div class="search-item-info">
        <div class="search-item-title">${p.name}</div>
        <div class="search-item-cat">${p.categoryName} &bull; ${p.collection}</div>
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

// Also set home active when returning to immersive
const _origShowImmersiveHome = window.showImmersiveHome;
window.showImmersiveHome = function() {
  if (typeof _origShowImmersiveHome === 'function') _origShowImmersiveHome();
  setMobileActiveNav('mob-nav-home');
};
