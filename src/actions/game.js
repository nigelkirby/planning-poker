import { database } from '../firebase'

export default {
  set: game => () => game,
  toggleLoading: () => state => ({ loading: !state.loading }),
  startGame: user => async () => {
    await database.ref('game/started').set(true)
    await database.ref('game/admin').set(user)
  },
  endGame: () => async () => {
    await database.ref('game').set({
      started: false,
      loading: false,
      admin: 0,
      players: '',
      showVotes: false,
    })
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
  removePlayer: uid => async (state) => {
    // Take into account that state won't get updated if all players go away
    if (Object.values(state.players).length === 1 && state.players[uid]) {
      await database.ref('game/players/').set('')
    } else {
      await database.ref(`game/players/${uid}`).remove()
    }
  },
}
