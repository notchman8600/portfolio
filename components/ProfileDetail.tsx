import React from "react";
import styles from "../styles/Home.module.css";

// interface ProfileDetailProps {}

export const ProfileDetail = () => {
  return (
    <div>
      <div className="max-w-xl rounded overflow-hidden shadow-lg p-8 text-center">
        <p className={"text-gray-700 text-base"}>
          筑波大学知識情報図書館学類3年
        </p>
        <p className={"text-gray-700 text-base"}>
          高専時代よりコンピューターサイエンスを学ぶ。大学では知識情報学を学び、CSのみならずITに介在する人間の振るまいについても学んでいる。今年度のミッションは「情報源を通じた検索行動の分断、分類、最適化」である。{" "}
          <a
            className={"text-sky-600"}
            href={"https://fusioncomplab.org/"}
            rel={"noopener noreferrer"}
          >
            融合知能デザイン研究室
          </a>
          に所属。
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
