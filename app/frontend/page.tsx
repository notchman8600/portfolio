import type { Metadata } from "next";
import { Header } from "@/containers/Header";
import { SkillCards } from "@/containers/SkillCards";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";
import styles from "@/styles/Home.module.css";

export const metadata: Metadata = {
  title: "フロントエンド開発 | のっちまん(notch_man)のポートフォリオ",
  description:
    "のっちまんのフロントエンド開発スキル。React, Next.js, TypeScriptを使ったWebアプリケーション開発を得意としています。案件のご依頼を承っております。",
  openGraph: {
    title: "フロントエンド開発 | のっちまん(notch_man)のポートフォリオ",
    description:
      "のっちまんのフロントエンド開発スキル。React, Next.js, TypeScriptを使ったWebアプリケーション開発を得意としています。案件のご依頼を承っております。",
    images: [
      {
        url: "https://notchman.tech/profile.jpg",
        width: 1200,
        height: 630,
        alt: "のっちまんのフロントエンド開発",
      },
    ],
    type: "website",
    url: "https://notchman.tech/frontend",
  },
};

export default function FrontendPage() {
  return (
    <div className={styles.container}>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: "https://notchman.tech" },
          { name: "フロントエンド開発", url: "https://notchman.tech/frontend" },
        ]}
      />
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>フロントエンドのスキル</h1>

        <h2 className={styles.subtitle}>主な技術スタック</h2>
        <SkillCards
          props={[
            {
              title: "React",
              desc:
                "Reactを使ってシングルページのアプリケーションから複数ページアプリまで様々な開発実績があります。ハッカソンでフロントエンドを実装するときは8割以上がReactです。" +
                "また、複雑なバリデーションをフォームアプリのフロント・バックエンド設計などの開発経験があります。CSSはbootstrapやtailwind cssなどがメインですが最近はlinariaを使った案件にも関わっています。",
              url: "",
            },
            {
              title: "Next.js",
              desc:
                "SEO対策などの理由でSSRを用いる必要のある案件を中心に採用しています。" +
                "当サイトもNext.jsで構築されています。",
              url: "",
            },
            {
              title: "Next.js",
              desc:
                "SEO対策などの理由でSSRを用いる必要のある案件を中心に採用しています。" +
                "当サイトもNext.jsで構築されています。また、SPAで実装されたReactアプリをNext.js実装に移行した経験もあります。",
              url: "",
            },
            {
              title: "テンプレートエンジン",
              desc:
                "FastAPIやLaravelなどを使った案件ではReactのみならずテンプレートエンジンを使ったWebアプリの開発も得意としています。" +
                "テンプレートエンジン+JSを基本とした動的な表現や部分的にReactを使うなど要件に応じて様々な技術に対応することができます。",
              url: "",
            },
          ]}
        ></SkillCards>
        <p className={styles.description}>
          フロントエンド開発の案件を承っております。お気軽に
          <a href="/contact">お問い合わせ</a>ください。
        </p>
      </main>

      <footer className={styles.footer}>
        Authored by notch_man, Powered by Next.js
      </footer>
    </div>
  );
}
