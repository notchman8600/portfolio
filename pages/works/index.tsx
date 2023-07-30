import type {NextPage} from "next";
import styles from "../../styles/Home.module.css";
import Ogp from "../../components/Ogp";
import {OgpCard} from "@/components/OgpCard";
import {styled} from "@linaria/react";
import {WorksDetail} from "@/components/ProfileDetail";
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
        <p className={styles.description}>これまでの活動実績（随時更新）</p>

        <WorksDetail/>
        <p className={styles.description}>これまでのハッカソンでの作品</p>

        <GridBox>
          <OgpCard url={"https://topaz.dev/projects/3cb8f7e2be54f7083f99"}/>
          <OgpCard url={"https://topaz.dev/projects/50a804868af6407eb504"}/>
          <OgpCard url={"https://topaz.dev/projects/4f42624a1a4028f63363"}/>
          <OgpCard url={"https://topaz.dev/projects/dd936bbcc01a5be88082"}/>
          <OgpCard url={"https://topaz.dev/projects/83e136f000385d10c09f"}/>
          <OgpCard url={"https://topaz.dev/projects/c00sudq23akg008ogemg"}/>
        </GridBox>

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
  gap: 2rem;
  grid-template-columns: repeat(2, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }

`;
