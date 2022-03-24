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
  pageImg,
  pageWidth,
  pageHeight,
}) => {
  const defaultTitle = "ogp";
  const defaultDescription = "ogp";
  const title = pageTitle ? `${pageTitle} | ${defaultTitle}` : defaultTitle;
  const description = pageDescription ? pageDescription : defaultDescription;
  const url = pageUrl;
  const imgUrl = pageImg;
  const imgWidth = pageWidth ? pageWidth : 1280;
  const imgHeight = pageHeight ? pageHeight : 640;
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
      <meta property="og:image" content={imgUrl} />
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
