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
      <a href={props.url} target={"_blank"}>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img
            className="object-contain h-64 w-128"
            src={ogp.ogpData.imageUrl}
            alt={""}
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{ogp.ogpData.title}</div>
            <p className="text-gray-700 text-base">{ogp.ogpData.desc}</p>
          </div>
        </div>
        {/*<button onClick={() => setCount(count + 1)}>Click me</button>*/}
      </a>
    </div>
  );
};
