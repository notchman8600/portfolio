# www.notchman.tech のSEO運用

正規オリジンは `https://www.notchman.tech`。2026-09-13時点の本番では、
`https://notchman.tech/` はwwwありへ308転送されています。この転送を維持してください。

## ページ・サイトマップを更新するとき

- `data/seo.ts` で各ページのタイトル、説明文、実際の内容更新日を管理します。
- ページでは `createPageMetadata("/path")` を使います。canonical、OGP、Xの情報を同じ定義から生成します。
- 新しい公開ページを作ったら `seoPages` に追加し、関連ページから内部リンクを張ります。
- `lastModified` は本文・実績・説明などを実際に更新した日に変更します。ビルドのたびには変更しません。
- サイトマップは `app/sitemap.ts`、robots.txtは `app/robots.ts` のみで生成します。
  `public/` に同名ファイルを置かないでください。
- API、404、パラメーター付きURL、転送元URLはサイトマップへ追加しません。

Googleはサイトマップの `priority` と `changefreq` を使用しません。
正規URLの網羅と、正確な `lastmod` を優先しています。
根拠：[Googleのサイトマップ仕様](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)。

## 配信するファイル

`public/` に静的ファイルがなくても、Next.jsが次のURLで生成結果を配信します。

| 公開パス | 生成元 | 内容 |
| --- | --- | --- |
| `/sitemap.xml` | `app/sitemap.ts` | 全12ページのwwwあり正規URLと実際の更新日 |
| `/robots.txt` | `app/robots.ts` | 公開ページの巡回許可、APIの巡回除外、サイトマップの案内 |

robots.txtの出力内容：

```text
User-Agent: *
Allow: /
Disallow: /api/

Sitemap: https://www.notchman.tech/sitemap.xml
```

`/_next/`、CSS、JavaScript、画像は巡回を許可します。
`Disallow` は巡回制御であり、アクセス制限や検索結果からの削除を保証する設定ではありません。
仕様：[Next.jsのrobots.txt生成](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots)、
[Googleのrobots.txt仕様](https://developers.google.com/crawling/docs/robots-txt/robots-txt-spec)。

## 公開後の確認

1. Google Search Consoleで `notchman.tech` のドメインプロパティ、または
   `https://www.notchman.tech/` のURLプレフィックスプロパティを確認します。
2. サイトマップとして `https://www.notchman.tech/sitemap.xml` を送信します。
3. トップ・生成AI開発・Web開発・経歴などをURL検査し、Googleが選択した正規URLが
   wwwありになっていることを確認します。必要に応じてインデックス登録をリクエストします。
4. インデックス登録状況と、ページ・検索語句別の表示回数、クリック数、CTRを追跡します。

Search Consoleへの送信や本番へのデプロイは、このコード変更では実施していません。

## 検証

```sh
pnpm build
pnpm start
pnpm test:seo http://localhost:3000
```

公開後は最後の引数を `https://www.notchman.tech` に変えて同じ検査を実行できます。
実際のHTTP応答から全ページのcanonical、重複しないタイトル・説明、OGP・Xの整合性、
初期HTMLのJSON-LD、サイトマップの網羅性、robots.txt、404のnoindexを確認します。
robots.txtについては、APIの除外と公開ページ・表示用アセットがブロックされていないことも確認します。

構造化データは既存の `StructuredData` コンポーネントで初期HTMLへ出力します。
実装方針：[Next.jsのJSON-LDガイド](https://nextjs.org/docs/app/guides/json-ld)。
