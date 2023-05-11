import { useEffect } from "react";
import { Games } from "@/types";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { selectGameData, updateGame, initGame } from "@/redux/slices/room";
import { selectUser } from "@/redux/slices/user";
import Loading from "@/app/components/Loading";

import PlayerView from "./PlayerView";
import ScoreBoard from "./ScoreBoard";
import JoinToGame from "./JoinToGame";
import ActionButton from "@/app/rooms/[id]/components/ActionButton";

export default function Game() {
  const dispatch = useAppDispatch();
  const gameData: Games.RPS.Item = useAppSelector(selectGameData);
  const user = useAppSelector(selectUser);

  const resetTurns = () => {
    dispatch(
      updateGame({
        "gameData.turns": {
          one: null,
          two: null,
        },
      })
    );
  };

  useEffect(() => {
    dispatch(
      initGame({
        game: "RPS",
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

  if (!gameData || !user) {
    return <Loading />;
  }

  return (
    <section className="border-grey-50 flex h-60 w-full flex-col items-center justify-between rounded-md border-2 bg-blue px-10 py-5 text-white shadow-md dark:bg-red">
      {gameData.players.length === 2 || gameData.players.includes(user.uid) ? (
        <>
          <ScoreBoard
            players={gameData.players}
            user={user}
            scoreboard={gameData.scoreboard}
          />
          <PlayerView
            players={gameData.players}
            turns={gameData.turns}
            user={user}
          />
          {!(gameData.turns.one && gameData.turns.two) ? (
            <h1 className="text-xl font-bold">Take your pick</h1>
          ) : (
            <>
              <ActionButton onClick={resetTurns}>Rematch</ActionButton>
            </>
          )}
        </>
      ) : (
        <JoinToGame />
      )}
    </section>
  );
}
