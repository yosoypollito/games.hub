import { useEffect } from "react"

import Board from "./Board"


import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { initGame } from "@/redux/slices/room";

export default function Game(){

  const dispatch = useAppDispatch();

  const roomStatus = useAppSelector(state=>state.room.status);

  useEffect(()=>{
    if(roomStatus === 'succeeded'){
      dispatch(initGame({
        game:"TicTacToe"
      }))
    }
  },[roomStatus, dispatch])

  return (
    <>
      {roomStatus === 'game.load.failed' && <>Error Game Load Failed</>}
      {roomStatus === 'game.loaded' && <Board/>}
      {roomStatus === 'loading.game' && <>Loading Game</>}
    </>
  )
}
