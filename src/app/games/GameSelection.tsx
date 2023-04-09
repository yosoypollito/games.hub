import gamesDict from "@/app/games/games.dict"
import styles from "@/app/games/games.hub.module.css"

export default function GameSelection(){

  const changeGame = async (game:string)=>{
    //const { startData } = gamesDict[game];

    //await updateDoc(doc(db, "rooms", room.id),{
    //game:game,
    //gameData:{
    //...startData,
    //turn:{
    //uid:user.uid,
    //displayName:user.uid
    //}
    //}
    //})
  }

  return(
    <>
      {Object.keys(gamesDict).map(game=>{
        const { label } = gamesDict[game];

        return (
          <div key={game} className={styles.gameIcon} onClick={()=>changeGame(game)}>
            {label}
          </div>
        )
      })}
    </>
  )
}
