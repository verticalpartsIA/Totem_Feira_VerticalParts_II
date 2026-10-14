import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Screen, Foto } from "@/components/totem/Screen";
import { IMG, CATALOGOS, fotoGaleria } from "@/lib/contatos";

export const Route = createFileRoute("/revenda")({ component: Revenda });

const CARDS = [
  { pdf: CATALOGOS.escadas, titulo: "Peças para", sub: "Escadas e esteiras rolantes", img: fotoGaleria("escada-rolante", 1) },
  { pdf: CATALOGOS.elevadores, titulo: "Peças para", sub: "Elevadores", img: fotoGaleria("passageiro", 1) },
  { to: "/elevadores", titulo: "Equipamentos", sub: "Elevadores, escadas e esteiras rolantes", img: fotoGaleria("homelift", 1) },
] as const;

function Revenda() {
  return (
    <Screen background={IMG("revenda-fundo.jpg")}>
      <h1 className="mt-10 text-2xl uppercase text-center leading-tight">
        Amplie seu portfólio<br /><strong className="text-brand-yellow font-bold">de revenda</strong>
      </h1>
      <div className="mt-8 w-full px-6 space-y-6">
        {CARDS.map((c) => {
          const cls = "relative flex h-32 overflow-hidden rounded-2xl border border-brand-yellow bg-black/60 active:scale-[0.98]";
          const inner = (
            <>
              <div className="z-10 flex-1 p-4">
                <p className="font-bold uppercase flex items-center gap-2">{c.titulo} <ArrowRight className="h-6 w-6 text-brand-yellow" /></p>
                <p className="text-xs uppercase mt-1">{c.sub}</p>
              </div>
              <Foto src={c.img} className="h-full w-1/2" />
            </>
          );
          return "pdf" in c ? (
            <a key={c.titulo + c.sub} href={c.pdf} target="_blank" rel="noopener noreferrer" className={cls}>{inner}</a>
          ) : (
            <Link key={c.titulo} to={c.to} className={cls}>{inner}</Link>
          );
        })}
      </div>
    </Screen>
  );
}
