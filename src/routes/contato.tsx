import { createFileRoute } from "@tanstack/react-router";
import { QrScreen } from "@/components/totem/QrScreen";

export const Route = createFileRoute("/contato")({
  component: () => <QrScreen mensagem="Tenha um fornecedor para suas próximas manutenções!" />,
});
