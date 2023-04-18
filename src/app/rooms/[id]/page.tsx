"use client";
import { Room } from "@/types";
import { useEffect } from "react";

import GamesHub from "@/app/games/games.hub";
import CreateAccount from "../CreateAccount";

import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { selectUser } from "@/redux/slices/user";
import { selectRoom, fetchRoom } from "@/redux/slices/room";

export default function Hub({ params }: { params: { id: Room.Id } }) {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const room = useAppSelector(selectRoom);

  const roomStatus = useAppSelector((state) => state.room?.status);
  console.log({ room });

  useEffect(() => {
    dispatch(fetchRoom(params.id));
  }, []);
  //TODO create components for loading and failed status

  if (roomStatus === "failed") {
    return <>Loading room failed</>;
  }

  if (roomStatus === "loading") {
    return <>Loading room</>;
  }

  if (user && room) {
    return <GamesHub room={room} />;
  }

  return <CreateAccount id={params.id} />;
}
