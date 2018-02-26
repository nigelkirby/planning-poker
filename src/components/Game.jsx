import { h } from 'hyperapp'
import { UserCard, VoteSection } from './index'

export default ({ game, user, actions }) => {
  const everyoneDone = game.players && Object.values(game.players).every(player => player.vote > 0)

  return (
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
            <div class="col-sm-9">
              <h3>Welcome, game has begun.</h3>
              {game.admin.uid === user.uid ? (
                <p>
                  Role: Scrum Master
                  <button
                    onclick={actions.showVotes}
                    class={!everyoneDone && !game.showVotes && 'hidden'}
                  >
                    Show Votes
                  </button>
                  <button onclick={actions.newRound} class={!game.showVotes && 'hidden'}>
                    New Round
                  </button>
                  <label for="end-modal" class="button">End Game</label>
                  <input id="end-modal" type="checkbox" />
                  <div class="modal">
                    <div class="card">
                      <label for="end-modal" class="close" />
                      <h3 class="section">Are you sure?</h3>
                      <button onclick={actions.endGame}>Yes, End Game</button>
                    </div>
                  </div>
                </p>
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
                            <button
                              class="inverse"
                              onclick={() => actions.removePlayer(player.uid)}
                            >
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
            <div class="col-sm-3">
              <h4>Scrum Master is</h4>
              <UserCard
                name={game.admin && game.admin.displayName}
                url={game.admin && game.admin.photoURL}
              />
              {game.players && (
                <div>
                  <h4>Players are</h4>
                  {Object.values(game.players).map(player => (
                    <UserCard name={player.displayName} url={player.photoURL} />
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
    </div>
  )
}
