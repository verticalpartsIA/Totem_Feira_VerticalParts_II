// Base de imagens: por enquanto servidas via Google Drive (pasta pública).
// Quando o site for pra Hostinger, basta trocar a função `fotoUrl` para
// apontar pra https://verticalparts.com.br/totem/clientes/...
const driveUrl = (id: string) =>
  `https://lh3.googleusercontent.com/d/${id}=w1600`;

export type Categoria = "escadas" | "esteiras" | "elevadores" | "projetos";

export type Projeto = {
  slug: string;
  nome: string;
  local?: string;
  categoria: Categoria;
  fotosIds: string[];
};

export const PROJETOS: Projeto[] = [
  {
    slug: "aeroporto-brasilia",
    nome: "Aeroporto de Brasília",
    local: "Brasília, DF",
    categoria: "escadas",
    fotosIds: [
      "18g0mxUhNXT1uQlXfhZXJ8j2JHPqMQdMZ",
      "1GGCdqWy4vCrJfSl5twde7rHXIUJdom_R",
      "1TIwlDPto1X-3F71PHwNqSoa1t1Wj6YP0",
      "1E-dYa_QQZmbSptUk2qB9ESDM-wnDmE1G",
      "1B0dwJAeVDvo2JsBcVAxJHOnGSt9yUjgX",
    ],
  },
  {
    slug: "armazem-marajo",
    nome: "Armazém Marajó",
    categoria: "escadas",
    fotosIds: [
      "19zJQptcPDZGxlaxeYgrbexIB8uLzPRp0",
      "1X9oiSDafgdgGHHwXjEOBZ7rokbu4_3ae",
      "1VPk0MSvNRPN86x8o_bJOzGMEN5ALAeaG",
      "1Ehi35oA9m8Gn5OEOSCfWsNag6IehzH6o",
      "1rSvup7hKdleJHuoasaaIFIL6N0bfIccJ",
    ],
  },
  {
    slug: "barbosa",
    nome: "Barbosa Supermercados",
    categoria: "esteiras",
    fotosIds: [
      "1aEv4UKhmzp_cSDN4r6_hA1owIKNScqBY",
      "1Iy1rCZmugqHvFWMV2242H4k2DlGkKK_1",
      "1FWRlqrlIhGllwfD4hL0ZogcK5_y6HTSr",
      "1tmmxtG-saZgLBEFDcqsZmHFzdzAiweST",
      "1uG-ZZGv24KkcilP-NuNUkCmazLYvaJaW",
    ],
  },
  {
    slug: "feira-madrugada-esteiras",
    nome: "Feira da Madrugada",
    local: "São Paulo, SP",
    categoria: "esteiras",
    fotosIds: [
      "16zyeYV1JY9HmRgvFesAToNnscxxx1hfy",
      "1QNKmOi3MeRhf4uocZTStx3qpfZUOuWy0",
      "1ylo_8BgMPNKvwXSbf4IMYvlLS2jGgb7c",
      "1dmqFn3qRk0mua2-fFNAfqN31Q3rMyK45",
    ],
  },
  {
    slug: "feira-madrugada",
    nome: "Feira da Madrugada",
    local: "São Paulo, SP",
    categoria: "projetos",
    fotosIds: [
      "1sSYxnBnz8Y5ID6ahxbTha8JRtAx-WEoT",
      "1uJPNIjmvEm3PrXdWt_0O7ONB-4b-MN4j",
      "1DCvmBGvVSM5ACZs6mw5fuAV2IlqYxD-Z",
      "1I2uo4-EGKE61a1o_5u7O-hbVKjcOLy2J",
      "160ftGVHalLTVmmhTPFIuW9RcPVM6UYYM",
    ],
  },
  {
    slug: "roldao",
    nome: "Roldão Atacadista",
    categoria: "esteiras",
    fotosIds: [
      "1BxLo_FlRnLO9wszy7AIjdgO3lE4PLlwn",
      "1lv_ebPTBR2fXqTk7-wmdxXs5NO3pel5P",
      "1org6pT00gB4jB1zp5bvk7_-_0-QehdW-",
      "1BeJ5NIo7QCKfE1vSpcqSjWkC6b3pxpi2",
      "1wMjgF7_-TA6OxZUBgevlFJ1-JmUc4q_e",
      "1x_pSdFWFEJwPFWG1puIeAyqvLrtIYLAd",
      "1eYDKMRdvIrrkWIcELszRJKr7rOLcUGKs",
      "1DJv0uIqTUeFdDK7tSmm7L_Qs3UJ7TCPb",
      "1tBgkSMwhUWkuDBeXfGwQW1RgEZPQksrt",
    ],
  },
  {
    slug: "kacula-elevadores",
    nome: "Supermercado Kaçula — Elevador",
    categoria: "elevadores",
    fotosIds: [
      "1K5z7xtIg5VZKuKL6NB8uGC3BJ1U8eJ7G",
      "1v_Nsto7kU1kealOrF-ONZ-bJmh43LjAm",
      "1y5ibiS-_WibCJMYr-XlWD6rMyM1Y4c3x",
      "1-xeS-4jCHEMo2AnDrSequKC5WfEr10GU",
      "1TJe1HsOpPNUAiT4FJenNOm2kIdEoGUti",
      "1VqsHUxgQy_KZhi0xxYm3WhueTeYX6ZbN",
      "1xQc-8hHTn0M3QgQJ-A6EeI1WpvuDgNJh",
      "1l6XzWHecv0iva37NSUZRkzTyHDWUA6tw",
      "1OVh2buC5ez8Ntw-8PK6vkkFD3oCagkvP",
      "1uj7z1kQcjtogf169Gn0mZ2ML76jKc31j",
    ],
  },
  {
    slug: "kacula-esteiras",
    nome: "Supermercado Kaçula — Esteira",
    categoria: "esteiras",
    fotosIds: [
      "1BhrY16ijABdimF-7UdOLSGiDW1KxsmEC",
      "1ekRfId8NUCWXbFAfKVOeTqnS6cH8N6T_",
      "1cVcnqS4O6y8G7Rhxkt6pJEc9alZVDwo8",
      "1-hgK9zB3c3EGMvB9CcsHLPdITYsmC-h7",
      "1UZXT0AXlsu-wTNROr_21d4USy5E-ptk6",
      "1R3LDHS7kEHCSjC4P2BaQhiejGxM1NOmk",
    ],
  },
  {
    slug: "mercadao",
    nome: "Mercadão",
    categoria: "projetos",
    fotosIds: [
      "1gewMCcKXHIBHRF69nz1lsYLR8kSvSX_L",
      "1_pRUEpnPkpcqRqvMqrfPOxKXink374Nq",
      "1lT7epbln1unTwMxXMDNJ6yl_3lK5ur4U",
      "1GEvPrkOiHnmMgVIL-3i2Wzwiluo_oUro",
      "1i-tGsh-hcxVPGHrhkG407obdtVM_FyT1",
      "1hL76Ht0dTh8SZlZldjkVh2sf4NJ9LMRB",
      "1lYP461A568uAdYqsLlqUYf8B_L31hkJT",
      "1bO44Y4ChBD4ldaMNXPk4MiSktfg-G1CS",
      "1KOiosvxjam6dTjmS9Rc-QRIYyycxc1jV",
      "1PahuuZrUAb7fgWjGBTuuB8vPZDphyUZL",
      "1yCwNCRDUQUOHelJb8XOKKVrpHD6pHmT_",
      "1jiG0UtQImEb4FcJ2J2Kv3n6ljGwo6w1K",
      "1o3lo8pwyjT0hQWtcEXgMSOFACVb5JPlE",
    ],
  },
  {
    slug: "mercadao-esteiras",
    nome: "Mercadão — Esteira",
    categoria: "esteiras",
    fotosIds: [
      "1ZR7cQsqvwBPmGnuIbSzXuyS01HvMpBFv",
      "1BljC56Ok-9brNy95jrp9PKTdXQMSPND-",
      "1LQpmrvxz8KspI4S8ddwb1htflGofVfWK",
      "14JrBcVs1FJ5A_472EDuaP9VqxbEcUkZL",
      "1UHMkW-ukj__FPu43k_UUkInW_-TRolH4",
    ],
  },
  {
    slug: "dharuj",
    nome: "Dharuj",
    categoria: "projetos",
    fotosIds: [
      "158WblM4-LIUJpXkD_uJuuiGqpaW_KpFc",
      "1Ghra2chk1Pr_uxdc7mvSaUglBWAUBcCE",
      "1oaEdaG3GWarCIwduB5Udp3ocRAIDM0dI",
      "1Sx0J43scGZBhQCQeWACeRJl55ZRjOFb-",
      "1KsXr_ob9wMj035knDgfwNAEvk2iznffp",
      "1DlXziF3ad62PwlDeqaBrDi_W7Z3NYv6t",
    ],
  },
  {
    slug: "rossi",
    nome: "Rossi",
    categoria: "projetos",
    fotosIds: ["1oMBHB6sirzdtNPUOy9uvGaNrzaZT9DSY"],
  },
];

export const CATEGORIAS: Record<
  Categoria,
  { titulo: string; subtitulo: string }
> = {
  escadas: {
    titulo: "Escadas Rolantes",
    subtitulo: "Projetos com escadas rolantes VerticalParts",
  },
  esteiras: {
    titulo: "Esteiras Rolantes",
    subtitulo: "Projetos com esteiras rolantes VerticalParts",
  },
  elevadores: {
    titulo: "Elevadores",
    subtitulo: "Projetos de elevadores VerticalParts",
  },
  projetos: {
    titulo: "Projetos Especiais",
    subtitulo: "Clientes e soluções sob medida",
  },
};

export function getProjetosPorCategoria(cat: Categoria): Projeto[] {
  return PROJETOS.filter((p) => p.categoria === cat);
}

export function getProjeto(slug: string): Projeto | undefined {
  return PROJETOS.find((p) => p.slug === slug);
}

export function getFotos(p: Projeto): string[] {
  return p.fotosIds.map(driveUrl);
}

export const CONTATOS = {
  site: "https://verticalparts.com.br",
  instagram: "https://instagram.com/verticalparts",
  whatsapp: "https://api.whatsapp.com/send?phone=5511995578519",
  whatsappDisplay: "+55 11 99557-8519",
};
