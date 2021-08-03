import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import BlogDetails from './components/BlogDetails'
import Blogs from './components/Blogs'
import Header from './components/Header'
import LoginForm from './components/LoginForm'
import Notification from './components/Notification'
import User from './components/User'
import Users from './components/Users'
import { initialUser, logout } from './redux/reducers/loginReducer'
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

  const loginForm = () => (
    <div>
      <LoginForm />
    </div>
  )
  const handleLogout = (user) => {
    localStorage.clear(user)
    dispatch(logout())
  }

  return (
    <div className="">
      <Notification />
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