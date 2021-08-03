/* eslint-disable no-case-declarations */
import { ActionTypes } from '../constants/action-types'


const blogReducer = (state = [], action) => {
  switch (action.type) {
  case ActionTypes.INITIAL_BLOGS:
    return action.data

  case ActionTypes.CREATE_BLOG:
    return [...state, action.newBlog]

  case ActionTypes.REMOVE_BLOG:
    return state.filter(blog => blog.id !== action.payload)

  case ActionTypes.LIKE_BLOG:
    return state.map(blog => blog.id === action.payload.id ? { ...blog, likes : blog.likes + 1 } : blog )

  case ActionTypes.ADD_COMMENT:
    return state.map(blog => blog.id === action.data.id ? action.data : blog)
  default:
    return state
  }
}

export default blogReducer