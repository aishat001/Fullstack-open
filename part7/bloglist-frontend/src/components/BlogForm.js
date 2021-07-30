import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { createBlog, setNotification } from '../redux/actions/blogActions'
import blogService from '../services/blogService'

const BlogForm = () => {
  const dispatch = useDispatch()

  useEffect( async() => {
    dispatch(createBlog(await blogService.create()))  }, [dispatch])

  const addBlog = (e) => {
    e.preventDefault()
    const target = e.target

    const getId = () => (100 * Math.random()).toFixed(0)

    const object = {
      title : e.target.title.value,
      author : e.target.author.value,
      url : e.target.url.value,
      likes: 0,
      id: getId()
    }
    dispatch(createBlog(object))
    target.title.value = ''
    target.author.value = ''
    target.url.value = ''

    dispatch(setNotification('a new note was added'))
    console.log(createBlog(object))
  }

  return (
    <form onSubmit={addBlog}>
      <h2>Create new Blog </h2>
      <div>
          Title:
        <input id="title" type="text" name="title" />
      </div><br></br>
      <div>
          Author:
        <input id="author" type="text" name="author" />
      </div><br></br>
      <div>
          Url:
        <input id="url" type="text" name="url"/>
      </div><br></br>
      <button type="submit">save</button>
    </form>
  )
}

export default BlogForm
