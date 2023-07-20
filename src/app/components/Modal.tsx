import cn from "classnames"
import { FC } from "react"

import { IconX } from '@tabler/icons-react';

type Open = boolean;

type PROPS = {
  children: React.ReactNode
  open?: Open
  handleClose: (open: Open) => void
}
const Modal: FC<PROPS> = ({ children, open = false, handleClose }) => {

  return (
    <div className={cn(!open && "hidden", "fixed flex justify-center items-center left-0 top-0 w-full h-full")}>
      <div className="z-10 absolute w-full h-full bg-black/70" onClick={() => handleClose(false)}>
        <button className="z-20 absolute top-4 right-4 text-white hover:text-light-blue dark:hover:text-red">
          <IconX size={24} />
        </button>
      </div>

      <main className="z-20 flex flex-col bg-white min-w-[248px] px-4 py-6 text-black border-t-4 border-light-blue dark:border-red rounded">
        {children}
      </main>
    </div>
  )
}

export default Modal;