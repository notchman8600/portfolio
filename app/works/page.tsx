import type { Metadata } from "next";
import WorksContent from "./WorksContent";

export const metadata: Metadata = {
  title: "実績・作品 | のっちまん(notch_man)のポートフォリオ",
  description:
    "のっちまんのこれまでの開発実績やハッカソン作品等を紹介しています。案件のご依頼を承っております。",
  openGraph: {
    title: "実績・作品 | のっちまん(notch_man)のポートフォリオ",
    description:
      "のっちまんのこれまでの開発実績やハッカソン作品等を紹介しています。案件のご依頼を承っております。",
    images: [
      {
        url: "",
        width: 1280,
        height: 960,
      },
    ],
  },
};

export default function WorksPage() {
  return <WorksContent />;
}
