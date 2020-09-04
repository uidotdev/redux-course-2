import * as React from 'react'
import {useSelector} from 'react-redux'

export default function LeaderBoard() {
  const users = useSelector((state) => state.users)
  const sorted = Object.keys(users)
  .map( (id) => {
    const {name, avatarURL, polls} = users[id]

    return {
      id,
      name,
      avatarURL,
      polls: polls.length,
      answers: users[id].answers.length
    }
  })
  .sort((a,b) => b.polls + b.answers - (a.polls - a.answers))
  console.log("Sorted", sorted)

  return (
    <ul>
      {sorted.map((user) => (
          <li className="user" key={user.id}>
            <img src={user.avatarURL} alt={`Avatar for ${user.name}`} />
            <div>
              <h1>{user.name}</h1>
              <p>{user.polls} Polls</p>
              <p>{user.answers} Answers</p>
            </div>
          </li>
      ))}
    </ul>
  )
}