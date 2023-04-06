import { NextResponse } from "next/server";

import { getTokenPayloadFromRequest } from "@/app/api/auth/token";

import { db } from "@/firebase/admin"

interface RoomParams{
	params:{
		id:string;
	}
}

export async function GET(request:Request, { params }:RoomParams){
	try{
		const { id } = params;

		if(!id){
			return NextResponse.redirect("/")
		}

		const roomDoc = db.doc(`rooms/${params.id}`);
		const roomsFound = await db.getAll(roomDoc);

		const roomSnap = roomsFound[0] || null;


		if(roomSnap == null){
			return NextResponse.json({
				room:null,
				message:"Room not found"
			})
		}

		const roomData = roomSnap.data();

		if(!roomData){
			return NextResponse.json({
				room:null,
				message:"Room data not found"
			})
		}

		const room = {
			...roomData,
			id
		}

		return NextResponse.json({
			status:200,
			room,
		});

	}catch(e:any){
		console.log(e?.message)
		return NextResponse.json({
			status:404,
			error:"Cant create room"
		})
	}
}

export async function PUT(req:Request, { params }:RoomParams){
	try{
		const body = req.body;

		const payload = await getTokenPayloadFromRequest(req);

		if(!payload){
			return NextResponse.json({
				message:"Auth token not found or invalid"
			})
		}

		const roomData = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/room/${params.id}`).then(r=>r.json());

		if(!roomData.room){
			return NextResponse.json(roomData);
		}

		const room = roomData.room;

		const roomDoc = db.doc(`rooms/${params.id}`);

		if(!body){
			//Assign new leader
			let newLead = payload.uid;

			if(room.leader != ""){
				newLead = room.leader;
			}

			roomDoc.set({
				players:[...room.players, payload.uid],
				newLead
			})

			return NextResponse.json({
				message:"User added to players and/or leader changed"
			})
		}

		return NextResponse.json({
			status:200,
			room:room
		})
	}catch(e){
		return NextResponse.json({
			message:"Invalid Auth token"
		})
	}
}  
