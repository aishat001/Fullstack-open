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
    <form onSubmit={addBlog} className="createForm col-sm-7 col-8">
      <h2>Create new Blog </h2>
      <div>
          Title:
        <input type="text" name="title" className="form-control" id="floatingPassword" placeholder="blog's title"/>
      </div><br></br>
      <div>
          Author:
        <input type="text" name="author" className="form-control" id="floatingPassword" placeholder="author name"/>
      </div><br></br>
      <div>
          Url:
        <input type="passtextword" name="url" className="form-control" id="floatingPassword" placeholder="blog's Url"/>
      </div><br></br>
      <button className="w-100 btn-lg" id="loginbtn" type="submit">save</button>
    </form>
  )
}

export default BlogForm
