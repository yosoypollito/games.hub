"use client"
import GamesHub from "@/app/games/games.hub"
import InviteFriend from "@/app/rooms/invite.friend";

import { useEffect } from "react";

import styles from "@/app/rooms/[id]/room.hub.module.css"

export default function Room({ params }:{ params:{ id:string } }){

  useEffect(()=>{

  },[]);

  return (
    <main className={styles.roomHub}>
      <InviteFriend params={params}/>

        <GamesHub/>
    </main>
  )
}
