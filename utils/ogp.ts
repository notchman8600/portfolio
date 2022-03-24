// HTMLのmetaタグからogpを抽出

// import axios from "axios";
// import { JSDOM } from "jsdom";

// export const getOgpFromExternalWebsite = async (targetUrls: string[]) => {
//   const ogps: any = {};
//
//   // リクエストで渡されたURLごとにOGPを取得
//   const result = await Promise.all(
//     targetUrls.map(async (targetUrl: string) => {
//       const encodedUri = encodeURI(targetUrl);
//       const headers = { "User-Agent": "bot" };
//       try {
//         const res = await axios.get(encodedUri, { headers: headers });
//         const html = res.data;
//         const dom = new JSDOM(html);
//         const meta = dom.window.document.head.querySelectorAll("meta");
//         // URLをキーとして、取得したOGPをまとめて返す
//         ogps[targetUrl] = extractOgp([...meta]);
//       } catch (error) {
//         console.error(error);
//       }
//     })
//   );
//   return ogps;
// };

export function extractOgp(metaElements: HTMLMetaElement[]): object {
  const ogp = metaElements
    .filter((element: Element) => element.hasAttribute("property"))
    .reduce((previous: any, current: Element) => {
      const property = current.getAttribute("property")?.trim();
      if (!property) return;
      const content = current.getAttribute("content");
      previous[property] = content;
      return previous;
    }, {});

  return ogp;
}
