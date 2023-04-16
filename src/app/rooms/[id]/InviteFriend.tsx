"use client";

import RoomButton from "../RoomButton";
import { useAppSelector } from "@/redux/hooks";
import { selectRoom } from "@/redux/slices/room";

export default function InviteFriend() {
  const room = useAppSelector(selectRoom);

  const copyUrl = () => {
    const url = `${window.location.origin}/rooms/${room.id}`;
    navigator.clipboard.writeText(url);
  };

  return (
    <div>
      <RoomButton onClick={copyUrl}>Invite your friends</RoomButton>
    </div>
  );
}
