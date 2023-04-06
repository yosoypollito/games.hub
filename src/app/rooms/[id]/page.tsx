"use client"
import GamesHub from "@/app/games/games.hub";

import { useRoom } from "@/api";

export default function RoomHub({ params }:{ params:{ id:string } }){

  const { data, error, isLoading } = useRoom(params.id);

  if(isLoading){
    return <>🚀 Loading your room 🚀</>
  }
  if(error){
    return <>some error</>
  }

  return (
    <>
      <GamesHub {...{
        roomData:data.room
      }}/>
    </>
  )
}
