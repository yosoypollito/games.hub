import Link from "next/link";

export default function GoToRooms() {
  return (
    <Link
      className="transform rounded-full border-2 border-light-blue px-4 py-2 font-bold text-black shadow-md transition-all 
      hover:scale-105 hover:text-light-blue dark:border-red dark:text-white dark:hover:text-red"
      href="/rooms/"
    >
      Start Playing
    </Link>
  );
}
