import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Screen, Foto } from "@/components/totem/Screen";
import { IMG } from "@/lib/contatos";

export const Route = createFileRoute("/bst-monarch")({ component: Bst });

function Bst() {
  return (
    <div className="[&_main]:bg-[#f5f1e8] [&_main]:text-black">
      <Screen>
        <Link to="/bst-linha" className="mt-8 w-4/5 rounded-xl border border-black/50 bg-white/60 p-4 flex items-center justify-between active:scale-[0.98]">
          <span className="uppercase text-lg leading-tight">Consultar linha<br /><strong>BST Monarch</strong></span>
          <ArrowRight className="h-8 w-8 text-brand-yellow" />
        </Link>
        <p className="mt-3 text-sm">Soluções tecnológicas para elevadores</p>
        <Foto src={IMG("bst-painel.jpg")} className="mt-8 w-full flex-1 min-h-96" />
      </Screen>
    </div>
  );
}
