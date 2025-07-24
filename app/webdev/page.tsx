import type { Metadata } from "next";
import { Header } from "@/containers/Header";
import { SkillCards } from "@/containers/SkillCards";
import styles from "../../styles/Home.module.css";

export const metadata: Metadata = {
  title: "Web開発 | のっちまん(notch_man)のポートフォリオ",
  description:
    "フロントエンドからバックエンドまで一貫したWebサービス開発が可能です。React, Next.js, Vue.js, Go, Python, PHP, Ruby on Rails, Laravelなど幅広い技術スタックで対応します。",
  openGraph: {
    title: "Web開発 | のっちまん(notch_man)のポートフォリオ",
    description:
      "フロントエンドからバックエンドまで一貫したWebサービス開発が可能です。React, Next.js, Vue.js, Go, Python, PHP, Ruby on Rails, Laravelなど幅広い技術スタックで対応します。",
  },
  alternates: {
    canonical: "/webdev",
  },
};

export default function WebDev() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>Web開発</h1>
        <p className={styles.description}>
          フロントエンドからバックエンドまで一貫した開発をサポートします
        </p>

        <h2 className={styles.subtitle}>フロントエンド開発</h2>
        <SkillCards
          props={[
            {
              title: "React / Next.js",
              desc:
                "Reactを使ってシングルページのアプリケーションから複数ページアプリまで様々な開発実績があります。" +
                "SEO対策が必要な案件ではNext.jsを採用し、SSR/SSGを活用した高速なWebサイトを構築します。" +
                "当サイトもNext.jsで作成されています。",
            },
            {
              title: "TypeScript / JavaScript",
              desc:
                "型安全性を重視したTypeScriptでの開発を得意としています。" +
                "複雑なバリデーションを持つフォームアプリケーションや、大規模なSPAの開発経験があります。" +
                "モダンなJavaScriptフレームワークに幅広く対応可能です。",
            },
            {
              title: "CSS / UIフレームワーク",
              desc:
                "tailwindcss, Bootstrap, chakra-uiなど様々なCSSフレームワークに精通しています。" +
                "レスポンシブデザインやアクセシビリティに配慮したUI開発が可能です。" +
                "最近はCSS-in-JSソリューション（linaria等）を使った案件にも関わっています。",
            },
          ]}
        />

        <h2 className={styles.subtitle}>バックエンド開発</h2>
        <SkillCards
          props={[
            {
              title: "Go / Python",
              desc:
                "高パフォーマンスが求められるAPIサーバーはGoで、機械学習連携が必要な場合はPythonで開発します。" +
                "マイクロサービス構成でのAPI開発や、WebSocketを使用したリアルタイム通信の実装経験があります。" +
                "配信基盤構築の経験もあります。",
            },
            {
              title: "Rails / Laravel / PHP",
              desc:
                "Ruby on RailsやLaravelを使用したフルスタックWebアプリケーション開発の豊富な経験があります。" +
                "レガシーシステムのリファクタリングや、モダンな構成への移行もサポートします。" +
                "Railsのバージョンアップや性能改善の実績があります。",
            },
            {
              title: "Node.js / TypeScript",
              desc:
                "Express, NestJSなどを使用したNode.jsベースのAPIサーバー開発が可能です。" +
                "フロントエンドと同じTypeScriptで統一することで、型定義の共有や開発効率の向上を実現します。" +
                "サーバーレスアーキテクチャでの開発経験もあります。",
            },
          ]}
        />

        <h2 className={styles.subtitle}>開発実績</h2>
        <SkillCards
          props={[
            {
              title: "マイクロサービス開発",
              desc: "複数のサービスを組み合わせたマイクロサービスアーキテクチャでの開発・運用経験があります。サービス間通信の設計やAPI設計に精通しています。",
            },
            {
              title: "レスポンシブWebデザイン",
              desc: "モバイルファーストで、様々なデバイスに対応したWebサイトの構築が可能です。アクセシビリティにも配慮した開発を心がけています。",
            },
            {
              title: "パフォーマンス最適化",
              desc: "Webサイトのパフォーマンス改善、Core Web Vitalsの最適化、バンドルサイズの削減など、ユーザー体験を向上させる施策を実施できます。",
            },
          ]}
        />

        <p className={styles.description}>
          Web開発の案件を承っております。お気軽に
          <a href="/contact">お問い合わせ</a>ください。
        </p>
      </main>

      <footer className={styles.footer}>
        Authored by notch_man, Powered by Next.js
      </footer>
    </div>
  );
}
