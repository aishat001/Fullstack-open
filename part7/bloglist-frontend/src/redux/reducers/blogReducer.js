import { ActionTypes } from '../constants/action-types'


const blogReducer = (state = [], action) => {
  switch (action.type) {
  case ActionTypes.INITIAL_BLOGS:
    return action.blogs
  case ActionTypes.CREATE_BLOG:
    return [...state, action.newBlog]
  case 'REMOVE_BLOG':
    return state.filter(blog => blog.id !== action.payload)
  case 'LIKE_BLOG':
    return state.map(blog => blog.id === action.payload.id ? { ...blog, likes : blog.likes + 1 } : blog )
  default:
    return state
  }
}

export default blogReducer