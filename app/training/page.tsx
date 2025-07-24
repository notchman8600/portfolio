import type { Metadata } from "next";
import Script from "next/script";
import { Header } from "@/containers/Header";
import { SkillCards } from "@/containers/SkillCards";
import { Footer } from "@/components/Footer";
import { createServiceJsonLd, createBreadcrumbJsonLd } from "@/components/jsonLd";
import styles from "../../styles/Home.module.css";

export const metadata: Metadata = {
  title: "技術研修・メンター・企業研修 | のっちまん(notch_man) | 新人研修・スキルアップ研修承ります",
  description:
    "大学でのenPiTメンターとして、PBL形式でのアジャイル開発教育を実施。企業向けの技術研修（新人研修・Git/GitHub研修・Docker研修・アジャイル開発研修）や若手エンジニアの育成支援を承っております。実践的なカリキュラムで即戦力を育成します。お気軽にお問い合わせください。",
  keywords: [
    "技術研修",
    "企業研修",
    "新人研修",
    "エンジニア研修",
    "Git研修",
    "GitHub研修",
    "Docker研修",
    "アジャイル研修",
    "スクラム研修",
    "技術メンター",
    "エンジニア育成",
    "PBL教育",
    "enPiT",
  ],
  openGraph: {
    title: "技術研修・メンター・企業研修 | のっちまん(notch_man) | 新人研修・スキルアップ研修承ります",
    description:
      "大学でのenPiTメンターとして、PBL形式でのアジャイル開発教育を実施。企業向けの技術研修や若手エンジニアの育成支援を承っております。",
  },
  alternates: {
    canonical: "/training",
  },
};

export default function Training() {
  const serviceJsonLd = createServiceJsonLd({
    name: "技術研修・メンター・企業研修",
    description:
      "大学でのenPiTメンター経験を活かし、実践的な技術研修を提供。Git/GitHub研修、Docker研修、アジャイル開発研修など、企業のニーズに応じたカスタマイズ研修を実施します。",
    provider: "のっちまん (三宅 健太郎)",
    url: "https://notchman.tech/training",
    serviceType: "EducationalService",
  });

  const breadcrumbJsonLd = createBreadcrumbJsonLd([
    { name: "Home", url: "https://notchman.tech" },
    { name: "技術研修・メンター", url: "https://notchman.tech/training" },
  ]);

  return (
    <div className={styles.container}>
      <Script
        id="service-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceJsonLd),
        }}
        strategy="afterInteractive"
      />
      <Script
        id="breadcrumb-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
        strategy="afterInteractive"
      />
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>技術研修・メンター</h1>
        <p className={styles.description}>
          実践的な開発スキルの習得と若手エンジニアの成長をサポートします
        </p>

        <h2 className={styles.subtitle}>教育・メンタリング</h2>
        <SkillCards
          props={[
            {
              title: "PBL型アジャイル開発教育",
              desc:
                "筑波大学enPiTプログラムでメンターとして活動。" +
                "実際のプロダクト開発を通じて、アジャイル開発の実践的なスキルを指導。" +
                "学生がチームで協働し、価値を生み出す経験をサポートしています。",
            },
            {
              title: "若手エンジニア育成",
              desc:
                "新卒・若手エンジニアの技術力向上を支援。" +
                "コードレビュー、ペアプログラミング、技術的な相談対応を通じて、" +
                "自律的に学習・成長できるエンジニアの育成をサポートします。",
            },
            {
              title: "技術メンタリング",
              desc:
                "1on1でのキャリア相談、技術的な課題解決のサポート。" +
                "個々のレベルや目標に応じたカスタマイズされた指導により、" +
                "効果的なスキルアップを実現します。",
            },
          ]}
        />

        <h2 className={styles.subtitle}>企業研修</h2>
        <SkillCards
          props={[
            {
              title: "技術研修資料作成",
              desc:
                "企業のニーズに応じたカスタマイズ研修資料の作成。" +
                "実践的な演習を交えた研修プログラムの設計により、" +
                "即戦力となるスキルの習得を支援します。",
            },
            {
              title: "ハンズオン研修",
              desc:
                "Git/GitHub、Docker、CI/CD、アジャイル開発など、" +
                "実際に手を動かしながら学ぶ実践的な研修を提供。" +
                "現場ですぐに活用できるスキルの習得を目指します。",
            },
            {
              title: "チーム開発研修",
              desc:
                "スクラムを用いたチーム開発の実践研修。" +
                "コミュニケーション、コラボレーション、プロセス改善など、" +
                "チームで働くために必要なスキルを総合的に学習します。",
            },
          ]}
        />

        <h2 className={styles.subtitle}>実績・経験</h2>
        <SkillCards
          props={[
            {
              title: "enPiTメンター（2022年〜）",
              desc:
                "筑波大学でPBL形式のアジャイル開発教育のメンターを担当。" +
                "累計50名以上の学生の成長をサポート。" +
                "チーム開発の楽しさと難しさを体験的に学ぶ機会を提供しています。",
            },
            {
              title: "企業向け技術研修",
              desc:
                "複数の企業で新人研修、スキルアップ研修を実施。" +
                "Git/GitHub研修、Docker研修、アジャイル開発研修など、" +
                "実践的なカリキュラムで高い満足度を獲得しています。",
            },
            {
              title: "登壇・発表実績",
              desc:
                "アジャイルPBL祭り、Scrum Fest Sendaiなどで登壇。" +
                "実践から得られた知見を共有し、コミュニティに貢献。" +
                "教育とアジャイル開発の架け橋となる活動を行っています。",
            },
          ]}
        />

        <p className={styles.description}>
          技術研修・メンタリングのご相談は
          <a href="/contact">お問い合わせ</a>ください。
        </p>
      </main>

      <Footer />
    </div>
  );
}
