import { createFileRoute } from "@tanstack/react-router";
import { TelaTotem, spot, VOLTAR_ESQ } from "@/components/totem/tela-totem";

export const Route = createFileRoute("/portfolio")({
  head: () => ({ meta: [{ title: "VerticalParts — Amplie seu portfólio de revenda" }] }),
  component: Portfolio,
});

function Portfolio() {
  return (
    <TelaTotem
      src="/images/totem/tela-2.jpg"
      alt="Amplie seu portfólio de revenda"
      hotspots={[
        spot("Peças para escadas e esteiras rolantes", "/escadas", [62, 165, 310, 285]),
        spot("Peças para elevadores", "/elevadores", [62, 295, 310, 412]),
        spot("Equipamentos", "/elevadores", [42, 428, 310, 545]),
        spot("Voltar", "/", VOLTAR_ESQ),
      ]}
    />
  );
}
