"use client";
import { Room } from "@/types";
import UserInit from "./UserInit";
import CreateAccount from "./CreateAccount";

export default function RoomHub({ params }: { params: { id: Room.Id } }) {
  return (
    <UserInit>
      <CreateAccount />
    </UserInit>
  );
}
