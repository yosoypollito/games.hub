import type { Room } from "@/types";

import GamesHub from "@/app/games/games.hub"

import request from "@/api"


const getRoomData = async (id:string)=>{
  const room = await request<{ room:Room.Item }>({
    method:"GET",
    url:`http://localhost:3000/api/room/${id}`
  });

    if(!room){
      throw new Error("No room found")
    };
    return room;
}

export default async function RoomHub({ params }:{ params:{ id:string } }){

  const { room }:{ room:Room.Item } = await getRoomData(params?.id || "");


  return (
    <>
      <GamesHub {...{
        ...room,
      }}/>
    </>
  )
}
