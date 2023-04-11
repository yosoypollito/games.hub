import styles from "./TicTacToe.module.css";

import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { selectGameData, initGame } from "@/redux/slices/room";

import RoomButton from "@/app/rooms/RoomButton";

import { TURNS } from "./constants";

export default function WinnerModal() {
  const dispatch = useAppDispatch();
  const game = useAppSelector(selectGameData);

  if (!game) {
    return <>not game selected</>;
  }

  if (game.winner === null) return null;

  const winnerText = game.winner === false ? "Empate" : "Ganó";

  return (
    <section className={styles.winner}>
      <h2>{winnerText}</h2>
      <header>
        {game.winner && (
          <span>
            {game.winner === TURNS.X && "❌"}
            {game.winner === TURNS.O && "⭕"}
          </span>
        )}
      </header>

      <footer>
        <RoomButton
          onClick={() =>
            dispatch(
              initGame({
                game: "TicTacToe",
                force: true,
              })
            )
          }
        >
          Empezar de nuevo
        </RoomButton>
      </footer>
    </section>
  );
}
