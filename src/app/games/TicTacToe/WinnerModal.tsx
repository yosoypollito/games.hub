import styles from "./TicTacToe.module.css";

import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { selectGameData, initGame } from "@/redux/slices/room";

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
      <div className={styles.textWinner}>
        <h2>{winnerText}</h2>
        <header>{game.winner && <span>{game.winner}</span>}</header>

        <footer>
          <button
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
          </button>
        </footer>
      </div>
    </section>
  );
}
