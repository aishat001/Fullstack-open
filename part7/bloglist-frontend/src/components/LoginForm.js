/* eslint-disable linebreak-style */
import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { login } from '../redux/reducers/loginReducer'
// import './LoginForm.css'
import Togglable from './Togglable'

const LoginForm = () => {
  const dispatch = useDispatch()

  const handleLogin = (e) => {
    e.preventDefault()
    const username = e.target.username.value
    const password = e.target.password.value
    dispatch(login(username, password))
  }

  return (
    <div className="form-signin">
      <h1>Blogs</h1>
      <Togglable buttonLabel='click to Login' className="toggle">
        <form onSubmit={handleLogin} className=''>
          <img className="mb-4" src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"/>

          <div className="form-floating">
            <input type="text" name="username" className="form-control" id="floatingInput" placeholder="username"/>
            <label For="floatingInput">username</label>
          </div>
          <div className="form-floating">
            <input type="password" name="password" className="form-control" id="floatingPassword" placeholder="password"/>
            <label For="floatingPassword">password</label>
          </div>
          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me"/> Remember me
            </label>
          </div>
          <button className="w-100 btn-lg" id="loginbtn" type="submit">log in</button>
        </form>
      </Togglable>

    </div>
  )
}

LoginForm.propTypes = {
  handleLogin: PropTypes.func.isRequired,
  username : PropTypes.string.isRequired,
  password : PropTypes.string.isRequired,
  setUsername : PropTypes.func.isRequired,
  setPassword : PropTypes.func.isRequired
}

export default LoginForm