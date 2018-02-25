import { h } from 'hyperapp'
import { UserCard } from './index'

export default ({ game, user, actions }) => (
  <div>
    {!game.loading &&
      !game.started && (
        <div class="row">
          <div class="col-sm-12">
            <h1>Game not yet started</h1>
            <p>Scrum Master, please start a game. Players, please wait for game to start</p>
            <button onclick={() => actions.startGame(user)}>Start Game</button>
          </div>
        </div>
      )}
    {!game.loading &&
      game.started && (
        <div class="row">
          {game.admin.uid === user.uid ? (
            <div class="col-sm-12">
              You are the Scrum Master
              <button onclick={actions.endGame}>End Game</button>
            </div>
          ) : (
            !user.amPlayer && (
              <div class="col-sm-12">
                Jump in the game!
                <button onclick={() => console.log('join')}>Join Game</button>
              </div>
            )
          )}
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
