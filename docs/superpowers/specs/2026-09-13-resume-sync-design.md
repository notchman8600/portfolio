# 最新経歴のポートフォリオ反映 設計メモ（2026-09-13）

## 目的

GitHub の resume リポジトリ（2026-08-10 更新）の内容をポートフォリオサイト全体に反映する。

## 経歴の主な変更点

- LINEヤフー株式会社に機械学習エンジニアとして正社員入社（2026/4〜）
- 合同会社馬車馬テクノロジーズ 代表（2025/11〜、受託開発・自社サービス・自動車販売）
- 筑波大学大学院 情報学学位プログラム 博士後期課程に在籍
- 筑波大学の TA / RA / 短期雇用は 2026/3 で終了、情報学学位プログラムリーダー賞を受賞（2026/3）
- Digital Experts のインターンは 2026/3 で終了
- 生成AI（LLM / LangChain / VLM / ロボット制御）の経験を追加
- Hono, FastAPI, Java, Mackerel を技術スタックに追加
- Panda株式会社の記載は削除

## 方針

- 経歴データは `data/resume.ts` に集約し、ページはそこから描画する（今後の更新を1箇所にする）
- 案件募集の導線は従来どおり個人（のっちまん）宛のまま残す。合同会社馬車馬テクノロジーズは経歴上の所属としてのみ記載し、受託窓口としては書かない
- 勤務先はユーザー指示により「LINEヤフー株式会社」と明記する
- 既存のデザイン・コンポーネント（SkillCards, WorkCard, Home.module.css）を踏襲する

## 変更内容

1. `resume.md` を最新の README.md で置き換える
2. `data/resume.ts` を新設（職務経歴、学歴、受賞、登壇、研究業績）
3. `/career` ページを新設（職歴タイムライン、研究・登壇、受賞）。Header に Career を追加
4. `/ai` ページを新設（生成AI / LLM 応用開発サービス）。Footer, sitemap, contact の選択肢に追加
5. トップページ: ProfileDetail の文面更新、経歴サマリ（直近の所属）を追加、スキルカードに生成AI を追加
6. `/works`: 業務実績に LLM 業務支援ツール開発と NewsPicks を追加、研究プロジェクトの期間更新、リーダー賞と登壇実績を追加
7. `/webdev` `/backend` `/frontend` `/infra` `/training`: 技術スタックと期間の更新。`/frontend` の Next.js カード重複を解消
8. `app/layout.tsx` のメタデータ・JSON-LD（worksFor, sameAs, knowsAbout, keywords）を更新

## 検証

- `pnpm lint` と `pnpm build` が通ること
