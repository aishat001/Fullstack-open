import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import BlogForm from './components/BlogForm'
import Blog from './components/Blogs'
import Header from './components/Header'
import Notification from './components/Notification'
import Togglable from './components/Togglable'
import Users from './components/Users'


const App = () => {

  return (
    <div>
      <Router key={Blog.id}>
        <Header/>
        <Switch key={Blog.id}>
          <Route path="/" exact component={Blog}/>
          <Route path="/users" exact component={Users}/>
          <Route>404 not found</Route>
        </Switch>
      </Router>
      <Notification />

      <Togglable buttonLabel="create a new note">
        <BlogForm/>
      </Togglable>
    </div>
  )
}

export default App