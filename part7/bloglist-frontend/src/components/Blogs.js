import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../App.css'
import { initialBlogs, likeBlog, removeBlog } from '../redux/actions/blogActions'
import blogService from '../services/blogService'
import Notification from './Notification'
import Togglable from './Togglable'

const Blogs = () => {
  const blogs = useSelector(state => state.blog)
  const dispatch = useDispatch()

  useEffect( async() => {
    dispatch(initialBlogs(await blogService.getAll()))
  }, [dispatch])

  const handleLikeButton = async (blog) => {
    dispatch(likeBlog(await blogService.update(blog.id, { ...blog, likes : blog.likes + 1 })))
  }

  const handleRemoveBlog = (id) => {
    dispatch(removeBlog(id))
  }
  return (
    <div className="">
      { []
        .concat(blogs)
        .sort((a, b) => b.likes - a.likes)
        .map( blog =>
          <div className="blog" key={blog.id}>
            <div> Title: {blog.title}</div>
            <Togglable buttonLabel="view">
              <div> Link: {blog.url}</div>
              <div> has Likes: {blog.likes}</div><button onClick={() => handleLikeButton(blog)}>like</button>
              <div> Written By: {blog.author}</div>
              <button onClick={() => handleRemoveBlog(blog.id)}>Delete</button>
            </Togglable>

          </div>
        )
      }
      <Notification/>
    </div>
  )
}

export default Blogs