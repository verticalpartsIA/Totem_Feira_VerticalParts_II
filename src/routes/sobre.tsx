import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronLeft, Building2, Users, Target, Award } from "lucide-react";
import logoAsset from "@/assets/logo-verticalparts-white.png.asset.json";
import sobreAsset from "@/assets/sobre.png.asset.json";
import { useIdleRedirect } from "@/hooks/use-idle-redirect";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre a VerticalParts" },
      {
        name: "description",
        content:
          "VerticalParts: especialistas em peças e serviços para elevadores, escadas e esteiras rolantes.",
      },
    ],
  }),
  component: SobrePage,
});

const PILARES = [
  {
    icon: Building2,
    titulo: "Sede própria",
    texto:
      "Estrutura completa em São Paulo, com showroom, estoque e centro técnico.",
  },
  {
    icon: Users,
    titulo: "Equipe especializada",
    texto:
      "Engenheiros, técnicos e consultores dedicados ao transporte vertical.",
  },
  {
    icon: Target,
    titulo: "Foco no cliente",
    texto:
      "Atendimento ágil, soluções sob medida e suporte do início ao pós-venda.",
  },
  {
    icon: Award,
    titulo: "Qualidade comprovada",
    texto:
      "Atendemos aeroportos, supermercados, shoppings e grandes empreendimentos.",
  },
];

function SobrePage() {
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
            src={sobreAsset.url}
            alt="Sede da VerticalParts"
            className="w-full h-56 object-cover"
          />
        </div>

        <p className="text-brand-yellow text-xs tracking-[0.25em] uppercase mb-2">
          Quem somos
        </p>
        <h1 className="font-serif italic text-4xl text-foreground leading-tight mb-3">
          Sobre a<br />VerticalParts
        </h1>
        <p className="text-foreground/70 text-sm mb-6">
          Somos referência em peças e serviços para elevadores, escadas e
          esteiras rolantes, unindo tecnologia, agilidade e atendimento próximo
          para manter pessoas em movimento.
        </p>

        <div className="flex-1 flex flex-col gap-3">
          {PILARES.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.titulo}
                className="flex items-start gap-3 p-4 rounded-2xl bg-card/10 ring-1 ring-foreground/10 backdrop-blur-sm"
              >
                <div className="bg-brand-yellow text-brand-yellow-foreground p-2 rounded-xl shrink-0">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <p className="font-serif italic text-lg text-foreground leading-tight">
                    {p.titulo}
                  </p>
                  <p className="text-foreground/70 text-sm mt-1">{p.texto}</p>
                </div>
              </div>
            );
          })}
        </div>

        <Link
          to="/contato"
          className="mt-6 w-full h-14 rounded-3xl bg-brand-yellow text-brand-yellow-foreground font-serif italic text-lg shadow-xl flex items-center justify-center active:scale-[0.98] transition"
        >
          Fale com a gente
        </Link>
      </div>
    </main>
  );
}
