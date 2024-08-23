import { Button } from "@/components";

import styles from "./dashboard.module.css";

export default function Dashboard() {
  return (
    <nav className={styles.nav}>
      <div>Logo</div>
      <div>Navigation</div>
      <div>
        <Button text="logout" />
      </div>
    </nav>
  );
}
