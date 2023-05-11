"use client";
import styles from "@/app/games/games.hub.module.css";

import { useCallback, useEffect } from "react";

import { Toaster } from "react-hot-toast";

import gamesDict from "./games.dict";
import GameSelection from "./GameSelection";

import ActionButton from "@/app/rooms/[id]/components/ActionButton";

import UserList from "./UserList";
import InviteFriend from "@/app/rooms/[id]/components/InviteFriend";

import { IconArrowBackUp } from "@tabler/icons-react";
import cn from "classnames";
import useRoom from "../hooks/useRoom";

const Actions = () => {
  const { room, actions: { changeGame } } = useRoom({});
  return (
    <div className={cn("relative w-full", styles.clipCustom)}>
      <div className="relative z-10 flex w-full flex-row justify-between gap-4 rounded-full border-2 border-white bg-blue px-4 py-2 text-white dark:bg-red">
        <ActionButton onClick={() => changeGame("default")}>
          <IconArrowBackUp strokeWidth={2} size={24} />
        </ActionButton>
        {gamesDict[room.game] && <h1>{gamesDict[room.game].label}</h1>}
        <InviteFriend />
      </div>

      <UserList />
    </div>
  );
};

export default function GamesHub() {

  const { room } = useRoom({ subscribeRealTime: true });

  return (
    <>
      <div className={styles.gamesHub}>
        {!gamesDict[room.game] ? (
          <GameSelection />
        ) : (
          gamesDict[room.game].component
        )}
      </div>
      <Actions />
      <Toaster position="bottom-right" />
    </>
  );
}
