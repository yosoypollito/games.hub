"use client"

import { useRouter } from "next/navigation";

interface Room {
  status:number;
  room:string;
}

import request from "@/api";

import styles from "@/app/rooms/create.room.module.css"

import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

import { useAuth } from "@/firebase/client";
import { updateProfile } from "firebase/auth";

export default function CreateRoom(){
  const router = useRouter();

  const { anonSignIn, onAuthChange } = useAuth();

  const [displayName, setDisplayName] = useState<string>("");

  useEffect(()=>{

    onAuthChange().then(user=>{
      if(user){
        setDisplayName(user.displayName || "")
      }
    })

  },[])

  const create = async ()=>{

    //Login/create user and get user info
    await anonSignIn();
    const user = await onAuthChange();

    if(user){
      updateProfile(user,{
        displayName
      });
    }

    const data = await request<Room>({
      url:"/api/room",
      method:"POST",
      headers:{
        Authorization:`Bearer ${localStorage.getItem("token")}`
      }
    });

    if(!data?.room) return;

    router.push(`rooms/${data.room}`)
  }

  const changeDisplayName = (e:React.ChangeEvent<HTMLInputElement>)=>{
    const name = e.target.value;
    setDisplayName(name);
  }

  return (
    <div className={styles.create}>
      <input onChange={changeDisplayName} value={displayName}/>
      <button onClick={create} className={styles.createRoom}>Create room</button>
      <span>By clicking the button above you are allowing the creation of an anonymous account.</span>
      <ToastContainer position="bottom-right"/>
    </div>
  )
}
