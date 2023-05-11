import { useEffect } from "react";

import Board from "./Board";

import useRoom from "@/app/hooks/useRoom";

export default function Game() {
  const { status, actions: { startGame, updateGameData } } = useRoom({});

  useEffect(() => {
    startGame({
      game: "TicTacToe",
    })

    return () => {
      updateGameData({
        gameData: null,
      })
    };
  }, []);

  return (
    <>
      {status === "game.load.failed" && <>Error Game Load Failed</>}
      {status === "game.loaded" && <Board />}
      {status === "loading.game" && <>Loading Game</>}
    </>
  );
}
