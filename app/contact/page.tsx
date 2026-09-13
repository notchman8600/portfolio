import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";
import { StaticImage } from "@/components/StaticImage";
import { createPageMetadata, siteUrl } from "@/data/seo";
import styles from "@/styles/Home.module.css";

export const metadata: Metadata = createPageMetadata("/contact");

export default function ContactPage() {
  return (
    <main className={styles.main}>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteUrl() },
          { name: "お問い合わせ", url: siteUrl("/contact") },
        ]}
      />
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
□ 生成AI・LLM応用開発
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
          <svg
            className={styles.contactIcon}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            focusable="false"
          >
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="m3 7 9 6 9-6" />
          </svg>
          <span>メールで問い合わせる</span>
        </Link>

        <Link
          href={"https://x.com/notch_man8600"}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.contactLink}
        >
          <StaticImage
            className={styles.contactIcon}
            src="/assets/icons/x.png"
            alt=""
            width={24}
            height={24}
          />
          <span>Xで問い合わせる</span>
        </Link>

        <Link
          href={"https://www.facebook.com/nct15317"}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.contactLink}
        >
          <StaticImage
            className={styles.contactIcon}
            src="/assets/icons/facebook.png"
            alt=""
            width={24}
            height={24}
          />
          <span>Facebookで問い合わせる</span>
        </Link>
      </div>
    </main>
  );
}
