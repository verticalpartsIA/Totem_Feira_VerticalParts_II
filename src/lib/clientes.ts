// Base URL onde as fotos dos clientes estão hospedadas.
// Quando o site for pra Hostinger, troque para algo como:
//   "https://verticalparts.com.br/totem/clientes"
// As fotos devem seguir a estrutura: {IMAGE_BASE}/{slug}/00X.jpg (001..005)
export const IMAGE_BASE =
  "https://raw.githubusercontent.com/verticalpartsIA/interativo_totem/main/assets/clientes";

export type Categoria = "escadas" | "esteiras" | "elevadores" | "projetos";

export type Cliente = {
  slug: string;
  nome: string;
  local?: string;
  categorias: Exclude<Categoria, "projetos">[];
};

export const CLIENTES: Cliente[] = [
  {
    slug: "aeroporto_brasilia",
    nome: "Aeroporto de Brasília",
    local: "Brasília, DF",
    categorias: ["escadas", "esteiras"],
  },
  {
    slug: "armazem_marajo",
    nome: "Armazém Marajó",
    categorias: ["elevadores"],
  },
  {
    slug: "barbosa_supermercados",
    nome: "Barbosa Supermercados",
    categorias: ["escadas"],
  },
  {
    slug: "feira_da_madrugada",
    nome: "Feira da Madrugada",
    local: "São Paulo, SP",
    categorias: ["escadas"],
  },
  {
    slug: "kacual",
    nome: "Supermercado Kaçula",
    categorias: ["escadas"],
  },
  {
    slug: "mercadao",
    nome: "Mercadão",
    categorias: ["escadas"],
  },
  {
    slug: "roldao",
    nome: "Roldão Atacadista",
    categorias: ["elevadores"],
  },
  {
    slug: "rossi",
    nome: "Rossi Supermercados",
    categorias: ["escadas"],
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
    subtitulo: "Conheça todos os nossos clientes",
  },
};

export function getClientesPorCategoria(cat: Categoria): Cliente[] {
  if (cat === "projetos") return CLIENTES;
  return CLIENTES.filter((c) => c.categorias.includes(cat));
}

export function getCliente(slug: string): Cliente | undefined {
  return CLIENTES.find((c) => c.slug === slug);
}

export function getFotos(slug: string): string[] {
  return [1, 2, 3, 4, 5].map(
    (n) => `${IMAGE_BASE}/${slug}/${String(n).padStart(3, "0")}.jpg`,
  );
}

export const CONTATOS = {
  site: "https://verticalparts.com.br",
  instagram: "https://instagram.com/verticalparts",
  whatsapp: "https://api.whatsapp.com/send?phone=5511995578519",
  whatsappDisplay: "+55 11 99557-8519",
};
