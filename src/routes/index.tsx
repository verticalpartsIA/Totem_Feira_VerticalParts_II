import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Instagram } from "lucide-react";
import { Screen, Foto } from "@/components/totem/Screen";
import { IMG } from "@/lib/contatos";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [{ title: "VerticalParts — Totem Interativo" }] }),
  component: Home,
});

function Home() {
  return (
    <Screen voltar={false} logo={false}>
      <div className="absolute right-0 top-0 h-full w-1/4 flex flex-col">
        {["bem-vindo-1.jpg", "bem-vindo-2.jpg", "bem-vindo-3.jpg", "bem-vindo-4.jpg"].map((f) => (
          <Foto key={f} src={IMG(f)} className="h-1/4 w-full" />
        ))}
      </div>
      <div className="w-3/4 self-start px-6 pt-10">
        <img src="/images/logo.png" alt="VerticalParts" className="h-12 w-auto" />
        <h1 className="mt-16 text-3xl leading-tight font-light uppercase">
          Bem-vindo à <br /><strong className="font-bold">VerticalParts</strong>
        </h1>
        <p className="mt-16 text-xs tracking-wide">
          <span className="text-brand-yellow">EXPLORE</span> NOSSAS SOLUÇÕES:
        </p>
        <div className="mt-3 rounded-3xl bg-white p-5 text-black space-y-5">
          <Link to="/revenda" className="flex gap-3 active:scale-[0.98]">
            <ArrowRight className="h-7 w-7 shrink-0 text-brand-yellow" />
            <div>
              <h2 className="font-bold uppercase leading-tight">Peças &amp; Equipamentos</h2>
              <p className="text-[11px] mt-1">Tudo o que sua operação precisa para manutenção, reposição e continuidade dos equipamentos.</p>
            </div>
          </Link>
          <Link to="/bst-monarch" className="flex gap-3 active:scale-[0.98]">
            <ArrowRight className="h-7 w-7 shrink-0 text-brand-yellow" />
            <div>
              <h2 className="font-bold uppercase leading-tight">Linha BST Monarch</h2>
              <p className="text-[11px] mt-1">Tecnologia internacional para transporte vertical, focada em performance e segurança.</p>
            </div>
          </Link>
          <p className="text-[10px] font-bold uppercase text-center pt-2">Nos siga nas redes sociais:</p>
          <p className="text-center text-sm flex items-center justify-center gap-2"><Instagram className="h-4 w-4" /> @verticalparts</p>
        </div>
        <p className="mt-10 text-xs"><strong className="text-brand-yellow">VerticalParts</strong><br /><em>Elevando você e seu negócio.</em></p>
      </div>
    </Screen>
  );
}
