import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-escalator.jpg";

const LOGO = "/images/logo.png";
const driveBtn = (id: string) => `https://lh3.googleusercontent.com/d/${id}=w800`;

const BTN_ESCADA   = driveBtn("1fsf_z_443RjFbihScFOpYxtIxET37i5D");
const BTN_ESTEIRA  = driveBtn("1lUem9Lsp9ZGQGbkNVO-n3GDVgtypbzOU");
const BTN_ELEVADOR = driveBtn("10z72F0-524YCafAqldQ6O_KqHI4iJ-Cx");
const BTN_PROJETOS = driveBtn("19EyP4qJbN9d1tCkq_6-a06mszM2n5LG-");
const BTN_PECAS    = driveBtn("12dKZs2BcE4qJpadM_pjx8X909mxkHbDL");
const BTN_SOBRE    = driveBtn("10UF_ZL6Mbcnx2sAErW5Tvn3_jF2Q2axz");

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

type Item =
  | {
      label: string;
      image: string;
      to: "/categoria/$slug";
      params: { slug: "escadas" | "esteiras" | "elevadores" | "projetos" };
    }
  | {
      label: string;
      image: string;
      to: "/pecas" | "/sobre";
    };

const items: Item[] = [
  { label: "Escadas\nRolante",                image: BTN_ESCADA,   to: "/categoria/$slug", params: { slug: "escadas" } },
  { label: "Esteiras\nRolante",               image: BTN_ESTEIRA,  to: "/categoria/$slug", params: { slug: "esteiras" } },
  { label: "Elevadores",                      image: BTN_ELEVADOR, to: "/categoria/$slug", params: { slug: "elevadores" } },
  { label: "Projetos\nEspeciais",             image: BTN_PROJETOS, to: "/categoria/$slug", params: { slug: "projetos" } },
  { label: "Peças Elevadores,\nEscadas e Esteiras", image: BTN_PECAS, to: "/pecas" },
  { label: "Sobre a\nVerticalParts",          image: BTN_SOBRE,    to: "/sobre" },
];

function Index() {
  return (
    <main className="min-h-screen w-full bg-background flex justify-center">
      <div className="relative w-full max-w-md min-h-screen overflow-hidden shadow-2xl">
        <img
          src={heroImg}
          alt="Escadas rolantes em centro comercial moderno"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/55 to-background/85" />

        <div className="relative flex flex-col items-center px-6 pt-10 pb-12">
          <header className="mb-8 w-full flex justify-center">
            <img
              src={LOGO}
              alt="VerticalParts"
              className="h-16 w-auto drop-shadow-lg"
            />
          </header>

          <p className="text-foreground/80 text-center text-sm mb-8 max-w-xs">
            Toque em uma categoria para conhecer nossos projetos
          </p>

          <nav className="w-full flex flex-col gap-6">
            {items.map((item) => {
              const linkProps =
                item.to === "/categoria/$slug"
                  ? { to: item.to, params: item.params }
                  : { to: item.to };
              return (
                <Link
                  key={item.label}
                  {...linkProps}
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
                  <span className="ml-36 pr-6 w-full text-center font-serif italic text-xl leading-tight whitespace-pre-line">
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </main>
  );
}