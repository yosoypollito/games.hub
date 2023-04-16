import { NextResponse } from "next/server";

import { getTokenPayloadFromRequest } from "@/app/api/auth/token";
import { db, auth } from "@/firebase/admin";

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

    const user = await auth.getUser(payload.uid);

    const room = await db.collection("rooms").add({
      game: "default",
      players: {
        [user.uid]: {
          displayName: user?.displayName || "",
          uid: user.uid,
        },
      },
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
