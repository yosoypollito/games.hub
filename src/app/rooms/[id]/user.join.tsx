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

  if(userState === 'loading'){
    return <>Getting User 🔃</>
  }

  if(userState === 'succeeded' && user.data == null){
    //TODO redirect or create user
    return <CreateAccount id={id}/>
  }

  if(userState === 'joining.to.room'){

    return(
      <>Joining to room</>
    )
  }

  if(userState === 'joined.to.room'){

    return (
      <GamesHub id={id}/>
    )
  }

  if(userState === 'join.to.room.failed'){
    return (
      <>Cant Join To Room</>
    )
  }

}
