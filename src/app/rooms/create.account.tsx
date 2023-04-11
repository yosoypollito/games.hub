"use client";
import styles from "@/app/rooms/create.account.module.css";

import { useRouter } from "next/navigation";
import { Auth } from "@/firebase/client";
import { useEffect, useState } from "react";

import request from "@/api";

import { updateProfile } from "firebase/auth";

import RoomButton from "./RoomButton";
import RoomInput from "./RoomInput";
import Label from "@/components/Label";

export default function CreateAccount({ id }: { id?: string }) {
  const router = useRouter();

  const [displayName, setDisplayName] = useState<string>("");

  const { anonSignIn, onAuthChange } = Auth();

  useEffect(() => {
    onAuthChange().then((user) => {
      if (user) {
        setDisplayName(user.displayName || "");
      }
    });
  }, []);

  const changeDisplayName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.value;
    setDisplayName(name);
  };

  const createUser = async () => {
    await anonSignIn();
    const user = await onAuthChange();

    if (user) {
      await updateProfile(user, {
        displayName,
      });
    }

    if (id) {
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
