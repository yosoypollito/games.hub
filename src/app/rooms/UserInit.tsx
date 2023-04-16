"use client";
import { useEffect } from "react";

import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { selectUser, fetchUser } from "@/redux/slices/user";

export default function UserInit({ children }: { children: React.ReactNode }) {
  const dispatch = useAppDispatch();

  const user = useAppSelector(selectUser);
  const userState = useAppSelector((state) => state.user.status);

  useEffect(() => {
    if (userState === "idle") {
      dispatch(fetchUser());
    }
  }, [userState, dispatch, user]);

  return (
    <>
      {userState === "loading" && <>Getting User 🔃</>}
      {userState === "succeeded" && children}
      {/* {userState === "joining.to.room" && <>Joining to room</>} */}
      {/* {userState === "joined.to.room" && <GamesHub id={id} />} */}
      {/* {userState === "join.to.room.failed" && <>Cant join to room</>} */}
    </>
  );
}
