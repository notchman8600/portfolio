import React, {useEffect, useState} from "react";
import Image from "next/image";
import {styled} from "@linaria/react";

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
      <a href={props.url} target={"_blank"} rel={"noopener noreferrer"}>
        <RoundImageBox>
          <Image
            className={"object-contain"}
            src={ogp.ogpData.imageUrl}
            width={512}
            height={384}
            alt={"OGP画像"}
            style={{
              objectFit: "cover",
              aspectRatio: "16/9",
            }}
          ></Image>
          <ContentDesc>
            <ContentTitleBox>{ogp.ogpData.title}</ContentTitleBox>
            <ContentDetailDesc>
              {ogp.ogpData.desc}
            </ContentDetailDesc>
          </ContentDesc>
        </RoundImageBox>
        {/*<button onClick={() => setCount(count + 1)}>Click me</button>*/}
      </a>
    </div>
  );
};


const RoundImageBox = styled.div`
  max-width: 96%;
  border-radius: 0.25rem;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
`
const ContentDesc = styled.div`
  padding: 16px 6px;
`

const ContentTitleBox = styled.div`
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`

const ContentDetailDesc = styled.p`
  --tw-text-opacity: 1;
  color: rgba(55, 65, 81, var(--tw-text-opacity));
  font-size: 1rem;
  line-height: 1.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`
