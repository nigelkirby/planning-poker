import { auth, githubAuthProvider, game } from '../firebase'

export default {
  set: user => () => user,
  signIn: () => async (state, actions) => {
    actions.set({ loading: true })
    // Don't have to handle response, we are hooked into listening for auth change
    await auth.signInWithPopup(githubAuthProvider)
    actions.set({ loading: false })
  },
  signOut: () => async (state, actions) => {
    actions.set({ loading: true })
    await game.child(`room/${state.uid}`).remove()
    await game.child(`players/${state.uid}`).remove()
    await auth.signOut()
    actions.set({ loading: false })
  },
}
