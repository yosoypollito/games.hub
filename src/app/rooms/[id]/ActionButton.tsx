interface ActionButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
}

export default function ActionButton({ onClick, children }: ActionButtonProps) {
  return (
    <button className="transition-all hover:scale-110" onClick={onClick}>
      {children}
    </button>
  );
}
