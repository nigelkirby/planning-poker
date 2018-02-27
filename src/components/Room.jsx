import { h } from 'hyperapp'
import { UserCard } from './index'

export default ({ admin, players, room }) => (
  <div>
    <div>
      <h4>Scrum Master:</h4>
      {admin && <UserCard name={admin.displayName} url={admin.photoURL} style="border-color:red" />}
    </div>
    <div>
      <h4>Players:</h4>
      {players && Object.values(players).map(player => (
        <UserCard name={player.displayName} url={player.photoURL} key={player.uid} />
      ))}
    </div>
    <div>
      <h4>Observers:</h4>
      {room && Object.values(room)
        .filter(person => person.uid !== admin.uid)
        .filter(person => !Object.keys(players).includes(person.uid))
        .map(person => (
          <UserCard name={person.displayName} url={person.photoURL} key={person.uid} />
        ))}
    </div>
  </div>
)
