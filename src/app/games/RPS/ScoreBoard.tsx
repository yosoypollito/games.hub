import type { Games, User } from "@/types";

interface ScoreBoardProps {
  scoreboard: Games.RPS.Scoreboard;
  players: Games.RPS.Players;
  user: User.Item;
}

const Score = ({ score, ownScore }: { score: number; ownScore: boolean }) => {
  return (
    <span className={`flex border-b-lime-500 p-1 ${ownScore && "border-b-2"}`}>
      {score}
    </span>
  );
};

export default function ScoreBoard({
  scoreboard,
  players,
  user,
}: ScoreBoardProps) {
  return (
    <div className="flex w-full flex-row justify-between text-2xl">
      <Score score={scoreboard.one} ownScore={players[0] === user.uid} />
      <Score score={scoreboard.two} ownScore={players[1] === user.uid} />
    </div>
  );
}
