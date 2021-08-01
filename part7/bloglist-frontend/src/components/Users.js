import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { allUsers } from '../redux/reducers/userReducer'

const Users = () => {
  const usersList = useSelector(state => state.userReducer)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(allUsers())
  }, [dispatch])
  console.log(usersList)

  return (
    <div>
      <h2>Users</h2>
      { []
        .concat(usersList)
        .map( user =>
          // eslint-disable-next-line react/jsx-key
          <div key={user.id}>
            <Link to={`/users/${user.id}`}>
              {user.name}{'  '}{user.blogs.length}
            </Link>
          </div>
        )
      }
    </div>
  )
}

export default Users