import styles from "./TicTacToe.module.css"

export default function Square({ index, children, updateBoard }:{ index:number; children:React.ReactNode; updateBoard:(i:number)=>void}){

  return (
    <div className={styles.square} onClick={()=>updateBoard(index)}>
      { children }
    </div>
  )
}
