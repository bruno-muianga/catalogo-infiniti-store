/**
 * ==========================================================================
 * INFINITY STORE — CATÁLOGO OFICIAL PANDORA
 * Coleções completas baseadas em pt.pandora.net:
 * Pulseiras, Anéis, Colares, Brincos, Pingentes (Contas & Pendentes)
 * ==========================================================================
 */

'use strict';

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
    imgPrimary: "https://images.unsplash.com/photo-1611591475824-2c7c569f1064?q=80&w=800&auto=format&fit=crop",
    imgAlt: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=800&auto=format&fit=crop"
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
    imgPrimary: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=800&auto=format&fit=crop",
    imgAlt: "https://images.unsplash.com/photo-1611591475824-2c7c569f1064?q=80&w=800&auto=format&fit=crop"
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
    imgPrimary: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=800&auto=format&fit=crop",
    imgAlt: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=800&auto=format&fit=crop"
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
    imgPrimary: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?q=80&w=800&auto=format&fit=crop",
    imgAlt: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800&auto=format&fit=crop"
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
    imgPrimary: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800&auto=format&fit=crop",
    imgAlt: "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?q=80&w=800&auto=format&fit=crop"
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
    imgPrimary: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=800&auto=format&fit=crop",
    imgAlt: "https://images.unsplash.com/photo-1611591475824-2c7c569f1064?q=80&w=800&auto=format&fit=crop"
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
    imgPrimary: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=800&auto=format&fit=crop",
    imgAlt: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800&auto=format&fit=crop"
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
    imgPrimary: "https://images.unsplash.com/photo-1611591475824-2c7c569f1064?q=80&w=800&auto=format&fit=crop",
    imgAlt: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=800&auto=format&fit=crop"
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
    imgPrimary: "https://images.unsplash.com/photo-1611591475824-2c7c569f1064?q=80&w=800&auto=format&fit=crop",
    imgAlt: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=800&auto=format&fit=crop"
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
    imgPrimary: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=800&auto=format&fit=crop",
    imgAlt: "https://images.unsplash.com/photo-1611591475824-2c7c569f1064?q=80&w=800&auto=format&fit=crop"
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
    imgPrimary: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800&auto=format&fit=crop",
    imgAlt: "https://images.unsplash.com/photo-1611591475824-2c7c569f1064?q=80&w=800&auto=format&fit=crop"
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
    imgPrimary: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=800&auto=format&fit=crop",
    imgAlt: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800&auto=format&fit=crop"
  },

  // --------------------------------------------------------------------------
  // 2. ANÉIS (PANDORA TIMELESS, MOMENTS, SIGNATURE)
  // --------------------------------------------------------------------------
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
    imgPrimary: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=800&auto=format&fit=crop",
    imgAlt: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?q=80&w=800&auto=format&fit=crop"
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
    imgPrimary: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?q=80&w=800&auto=format&fit=crop",
    imgAlt: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=800&auto=format&fit=crop"
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
    imgPrimary: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=800&auto=format&fit=crop",
    imgAlt: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?q=80&w=800&auto=format&fit=crop"
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
    imgPrimary: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?q=80&w=800&auto=format&fit=crop",
    imgAlt: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=800&auto=format&fit=crop"
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
    imgPrimary: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=800&auto=format&fit=crop",
    imgAlt: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?q=80&w=800&auto=format&fit=crop"
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
    imgPrimary: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=800&auto=format&fit=crop",
    imgAlt: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800&auto=format&fit=crop"
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
    imgPrimary: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800&auto=format&fit=crop",
    imgAlt: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=800&auto=format&fit=crop"
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
    imgPrimary: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=800&auto=format&fit=crop",
    imgAlt: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=800&auto=format&fit=crop"
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
    imgPrimary: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=800&auto=format&fit=crop",
    imgAlt: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800&auto=format&fit=crop"
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
    imgPrimary: "https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=800&auto=format&fit=crop",
    imgAlt: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800&auto=format&fit=crop"
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
    imgPrimary: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800&auto=format&fit=crop",
    imgAlt: "https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=800&auto=format&fit=crop"
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
    imgPrimary: "https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=800&auto=format&fit=crop",
    imgAlt: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=800&auto=format&fit=crop"
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
    imgPrimary: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=800&auto=format&fit=crop",
    imgAlt: "https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=800&auto=format&fit=crop"
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
    imgPrimary: "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?q=80&w=800&auto=format&fit=crop",
    imgAlt: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800&auto=format&fit=crop"
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
    imgPrimary: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800&auto=format&fit=crop",
    imgAlt: "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?q=80&w=800&auto=format&fit=crop"
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
    imgPrimary: "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?q=80&w=800&auto=format&fit=crop",
    imgAlt: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800&auto=format&fit=crop"
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
    imgPrimary: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800&auto=format&fit=crop",
    imgAlt: "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?q=80&w=800&auto=format&fit=crop"
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
    imgPrimary: "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?q=80&w=800&auto=format&fit=crop",
    imgAlt: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800&auto=format&fit=crop"
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
    imgPrimary: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800&auto=format&fit=crop",
    imgAlt: "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?q=80&w=800&auto=format&fit=crop"
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
          
          <img src="${product.imgPrimary}" alt="${product.name}" class="product-img primary-img" loading="lazy">
          <img src="${product.imgAlt}" alt="${product.name}" class="product-img alt-img" loading="lazy">
          
          <button class="product-quick-view-btn" onclick="openQuickView(${product.id})">
            Espiar Detalhes
          </button>
        </div>

        <div class="product-info">
          <span class="product-cat-tag">${product.collection} &bull; ${product.materialLabel}</span>
          <h3 class="product-title" onclick="openQuickView(${product.id})">${product.name}</h3>
          <p class="product-material-text">${product.specs[0] || ''}</p>

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
            <img src="${p.imgPrimary}" alt="${p.name}">
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
        <img src="${product.imgPrimary}" alt="${product.name}" class="qv-img">
      </div>
      <div class="qv-details">
        <span class="qv-tag">${product.collection} &bull; ${product.badge}</span>
        <h2 class="qv-title">${product.name}</h2>
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
      <img src="${product.imgPrimary}" alt="${product.name}">
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

  // Botões de navegação lateral
  vDots.forEach((dot, index) => {
    dot.addEventListener('click', () => goToScene(index));
  });
}
