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
        spot("Peças e equipamentos", "/portfolio", [30, 206, 208, 305], true),
        spot("Linha BST Monarch", "/bst", [30, 309, 208, 392], true),
      ]}
    />
  );
}
