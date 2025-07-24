import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";
import { Header } from "@/containers/Header";
import { SkillCards } from "@/containers/SkillCards";
import { Footer } from "@/components/Footer";
import styles from "@/styles/Home.module.css";

export const metadata: Metadata = {
  title: "バックエンド開発 | のっちまん(notch_man)のポートフォリオ",
  description:
    "のっちまんのバックエンド開発スキル。Go, Python, PHP, Rubyを使ったAPIサーバーやWebサービスの開発・運用実績が豊富です。案件のご依頼を承っております。",
  openGraph: {
    title: "バックエンド開発 | のっちまん(notch_man)のポートフォリオ",
    description:
      "のっちまんのバックエンド開発スキル。Go, Python, PHP, Rubyを使ったAPIサーバーやWebサービスの開発・運用実績が豊富です。案件のご依頼を承っております。",
    images: [
      {
        url: "https://notchman.tech/profile.jpg",
        width: 1200,
        height: 630,
        alt: "のっちまんのバックエンド開発",
      },
    ],
    type: "website",
    url: "https://notchman.tech/backend",
  },
};

export default function BackendPage() {
  return (
    <div className={styles.container}>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: "https://notchman.tech" },
          { name: "バックエンド開発", url: "https://notchman.tech/backend" },
        ]}
      />
      <Header />
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
                "expressやNestJSを使ったAPIサーバーの構築を得意としています。",
              url: "",
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
          <a href="/contact">お問い合わせ</a>ください。
        </p>
      </main>

      <Footer />
    </div>
  );
}
