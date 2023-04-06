import TicTacToe from "./tic.tac.toe";

import type { Games, Room } from "@/types";

const gamesDict:{
  [key:string]:{
    label:string,
    startGame:(currentData:Games.TicTacToe)=>React.ReactNode;
    startData:any;
  }
} = {
  "ttt":{
    label:"Tic Tac Toe",
    startGame:(currentData)=>{
      return <TicTacToe {...{
        ...currentData
      }}/>
    },
    startData:{
      board:[0,0,0, 0,0,0, 0,0,0],
      playersNeeded:2,
      turn:0,
      turns:[],
      nextTurnValue:1,
    }
  }
}

export default gamesDict;
