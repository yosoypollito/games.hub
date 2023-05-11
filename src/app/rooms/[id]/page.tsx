"use client";
import { Room } from "@/types";

import GamesHub from "@/app/games/games.hub";
import CreateAccount from "@/app/rooms/components/CreateAccount";

import useUser from "@/app/hooks/useUser";
import useRoom from "@/app/hooks/useRoom";

export default function Hub({ params }: { params: { id: Room.Id } }) {
  
  const { user } = useUser();
  const { room, status, error } = useRoom({
    id:params.id
  });
  //TODO create components for loading and failed status

  if (status === "failed") {
    return <>Loading room failed</>;
  }

  if (status === "loading") {
    return <>Loading room</>;
  }

  if (user && room && Object.keys(room.players).includes(user.uid)) {
    return <GamesHub room={room} />;
  }

  return <CreateAccount id={params.id} />;
}
