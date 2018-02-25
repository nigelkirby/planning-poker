import { database } from '../firebase'

export default {
  set: game => () => game,
  toggleLoading: () => state => ({ loading: !state.loading }),
  startGame: uid => async () => {
    await database.ref('game').set({ started: true, adminId: uid })
  },
  endGame: () => async () => {
    await database.ref('game').set({ started: false, adminId: 0 })
  },
}
