import { h } from 'hyperapp'
import { Room, PlayerCard, AdminControls, GameControls } from './index'

export default ({ game, user, actions }) => (
  <div class="row">
    <div class="col-md-9 col-sm-12">
      <h3>{game.title || 'Welcome to the game.'}</h3>
      {!game.loading && (
        <GameControls
          user={user}
          game={game}
          startGame={actions.startGame}
          becomePlayer={actions.becomePlayer}
          removePlayer={actions.removePlayer}
        />
      )}
      {!game.loading &&
        game.admin &&
        game.admin.uid === user.uid && (
          <AdminControls
            players={game.players}
            showVotes={actions.showVotes}
            newRound={actions.newRound}
            endGame={actions.endGame}
            votesShowing={game.showVotes}
          />
        )}
      {!game.loading &&
        game.admin &&
        game.players &&
        Object.values(game.players).map(player => (
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
    <div class="col-md-3">
      {!game.loading && <Room admin={game.admin} players={game.players} room={game.room} />}
    </div>
  </div>
)
