import { createFileRoute, Link } from "@tanstack/react-router";
import { QRCodeSVG } from "qrcode.react";
import { ChevronLeft, Globe, Instagram, MessageCircle } from "lucide-react";
import logoAsset from "@/assets/logo-verticalparts-white.png.asset.json";
import { CONTATOS } from "@/lib/clientes";
import { useIdleRedirect } from "@/hooks/use-idle-redirect";

export const Route = createFileRoute("/contato")({
  component: ContatoPage,
});

type Card = {
  icon: typeof Globe;
  titulo: string;
  legenda: string;
  url: string;
};

const CARDS: Card[] = [
  {
    icon: MessageCircle,
    titulo: "WhatsApp",
    legenda: CONTATOS.whatsappDisplay,
    url: CONTATOS.whatsapp,
  },
  {
    icon: Instagram,
    titulo: "Instagram",
    legenda: "@verticalparts",
    url: CONTATOS.instagram,
  },
  {
    icon: Globe,
    titulo: "Site",
    legenda: "verticalparts.com.br",
    url: CONTATOS.site,
  },
];

function ContatoPage() {
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

        <div className="mb-8">
          <p className="text-brand-yellow text-xs tracking-[0.25em] uppercase mb-2">
            Fale Conosco
          </p>
          <h1 className="font-serif italic text-4xl text-foreground leading-tight">
            Aponte a câmera<br />e leve a gente junto
          </h1>
          <p className="text-foreground/70 text-sm mt-3">
            Escaneie um QR code abaixo para falar com nossa equipe ou conhecer
            todos os nossos produtos.
          </p>
        </div>

        <div className="flex-1 flex flex-col gap-4">
          {CARDS.map((c) => {
            const Icon = c.icon;
            return (
              <div
                key={c.titulo}
                className="flex items-center gap-4 p-4 rounded-3xl bg-card/10 ring-1 ring-foreground/10 backdrop-blur-sm"
              >
                <div className="bg-foreground p-2 rounded-2xl shrink-0">
                  <QRCodeSVG
                    value={c.url}
                    size={96}
                    level="M"
                    bgColor="#ffffff"
                    fgColor="#0d1830"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 text-brand-yellow">
                    <Icon className="h-4 w-4" />
                    <span className="text-[10px] tracking-[0.2em] uppercase">
                      {c.titulo}
                    </span>
                  </div>
                  <p className="font-serif italic text-xl text-foreground mt-1 leading-tight">
                    {c.legenda}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <Link
          to="/"
          className="mt-6 w-full h-14 rounded-3xl bg-brand-yellow text-brand-yellow-foreground font-serif italic text-lg shadow-xl flex items-center justify-center active:scale-[0.98] transition"
        >
          Voltar ao início
        </Link>
      </div>
    </main>
  );
}
