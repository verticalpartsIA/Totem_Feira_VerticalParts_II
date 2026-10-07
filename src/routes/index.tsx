import { createFileRoute } from "@tanstack/react-router";
import { TelaTotem, spot } from "@/components/totem/tela-totem";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VerticalParts — Bem-vindo" },
      {
        name: "description",
        content:
          "VerticalParts: peças e equipamentos para transporte vertical e linha BST Monarch.",
      },
    ],
  }),
  component: BoasVindas,
});

function BoasVindas() {
  return (
    <TelaTotem
      src="/images/totem/tela-1.jpg"
      alt="Bem-vindo à VerticalParts"
      hotspots={[
        spot("Peças e equipamentos", "/portfolio", [38, 208, 205, 288]),
        spot("Linha BST Monarch", "/bst", [38, 292, 205, 390]),
      ]}
    />
  );
}
