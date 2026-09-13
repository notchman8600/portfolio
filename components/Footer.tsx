import Link from "next/link";
import styles from "../styles/Home.module.css";

export const Footer = () => {
  const services = [
    { name: "Web開発", path: "/webdev" },
    { name: "フロントエンド開発", path: "/frontend" },
    { name: "バックエンド開発", path: "/backend" },
    { name: "生成AI・LLM開発", path: "/ai" },
    { name: "技術コンサル", path: "/consulting" },
    { name: "技術研修", path: "/training" },
    { name: "レガシー改善", path: "/legacy" },
    { name: "インフラ構築", path: "/infra" },
    { name: "経歴", path: "/career" },
    { name: "作品一覧", path: "/works" },
    { name: "お問い合わせ", path: "/contact" },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.footerLinks}>
        <h3>サービス・案件のご依頼</h3>
        <ul className={styles.footerList}>
          {services.map((service) => (
            <li key={service.path}>
              <Link href={service.path}>{service.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.footerInfo}>
        <p>のっちまん(notch_man) - 全方位型エンジニア / 機械学習エンジニア</p>
        <p>開発案件・生成AI活用・技術コンサル・研修のご依頼を承っております</p>
        <p>Authored by notch_man, Powered by Next.js</p>
      </div>
    </footer>
  );
};
