import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <a href="/dashboard/cow">
        <div>
          <div>cowcow</div>
        </div>
      </a>
    </main>
  );
}
