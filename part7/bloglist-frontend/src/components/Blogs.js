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
    <div className="container">
      <h1 className="mt-4">Blog App</h1>
      <div className="mt-4 mb-4">
        <Togglable buttonLabel="create a new note">
          <BlogForm/>
        </Togglable>
      </div>

      {[]
        .concat(blogs)
        .map( blog =>
          <Link to={`/blogs/${blog.id}`} key={blog.id} className='blog col-9 col-md-8 col-lg-7'>
            {blog.title}
          </Link>
        )}
    </div>
  )
}

export default Blogs