import { h } from 'hyperapp'

const voteOptions = [1, 2, 3, 5, 8, 13, 21, 40, 100]

export default ({
  uid, voteAction, currentVote, votesLocked,
}) => (
  <div class={(votesLocked && 'hidden') || 'button-group'}>
    {voteOptions.map(el => (
      <button
        class={currentVote === el && 'inverse'}
        onclick={() => voteAction({ uid, vote: currentVote === el ? 0 : el })}
      >
        {el}
      </button>
    ))}
  </div>
)
