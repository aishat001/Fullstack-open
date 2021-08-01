/* eslint-disable linebreak-style */
import React from 'react'
import PropTypes from 'prop-types'

const LoginForm = ({ handleLogin }) => {


  return (
    <div>
      <form onSubmit={handleLogin}>
        <div>
          username:
          <input id="username" type="text" name="username" />
        </div>
        <div>
          password:
          <input id="password" type="password" name="password" />
        </div>
        <button id="loginbtn" type="submit">login</button>
      </form>

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