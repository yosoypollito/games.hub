import { Games } from "@/types";

import { arrayUnion } from "firebase/firestore";
import { toast } from "react-hot-toast";
import useUser from "@/app/hooks/useUser";
import useRoom from "@/app/hooks/useRoom";

export default function JoinToGame() {
  const { user } = useUser();
  const { room, actions: { updateGameData } } = useRoom({});

  const gameData: Games.RPS.Item = room.gameData;

  const joinToPlayers = () => {
    if (gameData.players.length === 2) {
      return toast.error("No slots available");
    }

    if (!user) {
      return toast.error("No user");
    }

    updateGameData({
      "gameData.players": arrayUnion(user.uid),
    })
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
