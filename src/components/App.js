import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import { BrowserRouter as Router } from 'react-router-dom'
import Leaderboard from './Leaderboard'
import Dashboard from './Dashboard'
import AddPoll from './AddPoll'

export default function App() {
  const dispatch = useDispatch()
  const loading = useSelector((state) => state.authedUser === null)

  React.useEffect(() => {
    dispatch(handleInitialData())
  }, [dispatch])

  return (
    <Router>
      <div className='container'>
        {loading === true
          ? null
          : <AddPoll />
        }
      </div>
    </Router>
  )
}