import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/containers/Header";
import { SkillCards } from "@/containers/SkillCards";
import styles from "../../styles/Home.module.css";

export const metadata: Metadata = {
  title:
    "インフラ構築・運用・AWS移行 | のっちまん(notch_man) | クラウド・コンテナ・サーバーレス",
  description:
    "Docker、Kubernetes、AWSを活用したインフラ構築・運用・クラウド移行をサポート。オンプレからAWSへの移行、CI/CDパイプラインの構築、サーバーレスアーキテクチャ、高負荷環境の運用まで幅広く対応します。開発案件としてお気軽にお問い合わせください。",
  keywords: [
    "インフラ構築",
    "インフラ運用",
    "AWS",
    "AWS移行",
    "クラウド移行",
    "Docker",
    "Kubernetes",
    "サーバーレス",
    "Lambda",
    "EC2",
    "ECS",
    "CI/CD",
    "Infrastructure as Code",
    "Terraform",
    "開発案件",
  ],
  openGraph: {
    title:
      "インフラ構築・運用・AWS移行 | のっちまん(notch_man) | クラウド・コンテナ・サーバーレス",
    description:
      "Docker、Kubernetes、AWSを活用したインフラ構築・運用をサポート。CI/CDパイプラインの構築から、高負荷環境の運用まで幅広く対応します。",
  },
  alternates: {
    canonical: "/infra",
  },
};

export default function Infra() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>インフラ構築・運用</h1>
        <p className={styles.description}>
          スケーラブルで信頼性の高いインフラストラクチャを構築します
        </p>

        <h2 className={styles.subtitle}>コンテナ・オーケストレーション</h2>
        <SkillCards
          props={[
            {
              title: "Docker / コンテナ化",
              desc:
                "アプリケーションのコンテナ化により、開発環境と本番環境の差異を解消。" +
                "マルチステージビルドを活用した軽量なイメージの作成や、" +
                "セキュリティを考慮したベストプラクティスに基づく構築を行います。",
            },
            {
              title: "Kubernetes運用",
              desc:
                "Kubernetesを使用したコンテナオーケストレーション環境の構築・運用。" +
                "マニフェスト管理、オートスケーリング設定、ローリングアップデートなど、" +
                "本番環境での安定運用をサポートします。",
            },
            {
              title: "マイクロサービス基盤",
              desc:
                "サービスメッシュ、API Gateway、サービスディスカバリーなど、" +
                "マイクロサービスアーキテクチャに必要な基盤を構築。" +
                "可観測性の確保により、複雑なシステムの運用を支援します。",
            },
          ]}
        />

        <h2 className={styles.subtitle}>クラウドインフラ（AWS）</h2>
        <SkillCards
          props={[
            {
              title: "AWS設計・構築",
              desc:
                "EC2、ECS、Lambda、RDSなど、AWSサービスを活用した" +
                "インフラストラクチャの設計・構築。コスト最適化を考慮しながら、" +
                "ビジネス要件に応じた最適な構成を提案します。",
            },
            {
              title: "サーバーレスアーキテクチャ",
              desc:
                "Lambda、API Gateway、DynamoDBなどを活用した" +
                "サーバーレスアプリケーションの構築。運用負荷を最小限に抑えながら、" +
                "スケーラブルなシステムを実現します。",
            },
            {
              title: "Infrastructure as Code",
              desc:
                "Terraform、AWS CDKを使用したインフラの自動化。" +
                "コードによるインフラ管理により、再現性と保守性の高い" +
                "インフラストラクチャを実現します。",
            },
          ]}
        />

        <h2 className={styles.subtitle}>CI/CD・自動化</h2>
        <SkillCards
          props={[
            {
              title: "CI/CDパイプライン構築",
              desc:
                "GitHub Actions、GitLab CI、CircleCIなどを使用した" +
                "継続的インテグレーション・デリバリーの環境構築。" +
                "テスト自動化、ビルド、デプロイまでの一連の流れを自動化します。",
            },
            {
              title: "監視・ログ基盤",
              desc:
                "NewRelic、Datadog、CloudWatchなどを活用した監視体制の構築。" +
                "メトリクス収集、アラート設定、ログ分析により、" +
                "問題の早期発見と迅速な対応を実現します。",
            },
            {
              title: "パフォーマンス最適化",
              desc:
                "負荷テスト、ボトルネック分析、チューニングにより" +
                "システムパフォーマンスを最適化。1000人規模の同時アクセスや" +
                "150人の瞬間稼働に耐える環境の構築・運用経験があります。",
            },
          ]}
        />

        <h2 className={styles.subtitle}>実績</h2>
        <SkillCards
          props={[
            {
              title: "高負荷環境の構築・運用",
              desc:
                "1000人規模のサーバーかつ150人が瞬間稼働するインフラを運営。" +
                "オートスケーリング、負荷分散、キャッシュ戦略により、" +
                "安定したサービス提供を実現しました。",
            },
            {
              title: "冗長構成での本番環境運用",
              desc:
                "複数台のアプリケーションサーバーを使った冗長構成で" +
                "高可用性を実現。障害時の自動フェイルオーバーにより、" +
                "サービスの継続性を確保しています。",
            },
          ]}
        />

        <p className={styles.description}>
          インフラ構築・運用のご相談は
          <a href="/contact">お問い合わせ</a>ください。
        </p>
      </main>

      <Footer />
    </div>
  );
}
