import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ja">
      <Head>
        <meta charSet="utf-8" />
        <meta name="author" content="のっちまん (Kentaro Miyake)" />
        <meta
          name="keywords"
          content="のっちまん,notch_man,三宅健太郎,Kentaro Miyake,フロントエンド,バックエンド,エンジニア,開発,案件,フリーランス"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
