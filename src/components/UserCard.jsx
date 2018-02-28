import { h } from 'hyperapp'

export default ({ name, url }) => (
  <div class="card fluid">
    <p>
      {url && <img src={url} width="30" alt={`${name} icon`} />} {name}
    </p>
  </div>
)
