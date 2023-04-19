import TicTacToe from "@/games/TicTacToe/Game";
import RPS from "@/games/RPS/Game";

import type { Room } from "@/types";

import { TURNS } from "./TicTacToe/constants";

const gamesDict: {
  [key: string]: {
    label: string;
    component: React.ReactElement | undefined;
    initState: Room.gameData;
  };
} = {
  TicTacToe: {
    label: "Tic Tac Toe",
    component: <TicTacToe />,
    initState: {
      board: Array(9).fill(null),
      turn: TURNS.X,
      winner: null,
      lastTurn: null,
    },
  },
  RPS: {
    label: "Rock Paper Scissors",
    component: <RPS />,
    initState: {
      players: [],
      scoreboard: {
        one: 0,
        two: 0,
      },
      turns: {
        one: null,
        two: null,
      },
    },
  },
};

export default gamesDict;
