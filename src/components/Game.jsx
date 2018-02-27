import { h } from 'hyperapp'
import { VoteSection, Room } from './index'

const everyoneDone = players => Object.values(players).every(player => player.vote > 0)

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
          <div class="col-md-9 col-sm-12">
            <h3>{game.title || 'Welcome to the game.'}</h3>
            {game.admin.uid === user.uid ? (
              <div>
                <p>Scrum Master Controls:</p>
                <div class="button-group">
                  <button
                    onclick={actions.showVotes}
                    class="small"
                    disabled={!everyoneDone(game.players) && !game.showVotes}
                  >
                    Show Votes
                  </button>
                  <button onclick={actions.newRound} class="small" disabled={!game.showVotes}>
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
                    <button onclick={actions.endGame}>Yes, End Game</button>
                  </div>
                </div>
              </div>
            ) : (
              (!game.players || !game.players[user.uid]) && (
                <p>
                  Join the game!
                  <button onclick={() => actions.becomePlayer(user)}>Join Game</button>
                </p>
              )
            )}
            {game.players &&
              Object.values(game.players).map(player => (
                <div class="card fluid">
                  <div class={player.vote ? 'section row darker' : 'section row'}>
                    <div class="col-sm-9">
                      <h4>{player.displayName}</h4>
                    </div>
                    <div className="col-sm-2">
                      {player.uid === user.uid &&
                        !game.showVotes && (
                          <button class="inverse" onclick={() => actions.removePlayer(player.uid)}>
                            Leave
                          </button>
                        )}
                    </div>
                    <div class="col-sm-1">
                      <p>{game.showVotes && player.vote}</p>
                    </div>
                  </div>
                  {player.uid === user.uid && (
                    <VoteSection
                      uid={user.uid}
                      voteAction={actions.addVote}
                      currentVote={game.players[user.uid].vote}
                      votesLocked={game.showVotes}
                    />
                  )}
                </div>
              ))}
          </div>
          <div class="col-md-3 hidden-sm">
            <Room admin={game.admin} players={game.players} room={game.room} />
          </div>
        </div>
      )}
  </div>
)
