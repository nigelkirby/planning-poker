import { app } from 'hyperapp'
import actions from './actions'
import state from './state'
import view from './App.jsx'
import { database, auth } from './firebase'

const main = app(state, actions, view, document.body)

const startGameListner = () => {
  database.ref('game').on('value', snap => main.game.set(snap.val()))
}

auth.onAuthStateChanged((user) => {
  main.user.set(user)
  startGameListner()
})

export default main
