import { createFileRoute } from "@tanstack/react-router";
import { TelaTotem, spot, VOLTAR_ESQ } from "@/components/totem/tela-totem";

export const Route = createFileRoute("/bst")({
  head: () => ({ meta: [{ title: "VerticalParts — Linha BST Monarch" }] }),
  component: Bst,
});

function Bst() {
  return (
    <TelaTotem
      src="/images/totem/tela-6.jpg"
      alt="Consultar linha BST Monarch"
      hotspots={[
        spot("Consultar linha BST Monarch", "/bst-info", [35, 98, 335, 548]),
        spot("Voltar", "/", VOLTAR_ESQ),
      ]}
    />
  );
}
