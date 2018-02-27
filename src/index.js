import { app } from 'hyperapp'
import actions from './actions'
import state from './state'
import view from './App.jsx'
import { auth, attachListener } from './firebase'

const main = app(state, actions, view, document.body)

auth.onAuthStateChanged(({ displayName, uid, photoURL }) => {
  const user = {
    displayName,
    uid,
    photoURL,
  }
  main.user.set(user)
  main.game.joinRoom(user)
  attachListener(main)
})

export default main
