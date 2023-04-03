import CreateRoom from '@/app/rooms/create'

import styles from "@/app/page.module.css"

export default function Home() {
  return (
    <main className={styles.center}>
      <CreateRoom/>
    </main>
  )
}
