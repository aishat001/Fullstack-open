import React, { useEffect } from 'react'
import { Table } from 'react-bootstrap'
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
    <div className="container">
      <h2 className='mt-3 mb-4'>Users</h2>
      <Table striped>
        <tbody>
          {  []
            .concat(usersList)
            .map( user =>
              <tr key={user.id}>
                <td>
                  <Link to={`/users/${user.id}`}>
                    {user.name}{'  '}
                  </Link>
                </td>
                <td>
                  {user.blogs.length}
                </td>
              </tr>
            )}
        </tbody>
      </Table>

    </div>
  )
}

export default Users