import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Screen, Foto, BotaoParceria } from "@/components/totem/Screen";
import { IMG } from "@/lib/contatos";

export const Route = createFileRoute("/escadas")({ component: Escadas });

function Escadas() {
  return (
    <Screen>
      <h1 className="mt-6 rounded-xl border border-brand-yellow px-5 py-1 font-bold uppercase text-center leading-tight">
        Escadas &amp;<br />Esteiras Rolantes
      </h1>
      <div className="mt-6 w-[86%] space-y-5">
        {[["Escada rolante", "escada-rolante.jpg"], ["Esteira rolante", "esteira-rolante.jpg"]].map(([nome, img]) => (
          <div key={nome} className="relative h-56 overflow-hidden rounded-2xl">
            <Foto src={IMG(img)} className="h-full w-full" />
            <p className="absolute bottom-3 right-3 flex items-center gap-1 font-bold uppercase text-lg drop-shadow">
              <ArrowRight className="h-6 w-6 text-brand-yellow" /> {nome}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-6"><BotaoParceria /></div>
    </Screen>
  );
}
