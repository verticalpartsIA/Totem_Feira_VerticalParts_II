import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronLeft, Download } from "lucide-react";
import logoAsset from "@/assets/logo-verticalparts-white.png.asset.json";
import catalogoAsset from "@/assets/catalogo-pecas.pdf.asset.json";
import { useIdleRedirect } from "@/hooks/use-idle-redirect";

export const Route = createFileRoute("/pecas")({
  head: () => ({
    meta: [
      { title: "Catálogo de Peças — Escadas e Esteiras Rolantes | VerticalParts" },
      {
        name: "description",
        content:
          "Catálogo completo de peças para escadas e esteiras rolantes da VerticalParts.",
      },
    ],
  }),
  component: PecasPage,
});

function PecasPage() {
  useIdleRedirect(60_000);

  const pdfUrl = `${catalogoAsset.url}#view=FitH&toolbar=1`;

  return (
    <main className="min-h-screen w-full bg-background flex justify-center">
      <div className="relative w-full max-w-md min-h-screen overflow-hidden flex flex-col px-4 pt-4 pb-4">
        <header className="flex items-center justify-between mb-3 px-2">
          <Link
            to="/"
            className="inline-flex items-center gap-1 text-foreground/80 active:scale-95 transition"
            aria-label="Voltar para o início"
          >
            <ChevronLeft className="h-6 w-6" />
            <span className="text-sm">Início</span>
          </Link>
          <img src={logoAsset.url} alt="VerticalParts" className="h-9 w-auto" />
        </header>

        <div className="px-2 mb-3">
          <p className="text-brand-yellow text-xs tracking-[0.25em] uppercase mb-1">
            Catálogo
          </p>
          <h1 className="font-serif italic text-2xl text-foreground leading-tight">
            Peças — Escadas e Esteiras Rolantes
          </h1>
        </div>

        <div className="flex-1 rounded-2xl overflow-hidden ring-1 ring-foreground/10 shadow-xl bg-white min-h-[60vh]">
          <object
            data={pdfUrl}
            type="application/pdf"
            className="w-full h-full min-h-[60vh]"
            aria-label="Catálogo de Peças VerticalParts"
          >
            <iframe
              src={pdfUrl}
              title="Catálogo de Peças VerticalParts"
              className="w-full h-full min-h-[60vh] border-0"
            />
          </object>
        </div>

        <a
          href={catalogoAsset.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 w-full h-14 rounded-3xl bg-brand-yellow text-brand-yellow-foreground font-serif italic text-lg shadow-xl flex items-center justify-center gap-2 active:scale-[0.98] transition"
        >
          <Download className="h-5 w-5" />
          Abrir catálogo em tela cheia
        </a>
      </div>
    </main>
  );
}
