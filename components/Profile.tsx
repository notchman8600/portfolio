import React from "react";
import Image from "next/image";

interface ProfileProps {
  jaName: string;
  enName: string;
}

export const Profile = (props: ProfileProps) => {
  return (
    <div className={"text-center"}>
      <Image
        className={"rounded-full"}
        src="/profile.jpg"
        width={256}
        height={256}
        objectFit="cover"
      />

      <p className={"text-2xl"}>{props.jaName}</p>
      <p className={"text-lg"}>
        <a
          className={"text-sky-600"}
          href={"https://www.wantedly.com/id/notchman8600"}
        >
          {" "}
          {props.enName}
        </a>
      </p>
      <p>1999.8.15</p>
    </div>
  );
};
