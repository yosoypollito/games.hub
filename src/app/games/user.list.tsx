import styles from "@/app/games/user.list.module.css"

import type { User } from "@/types"

const User = ({ uid, displayName }:User.Item)=>{
  return(
    <div className={styles.userContainer}>
      <span>{ displayName }</span>
    </div>
  )
}

export default function UserList({ players }:{ players:{
  [key:string]:User.Item
} }){

  return(
    <div className={styles.userList}>
      {Object.keys(players).map(user=><User key={players[user].uid} {...{
        ...players[user]
      }}/>)}
    </div>
  )
}
