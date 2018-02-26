import { h } from 'hyperapp'

export default ({ name, url }) => (
  <div class="card fluid">
    <p>
      <img src={url} width="30" /> {name}
    </p>
  </div>
)
