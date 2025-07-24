import type {NextPage} from "next";
import styles from "@/styles/Home.module.css";
import {SkillCards} from "@/containers/SkillCards";
import Ogp from "@/components/Ogp";
import {Header} from "@/containers/Header";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Ogp
        pageTitle={"フロントエンド開発 | のっちまん(notch_man)のポートフォリオ"}
        pageDescription={"のっちまんのフロントエンド開発スキル。React, Next.js, TypeScriptを使ったWebアプリケーション開発を得意としています。案件のご依頼を承っております。"}
        pageImg={""}
        pageWidth={1280}
        pageHeight={960}
      />
      <Header/>

      <main className={styles.main}>
        {/*ページタイトル*/}
        <h1 className={styles.title}>
          フロントエンドのスキル
        </h1>

        <p className={styles.description}>主な技術スタックについて</p>
        <SkillCards props={[
          {
            title: "React",
            desc: "Reactを使ってシングルページのアプリケーションから複数ページアプリまで様々な開発実績があります。ハッカソンでフロントエンドを実装するときは8割以上がReactです。" +
              "また、複雑なバリデーションをフォームアプリのフロント・バックエンド設計などの開発経験があります。CSSはbootstrapやtailwind cssなどがメインですが最近はlinariaを使った案件にも関わっています。",
            url: ""
          }, {
            title: "Next.js",
            desc: "SEO対策などの理由でSSRを用いる必要のある案件を中心に採用しています。" +
              "当サイトもNext.jsで構築されています。",
            url: ""
          }, {
            title: "Next.js",
            desc: "SEO対策などの理由でSSRを用いる必要のある案件を中心に採用しています。" +
              "当サイトもNext.jsで構築されています。また、SPAで実装されたReactアプリをNext.js実装に移行した経験もあります。",
            url: ""
          }, {
            title: "テンプレートエンジン",
            desc: "FastAPIやLaravelなどを使った案件ではReactのみならずテンプレートエンジンを使ったWebアプリの開発も得意としています。" +
              "テンプレートエンジン+JSを基本とした動的な表現や部分的にReactを使うなど要件に応じて様々な技術に対応することができます。",
            url: ""
          }
        ]}></SkillCards>
        <p className={styles.description}>
          フロントエンド開発の案件を承っております。お気軽に<a href="/contact">お問い合わせ</a>ください。
        </p>
      </main>

      <footer className={styles.footer}>
        Authored by notch_man, Powered by{" "} Next.js
      </footer>
    </div>
  );
};

export default Home;


