import { app } from 'hyperapp'
import actions from './actions'
import state from './state'
import view from './App.jsx'
import { auth, attachListener, detachListeners } from './firebase'

const main = app(state, actions, view, document.body)

auth.onAuthStateChanged((user) => {
  if (user) {
    const { displayName, uid, photoURL } = user
    main.user.set({ displayName, uid, photoURL })
    main.game.joinRoom({ displayName, uid, photoURL })
    attachListener(main)
  } else {
    main.user.set({ displayName: '', uid: '', photoURL: '' })
    detachListeners()
  }
})

export default main
