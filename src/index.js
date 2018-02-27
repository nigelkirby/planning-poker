import { app } from 'hyperapp'
import actions from './actions'
import state from './state'
import view from './App.jsx'
import { auth, attachListener } from './firebase'

const main = app(state, actions, view, document.body)

auth.onAuthStateChanged(({ displayName, uid, photoURL }) => {
  main.user.set({
    displayName,
    uid,
    photoURL,
  })
  attachListener(main)
})

export default main
