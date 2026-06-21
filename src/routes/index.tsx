import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-escalator.jpg";
import escadaImg from "@/assets/escada-rolante.jpg";
import esteiraImg from "@/assets/esteira-rolante.jpg";
import elevadorImg from "@/assets/elevador.jpg";
import projetosImg from "@/assets/projetos.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VerticalParts — Escadas, Esteiras e Elevadores" },
      {
        name: "description",
        content:
          "VerticalParts: peças e serviços para escadas rolantes, esteiras rolantes, elevadores e projetos especiais.",
      },
      { property: "og:title", content: "VerticalParts" },
      {
        property: "og:description",
        content:
          "Soluções verticais: escadas rolantes, esteiras, elevadores e projetos especiais.",
      },
    ],
  }),
  component: Index,
});

type Item = {
  label: string;
  image: string;
};

const items: Item[] = [
  { label: "Escadas\nRolante", image: escadaImg },
  { label: "Esteiras\nRolante", image: esteiraImg },
  { label: "Elevadores", image: elevadorImg },
  { label: "Projetos\nEspeciais", image: projetosImg },
];

function Index() {
  return (
    <main className="min-h-screen w-full bg-background flex justify-center">
      <div className="relative w-full max-w-md min-h-screen overflow-hidden shadow-2xl">
        {/* Hero background */}
        <img
          src={heroImg}
          alt="Escadas rolantes em centro comercial moderno"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/55 to-background/85" />

        {/* Content */}
        <div className="relative flex flex-col items-center px-6 pt-10 pb-12">
          {/* Logo */}
          <header className="flex items-center gap-3 mb-8">
            <div className="h-14 w-14 rounded-full bg-brand-yellow flex items-center justify-center shadow-lg">
              <svg
                viewBox="0 0 24 24"
                className="h-8 w-8 text-brand-yellow-foreground"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 2 4 6v6c0 5 3.5 9.3 8 10 4.5-.7 8-5 8-10V6l-8-4z" />
              </svg>
            </div>
            <h1 className="text-3xl font-black tracking-tight leading-none">
              <span className="text-foreground">VERTICAL</span>
              <span className="text-brand-yellow">PARTS</span>
            </h1>
          </header>

          {/* Curved divider */}
          <div className="w-full h-px bg-foreground/10 mb-10" />

          {/* Menu */}
          <nav className="w-full flex flex-col gap-6">
            {items.map((item) => (
              <button
                key={item.label}
                type="button"
                className="group relative flex items-center w-full h-24 rounded-[2.5rem] bg-brand-yellow text-brand-yellow-foreground shadow-xl transition-transform active:scale-[0.98] hover:-translate-y-0.5"
              >
                <span className="absolute -left-2 top-1/2 -translate-y-1/2 h-[110%] w-32 rounded-[2rem] overflow-hidden ring-4 ring-background/40 shadow-lg">
                  <img
                    src={item.image}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </span>
                <span className="ml-36 pr-6 w-full text-center font-serif italic text-2xl leading-tight whitespace-pre-line">
                  {item.label}
                </span>
              </button>
            ))}
          </nav>
        </div>
      </div>
    </main>
  );
}
