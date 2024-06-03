import { Header } from "./components/Header";
import { Feed } from "./containers/Feed";

import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <Feed />
    </div>
  );
}
