import { NextResponse } from "next/server";

import { db } from "@/app/firebase/admin";
import { getTokenPayloadFromRequest } from "@/app/api/auth/token";

export async function GET(request: Request) {
  try {
    return NextResponse.json({
      status: 200,
      message: "Create new room",
    });
  } catch (e) {
    return NextResponse.json({
      status: 404,
      error: "Cant create room",
    });
  }
}

export async function POST(req: Request) {
  try {
    const payload = await getTokenPayloadFromRequest(req);

    if (!payload) {
      return NextResponse.json({
        message: "Auth token not found or invalid",
      });
    }

    const room = await db.collection("rooms").add({
      game: "default",
      players: {},
      leader: payload.uid,
    });

    return NextResponse.json({
      status: 201,
      room: room.id,
    });
  } catch (e: any) {
    console.log(e.message);
    //TODO handle this errors
    return NextResponse.json({
      status: 500,
      error: "Cant create room",
    });
  }
}
