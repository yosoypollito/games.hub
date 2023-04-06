export namespace Room{

	export type players = {
		[key:User.uid]:{
			uid:User.uid,
			displayName:User.displayName
		}
	}

	export interface Item{
		game:string;
		viewers:[];
		players:players;
		id:string;
		leader:string;
		gameData:any;
	}

}

export namespace User{

	export type displayName = string;
	export type uid = string;

	export interface Item{
		uid:uid;
		displayName:displayName;
	}
}

export namespace Games{

	export interface TicTacToe extends Room.Item{
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
