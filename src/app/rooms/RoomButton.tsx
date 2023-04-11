import styles from "./RoomButton.module.css";

interface RoomButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
}

export default function RoomButton({ onClick, children }: RoomButtonProps) {
  return (
    <button onClick={onClick} className={styles.roomButton}>
      {children}
    </button>
  );
}
