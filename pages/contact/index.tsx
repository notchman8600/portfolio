import type {NextPage} from "next";
import styles from "../../styles/Home.module.css";
import Ogp from "../../components/Ogp";
import {Header} from "@/containers/Header";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Ogp
        pageTitle={"notch_manのぽーとふぉりお"}
        pageDescription={"このサイトはnotch_man君の個人サイトです"}
        pageImg={""}
        pageWidth={1280}
        pageHeight={960}
      />
      <Header/>
      <main className={styles.main}>
        <h1 className={styles.title}>
         お問い合わせ先
        </h1>
        <p className={styles.description}>案件のご依頼等のお問い合わせはTwitterまたはFacebookからお願いします。</p>
        <Link href={"https://twitter.com/notchman8600"}>Twitterはこちらから</Link>
        <Link href={"https://www.facebook.com/nct15317"}>Facebookはこちらから</Link>
      </main>

      <footer className={styles.footer}>
        Authored by notch_man, Powered by{" "} Next.js
      </footer>
    </div>
  );
};

export default Home;


