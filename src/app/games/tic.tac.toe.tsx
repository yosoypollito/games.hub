"use client"
import type { Games } from "@/types"
import styles from "@/app/games/tic.tac.toe.module.css"

import { updateDoc, doc, arrayUnion } from "firebase/firestore";
import { db } from "@/firebase/client";

import { useEffect, useState } from "react";

import { useAuth } from "@/firebase/client";
import type { User } from "firebase/auth";

import { toast } from "react-toastify";

export default function TicTacToe({ gameData, players, id}:Games.TicTacToe){

  const { board, turn, turns, nextTurnValue, playersNeeded, winner } = gameData;

  const [user, setUser] = useState<User>();

  useEffect(()=>{
    const { onAuthChange } = useAuth();

    onAuthChange().then(user=>{
      if(user){
        setUser(user)
      }
    })
  },[])

  const useTurn = async (cell:number,i:number)=>{
    if(winner){
      return toast.warn("Some user already win")
    }
    if(cell != 0){
      return toast.error("You cant place in that cell");
    }

    if(!user){
      return toast.error("No user found");
    }

    if(turn.uid != user.uid){
      //TODO not your turn
      return toast.warn("Not your turn");
    }
    board[i] = nextTurnValue

    const newTurn = {
      uid:user.uid,
      position:i
    }

    const playersKeys = Object.keys(players);
    const myPosition = playersKeys.indexOf(user.uid);
    const oponnentPosition = myPosition == 1 ? 0 : 1;
    const oponnentInfo = players[playersKeys[oponnentPosition]];

    const nextUserTurn = {
      uid:oponnentInfo.uid,
      displayName:oponnentInfo.displayName
    }

    const nextValue = nextTurnValue == 1 ? 2 : 1;

    const wins = getWinner(board);
    let userWinner;
    if(wins.length > 0){
      userWinner = turns[wins[0]];
    }

    await updateDoc(doc(db, "rooms", id),{
      "gameData.board": board,
      "gameData.turns": arrayUnion(newTurn),
      "gameData.turn": nextUserTurn,
      "gameData.nextTurnValue": nextValue,
      "gameData.winner": userWinner || null
    })
  }

  const getWinner = (board:Array<number | string>):Array<number> =>{
    const winCombinations = [
      [0,1,2], [3,4,5], [6,7,8],
      [0,3,6], [1,4,7], [2,5,8],
      [0,4,8], [2,4,6]
    ];


    const wins:Array<number> = [];
    winCombinations.forEach(combination=>{
      const [one, two, three] = combination;

      if(board[one] > 0 && board[two] > 0 && board[three] > 0){
        if(board[one] == board[two] && board[two] == board[three] && board[one] == board[three]){
          wins.push(...[one, two, three])
        }
      }
    });

    return wins;
  }

  return(
    <div className={styles.tictactoe}>
      <div className={styles.tttGame}>
        {board.map((cell, index)=>{

          return(
            <div key={index} className={styles.cell} onClick={()=>useTurn(cell,index)}>
              {cell == 1 && "x"}
              {cell == 2 && "o"}
            </div>
          )
        })}
      </div>
      {(gameData.winner?.uid) && <>Winner {gameData.winner.uid}</>}
    </div>
  )
}
