import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Leaderboard from './Leaderboard'
import Dashboard from './Dashboard'
import AddPoll from './AddPoll'
import Nav from './Nav'
import Poll from './Poll'

export default function App() {
  const dispatch = useDispatch()
  const loading = useSelector((state) => state.authedUser === null)

  React.useEffect(() => {
    dispatch(handleInitialData())
  }, [dispatch])

  return (
    <Router>
      <div className='container'>
        <Nav />
        {loading === true
          ? null
          : <div>
              <Route path='/' exact>
                <Dashboard />
              </Route>
              <Route path='/leaderboard'>
                <Leaderboard />
              </Route>
              <Route path='/polls/:id'>
                <Poll />
              </Route>
              <Route path='/add'>
                <AddPoll />
              </Route>
            </div>}
      </div>
    </Router>
  )
}