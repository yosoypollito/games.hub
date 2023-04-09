"use client"
import InviteFriend from "@/app/rooms/invite.friend";

import styles from "@/app/rooms/[id]/room.hub.module.css"

import { Provider } from 'react-redux'
import store from '@/redux/store'

export default function Room({ params, children }:{ params:{ id:string }; children:React.ReactNode }){

  return (
    <Provider store={store}>
      <main className={styles.roomHub}>
        <InviteFriend params={params}/>

        {children}
      </main>
    </Provider>
  )
}
