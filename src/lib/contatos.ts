export const CONTATOS = {
  instagram: "https://instagram.com/verticalparts",
  whatsapp: "https://api.whatsapp.com/send?phone=5511995578519",
  whatsappDisplay: "+55 11 99557-8519",
};

/** Imagens do totem — coloque os arquivos em public/images/totem/ */
export const IMG = (nome: string) => `/images/totem/${nome}`;

/** Galerias (carrossel) — fotos em public/images/totem/galeria/<slug>/NN.jpg, na ordem das pastas do Drive */
export const GALERIAS = {
  carga: { titulo: "Carga", fotos: 7 },
  homelift: { titulo: "Homelift", fotos: 5 },
  passageiro: { titulo: "Passageiro", fotos: 9 },
  automovel: { titulo: "Automóvel", fotos: 6 },
  "escada-rolante": { titulo: "Escada Rolante", fotos: 3 },
  "esteira-rolante": { titulo: "Esteira Rolante", fotos: 7 },
} as const;
export type GaleriaSlug = keyof typeof GALERIAS;

export const fotoGaleria = (slug: GaleriaSlug, n: number) =>
  IMG(`galeria/${slug}/${String(n).padStart(2, "0")}.jpg`);

/** Catálogos em PDF (links oficiais do Google Drive) */
export const CATALOGOS = {
  elevadores: "https://drive.google.com/file/d/1Q-xG9HGqVkYLNHEEUARsrDzPstLPoUic/view",
  escadas: "https://drive.google.com/file/d/1IOLUHzs9xOrey120eR1ogik8l4zEbjh6/view",
};
