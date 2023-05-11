"use client";
import CreateAccount from "./CreateAccount";
import useUser from "@/hooks/useUser";
import Loading from "@/components/Loading";

export default function RoomHub() {
  const { status, error } = useUser();
  return (
    <>
      {status === "loading" && <Loading />}
      {(status === "error" && error) && <div>{error}</div>}
      {status === "succeeded" && <CreateAccount />}
    </>
  );
}
