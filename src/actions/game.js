import { detachListeners, game } from '../firebase'

export default {
  set: gameState => () => gameState,
  toggleLoading: () => state => ({ loading: !state.loading }),
  joinRoom: user => async () => {
    await game.child(`room/${user.uid}`).set(user)
  },
  leaveRoom: () => async () => {
    await detachListeners()
  },
  startGame: user => async () => {
    await game.child('started').set(true)
    await game.child('admin').set(user)
  },
  endGame: () => async () => {
    await game.set({
      started: false,
      loading: false,
      admin: 0,
      players: '',
      showVotes: false,
    })
  },
  becomePlayer: user => async () => {
    await game.child(`players/${user.uid}`).set(user)
  },
  addVote: ({ uid, vote }) => async () => {
    await game.child(`players/${uid}/vote`).set(vote)
  },
  showVotes: () => async () => {
    await game.child('showVotes').set(true)
  },
  newRound: () => async (state) => {
    await game.child('showVotes').set(false)
    Object.values(state.players).forEach(async (player) => {
      await game.child(`players/${player.uid}/vote`).set(0)
    })
  },
  removePlayer: uid => async (state) => {
    // Taking into account that state won't get updated if all players go away,
    // this is a slightly risky race condition, local state doesn't represent
    // remote state at all times.
    if (Object.values(state.players).length === 1 && state.players[uid]) {
      await game.child('players/').set('')
    } else {
      await game.child(`players/${uid}`).remove()
    }
  },
}
