import { createFileRoute } from "@tanstack/react-router";
import { TelaTotem, BotaoVoltar } from "@/components/totem/tela-totem";

export const Route = createFileRoute("/contato")({
  head: () => ({ meta: [{ title: "VerticalParts — Fale conosco" }] }),
  component: Contato,
});

function Contato() {
  return (
    <TelaTotem
      src="/images/totem/tela-5.jpg"
      alt="Escaneie o QR code e fale conosco"
    >
      <BotaoVoltar fallback="/portfolio" />
    </TelaTotem>
  );
}
