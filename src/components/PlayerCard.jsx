import { h } from 'hyperapp'
import VoteSection from './VoteSection.jsx'

export default ({
  player, user, game, removePlayer, addVote,
}) => (
  <div class="card fluid">
    <div class={player.vote ? 'section row darker' : 'section row'}>
      <div class="col-sm-9">
        <h4>{player.displayName}</h4>
      </div>
      <div className="col-sm-2">
        {player.uid === user.uid &&
          !game.showVotes && (
            <button class="inverse" onclick={() => removePlayer(player.uid)}>
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
        voteAction={addVote}
        currentVote={game.players[user.uid].vote}
        votesLocked={game.showVotes}
      />
    )}
  </div>
)
