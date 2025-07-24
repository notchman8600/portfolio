import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/containers/Header";
import styles from "@/styles/Home.module.css";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>404 - ページが見つかりません</h1>
        <p className={styles.description}>
          お探しのページは存在しないか、移動した可能性があります。
        </p>
        <p className={styles.description}>
          <Link
            href="/"
            style={{ color: "#0070f3", textDecoration: "underline" }}
          >
            ホームページに戻る
          </Link>
        </p>
      </main>
      <Footer />
    </div>
  );
}
