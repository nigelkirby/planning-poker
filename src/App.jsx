import { h } from 'hyperapp'
import { Header } from './components'
// import { database } from './firebase'

/* eslint-disable-next-line no-unused-vars */
export default (state, actions) => (
  <div>
    <Header user={state.user.displayName} />
    {!state.user.displayName &&
      !state.user.isLoading && <button onclick={actions.user.signIn}>Sign In</button>}
    {state.user.isLoading && <div>Loading...</div>}
    {state.user.displayName && JSON.stringify(state.user)}
  </div>
)
