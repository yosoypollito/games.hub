import type { Games, User } from "@/types";

import Picks, { Pick } from "./Picks";

import { PICKS, ICONS } from "./constants";

interface PlayerViewProps {
  players: Games.RPS.Players;
  turns: Games.RPS.Turns;
  user: User.Item;
}

const Picked = ({
  playerKey,
  pick,
}: {
  playerKey: "one" | "two";
  pick: string | null;
}) => {
  return (
    <Pick
      className={`transition-all ${
        playerKey === "one"
          ? "animate-[RPSPlayerOne_1s_ease-in-out_forwards]"
          : "animate-[RPSPlayerTwo_1s_ease-in-out_forwards]"
      }`}
    >
      {pick === PICKS.SCISSORS && ICONS.S}
      {pick === PICKS.PAPER && ICONS.P}
      {pick === PICKS.ROCK && ICONS.R}
    </Pick>
  );
};

export default function PlayerView({ players, turns, user }: PlayerViewProps) {
  const playerKey = players.indexOf(user.uid) === 1 ? "two" : "one";

  const playerPick = turns[playerKey];

  const opponentKey = playerKey === "one" ? "two" : "one";
  const opponentPick = turns[opponentKey];

  return (
    <>
      {playerPick !== null ? (
        <div className="relative flex w-full flex-row gap-10">
          <Picked playerKey={playerKey} pick={playerPick} />
          {turns[opponentKey] && (
            <Picked playerKey={opponentKey} pick={opponentPick} />
          )}
        </div>
      ) : (
        <Picks turns={turns} players={players} user={user} />
      )}
    </>
  );
}
