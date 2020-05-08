import * as React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Dashboard () {
  const [list, setList] = React.useState('unanswered')
  const authedUser = useSelector((state) => state.authedUser)
  const users = useSelector((state) => state.users)
  const polls = useSelector((state) => state.polls)

  const answers = users[authedUser].answers

  const answered = answers.map((id) => polls[id])
    .sort((a,b) => b.timestamp - a.timestamp)

  const unanswered = Object.keys(polls)
    .filter((id) => !answers.includes(id))
    .map((id) => polls[id])
    .sort((a,b) => b.timestamp - a.timestamp)

  const questions = { answered, unanswered }

  return (
    <React.Fragment>
      <div className='dashboard-toggle'>
        <button
          style={{
            textDecoration: list === 'unanswered'
              ? 'underline'
              : null
          }}
          onClick={() => setList('unanswered')}>
            Unanswered
        </button>
        <span> | </span>
        <button
          style={{
            textDecoration: list === 'answered'
              ? 'underline'
              : null
            }}
          onClick={() => setList('answered')}>
            Answered
        </button>
      </div>
      <ul className='dashboard-list'>
        {questions[list].map((poll) => (
          <li key={poll.id}>
            <Link to={`polls/${poll.id}`}>
              {poll.question}
            </Link>
          </li>
        ))}
      </ul>
    </React.Fragment>
  )
}