import { h } from 'hyperapp'

const voteOptions = [1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
const getPercent = (number, total) => Math.ceil(100 * (number / total))

export default ({ game }) => {
  const players = Object.values(game.players).sort((a, b) => a.vote > b.vote)

  const voteBuckets = voteOptions.map(val => players.filter(player => val === player.vote).length)
  const largestTotal = Math.max(...voteBuckets)
  return (
    <div class="row">
      <div class="col-sm-5">
        <p>
          <small>
            Lowest: {players[0].vote} <br />
            Highest: {players[players.length - 1].vote} <br />
            Mode: {voteOptions[voteBuckets.indexOf(largestTotal)]}
          </small>
        </p>
      </div>
      <div class="col-sm-7 chart">
        {voteBuckets.map((voteNumber, i) => (
          <div
            class={`tertiary bar-${getPercent(voteNumber, largestTotal) + 1}`}
            title={voteOptions[i]}
          />
        ))}
      </div>
    </div>
  )
}
