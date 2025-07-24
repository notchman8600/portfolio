import type { Metadata } from "next";
import Script from "next/script";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "のっちまん(notch_man)のポートフォリオ | フルスタックエンジニア",
  description:
    "のっちまん(三宅健太郎)のポートフォリオサイト。フロントエンド・バックエンド・インフラまで幅広く対応可能なフルスタックエンジニアです。案件のご依頼を承っております。React, Next.js, Go, Python, AWS等の技術スタックで開発支援いたします。",
  authors: [{ name: "のっちまん (Kentaro Miyake)" }],
  keywords: [
    "のっちまん",
    "notch_man",
    "三宅健太郎",
    "Kentaro Miyake",
    "フロントエンド",
    "バックエンド",
    "エンジニア",
    "開発",
    "案件",
    "フリーランス",
  ],
  icons: {
    icon: "/favicon.ico",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "のっちまん (三宅 健太郎)",
  alternateName: ["notch_man", "Kentaro Miyake"],
  url: "https://notchman.tech",
  jobTitle: "フルスタックエンジニア",
  worksFor: {
    "@type": "Organization",
    name: "フリーランス",
  },
  description:
    "フロントエンド・バックエンド・インフラまで幅広く対応可能なフルスタックエンジニア。React, Next.js, Go, Python, AWS等の技術スタックで開発支援いたします。",
  sameAs: [
    "https://twitter.com/notchman8600",
    "https://www.facebook.com/nct15317",
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
    "フロントエンド開発",
    "バックエンド開発",
    "インフラ構築",
  ],
  offers: {
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: "ソフトウェア開発サービス",
      description: "Webアプリケーション開発、APIサーバー開発、インフラ構築など",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <meta charSet="utf-8" />
      </head>
      <body>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
          strategy="afterInteractive"
        />
        {children}
      </body>
    </html>
  );
}
