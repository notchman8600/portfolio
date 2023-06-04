import React from "react";
import styles from "../styles/Home.module.css";
import {styled} from "@linaria/react";

// interface ProfileDetailProps {}

export const ProfileDetail = () => {
  return (
    <div>
      <ProfileDetailBox>
        <ProfileText>
          筑波大学知識情報・図書館学類に所属している何でも屋。
          高専時代よりコンピューターサイエンスを学ぶ。大学ではソーシャルネットワークの将来予測と制御手法の研究に取り組んでいる。
          現在は
          <LinkText
            href={"https://fusioncomplab.org/"}
            rel={"noopener noreferrer"}
          >
            融合知能デザイン研究室
          </LinkText>
          に所属。研究室手は学術機関向けクラウドソーシングプラットフォームCrowd4Uの開発・運用等を行なっている。さらに、NextCrowd4U（仮）と呼ばれるCrowd4Uの後継システムの開発も行なっている。
        </ProfileText>
        <ProfileText>
          2021年度未踏IT人材発掘・育成事業採択。SecHack365 表現駆動コース修了、procon30自由部門特別賞などの受賞歴有。
          また、インターンシップやアルバイトでフロントエンドからバックエンドまで幅広く開発を手がけている。
        </ProfileText>
      </ProfileDetailBox>
    </div>
  );
};

const ProfileDetailBox = styled.div`
  max-width: 640px;
  border-radius: 0.25rem;
  --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  text-align: center;
  padding: 2rem;
`;

const ProfileText = styled.p`
  font-size: 1rem;
  line-height: 1.5rem;
  --tw-text-opacity: 1;
  color: rgba(55, 65, 81, var(--tw-text-opacity));
  text-align: left
`;


const LinkText = styled.a`
  --tw-text-opacity: 1;
  color: rgba(96, 165, 250, var(--tw-text-opacity));
`;
