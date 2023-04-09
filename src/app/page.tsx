"use client"
import Room from "./rooms/Room"

import styles from "@/app/page.module.css"

export default function Home() {

  return (
    <main className={styles.center}>
      <Room/>
    </main>
  )
}
