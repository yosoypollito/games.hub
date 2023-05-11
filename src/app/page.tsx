import styles from "@/app/page.module.css";

import GoToRooms from "@/app/rooms/components/GoToRooms";

export default function Home() {
  return (
    <main className={styles.center}>
      <GoToRooms />
    </main>
  );
}
