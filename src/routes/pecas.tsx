import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronLeft } from "lucide-react";
import logoAsset from "@/assets/logo-verticalparts-white.png.asset.json";
import { useIdleRedirect } from "@/hooks/use-idle-redirect";

export const Route = createFileRoute("/pecas")({
  head: () => ({
    meta: [
      { title: "Peças — Elevadores, Escadas e Esteiras Rolantes | VerticalParts" },
      {
        name: "description",
        content:
          "Galeria de peças para elevadores, escadas e esteiras rolantes da VerticalParts.",
      },
    ],
  }),
  component: PecasPage,
});

const driveUrl = (id: string, w = 1200) =>
  `https://lh3.googleusercontent.com/d/${id}=w${w}`;

const FOTOS_IDS: string[] = [
  "1doJ-ejXCqpEFfSKBhOH31EF4CPEVp-Gh",
  "1FSm9oJyjf_57lMxsUlUvaEkyVNdNwMpm",
  "1e1sFPoviDwp0yuiWg-wIfXsPUBdqLhnt",
  "1hH6cw84JPkxQLXx4ffa0OJaC10wmPre5",
  "1HUNulIBicJkKO8MVmLWqXaSUELXkIdzk",
  "1A1u2ey4dl8fG7Bf49MGwvYHT2BC0DspP",
  "1VlScTY7x1I4ROQNyuM9Og2N-dXDFqYvB",
  "1d6CrKYlLUZiQ2R3KKl4r1QpxI85jBK_G",
  "1ywSwuvI2vmN-T5cnUiUn1Z0w6MOXFrgq",
  "1Q6t6Zw8xyf20Dv98UQ6krpDwmZ6vHwKW",
  "1-iCorYR9I1mRYc5cizuereweEcTSJsm8",
  "1a4OwDRpOXZWQl-2of_yheCypkEf1d4ep",
  "1McFI_fDPp_CuE_5QrSTfhtUKeSwI9ANZ",
  "1Ul_AhTG2lHliGmlPcYMNhTUG_7RuaSqI",
  "10fiWnOzss8NNgxe2t9KIAwqX0LMWPZVT",
  "1SVs72tJLhwHZaV-QPmDMZ5-A43_CakZS",
  "1zHaYEPVnrf5lHlBTiAIMOBmZKHAmrOo_",
  "1cpQyllhJwu_CpBeiEFUBvZSX4LSmuD2Q",
  "1fj3Ibn5c9u0syRv3g2PyzIFsgURn4qXI",
  "118t-WlQ1FpfD_c4QGB-eYR3v9VcYaDKs",
  "1ydieRpqSjSY55txbsb58rNgLmB2Dpc2c",
  "1zP9Qe8TzpZsLU53kgAJ3vxonjDA418L1",
  "13HvQgTeBjwCN8tUz489fNHAKO8r3wVTG",
  "1YOaPfvqdtS64DhmGvmbeuCstBS3HosLR",
  "1Kmtqe4agBkxVVhm4ANLVwmRI2ShfBAWH",
  "1i0DTP6ILFJLp5p2B8T72UBMR0zm0svIS",
  "1cWW2bsRey8eSTwS6APNPGLmrdel-AmS8",
  "1o_T4jryqqOJ9d_AjUAg5_5jhnvmrlk_A",
  "1yPNc8Ov7iiGG7I5Ujm7tceqbK8WrJElo",
  "12f6j_D-yD1decUbHy0Qrw01Y9ZPWIKo0",
  "1Qd_hpx3SoZdyBs7V2ODRitRFz17qba8n",
  "1r2if1he2Pjr_2GB8kYVhkmH9scfVW4IT",
  "1bOJyTG8Gpmu9xz23PjytdijlBsEQpVVu",
  "1WGtp76yq8tSmKOzIk4gCTmWgBsdfjOKk",
  "1zMoz06ZF8Gdxh3iECz1jhDOAuGgORoI8",
  "1EzZT3f_mcJoYKUutCcNNgEOq2aSwOBbM",
  "1RtJ8lk6Nxg3hl0DfKfoch8Rms_bjWufw",
  "1i95xQ1PQPKt8J-s8Eipm2kZe1UOMRo8H",
  "1806smPfDOJiKZt3hKeFcjCQ-xGlYTBzf",
  "11lkOvZ6R5yC1FrPoHdSmMtGJPsBvWvJE",
  "1ap37iMGfhOewYOF53b1IiHXCdqor5xI4",
  "1UPzTGeiCN3so5oPvkZCRHbhyaM1zq3XP",
  "1bWJvpvGzS_MpIiin1GZ_s4C1RIxoR2p8",
  "1rK8Cb1jQjuJr4pT_hJpfEAH16T4QQN00",
  "1UbANkr3pEL9xaEXEM_U1o8v7an3I7Jld",
  "1KniAdon3A43-vciQH8evp2uivEi8Jy8F",
];

function PecasPage() {
  useIdleRedirect(60_000);

  return (
    <main className="min-h-screen w-full bg-background flex justify-center">
      <div className="relative w-full max-w-md min-h-screen overflow-hidden flex flex-col px-4 pt-4 pb-6">
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

        <div className="px-2 mb-4">
          <p className="text-brand-yellow text-xs tracking-[0.25em] uppercase mb-1">
            Catálogo
          </p>
          <h1 className="font-serif italic text-2xl text-foreground leading-tight">
            Peças — Elevadores, Escadas e Esteiras Rolantes
          </h1>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {FOTOS_IDS.map((id) => (
            <div
              key={id}
              className="aspect-square rounded-2xl overflow-hidden ring-1 ring-foreground/10 shadow-md bg-white"
            >
              <img
                src={driveUrl(id, 800)}
                alt="Peça VerticalParts"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
