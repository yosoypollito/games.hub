export namespace Room {
  export interface players {
    [key: User.uid]: {
      uid: User.uid;
      displayName: User.displayName;
    };
  }

  export type Id = string;

  export type gameData = ReturnType<Games.TicTacToe | Games.RPS>;

  export interface Item {
    game: string;
    players: players;
    id: Id;
    leader: string;
    gameData?: gameData;
  }
}

export namespace User {
  export type displayName = string | null;
  export type uid = string;

  export interface Item {
    uid: uid;
    displayName: displayName;
  }
}

export namespace Games {
  export type State = TicTacToe;

  export interface TicTacToe {
    board: Array<null | string>;
    turn: string;
    lastTurn: User.Item | null;
    winner: null | false | string;
  }

  export interface RPS {
    players: {
      one: User.uid | null;
      two: User.uid | null;
    };
    scoreboard: {
      one: number;
      two: number;
    };
    turns: {
      one: null | string;
      two: null | string;
    };
  }
}

export interface InitialState<T, S = {}> {
  data: T;
  status: "idle" | "loading" | "succeeded" | "failed" | S;
  error: null | string;
}
