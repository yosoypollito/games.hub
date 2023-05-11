import { Games } from "@/types";
import styles from "./TicTacToe.module.css";

import { toast } from "react-hot-toast";

import { TURNS } from "./constants";
import { checkWinner, checkEndGame } from "./logic";

import { UpdateData } from "firebase/firestore";

import Square from "./Square";
import WinnerModal from "./WinnerModal";
import useRoom from "@/app/hooks/useRoom";
import useUser from "@/app/hooks/useUser";

export default function Board() {
  const { room, actions: { updateGameData } } = useRoom({});
  const game: Games.TicTacToe = room.gameData;

  const { user } = useUser();

  if (!game || !user) {
    return <>not game selected</>;
  }

  const updateBoard = (i: number) => {
    const { board, turn, winner, lastTurn } = game;

    if (board[i] || winner) {
      toast.error("Cant play there");
      return;
    }

    if (lastTurn?.uid === user.uid || (!lastTurn && room.leader !== user.uid)) {
      return toast.error("Not your turn");
    }

    const newBoard = [...board];
    newBoard[i] = turn;

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;

    const gameDataChanges: UpdateData<any> = {
      "gameData.board": newBoard,
      "gameData.turn": newTurn,
      "gameData.lastTurn": user,
    };

    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      gameDataChanges["gameData.winner"] = newWinner;
    } else if (checkEndGame(newBoard)) {
      gameDataChanges["gameData.winner"] = false;
    }

    updateGameData(gameDataChanges)
  };

  return (
    <div className={styles.board}>
      {game.winner !== null ? (
        <WinnerModal />
      ) : (
        game.board.map((square: null | string, index: number) => {
          return (
            <Square key={index} index={index} updateBoard={updateBoard}>
              {square === TURNS.X && "❌"}
              {square === TURNS.O && "⭕"}
            </Square>
          );
        })
      )}
    </div>
  );
}
