import * as React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {handleInitialData} from './actions/shared'
import {BrowserRouter as Router} from 'react-router-dom'
import LeaderBoard from './LeaderBoard'
import Dashboard from './Dashboard'

export default function App() {
  const dispatch = useDispatch()
  const loading = useSelector((state) => state.authUser === null)

  React.useEffect(() => {
    dispatch(handleInitialData())
  }, [dispatch])

  const store = useSelector( (store) => store)
  console.log("Store", store)
  return (
    <Router>
    <div className="container">
        {loading === true
          ? null
          : <Dashboard />
        }
    </div>
    </Router>
  )
}