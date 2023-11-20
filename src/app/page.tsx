import styles from "./page.module.scss";
import WordSearchBar from "@/shared/components/word-search-bar/word-search-bar.component";

export default function Home() {
  return (
      <main className={`${styles.main} ${styles.main__bg}`}>
        <h1 className={styles.main__title}>
          D-ctionary
        </h1>

        <h2 className={styles.main__subtitle}>
          Word meaning search
        </h2>

        <WordSearchBar />
      </main>
  );
}