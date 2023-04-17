import Link from "next/link";
import ButtonStyles from "../components/Button.module.css";

export default function GoToRooms() {
  return (
    <Link className={ButtonStyles.button} href="/rooms/">
      Go to rooms
    </Link>
  );
}
