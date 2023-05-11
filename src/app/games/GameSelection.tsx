import gamesDict from "@/app/games/games.dict";
import styles from "@/app/games/games.hub.module.css";

import useRoom from "@/hooks/useRoom";

export default function GameSelection() {

  const { actions:{ changeGame } } = useRoom({});

  return (
    <>
      {Object.keys(gamesDict).map((game) => {
        const { label } = gamesDict[game];

        return (
          <div
            key={game}
            className={styles.gameIcon}
            onClick={() => changeGame(game)}
          >
            {label}
          </div>
        );
      })}
    </>
  );
}
