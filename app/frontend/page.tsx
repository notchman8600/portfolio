import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";
import { SkillCards } from "@/components/SkillCards";
import { createPageMetadata } from "@/data/seo";
import styles from "@/styles/Home.module.css";

export const metadata: Metadata = createPageMetadata("/frontend");

export default function FrontendPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: "https://www.notchman.tech" },
          {
            name: "フロントエンド開発",
            url: "https://www.notchman.tech/frontend",
          },
        ]}
      />
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
          <Link href="/contact">お問い合わせ</Link>ください。
        </p>
      </main>
    </>
  );
}
