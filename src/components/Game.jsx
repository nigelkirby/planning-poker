import { h } from 'hyperapp'

export default ({
  game, startGame, endGame, uid,
}) => (
  <div class="row">
    {game.adminId === uid && (
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
          <button onclick={() => startGame(uid)}>Start Game</button>
        </div>
      )}
    {!game.loading &&
      game.started && (
        <div>
          <h1>Welcome, game has begun.</h1>
        </div>
      )}
  </div>
)
