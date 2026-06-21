import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ChevronLeft,
  Truck,
  Headphones,
  Boxes,
  Handshake,
} from "lucide-react";
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
          "VerticalParts: especialistas em elevadores, escadas e esteiras rolantes, com parceria internacional e peças a pronta entrega.",
      },
    ],
  }),
  component: SobrePage,
});

const DIFERENCIAIS = [
  {
    icon: Truck,
    titulo: "Entrega em todo o Brasil",
    texto:
      "Distribuímos peças e componentes para todo o território nacional, com agilidade e segurança.",
  },
  {
    icon: Boxes,
    titulo: "Amplo estoque",
    texto:
      "Peças de diversas marcas e modelos à pronta entrega, com estoque estratégico para reduzir paradas.",
  },
  {
    icon: Handshake,
    titulo: "Parceria internacional",
    texto:
      "Soluções personalizadas em transporte de passageiros com tecnologia e padrões internacionais.",
  },
  {
    icon: Headphones,
    titulo: "Suporte especializado",
    texto:
      "Equipe experiente que acompanha do planejamento à conclusão do seu projeto.",
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
            alt="VerticalParts"
            className="w-full h-56 object-cover"
          />
        </div>

        <p className="text-brand-yellow text-xs tracking-[0.25em] uppercase mb-2">
          Sobre nós
        </p>
        <h1 className="font-serif italic text-4xl text-foreground leading-tight mb-3">
          A empresa certa<br />para o seu negócio
        </h1>
        <p className="text-foreground/70 text-sm mb-4">
          A VerticalParts é uma empresa líder com parceria internacional,
          especializada em soluções personalizadas de transporte de passageiros
          — elevadores, escadas e esteiras rolantes.
        </p>
        <p className="text-foreground/70 text-sm mb-6">
          Com estoque estratégico, entregamos peças e componentes no prazo
          necessário. Nossa equipe acompanha desde o planejamento até a
          conclusão do projeto, garantindo soluções confiáveis em mobilidade
          vertical.
        </p>

        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="p-4 rounded-2xl bg-card/10 ring-1 ring-foreground/10 text-center">
            <p className="font-serif italic text-3xl text-brand-yellow leading-none">
              +500
            </p>
            <p className="text-foreground/70 text-xs mt-1">
              Clientes satisfeitos
            </p>
          </div>
          <div className="p-4 rounded-2xl bg-card/10 ring-1 ring-foreground/10 text-center">
            <p className="font-serif italic text-3xl text-brand-yellow leading-none">
              +10 Mil
            </p>
            <p className="text-foreground/70 text-xs mt-1">
              Peças a pronta entrega
            </p>
          </div>
          <div className="col-span-2 p-4 rounded-2xl bg-card/10 ring-1 ring-foreground/10 text-center">
            <p className="font-serif italic text-3xl text-brand-yellow leading-none">
              +15 anos
            </p>
            <p className="text-foreground/70 text-xs mt-1">de experiência</p>
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-3">
          {DIFERENCIAIS.map((d) => {
            const Icon = d.icon;
            return (
              <div
                key={d.titulo}
                className="flex items-start gap-3 p-4 rounded-2xl bg-card/10 ring-1 ring-foreground/10 backdrop-blur-sm"
              >
                <div className="bg-brand-yellow text-brand-yellow-foreground p-2 rounded-xl shrink-0">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <p className="font-serif italic text-lg text-foreground leading-tight">
                    {d.titulo}
                  </p>
                  <p className="text-foreground/70 text-sm mt-1">{d.texto}</p>
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
