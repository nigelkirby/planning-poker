import { h } from 'hyperapp'
import { Header, Game } from './components'

export default (state, actions) => (
  <div ondestroy={actions.game.leaveRoom}>
    <Header user={state.user} signIn={actions.user.signIn} signOut={actions.user.signOut} />
    {state.user.displayName && <Game game={state.game} user={state.user} actions={actions.game} />}
  </div>
)
