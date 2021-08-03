import blogService from '../../services/blogService'
import { ActionTypes } from '../constants/action-types'



export const initialBlogs = () => {
  return async (dispatch) => {
    const response = await blogService.getAll()
    console.log(response.data)
    dispatch({
      type: ActionTypes.INITIAL_BLOGS,
      data: response
    })
  }
}

export const createBlog = (newBlog) => {
  return {
    type: ActionTypes.CREATE_BLOG,
    newBlog,
  }
}

export const removeBlog = (id) => {
  return async dispatch => {
    try {
      await blogService.remove(id)
      dispatch({
        type: ActionTypes.REMOVE_BLOG,
        payload: id,
      })
    } catch (error) {
      console.log({ error })
      setNotification(error.response.data.error, 'logged out')
    }
  }
}

export const setNotification = (message) => {
  return {
    type: ActionTypes.SET_NOTIFICATION,
    payload: {
      message,
    }
  }
}

export const removeNotification = () => {
  return {
    type: ActionTypes.REMOVE_NOTIFICATION,
  }
}

export const likeBlog = (updatedBlog) => {
  return {
    type: ActionTypes.LIKE_BLOG,
    payload: updatedBlog,
  }
}

// export const addComment = (blog, comment) => {
//   return async dispatch => {
//     const updatedblog = await blogService.update(blog.id, { ...blog, comments : blog.comments.concat[comment] })
//     dispatch({
//       type: ActionTypes.ADD_COMMENT,
//       data: updatedblog, comment
//     })

//   }
// }
export const addComment = (updatedBlog) => {
  return {
    type: ActionTypes.ADD_COMMENT,
    data: updatedBlog,
  }
}