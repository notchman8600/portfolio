# ぽーとふぉりおさいと

Node.js 22.12 以上と pnpm 10.13.1 を使用します。

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Next.js 16 の Turbopack と Linaria 8 を使用しています。Linaria の CSS 抽出には
`@wyw-in-js/babel-preset` と `@wyw-in-js/transform` の 2 系が必要です。

```sh
pnpm lint
pnpm typecheck
pnpm build
pnpm test:performance
pnpm start
```

Cache Components と Partial Prefetching を有効にし、共通レイアウトをページ遷移時に
再利用します。構造化データと画像タグは Server Components で出力し、画像は
画面幅に応じたサイズ選択とコンテンツハッシュによる長期キャッシュを利用します。

`pnpm test:performance` はビルド済みの本番サーバーを空きポートで一時起動して
検証し、終了時に停止します。[測定条件と結果](docs/performance.md)を参照してください。

サイトマップとrobots.txtは `app/sitemap.ts`・`app/robots.ts` から自動生成します。
本番サーバーの起動後、`pnpm test:seo http://localhost:3000` で公開ページと
クローラー向け設定を検証できます。[SEOの更新・公開手順](docs/seo.md)を参照してください。
