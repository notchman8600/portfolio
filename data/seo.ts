import type { Metadata } from "next";

export const SITE_URL = "https://www.notchman.tech";
export const SITE_NAME = "のっちまんのポートフォリオ";

// Update lastModified only when the page's content changes, not on each build.
export const seoPages = {
  "/": {
    title: "のっちまん（三宅健太郎）｜Web開発・生成AI・技術コンサル",
    description:
      "のっちまん（notch_man／三宅健太郎）のポートフォリオ。LINEヤフーの機械学習エンジニア、馬車馬テクノロジーズ代表。Web開発、生成AI・LLM活用、AWS構築、技術コンサル・研修のご依頼を承ります。開発実績・経歴・研究業績を紹介します。",
    lastModified: "2026-09-13",
  },
  "/webdev": {
    title: "Web開発・受託開発",
    description:
      "React・Next.jsのフロントエンドからGo・Python・TypeScriptのAPI開発まで、一貫したWebサービス開発を支援します。マイクロサービス構成や既存システムとの連携にも対応。のっちまん（三宅健太郎）の技術・開発経験をご紹介します。",
    lastModified: "2026-09-13",
  },
  "/ai": {
    title: "生成AI・LLM開発｜チャットボット・業務支援",
    description:
      "社内チャットボット、RAG、会議効率化・議事録作成支援など、生成AI・LLMを活用した業務システムの開発を承ります。LangChainによるワークフロー設計やVLMを用いたマルチモーダル処理にも対応。開発経験と支援内容をご紹介します。",
    lastModified: "2026-09-13",
  },
  "/career": {
    title: "経歴・研究業績・受賞歴",
    description:
      "のっちまん（三宅健太郎）の職務経歴・研究業績・登壇・受賞歴。LINEヤフーの機械学習エンジニア、馬車馬テクノロジーズ代表、筑波大学大学院博士後期課程。WWW'24での論文発表、DEIM2024優秀論文賞、未踏採択などの実績を紹介します。",
    lastModified: "2026-09-13",
  },
  "/consulting": {
    title: "技術コンサル・スクラム導入支援",
    description:
      "認定スクラムマスター（CSM）ののっちまんが、スクラム導入・アジャイル開発の定着を支援します。開発プロセスの改善、技術選定、アーキテクチャ設計、開発体制構築など、チームの課題に応じた技術コンサルティングをご相談いただけます。",
    lastModified: "2026-09-13",
  },
  "/training": {
    title: "エンジニア技術研修・メンター支援",
    description:
      "企業向けの新人エンジニア研修、Git・GitHub、Docker、アジャイル開発研修を承ります。enPiTでのPBL形式の開発教育・メンター経験を活かし、実践的なカリキュラム作成から若手エンジニアの育成まで支援します。",
    lastModified: "2026-09-13",
  },
  "/legacy": {
    title: "レガシー改善・リファクタリング・システム設計",
    description:
      "既存システムのリファクタリング、Rails・Laravel・PHPのバージョンアップ、技術的負債の解消を支援します。パフォーマンス改善、マイクロサービス移行、CI/CD整備など、継続して開発・運用できるシステムづくりをご相談ください。",
    lastModified: "2026-09-13",
  },
  "/infra": {
    title: "AWSインフラ構築・運用・クラウド移行",
    description:
      "AWS・Docker・Kubernetesを活用したインフラ構築・運用を支援します。オンプレミスからAWSへの移行、CI/CDパイプライン、サーバーレス構成、高負荷環境の運用など、要件に応じた構成の提案から実装まで対応します。",
    lastModified: "2026-09-13",
  },
  "/frontend": {
    title: "React・Next.jsのフロントエンド開発",
    description:
      "のっちまんのフロントエンド開発スキルと実装経験。React・Next.js・TypeScriptによるWebアプリ開発、複雑なフォームの設計、SPAからNext.jsへの移行、テンプレートエンジンとの組み合わせなど、対応できる技術を紹介します。",
    lastModified: "2026-09-13",
  },
  "/backend": {
    title: "Go・Python・TypeScriptのバックエンド開発",
    description:
      "のっちまんのバックエンド開発スキル。Go・Python・TypeScript・Kotlin・PHP・Rubyを用いたAPIサーバーやWebサービスの開発・運用経験を紹介します。フロントエンド・インフラと連携した開発のご依頼を承ります。",
    lastModified: "2026-09-13",
  },
  "/works": {
    title: "開発実績・作品｜Web・生成AI・研究",
    description:
      "のっちまん（三宅健太郎）の開発実績・作品集。LLMを活用した業務支援ツール、NewsPicksの機能改善、Webサービス開発、ハッカソン作品を紹介。研究成果や未踏・SecHack365などの採択・受賞実績も掲載しています。",
    lastModified: "2026-09-13",
  },
  "/contact": {
    title: "開発・生成AI・技術コンサルのご依頼・お問い合わせ",
    description:
      "のっちまん（三宅健太郎）への開発案件・技術相談はこちら。Web開発、生成AI・LLM活用、AWSインフラ構築、スクラム導入支援、技術研修のご依頼を承ります。メールやSNSなどの連絡先をご案内しています。",
    lastModified: "2026-09-13",
  },
} as const;

export type SeoPath = keyof typeof seoPages;

export function siteUrl(path = "/"): string {
  return new URL(path, SITE_URL).href;
}

export function createPageMetadata(path: SeoPath): Metadata {
  const page = seoPages[path];
  const title =
    path === "/" ? page.title : `${page.title} | のっちまん（notch_man）`;

  return {
    title,
    description: page.description,
    alternates: { canonical: siteUrl(path) },
    openGraph: {
      title,
      description: page.description,
      url: siteUrl(path),
      siteName: SITE_NAME,
      type: "website",
      locale: "ja_JP",
      images: [
        {
          url: siteUrl("/profile.jpg"),
          width: 3024,
          height: 2016,
          alt: "のっちまん（三宅健太郎）のプロフィール写真",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      creator: "@notchman8600",
      title,
      description: page.description,
      images: [siteUrl("/profile.jpg")],
    },
  };
}
