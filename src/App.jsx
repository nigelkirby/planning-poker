import { h } from 'hyperapp'
import { Header, Game } from './components'

export default (state, actions) => (
  <div>
    <Header name={state.user.displayName} />
    {!state.user.displayName &&
      !state.user.loading && <button onclick={actions.user.signIn}>Sign In</button>}
    {state.user.loading && <div>Loading...</div>}
    {state.user.displayName && <Game game={state.game} user={state.user} actions={actions.game} />}
  </div>
)
