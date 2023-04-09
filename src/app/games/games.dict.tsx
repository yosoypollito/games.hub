import TicTacToe from "@/games/TicTacToe/Game";

import type { Room } from "@/types";

import { TURNS } from "./TicTacToe/constants";


const gamesDict:{
  [key:string]:{
    label:string,
    component:React.ReactElement | undefined
    initState:Room.gameData
  }
} = {
  "TicTacToe":{
    label:"Tic Tac Toe",
    component:<TicTacToe/>,
    initState:{
      board:Array(9).fill(null),
      turn:TURNS.X,
      winner:null,
      lastTurn:null
    }
  }
}

export default gamesDict;
