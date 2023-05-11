import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { useEffect } from "react"
import { fetchRoom, updateGame, updateRoom } from "@/redux/slices/room";

import { onSnapshot, doc } from "firebase/firestore";
import { db } from "@/firebase/client";

import toast, { Toaster } from "react-hot-toast";

export default function useRoom({ id }: {
  id?: string;
}) {
  const dispatch = useAppDispatch();
  const room = useAppSelector(state => state.room.data);
  const roomStatus = useAppSelector(state => state.room.status);
  const errorMessage = useAppSelector(state => state.room.error);

  useEffect(() => {
    if (id && roomStatus === 'idle') {
      dispatch(fetchRoom(id));
    }
  }, [dispatch, id, roomStatus])

  const changeGame = (game: string) => {
    dispatch(updateGame({ game: "default" }));
  }

  const subscribeRealTime = () => onSnapshot(doc(db, "rooms", room.id), (doc) => {
    const newData = doc.data();
    if (newData == null) {
      // TODO handle errors;
      return toast.error("Can't update game");
    }

    dispatch(
      updateRoom({
        ...newData,
      })
    );
  })

  return {
    room,
    status: roomStatus,
    error: errorMessage,
    actions: {
      changeGame,
      subscribeRealTime
    }
  }
}