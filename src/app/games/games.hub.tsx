"use client"
import type { Room } from "@/types"
import styles from "@/app/games/games.hub.module.css"

import { useState, useEffect } from "react"

import { db } from "@/firebase/client"
import { onSnapshot, doc, updateDoc } from "firebase/firestore"

import { ToastContainer, toast } from 'react-toastify'

import request from "@/api"
import gamesDict from "@/app/games/games.dict"

export default function GamesHub({ roomData }:{ roomData: Room.Item }){

  const [room, setRoom] = useState<Room.Item>({
    ...roomData
  });
  console.log(room, "games");

  const startRoomRealTime = async ()=>{
    console.log({ room })

    const data = await request({
      method:"PUT",
      url:`${process.env.NEXT_PUBLIC_API_URL}/api/room/${room.id}`,
      headers:{
        Authorization:`Bearer ${localStorage.getItem("token")}`
      }
    });
    console.log({data})
    //TODO unsuscribe on close
    const unRoom = onSnapshot(doc(db, "rooms", room.id), (doc) => {
      const data = doc.data();
      if(!data){
        //TODO handle errors;
        return toast.error("Can't update game")
      }
      setRoom({
        ...room,
        ...data,
      });
    });
  }

  const changeGame = async (game:string)=>{
    await updateDoc(doc(db, "rooms", room.id),{
      game:game
    })
  }

  useEffect(()=>{
    startRoomRealTime();
  },[])

  return(
    <>
      <div className={styles.gamesHub}>
        <h2>Games</h2>
        <span>Leader: {room.leader}</span>
        {!(gamesDict[room.game]) ? Object.keys(gamesDict).map(game=>{
          const { label } = gamesDict[game];

          return (
            <div key={game} className={styles.gameIcon} onClick={()=>changeGame(game)}>
              {label}
            </div>
          )
        }) : (gamesDict[room.game].gameComponent)}

      </div>

      <ToastContainer position="bottom-right"/>
    </>
  )
}
