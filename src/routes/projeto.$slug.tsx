import { createFileRoute, Link, notFound, useNavigate } from "@tanstack/react-router";
import { ChevronLeft } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { z } from "zod";
import logoAsset from "@/assets/logo-verticalparts-white.png.asset.json";
import { getCliente, getFotos } from "@/lib/clientes";
import { useIdleRedirect } from "@/hooks/use-idle-redirect";

const searchSchema = z.object({
  from: z
    .enum(["escadas", "esteiras", "elevadores", "projetos"])
    .optional()
    .catch(undefined),
});

export const Route = createFileRoute("/projeto/$slug")({
  component: ProjetoPage,
  validateSearch: searchSchema,
  loader: ({ params }) => {
    const cliente = getCliente(params.slug);
    if (!cliente) throw notFound();
    return { cliente, fotos: getFotos(cliente.slug) };
  },
  notFoundComponent: () => (
    <main className="min-h-screen flex items-center justify-center text-foreground">
      Projeto não encontrado.
    </main>
  ),
});

function ProjetoPage() {
  useIdleRedirect(30_000);
  const { cliente, fotos } = Route.useLoaderData() as {
    cliente: NonNullable<ReturnType<typeof getCliente>>;
    fotos: string[];
  };
  const { from } = Route.useSearch();
  const navigate = useNavigate();

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: "center" });
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const atEnd = selected === fotos.length - 1;
  const backTo = from
    ? { to: "/categoria/$slug" as const, params: { slug: from } }
    : { to: "/" as const };

  return (
    <main className="min-h-screen w-full bg-background flex justify-center">
      <div className="relative w-full max-w-md min-h-screen overflow-hidden flex flex-col">
        {/* Header */}
        <header className="relative z-10 flex items-center justify-between px-6 pt-6 pb-4">
          <Link
            {...backTo}
            className="inline-flex items-center gap-1 text-foreground/80 active:scale-95 transition"
            aria-label="Voltar"
          >
            <ChevronLeft className="h-6 w-6" />
            <span className="text-sm">Voltar</span>
          </Link>
          <img src={logoAsset.url} alt="VerticalParts" className="h-9 w-auto" />
        </header>

        <div className="px-6 pb-4">
          <p className="text-brand-yellow text-[10px] tracking-[0.25em] uppercase mb-1">
            Cliente VerticalParts
          </p>
          <h1 className="font-serif italic text-3xl text-foreground leading-tight">
            {cliente.nome}
          </h1>
          {cliente.local ? (
            <p className="text-foreground/60 text-sm mt-1">{cliente.local}</p>
          ) : null}
        </div>

        {/* Carrossel */}
        <div className="relative flex-1 flex flex-col">
          <div className="overflow-hidden flex-1" ref={emblaRef}>
            <div className="flex h-full">
              {fotos.map((src, i) => (
                <div
                  key={src}
                  className="flex-[0_0_100%] min-w-0 h-full flex items-center justify-center px-4"
                >
                  <div className="relative w-full aspect-[9/16] max-h-full rounded-3xl overflow-hidden bg-foreground/5 ring-1 ring-foreground/10">
                    <img
                      src={src}
                      alt={`${cliente.nome} — foto ${i + 1}`}
                      className="absolute inset-0 h-full w-full object-cover"
                      draggable={false}
                      onError={(e) => {
                        const el = e.currentTarget as HTMLImageElement;
                        el.style.display = "none";
                        const parent = el.parentElement;
                        if (parent && !parent.querySelector(".fallback")) {
                          const div = document.createElement("div");
                          div.className =
                            "fallback absolute inset-0 flex items-center justify-center text-foreground/50 text-sm";
                          div.textContent = "Imagem indisponível";
                          parent.appendChild(div);
                        }
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots + setas */}
          <div className="flex items-center justify-center gap-4 py-4">
            <button
              type="button"
              onClick={scrollPrev}
              disabled={selected === 0}
              className="h-10 w-10 rounded-full bg-foreground/10 text-foreground active:scale-95 disabled:opacity-30 transition"
              aria-label="Foto anterior"
            >
              ‹
            </button>
            <div className="flex gap-2">
              {fotos.map((_, i) => (
                <span
                  key={i}
                  className={`h-2 rounded-full transition-all ${
                    i === selected ? "w-6 bg-brand-yellow" : "w-2 bg-foreground/30"
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={scrollNext}
              disabled={atEnd}
              className="h-10 w-10 rounded-full bg-foreground/10 text-foreground active:scale-95 disabled:opacity-30 transition"
              aria-label="Próxima foto"
            >
              ›
            </button>
          </div>
        </div>

        {/* CTA Fale Conosco */}
        <div className="px-6 pb-6">
          <button
            type="button"
            onClick={() => navigate({ to: "/contato" })}
            className="w-full h-16 rounded-3xl bg-brand-yellow text-brand-yellow-foreground font-serif italic text-xl shadow-xl active:scale-[0.98] transition"
          >
            {atEnd ? "Quer um orçamento? Fale conosco" : "Fale Conosco"}
          </button>
        </div>
      </div>
    </main>
  );
}
