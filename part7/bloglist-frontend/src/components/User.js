import React from 'react'
import { useParams, useRouteMatch } from 'react-router-dom'


const User = ({ users }) => {
  const userMatch = useRouteMatch('/users/:id')
  const id = useParams().id
  const user = userMatch ? users.find(user => user.id === id) : null
  console.log(userMatch)

  if (!user) {
    return null
  }
  return (
    <div>
      <h3>{user.name}</h3>
      <p>added blogs</p>
      {
        user.blogs.map(blog =>
          <li key={blog.id}>
            {blog.title}
          </li>
        )
      }
    </div>
  )
}

export default User