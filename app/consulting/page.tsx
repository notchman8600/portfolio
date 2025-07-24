import type { Metadata } from "next";
import Script from "next/script";
import { Header } from "@/containers/Header";
import { SkillCards } from "@/containers/SkillCards";
import { Footer } from "@/components/Footer";
import { createServiceJsonLd, createBreadcrumbJsonLd } from "@/components/jsonLd";
import styles from "../../styles/Home.module.css";

export const metadata: Metadata = {
  title:
    "技術コンサル・スクラム導入支援 | のっちまん(notch_man) | アジャイル開発・技術選定・アーキテクチャ設計",
  description:
    "認定スクラムマスター(CSM)として、アジャイル開発の導入・実践を支援します。開発プロセスの改善・技術選定・アーキテクチャ設計・開発体制構築・技術的負債解消まで、幅広い技術コンサルティングを提供します。ビジネスの成長を技術面から支援します。お気軽にお問い合わせください。",
  keywords: [
    "技術コンサル",
    "スクラム導入",
    "アジャイル開発",
    "スクラムマスター",
    "CSM",
    "技術選定",
    "アーキテクチャ設計",
    "開発体制構築",
    "プロセス改善",
    "技術的負債",
    "アジャイルコーチング",
  ],
  openGraph: {
    title:
      "技術コンサル・スクラム導入支援 | のっちまん(notch_man) | アジャイル開発・技術選定・アーキテクチャ設計",
    description:
      "認定スクラムマスター(CSM)として、アジャイル開発の導入・実践を支援します。開発プロセスの改善から技術選定まで、幅広いコンサルティングを提供します。",
  },
  alternates: {
    canonical: "/consulting",
  },
};

export default function Consulting() {
  const serviceJsonLd = createServiceJsonLd({
    name: "技術コンサル・スクラム導入支援",
    description:
      "認定スクラムマスター(CSM)として、アジャイル開発の導入から実践まで支援。技術選定、アーキテクチャ設計、開発体制構築、技術的負債解消まで幅広くコンサルティングを提供します。",
    provider: "のっちまん (三宅 健太郎)",
    url: "https://notchman.tech/consulting",
    serviceType: "ConsultingService",
  });

  const breadcrumbJsonLd = createBreadcrumbJsonLd([
    { name: "Home", url: "https://notchman.tech" },
    { name: "技術コンサル・スクラム導入支援", url: "https://notchman.tech/consulting" },
  ]);

  return (
    <div className={styles.container}>
      <Script
        id="service-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceJsonLd),
        }}
        strategy="afterInteractive"
      />
      <Script
        id="breadcrumb-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
        strategy="afterInteractive"
      />
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>技術コンサル・スクラム導入支援</h1>
        <p className={styles.description}>
          開発プロセスの改善とチームの生産性向上をサポートします
        </p>

        <h2 className={styles.subtitle}>スクラム・アジャイル開発支援</h2>
        <SkillCards
          props={[
            {
              title: "スクラム導入支援",
              desc:
                "認定スクラムマスター(CSM)として、スクラムフレームワークの導入を支援。" +
                "チームの状況に応じた段階的な導入計画を策定し、" +
                "持続可能なアジャイル開発体制の構築をサポートします。",
            },
            {
              title: "アジャイルコーチング",
              desc:
                "スクラムイベントのファシリテーション、チームの自己組織化支援など、" +
                "実践的なコーチングを提供。開発チームが自律的に改善を続けられる" +
                "文化の醸成をサポートします。",
            },
            {
              title: "プロセス改善",
              desc:
                "現状の開発プロセスの課題分析から改善施策の立案・実行まで支援。" +
                "メトリクスの設定と継続的な計測により、" +
                "改善効果の可視化と定着を実現します。",
            },
          ]}
        />

        <h2 className={styles.subtitle}>技術コンサルティング</h2>
        <SkillCards
          props={[
            {
              title: "技術選定・アーキテクチャ設計",
              desc:
                "プロジェクトの要件と制約を踏まえた最適な技術スタックの選定。" +
                "将来の成長を見据えたスケーラブルなアーキテクチャ設計により、" +
                "ビジネスの成長を技術面から支援します。",
            },
            {
              title: "開発体制構築",
              desc:
                "チーム編成、開発環境の整備、ワークフローの設計など、" +
                "効率的な開発体制の構築を支援。リモートワークにも対応した" +
                "コラボレーション環境の構築もサポートします。",
            },
            {
              title: "技術的負債の可視化・解消",
              desc:
                "コードベースの分析により技術的負債を可視化。" +
                "優先順位付けと段階的な解消計画の策定により、" +
                "ビジネスへの影響を最小限に抑えながら改善を進めます。",
            },
          ]}
        />

        <h2 className={styles.subtitle}>実績・経験</h2>
        <SkillCards
          props={[
            {
              title: "SNSマーケティング企業でのスクラム導入",
              desc:
                "ストック素材販売サービスの開発チームにスクラムを導入。" +
                "チームの生産性向上と、予測可能なデリバリーを実現。" +
                "開発速度の向上とともに、品質も大幅に改善されました。",
            },
            {
              title: "スタートアップでの技術基盤構築",
              desc:
                "複数のスタートアップにて、ゼロからの技術基盤構築を支援。" +
                "適切な技術選定と開発プロセスの確立により、" +
                "限られたリソースで最大の成果を実現しました。",
            },
          ]}
        />

        <p className={styles.description}>
          技術コンサルティング・スクラム導入のご相談は
          <a href="/contact">お問い合わせ</a>ください。
        </p>
      </main>

      <Footer />
    </div>
  );
}
