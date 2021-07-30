
const notificationReducer = (state = null , action ) => {
  switch (action.type) {
  case 'SET_NOTIFICATION':
    return action.payload.message
  case 'REMOVE_NOTIFICATION':
    return null
  default:
    return state
  }
}

export default notificationReducer