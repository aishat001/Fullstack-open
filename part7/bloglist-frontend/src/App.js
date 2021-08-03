import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import BlogDetails from './components/BlogDetails'
import Blogs from './components/Blogs'
import Header from './components/Header'
import Notification from './components/Notification'
import Togglable from './components/Togglable'
import User from './components/User'
import Users from './components/Users'
import { initialUser, login, logout } from './redux/reducers/loginReducer'
import { allUsers } from './redux/reducers/userReducer'
// import blogService from './services/blogService'


const App = () => {
  const user = useSelector(state => state.loginReducer)
  const users = useSelector(state => state.userReducer)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(allUsers())
    dispatch(initialUser())
  }, [dispatch])

  const handleLogin = (e) => {
    e.preventDefault()
    const username = e.target.username.value
    const password = e.target.password.value
    dispatch(login(username, password))
  }
  const loginForm = () => (
    <div>
      <h1>Blogs</h1>
      <Togglable buttonLabel='click to Login'>
        <form onSubmit={handleLogin}>
          <div>
      username:
            <input id="username" type="text" name="username" value='Azeez'/>
          </div>
          <div>
      password:
            <input id="password" type="password" name="password" value='mypassword'/>
          </div>
          <button id="loginbtn" type="submit">login</button>
        </form>
      </Togglable>
    </div>
  )
  const handleLogout = (user) => {
    localStorage.clear(user)
    dispatch(logout())
  }

  return (
    <div>
      <Notification/>
      {
        user === null ?
          loginForm()

          :
          <div>
            <Router key={Blogs.id}>
              <Header user={user} handleLogout={handleLogout}/>
              <Switch>
                <Route exact path="/">
                  <Blogs />
                </Route>
                <Route exact path="/users">
                  <Users />
                </Route>
                <Route exact path="/users/:id">
                  <User users={users}/>
                </Route>
                <Route exact path="/blogs/:id">
                  <BlogDetails users={users}/>
                </Route>
                <Users/>
              </Switch>
            </Router>

          </div>
      }


    </div>
  )
}

export default App