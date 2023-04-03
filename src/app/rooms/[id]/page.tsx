import GamesHub from "@/app/games/games.hub"
import InviteFriend from "@/app/rooms/invite.friend";

export default function Room({ params }:{ params:{ id:string } }){
  return (
    <div>
      <InviteFriend params={params}/>

      <main>
        <GamesHub/>
      </main>
    </div>
  )
}
