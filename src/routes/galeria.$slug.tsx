import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { GALERIAS, fotosDaGaleria } from "@/lib/galerias";
import { useIdleRedirect } from "@/hooks/use-idle-redirect";

const AUTOPLAY_MS = 5_000;

export const Route = createFileRoute("/galeria/$slug")({
  loader: ({ params }) => {
    const galeria = GALERIAS[params.slug];
    if (!galeria) throw notFound();
    return { slug: params.slug, galeria };
  },
  head: ({ loaderData }) => ({
    meta: [{ title: `VerticalParts — ${loaderData?.galeria.titulo ?? "Galeria"}` }],
  }),
  component: Galeria,
});

function Galeria() {
  const { slug, galeria } = Route.useLoaderData();
  const fotos = fotosDaGaleria(slug, galeria.fotos);
  const [emblaRef, embla] = useEmblaCarousel({ loop: true });
  const [atual, setAtual] = useState(0);

  useIdleRedirect(90_000);

  const onSelect = useCallback(() => {
    if (embla) setAtual(embla.selectedScrollSnap());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    embla.on("select", onSelect);
    // reinicia o relógio do autoplay a cada interação (select/pointerDown)
    let timer = setInterval(() => embla.scrollNext(), AUTOPLAY_MS);
    const reiniciar = () => {
      clearInterval(timer);
      timer = setInterval(() => embla.scrollNext(), AUTOPLAY_MS);
    };
    embla.on("pointerDown", reiniciar);
    return () => {
      clearInterval(timer);
      embla.off("select", onSelect);
      embla.off("pointerDown", reiniciar);
    };
  }, [embla, onSelect]);

  return (
    <main className="flex h-screen w-full items-center justify-center bg-black">
      <div
        className="relative flex h-full max-h-screen flex-col bg-black text-white"
        style={{ aspectRatio: "9 / 16", maxWidth: "100vw" }}
      >
        <header className="flex flex-col items-center gap-4 px-6 pt-8">
          <img src="/images/logo.png" alt="VerticalParts" className="h-12 w-auto" />
          <h1 className="rounded-xl border-2 border-brand-yellow px-6 py-2 text-center text-2xl font-bold uppercase leading-tight">
            {galeria.titulo}
          </h1>
        </header>

        <div className="relative my-6 flex-1 overflow-hidden" ref={emblaRef}>
          <div className="flex h-full">
            {fotos.map((src, i) => (
              <div key={src} className="h-full min-w-0 shrink-0 grow-0 basis-full px-4">
                <img
                  src={src}
                  alt={`${galeria.titulo} — foto ${i + 1}`}
                  draggable={false}
                  loading={i === 0 ? "eager" : "lazy"}
                  className="h-full w-full select-none rounded-2xl object-contain"
                />
              </div>
            ))}
          </div>
          <button
            type="button"
            aria-label="Foto anterior"
            onClick={() => embla?.scrollPrev()}
            className="absolute left-6 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-3 active:scale-95"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>
          <button
            type="button"
            aria-label="Próxima foto"
            onClick={() => embla?.scrollNext()}
            className="absolute right-6 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-3 active:scale-95"
          >
            <ChevronRight className="h-8 w-8" />
          </button>
        </div>

        <div className="flex justify-center gap-2 pb-4" aria-hidden>
          {fotos.map((src, i) => (
            <span
              key={src}
              className={`h-2.5 rounded-full transition-all ${
                i === atual ? "w-8 bg-brand-yellow" : "w-2.5 bg-white/40"
              }`}
            />
          ))}
        </div>

        <footer className="flex items-center justify-between px-6 pb-8">
          <Link to={galeria.voltar} className="flex items-center gap-2 text-lg text-white/80 active:text-white">
            <ArrowLeft className="h-6 w-6" /> Voltar
          </Link>
          <Link
            to="/contato"
            className="rounded-xl bg-brand-yellow px-5 py-3 text-base font-semibold text-brand-yellow-foreground active:scale-95"
          >
            Quero construir uma parceria
          </Link>
        </footer>
      </div>
    </main>
  );
}
