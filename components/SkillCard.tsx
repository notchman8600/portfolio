import React from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
interface SkillCardProps {
  title: string;
  desc: string;
  url: string;
}

export const SkillCard = (props: SkillCardProps) => {
  return (
    <div>
      <div className={styles.card}>
        <h2>{props.title} &rarr;</h2>
        <p>{props.desc}</p>
      </div>
    </div>
  );
};
