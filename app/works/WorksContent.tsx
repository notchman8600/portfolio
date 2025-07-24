"use client";

import { styled } from "@linaria/react";
import { OgpCardLocal } from "@/components/OgpCardLocal";
import { WorksDetail } from "@/components/ProfileDetail";
import { Header } from "@/containers/Header";
import styles from "@/styles/Home.module.css";

export default function WorksContent() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>実績・作品</h1>
        
        <h2 className={styles.subtitle}>これまでの活動実績（随時更新）</h2>

        <WorksDetail />
        <h2 className={styles.subtitle}>これまでのハッカソンでの作品</h2>

        <GridBox>
          <OgpCardLocal
            url={"https://topaz.dev/projects/3cb8f7e2be54f7083f99"}
            imageUrl={"/assets/works/project-3cb8f7e2be54f7083f99.jpg"}
            title={"masakari exhibition"}
            desc={
              "ハッカソンの発表（進捗）をするために過去作品の展示会場を作った↓！"
            }
          />
          <OgpCardLocal
            url={"https://topaz.dev/projects/50a804868af6407eb504"}
            imageUrl={"/assets/works/project-50a804868af6407eb504.jpg"}
            title={"デスマTV"}
            desc={"デスマTVで怖しのエンジニアのデスマーチを配信しよう！"}
          />
          <OgpCardLocal
            url={"https://topaz.dev/projects/4f42624a1a4028f63363"}
            imageUrl={"/assets/works/project-4f42624a1a4028f63363.jpg"}
            title={"奇声を発してハッピーハッピー"}
            desc={"奇声を発声してアプリの島田紳を下げよう。"}
          />
          <OgpCardLocal
            url={"https://topaz.dev/projects/dd936bbcc01a5be88082"}
            imageUrl={"/assets/works/project-dd936bbcc01a5be88082.jpg"}
            title={"Cheese!"}
            desc={"オンラインでも皆で集合写真！"}
          />
          <OgpCardLocal
            url={"https://topaz.dev/projects/83e136f000385d10c09f"}
            imageUrl={"/assets/works/project-83e136f000385d10c09f.jpg"}
            title={"無職にメイドに夏を地だたかった"}
            desc={"おかえりなさいませ！ご主人様、お嬢様♡"}
          />
          <OgpCardLocal
            url={"https://topaz.dev/projects/c00sudq23akg008ogemg"}
            imageUrl={"/assets/works/project-c00sudq23akg008ogemg.jpg"}
            title={"Kubesmas tree"}
            desc={"もうすぐクリスマス！みんなでクリスマス！"}
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
}

const GridBox = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(2, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;
