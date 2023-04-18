"use client";

import { useAppSelector } from "@/redux/hooks";
import { selectRoom } from "@/redux/slices/room";

import ActionButton from "./ActionButton";
import { toast } from "react-hot-toast";
import { IconLink } from "@tabler/icons-react";

export default function InviteFriend() {
  const room = useAppSelector(selectRoom);

  const copyUrl = () => {
    const url = `${window.location.origin}/rooms/${room.id}`;
    navigator.clipboard.writeText(url);
    toast.success("Copied");
  };

  return (
    <ActionButton onClick={copyUrl}>
      <IconLink strokeWidth={2} size={24} />
    </ActionButton>
  );
}
