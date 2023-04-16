"use client";
import { Room } from "@/types";
import styles from "@/app/games/games.hub.module.css";

import { useEffect } from "react";

import { db } from "@/firebase/client";
import { onSnapshot, doc } from "firebase/firestore";

import toast, { Toaster } from "react-hot-toast";

import gamesDict from "./games.dict";
import Button from "../components/Button";
import GameSelection from "./GameSelection";

import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { selectRoom, updateRoom, updateGame } from "@/redux/slices/room";

import UserList from "./UserList";
import InviteFriend from "../rooms/[id]/InviteFriend";

import { IconArrowBadgeLeft } from "@tabler/icons-react";

export default function GamesHub({ room }: { room: Room.Item }) {
  const dispatch = useAppDispatch();

  console.log(room);
  useEffect(() => {
    if (room.id) {
      const unRoom = onSnapshot(doc(db, "rooms", room.id), (doc) => {
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
      });
    }

    return () => {
      // TODO unsuscribe firebase/handle disconnect
    };
  }, [dispatch, room.id]);

  const goBackToGames = () => {
    dispatch(
      updateGame({
        game: "default",
      })
    );
  };

  return (
    <>
      <div className={styles.actions}>
        <Button onClick={goBackToGames}>
          <IconArrowBadgeLeft strokeWidth={1.5} />
        </Button>
        {gamesDict[room.game] && <h1>{gamesDict[room.game].label}</h1>}
        <InviteFriend />
      </div>
      <div className={styles.gamesHub}>
        <UserList />
        {!gamesDict[room.game] ? (
          <GameSelection />
        ) : (
          gamesDict[room.game].component
        )}
      </div>
      <Toaster position="bottom-right" />
    </>
  );
}
