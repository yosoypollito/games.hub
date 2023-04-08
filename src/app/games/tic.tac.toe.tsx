"use client"
import type { Games } from "@/types"
import styles from "@/app/games/tic.tac.toe.module.css"

import { updateDoc, doc, arrayUnion } from "firebase/firestore";
import { db } from "@/firebase/client";

import { useEffect, useState } from "react";

import { useAuth } from "@/firebase/client";
import type { User } from "firebase/auth";


import toast from "react-hot-toast"

import gamesDict from "@/app/games/games.dict";

export default function TicTacToe({ gameData, players, id, leader }:Games.TicTacToe){

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

  const docRef = doc(db, "rooms", id);

  const useTurn = async (cell:number,i:number)=>{
    if(winner){
      return toast.warn("Some user already win")
    }
    if(cell != 0){
      return toast.error("You cant place in that cell");
    }

    if(!user?.uid){
      return toast.error("No user found");
    }

    if(turn.uid != user.uid){
      //TODO not your turn
      return toast.warn("Not your turn");
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
                  <svg className={styles.cross} viewBox="0 0 20 20">
                    <path fill="none" d="M11.469,10l7.08-7.08c0.406-0.406,0.406-1.064,0-1.469c-0.406-0.406-1.063-0.406-1.469,0L10,8.53l-7.081-7.08
                      c-0.406-0.406-1.064-0.406-1.469,0c-0.406,0.406-0.406,1.063,0,1.469L8.531,10L1.45,17.081c-0.406,0.406-0.406,1.064,0,1.469
                      c0.203,0.203,0.469,0.304,0.735,0.304c0.266,0,0.531-0.101,0.735-0.304L10,11.469l7.08,7.081c0.203,0.203,0.469,0.304,0.735,0.304
                      c0.267,0,0.532-0.101,0.735-0.304c0.406-0.406,0.406-1.064,0-1.469L11.469,10z"></path>
                  </svg>              )}
                {cell == 2 && (
                  <svg className={styles.circle} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <circle cx="12" cy="12" r="9" />
                  </svg>
                )}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
