import { useNavigate } from "@tanstack/react-router";
import { useCallback, useEffect, useRef, useState } from "react";

/** Sem interação por este tempo, o vídeo institucional toma a tela (instrução da pasta VIDEO INTERATIVO). */
const OCIOSO_MS = 60_000;

const EVENTOS: (keyof WindowEventMap)[] = ["pointerdown", "pointermove", "touchstart", "keydown", "wheel"];

export function ProtetorVideo() {
  const navigate = useNavigate();
  const [ativo, setAtivo] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // fecha o vídeo e volta à tela principal; o relógio de ociosidade recomeça sozinho
  const fechar = useCallback(() => {
    setAtivo(false);
    navigate({ to: "/" });
  }, [navigate]);

  // Ocioso por 1 min → vídeo. Ao terminar o vídeo → tela principal → mais 1 min → vídeo de novo,
  // em ciclo, até alguém tocar na tela (o toque durante o vídeo também fecha e volta à principal).
  useEffect(() => {
    if (ativo) return;
    let timer: ReturnType<typeof setTimeout>;
    const reiniciar = () => {
      clearTimeout(timer);
      timer = setTimeout(() => setAtivo(true), OCIOSO_MS);
    };
    EVENTOS.forEach((e) => window.addEventListener(e, reiniciar, { passive: true }));
    reiniciar();
    return () => {
      clearTimeout(timer);
      EVENTOS.forEach((e) => window.removeEventListener(e, reiniciar));
    };
  }, [ativo]);

  useEffect(() => {
    const v = videoRef.current;
    if (!ativo || !v) return;
    v.currentTime = 0;
    // tenta com som; se o navegador bloquear o autoplay, cai para mudo
    v.muted = false;
    v.play().catch(() => {
      v.muted = true;
      v.play().catch(() => {});
    });
  }, [ativo]);

  if (!ativo) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black" onPointerDown={fechar}>
      <video
        ref={videoRef}
        src="/video/feira.mp4?v=2"
        onEnded={fechar}
        playsInline
        className="h-full max-h-screen bg-black object-contain"
        style={{ aspectRatio: "9 / 16", maxWidth: "100vw" }}
      />
    </div>
  );
}
