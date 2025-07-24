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
        url: "https://notchman.tech/profile.jpg",
        width: 1200,
        height: 630,
        alt: "のっちまんの開発実績・作品",
      },
    ],
    type: "website",
    url: "https://notchman.tech/works",
  },
};

export default function WorksPage() {
  return <WorksContent />;
}
