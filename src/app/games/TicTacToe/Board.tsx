import styles from "./TicTacToe.module.css";

import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { selectGameData, updateGame } from "@/redux/slices/room";

import { selectRoom } from "@/redux/slices/room";
import { selectUser } from "@/redux/slices/user";

import { toast } from "react-hot-toast";

import { TURNS } from "./constants";
import { checkWinner, checkEndGame } from "./logic";

import { UpdateData } from "firebase/firestore";

import Square from "./Square";
import WinnerModal from "./WinnerModal";

export default function Board() {
  const dispatch = useAppDispatch();
  const room = useAppSelector(selectRoom);
  const game = useAppSelector(selectGameData);

  const user = useAppSelector(selectUser);

  if (!game || !user) {
    return <>not game selected</>;
  }

  const updateBoard = (i: number) => {
    const { board, turn, winner, lastTurn } = game;

    if (board[i] || winner) {
      toast.error("Cant play there");
      return;
    }

    if (lastTurn?.uid == user.uid || (!lastTurn && room.leader != user.uid)) {
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

    dispatch(updateGame(gameDataChanges));
  };

  return (
    <div className={styles.board}>
      {game.board.map((square: null | string, index: number) => {
        return (
          <Square key={index} index={index} updateBoard={updateBoard}>
            {square}
          </Square>
        );
      })}

      <WinnerModal />
    </div>
  );
}
