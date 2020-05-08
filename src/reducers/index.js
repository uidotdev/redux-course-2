import { combineReducers } from 'redux'
import authedUser from './authedUser'
import users from './users'

export default combineReducers({
  authedUser,
  users,
})