import { Product } from "@/components/contexts/cart/cardTypes";

// Mocked data based on https://fakestoreapi.com/products and translated to Portuguese
export const mockedProducts: Product[] = [
  {
    id: 1,
    title: "Fjallraven - Mochila Foldsack No. 1, Cabe 15 Laptops",
    price: 549.75,
    originalPrice: 649.75,
    description: "Sua mochila perfeita para uso diário e caminhadas na floresta. Guarde seu laptop (até 15 polegadas) no compartimento acolchoado, seu uso diário",
    category: "roupas masculinas",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
    inStock: false,
    rating: {
      rate: 3.9,
      count: 120
    }
  },
  {
    id: 2,
    title: "Camisetas Masculinas Casuais Premium Slim Fit",
    price: 111.50,
    description: "Estilo slim, contraste raglan manga longa, placket henley de três botões, tecido leve e macio para usar respirável e confortável. E camisas com costura sólida com gola redonda feita para durabilidade e um ótimo caimento para moda casual e fãs de baseball. O estilo henley de gola redonda inclui um placket de três botões.",
    category: "roupas masculinas",
    image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png",
    inStock: true,
    rating: {
      rate: 4.1,
      count: 259
    }
  },
  {
    id: 3,
    title: "Jaqueta Masculina de Algodão",
    price: 279.95,
    originalPrice: 349.95,
    description: "Ótimas jaquetas para Primavera/Outono/Inverno, adequadas para muitas ocasiões, como trabalho, caminhada, acampamento, escalada, ciclismo, viagem ou outras atividades ao ar livre. Boa escolha de presente para você ou sua família. Um amor caloroso para Pai, marido ou filho neste dia de ação de graças ou Natal.",
    category: "roupas masculinas",
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png",
    inStock: true,
    rating: {
      rate: 4.7,
      count: 500
    }
  },
  {
    id: 4,
    title: "Roupa Masculina Casual Slim Fit",
    price: 79.95,
    description: "A cor pode ser ligeiramente diferente entre a tela e na prática. / Observe que os tipos de corpo variam por pessoa, portanto, informações detalhadas de tamanho devem ser revisadas abaixo na descrição do produto.",
    category: "roupas masculinas",
    image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_t.png",
    inStock: true,
    rating: {
      rate: 2.1,
      count: 430
    }
  },
  {
    id: 5,
    title: "Pulseira Feminina John Hardy Legends Naga Ouro e Prata Dragão",
    price: 3299.00,
    originalPrice: 3799.00,
    description: "Da nossa Coleção Legends, o Naga foi inspirado pelo dragão d'água mítico que protege a pérola do oceano. Use voltado para dentro para ser abençoado com amor e abundância, ou para fora para proteção.",
    category: "joias",
    image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_t.png",
    inStock: true,
    rating: {
      rate: 4.6,
      count: 400
    }
  },
  {
    id: 6,
    title: "Ouro Sólido Micropave Petite",
    price: 840.00,
    description: "Satisfação Garantida. Devolva ou troque qualquer pedido dentro de 30 dias. Projetado e vendido pela Hafeez Center nos Estados Unidos. Satisfação Garantida. Devolva ou troque qualquer pedido dentro de 30 dias.",
    category: "joias",
    image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_t.png",
    inStock: true,
    rating: {
      rate: 3.9,
      count: 70
    }
  },
  {
    id: 7,
    title: "Princesa Banhada a Ouro Branco",
    price: 39.99,
    originalPrice: 59.99,
    description: "Anel Clássico Criado para Casamento Noivado Solitário Diamante Promessa para Ela. Presentes para mimar seu amor mais para Noivado, Casamento, Aniversário, Dia dos Namorados...",
    category: "joias",
    image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_t.png",
    inStock: true,
    rating: {
      rate: 3,
      count: 400
    }
  },
  {
    id: 8,
    title: "Pierced Owl Aço Inoxidável Duplo Banhado a Ouro Rosa",
    price: 54.95,
    description: "Brincos Plug Túnel Duplo Flared Banhado a Ouro Rosa. Feito de Aço Inoxidável 316L",
    category: "joias",
    image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_t.png",
    inStock: true,
    rating: {
      rate: 1.9,
      count: 100
    }
  },
  {
    id: 9,
    title: "WD 2TB Elements HD Externo Portátil - USB 3.0",
    price: 299.99,
    originalPrice: 399.99,
    description: "Compatibilidade USB 3.0 e USB 2.0 Transferências rápidas de dados Melhora Performance do PC Alta Capacidade; Compatibilidade Formatado NTFS para Windows 10, Windows 8.1, Windows 7; Reformatação pode ser necessária para outros sistemas operacionais; Compatibilidade pode variar dependendo da configuração de hardware e sistema operacional do usuário",
    category: "eletrônicos",
    image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_t.png",
    inStock: true,
    rating: {
      rate: 3.3,
      count: 203
    }
  },
  {
    id: 10,
    title: "SanDisk SSD PLUS 1TB SSD Interno - SATA III 6 Gb/s",
    price: 545.00,
    description: "Upgrade fácil para inicialização mais rápida, desligamento, carregamento de aplicativos e resposta (Comparado ao disco rígido SATA 2.5' de 5400 RPM; Baseado em especificações publicadas e testes internos de benchmark usando pontuações PCMark vantage) Aumenta performance de escrita em rajada, tornando-o ideal para cargas de trabalho típicas de PC O equilíbrio perfeito de performance e confiabilidade Velocidades de leitura/escrita de até 535MB/s/450MB/s",
    category: "eletrônicos",
    image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_t.png",
    inStock: true,
    rating: {
      rate: 2.9,
      count: 470
    }
  },
  {
    id: 11,
    title: "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
    price: 489.99,
    originalPrice: 599.99,
    description: "Flash 3D NAND são aplicados para entregar altas velocidades de transferência Velocidades de transferência notáveis que permitem inicialização mais rápida e melhor performance geral do sistema. A Tecnologia SLC Cache avançada permite aumento de performance e maior vida útil Design slim de 7mm adequado para Ultrabooks e notebooks ultra-slim. Suporta comando TRIM, tecnologia Garbage Collection, RAID, e ECC (Error Checking & Correction) para fornecer performance otimizada e confiabilidade aprimorada.",
    category: "eletrônicos",
    image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_t.png",
    inStock: true,
    rating: {
      rate: 4.8,
      count: 319
    }
  },
  {
    id: 12,
    title: "WD 4TB Gaming Drive Funciona com Playstation 4 HD Externo Portátil",
    price: 570.00,
    description: "Expanda sua experiência de jogos PS4, Jogue em qualquer lugar Rápido e fácil, configuração Design elegante com alta capacidade, garantia limitada do fabricante de 3 anos",
    category: "eletrônicos",
    image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_t.png",
    inStock: true,
    rating: {
      rate: 4.8,
      count: 400
    }
  },
  {
    id: 13,
    title: "Acer SB220Q bi 21.5 polegadas Full HD (1920 x 1080) IPS Ultra-Fino",
    price: 2695.00,
    originalPrice: 2995.00,
    description: "21. 5 polegadas Full HD (1920 x 1080) display IPS widescreen E tecnologia Radeon free Sync. Sem compatibilidade para Suporte VESA Taxa de Atualização: 75Hz - Usando porta HDMI Design sem moldura | ultra-fino | tempo de resposta 4ms | painel IPS Proporção - 16: 9. Cores Suportadas - 16. 7 milhões de cores. Brilho - 250 nit Ângulo de inclinação -5 grau a 15 grau. Ângulo de visualização horizontal-178 grau. Ângulo de visualização vertical-178 grau 75 hertz",
    category: "eletrônicos",
    image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_t.png",
    inStock: true,
    rating: {
      rate: 2.9,
      count: 250
    }
  },
  {
    id: 14,
    title: "Samsung 49 Polegadas CHG90 144Hz Monitor Gamer Curvo (LC49HG90DMNXZA) – Tela Super Ultrawide QLED",
    price: 4499.95,
    originalPrice: 5299.95,
    description: "MONITOR GAMER CURVO SUPER ULTRAWIDE 32:9 DE 49 POLEGADAS com tela dupla de 27 polegadas lado a lado TECNOLOGIA QUANTUM DOT (QLED), suporte HDR e calibração de fábrica fornece cor e contraste incrivelmente realistas e precisos ALTA TAXA DE ATUALIZAÇÃO 144HZ e tempo de resposta ultra rápido de 1ms trabalham para eliminar motion blur, ghosting e reduzir lag de entrada",
    category: "eletrônicos",
    image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_t.png",
    inStock: true,
    rating: {
      rate: 2.2,
      count: 140
    }
  },
  {
    id: 15,
    title: "BIYLACLESEN Jaqueta de Snowboard 3-em-1 Feminina Casacos de Inverno",
    price: 284.95,
    description: "Nota: As Jaquetas são tamanho padrão americano, Por favor escolha o tamanho como você normalmente usa Material: 100% Poliéster; Forro Destacável: Fleece Quente. Forro Funcional Destacável: Amigável à Pele, Leve e Quente. Jaqueta de Forro com Gola Alta, mantém você aquecido em clima frio. Bolsos com Zíper: 2 Bolsos de Mão com Zíper, 2 Bolsos com Zíper no Peito (suficiente para guardar cartões ou chaves) e 1 Bolso Oculto Interno. Bolsos de Mão com Zíper e Bolso Oculto mantêm suas coisas seguras. Design Humanizado: Capuz Ajustável e Destacável e punho ajustável para prevenir vento e água, para um ajuste confortável. Design Destacável 3 em 1 fornece mais conveniência, você pode separar o casaco e o interno conforme necessário, ou usá-los juntos. É adequado para diferentes estações e ajuda você a se adaptar a diferentes climas",
    category: "roupas femininas",
    image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_t.png",
    inStock: true,
    rating: {
      rate: 2.6,
      count: 235
    }
  },
  {
    id: 16,
    title: "Lock and Love Jaqueta Moto Biker Feminina Couro Sintético Removível com Capuz",
    price: 129.99,
    originalPrice: 179.99,
    description: "100% POLIURETANO(externa) 100% POLIÉSTER(forro) 75% POLIÉSTER 25% ALGODÃO (SUÉTER), Material de couro sintético para estilo e conforto / 2 bolsos frontais, Jaqueta de couro sintético estilo denim com capuz 2-em-1, Detalhe de botão na cintura / Costura detalhada nas laterais, LAVAR APENAS À MÃO / NÃO USAR ALVEJANTE / SECAR NO VARAL / NÃO PASSAR",
    category: "roupas femininas",
    image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_t.png",
    inStock: true,
    rating: {
      rate: 2.9,
      count: 340
    }
  },
  {
    id: 17,
    title: "Jaqueta de Chuva Feminina Corta-Vento Listrada Casacos de Chuva para Escalada",
    price: 199.95,
    description: "Leve perfeito para viagem ou uso casual---Manga longa com capuz, design de cintura ajustável com cordão. Capa de chuva com fechamento frontal de botão e zíper, totalmente listrada forrada e A Capa de Chuva tem 2 bolsos laterais de bom tamanho para guardar todo tipo de coisas, cobre os quadris, e o capuz é generoso mas não exagera. Capuz Forrado de Algodão Anexado com Cordões Ajustáveis dão um visual realmente estiloso.",
    category: "roupas femininas",
    image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2t.png",
    inStock: true,
    rating: {
      rate: 3.8,
      count: 679
    }
  },
  {
    id: 18,
    title: "MBJ Feminino Sólido Manga Curta Gola Canoa V",
    price: 39.25,
    originalPrice: 54.25,
    description: "95% RAYON 5% SPANDEX, Feito nos EUA ou Importado, Não Usar Alvejante, Tecido leve com ótimo stretch para conforto, Canelado nas mangas e gola / Costura dupla na barra inferior",
    category: "roupas femininas",
    image: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_t.png",
    inStock: true,
    rating: {
      rate: 4.7,
      count: 130
    }
  },
  {
    id: 19,
    title: "Opna Feminino Manga Curta Absorção de Umidade",
    price: 39.75,
    description: "100% Poliéster, Lavagem à máquina, 100% poliéster catiônico interlock, Lavagem à Máquina & Pré Encolhido para um Ótimo Ajuste, Leve, espaçoso e altamente respirável com tecido que absorve umidade que ajuda a manter a umidade longe, Tecido Leve Macio com gola V confortável e ajuste mais slim, entrega uma silhueta mais elegante e feminina e Conforto Adicionado",
    category: "roupas femininas",
    image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_t.png",
    inStock: true,
    rating: {
      rate: 4.5,
      count: 146
    }
  },
  {
    id: 20,
    title: "DANVOUY Camiseta Feminina Casual Algodão Manga Curta",
    price: 54.95,
    originalPrice: 74.95,
    description: "95%Algodão,5%Spandex, Características: Casual, Manga Curta, Estampa de Letra,Gola V,Camisetas Fashion, O tecido é macio e tem algum stretch., Ocasião: Casual/Escritório/Praia/Escola/Casa/Rua. Estação: Primavera,Verão,Outono,Inverno.",
    category: "roupas femininas",
    image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_t.png",
    inStock: true,
    rating: {
      rate: 3.6,
      count: 145
    }
  }
];
