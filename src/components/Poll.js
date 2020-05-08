import * as React from 'react'
import { handleAddAnswer } from '../actions/answers'
import { getPercentage, getTextKeys, getVoteKeys } from '../utils/helpers'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

export default function Poll () {
  const { id } = useParams()
  const dispatch = useDispatch()
  const authedUser = useSelector((state) => state.authedUser)
  const users = useSelector((state) => state.users)
  const polls = useSelector((state) => state.polls)

  const poll = polls[id]

  if (!poll) {
    return <p>This poll doesn't exist</p>
  }

  const voteKeys = getVoteKeys()

  const authorAvatar = users[poll.author].avatarURL

  const vote = voteKeys.reduce((vote, key) => {
    if (poll[key].includes(authedUser)) {
      return key[0]
    }

    return vote === null ? null : vote
  }, null)

  const totalVotes = voteKeys
    .reduce((total, key) => total + poll[key].length, 0)

  const handleAnswer = (answer) => {
    if (vote === null) {
      dispatch(handleAddAnswer({
        authedUser,
        answer,
        id: poll.id,
      }))
    }
  }

  return (
    <div className='poll-container'>
      <h1 className='question'>{poll.question}</h1>
      <div className='poll-author'>
        By <img src={authorAvatar} alt="Author's avatar" />
      </div>
      <ul>
        {getTextKeys().map((key) => {
          const count = poll[key[0] + 'Votes'].length

          return (
            <li
              onClick={() => handleAnswer(key[0])}
              className={`option ${vote === key[0] ? 'chosen' : ''}`}
              key={key}>
                {vote === null
                  ? poll[key]
                  : <div className='result'>
                      <span>{poll[key]}</span>
                      <span>{getPercentage(count ,totalVotes)}% ({count})</span>
                    </div>}
              </li>
            )
        })}
      </ul>
    </div>
  )
}