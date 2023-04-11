"use client";

import RoomButton from "./RoomButton";

export default function InviteFriend({ params }: { params: { id: string } }) {
  const copyUrl = () => {
    const url = `${window.location.origin}/rooms/${id}`;
    navigator.clipboard.writeText(url);
  };

  const { id } = params;
  return (
    <div>
      <RoomButton onClick={copyUrl}>Invite your friends</RoomButton>
    </div>
  );
}
