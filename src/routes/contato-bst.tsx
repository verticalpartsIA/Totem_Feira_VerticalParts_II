import { createFileRoute } from "@tanstack/react-router";
import { TelaTotem, BotaoVoltar } from "@/components/totem/tela-totem";

export const Route = createFileRoute("/contato-bst")({
  head: () => ({ meta: [{ title: "VerticalParts — Fale com um especialista" }] }),
  component: ContatoBst,
});

function ContatoBst() {
  return (
    <TelaTotem
      src="/images/totem/tela-8.jpg"
      alt="Escaneie o QR code e fale conosco"
    >
      <BotaoVoltar fallback="/bst-info" />
    </TelaTotem>
  );
}
