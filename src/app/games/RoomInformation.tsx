import { useAppSelector } from "@/redux/hooks";
import { selectRoom } from "@/redux/slices/room";

export default function RoomInformation() {
  const room = useAppSelector(selectRoom);

  return (
    <>
      <span>Leader: {room.players[room.leader].displayName}</span>
    </>
  );
}
