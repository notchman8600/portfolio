import React from "react";
import Image from "next/image";
import {styled} from "@linaria/react";

interface ProfileProps {
  jaName: string;
  enName: string;
}

export const Profile = (props: ProfileProps) => {
  return (
    <ProfileBox>
      <Image
        src="/profile.jpg"
        width={192}
        height={192}
        alt={"プロフィール画像"}
        style={{
          objectFit: "cover",
          aspectRatio: "1/1",
          borderRadius: "9999px",
        }}
      />

      <NameBox>{props.jaName}</NameBox>
      <SummaryBox>
        <LinkText
          href={"https://www.wantedly.com/id/notchman8600"}
        >
          {" "}
          {props.enName}
        </LinkText>
      </SummaryBox>
      <p>1999.8.15</p>
    </ProfileBox>
  );
};

const ProfileBox = styled.div`  text-align: center;
`;

const NameBox = styled.p`  font-size: 1.5rem;
  line-height: 2rem;
`;

const SummaryBox = styled.p`  font-size: 1rem;
  line-height: 1.5rem;
`
const LinkText = styled.a`  --tw-text-opacity: 1;
  color: rgb(96 165 250 / var(--tw-text-opacity));
  text-decoration: none;
`;
