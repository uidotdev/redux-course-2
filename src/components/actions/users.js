export const RECEIVE_USERS = 'RECEIVE_USERS'

export function receiverUsers (users) {
  return {
    type: RECEIVE_USERS,
    users
  }
}