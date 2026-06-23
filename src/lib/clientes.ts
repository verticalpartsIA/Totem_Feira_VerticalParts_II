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
      "1ueAXog5Wp44Q_Z6zzdct9Ef2YyMFf0ep",
      "1URKUFXUnjWcRMBPCcE70B23ZIVAKJfoC",
      "1Y8i7e1qNWXGgYKeHOtoCnZCHORABux14",
      "1Fiqxu70V7OGGJdY1SdJgo9jTDN30ZLA1",
      "1o5lWu0tnpAmXz5i_TYWHZg6vSPE7tgtY",
      "14RYqgDk8nfOPOaOoyEPgzAYyBCmsUxHM",
    ],
  },
  {
    slug: "kacula-esteira",
    nome: "Supermercado Kaçula — Esteira",
    categoria: "esteiras",
    fotosIds: [
      "1U9TxexJ8Kw1XzXscx7xOqEYmUSKokw5X",
      "15A4Aep4ezVQpcMXcZMYOOCyRXcFHueZF",
    ],
  },
  {
    slug: "mercadao-esteira",
    nome: "Mercadão — Esteira",
    categoria: "esteiras",
    fotosIds: [
      "17QO-3mumUh7e82hHonUWb6uLQk581G_V",
      "1QKT3sObkDEYAEGat3QqhqwUWwGtI0ZVU",
      "1Nmgxv_2Nau2D-MpnQR9UdeWjuEajRYB4",
      "1u6KuH532uqs0ECjVEV17V2JIdReAyikG",
    ],
  },
  {
    slug: "roldao",
    nome: "Roldão Atacadista",
    categoria: "esteiras",
    fotosIds: [
      "1IamRwS8GIlMadg_XIyEH8P1gTfcsBCR_",
      "1BC1X-9lBY3W2D90VEKiaAo86U19QXnjL",
      "1S6sRV7JQ6cJftMb7ayjG45ITBVYvPLmp",
      "1yQ_RqDkoAdXPkawTCeA31N2Y3gdCGAjs",
    ],
  },
  {
    slug: "rossi",
    nome: "Rossi",
    categoria: "esteiras",
    fotosIds: [
      "1aaLczpwG4Kxe0AYU5fKwF-o157_kzRiM",
      "1soISjspmsGBprHHbYCRpgc9XQthmthp6",
    ],
  },
  {
    slug: "camara-deputados-df",
    nome: "Câmara dos Deputados",
    local: "Brasília, DF",
    categoria: "esteiras",
    fotosIds: [
      "1NlVUqd_AagVfMPz6jR5UCBTj4wCLoDhA",
      "1seGEpE_fsR525_1XzCETFAqz4jrXpJFW",
      "1nQgV_cNNNXGA-oO7mUkqqTZ5ltxc78t5",
    ],
  },
  {
    slug: "feira-madrugada",
    nome: "Feira da Madrugada",
    local: "São Paulo, SP",
    categoria: "esteiras",
    fotosIds: [
      "1AJyZgLZdbomeFIjS3152OE-HPU-Ua7UD",
      "1kzYyA6_8qAoTv8rFsIq348LmxUyKUz0U",
      "1wmyVtbRlAyyPtRl1jjq45eY1GWFU5cUe",
      "1vSY2im8HT8sULkWi8Rq_WICg0yebpph-",
      "1QI8UZBoR4P5kSYnaMFYhaYufrKPwUT_0",
    ],
  },
  {
    slug: "kacula-elevador",
    nome: "Supermercado Kaçula — Elevador",
    categoria: "elevadores",
    fotosIds: [
      "1TPFs9i9R8mvb1WHjeyWVhERfQt6Q0q5-",
      "1WGdGxO4mwEq2IQJjRrxW42py-TajiP-F",
      "1xt1OCLeVGu2cr_hWze6q695UROzrgZF1",
      "1N_bmM0n_ZGfkOhcUTPn2JweeHNQcI_hQ",
    ],
  },
  {
    slug: "mercadao-elevador",
    nome: "Mercadão — Elevador",
    categoria: "elevadores",
    fotosIds: [
      "1YVFIK2f74ryhgPXWt9NK7ZlHljWwSDXL",
      "14kzRsxy_kb9lhcvbykOQzXbFRAnR3XEK",
      "1sbOHsgxBdWFm0asyXTAFewffanUW8WMa",
      "10sNFPoOFqqc7rDYYd6CQQSjPTdEopKAx",
      "1kWztgOSh2R0VJFEcY-iliiyO41DNBrtT",
    ],
  },
  {
    slug: "daruj",
    nome: "Projeto Especial — Elevador Daruj",
    categoria: "projetos",
    fotosIds: [
      "19EyP4qJbN9d1tCkq_6-a06mszM2n5LG-",
      "1fgo2gKmvd-m7mQARnTAOL0Fp0XqlCdai",
      "1MuSqxLYQpO7zCU3YvCdBK2YSSZEdnD44",
      "1bvw48_2EURag7B0RneVn-LsNOWUBSQbS",
    ],
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