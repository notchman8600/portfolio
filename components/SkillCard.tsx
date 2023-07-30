import React from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";

interface SkillCardProps {
  title: string;
  desc: string;
  url: string;
}

export const SkillCard = (props: SkillCardProps) => {
  return (
      <div className={styles.card}>
        <h2>{props.title} &rarr;</h2>
        <p>{props.desc}</p>
      </div>
  );
};

export const SkillCardWithLink = (props: SkillCardProps) => {
  return (
    <Link href={props.url} className={styles.link}>
      <SkillCard title={props.title} desc={props.desc} url={props.url}></SkillCard>
    </Link>
  )
}
