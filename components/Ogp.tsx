import { VFC } from "react";
import Head from "next/head";

interface MetaData {
  pageTitle?: string;
  pageDescription?: string;
  pageUrl?: string;
  pageImg?: string;
  pageWidth?: number;
  pageHeight?: number;
}

const Ogp: VFC<MetaData> = ({
  pageTitle,
  pageDescription,
  pageUrl,
  pageWidth,
  pageHeight,
}) => {
  const defaultTitle = "ogp";
  const defaultDescription = "ogp";
  const title = pageTitle ? pageTitle : defaultTitle;
  const description = pageDescription ? pageDescription : defaultDescription;
  const url = pageUrl;
  const imgWidth = pageWidth ? pageWidth : 1280;
  const imgHeight = pageHeight ? pageHeight : 640;
  const baseUrl = {
    production: "https://notchman.tech",
    development: "http://localhost:3000",
    test: "http://localhost:3000",
  }[process.env.NODE_ENV];
  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      <meta name="description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:site_name" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" key="ogImage" content={`${baseUrl}/api/ogp`} />
      <meta
        name="twitter:card"
        key="twitterCard"
        content="summary_large_image"
      />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta
        name="twitter:image"
        key="twitterImage"
        content={`${baseUrl}/api/ogp`}
      />

      <meta property="og:image:width" content={String(imgWidth)} />
      <meta property="og:image:height" content={String(imgHeight)} />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900&amp;display=swap"
        rel="stylesheet"
      />
      <link rel="canonical" href={url} />
    </Head>
  );
};

export default Ogp;
