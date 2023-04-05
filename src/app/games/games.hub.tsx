"use client"
import styles from "@/app/games/games.hub.module.css"

import { useState, useEffect } from "react"
import { onSnapshot, doc, updateDoc } from "firebase/firestore"
import { db } from "@/app/firebase/config"

import { ToastContainer, toast } from 'react-toastify'

import type { Room } from "@/types"

import TicTacToe from "./ttt/page"

const gamesDict:{
  [key:string]:{
    label:string,
    gameComponent:React.ReactNode
  }
} = {
  "ttt":{
    label:"Tic Tac Toe",
    gameComponent:<TicTacToe/>
  }
}

export default function GamesHub({ game, viewers, players, id }:Room.Item){

  const [room, setRoom] = useState<Room.Item>({
    game,
    viewers, 
    players,
    id
  });

  const roomDoc = doc(db, "rooms", room.id);

  const startFirebase = async ()=>{


    //TODO unsuscribe on close
    const unRoom = onSnapshot(roomDoc, (doc) => {
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
    startFirebase()
  },[])

  return(
    <>
      <div className={styles.gamesHub}>
        <h2>Games</h2>
        {room.game && gamesDict[room.game].gameComponent}
        {!(gamesDict[room.game]) && Object.keys(gamesDict).map(game=>{
          const { label } = gamesDict[game];

          return (
            <div key={game} className={styles.gameIcon} onClick={()=>changeGame(game)}>
              {label}
            </div>
          )
        })}

      </div>

      <ToastContainer position="bottom-right"/>
    </>
  )
}
