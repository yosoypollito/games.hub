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
