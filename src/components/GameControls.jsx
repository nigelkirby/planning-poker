import { h } from 'hyperapp'

export default ({
  user, game, startGame, becomePlayer, removePlayer,
}) => {
  const amPlayer = Object.keys(game.players).includes(user.uid)
  const noAdmin = !Object.keys(game.room).includes(game.admin.uid)
  const amAdmin = game.admin.uid === user.uid
  return (
    <div class={amAdmin ? 'hidden' : 'button-group'}>
      {noAdmin &&
        !amPlayer && (
          <button onclick={() => startGame(user)} class="small">
            Become Scrum Master
          </button>
        )}
      {!amAdmin &&
        !amPlayer && (
          <button onclick={() => becomePlayer(user)} class="small">
            Join Players
          </button>
        )}
      {amPlayer && (
        <button onclick={() => removePlayer(user.uid)} class="small">
          Leave Game
        </button>
      )}
    </div>
  )
}
