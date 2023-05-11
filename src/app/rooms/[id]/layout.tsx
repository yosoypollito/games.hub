"use client";

import styles from "@/app/rooms/[id]/components/room.hub.module.css";

import { Provider } from "react-redux";
import store from "@/redux/store";

export default function Room({
  params,
  children,
}: {
  params: { id: string };
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      <main className={styles.roomHub}>{children}</main>
    </Provider>
  );
}
