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
        spot("Elevador de carga", "/galeria/carga", [65, 113, 266, 202]),
        spot("Homelift", "/galeria/homelift", [65, 214, 266, 302]),
        spot("Elevador de passageiro", "/galeria/passageiro", [65, 315, 266, 403]),
        spot("Elevador de automóvel", "/galeria/automovel", [65, 416, 266, 504]),
        spot("Quero construir uma parceria", "/contato", [75, 518, 266, 550]),
        spot("Voltar", "/portfolio", VOLTAR_ESQ),
        spot("Próximo", "/escadas", [238, 556, 325, 590]),
      ]}
    />
  );
}
