import TicTacToe from "./ttt/page"

const gamesDict:{
  [key:string]:{
    label:string,
    gameComponent:React.ReactNode
  }
} = {
  "ttt":{
    label:"Tic Tac Toe",
    gameComponent:<TicTacToe/>
  }
}

export default gamesDict;
