import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Screen, Foto, BotaoParceria } from "@/components/totem/Screen";
import { fotoGaleria, type GaleriaSlug } from "@/lib/contatos";

export const Route = createFileRoute("/elevadores")({ component: Elevadores });

const ITENS: [string, GaleriaSlug][] = [
  ["Carga", "carga"],
  ["Homelift", "homelift"],
  ["Passageiro", "passageiro"],
  ["Automóvel", "automovel"],
];

function Elevadores() {
  return (
    <Screen proximo="/escadas">
      <h1 className="mt-6 rounded-xl border border-brand-yellow px-5 py-1 font-bold uppercase">Elevadores</h1>
      <div className="mt-5 w-4/5 space-y-3">
        {ITENS.map(([nome, slug]) => (
          <Link key={nome} to="/galeria/$slug" params={{ slug }} className="relative block h-28 overflow-hidden rounded-xl active:scale-[0.98]">
            <Foto src={fotoGaleria(slug, 1)} className="h-full w-full" />
            <p className="absolute bottom-2 right-3 flex items-center gap-1 font-bold uppercase text-lg drop-shadow">
              <ArrowRight className="h-6 w-6 text-brand-yellow" /> {nome}
            </p>
          </Link>
        ))}
      </div>
      <div className="mt-5"><BotaoParceria /></div>
    </Screen>
  );
}
