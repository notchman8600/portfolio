import type { Metadata } from "next";
import Link from "next/link";
import { CareerTimeline } from "@/components/CareerTimeline";
import { Profile } from "@/components/Profile";
import { ProfileDetail } from "@/components/ProfileDetail";
import { SkillCardsWithLink } from "@/components/SkillCards";
import { careers } from "@/data/resume";
import { createPageMetadata } from "@/data/seo";
import styles from "../styles/Home.module.css";

export const metadata: Metadata = createPageMetadata("/");

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>のっちまん（三宅健太郎）</h1>
      <p className={styles.description}>
        Web開発・生成AI・技術コンサルを手がける全方位型エンジニア
      </p>

      <p className={styles.description}>
        現在、新規案件を募集中です！お気軽に
        <Link href="/contact">お問い合わせください</Link>。
      </p>
      <h2 className={styles.description}>自己紹介</h2>
      <Profile
        jaName={"三宅　健太郎 (のっちまん)"}
        enName={"Kentaro Miyake (notch_man)"}
      />
      <ProfileDetail />
      <h2 className={styles.skillsTitle}>最近の経歴</h2>
      <CareerTimeline entries={careers.filter((c) => c.current)} />
      <p className={styles.description}>
        過去の所属や研究・登壇実績は<Link href="/career">経歴ページ</Link>
        をご覧ください。
      </p>
      <h2 className={styles.skillsTitle}>提供できるサービス・スキル</h2>
      <SkillCardsWithLink
        props={[
          {
            title: "Web開発",
            desc:
              "フロントエンドからバックエンドまで一貫したWebサービス開発が可能です。" +
              "React, Next.js, Nuxt.jsなどのモダンフロントエンドから、Go, TypeScript(Hono/Express), Python(FastAPI), Kotlin, PHP, Ruby on Rails, Laravelなどを使用したAPIサーバー開発まで幅広く対応。" +
              "マイクロサービス構成での開発・運用経験もあります。",
            url: "/webdev",
          },
          {
            title: "生成AI・LLM応用開発",
            desc:
              "LLMを活用した社内チャットボットや会議効率化・議事録作成支援ツールの開発経験があります。" +
              "LangChainを用いたエージェント的なワークフロー設計、VLMを用いたロボット制御・マルチモーダル処理にも対応。" +
              "API利用に留まらず、周辺システム設計や運用を見据えた形で組み込みます。",
            url: "/ai",
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
              "大学でのenPiTメンターとして、4年間PBL形式でのアジャイル開発教育に関わってきました。" +
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
  );
}
