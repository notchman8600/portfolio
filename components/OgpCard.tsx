import React, { useEffect, useState } from "react";
import useSWR from "swr";

interface OgpDataProps {
  url: string;
}

export type OgpData = {
  imageUrl: string;
  siteName: string;
  siteUrl: string;
  title: string;
  desc: string;
};

export type OgpState = {
  ogpData: OgpData;
};

const initialState: OgpState = {
  ogpData: {
    imageUrl: "",
    siteName: "",
    siteUrl: "",
    title: "",
    desc: "",
  },
};

// => {
//   const text = res.text()
//   const html = new DOMParser().parseFromString(text, "text/html")
//   const html = res
//   const dom = new JSDOM(html);
//   const meta = dom.window.document.head.querySelectorAll("meta");
//   const ogp = extractOgp(meta);
//   const ogpParseData = {
//     ogpData: {
//       imageUrl: ogp["og:image"],
//       siteName: ogp["og:site_name"],
//       title: ogp["og:title"],
//       desc: ogp["og:description"],
//       siteUrl: ogp["og:url"],
//     },
//   };
// });

// export async function getServerSideProps() {
//   // `getStaticProps` はサーバー側で実行されます
//   // Update the document title using the browser API
//   let ogpParseData = {}
//   await getOgpFromExternalWebsite([
//     "https://topaz.dev/projects/4f42624a1a4028f63363",
//   ]).then((res) => {
//     const data = res["https://topaz.dev/projects/4f42624a1a4028f63363"];
//     ogpParseData = {
//       ogpData: {
//         imageUrl: data["og:image"],
//         siteName: data["og:site_name"],
//         title: data["og:title"],
//         desc: data["og:description"],
//         siteUrl: data["og:url"],
//       },
//     };
//     return {
//       props: {
//         fallback: {
//           "/": ogpParseData,
//         },
//       },
//     };
//   }

export const OgpCard = (props: OgpDataProps) => {
  const [ogp, setState] = useState<OgpState>(initialState);
  // const { data, error } = useSWR(props.url, fetcher, { url: props.url });
  useEffect(() => {
    fetch(`/api/ogp/${Buffer.from(props.url).toString("base64")}`).then((r) => {
      r.json().then((data) => {
        setState(data);
      });
    });
  }, []);
  return (
    <div>
      <p>You clicked {ogp.ogpData.title} times</p>
      {/*<button onClick={() => setCount(count + 1)}>Click me</button>*/}
    </div>
  );
};
