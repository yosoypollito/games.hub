import { useAppSelector } from "@/redux/hooks";
import { useEffect, useState } from "react"

export default function useRoom({ id }: {
  id: string;
}) {
  const [loading, setLoading] = useState(true);
  const room = useAppSelector(state => state.room.data);

  useEffect(() => {

  }, [id])

  return {
    room,
    loading
  }
}