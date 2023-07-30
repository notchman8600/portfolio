import type {NextPage} from "next";
import styles from "../styles/Home.module.css";
import Ogp from "../components/Ogp";
import {Profile} from "@/components/Profile";
import {ProfileDetail} from "@/components/ProfileDetail";
import { SkillCardsWithLink} from "@/containers/SkillCards";
import {Header} from "@/containers/Header";

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

        {/*ページタイトル*/}
        <h1 className={styles.title}>
          Welcome to{" "}
          <a
            href="https://twitter.com/notch_man8600"
            target={"_blank"}
            rel={"noopener noreferrer"}
          >
            notch_man&apos;s
          </a>{" "}
          official Page
        </h1>

        <p className={styles.description}>自己紹介</p>
        <Profile jaName={"三宅　健太郎"} enName={"Kentaro Miyake"}/>
        <ProfileDetail/>
        <p className={styles.description}>どんなお仕事をしていますか？</p>
        <SkillCardsWithLink props={[
          {
            title: "フロントエンド",
            desc: "WebサイトやWebアプリケーションの開発・運用・保守ができます。" +
              "JavaScript・TypeScript(React,Next.js,GatsbyJS)での開発を得意としています。" +
              "" +
              "当サイトもNext.jsで作成されています。",
            url: "/frontend"
          }, {
            title: "バックエンド",
            desc: "GoやPythonをはじめTypeScript、PHPを使ったAPIサーバーの開発・運用経験があります。" +
              "FastAPI,Rails,Laravel,NestJSなどのフルスタックフレームワークを使ったWebサービスの開発から自作FWによる開発まで幅広く対応できます。" +
              "また、マイクロサービス構成でのAPIの運用経験や配信基盤構築の経験もあります。",
            url: "/backend"
          }, {
            title: "インフラ",
            desc: "DockerやKubernetesで各サービスの管理を行ないます。" +
              "AWSをよく使います。GithubActionsによるCI/CD構築経験あり。" +
              "低スペックサーバーの環境で数百人が同時アクセスする本番環境の運用や、複数台アプリケーションサーバーを使った冗長構成でのインフラ運用経験があります。",
            url: ""
          },

        ]}></SkillCardsWithLink>


      </main>

      <footer className={styles.footer}>
        Authored by notch_man, Powered by{" "} Next.js
      </footer>
    </div>
  );
};

export default Home;
