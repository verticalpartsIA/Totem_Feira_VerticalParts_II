import { createFileRoute, notFound } from "@tanstack/react-router";
import { Screen, Foto } from "@/components/totem/Screen";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { GALERIAS, fotoGaleria, type GaleriaSlug } from "@/lib/contatos";

export const Route = createFileRoute("/galeria/$slug")({
  beforeLoad: ({ params }) => {
    if (!(params.slug in GALERIAS)) throw notFound();
  },
  component: Galeria,
});

function Galeria() {
  const { slug } = Route.useParams();
  const g = GALERIAS[slug as GaleriaSlug];
  return (
    <Screen>
      <h1 className="mt-6 rounded-xl border border-brand-yellow px-5 py-1 font-bold uppercase">{g.titulo}</h1>
      <div className="relative mt-6 w-full flex-1 flex items-center px-12">
        <Carousel className="w-full" opts={{ loop: true }}>
          <CarouselContent>
            {Array.from({ length: g.fotos }, (_, i) => (
              <CarouselItem key={i} className="flex items-center justify-center">
                <Foto src={fotoGaleria(slug as GaleriaSlug, i + 1)} className="max-h-[70vh] w-full rounded-2xl !object-contain" />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-10 bg-brand-yellow text-black border-0" />
          <CarouselNext className="-right-10 bg-brand-yellow text-black border-0" />
        </Carousel>
      </div>
    </Screen>
  );
}
