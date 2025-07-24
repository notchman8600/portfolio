import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/containers/Header";
import { SkillCards } from "@/containers/SkillCards";
import styles from "../../styles/Home.module.css";

export const metadata: Metadata = {
  title:
    "レガシー改善・システム設計・リファクタリング | のっちまん(notch_man) | 技術的負債解消・モダナイゼーション",
  description:
    "レガシーコードリファクタリング業（見習い）として、既存システムの改善・リファクタリングに取り組んでいます。Rails・Laravelのバージョンアップ、技術的負債の解消、マイクロサービス移行、モダンなアーキテクチャへの移行まで幅広くサポートします。開発案件としてお気軽にお問い合わせください。",
  keywords: [
    "レガシー改善",
    "システム設計",
    "リファクタリング",
    "技術的負債",
    "モダナイゼーション",
    "Railsバージョンアップ",
    "Laravelバージョンアップ",
    "PHPバージョンアップ",
    "マイクロサービス移行",
    "パフォーマンス改善",
    "CI/CD",
    "開発案件",
  ],
  openGraph: {
    title:
      "レガシー改善・システム設計・リファクタリング | のっちまん(notch_man) | 技術的負債解消・モダナイゼーション",
    description:
      "レガシーコードリファクタリング業（見習い）として、既存システムの改善に取り組んでいます。技術的負債の解消から、モダンなアーキテクチャへの移行まで幅広くサポートします。",
  },
  alternates: {
    canonical: "/legacy",
  },
};

export default function Legacy() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>レガシー改善・システム設計</h1>
        <p className={styles.description}>
          技術的負債の解消とモダンなシステムへの移行をサポートします
        </p>

        <h2 className={styles.subtitle}>レガシーコード改善</h2>
        <SkillCards
          props={[
            {
              title: "フレームワークバージョンアップ",
              desc:
                "Rails、Laravelなどのフレームワークのバージョンアップを計画的に実施。" +
                "依存関係の解決、非推奨機能の置き換え、テストカバレッジの向上を通じて、" +
                "安全かつ確実なアップグレードを実現します。",
            },
            {
              title: "コードリファクタリング",
              desc:
                "可読性・保守性の低いコードを段階的に改善。" +
                "設計パターンの適用、責務の分離、重複コードの除去により、" +
                "開発効率の向上と不具合リスクの低減を実現します。",
            },
            {
              title: "パフォーマンス改善",
              desc:
                "ボトルネックの特定から改善まで一貫してサポート。" +
                "データベースクエリの最適化、キャッシュ戦略の導入、" +
                "非同期処理の活用により、システムの応答性を向上させます。",
            },
          ]}
        />

        <h2 className={styles.subtitle}>システムアーキテクチャ設計</h2>
        <SkillCards
          props={[
            {
              title: "マイクロサービス移行",
              desc:
                "モノリシックなアプリケーションから段階的なマイクロサービス化を支援。" +
                "サービス境界の設計、API設計、データ分離戦略の策定により、" +
                "スケーラブルで保守しやすいシステムを実現します。",
            },
            {
              title: "技術選定・アーキテクチャ設計",
              desc:
                "ビジネス要件に応じた最適な技術スタックの選定を支援。" +
                "将来の拡張性を考慮したアーキテクチャ設計により、" +
                "持続可能なシステム開発を実現します。",
            },
            {
              title: "CI/CDパイプライン構築",
              desc:
                "自動テスト、自動デプロイの仕組みを導入。" +
                "GitHub Actions、AWS CodePipelineなどを活用し、" +
                "開発生産性の向上とデプロイの安全性を両立します。",
            },
          ]}
        />

        <h2 className={styles.subtitle}>実績</h2>
        <SkillCards
          props={[
            {
              title: "Railsアップグレードプロジェクト",
              desc:
                "古いRailsのシステムのバージョンアッププロジェクトに従事。" +
                "10年以上の負債がたまっている大規模なコードベースでも計画的な移行により、ダウンタイムを最小にしつつで移行を完了した実績があります。" +
                "他にも大規模システムのレガシーライブラリのバージョンアップなど、リファクタリングのゴール設定から戦略構築、技術支援から実装まで幅広く行えます。",
            },
            {
              title: "レガシーPHPシステムの改善",
              desc:
                "古いPHPシステムをLaravelベースのモダンな構成へ移行。" +
                "段階的なリファクタリングにより、サービスを継続しながら改善を実施。" +
                "テストカバレッジの向上により、品質も大幅に改善。",
            },
          ]}
        />

        <p className={styles.description}>
          レガシーシステムの改善・モダナイゼーションのご相談は
          <a href="/contact">お問い合わせ</a>ください。
        </p>
      </main>

      <Footer />
    </div>
  );
}
