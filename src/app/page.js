import Image from "next/image";
import styles from "./page.module.css";
import Search from "../../components/SearchForm";
import SearchForm from "../../components/SearchForm";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>Cinema Vault</h1>
      <Search>Get Movie</Search>
    </div>
  );
}
