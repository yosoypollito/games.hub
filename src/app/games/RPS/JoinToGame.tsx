import { Games } from "@/types";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

import { selectGameData } from "@/redux/slices/room";
import { selectUser } from "@/redux/slices/user";
import { updateGame } from "@/redux/slices/room";

import { arrayUnion } from "firebase/firestore";
import { toast } from "react-hot-toast";

export default function JoinToGame() {
  const dispatch = useAppDispatch();
  const gameData: Games.RPS.Item = useAppSelector(selectGameData);
  const user = useAppSelector(selectUser);

  const joinToPlayers = () => {
    if (gameData.players.length === 2) {
      return toast.error("No slots available");
    }

    if (!user) {
      return toast.error("No user");
    }

    dispatch(
      updateGame({
        "gameData.players": arrayUnion(user.uid),
      })
    );
  };

  return (
    <div className="flex h-full flex-col justify-center gap-10">
      <button
        className="flex items-center rounded-full border-2 border-white px-4 py-2 font-semibold hover:bg-white hover:text-blue dark:hover:text-red"
        onClick={joinToPlayers}
      >
        Join Game
      </button>
    </div>
  );
}
