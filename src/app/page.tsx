import styles from "@/app/page.module.css";

import GoToRooms from "@/app/rooms/components/GoToRooms";

import { monoton } from "@/constants";
export default function Home() {
  return (
    <main className={`${styles.center} flex flex-col gap-4m-auto`}>
      <header className="flex flex-col gap-2 items-center">
        <h1 className={`${monoton.className} text-5xl text-center leading-tight text-black dark:text-white`}>
          Instant fun with exciting mini games.
        </h1>
        <GoToRooms />
      </header>
    </main>
  );
}
