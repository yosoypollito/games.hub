import { Games, User } from "@/types";
import { PICKS, ICONS } from "./constants";

import { useAppDispatch } from "@/redux/hooks";

import toast from "react-hot-toast";
import { updateGame } from "@/redux/slices/room";
import cn from "classnames";
import { increment, UpdateData } from "firebase/firestore";
import { checkWinner } from "./logic";

interface PickProps {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  children: React.ReactNode;
  className?: string;
}

export const Pick = ({ onClick, children, className }: PickProps) => {
  return (
    <div
      className={cn(
        "flex cursor-pointer items-center rounded-full border-2 border-white p-2.5 transition-all hover:scale-110 hover:bg-white hover:text-blue dark:hover:text-red",
        className
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default function Picks({
  players,
  user,
  turns,
}: {
  players: Games.RPS.Players;
  user: User.Item;
  turns: Games.RPS.Turns;
}) {
  const dispatch = useAppDispatch();

  const ChoosePick = (type: keyof typeof PICKS) => {
    const playerIndex = players.indexOf(user.uid);
    if (playerIndex === -1) {
      return toast.error("You are not playing");
    }

    const turnKey = playerIndex === 1 ? "two" : "one";
    const pick = PICKS[type];

    const opponentKey = turnKey === "one" ? "two" : "one";

    let newGameData: UpdateData<any> = {
      [`gameData.turns.${turnKey}`]: pick,
    };

    const newTurns = {
      ...turns,
    };
    newTurns[turnKey] = pick;

    const winner = checkWinner({ turns: newTurns });

    if (newTurns[turnKey] !== null && newTurns[opponentKey] !== null) {
      if (winner !== null) {
        newGameData = {
          ...newGameData,
          [`gameData.scoreboard.${
            winner === newTurns[turnKey] ? turnKey : opponentKey
          }`]: increment(1),
        };
      }
    }

    dispatch(
      updateGame({
        ...newGameData,
      })
    );
  };

  return (
    <div className="flex w-full flex-row justify-center gap-10">
      <Pick onClick={() => ChoosePick("SCISSORS")}>
        {ICONS[PICKS.SCISSORS]}
      </Pick>
      <Pick onClick={() => ChoosePick("PAPER")}>{ICONS[PICKS.PAPER]}</Pick>
      <Pick onClick={() => ChoosePick("ROCK")}>{ICONS[PICKS.ROCK]}</Pick>
    </div>
  );
}
