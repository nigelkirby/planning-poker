import { h } from 'hyperapp'
import Login from './Login.jsx'

export default props => (
  <header class="row">
    <Login {...props} />
    <p>Planning Poker</p>
  </header>
)
