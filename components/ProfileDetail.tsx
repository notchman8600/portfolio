import React from "react";
import styles from "../styles/Home.module.css";

// interface ProfileDetailProps {}

export const ProfileDetail = () => {
  return (
    <div>
      <div className="max-w-xl rounded overflow-hidden shadow-lg p-8 text-center">
        <p className={"text-gray-700 text-base"}>
          筑波大学知識情報・図書館学類に所属している何でも屋。
        </p>
        <p className={"text-gray-700 text-base"}>
          高専時代よりコンピューターサイエンスを学ぶ。大学ではソーシャルネットワークの将来予測と制御手法の研究に取り組んでいる。{" "}
          <a
            className={"text-sky-600"}
            href={"https://fusioncomplab.org/"}
            rel={"noopener noreferrer"}
          >
            融合知能デザイン研究室
          </a>
          に所属。研究室手は学術機関向けクラウドソーシングプラットフォームCrowd4Uの開発・運用等を行なっている。さらに、NextCrowd4U（仮）と呼ばれるCrowd4Uの後継システムの開発も行なっている。
        </p>
        <p>
          2021年度未踏IT人材発掘・育成事業採択。SecHack365
          表現駆動コース修了、procon30自由部門特別賞などの受賞歴有。
        </p>
        <p>
          また、インターンシップやアルバイトでフロントエンドからバックエンドまで幅広く開発を手がけている。
        </p>
      </div>
    </div>
  );
};
