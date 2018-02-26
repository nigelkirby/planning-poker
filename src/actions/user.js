import { auth, githubAuthProvider } from '../firebase'

export default {
  set: user => () => user,
  signIn: () => async (state, actions) => {
    actions.set({ loading: true })
    // Don't have to handle response, we are hooked into listening for auth change
    await auth.signInWithPopup(githubAuthProvider)
    actions.set({ loading: false })
  },
}
