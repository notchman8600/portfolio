import type { Metadata } from "next";
import Script from "next/script";
import "../styles/globals.css";

export const metadata: Metadata = {
  title:
    "のっちまん(notch_man)のポートフォリオ | 全方位型エンジニア | 開発案件・技術コンサル・研修承ります",
  description:
    "のっちまん(三宅健太郎)のポートフォリオサイト。フロントエンド・バックエンド・インフラまで幅広く対応可能な全方位型エンジニアです。開発案件・受託開発・技術コンサル・技術研修を承っております。React, Next.js, Go, Python, AWS等の技術スタックで開発支援いたします。お気軽にお問い合わせください。",
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
    "開発案件",
    "受託開発",
    "技術コンサル",
    "技術研修",
    "スクラムマスター",
    "アジャイル開発",
    "Web開発",
    "システム開発",
  ],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title:
      "のっちまん(notch_man)のポートフォリオ | 全方位型エンジニア | 開発案件・技術コンサル・研修承ります",
    description:
      "のっちまん(三宅健太郎)のポートフォリオサイト。フロントエンド・バックエンド・インフラまで幅広く対応可能な全方位型エンジニアです。開発案件・技術コンサル・技術研修を承っております。",
    images: [
      {
        url: "https://notchman.tech/profile.jpg",
        width: 1200,
        height: 630,
        alt: "のっちまん(notch_man)のポートフォリオ",
      },
    ],
    type: "website",
    url: "https://notchman.tech/",
    siteName: "のっちまんのポートフォリオ",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    site: "@notchman8600",
    creator: "@notchman8600",
    title:
      "のっちまん(notch_man)のポートフォリオ | 全方位型エンジニア | 開発案件・技術コンサル・研修承ります",
    description:
      "のっちまん(三宅健太郎)のポートフォリオサイト。フロントエンド・バックエンド・インフラまで幅広く対応可能な全方位型エンジニアです。開発案件・技術コンサル・技術研修を承っております。",
    images: ["https://notchman.tech/profile.jpg"],
  },
  metadataBase: new URL("https://notchman.tech"),
  alternates: {
    canonical: "/",
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "のっちまんのポートフォリオ",
    alternateName: "notch_man's portfolio",
    url: "https://notchman.tech",
    description:
      "のっちまん(三宅健太郎)のポートフォリオサイト。フロントエンド・バックエンド・インフラまで幅広く対応可能な全方位型エンジニアです。",
    author: {
      "@type": "Person",
      name: "のっちまん (三宅 健太郎)",
      alternateName: ["notch_man", "Kentaro Miyake"],
    },
    inLanguage: "ja",
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "のっちまん (三宅 健太郎)",
    alternateName: ["notch_man", "Kentaro Miyake"],
    url: "https://notchman.tech",
    jobTitle: "全方位型エンジニア",
    worksFor: {
      "@type": "Organization",
      name: "フリーランス",
    },
    description:
      "フロントエンド・バックエンド・インフラまで幅広く対応可能な全方位型エンジニア。React, Next.js, Go, Python, AWS等の技術スタックで開発支援いたします。",
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
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
        <link rel="apple-touch-icon" href="/profile.jpg" />
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
