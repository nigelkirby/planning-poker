import { h } from 'hyperapp'

export default ({ user = 'anon' }) => (
  <header class="row">
    <div class="col-sm-1">Logged in: {user}</div>
  </header>
)
