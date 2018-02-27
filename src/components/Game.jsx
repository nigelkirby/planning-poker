import { h } from 'hyperapp'
import { Room, PlayerCard, AdminControls } from './index'

export default ({ game, user, actions }) => (
  <div class="row">
    {!game.loading &&
      !game.started && (
        <div class="col-md-9 col-sm-12">
          <h1>Game not yet started</h1>
          <p>Scrum Master, please start a game. Players, please wait for game to start</p>
          <button onclick={() => actions.startGame(user)}>Start Game</button>
        </div>
      )}
    {!game.loading &&
      game.started && (
        <div class="col-md-9 col-sm-12">
          <h3>{game.title || 'Welcome to the game.'}</h3>
          {game.admin.uid === user.uid && (
            <AdminControls
              players={game.players}
              showVotes={actions.showVotes}
              newRound={actions.newRound}
              endGame={actions.endGame}
              votesShowing={game.showVotes}
            />
          )}
          {game.admin.uid !== user.uid &&
            (!game.players || !game.players[user.uid]) && (
              <p>
                Join the game!
                <button onclick={() => actions.becomePlayer(user)}>Join Game</button>
              </p>
            )}
          {Object.values(game.players).map(player => (
            <PlayerCard
              player={player}
              user={user}
              game={game}
              removePlayer={actions.removePlayer}
              addVote={actions.addVote}
              key={player.uid}
            />
          ))}
        </div>
      )}
    {!game.loading && (
      <div class="col-md-3 hidden-sm">
        <Room admin={game.admin} players={game.players} room={game.room} />
      </div>
    )}
  </div>
)
