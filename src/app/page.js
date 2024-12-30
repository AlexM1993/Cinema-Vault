"use client";

import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const FetchMovie = () => {
    console.log("Sexy beast");
  };

  return (
    <div className={styles.page}>
      <h1>Hello world</h1>
      <button onClick={FetchMovie}>Get Movie</button>
    </div>
  );
}
