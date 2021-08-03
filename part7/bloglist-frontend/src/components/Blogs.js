import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { initialBlogs } from '../redux/actions/blogActions'
import '../App.css'
import BlogForm from './BlogForm'
import Togglable from './Togglable'
import { Link } from 'react-router-dom'


const Blogs = () => {
  const blogs = useSelector(state => state.blogs)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initialBlogs())
  }, [])

  return (
    <div>
      <h1>Blog App</h1>
      <Togglable buttonLabel="create a new note">
        <BlogForm/>
      </Togglable>
      {[]
        .concat(blogs)
        .map( blog =>
          <Link to={`/blogs/${blog.id}`} key={blog.id} className='blog'>
            {blog.title}
          </Link>
        )}
    </div>
  )
}

export default Blogs