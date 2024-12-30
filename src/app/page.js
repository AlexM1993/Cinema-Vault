import Image from "next/image";
import styles from "./page.module.css";
import Button from "../../components/Button";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>Hello world</h1>
      <Button>Get Movie</Button>
    </div>
  );
}
