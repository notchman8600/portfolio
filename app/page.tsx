import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Profile } from "@/components/Profile";
import { ProfileDetail } from "@/components/ProfileDetail";
import { Header } from "@/containers/Header";
import { SkillCardsWithLink } from "@/containers/SkillCards";
import styles from "../styles/Home.module.css";

export const metadata: Metadata = {
  title: "のっちまん(notch_man)のポートフォリオ | フルスタックエンジニア",
  description:
    "のっちまん(三宅健太郎)のポートフォリオサイト。フロントエンド・バックエンド・インフラまで幅広く対応可能なフルスタックエンジニアです。案件のご依頼を承っております。React, Next.js, Go, Python, AWS等の技術スタックで開発支援いたします。",
  openGraph: {
    title: "のっちまん(notch_man)のポートフォリオ | フルスタックエンジニア",
    description:
      "のっちまん(三宅健太郎)のポートフォリオサイト。フロントエンド・バックエンド・インフラまで幅広く対応可能なフルスタックエンジニアです。案件のご依頼を承っております。React, Next.js, Go, Python, AWS等の技術スタックで開発支援いたします。",
    images: [
      {
        url: "https://notchman.tech/profile.jpg",
        width: 1200,
        height: 630,
        alt: "のっちまん(notch_man)のプロフィール画像",
      },
    ],
    type: "website",
    url: "https://notchman.tech/",
    siteName: "のっちまんのポートフォリオ",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: "のっちまん(notch_man)のポートフォリオ | フルスタックエンジニア",
    description:
      "のっちまん(三宅健太郎)のポートフォリオサイト。フロントエンド・バックエンド・インフラまで幅広く対応可能なフルスタックエンジニアです。",
    images: ["https://notchman.tech/profile.jpg"],
  },
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to{" "}
          <a
            href="https://twitter.com/notch_man8600"
            target={"_blank"}
            rel={"noopener noreferrer"}
          >
            notch_man&apos;s
          </a>{" "}
          official Page
        </h1>

        <p className={styles.description}>自己紹介</p>
        <Profile
          jaName={"三宅　健太郎 (のっちまん)"}
          enName={"Kentaro Miyake (notch_man)"}
        />
        <ProfileDetail />
        <p className={styles.description}>
          現在、新規案件を募集中です！お気軽にお問い合わせください。
        </p>
        <h2 className={styles.skillsTitle}>提供できるサービス・スキル</h2>
        <SkillCardsWithLink
          props={[
            {
              title: "Web開発",
              desc:
                "フロントエンドからバックエンドまで一貫したWebサービス開発が可能です。" +
                "React, Next.js, Vue.jsなどのモダンフロントエンドから、Go, Python, PHP, Ruby on Rails, Laravelなどを使用したAPIサーバー開発まで幅広く対応。" +
                "マイクロサービス構成での開発・運用経験もあります。",
              url: "/webdev",
            },
            {
              title: "レガシー改善・システム設計",
              desc:
                "レガシーコードリファクタリング業として、既存システムの改善に取り組んでいます。" +
                "これまでRailsバージョンアップやPHPのバージョンアップに関わる作業に従事した経験があり、" +
                "ソフトウェアアーキテクチャの観点から技術的負債の解消をサポートします。",
              url: "/legacy",
            },
            {
              title: "技術コンサル・スクラム導入支援",
              desc:
                "認定スクラムマスター(CSM)として、開発チームへのスクラム導入を支援。" +
                "アジャイル開発の実践と組織への定着をサポートします。" +
                "開発プロセスの改善から技術選定まで、幅広くコンサルティングを提供します。",
              url: "/consulting",
            },
            {
              title: "技術研修・メンター",
              desc:
                "大学でのenPiTメンターとして、PBL形式でのアジャイル開発教育に関わってきました。" +
                "企業向けの技術研修資料作成や、若手エンジニアの育成支援も行えます。" +
                "実践的な開発スキルの習得をサポートします。",
              url: "/training",
            },
            {
              title: "インフラ構築・運用",
              desc:
                "レガシーシステムやオンプレシステムAWSなどのクラウドサービスのリフトアップ作業などの実績があります。" +
                "主にAWSを用いており、EC2などをはじめとした従来の形に近いインフラ構成からAWS Lambdaなどをベースにしたサーバーレス構成まで要件などに基づいて最適な構成を提案いたします。",
              url: "/infra",
            },
          ]}
        ></SkillCardsWithLink>
      </main>

      <Footer />
    </div>
  );
}
