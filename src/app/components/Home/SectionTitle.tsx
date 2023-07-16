import cn from "classnames"

import { monoton } from "@/constants";

type HeadLines = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
type SizesKeys = "big" | "medium" | "small" | "tiny";

type Sizes = {
  [key in SizesKeys]: string
}
export default function SectionTitle({ props, size, children, as = "h1" }: {
  props?: React.ComponentProps<"h1">;
  size?: SizesKeys;
  children: React.ReactNode;
  as?: HeadLines;
}) {
  const As = as;

  const sizes: Sizes = {
    "big": "text-5xl",
    "medium": "text-4xl",
    "small": "text-3xl",
    "tiny": "text-2xl"
  }

  return (
    <As className={cn(sizes[size || "big"], `text-center leading-tight text-black dark:text-white`, monoton.className)}
      {...props}>
      {children}
    </As>
  );
}