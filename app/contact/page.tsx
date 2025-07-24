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
        <h1 className={styles.title}>お問い合わせ先</h1>
        <p className={styles.description}>
          案件のご依頼等のお問い合わせはTwitterまたはFacebookからお願いします。
        </p>
        <Link
          href={"https://twitter.com/notchman8600"}
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitterはこちらから
        </Link>
        <Link
          href={"https://www.facebook.com/nct15317"}
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebookはこちらから
        </Link>
      </main>

      <footer className={styles.footer}>
        Authored by notch_man, Powered by Next.js
      </footer>
    </div>
  );
}
