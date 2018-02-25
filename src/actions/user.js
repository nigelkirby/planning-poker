import { auth, githubAuthProvider } from '../firebase'

export default {
  toggleLoading: () => state => ({ isLoading: !state.isLoading }),
  signIn: () => async (state, actions) => {
    actions.toggleLoading()
    const res = await auth.signInWithPopup(githubAuthProvider)
    actions.toggleLoading()
    actions.setUser(res.user)
  },
  setUser: user => () => user,
}
