import { getDoc, doc } from "firebase/firestore";
import { db } from "@/app/firebase/config";
import { NextResponse } from "next/server";


export async function GET(request:Request, { params }:{ params:{ id: string } }){
	try{

		const { id } = params;

		if(!id){
			return NextResponse.redirect("/")
		}

		const roomSnap = await getDoc(doc(db, "rooms", params.id));

		if(!(roomSnap.exists())){
			return NextResponse.json({
				status:404,
				error:"Room not found"
			});
		}

		const roomData = roomSnap.data();

		const room = {
			id:roomSnap.id,
			players:roomData.players,
			viewers:roomData.viewers,
			game:roomData.game
		}

		return NextResponse.json({
			status:200,
			room,
			message:"hola"
		});

	}catch(e:any){
		console.log(e?.message)
		return NextResponse.json({
			status:404,
			error:"Cant create room"
		})
	}
}
