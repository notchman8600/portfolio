import { styled } from "@linaria/react";

export const ProfileDetail = () => {
  return (
    <div>
      <ProfileDetailBox>
        <ProfileText>
          「のっちまん」として活動している全方位型エンジニア。2026年4月より
          <LinkText
            href={"https://www.lycorp.co.jp/"}
            rel={"noopener noreferrer"}
          >
            LINEヤフー株式会社
          </LinkText>
          にて機械学習エンジニアとして勤務しています。あわせて
          <LinkText
            href={"https://www.basyauma-tech.com/"}
            rel={"noopener noreferrer"}
          >
            合同会社馬車馬テクノロジーズ
          </LinkText>
          の代表を務め、筑波大学大学院 情報学学位プログラム 博士後期課程（
          <LinkText
            href={"https://fusioncomplab.org/"}
            rel={"noopener noreferrer"}
          >
            融合知能デザイン研究室
          </LinkText>
          ）で研究活動を行っています。高専時代からコンピューターサイエンスを学んできました。
        </ProfileText>
        <ProfileText>
          Webアプリケーション開発を軸に、バックエンド・フロントエンド・インフラから生成AI応用まで横断して担当してきました。
          近年はLLMを活用した業務支援ツールや社内チャットボットの開発に加え、LangChainやVLMを用いたロボット制御・マルチモーダルな知能システムの実装にも取り組んでいます。
          研究ではソーシャルネットワーク分析・計算社会学・強化学習を扱い、WWW'24でのフルペーパー発表やDEIM2024優秀論文賞などの実績があります。
          2021年度未踏IT人材発掘・育成事業採択、SecHack365
          表現駆動コース修了、procon30自由部門特別賞、情報学学位プログラムリーダー賞などの受賞歴があります。
        </ProfileText>
        <ProfileText>
          現在、新規案件を募集中です。ソフトウェア開発やWebサービス開発、生成AI・LLM活用、システム設計、スクラムの導入支援、技術相談や講習など幅広く承っております。
        </ProfileText>
      </ProfileDetailBox>
    </div>
  );
};
export const WorksDetail = () => {
  return (
    <div>
      <ProfileDetailBox>
        <ProfileText>
          これまで複数のハッカソンに参加し優勝経験もあります。ハッカソンではReactやGo、Pythonのスキルアップを目的に出場しており様々な技術的な知見を蓄積しています。
        </ProfileText>
        <ProfileText>
          また2021年度未踏IT人材発掘・育成事業採択やSecHack365
          表現駆動コース修了、procon30で自由部門特別賞などの受賞するなど様々な実績があります。
        </ProfileText>
      </ProfileDetailBox>
    </div>
  );
};
const ProfileDetailBox = styled.div`
  border-radius: 0.25rem;
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  max-width: 640px;
  padding: 2rem;
  text-align: center;
  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 10%), 0 4px 6px -2px rgb(0 0 0 / 5%);
`;

const ProfileText = styled.p`
  color: rgb(55 65 81 / var(--tw-text-opacity));
  font-size: 1rem;
  line-height: 1.5rem;
  text-align: left;
  --tw-text-opacity: 1;
`;

const LinkText = styled.a`
  --tw-text-opacity: 1;
  color: rgb(96 165 250 / var(--tw-text-opacity));
  text-decoration: none;
`;
