import { NextResponse } from "next/server";

import { addDoc, collection } from "firebase/firestore";
import { db } from "@/app/firebase/config";

export async function GET(request:Request){
	try{
		return NextResponse.json({
			status:200,
			message:"Create new room"
		});
	}catch(e){
		return NextResponse.json({
			status:404,
			error:"Cant create room"
		})
	}
}

export async function POST(){
	try{
		const room = await addDoc(collection(db, "rooms"),{
			game:"",
			players:[],
			viewers:[]
		})

		return NextResponse.json({
			status:201,
			room:room.id
		});

	}catch(e){
		//TODO handle this errors
		return NextResponse.json({
			status:500,
			error:"Cant create room"
		});
	}
}
