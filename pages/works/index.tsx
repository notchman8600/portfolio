import { styled } from "@linaria/react";
import type { NextPage } from "next";
import { OgpCardLocal } from "@/components/OgpCardLocal";
import { WorksDetail } from "@/components/ProfileDetail";
import { Header } from "@/containers/Header";
import Ogp from "../../components/Ogp";
import styles from "../../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Ogp
        pageTitle={"実績・作品 | のっちまん(notch_man)のポートフォリオ"}
        pageDescription={
          "のっちまんのこれまでの開発実績やハッカソン作品等を紹介しています。案件のご依頼を承っております。"
        }
        pageImg={""}
        pageWidth={1280}
        pageHeight={960}
      />
      <Header />
      <main className={styles.main}>
        <p className={styles.description}>これまでの活動実績（随時更新）</p>

        <WorksDetail />
        <p className={styles.description}>これまでのハッカソンでの作品</p>

        <GridBox>
          <OgpCardLocal
            url={"https://topaz.dev/projects/3cb8f7e2be54f7083f99"}
            imageUrl={"/assets/works/project-3cb8f7e2be54f7083f99.jpg"}
            title={"Web of Thing ワークショップ 連動IoTアプリ開発"}
            desc={
              "日本における、ウェブ技術を活用したIoTアプリケーション開発推進のためのワークショップ資材の整備と、連動IoTアプリケーションの開発"
            }
          />
          <OgpCardLocal
            url={"https://topaz.dev/projects/50a804868af6407eb504"}
            imageUrl={"/assets/works/project-50a804868af6407eb504.jpg"}
            title={"Yorimatome"}
            desc={
              "社会人、大学生の限られた時間で楽しく本を読むための読書習慣化ツール"
            }
          />
          <OgpCardLocal
            url={"https://topaz.dev/projects/4f42624a1a4028f63363"}
            imageUrl={"/assets/works/project-4f42624a1a4028f63363.jpg"}
            title={"ReCOLLECTion"}
            desc={
              "昔持っていたモノを簡単に再発見・買い換えができるアプリケーション"
            }
          />
          <OgpCardLocal
            url={"https://topaz.dev/projects/dd936bbcc01a5be88082"}
            imageUrl={"/assets/works/project-dd936bbcc01a5be88082.jpg"}
            title={
              "自分と向き合うセルフカウンセリングサービス ポンコツAIとの対話"
            }
            desc={
              "チャットボットによる自分と向き合うセルフカウンセリングサービス"
            }
          />
          <OgpCardLocal
            url={"https://topaz.dev/projects/83e136f000385d10c09f"}
            imageUrl={"/assets/works/project-83e136f000385d10c09f.jpg"}
            title={"Smafobook"}
            desc={"本をスマホでスキャンして管理する新しい読書体験"}
          />
          <OgpCardLocal
            url={"https://topaz.dev/projects/c00sudq23akg008ogemg"}
            imageUrl={"/assets/works/project-c00sudq23akg008ogemg.jpg"}
            title={"Web Recorder"}
            desc={"ウェブブラウザでとにかく簡単に録画・配信ができるツール"}
          />
        </GridBox>
        <p className={styles.description}>
          案件のご依頼を承っております。お気軽に
          <a href="/contact">お問い合わせ</a>ください。
        </p>
      </main>

      <footer className={styles.footer}>
        Authored by notch_man, Powered by Next.js
      </footer>
    </div>
  );
};

export default Home;

const GridBox = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(2, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }

`;
