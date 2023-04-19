import type { Games } from "@/types";
import { PICKS } from "./constants";

export const checkWinner = ({ turns }: { turns: Games.RPS.Turns }) => {
  const { one, two } = turns;

  if (one === null || two === null) return;

  if (one === two) {
    //Draw
    return null;
  }

  if (
    (one === PICKS.SCISSORS && two === PICKS.PAPER) ||
    (one === PICKS.ROCK && two === PICKS.SCISSORS) ||
    (one === PICKS.PAPER && two === PICKS.ROCK)
  ) {
    return one;
  }

  return two;
};
