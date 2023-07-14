import Link from "next/link";
import ThemeButton from "@/app/components/theme.button";

import styles from "@/app/nav.bar.module.css";

export default function NavBar() {
  return (
    <nav className={styles.nav}>

      <ThemeButton />
      <div className="flex gap-4 [&>a:hover]:text-light-blue dark:[&>a]:text-red dark:[&>a]:font-semibold dark:[&>a:hover]:text-white">
        <Link href="/">Home</Link>
        <Link href="/rooms">Rooms</Link>
        <a href="https://www.buymeacoffee.com/daif" target="_blank" rel="noreferrer">Contribute</a>
      </div>
    </nav>
  );
}
