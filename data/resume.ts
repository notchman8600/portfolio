// 経歴データの単一情報源。
// 元データ: https://github.com/notchman8600/resume （2026-08-10 更新分を反映）

export interface CareerEntry {
  org: string;
  role: string;
  period: string;
  description: string;
  url?: string;
  current?: boolean;
}

export interface AchievementEntry {
  title: string;
  year: string;
  description: string;
  url?: string;
}

export interface TalkEntry {
  event: string;
  year: string;
  description: string;
  url: string;
}

export interface PublicationEntry {
  venue: string;
  title: string;
  description: string;
  url: string;
}

export const affiliations = {
  employer: "LINEヤフー株式会社（機械学習エンジニア）",
  company: "合同会社馬車馬テクノロジーズ（代表）",
  companyUrl: "https://www.basyauma-tech.com/",
  university: "筑波大学大学院 情報学学位プログラム 博士後期課程",
  lab: "融合知能デザイン研究室",
  labUrl: "https://fusioncomplab.org/",
} as const;

export const careers: CareerEntry[] = [
  {
    org: "LINEヤフー株式会社",
    role: "正社員（機械学習エンジニア）",
    period: "2026年4月〜",
    description:
      "機械学習エンジニアとして勤務しています。生成AI・LLMを活用したシステムの設計・実装に取り組んでいます。",
    url: "https://www.lycorp.co.jp/",
    current: true,
  },
  {
    org: "合同会社馬車馬テクノロジーズ",
    role: "代表",
    period: "2025年11月〜",
    description:
      "受託開発、自社サービス、自動車販売を行う会社を経営しています。",
    url: "https://www.basyauma-tech.com/",
    current: true,
  },
  {
    org: "Digital Experts株式会社",
    role: "インターン（業務委託）",
    period: "2024年6月〜2026年3月",
    description:
      "丸紅株式会社からの契約先切り替えに伴い参画。社内チャットボットや、会議効率化・議事録作成支援ツールなどLLMを活用した業務支援ツールの開発を担当しました。",
  },
  {
    org: "丸紅株式会社",
    role: "インターン（業務委託）",
    period: "2024年6月〜2024年8月",
    description:
      "社内チャットボット開発や、会議効率化・議事録作成支援ツールなどの開発を行いました。",
  },
  {
    org: "株式会社ユーザーベース",
    role: "インターン",
    period: "2022年9月〜2025年3月",
    description:
      "NewsPicksのトピックス機能のUI改善や、Java / Kotlinによるレガシーコード改善に取り組みました。",
  },
  {
    org: "筑波大学",
    role: "短期雇用・非常勤職員・TA・RA",
    period: "2022年4月〜2026年3月",
    description:
      "融合知能デザイン研究室にてCrowd4Uの保守・開発、NextCrowd4Uの開発、研究室内システムの運用を担当。enPiTではPBL形式でアジャイル開発を学ぶ講義のメンターを務めました。2026年3月に情報学学位プログラムリーダー賞を受賞しました。",
    url: "https://fusioncomplab.org/",
  },
  {
    org: "株式会社みらいスタジオ",
    role: "業務委託",
    period: "2022年4月〜",
    description: "ソフトウェア開発および研修資料の作成を担当しています。",
    current: true,
  },
  {
    org: "株式会社オルターブース",
    role: "インターンシップ",
    period: "2022年5月〜2022年8月",
    description: "Azureを使ったシステム開発に従事しました。",
  },
  {
    org: "株式会社PR TIMES",
    role: "インターンシップ",
    period: "2021年10月〜2026年3月",
    description:
      "PR TIMES社プロダクトの開発、PHP / Laravelを中心とした既存システムの改善、Smartyのバージョンアップなどのレガシー改善を担当しました。",
    url: "https://developers.prtimes.jp/2023/03/31/intern-upgrade-smarty/",
  },
  {
    org: "RPAテクノロジーズ株式会社（現：オープン株式会社）",
    role: "インターンシップ",
    period: "2021年5月〜2022年5月",
    description:
      "BizRobo!の導入支援、新サービス立ち上げ補助、イベント運営補助を行いました。",
    url: "https://rpa-holdings.com/recruit/journal/internship_21001/",
  },
  {
    org: "個人事業（フリーランス）",
    role: "業務委託",
    period: "2022年4月〜",
    description:
      "SNSマーケティング系企業のストック素材販売サービス（Web・React Nativeアプリ）の開発、Railsバージョンアップ、認定スクラムマスターとしてのスクラム導入支援、人事系サービスの新機能開発などを担当しています。",
    current: true,
  },
];

export const awards: AchievementEntry[] = [
  {
    title: "情報学学位プログラムリーダー賞",
    year: "2026年3月",
    description:
      "筑波大学大学院 情報学学位プログラムにて、顕著な業績による学生表彰を受けました。",
  },
  {
    title: "DEIM2024 優秀論文賞・優秀インタラクティブ賞",
    year: "2024年",
    description:
      "「マルチエージェント強化学習に基づく解釈可能なソーシャルネットワークの将来予測」でダブル受賞。",
    url: "https://confit.atlas.jp/guide/event-img/deim2024/T1-A-5-01/public/pdf",
  },
  {
    title: "未踏IT人材発掘・育成事業 採択",
    year: "2021年度",
    description: "会議の効率化支援ツールを開発しました。",
    url: "https://www.ipa.go.jp/jinzai/mitou/it/2021/qv6pgp0000002ejz-att/000096554.pdf",
  },
  {
    title: "SecHack365 表現駆動コース 修了",
    year: "2021年度",
    description:
      "「ヤンデレ」をテーマにした作品を制作。現在も開発を継続しています。",
    url: "https://sechack365.nict.go.jp/achievement/2021/pdf/p1.pdf",
  },
  {
    title: "第30回全国高等専門学校プログラミングコンテスト 自由部門 特別賞",
    year: "2019年",
    description: "影から3Dオブジェクトを生成し、それを壊して遊ぶツールを制作。",
    url: "http://www.procon.gr.jp/wp-content/uploads//2019/11/app20022.pdf",
  },
  {
    title: "JAXAビジコン 優勝",
    year: "2021年",
    description: "",
  },
  {
    title: "CVG東北ブロック 東北経済産業局長賞（共同提案）",
    year: "2022年",
    description:
      "CVG関東ブロック（2022年）・四国ブロック（2020年）でもセミファイナルに進出。",
  },
  {
    title: "総務省 異能vation ジェネレーションアワード部門 ノミネート",
    year: "2018年・2022年",
    description: "",
  },
];

export const talks: TalkEntry[] = [
  {
    event: "アジャイルPBL祭り 2024",
    year: "2024年",
    description:
      "強い想いを持って数年間プロダクト開発に関わった人が、その意思を次に託すときの心構えについて発表。未来にプロダクトを託すためのフレームワークを提案しました。",
    url: "https://confengine.com/conferences/agile-pbl-2024/proposal/19493",
  },
  {
    event: "Scrum Fest Sendai 2023",
    year: "2023年",
    description:
      "筑波大学と東京理科大学の合同チームが「1つのサービスの起案ができる」チームになるまでの軌跡と知見を発表しました。",
    url: "https://confengine.com/conferences/scrum-fest-sendai-2023/proposal/18648",
  },
  {
    event: "アジャイルPBL祭り 2023",
    year: "2023年",
    description:
      "アジャイルそのものに固執するのではなく、開発において本当に向き合うべきものは何か、という問題提起を行いました。",
    url: "https://confengine.com/conferences/agile-pbl-2023/proposal/18201",
  },
];

export const publications: PublicationEntry[] = [
  {
    venue: "WWW'24（ACM The Web Conference, full paper）",
    title:
      "NETEVOLVE: Social Network Forecasting using Multi-Agent Reinforcement Learning with Interpretable Features",
    description:
      "強化学習を用いたソーシャルネットワークの将来予測手法についてフルペーパーを発表しました。",
    url: "https://dl.acm.org/doi/pdf/10.1145/3589334.3647982",
  },
  {
    venue: "DEIM2024（優秀論文賞・優秀インタラクティブ賞）",
    title:
      "マルチエージェント強化学習に基づく解釈可能なソーシャルネットワークの将来予測",
    description:
      "WWW'24の研究のベースとなる日本語論文。学部時代の卒業研究を基礎としています。",
    url: "https://confit.atlas.jp/guide/event-img/deim2024/T1-A-5-01/public/pdf",
  },
  {
    venue: "日本データベース学会 Newsletter 2024年8月号（Vol.17, No.4）",
    title: "寄稿",
    description: "論文以外の出版物として寄稿しました。",
    url: "https://dbsj.org/newsletter-vol-17-no-4/",
  },
];
