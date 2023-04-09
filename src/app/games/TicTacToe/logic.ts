import { WINNER_COMBOS } from "./constants";

//TODO change types to correctly handling
export const checkWinner = (boardToCheck:Array<null | string>)=>{
  for(const combo of WINNER_COMBOS){
    const [a, b, c] = combo

    if( 
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
    ){
      return boardToCheck[a];
    }
  }

  return null;
}

export const checkEndGame = (newBoard:Array<null | string>)=>{
  return newBoard.every((square)=> square !== null);
}
