"use client";
import { Room } from "@/types";
import styles from "@/app/rooms/create.account.module.css";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import request from "@/api";

import RoomButton from "./RoomButton";
import RoomInput from "./RoomInput";
import Label from "@/components/Label";

import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import {
  selectUser,
  createAccount,
  fetchUser,
  updateUser,
} from "@/redux/slices/user";
import { userJoinToRoom } from "@/redux/slices/room";

export default function CreateAccount({ id }: { id?: Room.Id }) {
  const router = useRouter();

  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const userState = useAppSelector((state) => state.user.status);

  useEffect(() => {
    if (userState === "idle") {
      dispatch(fetchUser());
    }
  }, []);

  useEffect(() => {
    if (user?.displayName) {
      setDisplayName(user.displayName);
    }
  }, [user]);

  const [displayName, setDisplayName] = useState<string>((): string => {
    if (user?.displayName) {
      return user.displayName;
    }

    return "";
  });

  const changeDisplayName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.value;
    setDisplayName(name);
  };

  const createUser = async () => {
    // Create user account or signin
    await dispatch(createAccount());

    if (!user) {
      await dispatch(fetchUser());
    }

    await dispatch(
      updateUser({
        displayName,
      })
    );

    if (id) {
      await dispatch(userJoinToRoom(id));
      return window.location.reload();
    }

    const data = await request<{
      status: number;
      room: string;
    }>({
      url: "/api/room",
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    if (!data?.room) return;

    router.push(`rooms/${data.room}`);
  };

  return (
    <div className={styles.create}>
      {id && (
        <span>
          First change your name until start playing with your friends
        </span>
      )}
      <div className={styles.roomForm}>
        <Label htmlFor="name">Name</Label>
        <RoomInput onChange={changeDisplayName} value={displayName} id="name" />
        <RoomButton onClick={createUser}>Create Room</RoomButton>
      </div>
      <span>
        By clicking the button above you are allowing the creation of an
        anonymous account.
      </span>
    </div>
  );
}
