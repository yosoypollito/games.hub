"use client";
import { Room } from "@/types";
import UserInit from "../UserInit";
import GamesHub from "@/app/games/games.hub";

export default function Hub({ params }: { params: { id: Room.Id } }) {
  return (
    <UserInit>
      <GamesHub id={params.id} />
    </UserInit>
  );
}
