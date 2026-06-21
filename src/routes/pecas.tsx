import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronLeft, Cog, Wrench, Truck, ShieldCheck } from "lucide-react";
import logoAsset from "@/assets/logo-verticalparts-white.png.asset.json";
import pecasAsset from "@/assets/pecas.png.asset.json";
import { useIdleRedirect } from "@/hooks/use-idle-redirect";

export const Route = createFileRoute("/pecas")({
  head: () => ({
    meta: [
      { title: "Peças — Elevadores, Escadas e Esteiras | VerticalParts" },
      {
        name: "description",
        content:
          "Peças originais e compatíveis para elevadores, escadas rolantes e esteiras rolantes. Atendimento técnico VerticalParts.",
      },
    ],
  }),
  component: PecasPage,
});

const ITENS = [
  {
    icon: Cog,
    titulo: "Linha completa",
    texto:
      "Degraus, correntes, rolamentos, pentes, corrimãos, placas e componentes eletrônicos.",
  },
  {
    icon: ShieldCheck,
    titulo: "Originais e compatíveis",
    texto:
      "Trabalhamos com peças OEM e linhas equivalentes para os principais fabricantes.",
  },
  {
    icon: Truck,
    titulo: "Pronta entrega",
    texto:
      "Estoque próprio em São Paulo com envio para todo o Brasil.",
  },
  {
    icon: Wrench,
    titulo: "Suporte técnico",
    texto:
      "Engenheiros e técnicos para ajudar na identificação e aplicação correta.",
  },
];

function PecasPage() {
  useIdleRedirect(30_000);

  return (
    <main className="min-h-screen w-full bg-background flex justify-center">
      <div className="relative w-full max-w-md min-h-screen overflow-hidden flex flex-col px-6 pt-6 pb-10">
        <header className="flex items-center justify-between mb-6">
          <Link
            to="/"
            className="inline-flex items-center gap-1 text-foreground/80 active:scale-95 transition"
            aria-label="Voltar para o início"
          >
            <ChevronLeft className="h-6 w-6" />
            <span className="text-sm">Início</span>
          </Link>
          <img src={logoAsset.url} alt="VerticalParts" className="h-10 w-auto" />
        </header>

        <div className="rounded-3xl overflow-hidden mb-6 shadow-xl ring-1 ring-foreground/10">
          <img
            src={pecasAsset.url}
            alt="Peças mecânicas para elevadores, escadas e esteiras rolantes"
            className="w-full h-48 object-cover"
          />
        </div>

        <p className="text-brand-yellow text-xs tracking-[0.25em] uppercase mb-2">
          Peças
        </p>
        <h1 className="font-serif italic text-4xl text-foreground leading-tight mb-3">
          Elevadores, Escadas<br />e Esteiras Rolantes
        </h1>
        <p className="text-foreground/70 text-sm mb-6">
          Tudo o que você precisa para manter o transporte vertical e horizontal
          do seu empreendimento funcionando com segurança.
        </p>

        <div className="flex-1 flex flex-col gap-3">
          {ITENS.map((it) => {
            const Icon = it.icon;
            return (
              <div
                key={it.titulo}
                className="flex items-start gap-3 p-4 rounded-2xl bg-card/10 ring-1 ring-foreground/10 backdrop-blur-sm"
              >
                <div className="bg-brand-yellow text-brand-yellow-foreground p-2 rounded-xl shrink-0">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <p className="font-serif italic text-lg text-foreground leading-tight">
                    {it.titulo}
                  </p>
                  <p className="text-foreground/70 text-sm mt-1">{it.texto}</p>
                </div>
              </div>
            );
          })}
        </div>

        <Link
          to="/contato"
          className="mt-6 w-full h-14 rounded-3xl bg-brand-yellow text-brand-yellow-foreground font-serif italic text-lg shadow-xl flex items-center justify-center active:scale-[0.98] transition"
        >
          Falar com a equipe
        </Link>
      </div>
    </main>
  );
}
