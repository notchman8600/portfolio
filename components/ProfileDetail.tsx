import { styled } from "@linaria/react";
import React from "react";

export const ProfileDetail = () => {
  return (
    <div>
      <ProfileDetailBox>
        <ProfileText>
          「のっちまん」として称して活動している全方位型エンジニア。
          筑波大学
          情報学学位プログラムに所属し、高専時代からコンピューターサイエンスを学んでいます。
          研究室は
          <LinkText
            href={"https://fusioncomplab.org/"}
            rel={"noopener noreferrer"}
          >
            融合知能デザイン研究室
          </LinkText>
          に所属しています。
        </ProfileText>
        <ProfileText>
          2021年度未踏IT人材発掘・育成事業採択、SecHack365
          表現駆動コース修了、procon30自由部門特別賞などの受賞歴があります。
          インターンシップや業務委託でフロントエンドからバックエンドまで幅広く開発を手がけています。
          これまで、大規模システムのレガシー改善から新規サービスのアーキテクトから実装など幅広く手がけてきました。
          現在、新規案件を募集中です。ソフトウェア開発やWebサービス開発、システム設計、スクラムの導入支援、技術相談や講習など幅広く承っております。
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
