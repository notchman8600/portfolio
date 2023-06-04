import type { NextPage } from "next";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Ogp from "../components/Ogp";
import { OgpCard } from "../components/OgpCard";
import { SkillCard } from "../components/SkillCard";
import { Profile } from "../components/Profile";
import { ProfileDetail } from "../components/ProfileDetail";
import {styled} from "@linaria/react";

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
          portfolio
        </h1>

        <p className={styles.description}>自己紹介</p>
        <Profile jaName={"三宅　健太郎"} enName={"Kentaro Miyake"} />
        <ProfileDetail />
        <p className={styles.description}>これまでのハッカソンでの作品</p>
        <GridBox>
          <OgpCard url={"https://topaz.dev/projects/3cb8f7e2be54f7083f99"} />
          <OgpCard url={"https://topaz.dev/projects/50a804868af6407eb504"} />
          <OgpCard url={"https://topaz.dev/projects/4f42624a1a4028f63363"} />
          <OgpCard url={"https://topaz.dev/projects/dd936bbcc01a5be88082"} />
          <OgpCard url={"https://topaz.dev/projects/83e136f000385d10c09f"} />
          <OgpCard url={"https://topaz.dev/projects/c00sudq23akg008ogemg"} />
        </GridBox>

        {/*<p className={styles.description}>スキルアセット</p>*/}

        {/*<GridBox>*/}
        {/*  <SkillCard*/}
        {/*    title={"バックエンド"}*/}
        {/*    desc={*/}
        {/*      "基本的なREST,WebSocketサーバーを構築出来ます。" +*/}
        {/*      "マイクロサービス構成でのAPIの運用経験もあります。Goが大好きですがNode.jsやFast APIでの構築経験もあります。"*/}
        {/*    }*/}
        {/*    url={""}*/}
        {/*  />*/}
        {/*  <SkillCard*/}
        {/*    title={"インフラ"}*/}
        {/*    desc={*/}
        {/*      "DockerやKubernetesで各サービスの管理を行ないます。" +*/}
        {/*      "AWSをよく使います。GithubActionsによるCI/CD構築経験あり。" +*/}
        {/*      "800人がアクセスする本番サーバーを管理するため複数台アプリケーションサーバーの構築での冗長構成の構築経験があります。"*/}
        {/*    }*/}
        {/*    url={""}*/}
        {/*  />*/}
        {/*  <SkillCard*/}
        {/*    title={"画像処理"}*/}
        {/*    desc={*/}
        {/*      "C++とOpenCVまたは生データを使った画像処理プログラミングをやっています。" +*/}
        {/*      "物体追跡・動体検知などの実装が得意です。画像処理の教科書で扱われる基本的なアルゴリズムは一通りの実装経験があります。"*/}
        {/*    }*/}
        {/*    url={""}*/}
        {/*  />*/}
        {/*</GridBox>*/}
      </main>

      <footer className={styles.footer}>
          Authored by notch_man, Powered by{" "} Next.js
      </footer>
    </div>
  );
};

export default Home;

const GridBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }

`;
