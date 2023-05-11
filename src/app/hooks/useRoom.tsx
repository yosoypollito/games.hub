import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { useEffect } from "react"
import { fetchRoom, selectRoom, updateGame, updateRoom, userLeaveRoom } from "@/redux/slices/room";

import { onSnapshot, doc } from "firebase/firestore";
import { db } from "@/firebase/client";

import toast from "react-hot-toast";
import { Games } from "@/types";

export default function useRoom({ id, subscribeRealTime }: {
  id?: string;
  subscribeRealTime?: boolean;
}) {
  const dispatch = useAppDispatch();
  const room = useAppSelector(selectRoom);
  const roomStatus = useAppSelector(state => state.room?.status);
  const errorMessage = useAppSelector(state => state.room?.error);

  useEffect(() => {
    if (id && roomStatus === 'idle') {
      dispatch(fetchRoom(id));
    }
  }, [dispatch, id, roomStatus])

  const changeGame = (game: string) => {
    dispatch(updateGame({ game }));
  }

  const realTime = () => onSnapshot(doc(db, "rooms", room.id), (doc) => {
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

  useEffect(() => {
    if (room.id && subscribeRealTime) {

      const unRoom = realTime();

      const leave = () => {
        unRoom();
        //TODO send you leave from room
        leaveRoom();
      };

      window.addEventListener("beforeunload", leave);

      return () => {
        // TODO unsuscribe firebase/handle disconnect
        window.removeEventListener("beforeunload", leave);
        leave();
      };
    }
  }, [room.id, subscribeRealTime]);

  const leaveRoom = () => dispatch(userLeaveRoom(room.id))

  const updateGameData = (gameData: Games.State) => dispatch(updateGame(gameData));

  return {
    room,
    status: roomStatus,
    error: errorMessage,
    actions: {
      changeGame,
      leaveRoom,
      updateGameData
    }
  }
}