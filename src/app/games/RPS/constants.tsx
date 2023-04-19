import {
  IconScissors,
  IconBrandTelegram,
  IconDiamond,
} from "@tabler/icons-react";

export enum PICKS {
  SCISSORS = "S",
  ROCK = "R",
  PAPER = "P",
}

export const ICONS = {
  [PICKS.SCISSORS]: <IconScissors size={24} />,
  [PICKS.ROCK]: <IconDiamond size={24} />,
  [PICKS.PAPER]: <IconBrandTelegram size={24} />,
};
