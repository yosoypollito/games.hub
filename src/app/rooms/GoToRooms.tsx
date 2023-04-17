import Link from "next/link";

export default function GoToRooms() {
  return (
    <Link className="py-2 px-4 rounded-full border-amber-500 border-2" href="/rooms/">
      Go to rooms
    </Link>
  );
}
