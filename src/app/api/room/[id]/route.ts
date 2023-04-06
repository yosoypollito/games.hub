import { NextResponse } from "next/server";

import { getTokenPayloadFromRequest } from "@/app/api/auth/token";

import { db, auth } from "@/firebase/admin"
import { FieldValue, FieldPath } from "firebase-admin/firestore";

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

import { StringMappingType } from "typescript";

export async function PUT(req:Request, { params }:RoomParams){
	try{
		const body = await req.json();

		if(!body){
			return NextResponse.json({
				message:"No Body"
			})
		}

		const payload = await getTokenPayloadFromRequest(req);

		if(!payload){
			return NextResponse.json({
				message:"Auth token not found or invalid"
			})
		}

		const user = await auth.getUser(payload.uid);

		const roomData = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/room/${params.id}`).then(r=>r.json());

		if(!roomData.room){
			return NextResponse.json(roomData);
		}

		const room = roomData.room;

		const roomDoc = db.doc(`rooms/${params.id}`);
		//Assign new leader and/or add to players
		if(body.trans == "user.join"){
			let newLead = payload.uid;

			if(room.leader != ""){
				newLead = room.leader;
			}

			roomDoc.update({
				[`players.${user.uid}`]:{
					displayName:user?.displayName || "",
					uid:user.uid
				},
				leader:newLead
			})

			return NextResponse.json({
				message:"User added to players and/or leader changed"
			})
		}

		return NextResponse.json({
			status:200,
			room:room
		})
	}catch(e:any){
		console.log(e.message)
		return NextResponse.json({
			message:"Invalid Auth token"
		})
	}
}  
