import { combineReducers } from 'redux'
import authUser from './authuser'
import users from './user'
import { loadingBarReducer} from 'react-redux-loading'

export default combineReducers ({
  authUser,
  users,
  loadingBar: loadingBarReducer
})