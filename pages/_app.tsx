import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Script from 'next/script'

function MyApp({ Component, pageProps }: AppProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "のっちまん (三宅 健太郎)",
    "alternateName": ["notch_man", "Kentaro Miyake"],
    "url": "https://notchman.tech",
    "jobTitle": "フルスタックエンジニア",
    "worksFor": {
      "@type": "Organization",
      "name": "フリーランス"
    },
    "description": "フロントエンド・バックエンド・インフラまで幅広く対応可能なフルスタックエンジニア。React, Next.js, Go, Python, AWS等の技術スタックで開発支援いたします。",
    "sameAs": [
      "https://twitter.com/notchman8600",
      "https://www.facebook.com/nct15317"
    ],
    "knowsAbout": [
      "React", "Next.js", "TypeScript", "JavaScript",
      "Go", "Python", "PHP", "Ruby",
      "AWS", "Docker", "Kubernetes",
      "フロントエンド開発", "バックエンド開発", "インフラ構築"
    ],
    "offers": {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "ソフトウェア開発サービス",
        "description": "Webアプリケーション開発、APIサーバー開発、インフラ構築など"
      }
    }
  }

  return (
    <>
      <Script
        id="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd)
        }}
        strategy="afterInteractive"
      />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp