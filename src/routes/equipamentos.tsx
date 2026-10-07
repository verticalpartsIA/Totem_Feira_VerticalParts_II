import { createFileRoute } from "@tanstack/react-router";
import { QrScreen } from "@/components/totem/QrScreen";

export const Route = createFileRoute("/equipamentos")({
  component: () => (
    <QrScreen mensagem={"A VerticalParts fornece e instala equipamentos.\n\nSua empresa entra com a expertise em manutenção."} />
  ),
});
