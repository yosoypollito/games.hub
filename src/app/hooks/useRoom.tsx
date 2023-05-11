import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { useEffect } from "react"
import { fetchRoom } from "@/redux/slices/room";

export default function useRoom({ id }: {
  id: string;
}) {
  const dispatch = useAppDispatch();
  const room = useAppSelector(state => state.room.data);
  const roomStatus = useAppSelector(state => state.room.status);
  const errorMessage = useAppSelector(state => state.room.error);

  useEffect(() => {
    dispatch(fetchRoom(id));
  }, [dispatch, id])

  return {
    room,
    status: roomStatus,
    error:errorMessage
  }
}