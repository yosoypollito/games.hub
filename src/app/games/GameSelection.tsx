import gamesDict from "@/app/games/games.dict";
import styles from "@/app/games/games.hub.module.css";

import { useAppDispatch } from "@/redux/hooks";

import { updateGame } from "@/redux/slices/room";

export default function GameSelection() {
  const dispatch = useAppDispatch();

  return (
    <>
      {Object.keys(gamesDict).map((game) => {
        const { label } = gamesDict[game];

        return (
          <div
            key={game}
            className={styles.gameIcon}
            onClick={() => dispatch(updateGame({ game: game }))}
          >
            {label}
          </div>
        );
      })}
    </>
  );
}
