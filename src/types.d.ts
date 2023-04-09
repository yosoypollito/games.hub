export namespace Room{

	export type players = {
		[key:User.uid]:{
			uid:User.uid,
			displayName:User.displayName
		}
	}

	export interface Item{
		game:string;
		players:players;
		id:string;
		leader:string;
	}

	export type State = {
		leader:string;
		game:string;
		players:players;
		id:string;
	}

}

export namespace User{

	export type displayName = string | null;
	export type uid = string;

	export interface Item{
		uid:uid;
		displayName:displayName;
	}
}

export namespace Games{

	export type State = TicTacToe 

	export interface TTT extends Room.Item{
		gameData:{
			board:Array<number>;
			turn:User.Item;
			turns:Array<{
				uid:User.uid,
				position:number
			}>;
			nextTurnValue:number;
			playersNeeded:number;
			winner:User.Item | null
		}
	}
}

export type InitialState<T, S = {}> = {
	data:T;
	status: 'idle' | 'loading' | 'succeeded' | 'failed' | S;
	error: null | string
} 
