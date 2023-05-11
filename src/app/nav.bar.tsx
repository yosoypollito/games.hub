import Link from "next/link";
import ThemeButton from "@/app/components/theme.button";

import styles from "@/app/nav.bar.module.css";

export default function NavBar() {
  return (
    <nav className={styles.nav}>
      <Link href="/">Home</Link>
      <ThemeButton />
    </nav>
  );
}
