import { h } from 'hyperapp'

export default ({ game, startGame }) => (
  <div class="row">
    {!game.started && (
      <div>
        <h1>Game not yet started</h1>
        <p>Scrum Master, please start a game. Players, please wait for game to start</p>
        <button onclick={startGame}>Start Game</button>
      </div>
    )}
    {game.started && (
      <div>
        <h1>Welcome, game has begun.</h1>
      </div>
    )}
  </div>
)
