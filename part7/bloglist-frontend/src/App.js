import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
// import AUserBlogs from './components/AUserBlogs'
import BlogForm from './components/BlogForm'
import Blogs from './components/Blogs'
import Blog from './components/Blogs'
import Header from './components/Header'
import Notification from './components/Notification'
import Togglable from './components/Togglable'
import Users from './components/Users'
import { initialUser, login, logout } from './redux/reducers/loginReducer'
import { allUsers } from './redux/reducers/userReducer'
import blogService from './services/blogService'


const App = () => {
  const user = useSelector(state => state.loginReducer)
  // const users = useSelector(state => state.userReducer)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(allUsers())
    dispatch(initialUser())
  }, [dispatch])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      blogService.setToken(user.token)
    }
  }, [])

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
            <input id="username" type="text" name="username" value='aeeshah'/>
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
            {user.name} logged-in <button onClick={handleLogout}>logout</button>

            <Router key={Blog.id}>
              <Header/>
              <Switch key={Blog.id}>
                <Route path="/" exact component={Blogs}/>
                <Route exact path="/users/:id">
                  {/* <AUserBlogs users={users}/> */}
                </Route>
                <Users/>
              </Switch>
            </Router>

            <Togglable buttonLabel="create a new note">
              <BlogForm/>
            </Togglable>
          </div>
      }


    </div>
  )
}

export default App