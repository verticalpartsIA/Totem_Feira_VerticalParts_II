import { Link, useRouter } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import type { ReactNode } from "react";
import { useIdleRedirect } from "@/hooks/use-idle-redirect";

/** Área tocável posicionada em % sobre a arte (referência: 1080x1920 do Canva). */
export type Hotspot = {
  label: string;
  to: string;
  x: number;
  y: number;
  w: number;
  h: number;
};

type Props = {
  src: string;
  alt: string;
  hotspots?: Hotspot[];
  idleMs?: number;
  children?: ReactNode;
};

/** Converte coordenadas da miniatura do Canva (335x596) em porcentagem. */
export const spot = (
  label: string,
  to: string,
  [x1, y1, x2, y2]: [number, number, number, number],
): Hotspot => ({
  label,
  to,
  x: (x1 / 335) * 100,
  y: (y1 / 596) * 100,
  w: ((x2 - x1) / 335) * 100,
  h: ((y2 - y1) / 596) * 100,
});

export const VOLTAR_ESQ: [number, number, number, number] = [8, 556, 90, 590];

export function TelaTotem({ src, alt, hotspots = [], idleMs = 45_000, children }: Props) {
  useIdleRedirect(idleMs);

  return (
    <main className="flex h-screen w-full items-center justify-center bg-black">
      <div
        className="relative h-full max-h-screen"
        style={{ aspectRatio: "9 / 16", maxWidth: "100vw" }}
      >
        <img
          src={src}
          alt={alt}
          draggable={false}
          className="absolute inset-0 h-full w-full select-none object-contain"
        />
        {hotspots.map((h) => (
          <Link
            key={h.label}
            to={h.to}
            aria-label={h.label}
            className="absolute rounded-2xl transition-colors active:bg-white/20"
            style={{
              left: `${h.x}%`,
              top: `${h.y}%`,
              width: `${h.w}%`,
              height: `${h.h}%`,
            }}
          />
        ))}
        {children}
      </div>
    </main>
  );
}

/** "Voltar" visível para telas cuja arte não traz o botão (ex.: QR code). */
export function BotaoVoltar({ fallback = "/" }: { fallback?: string }) {
  const router = useRouter();
  return (
    <button
      type="button"
      onClick={() =>
        router.history.canGoBack() ? router.history.back() : router.navigate({ to: fallback })
      }
      className="absolute bottom-[3.5%] left-[4%] flex items-center gap-2 rounded-full border-2 border-white/70 px-5 py-2.5 text-lg text-white/90 active:bg-white/20"
    >
      <ArrowLeft className="h-6 w-6" /> Voltar
    </button>
  );
}
