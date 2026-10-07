import { createFileRoute } from "@tanstack/react-router";
import { TelaTotem, spot, VOLTAR_ESQ } from "@/components/totem/tela-totem";

export const Route = createFileRoute("/contato-bst")({
  head: () => ({ meta: [{ title: "VerticalParts — Fale com um especialista" }] }),
  component: ContatoBst,
});

function ContatoBst() {
  return (
    <TelaTotem
      src="/images/totem/tela-8.jpg"
      alt="Escaneie o QR code e fale conosco"
      hotspots={[spot("Voltar", "/bst-info", VOLTAR_ESQ)]}
    />
  );
}
