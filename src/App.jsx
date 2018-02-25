import { h } from 'hyperapp'
import { Header, Game } from './components'

export default (state, actions) => (
  <div>
    <Header name={state.user.displayName} />
    {!state.user.displayName &&
      !state.user.isLoading && <button onclick={actions.user.signIn}>Sign In</button>}
    {state.user.isLoading && <div>Loading...</div>}
    {state.user.displayName && (
      <Game
        game={state.game}
        uid={state.user.uid}
        startGame={actions.game.startGame}
        endGame={actions.game.endGame}
      />
    )}
  </div>
)
