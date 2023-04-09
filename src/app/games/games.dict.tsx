import TTT from "./tic.tac.toe";

import TicTacToe from "@/games/TicTacToe/Game";

import type { Games, Room } from "@/types";

const gamesDict:{
  [key:string]:{
    label:string,
    startGame?:(currentData:Games.TicTacToe)=>React.ReactNode;
    startData?:any;
    component?:React.ReactNode
  }
} = {
  "TicTacToe":{
    label:"Tic Tac Toe",
    component:<TicTacToe/>
  },
  "ttt":{
    label:"Tic Tac Toe (old)",
    startGame:(currentData)=>{
      return <TTT {...{
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
