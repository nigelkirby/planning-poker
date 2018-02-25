import { h } from 'hyperapp'
import { UserCard } from './index'

export default ({
  game, startGame, endGame, user,
}) => (
  <div class="row">
    {game.admin.uid === user.uid && (
      <div class="col-sm-12">
        You are the Scrum Master
        <button onclick={endGame}>End Game</button>
      </div>
    )}
    {!game.loading &&
      !game.started && (
        <div>
          <h1>Game not yet started</h1>
          <p>Scrum Master, please start a game. Players, please wait for game to start</p>
          <button onclick={() => startGame(user)}>Start Game</button>
        </div>
      )}
    {!game.loading &&
      game.started && (
        <div class="row">
          <div class="col-sm-9">
            <h1>Welcome, game has begun. It started a while ago, where were you?</h1>
          </div>
          <div class="col-sm-3">
            <h4>Scrum Master is</h4>
            <UserCard
              name={game.admin && game.admin.displayName}
              url={game.admin && game.admin.photoURL}
            />
          </div>
        </div>
      )}
  </div>
)
