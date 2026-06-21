import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ChevronLeft } from "lucide-react";
import logoAsset from "@/assets/logo-verticalparts-white.png.asset.json";
import heroImg from "@/assets/hero-escalator.jpg";
import {
  CATEGORIAS,
  getProjetosPorCategoria,
  getFotos,
  type Categoria,
} from "@/lib/clientes";
import { useIdleRedirect } from "@/hooks/use-idle-redirect";

const VALID = ["escadas", "esteiras", "elevadores", "projetos"] as const;

export const Route = createFileRoute("/categoria/$slug")({
  component: CategoriaPage,
  notFoundComponent: () => (
    <main className="min-h-screen flex items-center justify-center text-foreground">
      Categoria não encontrada.
    </main>
  ),
  loader: ({ params }) => {
    if (!VALID.includes(params.slug as Categoria)) throw notFound();
    return { cat: params.slug as Categoria };
  },
});

function CategoriaPage() {
  useIdleRedirect(30_000);
  const { cat } = Route.useLoaderData() as { cat: Categoria };
  const info = CATEGORIAS[cat];
  const projetos = getProjetosPorCategoria(cat);

  return (
    <main className="min-h-screen w-full bg-background flex justify-center">
      <div className="relative w-full max-w-md min-h-screen overflow-hidden shadow-2xl">
        <img
          src={heroImg}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background" />

        <div className="relative flex flex-col px-6 pt-8 pb-12">
          <header className="flex items-center justify-between mb-6">
            <Link
              to="/"
              className="inline-flex items-center gap-1 text-foreground/80 active:scale-95 transition"
              aria-label="Voltar"
            >
              <ChevronLeft className="h-6 w-6" />
              <span className="text-sm">Voltar</span>
            </Link>
            <img src={logoAsset.url} alt="VerticalParts" className="h-10 w-auto" />
          </header>

          <div className="mb-8">
            <p className="text-brand-yellow text-xs tracking-[0.2em] uppercase mb-2">
              Projetos
            </p>
            <h1 className="font-serif italic text-4xl text-foreground leading-tight">
              {info.titulo}
            </h1>
            <p className="text-foreground/70 text-sm mt-2">{info.subtitulo}</p>
          </div>

          {projetos.length === 0 ? (
            <p className="text-foreground/60 text-center py-12">
              Em breve novos projetos nesta categoria.
            </p>
          ) : (
            <ul className="flex flex-col gap-4">
              {projetos.map((c) => {
                const cover = getFotos(c)[0];
                return (
                  <li key={c.slug}>
                    <Link
                      to="/projeto/$slug"
                      params={{ slug: c.slug }}
                      search={{ from: cat }}
                      className="group relative flex items-center w-full h-24 rounded-3xl overflow-hidden bg-card/10 backdrop-blur-sm ring-1 ring-foreground/10 active:scale-[0.98] transition"
                    >
                      <span className="relative h-full w-28 overflow-hidden">
                        <img
                          src={cover}
                          alt=""
                          loading="lazy"
                          className="h-full w-full object-cover"
                          onError={(e) => {
                            (e.currentTarget as HTMLImageElement).style.opacity = "0";
                          }}
                        />
                        <span className="absolute inset-0 bg-gradient-to-r from-transparent to-background/40" />
                      </span>
                      <span className="flex-1 px-4">
                        <span className="block font-serif italic text-xl text-foreground leading-tight">
                          {c.nome}
                        </span>
                        {c.local ? (
                          <span className="block text-foreground/60 text-xs mt-0.5">
                            {c.local}
                          </span>
                        ) : null}
                      </span>
                      <span className="pr-5 text-brand-yellow text-2xl">›</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </main>
  );
}
