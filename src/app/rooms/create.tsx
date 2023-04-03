"use client"

import { useRouter } from "next/navigation";

interface Room {
  status:number;
  room:string;
}

import request from "@/api";

import styles from "@/app/rooms/create.room.module.css"

export default function CreateRoom(){
  const router = useRouter();

  const create = async ()=>{
    const data = await request<Room>({
      url:"/api/room",
      method:"POST"
    });

    if(!data) return;

    router.push(`rooms/${data.room}`)
  }

  return (
    <button onClick={create} className={styles.createRoom}>Create room</button>
  )
}
