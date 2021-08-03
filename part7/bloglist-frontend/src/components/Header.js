import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({ user, handleLogout }) => {
  return (
    <div>
      <Link to='/'>Blogs</Link>{'  '}
      <Link to='/users'>Users</Link> {'  '}
      {user.name} logged-in
      <button onClick={handleLogout}>logout</button>
    </div>
  )
}

export default Header