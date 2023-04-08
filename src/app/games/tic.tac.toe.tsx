"use client"
import type { Games } from "@/types"
import styles from "@/app/games/tic.tac.toe.module.css"

import toast from "react-hot-toast"

import { updateDoc, doc, arrayUnion } from "firebase/firestore";
import { db } from "@/firebase/client";

import { useEffect, useState } from "react";

import type { User } from "firebase/auth";
import { useAuth } from "@/firebase/client";

import gamesDict from "@/app/games/games.dict";

import { RxCross2, RxCircle } from "react-icons/rx"

export default function TicTacToe({ gameData, players, id, leader }:Games.TicTacToe){

  const { board, turn, turns, nextTurnValue, winner } = gameData;

  const [user, setUser] = useState<User>();

  useEffect(()=>{
    const { onAuthChange } = useAuth();

    onAuthChange().then(user=>{
      if(user){
        setUser(user)
      }
    })
  },[])

  const docRef = doc(db, "rooms", id);

  const useTurn = async (cell:number,i:number)=>{
    if(winner){
      return toast.error("Some user already win")
    }
    if(cell != 0){
      return toast.error("You cant place in that cell");
    }

    if(!user?.uid){
      return toast.error("No user found");
    }

    if(turn.uid != user.uid){
      //TODO not your turn
      return toast.error("Not your turn");
    }
    board[i] = nextTurnValue

    const newTurn = {
      uid:user.uid,
      displayName:user.displayName,
      position:i
    }

    const playersKeys = Object.keys(players);
    const myPosition = playersKeys.indexOf(user.uid);
    const oponnentPosition = myPosition == 1 ? 0 : 1;
    const oponnentInfo = players[playersKeys[oponnentPosition]];

    if(!oponnentInfo){
      return toast.error("Waiting for opponent")
    }

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

    await updateDoc(docRef,{
      "gameData.board": board,
      "gameData.turns": arrayUnion(newTurn),
      "gameData.turn": nextUserTurn,
      "gameData.nextTurnValue": nextValue,
      "gameData.winner": userWinner || null
    })
  }

  const getWinner = (board:Array<number>):Array<number> =>{
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

  const resetGame = ()=>{
    if(!user){
      return toast.error("Cant get user for reset");
    }

    if(leader != user.uid){
      return toast.error("You are not the room leader")
    }

    updateDoc(docRef,{
      gameData:{
        ...gamesDict["ttt"].startData,
        turn:{
          uid:user.uid,
          displayName:user.displayName
        }
      }
    })
  }

  const goHub = ()=>{
    if(!user){
      return toast.error("Cant get user for reset");
    }

    if(leader != user.uid){
      return toast.error("You are not the room leader")
    }

    updateDoc(docRef,{
      game:"default"
    })
  }

  return(
    <div className={styles.tictactoe}>
      {(gameData.winner?.uid) ? (
        <div className={styles.winner}>
          <h1>Winner</h1>
          <span>{ gameData.winner.displayName }</span>
          <div className={styles.actions}>
            <button onClick={resetGame}>Rematch</button>
            <button onClick={goHub}>Go lobby</button>
          </div>
        </div>
      ) : (
        <div className={styles.tttGame}>
          {board.map((cell, index)=>{

            return(
              <div key={index} className={styles.cell} onClick={()=>useTurn(cell,index)}>
                {cell == 1 && (
                  <RxCross2 className={styles.cross} />
                )}
                {cell == 2 && (
                  <RxCircle className={styles.circle}/>
                )}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
