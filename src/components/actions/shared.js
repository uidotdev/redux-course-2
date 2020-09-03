import {getInitialData} from '../../utils/api'
import {setAuthUser} from '../actions/auth-user'
import {receiverUsers} from '../actions/users'
import {receivePolls} from '../actions/polls'
import  {showLoading, hideLoading} from 'react-redux-loading'

const AUTH_ID = 'adedeji'

export function handleInitialData() {
  return(dispatch) => {
    dispatch(showLoading())

    return getInitialData()
    .then( ({users, polls}) => {
      dispatch(hideLoading())
      dispatch(receiverUsers(users))
      dispatch(receivePolls(polls))
      dispatch(setAuthUser(AUTH_ID))
    })
  }
}