interface RoomInputProps {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  value?: string;
  id: string;
}

export default function RoomInput({ onChange, value, id }: RoomInputProps) {
  return <input onChange={onChange} value={value} id={id} />;
}
