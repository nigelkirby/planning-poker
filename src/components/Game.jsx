import { h } from 'hyperapp'
import { Room, PlayerCard, AdminControls, GameControls, GameStats } from './index'

export default ({ game, user, actions }) => (
  <div class="row">
    {!game.loading && [
      <div class="col-md-9 col-sm-12">
        <h3>{game.title || 'Welcome to the game.'}</h3>
        <GameControls
          user={user}
          game={game}
          startGame={actions.startGame}
          becomePlayer={actions.becomePlayer}
          removePlayer={actions.removePlayer}
        />
        {game.admin && [
          game.admin.uid === user.uid && (
            <AdminControls
              players={game.players}
              showVotes={actions.showVotes}
              newRound={actions.newRound}
              endGame={actions.endGame}
              votesShowing={game.showVotes}
            />
          ),
          game.showVotes && game.players && <GameStats game={game} />,
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
            )),
        ]}
      </div>,
      <div class="col-md-3">
        <Room admin={game.admin} players={game.players} room={game.room} />
      </div>,
    ]}
  </div>
)
