import { database } from '../firebase'

export default {
  set: game => () => game,
  toggleLoading: () => state => ({ loading: !state.loading }),
  startGame: user => async () => {
    await database.ref('game').set({ started: true, admin: user })
  },
  endGame: () => async () => {
    await database.ref('game').set({ started: false, admin: 0 })
  },
  becomePlayer: user => async () => {
    await database.ref(`game/players/${user.uid}`).set(user)
  },
  addVote: ({ uid, vote }) => async () => {
    await database.ref(`game/players/${uid}/vote`).set(vote)
  },
  showVotes: () => async () => {
    await database.ref('game/showVotes').set(true)
  },
  newRound: () => async (state) => {
    await database.ref('game/showVotes').set(false)
    Object.values(state.players).forEach(async (player) => {
      await database.ref(`game/players/${player.uid}/vote`).set(0)
    })
  },
}
