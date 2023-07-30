import {HeaderItem} from "@/components/HeaderItem";
import styles from "../styles/Home.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <HeaderItem name={"Home"} url={"/"}/>
      <HeaderItem name={"Works"} url={"/works"}/>
      <HeaderItem name={"Contact"} url={"/contact"}/>
    </header>
  );
};
