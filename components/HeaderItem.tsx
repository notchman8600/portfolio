import Link from "next/link";
import styles from "../styles/Home.module.css";

interface Props {
  name: string;
  url: string;
}

export const HeaderItem = (props: Props) => {
  return (
    <Link href={props.url} className={styles.anchor}>
      {props.name}
    </Link>
  );
};
