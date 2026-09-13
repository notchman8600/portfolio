import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";
import { SkillCards } from "@/components/SkillCards";
import { createPageMetadata } from "@/data/seo";
import styles from "@/styles/Home.module.css";

export const metadata: Metadata = createPageMetadata("/backend");

export default function BackendPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: "https://www.notchman.tech" },
          {
            name: "バックエンド開発",
            url: "https://www.notchman.tech/backend",
          },
        ]}
      />
      <main className={styles.main}>
        <h1 className={styles.title}>バックエンドのスキル</h1>

        <h2 className={styles.subtitle}>主な技術スタック</h2>
        <SkillCards
          props={[
            {
              title: "Python",
              desc:
                "FastAPIやFlaskを使ったWebサービスの開発・運用経験があります。" +
                "これまで研究用途向けマイクロタスク型クラウドソーシングプラットフォームの開発などを行なってきました。" +
                "関連技術としてJinja2を使ったテンプレートエンジンによるページの作成やReactなどのJSアプリとの連携などの知見もあります。",
              url: "",
            },
            {
              title: "Go",
              desc:
                "様々な案件でのAPI作成で採用経験があります。" +
                "極力標準ライブラリのみを利用するシンプルな設計を得意とし、息の長いバックエンド開発を得意とします。" +
                "gorillaやchiをベースとしたAPI作成の経験もあります。ハッカソンのバックエンドは9割以上がGoで実装されています。",
              url: "",
            },
            {
              title: "PHP",
              desc:
                "これまでインターンや案件でLaravelやPHP（独自FW）+Smartyなどの環境で開発経験があります。" +
                "主な実績としてSmartyのバージョンアップ、PHP本体のバージョンアッププロジェクトへの参加、各種レガシーコードのリファクタリングなどの経験があります。",
              url: "",
            },
            {
              title: "TypeScript",
              desc:
                "主にフロントエンド開発で利用していますが、バックエンドでも独自の認証基盤サーバーの実装などで採用した経験があります。" +
                "Express、Hono、NestJSを使ったAPIサーバーの構築を得意としています。",
              url: "",
            },
            {
              title: "Java / Kotlin",
              desc:
                "株式会社ユーザーベースにてNewsPicksのトピックス機能の改善やレガシーコード改善をJava / Kotlinで担当しました。" +
                "Spring Bootを用いたAPI開発の経験があります。",
            },
            {
              title: "Ruby",
              desc: "Rails(5・7）を用いたWebサービスを複数開発してきた経験があります。具体的な案件についてはお話できませんが、それなりのユーザー規模の案件での開発・運用実績があります。",
              url: "",
            },
          ]}
        ></SkillCards>
        <p className={styles.description}>
          バックエンド開発の案件を承っております。お気軽に
          <Link href="/contact">お問い合わせ</Link>ください。
        </p>
      </main>
    </>
  );
}
