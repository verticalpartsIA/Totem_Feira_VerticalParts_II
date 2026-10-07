import { createFileRoute } from "@tanstack/react-router";
import { TelaTotem, spot, VOLTAR_ESQ } from "@/components/totem/tela-totem";

export const Route = createFileRoute("/elevadores")({
  head: () => ({ meta: [{ title: "VerticalParts — Elevadores" }] }),
  component: Elevadores,
});

function Elevadores() {
  return (
    <TelaTotem
      src="/images/totem/tela-3.jpg"
      alt="Elevadores: carga, homelift, passageiro e automóvel"
      hotspots={[
        spot("Quero construir uma parceria", "/contato", [75, 518, 266, 550]),
        spot("Voltar", "/portfolio", VOLTAR_ESQ),
        spot("Próximo", "/escadas", [238, 556, 325, 590]),
      ]}
    />
  );
}
