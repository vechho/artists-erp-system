import Dashboard from "./Dashboard";

import styles from "./layout.module.css";

export default function Layout({ children }: Props) {
  return (
    <>
      <Dashboard />
      <main className={styles.main}>{children}</main>
    </>
  );
}

interface Props {
  children: JSX.Element;
}
