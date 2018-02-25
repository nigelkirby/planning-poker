import { auth, githubAuthProvider } from '../firebase'

export default {
  set: user => () => user,
  toggleLoading: () => state => ({ isLoading: !state.isLoading }),
  signIn: () => async (state, actions) => {
    actions.toggleLoading()
    // Don't have to handle response, we are hooked into listening for auth change
    await auth.signInWithPopup(githubAuthProvider)
    actions.toggleLoading()
  },
}
