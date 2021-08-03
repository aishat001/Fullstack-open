import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useRouteMatch } from 'react-router-dom'
import '../App.css'
import { addComment, initialBlogs, likeBlog, removeBlog, setNotification } from '../redux/actions/blogActions'
import blogService from '../services/blogService'


const BlogDetails = () => {
  const blogs = useSelector(state => state.blogs)
  const dispatch = useDispatch()

  useEffect( async() => {
    dispatch(initialBlogs())
  }, [dispatch])

  const blogMatch = useRouteMatch('/blogs/:id')
  const id = useParams().id
  const blog = blogMatch ? blogs.find(blog => blog.id === id) : null
  console.log(blog.id)

  const handleLikeButton = async (blog) => {
    dispatch(likeBlog(await blogService.update(blog.id, { ...blog, likes : blog.likes + 1 })))
  }

  const handleComments = async (e) => {
    e.preventDefault()
    const comment = e.target.comment.value
    console.log(blog)
    console.log(blog.id)
    dispatch(addComment(await blogService.update(blog.id, { ...blog, comments : blog.comments.concat([comment]) })))
    e.target.comment.value = ''
    dispatch(setNotification('new comment added successfuly'))

  }
  const handleRemoveBlog = (id) => {
    dispatch(removeBlog(id))
  }

  return (
    <div className="">
      <h2>Blog App</h2>
      {
        <div className="" key={blog.id}>
          <h1>{blog.title}</h1>
          <a href="#" target='_blank'>{blog.url}</a>
          <div> {blog.likes} likes</div>
          <button onClick={() => handleLikeButton(blog)}>like</button>{'  '}
          <button onClick={() => handleRemoveBlog(blog.id)}>Delete</button>

          <div> Added By: {blog.author}</div>
          <form onSubmit={handleComments}>
            <input type="text" name="comment" />
            <button type="submit">add comment</button>
          </form>
          {blog.comments.map(comment =>
            <li key={comment.id}>{comment}</li>)}
        </div>
      }
    </div>
  )
}

export default BlogDetails