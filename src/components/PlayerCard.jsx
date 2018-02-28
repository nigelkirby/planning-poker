import { h } from 'hyperapp'
import VoteSection from './VoteSection.jsx'

export default ({
  player, user, game, addVote,
}) => (
  <div class="card fluid">
    <div class={player.vote ? 'section row darker' : 'section row'}>
      <div class="col-sm-11">
        <h3>{player.displayName}</h3>
      </div>
      <div class="col-sm-1">
        <h3>{game.showVotes && player.vote}</h3>
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
