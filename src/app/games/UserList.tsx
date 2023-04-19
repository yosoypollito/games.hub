import type { User } from "@/types";

import { useAppSelector } from "@/redux/hooks";
import { selectRoom } from "@/redux/slices/room";
import { useState } from "react";

import { IconChevronDown, IconChevronUp, IconCrown } from "@tabler/icons-react";

const UserItem = ({ user, leader }: { user: User.Item; leader: string }) => {
  const { displayName, uid } = user;
  return (
    <div className="flex w-40 flex-row items-center justify-between gap-6 rounded-full border-2 bg-blue px-2 py-1 text-xs font-semibold tracking-wider text-white dark:bg-red">
      <span className="overflow-hidden text-ellipsis">{displayName}</span>
      {leader === uid && <IconCrown className="stroke-yellow-500" size={20} />}
    </div>
  );
};

export default function UserList() {
  const { players, leader } = useAppSelector(selectRoom);
  const [hide, setHide] = useState((): boolean => {
    const prevHide = localStorage.getItem("hideList");
    if (prevHide) {
      return prevHide === "true" ? true : false;
    }
    return false;
  });

  const changeHide = () => {
    setHide(!hide);
    window.localStorage.setItem("hideList", (!hide).toString());
  };

  return (
    <div
      className={`absolute bottom-full right-6 z-0 transform rounded-tl-md bg-white px-1 py-2 shadow-md transition-all ${
        hide && "translate-y-[100%] "
      }`}
    >
      <div className="absolute bottom-full right-0 flex items-center rounded-tl-md rounded-tr-md bg-white p-1">
        <button className="text-black" onClick={changeHide}>
          {hide ? <IconChevronUp size={20} /> : <IconChevronDown size={20} />}
        </button>
      </div>
      <div className="grid max-h-36 grid-flow-row auto-rows-[30px] flex-col overflow-y-auto">
        {Object.keys(players).map((user) => (
          <UserItem
            key={players[user].uid}
            {...{
              user: {
                ...players[user],
              },
              leader,
            }}
          />
        ))}
      </div>
    </div>
  );
}
