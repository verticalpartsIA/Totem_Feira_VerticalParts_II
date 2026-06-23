import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronLeft } from "lucide-react";
import { useIdleRedirect } from "@/hooks/use-idle-redirect";

const LOGO = "/images/logo.png";

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
  "1mOlrQ1EYP_tc_uzA6YmU5lvBK5EbS8M5",
  "1x39JR-Y4Wfl_NReWRJiZWX10SGSGQp8F",
  "1dyd7j6ub_LNs4LNwskvNJtsUgnx-iK2w",
  "1P9S6zo9Mqtghtz21N0gnu7kauAj6bhew",
  "1BxQGAgtJcMrTIRi7bPg-bPA8A7gwu5DN",
  "10A8bY_n77Nd4KIzgZMp4tfa5X3OpgUJH",
  "1IVe6FBSL2jg8z-wlIIcGT6Hz3oAKZ632",
  "1FXh2eM1kNdGzt7ym27CfKKZ01mDHJmSK",
  "1Zs2G0PwnCk7M2_B_8f4P36QkWB-ldSDY",
  "11yT8keVg3yLmfph9PdDOdBV6aEAFHzFQ",
  "1uCb-IpBlL3ynaCgD1DRdc5-MICNn6svN",
  "1xvqqRM80xjIloJQnWENTmkh2slsM9qj7",
  "1-yZ0_qf1DGeYPb7pe3pbxhr405R1y0MG",
  "1XOklaQ3T-q24IqPcbWOGFDfIE-RKb4OK",
  "1Ufb_iS36oqmsO3fHm6FIaoCfC5C5ZHi4",
  "1XfTEHNo66OYNciViqnyzov2HCZ-p7Ueg",
  "1DWXef3gvRkTXRxSpaP_pQuhkt5FE83NH",
  "1iYyAnkohCcCZTZNUrRUrwPiLsiA3Ubqg",
  "1SV2dPclDXteKyy4hG6-6BbxXiEWF0_7x",
  "17FeqPZ0_GDddjJeNaKFdY4sRSKeMcrpf",
  "1h-ewagWF0TBuyYPKTGZlXffQkfTlQEBL",
  "1z__b2dI-0qcE9HO98nG9xu6-HCaajnq3",
  "1vfN799edyRpJAFY6M5eLL0zV6Z44dffL",
  "11xpWL7KKrc8FdEwPQb290ITYRe_BRo7_",
  "1Jb6wVa-AExhwl681tqVnQi58FmwCBKr3",
  "1E7CzZK5i26a3sAn-gxojsWK7i_3f47wU",
  "1fvkloqkItd2NoXAOPSvey9vvt72TFB9j",
  "1fu4_tP2KlgRTjGZI3i44xQP2ILHWsbkh",
  "1xrZePqQEfVtkdKWGwbHZBjIxeLDez5eV",
  "14n3QIWcmBxzhB7PxpgOe4bx6dbJDEQQm",
  "1wTXxmWCRPvxMMbIlzgU-lbCZimt0kCJI",
  "10OHR0zaD_ScZo9QRi83Bj44N-HH0CIts",
  "1dAfP3ukY94zqZ6K1mDCF7btD2l95_nAh",
  "1iUTXPu8VzP6psJX840-FY_xOfJZtar1x",
  "1FksJAvsuV8N2mOZLyFu_3gDNA7x1KsQo",
  "1_RfvYN05VgeGNXulpexjHd8d65iAF8nZ",
  "1LWc4fJFQtIz50o9CccjP4hbLk1XKgR95",
  "1-AgJJFmbhwjkJSgPhgjlRBRhV-gDALc2",
  "1JpwGmO7cKc5Do99Tmbz8OKi3DcduS4G7",
  "1rQ6SIIpj37kfoQLRdXnXJuAYcxT6BFeZ",
  "1x4K5S2M-Qt7MItbGYgYEuSW-qBraHLH5",
  "1kv6eh4SL5Rw6PNJNHj6LoMWzZixKkKpC",
  "1ReoJI5-47MVnxEKmSwuF8pZKLcvwg7_w",
  "1ObV5lcoSF_wsjT8Q2-5m5KR-aQ8K5xe9",
  "1Gg1smRaA404PbaD_aXlQvOBdosNlGITT",
  "1TYLTaR9XKAuyIyxAObL0uL6mTgT7c-84",
  "1N2HWPlctORflJGu_DngU3phBsZ5NyGDV",
  "1qW8TcOmvW3oYLvzI0YgGe0n7G3GwxDxJ",
  "18TKy1GTEvVIazN3dhQx-ixQEj4HszKcE",
  "1y-cZnMcc2xKnMlX-_uGcLXK9wDwd6Z7X",
  "1s0MqI133gSPAyh4xkDIcTneHTTKNTpUd",
  "1CauXL07lStvmMyWj0e_TJtRTzr0lLjVi",
  "1H5vGeV3ms1nBZyffiERrsk4rqi__sDXT",
  "1A0OCzEztKo7yO1WpJ8klXZy1dl3uIPWg",
  "1S1STQS32mVqMBQLz6qmzFztpXAoZs59X",
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
          <img src={LOGO} alt="VerticalParts" className="h-9 w-auto" />
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