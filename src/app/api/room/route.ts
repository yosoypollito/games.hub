import { NextResponse } from "next/server";

import { set, ref, push } from "firebase/database";
import { database } from "@/firebase/config";

export async function GET(request: Request){

	const room = push(ref(database, "rooms"))
	set(room,{
		game:"",
		players:[],
		viewers:[],
	});

	return NextResponse.json({
		status:201,
		room:room.key
	});
}
