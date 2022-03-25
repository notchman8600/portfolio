import type { NextApiRequest, NextApiResponse } from "next";
import fetch from "node-fetch";
import { JSDOM } from "jsdom";

const jsdom = new JSDOM();
const parser = new jsdom.window.DOMParser();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const encodedUrl = req.query.url;
  const param = Buffer.from(encodedUrl, "base64").toString();
  console.log(encodedUrl);
  console.log(param);
  fetch(param)
    .then((res) => res.text())
    .then((text) => parser.parseFromString(text, "text/html"))
    .then((res) => {
      const headEls = res.head.children;
      return Array.from(headEls)
        .map((v) => {
          const prop = v.getAttribute("property");
          if (!prop) return;
          return {
            prop: prop.replace("og:", ""),
            content: v.getAttribute("content"),
          };
        })
        .filter((v) => !!v);
    })
    .then((list) => {
      let type = "";
      let site_name = "";
      let title = "";
      let desc = "";
      let url = "";
      let imageUrl = "";
      for (const obj of list) {
        switch (obj.prop) {
          case "type":
            type = obj.content;
            break;
          case "site_name":
            site_name = obj.content;
            break;
          case "title":
            title = obj.content;
            break;
          case "url":
            url = obj.content;
            break;
          case "image":
            imageUrl = obj.content;
            break;
          case "description":
            desc = obj.content;
            break;
          default:
            break;
        }
      }
      res.status(200).json({
        ogpData: {
          imageUrl: imageUrl,
          siteName: site_name,
          title: title,
          desc: desc,
          siteUrl: url,
        },
      });
    });
};
export default handler;
