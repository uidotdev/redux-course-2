import { combineReducers } from 'redux'
import authUser from './authuser'
import users from './user'
import { loadingBarReducer} from 'react-redux-loading'
import polls from '../reducer/polls'

export default combineReducers ({
  authUser,
  users,
  polls,
  loadingBar: loadingBarReducer
})