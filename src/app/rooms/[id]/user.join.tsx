"use client"
import { useEffect, useState} from "react";

import { useAuth } from "@/app/firebase/client";

import GamesHub from "@/app/games/games.hub";
import CreateAccount from "@/app/rooms/create.account";

import request from "@/api";

import { useRouter } from "next/navigation";

export default function UserJoin({ id }:{ id:string }){

  const router = useRouter();

  const { onAuthChange, updateToken } = useAuth();


  const [userLoaded, setUserLoaded] = useState("create");

  const startUser = async ()=>{
    const token = localStorage.getItem("token");

    if(token == null){
      console.log('token null')
      return;
    }
    const user = await onAuthChange();

    if(!id){
      console.log("No id provided to join");
      return router.push("/");
    }

    await request({
      method:"PUT",
      url:`${process.env.NEXT_PUBLIC_API_URL}/api/room/${id}`,
      headers:{
        "Content-Type":"application/json",
        Authorization:`Bearer ${localStorage.getItem("token")}`
      },
      data:{
        trans:"user.join"
      }
    });

    setUserLoaded("join.room");
  }

  useEffect(()=>{

    startUser();

  },[userLoaded]);

  if(userLoaded == "join.room"){
    return(
      <GamesHub id={id}/>
    )
  }

  if(userLoaded == "updating"){
    return (
      <>🔃 Iniciando 🔃</>
    )
  }

  return <CreateAccount id={id}/>
}
