import styles from "./TicTacToe.module.css";

import RoomButton from "@/app/rooms/components/RoomButton";

import { TURNS } from "./constants";
import useRoom from "@/hooks/useRoom";

export default function WinnerModal() {

  const { room, actions: { startGame } } = useRoom({});
  const game = room.gameData;

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
            startGame({
              game: "TicTacToe",
              force: true,
            })
          }
        >
          Empezar de nuevo
        </RoomButton>
      </footer>
    </section>
  );
}
