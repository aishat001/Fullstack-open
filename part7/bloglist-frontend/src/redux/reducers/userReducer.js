import userService from '../../services/userService'
import { ActionTypes } from '../constants/action-types'

const userReducer = (state = [] , action) => {
  switch (action.type) {
  case ActionTypes.ALL_USERS:
    return action.data
  default:
    return state
  }
}

export const allUsers = () => {
  return async (dispatch) => {
    const response = await userService.getAll()
    dispatch({
      type: ActionTypes.ALL_USERS,
      data: response
    })
  }
}



export default userReducer