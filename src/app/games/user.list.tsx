import styles from "@/app/games/user.list.module.css"

import type { User } from "@/types"

const User = ( { user, leader }:{ user:User.Item, leader:string })=>{
  const { displayName, uid } = user;
  return(
    <div className={styles.userContainer}>
      <span>{ displayName }</span>
      { leader == uid && (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <path d="M12 6l4 6l5 -4l-2 10h-14l-2 -10l5 4z" />
        </svg>
      ) }
    </div>
  )
}

export default function UserList({ players, leader }:{ players:{
  [key:string]:User.Item
}, leader:string }){

  console.log({leader})

  return(
    <div className={styles.userList}>
      {Object.keys(players).map(user=><User key={players[user].uid} {...{
        user:{
          ...players[user]
        },
        leader
      }}/>)}
    </div>
  )
}
