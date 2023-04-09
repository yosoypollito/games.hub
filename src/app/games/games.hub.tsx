"use client"
import type { Room } from "@/types"
import styles from "@/app/games/games.hub.module.css"

import { useEffect } from "react"

import { db } from "@/firebase/client"
import { onSnapshot, doc } from "firebase/firestore"

import toast, { Toaster } from "react-hot-toast"

import gamesDict from "./games.dict"
import GameSelection from "./GameSelection"

import { useAppSelector, useAppDispatch } from "@/redux/hooks"
import { selectRoom, fetchRoom, updateRoom } from "@/redux/slices/room"

import RoomInformation from "@/games/RoomInformation"
import UserList from "./user.list"

export default function GamesHub({ id }:{ id:string }){
  const dispatch = useAppDispatch();

  const roomStatus = useAppSelector(state=>state.room.status);

  useEffect(()=>{
    if(roomStatus === 'idle'){
      dispatch(fetchRoom(id));
    }
  },[roomStatus, dispatch, id])

  if(roomStatus === 'loading'){
    return <>Getting room information</>
  }

  if(roomStatus === 'succeeded'){
    return <Room/>
  }

  if(roomStatus === 'failed'){
    return <>Error getting room information</>
  }
}

export function Room(){

  const dispatch = useAppDispatch();
  const room = useAppSelector(selectRoom);

  useEffect(()=>{

    const unRoom = onSnapshot(doc(db, "rooms", room.id), (doc) => {
      const newData = doc.data();
      if(!newData){
        //TODO handle errors;
        return toast.error("Can't update game")
      }

      dispatch(updateRoom({
        ...newData,
      }))
    });

    return ()=>{
      //TODO unsuscribe firebase/handle disconnect

    }

  },[dispatch, room.id])

  return(
    <>
      <div className={styles.gamesHub}>
        <h2>Games</h2>
        <UserList/>
        <RoomInformation/>
        { !(gamesDict[room.game]) 
          ? <GameSelection/>
          : gamesDict[room.game].component}

      </div>

      <Toaster position="bottom-right"/>
    </>
  )
}
