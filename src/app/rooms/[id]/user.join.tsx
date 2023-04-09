"use client"
import { useEffect } from "react";


import GamesHub from "@/app/games/games.hub";
import CreateAccount from "@/app/rooms/create.account";

import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { selectUser, fetchUser, userJoinToRoom } from "@/redux/slices/user";

export default function UserJoin({ id }:{ id:string }){

  const dispatch = useAppDispatch();

  const user = useAppSelector(selectUser);
  const userState = useAppSelector(state => state.user.status)

  useEffect(()=>{
    if(userState == 'idle'){
      dispatch(fetchUser())
    }

    if(id){
      if(userState === 'succeeded' && user !== null){
        dispatch(userJoinToRoom(id))
      }
    }
  },[userState, dispatch, user, id])

  return (
    <>
      {userState === 'loading' && <>Getting User 🔃</>}
      {userState === 'succeeded' && user == null && <CreateAccount id={id}/>}
      {userState === 'joining.to.room' && <>Joining to room</>}
      {userState === 'joined.to.room' && <GamesHub id={id}/>}
      {userState === 'join.to.room.failed' && <>Cant join to room</>}
    </>
  )

}
