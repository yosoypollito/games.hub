"use client";

import Button from "@/app/components/Button";
import { useAppSelector } from "@/redux/hooks";
import { selectRoom } from "@/redux/slices/room";

import { toast } from "react-hot-toast";

export default function InviteFriend() {
  const room = useAppSelector(selectRoom);

  const copyUrl = () => {
    const url = `${window.location.origin}/rooms/${room.id}`;
    navigator.clipboard.writeText(url);
    toast.success("Copied");
  };

  return <Button onClick={copyUrl}>Invite your friends</Button>;
}
