import blogService from '../../services/blogService'
import loginService from '../../services/loginService'
import { setNotification } from '../actions/blogActions'
import { ActionTypes } from '../constants/action-types'

const loginReducer = (state = null, action) => {
  switch (action.type) {
  case ActionTypes.INITIAL_USER:
    return action.data
  case ActionTypes.LOG_IN:
    return action.data
  case ActionTypes.LOG_OUT:
    return null
  default:
    return state
  }
}

export const initialUser = () => {
  return async (dispatch) => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      blogService.setToken(user.token)
      dispatch({
        type: ActionTypes.LOG_IN,
        data: user
      })
    }
  }
}

export const login = (username, password) => {
  return async (dispatch) => {
    try {
      const user = await loginService.login({
        username,
        password,
      })
      console.log('logging in with', username, password, user)
      window.localStorage.setItem(
        'loggedBlogappUser', JSON.stringify(user)
      )
      dispatch({
        type: ActionTypes.LOG_IN,
        data: user
      })
    } catch(error) {
      dispatch(setNotification('you entered wrong credentials'))
    }
  }
}
export const logout = () => {
  return async (dispatch) => {
    try {
      window.localStorage.removeItem('loggedBlogappUser')
      dispatch({
        type: ActionTypes.LOG_OUT,
      })
    } catch (exception) {
      setNotification('you are logged out')
    }
  }
}
export default loginReducer