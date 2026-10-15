import { createFileRoute } from "@tanstack/react-router";
import { TelaTotem, spot, VOLTAR_ESQ } from "@/components/totem/tela-totem";

export const Route = createFileRoute("/portfolio")({
  head: () => ({ meta: [{ title: "VerticalParts — Amplie seu portfólio de revenda" }] }),
  component: Portfolio,
});

// Catálogos em PDF (links oficiais do Google Drive, conforme instruções.md das pastas)
const CATALOGO_ESCADAS = "https://drive.google.com/file/d/1wyNn17OvwRJRpczjZzF3qx2_IUpR_31m/view";
const CATALOGO_ELEVADORES = "https://drive.google.com/file/d/1_ChK_Fp-QxMLXFzjcKNEo2pxTO8hqrCT/view";

function Portfolio() {
  return (
    <TelaTotem
      src="/images/totem/tela-2.jpg"
      alt="Amplie seu portfólio de revenda"
      hotspots={[
        spot("Peças para escadas e esteiras rolantes", CATALOGO_ESCADAS, [62, 165, 310, 285]),
        spot("Peças para elevadores", CATALOGO_ELEVADORES, [62, 295, 310, 412]),
        spot("Equipamentos", "/elevadores", [42, 428, 310, 545]),
        spot("Voltar", "/", VOLTAR_ESQ),
      ]}
    />
  );
}
