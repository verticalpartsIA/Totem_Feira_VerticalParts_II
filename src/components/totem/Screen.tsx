import { Link, useRouter } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, MessageCircle } from "lucide-react";
import type { ReactNode } from "react";
import { useIdleRedirect } from "@/hooks/use-idle-redirect";

export const LOGO = "/images/logo.png";

export function Screen({
  children,
  background,
  logo = true,
  voltar = true,
  proximo,
  className = "",
}: {
  children: ReactNode;
  background?: string;
  logo?: boolean;
  voltar?: boolean;
  proximo?: "/escadas";
  className?: string;
}) {
  const router = useRouter();
  useIdleRedirect(30_000);
  return (
    <main className="min-h-screen w-full bg-black flex justify-center text-white">
      <div className={`relative w-full max-w-md min-h-screen overflow-hidden flex flex-col items-center ${className}`}>
        {background && (
          <img src={background} alt="" className="absolute inset-0 h-full w-full object-cover opacity-60" />
        )}
        {logo && (
          <img src={LOGO} alt="VerticalParts" className="relative mt-8 h-12 w-auto" />
        )}
        <div className="relative flex-1 w-full flex flex-col items-center">{children}</div>
        {(voltar || proximo) && (
          <nav className="relative w-full flex justify-between px-6 pb-6 pt-4 text-sm text-white/80">
            {voltar ? (
              <button onClick={() => router.history.back()} className="inline-flex items-center gap-2 active:scale-95">
                <ArrowLeft className="h-6 w-6" /> Voltar
              </button>
            ) : <span />}
            {proximo && (
              <Link to={proximo} className="inline-flex items-center gap-2 active:scale-95">
                Próximo <ArrowRight className="h-6 w-6" />
              </Link>
            )}
          </nav>
        )}
      </div>
    </main>
  );
}

export function Foto({ src, className = "" }: { src: string; className?: string }) {
  return (
    <img
      src={src}
      alt=""
      loading="lazy"
      onError={(e) => (e.currentTarget.style.visibility = "hidden")}
      className={`bg-neutral-800 object-cover ${className}`}
    />
  );
}

export function BotaoParceria({ label = "Quero construir uma parceria" }: { label?: string }) {
  return (
    <Link
      to="/contato"
      className="inline-flex items-center gap-2 rounded-lg bg-brand-yellow px-4 py-3 text-xs font-semibold uppercase text-brand-yellow-foreground shadow-lg active:scale-95"
    >
      <MessageCircle className="h-5 w-5" /> {label}
    </Link>
  );
}
