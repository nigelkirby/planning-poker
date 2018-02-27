import { h } from 'hyperapp'

const everyoneDone = players => Object.values(players).every(player => player.vote > 0)

export default ({
  players, showVotes, newRound, endGame, votesShowing,
}) => (
  <div>
    <p>Scrum Master Controls:</p>
    <div class="button-group">
      <button onclick={showVotes} class="small" disabled={!everyoneDone(players) && !votesShowing}>
        Show Votes
      </button>
      <button onclick={newRound} class="small" disabled={!votesShowing}>
        New Round
      </button>
      <label for="end-modal" class="button small">
        End Game
      </label>
    </div>
    <input id="end-modal" type="checkbox" />
    <div class="modal">
      <div class="card">
        <label for="end-modal" class="close" />
        <h3 class="section">Are you sure?</h3>
        <button onclick={endGame}>Yes, End Game</button>
      </div>
    </div>
  </div>
)
