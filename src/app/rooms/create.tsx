"use client"

import { useRouter } from "next/navigation";

interface Room {
  status:number;
  room:string;
}


import request from "@/api";

export default function CreateRoom(){
  const router = useRouter();

  const create = async ()=>{
    const data = await request<Room>({
      url:"/api/room",
      method:"GET"
    });

    if(!data) return;

    router.push(`rooms/${data.room}`)
  }

  return (
    <button onClick={create}>Create room</button>
  )
}
