import { h } from 'hyperapp'

export default ({ name }) => (
  <header class="row">
    <div class="col-sm-1">{name ? `Logged in: ${name}` : 'Please Log in'}</div>
  </header>
)
