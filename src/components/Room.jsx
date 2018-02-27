import { h } from 'hyperapp'
import { UserCard } from './index'

export default ({ admin, players, room }) => (
  <div>
    {admin && (
      <div>
        <h4>Scrum Master is</h4>
        <UserCard name={admin && admin.displayName} url={admin && admin.photoURL} />
      </div>
    )}
    {players && (
      <div>
        <h4>Players are</h4>
        {Object.values(players).map(player => (
          <UserCard name={player.displayName} url={player.photoURL} key={player.uid} />
        ))}
      </div>
    )}
    {room && (
      <div>
        <h4>Room:</h4>
        {Object.values(room).map(person => (
          <UserCard name={person.displayName} url={person.photoURL} key={person.uid} />
        ))}
      </div>
    )}
  </div>
)
