import { styled } from "@linaria/react";
import type { StaticImageData } from "next/image";
import { StaticImage } from "@/components/StaticImage";

interface OgpCardLocalProps {
  url: string;
  imageUrl: StaticImageData;
  title: string;
  desc: string;
}

export const OgpCardLocal = (props: OgpCardLocalProps) => {
  return (
    <div>
      <a
        href={props.url}
        target={"_blank"}
        rel={"noopener noreferrer"}
        style={{ textDecoration: "none" }}
      >
        <RoundImageBox>
          <StaticImage
            src={props.imageUrl}
            width={544}
            height={306}
            alt={props.title}
            sizes="(max-width: 600px) calc(100vw - 8rem), (max-width: 768px) calc(100vw - 10rem), (max-width: 1312px) calc((100vw - 14rem) / 2), 544px"
            style={{
              objectFit: "cover",
              aspectRatio: "16/9",
              maxWidth: "100%",
              height: "auto",
            }}
          ></StaticImage>
          <ContentDesc>
            <ContentTitleBox>{props.title}</ContentTitleBox>
            <ContentDetailDesc>{props.desc}</ContentDetailDesc>
          </ContentDesc>
        </RoundImageBox>
      </a>
    </div>
  );
};

const RoundImageBox = styled.div`
  border-radius: 0.25rem;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 10%), 0 4px 6px -4px rgb(0 0 0 / 10%);
  overflow: hidden;
  width: 544px;
  max-width: 100%;
`;
const ContentDesc = styled.div`  padding: 16px 6px;
`;

const ContentTitleBox = styled.div`  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.75rem;
  margin-bottom: 0.5rem;
`;

const ContentDetailDesc = styled.p`  --tw-text-opacity: 1;
  color: rgb(55 65 81 / var(--tw-text-opacity));
  font-size: 1rem;
  line-height: 1.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
