import { QRCodeSVG } from "qrcode.react";
import { Screen } from "./Screen";
import { CONTATOS } from "@/lib/contatos";

export function QrScreen({ mensagem }: { mensagem: string }) {
  return (
    <Screen voltar={false}>
      <div className="mt-24 w-4/5">
        <h1 className="text-2xl font-bold uppercase leading-tight border-t-2 border-brand-yellow pt-1 w-fit">
          <span className="text-brand-yellow">Escaneie</span><br />e fale conosco
        </h1>
        <div className="mt-4 rounded-2xl bg-white p-5 w-fit">
          <QRCodeSVG value={CONTATOS.whatsapp} size={220} />
        </div>
        <p className="mt-6 whitespace-pre-line text-lg leading-snug">{mensagem}</p>
      </div>
    </Screen>
  );
}
