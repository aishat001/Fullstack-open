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

    dispatch(addComment(await blogService.update(blog.id, { ...blog, comments : blog.comments.concat([comment]) })))
    e.target.comment.value = ''
    dispatch(setNotification('new comment added successfuly'))

  }
  const handleRemoveBlog = (id) => {
    dispatch(removeBlog(id))
  }

  return (
    <div className="container">
      <h2 className='mt-4 mb-4'>Blog App</h2>
      {
        <div className="" key={blog.id}>
          <h1>{blog.title}</h1>
          <a href="#" target='_blank' className='mt-4 mb-4'>{blog.url}</a>
          <div className='mt-4 mb-2'> {blog.likes} likes</div>
          <button onClick={() => handleLikeButton(blog)}>like</button>{'  '}
          <button onClick={() => handleRemoveBlog(blog.id)}>Delete</button>

          <div className='mt-4 mb-5'> Added By: {blog.author}</div>
          <form onSubmit={handleComments}>
            <textarea type="text" name="comment" className="form-control col-8 col-lg-7 mb-2" id="floatingPassword" placeholder="comment"/>
            <button type="submit">add comment</button>
          </form>
          <h3 className='mt-3 mb-3'>comments</h3>
          {blog.comments.map(comment =>
            <li key={comment.id} >{comment}</li>)}
        </div>
      }
    </div>
  )
}

export default BlogDetails