import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/containers/Header";
import styles from "@/styles/Home.module.css";

export const metadata: Metadata = {
  title: "お問い合わせ | のっちまん(notch_man)のポートフォリオ",
  description:
    "のっちまんへの案件のご依頼・お問い合わせはこちらから。フロントエンド・バックエンド・インフラまで幅広く対応可能です。",
  openGraph: {
    title: "お問い合わせ | のっちまん(notch_man)のポートフォリオ",
    description:
      "のっちまんへの案件のご依頼・お問い合わせはこちらから。フロントエンド・バックエンド・インフラまで幅広く対応可能です。",
    images: [
      {
        url: "https://notchman.tech/profile.jpg",
        width: 1200,
        height: 630,
        alt: "のっちまんへのお問い合わせ",
      },
    ],
    type: "website",
    url: "https://notchman.tech/contact",
  },
};

export default function ContactPage() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>お問い合わせ</h1>

        <h2 className={styles.subtitle}>お問い合わせ方法</h2>
        <p className={styles.description}>
          案件のご依頼等のお問い合わせは以下の方法でお願いします。
        </p>

        <div className={styles.contactLinks}>
          <Link
            href={`mailto:miyake.kentaro0815@mokkuriko.com?subject=${encodeURIComponent("【お問い合わせ】案件のご相談")}&body=${encodeURIComponent(`お世話になっております。

貴サイトを拝見し、ご連絡させていただきました。

【お名前】


【会社名・組織名】


【ご相談内容】
□ Web開発（フロントエンド・バックエンド）
□ レガシー改善・システム設計
□ 技術コンサルティング・スクラム導入支援
□ 技術研修・メンター
□ インフラ構築・運用
□ その他

【プロジェクトの概要】


【希望納期・期間】


【ご予算】


【その他ご要望・ご質問】


どうぞよろしくお願いいたします。`)}`}
            className={styles.contactLink}
          >
            📧 メールで問い合わせる
          </Link>

          <Link
            href={"https://twitter.com/notch_man8600"}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactLink}
          >
            🐦 Twitterで問い合わせる
          </Link>

          <Link
            href={"https://www.facebook.com/nct15317"}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactLink}
          >
            📘 Facebookで問い合わせる
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        Authored by notch_man, Powered by Next.js
      </footer>
    </div>
  );
}
