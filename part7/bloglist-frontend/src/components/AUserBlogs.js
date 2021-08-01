import React from 'react'
import { useParams } from 'react-router-dom'


const AUserBlogs = ({ users }) => {
  const id = useParams().id
  const userMatch = users.find(user => user.id = Number(id))
  if (userMatch === null) {
    return null
  }
  return (
    <div>
      {/* <h3>{userMatch.name}</h3>
      <p>added blogs</p>
      {
        userMatch.blogs.map(blog =>
          <li key={blog.id}>
            {blog.title}
          </li>
        )
      } */}
    </div>
  )
}

export default AUserBlogs