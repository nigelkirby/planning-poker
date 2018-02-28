import { h } from 'hyperapp'

export default ({
  user, game, startGame, becomePlayer, removePlayer,
}) => {
  const amPlayer = Object.keys(game.players).includes(user.uid)
  const noAdmin = !Object.keys(game.room).includes(game.admin.uid)
  return (
    <div>
      {noAdmin && !amPlayer && <button onclick={() => startGame(user)}>Become SM</button>}
      {game.admin.uid !== user.uid &&
        !amPlayer && <button onclick={() => becomePlayer(user)}>Join Players</button>}
      {amPlayer && <button onclick={() => removePlayer(user.uid)}>Leave Game</button>}
    </div>
  )
}
