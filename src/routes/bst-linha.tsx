import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { Screen, Foto } from "@/components/totem/Screen";
import { IMG } from "@/lib/contatos";

export const Route = createFileRoute("/bst-linha")({ component: BstLinha });

function BstLinha() {
  return (
    <Screen>
      <Foto src={IMG("bst-monarch-logo.png")} className="mt-4 h-16 w-auto !bg-transparent" />
      <p className="mt-4 w-5/6 text-xs leading-snug text-justify">
        Utilize os produtos BST Monarch da VerticalParts para melhorar a confiabilidade, segurança e eficiência dos elevadores.
        <br /><br />
        Eles são projetados para reduzir falhas, aumentar a durabilidade e oferecer uma operação mais estável.
      </p>
      <Foto src={IMG("bst-produtos.png")} className="mt-4 w-full flex-1 min-h-80 !bg-transparent object-contain" />
      <Link to="/contato" className="absolute bottom-6 right-6 inline-flex items-center gap-2 rounded-xl bg-white/90 px-4 py-3 text-sm text-black active:scale-95">
        <MessageCircle className="h-5 w-5" /> FALAR COM ESPECIALISTA
      </Link>
    </Screen>
  );
}
