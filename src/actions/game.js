import { detachListeners, game as db } from '../firebase'

export default {
  set: game => () => game,
  joinRoom: user => async () => {
    await db.child(`room/${user.uid}`).set(user)
  },
  leaveRoom: user => async () => {
    await db.child(`room/${user.uid}`).remove()
  },
  startGame: user => async () => {
    await db.child('admin').set(user)
  },
  endGame: () => async (state, actions) => {
    await db.child('admin').set('')
    actions.newRound()
  },
  becomePlayer: user => async () => {
    await db.child(`players/${user.uid}`).set(user)
  },
  addVote: ({ uid, vote }) => async () => {
    await db.child(`players/${uid}/vote`).set(vote)
  },
  showVotes: () => async () => {
    await db.child('showVotes').set(true)
  },
  newRound: () => async (state) => {
    await db.child('showVotes').set(false)
    Object.values(state.players).forEach(async (player) => {
      if (player.uid) await db.child(`players/${player.uid}/vote`).set(0)
    })
  },
  removePlayer: uid => async (state) => {
    // Taking into account that state won't get updated if all players go away,
    // this is a slightly risky race condition, local state doesn't represent
    // remote state at all times.
    if (Object.values(state.players).length === 1 && state.players[uid]) {
      await db.child('players/').set('')
    } else {
      await db.child(`players/${uid}`).remove()
    }
  },
}
