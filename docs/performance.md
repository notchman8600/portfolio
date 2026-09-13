# パフォーマンス改善

2026-09-13、Next.js 16.3.5 / Node.js 26.8.1 の本番ビルドで検証しました。

Cache Components と Partial Prefetching を有効にしました。Header / Footer を
ルートレイアウトへ移し、同じレイアウト内のページ遷移で再利用します。本文の内部リンクも
`next/link` に統一しました。全ページの静的生成を維持しています。

構造化データは `StructuredData` からサーバーで script タグを出力します。
JavaScript 実行前から JSON-LD を取得でき、`next/script` のクライアント処理が不要です。
サービスページの初期 HTML が参照する JavaScript は、変更前の8リクエストから7リクエストに減りました。

静的画像は `StaticImage` で `getImageProps` を使い、Next.js の画像最適化 URL と
レスポンシブ属性をサーバーで生成します。イベント処理やプレースホルダー用の
クライアント状態を持ちません。プロフィール画像は React の `preload` API で先読みし、
作品画像は遅延読み込みします。プロフィールと作品画像の静的 import により、
元画像には内容に応じたハッシュと `immutable` キャッシュが付与されます。

作品カードの実際の幅に合わせて `sizes` を指定しました。
幅390px・DPR 2、標準フォントサイズ16pxではカード幅は262pxです。
旧実装の固定幅544pxの2x候補（1200px）と、新しい候補（640px）を、
同一の元画像・quality 75・WebP で比較しました。

| 対象 | 変更前 | 変更後 | 削減率 |
| --- | ---: | ---: | ---: |
| 作品画像6枚の合計 | 122,616 bytes | 94,542 bytes | 22.9% |

これは指定条件での画像レスポンスの実測合計です。実際の画像選択はブラウザー・画面幅・DPRに依存し、
画像は遅延読み込みされるため、全6枚を初回表示で取得するという意味ではありません。
ブラウザーによる LCP / INP / CLS とページ遷移の体感速度は未測定です。

再検証:

```sh
pnpm lint
pnpm typecheck
pnpm build
pnpm test:performance
```

検証コマンドは全12ページ、API、robots、sitemap、404を確認し、次の回帰を検出します。

- 各ページに Header / Main / Footer が1つずつ存在すること
- JSON-LD が初期 HTML に含まれ、有効な JSON であること
- ページ固有の RSC セグメントが Header / Footer を重複配信しないこと
- 全ページの先読み用 RSC エンドポイントが応答すること
- プロフィール画像の先読み、quality 85、ハッシュ付き元画像の immutable キャッシュ
- 作品画像6枚の遅延読み込みとレスポンシブ属性

JSON 出力にはページ別の JavaScript gzip サイズ・リクエスト数・RSC サイズと、
元画像別の比較結果を含みます。JavaScript gzip サイズは各ファイルを個別圧縮した合計で、
CDNの圧縮設定やブラウザーキャッシュを含む実際のネットワーク転送量とは異なります。

参照: [Partial Prefetching](https://nextjs.org/docs/app/guides/adopting-partial-prefetching)、
[JSON-LD](https://nextjs.org/docs/app/guides/json-ld)、
[getImageProps](https://nextjs.org/docs/app/api-reference/components/image#getimageprops)、
[React preload](https://react.dev/reference/react-dom/preload)。
