import { h } from 'hyperapp'
import { Header } from './components'

/* eslint-disable-next-line no-unused-vars */
export default (state, actions) => (
    <div>
      <Header username={state.user.username} />
      {!state.user.username &&
        !state.user.isLoading && <button onclick={actions.user.signIn}>Sign In</button>}
      {state.user.isLoading && <div>Loading...</div>}
      {state.user.username && JSON.stringify(state.user)}
    </div>
)
