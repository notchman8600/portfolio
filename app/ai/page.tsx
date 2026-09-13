import type { Metadata } from "next";
import Link from "next/link";
import {
  createBreadcrumbJsonLd,
  createServiceJsonLd,
} from "@/components/jsonLd";
import { SkillCards } from "@/components/SkillCards";
import { StructuredData } from "@/components/StructuredData";
import { createPageMetadata } from "@/data/seo";
import styles from "../../styles/Home.module.css";

export const metadata: Metadata = createPageMetadata("/ai");

export default function AiDev() {
  const serviceJsonLd = createServiceJsonLd({
    name: "生成AI・LLM応用開発",
    description:
      "LLMを活用した業務支援ツール、社内チャットボット、議事録作成支援の開発。LangChainによるワークフロー設計、VLMを用いたマルチモーダル処理にも対応します。",
    provider: "のっちまん (三宅 健太郎)",
    url: "https://www.notchman.tech/ai",
    serviceType: "SoftwareDevelopmentService",
  });

  const breadcrumbJsonLd = createBreadcrumbJsonLd([
    { name: "Home", url: "https://www.notchman.tech" },
    { name: "生成AI・LLM応用開発", url: "https://www.notchman.tech/ai" },
  ]);

  return (
    <>
      <StructuredData id="service-jsonld" data={serviceJsonLd} />
      <StructuredData id="breadcrumb-jsonld" data={breadcrumbJsonLd} />
      <main className={styles.main}>
        <h1 className={styles.title}>生成AI・LLM応用開発</h1>
        <p className={styles.description}>
          生成AIを「使ってみる」で終わらせず、業務に組み込んで運用できる形にします
        </p>
        <h2 className={styles.subtitle}>LLMを活用した業務支援プロダクト</h2>
        <SkillCards
          props={[
            {
              title: "社内チャットボット",
              desc:
                "社内ドキュメントやナレッジを参照して回答するチャットボットの開発経験があります。" +
                "RAG構成の設計、権限管理、既存の社内システムとの連携まで含めて実装します。",
            },
            {
              title: "会議効率化・議事録作成支援",
              desc:
                "音声認識とLLMを組み合わせた議事録作成支援や、会議の論点整理を支援するツールを開発してきました。" +
                "2021年度未踏事業でも会議効率化支援ツールを開発しており、この領域に継続して取り組んでいます。",
            },
            {
              title: "LangChainによるワークフロー設計",
              desc:
                "LangChainを利用したエージェント的なワークフロー設計やツール連携に取り組んでいます。" +
                "プロンプトの管理、評価、フォールバックなど、運用を見据えた設計を重視します。",
            },
          ]}
        />
        <h2 className={styles.subtitle}>
          マルチモーダル・ロボティクス・機械学習
        </h2>
        <SkillCards
          props={[
            {
              title: "VLMを用いたロボット制御",
              desc: "VLM（Vision Language Model）を利用したロボット制御や、画像・音声などマルチモーダルな入力を扱う知能システムの実装経験があります。",
            },
            {
              title: "強化学習・ネットワーク分析",
              desc:
                "研究ではマルチエージェント強化学習を用いたソーシャルネットワークの将来予測に取り組み、WWW'24でフルペーパーを発表しました。" +
                "理論を理解したうえで実装・検証まで進められます。",
            },
            {
              title: "周辺システムの設計・運用",
              desc:
                "LLM APIの呼び出しだけでなく、認証、ログ、コスト管理、監視といった周辺システムを含めて設計します。" +
                "Webアプリケーション開発とインフラの経験を活かし、PoCから本番運用まで一貫して対応します。",
            },
          ]}
        />
        <h2 className={styles.subtitle}>実績</h2>
        <SkillCards
          props={[
            {
              title: "大手商社グループでのLLM業務支援ツール開発",
              desc: "2024年6月から2026年3月まで、社内チャットボットや会議効率化・議事録作成支援ツールの開発を担当しました。",
            },
            {
              title: "機械学習エンジニアとしての実務",
              desc: "2026年4月よりLINEヤフー株式会社にて機械学習エンジニアとして勤務し、生成AI・LLMを活用したシステムの設計・実装に取り組んでいます。",
            },
          ]}
        />
        <p className={styles.description}>
          生成AI・LLM応用開発の案件を承っております。お気軽に
          <Link href="/contact">お問い合わせ</Link>ください。
        </p>
      </main>
    </>
  );
}
