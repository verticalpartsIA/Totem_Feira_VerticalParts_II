import { createFileRoute } from "@tanstack/react-router";
import { TelaTotem, spot, VOLTAR_ESQ } from "@/components/totem/tela-totem";

export const Route = createFileRoute("/escadas")({
  head: () => ({ meta: [{ title: "VerticalParts — Escadas e Esteiras Rolantes" }] }),
  component: Escadas,
});

function Escadas() {
  return (
    <TelaTotem
      src="/images/totem/tela-4.jpg"
      alt="Escadas e esteiras rolantes"
      hotspots={[
        spot("Quero construir uma parceria", "/contato", [75, 518, 266, 550]),
        spot("Voltar", "/portfolio", VOLTAR_ESQ),
      ]}
    />
  );
}
