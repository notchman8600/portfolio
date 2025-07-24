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
        <h1 className={styles.title}>これまでの主な活動</h1>

        <h2 className={styles.subtitle}>業務実績</h2>
        <WorksGrid>
          <WorkCard>
            <h3>大規模SNSマーケティングサービスの開発</h3>
            <p>
              ストック素材販売サービスのWeb・モバイルアプリ開発を担当。
              React NativeによるiOS/Androidアプリ開発、Railsのレガシー改善、
              認定スクラムマスターとしてスクラム導入を支援。
              Railsバージョンアッププロジェクトの推進・実行も担当。
            </p>
          </WorkCard>
          <WorkCard>
            <h3>人事系サービスの新機能開発</h3>
            <p>
              人事系サービスの新機能開発・保守を担当。
              Railsでフロントからバックエンドまで幅広く対応し、
              システムの安定性向上と新機能の実装を両立。
            </p>
          </WorkCard>
          <WorkCard>
            <h3>レガシーシステムのモダナイゼーション</h3>
            <p>
              複数の企業でPHP/Laravelシステムのレガシー改善を実施。
              Smartyのバージョンアップ、PHPバージョンアップなど、
              技術的負債の解消とパフォーマンス改善を実現。
            </p>
          </WorkCard>

        </WorksGrid>

        <h2 className={styles.subtitle}>研究実績</h2>
        <WorksGrid>
          <WorkCard>
            <h3>WWW'24 国際学会発表（フルペーパー）</h3>
            <p>
              「NETEVOLVE: Social Network Forecasting using Multi-Agent Reinforcement Learning with Interpretable Features」
              強化学習を用いたソーシャルネットワークの将来予測手法について発表。
              ACM The WebConferenceにてフルペーパー論文として採択。
            </p>
          </WorkCard>
          <WorkCard>
            <h3>DEIM2024 優秀論文賞・優秀インタラクティブ賞</h3>
            <p>
              「マルチエージェント強化学習に基づく解釈可能なソーシャルネットワークの将来予測」
              国内最大級のデータベース学会でダブル受賞。
              学部時代の卒業研究がベースとなった研究成果。
            </p>
          </WorkCard>
          <WorkCard>
            <h3>大学研究プロジェクト</h3>
            <p>
              筑波大学融合知能デザイン研究室にて、Crowd4Uの保守・開発、
              NextCrowd4Uの新規開発を担当。マイクロタスク型クラウドソーシング
              プラットフォームの研究開発に従事。
            </p>
          </WorkCard>
        </WorksGrid>

        <h2 className={styles.subtitle}>受賞・採択実績</h2>
        <WorksGrid>
          <WorkCard>
            <h3>未踏IT人材発掘・育成事業（2021年度）</h3>
            <p>
              会議の効率化支援ツールの開発で採択。
              会議中の情報を構造化し、参加者の理解と合意形成を
              支援するシステムを開発。
            </p>
          </WorkCard>
          <WorkCard>
            <h3>SecHack365 表現駆動コース修了（2021年度）</h3>
            <p>
              セキュリティ×表現をテーマに、独創的なプロダクトを開発。
              1年間のハッキング技術習得プログラムを修了。
            </p>
          </WorkCard>
          <WorkCard>
            <h3>第30回全国高専プロコン 自由部門特別賞</h3>
            <p>
              影から3Dオブジェクトを生成し、それを破壊して遊ぶ
              インタラクティブツールを開発。技術的な独創性が評価され受賞。
            </p>
          </WorkCard>
        </WorksGrid>

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
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    padding: 0 1rem;
  }
`;

const WorksGrid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  margin-bottom: 3rem;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    padding: 0 1rem;
  }
`;

const WorkCard = styled.div`
  background-color: #f9fafb;
  border-radius: 0.5rem;
  padding: 1.5rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);

  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 0.75rem;
    color: #1f2937;
  }

  p {
    font-size: 1rem;
    line-height: 1.5;
    color: #4b5563;
  }
`;
