import InviteFriend from "@/app/rooms/invite.friend";

import styles from "@/app/rooms/[id]/room.hub.module.css"

export default function Room({ params, children }:{ params:{ id:string }; children:React.ReactNode }){

  return (
      <main className={styles.roomHub}>
        <InviteFriend params={params}/>

        {children}
      </main>
  )
}
