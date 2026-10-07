export type Galeria = {
  titulo: string;
  /** Rota da tela que abre a galeria; o botão Voltar retorna para ela. */
  voltar: "/elevadores" | "/escadas";
  fotos: number;
};

export const GALERIAS: Record<string, Galeria> = {
  carga: { titulo: "Elevador de Carga", voltar: "/elevadores", fotos: 7 },
  homelift: { titulo: "Homelift", voltar: "/elevadores", fotos: 5 },
  passageiro: { titulo: "Elevador de Passageiro", voltar: "/elevadores", fotos: 9 },
  automovel: { titulo: "Elevador de Automóvel", voltar: "/elevadores", fotos: 6 },
  "escada-rolante": { titulo: "Escada Rolante", voltar: "/escadas", fotos: 4 },
  "esteira-rolante": { titulo: "Esteira Rolante", voltar: "/escadas", fotos: 9 },
};

export const fotosDaGaleria = (slug: string, total: number) =>
  Array.from({ length: total }, (_, i) => `/images/galeria/${slug}/${String(i + 1).padStart(2, "0")}.jpg`);
