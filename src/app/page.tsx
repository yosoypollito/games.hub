import { Inter } from 'next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

import cn from "classnames"
import CreateRoom from '@/app/rooms/create'

export default function Home() {
  return (
    <main className={cn(styles.main, inter.className)}>
      <CreateRoom/>
    </main>
  )
}
