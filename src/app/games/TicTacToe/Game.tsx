import { useEffect } from "react";

import Board from "./Board";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { initGame, updateGame } from "@/redux/slices/room";

export default function Game() {
  const dispatch = useAppDispatch();

  const roomStatus = useAppSelector((state) => state.room?.status);

  useEffect(() => {
    dispatch(
      initGame({
        game: "TicTacToe",
      })
    );

    return () => {
      dispatch(
        updateGame({
          gameData: null,
        })
      );
    };
  }, [dispatch]);

  return (
    <>
      {roomStatus === "game.load.failed" && <>Error Game Load Failed</>}
      {roomStatus === "game.loaded" && <Board />}
      {roomStatus === "loading.game" && <>Loading Game</>}
    </>
  );
}
