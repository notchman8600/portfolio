"use client";

import { styled } from "@linaria/react";
import Image from "next/image";
import React from "react";

interface ProfileProps {
  jaName: string;
  enName: string;
}

export const Profile = (props: ProfileProps) => {
  return (
    <ProfileBox>
      <Image
        src="/profile.jpg"
        width={256}
        height={256}
        alt={"プロフィール画像"}
        style={{
          objectFit: "cover",
          aspectRatio: "1/1",
          borderRadius: "9999px",
        }}
      />

      <NameBox>{props.jaName}</NameBox>
      <SummaryBox>
        <LinkText href={"https://www.wantedly.com/id/notchman8600"}>
          {" "}
          {props.enName}
        </LinkText>
      </SummaryBox>
      <SummaryBox>1999.8.15</SummaryBox>
      <LinkText href={"https://github.com/notchman8600/resume"}>
        {"職務経歴書はこちらから"}
      </LinkText>
    </ProfileBox>
  );
};

const ProfileBox = styled.div`
  text-align: center;
`;

const NameBox = styled.p`
  font-size: 1.5rem;
  line-height: 2rem;
  margin: 0.25rem 0;
`;

const SummaryBox = styled.p`
  font-size: 1rem;
  line-height: 1.5rem;
  margin: 0.25rem 0;
`;
const LinkText = styled.a`
  --tw-text-opacity: 1;
  color: rgb(96 165 250 / var(--tw-text-opacity));
  text-decoration: none;
`;
