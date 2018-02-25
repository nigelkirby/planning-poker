import { database } from '../firebase'

export default {
  set: game => () => game,
  toggleLoading: () => state => ({ loading: !state.loading }),
  startGame: () => async () => {
    await database.ref('game').set({ started: true })
  },
  endGame: () => async () => {
    await database.ref('game').set({ started: false })
  },
}
