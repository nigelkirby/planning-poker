import { h } from 'hyperapp'

export default ({ username = 'anon' }) => (
  <header class="row">
    <div class="col-sm-1">Logged in: {username}</div>
  </header>
)
