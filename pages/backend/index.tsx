import type {NextPage} from "next";
import styles from "@/styles/Home.module.css";
import {SkillCards} from "@/containers/SkillCards";
import Ogp from "@/components/Ogp";
import {Header} from "@/containers/Header";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Ogp
        pageTitle={"バックエンド開発 | のっちまん(notch_man)のポートフォリオ"}
        pageDescription={"のっちまんのバックエンド開発スキル。Go, Python, PHP, Rubyを使ったAPIサーバーやWebサービスの開発・運用実績が豊富です。案件のご依頼を承っております。"}
        pageImg={""}
        pageWidth={1280}
        pageHeight={960}
      />
      <Header/>

      <main className={styles.main}>
        {/*ページタイトル*/}
        <h1 className={styles.title}>
          バックエンドのスキル
        </h1>

        <p className={styles.description}>主な技術スタックについて</p>
        <SkillCards props={[
          {
            title: "Python",
            desc: "FastAPIやFlaskを使ったWebサービスの開発・運用経験があります。" +
              "これまで研究用途向けマイクロタスク型クラウドソーシングプラットフォームの開発などを行なってきました。" +
              "関連技術としてJinja2を使ったテンプレートエンジンによるページの作成やReactなどのJSアプリとの連携などの知見もあります。" ,
            url: ""
          }, {
            title: "Go",
            desc: "様々な案件でのAPI作成で採用経験があります。" +
              "極力標準ライブラリのみを利用するシンプルな設計を得意とし、息の長いバックエンド開発を得意とします。" +
              "gorillaやchiをベースとしたAPI作成の経験もあります。ハッカソンのバックエンドは9割以上がGoで実装されています。",
            url: ""
          },
          {
            title: "PHP",
            desc: "これまでインターンや案件でLaravelやPHP（独自FW）+Smartyなどの環境で開発経験があります。" +
              "主な実績としてSmartyのバージョンアップ、PHP本体のバージョンアッププロジェクトへの参加、各種レガシーコードのリファクタリングなどの経験があります。" ,
            url: ""
          }, {
            title: "TypeScript",
            desc: "主にフロントエンド開発で利用していますが、バックエンドでも独自の認証基盤サーバーの実装などで採用した経験があります。" +
              "expressやNestJSを使ったAPIサーバーの構築を得意としています。",
            url: ""
          }, {
            title: "Ruby",
            desc: "Rails(5・7）を用いたWebサービスを複数開発してきた経験があります。具体的な案件についてはお話できませんが、それなりのユーザー規模の案件での開発・運用実績があります。",
            url: ""
          },
        ]}></SkillCards>
        <p className={styles.description}>
          バックエンド開発の案件を承っております。お気軽に<a href="/contact">お問い合わせ</a>ください。
        </p>

      </main>

      <footer className={styles.footer}>
        Authored by notch_man, Powered by{" "} Next.js
      </footer>
    </div>
  );
};

export default Home;
