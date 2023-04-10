import UserJoin from "@/app/rooms/[id]/user.join";

export default function RoomHub({ params }: { params: { id: string } }) {
  return <UserJoin id={params.id} />;
}
