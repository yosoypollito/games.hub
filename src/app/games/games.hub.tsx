"use client"
import type { Room } from "@/types"
import styles from "@/app/games/games.hub.module.css"

import { useState, useEffect } from "react"

import { db } from "@/firebase/client"
import { onSnapshot, doc, updateDoc } from "firebase/firestore"

import { ToastContainer, toast } from 'react-toastify'

import gamesDict from "@/app/games/games.dict"

import UserList from "@/app/games/user.list";

import { useRoom } from "@/api";

export default function GamesHub({ id }:{ id:string }){

  const { data, error, isLoading } = useRoom(id);

  if(isLoading){
    return <>🚀 Loading your room 🚀</>
  }
  if(error){
    return <>some error</>
  }

  return(
    <>
      <Room {...{
        roomData:data.room
      }}/>
    </>
  )
}

export function Room({ roomData }:{ roomData: Room.Item }){

  const [room, setRoom] = useState<Room.Item>({
    ...roomData
  });
  console.log({room})

  const startRoomRealTime = async ()=>{
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
        <UserList players={room.players}/>
        <span>Leader: {room.players[room.leader].displayName}</span>
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
