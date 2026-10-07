import { createFileRoute } from "@tanstack/react-router";
import { TelaTotem, spot, VOLTAR_ESQ } from "@/components/totem/tela-totem";

export const Route = createFileRoute("/bst-info")({
  head: () => ({ meta: [{ title: "VerticalParts — BST Monarch" }] }),
  component: BstInfo,
});

function BstInfo() {
  return (
    <TelaTotem
      src="/images/totem/tela-7.jpg"
      alt="BST Monarch by Inovance"
      hotspots={[
        spot("Falar com especialista", "/contato-bst", [143, 543, 308, 577]),
        spot("Voltar", "/bst", VOLTAR_ESQ),
      ]}
    />
  );
}
