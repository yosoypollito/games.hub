import { Games } from "@/types";
import { PICKS } from "./constants";

import {
  IconScissors,
  IconBrandTelegram,
  IconDiamond,
} from "@tabler/icons-react";

interface PickProps {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  children: React.ReactNode;
}

const Pick = ({ onClick, children }: PickProps) => {
  return (
    <div
      className="flex cursor-pointer items-center rounded-full border-2 border-white p-2.5 transition-all hover:scale-110 hover:bg-white hover:text-blue dark:hover:text-red"
      onClick={onClick}
    >
      {children}
    </div>
  );
};

const Picks = () => {
  return (
    <div className="flex w-full flex-row justify-center gap-10">
      <Pick>
        <IconScissors size={24} />
      </Pick>
      <Pick>
        <IconBrandTelegram size={24} />
      </Pick>
      <Pick>
        <IconDiamond size={24} />
      </Pick>
    </div>
  );
};

const ScoreBoard = () => {
  return (
    <div className="flex w-full flex-row justify-between text-2xl">
      <span>0</span>
      <span>1</span>
    </div>
  );
};

export default function Game() {
  const ChoosePick = (pick: Games.RPS.PICKS) => {};

  return (
    <section className="border-grey-50 flex h-60 w-full flex-col items-center justify-between rounded-md border-2 bg-blue px-10 py-5 text-white shadow-md dark:bg-red">
      <ScoreBoard />
      <Picks />
      <h1 className="text-xl font-bold">Take your pick</h1>
    </section>
  );
}
