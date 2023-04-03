import { NextResponse } from "next/server";

import { addDoc, collection } from "firebase/firestore";
import { db } from "@/firebase/config";

export async function GET(request:Request){
	try{
		console.log('hola')

		return NextResponse.json({
			status:200,
			message:"hola"
		})
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
