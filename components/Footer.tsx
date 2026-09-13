import Link from "next/link";
import styles from "../styles/Home.module.css";

export const Footer = () => {
  const links = [
    { name: "サービス一覧", path: "/#services" },
    { name: "経歴", path: "/career" },
    { name: "作品一覧", path: "/works" },
    { name: "お問い合わせ", path: "/contact" },
  ];

  return (
    <footer className={styles.footer}>
      <nav className={styles.footerLinks} aria-label="フッターメニュー">
        <ul className={styles.footerList}>
          {links.map((link) => (
            <li key={link.path}>
              <Link href={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className={styles.footerInfo}>
        <p>のっちまん(notch_man) - 全方位型エンジニア / 機械学習エンジニア</p>
        <p>Authored by notch_man, Powered by Next.js</p>
      </div>
    </footer>
  );
};
