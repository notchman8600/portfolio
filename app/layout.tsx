import type { Metadata, Viewport } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { StructuredData } from "@/components/StructuredData";
import { SITE_NAME, SITE_URL, seoPages, siteUrl } from "@/data/seo";
import styles from "@/styles/Home.module.css";
import "../styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: seoPages["/"].title,
  description: seoPages["/"].description,
  applicationName: SITE_NAME,
  authors: [{ name: "のっちまん（三宅健太郎）", url: SITE_URL }],
  icons: { icon: "/favicon.ico", apple: "/profile.jpg" },
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": siteUrl("/#website"),
    name: "のっちまんのポートフォリオ",
    alternateName: "notch_man's portfolio",
    url: "https://www.notchman.tech",
    description:
      "のっちまん(三宅健太郎)のポートフォリオサイト。フロントエンド・バックエンド・インフラから生成AI・LLM応用まで幅広く対応可能な全方位型エンジニアです。",
    author: {
      "@id": siteUrl("/#person"),
      "@type": "Person",
      name: "のっちまん (三宅 健太郎)",
      alternateName: ["notch_man", "Kentaro Miyake"],
    },
    inLanguage: "ja",
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": siteUrl("/#person"),
    image: siteUrl("/profile.jpg"),
    name: "のっちまん (三宅 健太郎)",
    alternateName: ["notch_man", "Kentaro Miyake"],
    url: "https://www.notchman.tech",
    jobTitle: "機械学習エンジニア / 全方位型エンジニア",
    worksFor: {
      "@type": "Organization",
      name: "LINEヤフー株式会社",
      url: "https://www.lycorp.co.jp/",
    },
    affiliation: [
      {
        "@type": "Organization",
        name: "合同会社馬車馬テクノロジーズ",
        url: "https://www.basyauma-tech.com/",
      },
      {
        "@type": "CollegeOrUniversity",
        name: "筑波大学大学院 情報学学位プログラム",
        url: "https://www.tsukuba.ac.jp/",
      },
    ],
    description:
      "フロントエンド・バックエンド・インフラから生成AI・LLM応用まで幅広く対応可能な全方位型エンジニア。React, Next.js, Go, Python, AWS, LangChain等の技術スタックで開発支援いたします。",
    sameAs: [
      "https://twitter.com/notchman8600",
      "https://www.facebook.com/nct15317",
      "https://github.com/notchman8600",
      "https://www.wantedly.com/id/notchman8600",
    ],
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Go",
      "Python",
      "PHP",
      "Ruby",
      "AWS",
      "Docker",
      "Kubernetes",
      "LLM",
      "LangChain",
      "生成AI",
      "機械学習",
      "強化学習",
      "フロントエンド開発",
      "バックエンド開発",
      "インフラ構築",
    ],
    makesOffer: {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "ソフトウェア開発サービス",
        description:
          "Webアプリケーション開発、APIサーバー開発、インフラ構築など",
      },
    },
  },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <StructuredData id="json-ld" data={jsonLd} />
        <div className={styles.container}>
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
