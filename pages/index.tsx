import type { NextPage } from "next";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Ogp from "../components/Ogp";
import { OgpCard } from "../components/OgpCard";
import { SkillCard } from "../components/SkillCard";
import { Profile } from "../components/Profile";
import { ProfileDetail } from "../components/ProfileDetail";

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <OgpCard url={"https://topaz.dev/projects/50a804868af6407eb504"} />
          <OgpCard url={"https://topaz.dev/projects/4f42624a1a4028f63363"} />
          <OgpCard url={"https://topaz.dev/projects/dd936bbcc01a5be88082"} />
          <OgpCard url={"https://topaz.dev/projects/83e136f000385d10c09f"} />
          <OgpCard url={"https://topaz.dev/projects/c00sudq23akg008ogemg"} />
        </div>

        <p className={styles.description}>スキルアセット</p>

        <div className={"grid grid-cols-1 md:grid-cols-2 gap-4"}>
          <SkillCard
            title={"バックエンド"}
            desc={
              "基本的なREST,WebSocketサーバーを構築出来ます。" +
              "マイクロサービス構成でのAPIの運用経験もあります。Goが大好きですがNode.jsやFast APIでの構築経験もあります。"
            }
            url={""}
          />
          <SkillCard
            title={"インフラ"}
            desc={
              "DockerやKubernetesで各サービスの管理を行ないます。" +
              "AWSをよく使います。GithubActionsによるCI/CD構築経験あり。" +
              "800人がアクセスする本番サーバーを管理するため複数台アプリケーションサーバーの構築での冗長構成の構築経験があります。"
            }
            url={""}
          />
          <SkillCard
            title={"画像処理"}
            desc={
              "C++とOpenCVまたは生データを使った画像処理プログラミングをやっています。" +
              "物体追跡・動体検知などの実装が得意です。画像処理の教科書で扱われる基本的なアルゴリズムは一通りの実装経験があります。"
            }
            url={""}
          />
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
