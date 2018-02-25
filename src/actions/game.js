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
}
